<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="search-form-box inline-search-form-box">
      <el-form 
        ref="searchForm" 
        :model="searchForm" 
        size="medium">
        <div style="display: flex;">
          <el-form-item style="width: 100%">
            <el-input 
              v-model="searchForm.name" 
              style="width: 100%;"
              placeholder="请输入角色名关键字查询">
              <el-button 
                slot="append" 
                :disabled="loading" 
                icon="el-icon-search" 
                @click="submitSearch"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleAdd') != -1"
            style="margin-left: 20px;flex-shrink: 0">
            <el-button 
              :disabled="loading" 
              type="success" 
              @click="triggerAdd">添加</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      :data="roleList" 
      :header-cell-style="styleObject" 
      :cell-style="styleObject" 
      :height="tableHeight"
      border
      element-loading-text="拼命加载中" 
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)">
      <el-table-column 
        label="操作" 
        width="230px">
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleUpdate') != -1"
            :disabled="loading" 
            size="mini" 
            type="primary" 
            @click="triggerUpdate(scope.row.uuid)">编辑</el-button>
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleAuthUpdate') != -1"
            :disabled="loading" 
            size="mini" 
            type="default" 
            @click="triggerAuthUpdate(scope.row.uuid)">授权</el-button>
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleDel') != -1"
            :disabled="loading" 
            size="mini" 
            type="danger" 
            @click="handleDelete(scope.row.uuid, scope.$index)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        label="角色名" 
        prop="name">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ roleActiveStatusJson[scope.row.status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="更新时间" 
        prop="update_time">
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
import { getRoleList, deleteRole } from '@/api/roles';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        name: ''
      },
      roleList: [],
      roleActiveStatusJson: {
        1: '启用',
        2: '停用'
      }
    };
  },
  created() {
    this.getRoleListData();
  },
  methods: {
    // 获取表格列表数据
    getRoleListData() {
      if (this.loading) return false;
      this.loading = true;

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

      getRoleList(params)
        .then(res => {
          this.roleList = res.data.data;
          this.pageSetting.page = parseInt(res.data.page);
          this.pageSetting.count = parseInt(res.data.count);
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 搜索
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getRoleListData();
    },

    // 分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getRoleListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getRoleListData();
    },

    // 新增、更新、授权、删除
    triggerAdd() {
      this.$router.push({
        name: 'roleAdd'
      });
    },
    triggerUpdate(uuid) {
      this.$router.push({
        name: 'roleUpdate',
        params: {
          uuid: uuid
        }
      });
    },
    triggerAuthUpdate(uuid) {
      this.$router.push({
        name: 'roleAuthUpdate',
        params: {
          uuid: uuid
        }
      });
    },
    handleDelete(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确认删除吗？')
        .then(() => {
          this.loadingText = '正在删除角色...';
          deleteRole({
            role_uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
              this.$message.success('角色删除成功');
              this.roleList.splice(index, 1);
            })
            .catch(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
            });
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>
