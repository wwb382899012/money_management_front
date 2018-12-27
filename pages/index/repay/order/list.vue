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
        <el-form-item label="指令状态">
          <el-select 
            v-model="searchForm.repay_order_status" 
            placeholder="请选择指令状态" 
            filterable
            clearable>
            <el-option 
              v-for="(orderStatusStr, orderStatus) in orderStatusJson" 
              v-if="orderStatus != '4'"
              :key="orderStatus" 
              :label="orderStatusStr" 
              :value="orderStatus"></el-option>
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
            v-model="searchForm.collect_main_body_uuid" 
            placeholder="请选择借款方" 
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
        <el-form-item label="贷款方">
          <el-select 
            v-model="searchForm.repay_main_body_uuid" 
            placeholder="请选择贷款方" 
            clearable 
            filterable
            @visible-change="repayMainBodySelectToggle">
            <el-option 
              v-for="item in repayMainBodyList" 
              :key="item.uuid" 
              :label="item.full_name" 
              :value="item.uuid">
            </el-option>
            <el-option 
              v-loading="repayMainBodyLoading" 
              v-if="repayMainBodyLoading" 
              key="repayMainBodyLoading" 
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
        <el-form-item
          label="外部指令号">
          <el-input placeholder="请输入外部指令号" v-model="searchForm.out_order_num"></el-input>
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
        width="150" 
        fixed>
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayOrderDetail') != -1"
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.id)">详情</el-button>
          <el-button 
            v-if="scope.row.repay_order_status == '0' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.loan.RepayOrderReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerReview(scope.row.id)">审核</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        prop="order_num" 
        label="还款编号" 
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="out_order_num" 
        label="外部指令号"
        width="100">
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
          {{ [scope.row.loan_amount, scope.row.loan_currency] | filterCent2YuanCurrencyAmount }}
        </template>
      </el-table-column>
      <el-table-column 
        label="还款金额"
        width="220">
        <template slot-scope="scope">
          {{ [scope.row.amount, scope.row.currency] | filterCent2YuanCurrencyAmount }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="collect_main_body" 
        label="借款方"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="repay_main_body" 
        label="贷款方"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="system_flag" 
        label="系统来源"
        width="80">
      </el-table-column>
      <el-table-column 
        label="指令状态"
        width="80">
        <template slot-scope="scope">
          {{ orderStatusJson[scope.row.repay_order_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="order_create_people" 
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
        prop="require_repay_date" 
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
import { getRepayOrderList } from '@/api/repay';
import { getMainBodyList, getMainBodyEffectList } from '@/api/mainBody';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        order_create_people: '',
        repay_order_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        repay_main_body_uuid: '',
        collect_main_body_uuid: '',
        loan_order_num: '',
        out_order_num: ''
      },
      repayTypeJson: {
        1: '提前还款',
        2: '正常还款',
        3: '延期还款'
      },
      orderList: [],
      collectMainBodyList: [],
      collectMainBodyLoading: false,
      repayMainBodyList: [],
      repayMainBodyLoading: false,
      exportFilename: 'export_repay_order_list_'
    };
  },
  created() {
    this.getRepayOrderListData();
  },
  methods: {
    // 表格数据
    getRepayOrderListData(mshowLoading) {
      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜索还款指令列表...');

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

      getRepayOrderList(params)
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
        name: 'repayOrderDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerReview(uuid) {
      this.$router.push({
        name: 'repayOrderReview',
        params: {
          uuid: uuid
        }
      });
    },

    // 表格分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getRepayOrderListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getRepayOrderListData();
    },

    // 搜索框

    // 搜索操作
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getRepayOrderListData(true);
    },
    handleReset() {
      Object.assign(this.searchForm, {
        order_create_people: '',
        repay_order_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        repay_main_body_uuid: '',
        collect_main_body_uuid: '',
        loan_order_num: '',
        out_order_num: ''
      });
      this.pageSetting.page = 1;
      this.getRepayOrderListData();
    },

    // 导出
    handleDownload() {
      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;

      this.mconfirm('确定要导出当前搜索条件的还款指令列表数据吗?')
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

      getRepayOrderList(params)
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
          '还款编号',
          '外部指令号',
          '借款编号',
          '借款金额',
          '还款金额',
          '借款方',
          '贷款方',
          '系统来源',
          '指令状态',
          '指令发起人',
          '币种',
          '借款日期',
          '要求还款日',
          '利息率',
          '指令到达时间',
          '指令更新时间'
        ];
        const filterList = [
          'order_num',
          'out_order_num',
          'loan_order_num',
          'loan_amount',
          'amount',
          'collect_main_body',
          'repay_main_body',
          'system_flag',
          'repay_order_status',
          'order_create_people',
          'currency',
          'real_pay_date',
          'require_repay_date',
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
          if (key == 'collect_bank_account' || key == 'loan_bank_account') {
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
          if (key == 'loan_amount') {
            return this.filterCent2YuanCurrencyAmount([
              item[key],
              item['currency']
            ]);
          }
          if (key == 'rate') {
            return this.filterPercentage(item[key]);
          }
          if (key == 'repay_order_status') {
            return this.orderStatusJson[item[key]];
          }
          if (key == 'background') {
            return item[key] ? item[key] : '-';
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
    getRepayMainBodyListData() {
      if (this.repayMainBodyLoading) {
        return false;
      }
      this.repayMainBodyLoading = true;
      getMainBodyEffectList({
        page: 1,
        limit: -1,
        is_internal: 1
      })
        .then(res => {
          this.repayMainBodyList = res.data.data;
          this.repayMainBodyLoading = false;
        })
        .catch(() => {
          this.repaymainBodyLoading = false;
        });
    },
    repayMainBodySelectToggle(show) {
      if (
        show &&
        !this.repayMainBodyLoading &&
        !this.repayMainBodyList.length
      ) {
        this.getRepayMainBodyListData();
      }
    }
  }
};
</script>
