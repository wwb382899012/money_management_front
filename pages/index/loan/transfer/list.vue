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
            v-model="searchForm.transfer_create_people" 
            placeholder="请输入指令发起人"></el-input>
        </el-form-item>
        <el-form-item label="借款状态">
          <el-select 
            v-model="searchForm.loan_status" 
            placeholder="选择借款状态" 
            clearable
            filterable>
            <el-option 
              label="未借款"
              value="0"></el-option>
            <el-option 
              label="借款中"
              value="1"></el-option>
            <el-option 
              label="借款成功"
              value="2"></el-option>
            <el-option 
              label="借款失败"
              value="3"></el-option>
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
        <el-form-item label="借款方">
          <el-select 
            v-model="searchForm.loan_main_body_uuid" 
            placeholder="请选择借款方" 
            clearable 
            filterable
            @visible-change="loanMainBodySelectToggle">
            <el-option 
              v-for="item in loanMainBodyList" 
              :key="item.uuid" 
              :label="item.full_name" 
              :value="item.uuid">
            </el-option>
            <el-option 
              v-loading="loanMainBodyLoading" 
              v-if="loanMainBodyLoading" 
              key="loanMainBodyLoading" 
              disabled 
              element-loading-spinner="el-icon-loading"
              label="" 
              value="loading"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="贷款方">
          <el-select 
            v-model="searchForm.collect_main_body_uuid" 
            placeholder="请选择贷款方" 
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
        <el-form-item
          label="借款编号">
          <el-input placeholder="请输入借款编号" v-model="searchForm.loan_order_num"></el-input>
        </el-form-item>
        <el-form-item label="借款日期">
          <el-date-picker 
            v-model="searchForm.loan_begin_datetime" 
            :value-format="datedateFormat" 
            type="date" 
            placeholder="选择日期">
          </el-date-picker> -
          <el-date-picker 
            v-model="searchForm.loan_end_datetime" 
            :value-format="datedateFormat" 
            type="date" 
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
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
            :disabled="loading" 
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
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.LoanTransferDetail') != -1"
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.uuid)">详情</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '0' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.LoanTransferReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerReview(scope.row.uuid)">提交</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '5' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.LoanTransferRReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerRReview(scope.row.uuid)">审核</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '1' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.LoanTransferRRReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerRRReview(scope.row.uuid)">复核</el-button>
          <el-button 
            v-if="scope.row.need_ticket_back == '1' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.LoanTransferReceipt') != -1)" 
            size="mini"
            type="success" 
            @click="triggerUploadReceipt(scope.row.uuid)">回单</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '2' && scope.row.loan_status == '3' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.LoanTransferRRReview') != -1)" 
            size="mini"
            type="success" 
            @click="triggerRRReview(scope.row.uuid)">重试</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '2' && scope.row.loan_status == '10' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.ConfirmStatus') != -1)" 
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
        prop="loan_order_num" 
        label="借款编号" 
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="借款金额"
        width="220">
        <template slot-scope="scope">
          {{ [scope.row.amount, scope.row.currency] | filterCent2YuanCurrencyAmount }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="loan_main_body" 
        label="借款方"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="collect_main_body" 
        label="贷款方"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="指令状态"
        width="120">
        <template slot-scope="scope">
          {{ loanTransferStatusJson[scope.row.transfer_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="借款状态"
        width="80">
        <template slot-scope="scope">
          {{ loanPayStatusJson[scope.row.loan_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="system_flag" 
        label="系统来源"
        width="80"></el-table-column>
      <el-table-column 
        prop="transfer_create_people" 
        label="指令发起人"
        width="100"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="bs_background" 
        label="业务背景"
        width="120"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="借款币种"
        width="80">
        <template slot-scope="scope">
          {{ mformatCurrencyStr(scope.row.currency) }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="loan_datetime" 
        label="借款日期" 
        width="100">
      </el-table-column>
      <el-table-column 
        prop="forecast_datetime" 
        label="预计还款日" 
        width="100">
      </el-table-column>
      <el-table-column 
        label="利息率"
        width="150">
        <template slot-scope="scope">
          {{ scope.row.rate | filterPercentage }}
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
import { getLoanTransferList } from '@/api/loan';
import { getMainBodyEffectList, getMainBodyList } from '@/api/mainBody';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        transfer_create_people: '',
        loan_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        loan_main_body_uuid: '',
        collect_main_body_uuid: '',
        loan_begin_datetime: '',
        loan_end_datetime: '',
        loan_order_num: ''
      },
      loanTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        5: '待资金部负责人审核',
        20: '已完结'
      },
      orderList: [],
      collectMainBodyList: [],
      collectMainBodyLoading: false,
      loanMainBodyList: [],
      loanMainBodyLoading: false,
      exportLoading: false,
      exportFilename: 'export_loan_transfer_list_'
    };
  },
  created() {
    this.getLoanTransferListData();
  },
  methods: {
    // 表格数据
    getLoanTransferListData(mshowLoading) {
      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜索借款调拨列表...');

      let params = {
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      // 添加搜索条件
      for (let key in this.searchForm) {
        if (this.searchForm[key] != '') {
          params[key] = this.searchForm[key];
        }
      }

      getLoanTransferList(params)
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
        name: 'loanTransferDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerReview(uuid) {
      this.$router.push({
        name: 'loanTransferReview',
        params: {
          uuid: uuid
        }
      });
    },
    triggerRReview(uuid) {
      this.$router.push({
        name: 'loanTransferRReview',
        params: {
          uuid: uuid
        }
      });
    },
    triggerRRReview(uuid) {
      this.$router.push({
        name: 'loanTransferRRReview',
        params: {
          uuid: uuid
        }
      });
    },
    triggerConfirm(uuid) {
      this.$router.push({
        name: 'loanTransferConfirm',
        params: {
          uuid: uuid
        }
      });
    },
    triggerUploadReceipt(uuid) {
      this.$router.push({
        name: 'loanTransferReceipt',
        params: {
          uuid: uuid
        }
      });
    },

    // 表格分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getLoanTransferListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getLoanTransferListData();
    },

    // 搜索
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getLoanTransferListData();
    },
    // 重置搜索条件
    handleReset() {
      Object.assign(this.searchForm, {
        transfer_create_people: '',
        loan_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        loan_main_body_uuid: '',
        collect_main_body_uuid: '',
        loan_begin_datetime: '',
        loan_end_datetime: '',
        loan_order_num: ''
      });
      this.pageSetting.page = 1;
      this.getLoanTransferListData();
    },

    // 导出
    handleDownload() {
      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;
      this.mconfirm('确定要导出当前搜索条件的借款调拨列表数据吗?')
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

      getLoanTransferList(params)
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
          '借款编号',
          '借款金额',
          '借款方',
          '贷款方',
          '指令状态',
          '借款状态',
          '系统来源',
          '指令发起人',
          '业务背景',
          '借款币种',
          '借款日期',
          '预计还款日',
          '利息率',
          '指令到达时间',
          '指令更新时间'
        ];
        const filterList = [
          'transfer_num',
          'loan_order_num',
          'amount',
          'loan_main_body',
          'collect_main_body',
          'transfer_status',
          'loan_status',
          'system_flag',
          'transfer_create_people',
          'bs_background',
          'currency',
          'loan_datetime',
          'forecast_datetime',
          'rate',
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
          if (key == 'bs_background') {
            return item[key] ? item[key] : '-';
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
          if (key == 'rate') {
            return this.filterPercentage(item[key]);
          }
          if (key == 'transfer_status') {
            return this.loanTransferStatusJson[item[key]];
          }
          if (key == 'loan_status') {
            return this.loanPayStatusJson[item[key]];
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
        limit: -1,
        is_internal: 1
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
    getLoanMainBodyListData() {
      if (this.loanMainBodyLoading) {
        return false;
      }
      this.loanMainBodyLoading = true;
      getMainBodyEffectList({
        page: 1,
        limit: -1,
        is_internal: 1
      })
        .then(res => {
          this.loanMainBodyList = res.data.data;
          this.loanMainBodyLoading = false;
        })
        .catch(() => {
          this.loanmainBodyLoading = false;
        });
    },
    loanMainBodySelectToggle(show) {
      if (show && !this.loanMainBodyLoading && !this.loanMainBodyList.length) {
        this.getLoanMainBodyListData();
      }
    }
  }
};
</script>
