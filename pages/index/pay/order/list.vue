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
            v-model="searchForm.order_status" 
            placeholder="请选择指令状态" 
            filterable
            clearable>
            <el-option 
              v-for="(orderStatusStr, orderStatus) in orderStatusJson" 
              v-if="orderStatus != 20"
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
        <el-form-item label="外部指令号">
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
        width="150" 
        fixed>
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.order.PayOrderDetail') != -1"
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.uuid)">详情</el-button>
          <el-button 
            v-if="scope.row.order_status == '0' && ($store.getters.auth == 'admin' || 
            $store.getters.auth.indexOf('com.jyblife.logic.bg.order.PayOrderReview') != -1)" 
            size="mini" 
            type="success" 
            @click="triggerReview(scope.row.uuid)">审核</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        prop="order_num" 
        label="指令编号" 
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        prop="out_order_num" 
        label="外部指令号" 
        width="100">
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
        prop="collect_main_body" 
        label="收款方"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="指令状态"
        width="80">
        <template slot-scope="scope">
          {{ orderStatusJson[scope.row.order_status] }}
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
        prop="order_pay_type"
        label="付款类别"
        width="120"
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
import { getPayOrderList } from '@/api/pay';
import { getMainBodyList, getMainBodyEffectList } from '@/api/mainBody';

const searchKeyList = {
  order_create_people: '',
  order_status: '',
  apply_begin_time: '',
  apply_end_time: '',
  approve_begin_time: '',
  approve_end_time: '',
  pay_main_body_uuid: '',
  collect_main_body_uuid: '',
  out_order_num: ''
};

export default {
  data() {
    return {
      loading: false,
      searchForm: JSON.parse(JSON.stringify(searchKeyList)),
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
      exportFilename: 'export_pay_order_list_'
    };
  },
  created() {
    this.getPayOrderListData();
  },
  methods: {
    // 表格
    getPayOrderListData(mshowLoading) {
      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜索付款指令列表...');

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

      getPayOrderList(params)
        .then(res => {
          this.orderList = res.data.data;
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
    triggerDetail(uuid) {
      this.$router.push({
        name: 'payOrderDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerReview(uuid) {
      this.$router.push({
        name: 'payOrderReview',
        params: {
          uuid: uuid
        }
      });
    },

    // 表格分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getPayOrderListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getPayOrderListData();
    },

    // 搜索框

    // 搜索操作
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getPayOrderListData(true);
    },
    handleReset() {
      Object.assign(this.searchForm, JSON.parse(JSON.stringify(searchKeyList)));
      this.pageSetting.page = 1;
      this.getPayOrderListData();
    },

    // 导出
    handleDownload() {
      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;

      this.mconfirm('确定要导出当前搜索条件的付款指令列表数据吗?')
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

      getPayOrderList(params)
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
          '指令编号',
          '外部指令号',
          '付款金额',
          '付款方',
          '收款方',
          '指令状态',
          '付款状态',
          '系统来源',
          '指令发起人',
          '付款类别',
          '币种',
          '指令到达时间',
          '指令更新时间'
        ];
        const filterList = [
          'order_num',
          'out_order_num',
          'amount',
          'pay_main_body',
          'collect_main_body',
          'order_status',
          'pay_status',
          'system_flag',
          'order_create_people',
          'order_pay_type',
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
          if (key == 'currency') {
            return this.mformatCurrencyStr(item[key]);
          }
          if (key == 'amount') {
            return this.filterCent2YuanCurrencyAmount([
              item[key],
              item['currency']
            ]);
          }
          if (key == 'order_status') {
            return this.orderStatusJson[item[key]];
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
