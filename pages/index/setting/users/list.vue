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
        <el-form-item label="用户名">
          <el-input 
            v-model="searchForm.username" 
            placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="用户主体">
          <el-select 
            v-model="searchForm.main_body_uuid" 
            clearable
            filterable
            placeholder="请选择用户主体" 
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
        <el-form-item label="用户角色">
          <el-select 
            :loading="roleLoading" 
            v-model="searchForm.role_uuid" 
            clearable
            filterable
            placeholder="请选择用户角色" 
            @visible-change="roleSelectToggle">
            <el-option 
              v-for="item in roleList" 
              :key="item.uuid" 
              :label="item.name" 
              :value="item.uuid">
            </el-option>
            <el-option 
              v-loading="roleLoading" 
              v-if="roleLoading" 
              key="roleloading" 
              disabled 
              element-loading-spinner="el-icon-loading"
              label="" 
              value="loading"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button 
            :disabled="loading" 
            type="primary" 
            @click="submitSearch">查询</el-button>
          <el-button 
            :disabled="loading" 
            type="success" 
            @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      :data="userList" 
      :header-cell-style="styleObject" 
      :cell-style="styleObject" 
      :height="tableHeight"
      border
      element-loading-text="拼命加载中" 
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)">
      <el-table-column 
        label="操作" 
        width="80px">
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.user.UserUpdate') != -1"
            :disabled="loading" 
            size="mini" 
            type="primary" 
            @click="triggerUpdate(scope.row.user_id)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        label="用户名" 
        prop="username">
      </el-table-column>
      <el-table-column 
        label="姓名" 
        prop="name">
      </el-table-column>
      <el-table-column label="角色">
        <template slot-scope="scope">
          {{ scope.row.role_name ? scope.row.role_name : '-' }}
        </template>
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ activeStatusJson[scope.row.status] }}
        </template>
      </el-table-column>
      <el-table-column label="最后登录时间">
        <template slot-scope="scope">
          {{ scope.row.last_login_datetime ? scope.row.last_login_datetime : '-' }}
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
import { getUserList } from '@/api/users';
import { getMainBodyList } from '@/api/mainBody';
import { getRoleList } from '@/api/roles';

export default {
  data() {
    return {
      searchForm: {
        username: '',
        main_body_uuid: '',
        role_uuid: ''
      },
      activeStatusJson: {
        1: '启用',
        2: '注销'
      },
      loading: false,
      userList: [],
      roleList: [],
      roleLoading: false,
      mainBodyList: [],
      mainBodyLoading: false
    };
  },
  created() {
    this.getUserListData();
  },
  methods: {
    getRoleListData() {
      if (this.roleLoading) {
        return false;
      }
      this.roleLoading = true;
      getRoleList({
        page: 1,
        limit: -1
      })
        .then(res => {
          const data = res.data;
          this.roleList = data.data;
          this.roleLoading = false;
        })
        .catch(() => {
          this.roleLoading = false;
        });
    },
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
    roleSelectToggle(show) {
      if (show && !this.roleLoading && !this.roleList.length) {
        this.getRoleListData();
      }
    },
    mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyListData();
      }
    },
    getUserListData(mshowLoading) {
      if (this.loading) return false;

      this.loading = true;

      // 是否显示全屏loading
      mshowLoading && this.mshowLoading('正在搜索用户列表...');

      // 获取列表参数, 接入搜索参数
      let params = {
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      // 添加搜索条件
      if (this.searchForm.username) {
        params.username = this.searchForm.username;
      }

      if (this.searchForm.main_body_uuid) {
        params.main_body_uuid = [];
        params.main_body_uuid.push(this.searchForm.main_body_uuid);
      }

      if (this.searchForm.role_uuid) {
        params.role_uuid = [];
        params.role_uuid.push(this.searchForm.role_uuid);
      }

      getUserList(params)
        .then(res => {
          this.userList = res.data.data;
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

    // 分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getUserListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getUserListData();
    },

    // 更新
    triggerUpdate(userid) {
      this.$router.push({
        name: 'userUpdate',
        params: {
          userid: userid
        }
      });
    },

    // 搜索和重置
    submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getUserListData(true);
    },
    resetSearch() {
      if (this.loading) return false;
      this.searchForm = {
        username: '',
        main_body_uuid: [],
        role_uuid: []
      };
      this.pageSetting.page = 1;
      this.getUserListData(true);
    }
  }
};
</script>
