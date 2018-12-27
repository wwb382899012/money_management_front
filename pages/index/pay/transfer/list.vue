<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="search-form-box">
      <el-tooltip 
        :content="searchFormStatus" 
        style="position: fixed;top: 76px;right: 50px;" 
        class="item" 
        effect="light" 
        placement="top">
        <el-button 
          style="padding: 6px;"
          icon="el-icon-search" 
          type="default"
          circle
          @click="showSearchForm = !showSearchForm"></el-button>
      </el-tooltip>
      <el-form 
        v-show="showSearchForm"
        :inline="true" 
        v-model="searchForm" 
        label-width="100px" 
        label-position="left" 
        size="mini">
        <el-form-item label="指令发起人">
          <el-input 
            v-model="searchForm.order_create_people" 
            placeholder="请输入指令发起人"></el-input>
        </el-form-item>
        <el-form-item label="付款状态">
          <el-select 
            v-model="searchForm.pay_status" 
            placeholder="选择付款状态" 
            filterable
            clearable>
            <el-option 
              label="未付款" 
              value="0"></el-option>
            <el-option 
              label="付款中" 
              value="1"></el-option>
            <el-option 
              label="付款成功" 
              value="2"></el-option>
            <el-option 
              label="付款失败" 
              value="3"></el-option>
            <el-option 
              label="待确认" 
              value="10"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="指令到达时间">
          <el-date-picker 
            v-model="searchForm.apply_begin_time" 
            :value-format="datetimeFormat" 
            type="datetime" 
            placeholder="选择日期时间">
          </el-date-picker> -
          <el-date-picker 
            v-model="searchForm.apply_end_time" 
            :value-format="datetimeFormat" 
            type="datetime" 
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <br>
        <el-form-item label="付款方">
          <el-select 
            v-model="searchForm.pay_main_body_uuid" 
            placeholder="请选择付款方" 
            clearable 
            filterable
            @visible-change="payMainBodySelectToggle">
            <el-option 
              v-for="item in payMainBodyList" 
              :key="item.uuid" 
              :label="item.full_name" 
              :value="item.uuid">
            </el-option>
            <el-option 
              v-loading="payMainBodyLoading" 
              v-if="payMainBodyLoading" 
              key="payMainBodyLoading" 
              disabled 
              element-loading-spinner="el-icon-loading"
              label="" 
              value="loading"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款方">
          <el-select 
            v-model="searchForm.collect_main_body_uuid" 
            placeholder="请选择收款方" 
            clearable 
            filterable
            @visible-change="collectMainBodySelectToggle">
            <el-option 
              v-for="item in collectMainBodyList" 
              :key="item.uuid" 
              :label="item.full_name" 
              :value="item.uuid">
            </el-option>
            <el-option 
              v-loading="collectMainBodyLoading" 
              v-if="collectMainBodyLoading" 
              key="collectMainBodyLoading" 
              disabled 
              element-loading-spinner="el-icon-loading"
              label="" 
              value="loading"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="指令更新时间">
          <el-date-picker 
            v-model="searchForm.approve_begin_time" 
            :value-format="datetimeFormat" 
            type="datetime" 
            placeholder="选择日期时间">
          </el-date-picker> -
          <el-date-picker 
            v-model="searchForm.approve_end_time" 
            :value-format="datetimeFormat" 
            type="datetime" 
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <br>
        <el-form-item>
          <el-button 
            :disabled="loading" 
            type="primary" 
            @click="submitSearch">查询</el-button>
          <el-button 
            :disabled="loading" 
            type="default" 
            @click="handleReset">重置</el-button>
          <el-button 
            :disabled="exportLoading" 
            type="success" 
            @click="handleDownload">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      ref="orderList" 
      :data="orderList" 
      :header-cell-style="styleObject"
      :cell-style="styleObject" 
      :height="tableHeight"
      element-loading-text="拼命加载中" 
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)" 
      border>
      <el-table-column 
        label="操作" 
        width="170" 
        fixed>
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.order.PayTransferDetail') != -1"
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.uuid)">详情</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '0' && ($store.getters.auth == 'admin' || 
            $store.getters.auth.indexOf('com.jyblife.logic.bg.order.PayTransferReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerReview(scope.row.uuid)">审核</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '1' && ($store.getters.auth == 'admin' || 
            $store.getters.auth.indexOf('com.jyblife.logic.bg.order.PayTransferRReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerRReview(scope.row.uuid)">复核</el-button>
          <el-button 
            v-if="(scope.row.transfer_status == '19' || scope.row.need_ticket_back == '1') && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.order.PayTransferReceipt') != -1)" 
            size="mini"
            type="success" 
            @click="triggerUploadReceipt(scope.row.uuid)">回单</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '2' && scope.row.pay_status == '3' && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.order.PayTransferRReview') != -1)" 
            size="mini"
            type="success" 
            @click="triggerRReview(scope.row.uuid)">重试</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '2' && scope.row.pay_status == '10' && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.order.ConfirmStatus') != -1)" 
            size="mini"
            type="success" 
            @click="triggerConfirm(scope.row.uuid)">状态确认</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        prop="transfer_num" 
        label="资金交易编号" 
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="order_num" 
        label="指令编号" 
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="付款金额"
        width="220">
        <template slot-scope="scope">
          {{ [scope.row.amount, scope.row.currency] | filterCent2YuanCurrencyAmount }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="pay_main_body" 
        label="付款方"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="pay_bank_name" 
        label="付款方银行名称"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.pay_bank_name ? scope.row.pay_bank_name : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="pay_bank_account" 
        label="付款方银行账号"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.pay_bank_account | filterBankAccount }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="collect_main_body" 
        label="收款方"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="collect_bank_name" 
        label="收款方银行名称"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="collect_bank_account" 
        label="收款方银行账号"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.collect_bank_account | filterBankAccount }}
        </template>
      </el-table-column>
      <el-table-column 
        label="指令状态"
        width="120">
        <template slot-scope="scope">
          {{ payTransferStatusJson[scope.row.transfer_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="付款状态"
        width="80">
        <template slot-scope="scope">
          {{ payStatusJson[scope.row.pay_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="system_flag" 
        label="系统来源"
        width="80"></el-table-column>
      <el-table-column 
        prop="order_create_people" 
        label="指令发起人"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="transfer_pay_type" 
        label="付款类别"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="实付类型"
        width="100"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ realPayTypeJson[scope.row.real_pay_type] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="要求付款日" 
        width="100">
        <template slot-scope="scope">
          {{ scope.row.require_pay_datetime && scope.row.require_pay_datetime != "0000-00-00" ? scope.row.require_pay_datetime
          : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="币种"
        width="80">
        <template slot-scope="scope">
          {{ mformatCurrencyStr(scope.row.currency) }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="create_time" 
        label="指令到达时间" 
        width="160">
      </el-table-column>
      <el-table-column 
        prop="update_time"
        label="指令更新时间" 
        width="160">
      </el-table-column>
    </el-table>
    <div class="table-footer">
      <el-pagination 
        :current-page="pageSetting.page" 
        :page-sizes="pageSetting.size" 
        :page-size="pageSetting.limit" 
        :total="pageSetting.count"
        :layout="pageSetting.layout" 
        background
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getPayTransferList } from '@/api/pay';
import { getMainBodyList, getMainBodyEffectList } from '@/api/mainBody';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        order_create_people: '',
        pay_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        pay_main_body_uuid: '',
        collect_main_body_uuid: ''
      },
      payTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        19: '待上传回单',
        20: '已完结'
      },
      isFinancingJson: {
        1: '是',
        0: '否'
      },
      orderList: [],
      payMainBodyList: [],
      payMainBodyLoading: false,
      collectMainBodyList: [],
      collectMainBodyLoading: false,
      exportLoading: false,
      exportFilename: 'export_pay_transfer_list_'
    };
  },
  created() {
    this.getPayTransferListData();
  },
  methods: {
    // 表格数据
    getPayTransferListData(mshowLoading) {
      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜索付款调拨指令列表...');

      let params = {
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      // 添加搜索条件
      for (let key in this.searchForm) {
        if (this.searchForm[key] !== '') {
          params[key] = this.searchForm[key];
        }
      }

      getPayTransferList(params)
        .then(res => {
          this.orderList = res.data.data;
          this.pageSetting.page = parseInt(res.data.page);
          this.pageSetting.count = parseInt(res.data.count);
          this.loading = false;
          this.mhideLoading();
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },

    // 表格操作
    triggerDetail(uuid) {
      this.$router.push({
        name: 'payTransferDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerReview(uuid) {
      this.$router.push({
        name: 'payTransferReview',
        params: {
          uuid: uuid
        }
      });
    },
    triggerRReview(uuid) {
      this.$router.push({
        name: 'payTransferRReview',
        params: {
          uuid: uuid
        }
      });
    },
    triggerConfirm(uuid) {
      this.$router.push({
        name: 'payTransferConfirm',
        params: {
          uuid: uuid
        }
      });
    },
    triggerUploadReceipt(uuid) {
      this.$router.push({
        name: 'payTransferReceipt',
        params: {
          uuid: uuid
        }
      });
    },

    // 表格分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getPayTransferListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getPayTransferListData();
    },

    // 搜索
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getPayTransferListData();
    },
    // 重置
    handleReset() {
      Object.assign(this.searchForm, {
        order_create_people: '',
        transfer_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        pay_main_body_uuid: '',
        collect_main_body_uuid: ''
      });
      this.pageSetting.page = 1;
      this.getPayTransferListData();
    },

    // 导出
    handleDownload() {
      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;

      this.mconfirm('确定要导出当前搜索条件的付款调拨列表数据吗?')
        .then(() => {
          this.mshowLoading('正在导出数据...');
          this.getExportData();
        })
        .catch(() => {
          this.exportLoading = false;
        });
    },

    // 获取导出数据
    getExportData() {
      let params = {
        page: 1,
        limit: -1
      };

      // 添加搜索条件
      for (let key in this.searchForm) {
        if (this.searchForm[key] != '') {
          params[key] = this.searchForm[key];
        }
      }

      getPayTransferList(params)
        .then(res => {
          this.exportData(res.data.data);
        })
        .catch(() => {
          this.exportLoading = false;
          this.mhideLoading();
        });
    },
    // 导出文件
    exportData(list) {
      if (list.length) {
        const tHeader = [
          '资金交易编号',
          '指令编号',
          '付款金额',
          '付款方',
          '付款方银行名称',
          '付款方银行账号',
          '收款方',
          '收款方银行名称',
          '收款方银行账号',
          '指令状态',
          '付款状态',
          '系统来源',
          '指令发起人',
          '付款类别',
          '实付类型',
          '要求付款日',
          '币种',
          '指令到达时间',
          '指令更新时间'
        ];
        const filterList = [
          'transfer_num',
          'order_num',
          'amount',
          'pay_main_body',
          'pay_bank_name',
          'pay_bank_account',
          'collect_main_body',
          'collect_bank_name',
          'collect_bank_account',
          'transfer_status',
          'pay_status',
          'system_flag',
          'order_create_people',
          'transfer_pay_type',
          'real_pay_type',
          'require_pay_datetime',
          'currency',
          'create_time',
          'update_time'
        ];
        const originData = list;
        const data = this.formatData(filterList, originData);
        import('@/utils/Export2Excel')
          .then(excel => {
            excel.export_json_to_excel({
              header: tHeader,
              data,
              filename:
                this.exportFilename +
                this.filterDateTime(Date.now()).replace(/:|\s|-/g, '_')
            });
            this.mhideLoading();
            this.$message.success('导出成功');
            this.exportLoading = false;
          })
          .catch(() => {
            this.mhideLoading();
            this.exportLoading = false;
          });
      } else {
        this.mhideLoading();
        this.exportLoading = false;
        this.$message.warning('数据为空');
      }
    },
    // 格式化导出数据
    formatData(filterList, jsonData) {
      const data = jsonData.map(item => {
        return filterList.map(key => {
          if (key == 'pay_bank_account' || key == 'collect_bank_account') {
            return this.filterBankAccount(item[key]);
          }

          if (key == 'currency') {
            return this.mformatCurrencyStr(item[key]);
          }
          if (key == 'amount') {
            return this.filterCent2YuanCurrencyAmount([
              item[key],
              item['currency']
            ]);
          }
          if (key == 'real_pay_type') {
            return this.realPayTypeJson[item[key]];
          }
          if (key == 'required_pay_datetime') {
            return item[key] ? item[key] : '-';
          }
          if (key == 'transfer_status') {
            return this.payTransferStatusJson[item[key]];
          }
          if (key == 'pay_status') {
            return this.payStatusJson[item[key]];
          }

          return item[key];
        });
      });

      return data;
    },

    // 搜索数据
    getCollectMainBodyListData() {
      if (this.collectMainBodyLoading) {
        return false;
      }
      this.collectMainBodyLoading = true;
      getMainBodyList({
        page: 1,
        limit: -1
      })
        .then(res => {
          this.collectMainBodyList = res.data.data;
          this.collectMainBodyLoading = false;
        })
        .catch(() => {
          this.collectMainBodyLoading = false;
        });
    },
    collectMainBodySelectToggle(show) {
      if (
        show &&
        !this.collectMainBodyLoading &&
        !this.collectMainBodyList.length
      ) {
        this.getCollectMainBodyListData();
      }
    },
    getPayMainBodyListData() {
      if (this.payMainBodyLoading) {
        return false;
      }
      this.payMainBodyLoading = true;
      getMainBodyEffectList({
        page: 1,
        limit: -1,
        is_internal: 1
      })
        .then(res => {
          this.payMainBodyList = res.data.data;
          this.payMainBodyLoading = false;
        })
        .catch(() => {
          this.payMainBodyLoading = false;
        });
    },
    payMainBodySelectToggle(show) {
      if (show && !this.payMainBodyLoading && !this.payMainBodyList.length) {
        this.getPayMainBodyListData();
      }
    }
  }
};
</script>
