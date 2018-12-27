<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="search-form-box">
      <el-form 
        ref="searchForm" 
        :inline="true" 
        :model="searchForm" 
        label-width="80px" 
        label-position="left" 
        size="mini">
        <el-form-item label="产品名称">
          <el-input 
            v-model="searchForm.product_name" 
            placeholder="请输入产品名称关键字"></el-input>
        </el-form-item>
        <el-form-item label="银行名称">
          <el-input 
            v-model="searchForm.bank_dict_value" 
            placeholder="请输入银行名称关键字"></el-input>
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
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.AddProduct') != -1"
            :disabled="loading" 
            type="success" 
            @click="triggerAddFinancialProduct">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      :data="financialProductList" 
      :element-loading-text="loadingText" 
      :header-cell-style="styleObject" 
      :cell-style="styleObject"
      :height="tableHeight"
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)"
      border>
      <el-table-column 
        label="操作" 
        width="150"
        fixed>
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.UpdateProduct') != -1"
            :disabled="loading" 
            size="mini" 
            type="primary" 
            @click="triggerUpdateFinancialProduct(scope.row)">修改</el-button>
          <el-button 
            v-if="scope.row.status == '1' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.FinancialProductCancel') != -1)" 
            :disabled="loading" 
            size="mini" 
            type="danger" 
            @click="handleCancelFinancialProduct(scope.row.uuid, scope.$index)">注销</el-button>
          <el-button 
            v-if="scope.row.status != '1' && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.FinancialProductActivate') != -1)"
            :disabled="loading" 
            size="mini" 
            type="success" 
            @click="handleActivateFinancialProduct(scope.row.uuid, scope.$index)">启用</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        label="产品名称" 
        prop="product_name"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="年化收益率"
        width="160">
        <template slot-scope="scope">
          {{ scope.row.annual_income_rate | filterPercentage }}
        </template>
      </el-table-column>
      <el-table-column 
        label="银行" 
        prop="bank_dict_value"
        width="160"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="状态"
        width="160">
        <template slot-scope="scope">
          {{ activeStatusJson[scope.row.status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="创建人" 
        prop="create_name"
        width="160"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="最后修改时间" 
        prop="update_time"
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
    <el-dialog 
      v-if="addFinancialProductDialogVisible"
      :append-to-body="true"
      :key="'addFinancialProductDialog' + timestamp" 
      :visible.sync="addFinancialProductDialogVisible" 
      title="新增理财产品"
      left 
      @close="timestamp = Date.now()">
      <add-financial-product 
        @addFinancialProductSuccess="reloadFinancialProductList" 
        @closeDialog="closeDialog"></add-financial-product>
    </el-dialog>
    <el-dialog 
      v-if="updateFinancialProductDialogVisible"
      :append-to-body="true"
      :key="'updateFinancialProductDialog' + timestamp" 
      :visible.sync="updateFinancialProductDialogVisible" 
      title="编辑理财产品" 
      left 
      @close="timestamp = Date.now()">
      <update-financial-product 
        :current-financial-product="currentFinancialProduct"
        @updateFinancialProductSuccess="reloadFinancialProductList" 
        @closeDialog="closeDialog"></update-financial-product>
    </el-dialog>
  </div>
</template>

<script>
import {
  getFinancialProductList,
  activateFinancialProduct,
  cancelFinancialProduct
} from '@/api/financial';

import AddFinancialProduct from './add.vue';
import UpdateFinancialProduct from './update.vue';

export default {
  components: {
    AddFinancialProduct,
    UpdateFinancialProduct
  },
  data() {
    return {
      loading: false,
      loadingText: '拼命加载中',
      searchForm: {
        product_name: '',
        bank_dict_value: ''
      },
      activeStatusJson: {
        1: '启用',
        2: '注销'
      },
      financialProductList: [],
      timestamp: Date.now(),
      addFinancialProductDialogVisible: false,
      updateFinancialProductDialogVisible: false,
      currentFinancialProduct: {
        annual_income_rate: '',
        annual_income_rate_percentage: '',
        bank_dict_key: '',
        bank_dict_value: '',
        create_name: '',
        create_time: '',
        create_user_id: '',
        is_delete: '',
        product_name: '',
        status: '',
        update_time: '',
        uuid: ''
      }
    };
  },
  created() {
    this.getFinancialProductListData();
  },
  methods: {
    // 表格数据获取
    getFinancialProductListData() {
      if (this.loading) return false;
      this.loading = true;

      let params = {
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      // 获取搜索参数
      for (let key in this.searchForm) {
        if (this.searchForm[key] !== '') {
          params[key] = this.searchForm[key];
        }
      }

      getFinancialProductList(params)
        .then(res => {
          this.financialProductList = res.data.data;
          this.pageSetting.page = parseInt(res.data.page);
          this.pageSetting.count = parseInt(res.data.count);
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 搜索和重置
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getFinancialProductListData();
    },
    handleReset() {
      if (this.loading) return false;
      // 重置搜索条件
      for (let key in this.searchForm) {
        this.searchForm[key] = '';
      }
      this.pageSetting.page = 1;
      this.getFinancialProductListData();
    },

    // 分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getFinancialProductListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getFinancialProductListData();
    },

    // 启用和禁用理财产品
    handleActivateFinancialProduct(uuid, index) {
      if (this.loading) return false;
      this.loading = true;

      this.mconfirm('确定要启用吗?')
        .then(() => {
          this.loadingText =
            '正在启用' + this.financialProductList[index].product_name;
          this.financialProductList[index].status = 1;
          activateFinancialProduct({
            uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
            })
            .catch(() => {
              this.financialProductList[index].status = 2;
              this.loading = false;
              this.loadingText = '拼命加载中';
            });
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleCancelFinancialProduct(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要注销吗?')
        .then(() => {
          this.loadingText =
            '正在注销' + this.financialProductList[index].product_name;
          this.financialProductList[index].status = 2;
          cancelFinancialProduct({
            uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
            })
            .catch(() => {
              this.financialProductList[index].status = 1;
              this.loading = false;
              this.loadingText = '拼命加载中';
            });
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 新增和更新理财产品
    triggerAddFinancialProduct() {
      this.addFinancialProductDialogVisible = true;
    },
    triggerUpdateFinancialProduct(currentFinancialProduct) {
      Object.assign(this.currentFinancialProduct, currentFinancialProduct, {
        annual_income_rate_percentage: this.filterPercentage(
          currentFinancialProduct.annual_income_rate
        )
          .toString()
          .slice(0, -1)
      });
      this.updateFinancialProductDialogVisible = true;
    },
    reloadFinancialProductList() {
      this.pageSetting.page = 1;
      this.addFinancialProductDialogVisible = false;
      this.updateFinancialProductDialogVisible = false;
      this.getFinancialProductListData();
    },
    closeDialog() {
      this.addFinancialProductDialogVisible = false;
      this.updateFinancialProductDialogVisible = false;
    }
  }
};
</script>
