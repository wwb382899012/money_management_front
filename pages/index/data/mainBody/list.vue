<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="search-form-box">
      <el-form 
        ref="searchForm" 
        :inline="true" 
        :model="searchForm" 
        label-width="100px" 
        label-position="left" 
        size="mini">
        <el-form-item label="主体名称">
          <el-input 
            v-model="searchForm.name" 
            placeholder="请输入主体名称关键字"></el-input>
        </el-form-item>
        <el-form-item label="启用状态">
          <el-select 
            v-model="searchForm.status" 
            filterable
            placeholder="请选择启用状态" 
            clearable>
            <el-option 
              v-for="(statusStr, statusCode) in activeStatusJson" 
              :key="statusCode" 
              :label="statusStr" 
              :value="statusCode">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否内部主体">
          <el-select 
            v-model="searchForm.is_internal" 
            filterable
            placeholder="请选择是否内部主体" 
            clearable>
            <el-option 
              label="是"
              value="1">
            </el-option>
            <el-option 
              label="否"
              value="2">
            </el-option>
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
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyCreate') != -1"
            :disabled="loading" 
            type="success" 
            @click="triggerAddMainBody">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      :data="mainBodyList" 
      :element-loading-text="loadingText" 
      :header-cell-style="styleObject" 
      :cell-style="styleObject"
      :height="tableHeight"
      border 
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)">
      <el-table-column 
        label="操作" 
        width="150"
        fixed>
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || 
            ($store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyUpdate') != -1 && userMainBodyList.indexOf(scope.row.uuid) != -1)"
            :key="'update' + scope.row.uuid"
            :disabled="loading" 
            size="mini" 
            type="primary" 
            @click="triggerUpdateMainBody(scope.row)">修改</el-button>
          <el-button 
            v-if="scope.row.status == 1 && ($store.getters.auth == 'admin' || 
            ($store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyCancel') != -1 && userMainBodyList.indexOf(scope.row.uuid) != -1))" 
            :key="'cancel' + scope.row.uuid"
            :disabled="loading" 
            size="mini" 
            type="danger" 
            @click="handleCancelMainBody(scope.row.uuid, scope.$index)">注销</el-button>
          <el-button 
            v-if="scope.row.status != 1 && ($store.getters.auth == 'admin' || 
            ($store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyActivate') != -1 && userMainBodyList.indexOf(scope.row.uuid) != -1))"
            :key="'active' + scope.row.uuid"
            :disabled="loading" 
            size="mini" 
            type="success" 
            @click="handleActivateMainBody(scope.row.uuid, scope.$index)">启用</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        label="主体全称" 
        prop="full_name"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="主体简称" 
        prop="short_name"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="简码"
        width="200"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.short_code ? scope.row.short_code : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="是否内部主体"
        width="150">
        <template slot-scope="scope">
          {{ scope.row.is_internal == '1' ? '是' : '否' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="启用状态"
        width="150">
        <template slot-scope="scope">
          {{ activeStatusJson[scope.row.status] }}
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

    <el-dialog 
      v-if="addMainBodyDialogVisible"
      :append-to-body="true"
      :key="'addMainBodyDialog' + timestamp" 
      :visible.sync="addMainBodyDialogVisible" 
      title="新增主体" 
      left
      @close="timestamp = Date.now();">
      <add-main-body 
        @addMainBodySuccess="reloadMainBodyList" 
        @closeDialog="closeDialog"></add-main-body>
    </el-dialog>
    <el-dialog 
      v-if="updateMainBodyDialogVisible"
      :append-to-body="true"
      :key="'updateMainBodyDialog' + timestamp" 
      :visible.sync="updateMainBodyDialogVisible" 
      title="更新主体" 
      left 
      @close="timestamp = Date.now()">
      <update-main-body 
        :current-main-body="currentMainBody" 
        @updateMainBodySuccess="reloadMainBodyList" 
        @closeDialog="closeDialog"></update-main-body>
    </el-dialog>
  </div>
</template>

<script>
import {
  getMainBodyList,
  activateMainBody,
  cancelMainBody
} from '@/api/mainBody';

import AddMainBody from './add.vue';
import UpdateMainBody from './update.vue';

export default {
  components: {
    AddMainBody,
    UpdateMainBody
  },
  data() {
    return {
      loading: false,
      loadingText: '拼命加载中',
      searchForm: {
        name: '',
        status: '',
        is_internal: ''
      },
      activeStatusJson: {
        1: '启用',
        2: '注销'
      },
      mainBodyList: [],
      userMainBodyList: [],
      timestamp: Date.now(),
      addMainBodyDialogVisible: false,
      updateMainBodyDialogVisible: false,
      currentMainBody: {
        uuid: '',
        full_name: '',
        short_name: '',
        short_code: '',
        is_internal: ''
      }
    };
  },
  created() {
    this.getMainBodyListData();
  },
  methods: {
    getMainBodyListData() {
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

      getMainBodyList(params)
        .then(res => {
          this.mainBodyList = res.data.data;
          this.userMainBodyList = res.data.userMainBodyData;
          this.pageSetting.page = parseInt(res.data.page);
          this.pageSetting.count = parseInt(res.data.count);
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 搜索和重置搜索
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getMainBodyListData();
      return false;
    },
    handleReset() {
      if (this.loading) return false;

      // 重置搜索条件
      for (let key in this.searchForm) {
        this.searchForm[key] = '';
      }

      this.pageSetting.page = 1;
      this.getMainBodyListData();

      return false;
    },

    // 分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getMainBodyListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getMainBodyListData();
    },

    // 启用和注销主体
    handleActivateMainBody(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要启用吗?')
        .then(() => {
          this.loadingText = '正在启用' + this.mainBodyList[index].full_name;
          this.mainBodyList[index].status = 1;
          activateMainBody({
            uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
            })
            .catch(() => {
              this.mainBodyList[index].status = 2;
              this.loading = false;
              this.loadingText = '拼命加载中';
            });
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleCancelMainBody(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要注销吗?')
        .then(() => {
          this.loadingText = '正在注销' + this.mainBodyList[index].full_name;
          this.mainBodyList[index].status = 2;
          cancelMainBody({
            uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
            })
            .catch(() => {
              this.mainBodyList[index].status = 1;
              this.loading = false;
              this.loadingText = '拼命加载中';
            });
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 新增和修改主体
    triggerAddMainBody() {
      this.addMainBodyDialogVisible = true;
    },
    triggerUpdateMainBody(currentMainBody) {
      this.currentMainBody = JSON.parse(JSON.stringify(currentMainBody));
      this.updateMainBodyDialogVisible = true;
    },
    reloadMainBodyList() {
      this.addMainBodyDialogVisible = false;
      this.updateMainBodyDialogVisible = false;
      this.getMainBodyListData();
    },
    closeDialog() {
      this.addMainBodyDialogVisible = false;
      this.updateMainBodyDialogVisible = false;
    }
  }
};
</script>
