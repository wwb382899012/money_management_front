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
        <el-form-item label="调拨主体">
          <el-select 
            v-model="searchForm.main_body_uuid" 
            placeholder="请选择调拨主体" 
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
              key="mainBodyLoading" 
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
        <el-form-item label="指令状态">
          <el-select 
            v-model="searchForm.transfer_status" 
            filterable
            placeholder="请选择指令状态" 
            clearable>
            <el-option 
              v-for="(transferStatusStr, transferStatusCode) in innerTransferStatusJson" 
              :key="transferStatusCode" 
              :label="transferStatusStr" 
              :value="transferStatusCode">
            </el-option>
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
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.inner.CreateTransfer') != -1"
            :disabled="loading" 
            type="success" 
            @click="triggerAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      ref="innerTransferList" 
      :data="innerTransferList" 
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
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.inner.InnerTransferDetail') != -1"
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.uuid)">详情</el-button>
          <el-button 
            v-if="(scope.row.transfer_status == '0' || scope.row.transfer_status == '4' || scope.row.transfer_status == '5') && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.inner.UpdateTransfer') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerUpdate(scope.row.uuid)">修改</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '2' && ($store.getters.auth == 'admin' || 
            $store.getters.auth.indexOf('com.jyblife.logic.bg.inner.TransferRReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerRReview(scope.row.uuid)">审核</el-button>
          <el-button 
            v-if="(scope.row.transfer_status == '20' && scope.row.need_ticket_back == '1') && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.inner.TransferReceipt') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerReceipt(scope.row.uuid)">回单</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '3' && scope.row.pay_status == '3' && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.inner.TransferRReview') != -1)" 
            size="mini"
            type="success" 
            @click="triggerRReview(scope.row.uuid)">重试</el-button>
          <el-button 
            v-if="scope.row.transfer_status == '3' && scope.row.pay_status == '10' && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.inner.ConfirmStatus') != -1)" 
            size="mini"
            type="success" 
            @click="triggerConfirm(scope.row.uuid)">状态确认</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        prop="order_num" 
        label="资金交易编号" 
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="指令状态"
        width="120">
        <template slot-scope="scope">
          {{ innerTransferStatusJson[scope.row.transfer_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="调拨状态"
        width="80">
        <template slot-scope="scope">
          {{ payStatusJson[scope.row.pay_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="main_body_name" 
        label="调拨主体"
        width="220"
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
        label="金额"
        width="220">
        <template slot-scope="scope">
          {{ [scope.row.amount, scope.row.currency] | filterCent2YuanCurrencyAmount }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="pay_bank_name" 
        label="付款银行名称"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="付款银行账号"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.pay_bank_account | filterBankAccount }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="collect_bank_name" 
        label="收款银行名称"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="收款银行账号"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.collect_bank_account | filterBankAccount }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="hope_deal_date" 
        label="要求调拨日期"
        width="120">
      </el-table-column>
      <el-table-column 
        prop="real_deal_date" 
        label="实际调拨日期"
        width="120">
        <template slot-scope="scope">
          {{ scope.row.real_deal_date ? scope.row.real_deal_date : '-'}}
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
import { getInnerTransferList } from '@/api/innerTransfer';
import { getMainBodyEffectList } from '@/api/mainBody';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        main_body_uuid: '',
        transfer_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: ''
      },
      innerTransferStatusJson: {
        0: '已保存',
        2: '待权签人审核',
        3: '权签人审核通过',
        5: '权签人驳回',
        20: '已完结'
      },
      innerTransferList: [],
      mainBodyList: [],
      mainBodyLoading: false
    };
  },
  created() {
    this.getInnerTransferListData();
  },
  methods: {
    // 表格
    getInnerTransferListData(mshowLoading) {
      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜索内部调拨列表...');

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

      getInnerTransferList(params)
        .then(res => {
          this.innerTransferList = res.data.data;
          this.pageSetting.page = parseInt(res.data.page);
          this.pageSetting.count = parseInt(res.data.count);

          this.loading = false;
          mshowLoading && this.mhideLoading();
        })
        .catch(() => {
          this.loading = false;
          mshowLoading && this.mhideLoading();
        });
    },

    // 表格操作
    triggerAdd() {
      this.$router.push({
        name: 'addInnerTransfer'
      });
    },
    triggerDetail(uuid) {
      this.$router.push({
        name: 'innerTransferDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerUpdate(uuid) {
      this.$router.push({
        name: 'updateInnerTransfer',
        params: {
          uuid: uuid
        }
      });
    },
    triggerReview(uuid) {
      this.$router.push({
        name: 'innerTransferReview',
        params: {
          uuid: uuid
        }
      });
    },
    triggerRReview(uuid) {
      this.$router.push({
        name: 'innerTransferRReview',
        params: {
          uuid: uuid
        }
      });
    },
    triggerConfirm(uuid) {
      this.$router.push({
        name: 'innerTransferConfirm',
        params: {
          uuid: uuid
        }
      });
    },
    triggerReceipt(uuid) {
      this.$router.push({
        name: 'innerTransferReceipt',
        params: {
          uuid: uuid
        }
      });
    },

    // 表格分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getInnerTransferListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getInnerTransferListData();
    },

    // 搜索框

    // 搜索操作
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getInnerTransferListData(true);
    },
    handleReset() {
      Object.assign(this.searchForm, {
        main_body_uuid: '',
        transfer_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: ''
      });
      this.pageSetting.page = 1;
      this.getInnerTransferListData();
    },

    // 主体搜索列表数据
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
          this.mainBodyList = res.data.data;
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
    }
  }
};
</script>
