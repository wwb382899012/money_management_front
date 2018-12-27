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
        <el-form-item label="业务系统名称">
          <el-input 
            v-model="searchForm.sys_name" 
            placeholder="请输入业务系统名称"></el-input>
        </el-form-item>
        <el-form-item label="系统状态">
          <el-select 
            v-model="searchForm.status" 
            filterable
            placeholder="请选择系统状态" 
            clearable>
            <el-option 
              v-for="(statusStr, statusCode) in activeStatusJson" 
              :key="statusCode" 
              :label="statusStr" 
              :value="statusCode"></el-option>
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
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemCreate') != -1"
            :disabled="loading" 
            type="success" 
            @click="triggerAddSystem">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      :data="systemList" 
      :element-loading-text="loadingText" 
      :header-cell-style="styleObject" 
      :cell-style="styleObject"
      :height="tableHeight"
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)"
      border>
      <el-table-column 
        label="操作" 
        width="220">
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemUpdate') != -1"
            :disabled="loading" 
            size="mini" 
            type="primary" 
            @click="triggerUpdateSystem(scope.row)">修改</el-button>
          <el-button 
            v-if="scope.row.status == 1 && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemCancel') != -1)" 
            :disabled="loading" 
            size="mini" 
            type="danger" 
            @click="handleCancelSystem(scope.row.uuid, scope.$index)">注销</el-button>
          <template v-else>
            <el-button 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemActivate') != -1"
              :disabled="loading" 
              size="mini" 
              type="success" 
              @click="handleActivateSystem(scope.row.uuid, scope.$index)">启用</el-button>
            <el-button 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemDel') != -1"
              :disabled="loading" 
              size="mini" 
              type="danger" 
              @click="handleDeleteSystem(scope.row.uuid, scope.$index)">删除</el-button>
          </template>
        </template>
      </el-table-column>
      <el-table-column 
        label="系统名称" 
        prop="sys_name"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="服务器IP"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.ip_address ? scope.row.ip_address : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="密钥Key" 
        prop="pwd_key"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="状态"
        width="160">
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
      v-if="addSystemDialogVisible"
      :append-to-body="true"
      :key="'addSystemDialog' + timestamp" 
      :visible.sync="addSystemDialogVisible" 
      title="新增业务系统" 
      left 
      @close="timestamp = Date.now()">
      <add-system 
        @addSystemSuccess="reloadSystemList" 
        @closeDialog="closeDialog"></add-system>
    </el-dialog>
    <el-dialog 
      v-if="updateSystemDialogVisible"
      :append-to-body="true"
      :key="'updateSystemDialog' + timestamp" 
      :visible.sync="updateSystemDialogVisible" 
      title="编辑业务系统" 
      left 
      @close="timestamp = Date.now()">
      <update-system 
        :current-system="currentSystem" 
        @updateSystemSuccess="reloadSystemList" 
        @closeDialog="closeDialog"></update-system>
    </el-dialog>
  </div>
</template>

<script>
import {
  getSystemList,
  activateSystem,
  cancelSystem,
  deleteSystem
} from '@/api/system';

import AddSystem from './add.vue';
import UpdateSystem from './update.vue';

export default {
  components: {
    AddSystem,
    UpdateSystem
  },
  data() {
    return {
      loading: false,
      loadingText: '拼命加载中',
      searchForm: {
        sys_name: '',
        status: ''
      },
      activeStatusJson: {
        1: '启用',
        2: '注销'
      },
      systemList: [],
      timestamp: Date.now(),
      addSystemDialogVisible: false,
      updateSystemDialogVisible: false,
      currentSystem: {
        uuid: '',
        sys_name: '',
        bank_dict_value: '',
        status: ''
      }
    };
  },
  created() {
    this.getSystemListData();
  },
  methods: {
    // 表格数据获取
    getSystemListData() {
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

      getSystemList(params)
        .then(res => {
          this.systemList = res.data.data;
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
      this.getSystemListData();
    },
    handleReset() {
      if (this.loading) return false;
      // 重置搜索条件
      for (let key in this.searchForm) {
        this.searchForm[key] = '';
      }
      this.pageSetting.page = 1;
      this.getSystemListData();
    },

    // 分页操作
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getSystemListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getSystemListData();
    },

    // 注销启用删除操作
    handleActivateSystem(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要启用吗?')
        .then(() => {
          this.loadingText = '正在启用' + this.systemList[index].sys_name;
          this.systemList[index].status = 1;
          activateSystem({
            uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
              this.$message.success('启动成功');
            })
            .catch(() => {
              this.systemList[index].status = 2;
              this.loading = false;
              this.loadingText = '拼命加载中';
            });
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleCancelSystem(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要注销吗?')
        .then(() => {
          this.loadingText = '正在注销' + this.systemList[index].sys_name;
          this.systemList[index].status = 2;
          cancelSystem({
            uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
              this.$message.success('注销成功');
            })
            .catch(() => {
              this.systemList[index].status = 1;
              this.loading = false;
              this.loadingText = '拼命加载中';
            });
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleDeleteSystem(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要删除吗?')
        .then(() => {
          this.loadingText = '正在删除' + this.systemList[index].sys_name;
          cancelSystem,
            deleteSystem({
              uuid: uuid
            })
              .then(() => {
                this.loading = false;
                this.loadingText = '拼命加载中';
                this.systemList.splice(index, 1);
                this.$message.success('删除成功');
              })
              .catch(() => {
                this.loading = false;
                this.loadingText = '拼命加载中';
              });
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 新增更新业务系统
    triggerAddSystem() {
      this.addSystemDialogVisible = true;
    },
    triggerUpdateSystem(currentSystem) {
      this.currentSystem = JSON.parse(JSON.stringify(currentSystem));
      this.updateSystemDialogVisible = true;
    },
    reloadSystemList() {
      this.addSystemDialogVisible = false;
      this.updateSystemDialogVisible = false;
      this.getSystemListData();
    },
    closeDialog() {
      this.addSystemDialogVisible = false;
      this.updateSystemDialogVisible = false;
    }
  }
};
</script>
