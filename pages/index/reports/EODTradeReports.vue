<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="search-form-box">
      <el-form 
        :inline="true" 
        label-width="100px" 
        label-position="left" 
        size="mini">
        <el-form-item>
          <el-button 
            :disabled="exportLoading" 
            type="primary" 
            @click="getExportData">生成报表</el-button>
          <el-button 
            :disabled="exportLoading" 
            type="success" 
            @click="handleDownload">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      ref="eodReportsList" 
      :data="eodReportsList" 
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
            v-if="scope.row.opt_uuid"
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.opt_uuid, scope.row.trade_type)">查看详情</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        prop="out_order_num" 
        label="外部指令编号"
        width="120">
        <template slot-scope="scope">
          {{ scope.row.out_order_num ? scope.row.out_order_num : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="transfer_num" 
        label="资金交易编号"
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.transfer_num ? scope.row.transfer_num : '-' }}
        </template>
      </el-table-column>
      <el-table-column
        prop="main_body"
        label="交易主体"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="业务类别"
        width="100">
        <template slot-scope="scope">
          {{ eodTradeTypeJson[scope.row.trade_type] }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="order_create_time" 
        label="指令到达时间"
        width="160">
        <template slot-scope="scope">
          {{ scope.row.order_create_time ? scope.row.order_create_time : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="order_opt_time" 
        label="指令接收时间"
        width="160">
        <template slot-scope="scope">
          {{ scope.row.order_opt_time ? scope.row.order_opt_time : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        prop="transfer_create_time" 
        label="调拨交易提交时间"
        width="160">
        <template slot-scope="scope">
          {{ scope.row.transfer_create_time ? scope.row.transfer_create_time : '-' }}
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
import { getEodTradeReports } from '@/api/reports';

export default {
  data() {
    return {
      loading: false,
      eodReportsList: [],
      mainBodyList: [],
      mainBodyLoading: false,
      eodReportsListData: [],
      exportLoading: false,
      exportFilename: 'export_eod_reports_list_',
      eodTradeTypeJson: {
        1: '付款指令',
        2: '付款调拨',
        3: '借款指令',
        4: '借款调拨',
        5: '还款指令',
        6: '还款交易',
        7: '内部调拨',
        8: '理财指令',
        9: '理财赎回'
      }
    };
  },
  created() {
    this.getEodTradeReportsData();
  },
  methods: {
    // 表格
    getEodTradeReportsData() {
      if (this.loading) return false;
      this.loading = true;

      let params = {
        generate: false,
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      getEodTradeReports(params)
        .then(res => {
          const data = res.data;
          this.eodReportsList = data.data;
          this.pageSetting.page = parseInt(data.page);
          this.pageSetting.count = parseInt(data.count);
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 表格操作
    triggerDetail(uuid, type) {
      const type2PathJson = {
        1: 'payOrderDetail',
        2: 'payTransferDetail',
        3: 'loanOrderDetail',
        4: 'loanTransferDetail',
        5: 'repayOrderDetail',
        6: 'repayTransferDetail',
        7: 'innerTransferDetail',
        8: 'financialPlanDetail',
        9: 'financialPlanDetail'
      };

      if (type2PathJson[type] && uuid) {
        this.$router.push({
          name: type2PathJson[type],
          params: {
            uuid
          }
        });
      } else {
        this.$message.warning('参数错误，无法查看对应详情');
      }
    },

    // 表格分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getEodTradeReportsData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getEodTradeReportsData();
    },

    // 获取生成报表
    getExportData() {
      if (this.exportLoading) return false;
      this.exportLoading = true;

      this.mshowLoading('正在生成EOD日终检查表...');
      let params = {
        generate: true,
        page: 1,
        limit: -1
      };

      this.eodReportsListData = [];

      getEodTradeReports(params)
        .then(res => {
          this.exportLoading = false;
          this.mhideLoading();
          this.getEodTradeReportsData();
          this.eodReportsListData = res.data.data;
          this.$message.success('生成报表成功');
        })
        .catch(() => {
          this.exportLoading = false;
          this.mhideLoading();
        });
    },

    // 导出
    handleDownload() {
      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;

      this.mconfirm('确定要导出当前生成的报表吗?')
        .then(() => {
          this.mshowLoading('正在导出EOD日终检查表...');
          this.exportData(this.eodReportsListData);
        })
        .catch(() => {
          this.exportLoading = false;
        });
    },

    // 导出
    exportData(list) {
      if (list.length) {
        const tHeader = [
          '外部指令编号',
          '资金交易编号',
          '交易主体',
          '业务类别',
          '指令到达时间',
          '指令接收时间',
          '调拨交易生成时间'
        ];
        const filterList = [
          'out_order_num',
          'transfer_num',
          'main_body',
          'trade_type',
          'order_create_time',
          'order_opt_time',
          'transfer_create_time'
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
          if (key == 'trade_type') {
            return item[key] ? this.eodTradeTypeJson[item[key]] : '-';
          }
          return item[key] ? item[key] : '-';
        });
      });

      return data;
    }
  }
};
</script>
