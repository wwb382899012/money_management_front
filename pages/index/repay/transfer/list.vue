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
        <el-form-item label="是否还清">
          <el-select 
            v-model="searchForm.is_pay_off" 
            placeholder="选择是否还清" 
            filterable
            clearable>
            <el-option 
              v-for="(isRepayOffStr, isRepayOffStatus) in isRepayOffJson" 
              :key="isRepayOffStatus" 
              :label="isRepayOffStr" 
              :value="isRepayOffStatus"></el-option>
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
        width="260" 
        fixed>
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayDetail') != -1"
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.id)">详情</el-button>
          <el-button 
            v-if="scope.row.repay_transfer_status == '0' && scope.row.edit_status == '1' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayTransferReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerReview(scope.row.id)">还款</el-button>
          <el-button 
            v-if="scope.row.repay_transfer_status == '2' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayTransferRReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerRReview(scope.row.id)">审核</el-button>
          <el-button 
            v-if="scope.row.need_repay_ticket_back == '1' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayTransferReceipt') != -1)" 
            size="mini"
            type="success" 
            @click="triggerUploadReceipt(scope.row.id)">回单</el-button>
          <el-button 
            v-if="scope.row.repay_transfer_status == '3' && scope.row.repay_status == '3' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayTransferRReview') != -1)" 
            size="mini"
            type="success" 
            @click="triggerRReview(scope.row.id)">重试</el-button>
          <el-button 
            v-if="scope.row.repay_transfer_status == '3' && scope.row.repay_status == '10' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayConfirmStatus') != -1)" 
            size="mini"
            type="success" 
            @click="triggerConfirm(scope.row.id)">状态确认</el-button>

          <el-button 
            v-if="scope.row.edit_status == '3' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayCashFlowChange') != -1)" 
            size="mini" 
            type="warning"
            @click="triggerChangeCashFlow(scope.row.id)">修改还款计划</el-button>
          <el-button 
            v-if="scope.row.edit_status == '4' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayCashFlowReview') != -1)" 
            size="mini" 
            type="warning"
            @click="triggerReviewCashFlow(scope.row.id)">审核还款计划</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        prop="repay_transfer_num" 
        label="还款资金交易编号" 
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="order_num" 
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
        label="已还款本金"
        width="220">
        <template slot-scope="scope">
          {{ [scope.row.repay_capital, scope.row.currency] | filterCent2YuanCurrencyAmount }}
        </template>
      </el-table-column>
      <el-table-column 
        label="已还款利息"
        width="220">
        <template slot-scope="scope">
          {{ [scope.row.repay_interest, scope.row.currency] | filterCent2YuanCurrencyAmount }}
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
        label="还款调拨状态"
        width="120">
        <template slot-scope="scope">
          {{ repayTransferStatusJson[scope.row.repay_transfer_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="现金流表状态"
        width="120">
        <template slot-scope="scope">
          {{ editStatusJson[scope.row.edit_status] }}
        </template>  
      </el-table-column>
      <el-table-column 
        label="还款状态"
        width="80">
        <template slot-scope="scope">
          {{ repayPayStatusJson[scope.row.repay_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="是否还清"
        width="80">
        <template slot-scope="scope">
          {{ isRepayOffJson[scope.row.is_pay_off] }}
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
        label="币种"
        width="80">
        <template slot-scope="scope">
          {{ mformatCurrencyStr(scope.row.currency) }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="real_pay_date" 
        label="借款日期" 
        width="100">
      </el-table-column>
      <el-table-column 
        prop="forecast_date" 
        label="要求还款日" 
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
import { getRepayTransferList } from '@/api/repay';
import { getMainBodyList, getMainBodyEffectList } from '@/api/mainBody';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        transfer_create_people: '',
        is_pay_off: '',
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
      repayTransferStatusJson: {
        0: '待资金专员审核',
        2: '待权签人审核',
        3: '权签人审核通过',
        4: '权签人驳回',
        20: '已完结'
      },
      editStatusJson: {
        1: '已完结',
        2: '指令审核中',
        3: '待资金专员审核',
        4: '待资金部负责人审核'
      },
      isRepayOffJson: {
        0: '未还款',
        1: '未还清',
        2: '已还清'
      },
      orderList: [],
      collectMainBodyList: [],
      collectMainBodyLoading: false,
      loanMainBodyList: [],
      loanMainBodyLoading: false,
      exportLoading: false,
      exportFilename: 'export_repay_transfer_list_'
    };
  },
  created() {
    this.getRepayTransferListData();
  },
  methods: {
    // 表格数据
    getRepayTransferListData(mshowLoading) {
      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜索还款调拨列表...');

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

      getRepayTransferList(params)
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
        name: 'repayTransferDetail',
        params: {
          uuid
        }
      });
    },
    triggerReview(uuid) {
      this.$router.push({
        name: 'repayTransferReview',
        params: {
          uuid
        }
      });
    },
    triggerRReview(uuid) {
      this.$router.push({
        name: 'repayTransferRReview',
        params: {
          uuid
        }
      });
    },
    triggerConfirm(uuid) {
      this.$router.push({
        name: 'repayTransferConfirm',
        params: {
          uuid
        }
      });
    },
    triggerUploadReceipt(uuid) {
      this.$router.push({
        name: 'repayTransferReceipt',
        params: {
          uuid
        }
      });
    },

    // 还款计划
    // 修改还款计划
    triggerChangeCashFlow(uuid) {
      this.$router.push({
        name: 'repayCashFlowChange',
        params: {
          uuid
        }
      });
    },
    // 审核还款计划
    triggerReviewCashFlow(uuid) {
      this.$router.push({
        name: 'repayCashFlowReview',
        params: {
          uuid
        }
      });
    },

    // 表格分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getRepayTransferListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getRepayTransferListData();
    },

    // 搜索
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getRepayTransferListData();
    },
    // 重置搜索条件
    handleReset() {
      Object.assign(this.searchForm, {
        transfer_create_people: '',
        is_pay_off: '',
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
      this.getRepayTransferListData();
    },

    // 导出
    handleDownload() {
      if (this.exportLoading) {
        return false;
      }

      this.mconfirm('确定要导出当前搜索条件的借款调拨列表数据吗?')
        .then(() => {
          this.mshowLoading('正在导出数据...');
          this.exportLoading = true;
          this.getExportData();
        })
        .catch(() => {});
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

      getRepayTransferList(params)
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
          '还款资金交易编号',
          '借款编号',
          '借款金额',
          '已还款本金',
          '已还款利息',
          '借款方',
          '贷款方',
          '还款调拨状态',
          '现金流表状态',
          '还款状态',
          '是否还清',
          '系统来源',
          '指令发起人',
          '币种',
          '借款日期',
          '要求还款日',
          '利息率',
          '指令到达时间',
          '指令更新时间'
        ];
        const filterList = [
          'repay_transfer_num',
          'order_num',
          'amount',
          'repay_capital',
          'repay_interest',
          'loan_main_body',
          'collect_main_body',
          'repay_transfer_status',
          'edit_status',
          'repay_status',
          'is_pay_off',
          'system_flag',
          'transfer_create_people',
          'currency',
          'real_pay_date',
          'forecast_date',
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
          if (key == 'repay_transfer_status') {
            return this.repayTransferStatusJson[item[key]];
          }

          if (key == 'edit_status') {
            return this.editStatusJson[item[key]];
          }

          if (key == 'repay_status') {
            return this.repayPayStatusJson[item[key]];
          }

          if (key == 'is_pay_off') {
            return this.isRepayOffJson[item[key]];
          }

          if (key == 'currency') {
            return this.mformatCurrencyStr(item[key]);
          }
          if (
            key == 'amount' ||
            key == 'repay_capital' ||
            key == 'repay_interest'
          ) {
            return this.filterCent2YuanCurrencyAmount([
              item[key],
              item['currency']
            ]);
          }
          if (key == 'rate') {
            return this.filterPercentage(item[key]);
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
      getMainBodyEffectList({
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
      getMainBodyList({
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
