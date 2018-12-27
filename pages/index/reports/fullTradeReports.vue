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
        <el-form-item label="指令接收时间">
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
        <el-form-item label="权签审批时间">
          <el-date-picker 
            v-model="searchForm.audit_begin_time" 
            :value-format="datetimeFormat" 
            type="datetime" 
            placeholder="选择日期时间">
          </el-date-picker> -
          <el-date-picker 
            v-model="searchForm.audit_end_time" 
            :value-format="datetimeFormat" 
            type="datetime" 
            placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="业务类型">
          <el-select 
            v-model="searchForm.trade_type" 
            placeholder="请选择业务类型" 
            filterable
            clearable>
            <el-option 
              v-for="(tradeTypeStr, tradeTypeCode) in tradeTypeJson" 
              :key="tradeTypeCode" 
              :label="tradeTypeStr" 
              :value="tradeTypeCode"></el-option>
          </el-select>
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
            :disabled="exportLoading" 
            type="success" 
            @click="handleDownload">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      ref="allReportsList" 
      :data="allReportsList" 
      :header-cell-style="styleObject"
      :cell-style="styleObject" 
      :height="tableHeight"
      element-loading-text="拼命加载中" 
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)" 
      border>
      <el-table-column 
        label="操作" 
        width="120" 
        fixed>
        <template slot-scope="scope">
          <el-button 
            v-if="scope.row.trade_uuid"
            size="mini" 
            type="primary" 
            @click="triggerTransfer(scope.row.trade_uuid, scope.row.trade_type)">查看详情</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        prop="out_order_num" 
        label="指令编号"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.out_order_num ? scope.row.out_order_num : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="trade_order_num" 
        label="资金交易编号"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.trade_order_num ? scope.row.trade_order_num : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="trade_date" 
        label="交易日期"
        width="100">
        <template slot-scope="scope">
          {{ scope.row.trade_date ? scope.row.trade_date : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="pay_date" 
        label="要求付款日"
        width="100">
        <template slot-scope="scope">
          {{ scope.row.pay_date ? scope.row.pay_date : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="业务类别"
        width="80">
        <template slot-scope="scope">
          {{ scope.row.trade_type ? tradeTypeJson[scope.row.trade_type] : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="trade_son_type" 
        label="业务细类"
        width="160"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.trade_son_type ? scope.row.trade_son_type : '-' }}
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
        label="金额"
        width="220">
        <template slot-scope="scope">
          {{ [scope.row.amount, scope.row.currency] | filterCent2YuanCurrencyAmount }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="pay_main_body_name" 
        label="付款方"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="pay_bank_name" 
        label="付款方银行名称"
        width="220"
        show-overflow-tooltip>
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
        prop="collect_main_body_name" 
        label="收款方"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.collect_main_body_name ? scope.row.collect_main_body_name : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="collect_bank_name" 
        label="收款方银行名称"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.collect_bank_name ? scope.row.collect_bank_name : '-' }}
        </template>
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
        prop="bank_water_no" 
        label="银行交易流水号"
        width="150"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.bank_water_no ? scope.row.bank_water_no : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="实付类型"
        width="100">
        <template slot-scope="scope">
          {{ realPayTypeJson[scope.row.real_pay_type] }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="mature_date" 
        label="到期日"
        width="100">
        <template slot-scope="scope">
          {{ scope.row.mature_date ? scope.row.mature_date : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="利息率"
        width="150">
        <template slot-scope="scope">
          {{ scope.row.interest_rate !== null && scope.row.interest_rate !== '' ? filterPercentage(scope.row.interest_rate) : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="trade_entry_datetime" 
        label="指令到达时间"
        width="160">
        <template slot-scope="scope">
          {{ scope.row.trade_entry_datetime ? scope.row.trade_entry_datetime : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="trade_receive_datetime" 
        label="指令接收时间"
        width="160">
        <template slot-scope="scope">
          {{ scope.row.trade_receive_datetime ? scope.row.trade_receive_datetime : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="order_create_time"
        label="调拨交易提交时间"
        width="160">
        <template slot-scope="scope">
          {{ scope.row.order_create_datetime ? scope.row.order_create_datetime : '-' }}
        </template>  
      </el-table-column>
      <el-table-column 
        prop="order_create_user_name" 
        label="指令提交人"
        width="100"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.order_create_user_name ? scope.row.order_create_user_name : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="audit_name_1" 
        label="资金交易专员"
        width="120"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.audit_name_1 ? scope.row.audit_name_1 : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="audit_datetime_2" 
        label="资金部负责人审核时间"
        width="180">
        <template slot-scope="scope">
          {{ scope.row.audit_datetime_2 ? scope.row.audit_datetime_2 : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="audit_datetime_3" 
        label="权签审批时间"
        width="160">
        <template slot-scope="scope">
          {{ scope.row.audit_datetime_3 ? scope.row.audit_datetime_3 : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="audit_name_3" 
        label="权签人"
        width="100"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.audit_name_3 ? scope.row.audit_name_3 : '-' }}
        </template>
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
import { getFullTradeReports } from '@/api/reports';
import { getMainBodyList } from '@/api/mainBody';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        trade_type: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        audit_begin_time: '',
        audit_end_time: ''
      },
      tradeTypeJson: {
        1: '付款',
        2: '借款',
        3: '内部调拨',
        4: '理财',
        5: '还款'
      },
      allReportsList: [],
      mainBodyList: [],
      mainBodyLoading: false,
      exportLoading: false,
      exportFilename: 'export_all_reports_list_'
    };
  },
  created() {
    this.getFullTradeReportsData();
  },
  methods: {
    // 表格
    getFullTradeReportsData(mshowLoading) {
      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜素全量报表...');

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

      getFullTradeReports(params)
        .then(res => {
          const data = res.data;
          this.allReportsList = data.data;
          this.pageSetting.page = parseInt(data.page);
          this.pageSetting.count = parseInt(data.count);

          this.loading = false;
          this.mhideLoading();
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },

    // 表格操作
    triggerTransfer(uuid, type) {
      switch (type) {
        case 1:
          this.$router.push({
            name: 'payTransferDetail',
            params: {
              uuid
            }
          });
          break;
        case 2:
          this.$router.push({
            name: 'loanTransferDetail',
            params: {
              uuid
            }
          });
          break;
        case 3:
          this.$router.push({
            name: 'innerTransferDetail',
            params: {
              uuid
            }
          });
          break;
        case 4:
          this.$router.push({
            name: 'financialPlanDetail',
            params: {
              uuid
            }
          });
          break;
        case 5:
          this.$router.push({
            name: 'repayTransferDetail',
            params: {
              uuid
            }
          });
          break;
        default:
          this.$message.warning('类型不存在，请联系管理员添加类型');
      }
    },

    // 表格分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getFullTradeReportsData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getFullTradeReportsData();
    },

    // 搜索框

    // 搜索操作
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getFullTradeReportsData(true);
    },
    handleReset() {
      Object.assign(this.searchForm, {
        trade_type: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        audit_begin_time: '',
        audit_end_time: ''
      });
      this.pageSetting.page = 1;
      this.getFullTradeReportsData();
    },

    // 导出
    handleDownload() {
      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;

      this.mconfirm('确定要导出当前搜索条件的全量业务交易列表数据吗?')
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

      getFullTradeReports(params)
        .then(res => {
          this.exportData(res.data.data);
        })
        .catch(() => {
          this.exportLoading = false;
          this.mhideLoading();
        });
    },
    // 导出
    exportData(list) {
      if (list.length) {
        const tHeader = [
          '指令编号',
          '资金交易编号',
          '交易日期',
          '要求付款日',
          '业务类别',
          '业务细类',
          '币种',
          '金额',
          '付款方',
          '付款方银行名称',
          '付款方银行账号',
          '收款方',
          '收款方银行名称',
          '收款方银行账号',
          '银行交易流水号',
          '实付类型',
          '到期日',
          '利息率',
          '指令到达时间',
          '指令接收时间',
          '调拨交易提交时间',
          '指令提交人',
          '资金交易专员',
          '资金部负责人审核时间',
          '权签审批时间',
          '权签人'
        ];
        const filterList = [
          'out_order_num',
          'trade_order_num',
          'trade_date',
          'pay_date',
          'trade_type',
          'trade_son_type',
          'currency',
          'amount',
          'pay_main_body_name',
          'pay_bank_name',
          'pay_bank_account',
          'collect_main_body_name',
          'collect_bank_name',
          'collect_bank_account',
          'bank_water_no',
          'real_pay_type',
          'mature_date',
          'interest_rate',
          'trade_entry_datetime',
          'trade_receive_datetime',
          'order_create_datetime',
          'order_create_user_name',
          'audit_name_1',
          'audit_datetime_2',
          'audit_datetime_3',
          'audit_name_3'
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

          if (key == 'trade_type') {
            return item[key] ? this.tradeTypeJson[item[key]] : '-';
          }
          if (key == 'currency') {
            return '人民币';
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
          
          if (key == 'interest_rate') {
            return item[key] ? this.filterPercentage(item[key]) : '-';
          }

          return item[key] ? item[key] : '-';
        });
      });

      return data;
    },
    // 搜索数据
    getMainBodyListData() {
      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      getMainBodyList({
        page: 1,
        limit: -1
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
        this.getMainBodyListData();
      }
    }
  }
};
</script>
