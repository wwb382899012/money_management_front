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
        <el-form-item label="交易主体">
          <el-select 
            v-model="searchForm.plan_main_body_uuid" 
            placeholder="请选择交易主体" 
            clearable 
            filterable
            @visible-change="mainBodySelectToggle">
            <el-option 
              v-for="item in mainBodyList" 
              :key="item.uuid" 
              :label="item.full_name" 
              :value="item.uuid">
            </el-option>
            <el-option 
              v-loading="mainBodyLoading" 
              v-if="mainBodyLoading" 
              key="mainbodyloading" 
              disabled 
              element-loading-spinner="el-icon-loading"
              label="" 
              value="loading"></el-option>
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
        <el-form-item label="交易对手">
          <el-input 
            v-model="searchForm.pay_bank_name" 
            placeholder="请输入交易对手"></el-input>
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
        <el-form-item>
          <el-button 
            type="primary" 
            @click="submitSearch">查询</el-button>
          <el-button 
            type="success" 
            @click="handleReset">重置</el-button>
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.AddPlan') != -1"
            type="default" 
            @click="addFinancialPlan">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      ref="orderList" 
      :data="financialPlanList" 
      :header-cell-style="styleObject"
      :cell-style="styleObject" 
      :height="tableHeight"
      element-loading-text="拼命加载中" 
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)" 
      border>
      <el-table-column 
        label="操作" 
        width="250"
        fixed
        show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.DetailPlan') != -1"
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.plan_uuid)">详情</el-button>
          <el-button 
            v-if="(scope.row.plan_status == 0 || scope.row.plan_status == 4 || scope.row.plan_status == 5) && ($store.getters.auth == 'admin' || 
            $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.SavePlan') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerUpdate(scope.row.plan_uuid)">修改</el-button>
          <el-button 
            v-if="scope.row.plan_status == 1 && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.PlanReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerReview(scope.row.plan_uuid)">审核</el-button>
          <el-button 
            v-if="scope.row.plan_status == 2 && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.PlanRReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerRReview(scope.row.plan_uuid)">复核</el-button>
          <el-button 
            v-if="(scope.row.plan_status == 19 || scope.row.need_ticket_back == '1') &&
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.PlanReceipt') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerReceipt(scope.row.plan_uuid)">回单</el-button>
          <el-button 
            v-if="scope.row.term_type == 1 && scope.row.pay_status == 2 && scope.row.is_pay_off != 2 
              && !scope.row.needExpireAudit && !scope.row.needExpireBankWater &&
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.PlanExpire') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerExpire(scope.row.plan_uuid)">赎回</el-button>
          <el-button 
            v-if="scope.row.term_type == 1 && scope.row.pay_status == 2 && scope.row.is_pay_off != 2 
              && scope.row.needExpireAudit && !scope.row.needExpireBankWater && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.PlanExpireReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerExpireReview(scope.row.plan_uuid)">赎回审核</el-button>
          <el-button 
            v-if="scope.row.pay_status == 2 && scope.row.is_pay_off != 2 
              && !scope.row.needExpireAudit && scope.row.needExpireBankWater && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.PlanExpireReceipt') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerExpireReceipt(scope.row.plan_uuid)">赎回回单</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        prop="money_manager_plan_num" 
        label="资金交易编号"
        width="220">
      </el-table-column>
      <el-table-column 
        label="指令状态"
        width="150">
        <template slot-scope="scope">
          {{ planTransferStatusJson[scope.row.plan_status] }}
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
        label="是否赎回"
        width="80">
        <template slot-scope="scope">
          {{ isPayOffJson[scope.row.is_pay_off] }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="plan_main_body_name" 
        label="交易主体"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="pay_bank_name" 
        label="交易对手"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="投资产品类型"
        width="110">
        <template slot-scope="scope">
          {{ termTypeJson[scope.row.term_type] }}
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
        width="220"
        label="投资金额"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ [scope.row.amount, scope.row.currency] | filterCent2YuanCurrencyAmount }}
        </template>
      </el-table-column>
      <el-table-column 
        width="220"
        label="投资产品" 
        prop="money_manager_product_name"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="rate_start_date" 
        label="起息日"
        width="100">
      </el-table-column>
      <el-table-column 
        label="投资产品到期日"
        width="120">
        <template slot-scope="scope">
          {{ scope.row.term_type == 1 ? '-' : scope.row.rate_over_date }}
        </template>
      </el-table-column>
      <el-table-column 
        label="预期收益率"
        width="150">
        <template slot-scope="scope">
          {{ scope.row.forecast_annual_income_rate | filterPercentage }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="create_time" 
        label="创建时间"
        width="160">
      </el-table-column>
      <el-table-column 
        prop="update_time"
        label="更新时间"
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
import { getFinancialPlanList } from '@/api/financial';
import { getMainBodyEffectList } from '@/api/mainBody';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        plan_main_body_uuid: '',
        pay_bank_name: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: ''
      },
      financialPlanList: [],
      financialProductList: [],
      financialProductLoading: false,
      mainBodyList: [],
      mainBodyLoading: false,
      planTransferStatusJson: {
        0: '已保存',
        1: '待资金部负责人审核',
        2: '待权签人审核',
        4: '资金部负责人驳回',
        5: '权签人驳回',
        19: '待上传回单',
        20: '已完结'
      },
      termTypeJson: {
        1: '开放式',
        2: '有效期'
      }
    };
  },
  created() {
    this.getFinancialPlanListData();
  },
  methods: {
    // 获取列表数据
    getFinancialPlanListData(mshowLoading) {
      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜索理财计划列表...');

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

      getFinancialPlanList(params)
        .then(res => {
          const data = res.data;
          this.financialPlanList = data.data;
          this.pageSetting.count = parseInt(data.count);
          this.pageSetting.page = parseInt(data.page);

          for (let i = 0; i < this.financialPlanList.length; i++) {
            this.financialPlanList[i].needExpireAudit = false;
            this.financialPlanList[i].needExpireBankWater = false;
            for (
              let j = 0;
              this.financialPlanList[i].cash_flow &&
              j < this.financialPlanList[i].cash_flow.length;
              j++
            ) {
              if (this.financialPlanList[i].cash_flow[j].status == 2) {
                this.financialPlanList[i].needExpireAudit = true;
              }

              if (this.financialPlanList[i].cash_flow[j].status == 19) {
                this.financialPlanList[i].needExpireBankWater = true;
              }
            }
          }

          this.loading = false;
          this.mhideLoading();
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },

    // 搜索交易主体下拉框数据
    getMainBodyEffectListData() {
      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      getMainBodyEffectList({
        page: 1,
        limit: -1,
        is_internal: 1
      })
        .then(res => {
          const data = res.data;
          this.mainBodyList = data.data;
          this.mainBodyLoading = false;
        })
        .catch(() => {
          this.mainBodyLoading = false;
        });
    },
    mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyEffectListData();
      }
    },

    // 搜索
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getFinancialPlanListData(true);
    },

    // 重置
    handleReset() {
      Object.assign(this.searchForm, {
        plan_main_body_uuid: '',
        pay_bank_name: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: ''
      });
      this.pageSetting.page = 1;
      this.getFinancialPlanListData();
    },

    // 分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getFinancialPlanListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getFinancialPlanListData();
    },

    // 列表操作
    addFinancialPlan() {
      this.$router.push({
        name: 'addFinancialPlan'
      });
    },
    triggerUpdate(uuid) {
      this.$router.push({
        name: 'updateFinancialPlan',
        params: {
          uuid
        }
      });
    },
    triggerDetail(uuid) {
      this.$router.push({
        name: 'financialPlanDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerReview(uuid) {
      this.$router.push({
        name: 'financialPlanReview',
        params: {
          uuid: uuid
        }
      });
    },
    triggerRReview(uuid) {
      this.$router.push({
        name: 'financialPlanRReview',
        params: {
          uuid
        }
      });
    },
    triggerReceipt(uuid) {
      this.$router.push({
        name: 'financialPlanReceipt',
        params: {
          uuid
        }
      });
    },
    triggerExpire(uuid) {
      this.$router.push({
        name: 'financialPlanExpire',
        params: {
          uuid
        }
      });
    },
    triggerExpireReview(uuid) {
      this.$router.push({
        name: 'financialPlanExpireReview',
        params: {
          uuid
        }
      });
    },
    triggerExpireReceipt(uuid) {
      this.$router.push({
        name: 'financialPlanExpireReceipt',
        params: {
          uuid
        }
      });
    }
  }
};
</script>