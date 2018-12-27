<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container expand-list-box">
      <div class="search-form-box inline-search-form-box">
        <el-form 
          ref="searchForm" 
          :model="searchForm" 
          size="medium">
          <div style="display: flex">
            <el-form-item style="width: 100%">
              <el-input 
                v-model="searchForm.name" 
                style="width: 100%;"
                placeholder="请输入模块名关键字查询">
                <el-button 
                  slot="append" 
                  :disabled="loading" 
                  icon="el-icon-search" 
                  @click="submitSearch"></el-button>
              </el-input>
            </el-form-item>
            <el-form-item 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleAdd') != -1"
              style="margin-left: 20px;flex-shrink: 0">
              <el-button 
                :disabled="loading" 
                type="success" 
                @click="triggerAddModule">添加</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div>
        <el-table 
          v-loading="loading" 
          :data="moduleList" 
          :header-cell-style="styleObject" 
          :cell-style="styleObject" 
          border
          element-loading-text="拼命加载中" 
          element-loading-spinner="el-icon-loading" 
          element-loading-background="rgba(0, 0, 0, 0.5)">
          <el-table-column type="expand">
            <template slot-scope="scope">
              <el-table 
                :show-header="false" 
                :data="scope.row.children" 
                :cell-style="styleObject"
                empty-text="暂无子模块">
                <el-table-column width="230px">
                  <template slot-scope="scope">
                    <el-button 
                      v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleDetail') != -1"
                      :disabled="loading" 
                      size="mini" 
                      type="primary" 
                      @click="triggerDetail(scope.row.uuid)">详情</el-button>
                    <el-button 
                      v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleUpdate') != -1"
                      :disabled="loading" 
                      size="mini" 
                      type="default" 
                      @click="triggerUpdate(scope.row.uuid)">编辑</el-button>
                    <el-button 
                      v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleDel') != -1"
                      :disabled="loading" 
                      size="mini" 
                      type="danger" 
                      @click="handleDelete(scope.row.uuid)">删除</el-button>
                  </template>
                </el-table-column>
                <el-table-column prop="name"></el-table-column>
                <el-table-column>
                  <template slot-scope="scope">
                    {{ moduleActiveStatusJson[scope.row.status] }}
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-table-column>
          <el-table-column 
            label="操作" 
            width="230px">
            <template slot-scope="scope">
              <el-button 
                :disabled="loading" 
                size="mini" 
                type="primary" 
                @click="triggerDetail(scope.row.uuid, scope.row)">详情</el-button>
              <el-button 
                :disabled="loading" 
                size="mini" 
                type="default" 
                @click="triggerUpdate(scope.row.uuid, scope.row)">编辑</el-button>
              <el-button 
                :disabled="loading" 
                size="mini" 
                type="danger" 
                @click="handleDelete(scope.row.uuid, scope.$index, scope.row.pid_uuid)">删除</el-button>
            </template>
          </el-table-column>
          <el-table-column 
            label="模块名" 
            prop="name">
          </el-table-column>
          <el-table-column label="状态">
            <template slot-scope="scope">
              {{ moduleActiveStatusJson[scope.row.status] }}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getModuleList, deleteModule } from '@/api/modules';

export default {
  data() {
    return {
      loading: false,
      searchForm: {
        name: ''
      },
      moduleList: [],
      moduleActiveStatusJson: {
        0: '启用',
        1: '停用'
      }
    };
  },
  created() {
    this.getModuleListData();
  },
  methods: {
    // 获取列表数据
    getModuleListData() {
      if (this.loading) return false;
      this.loading = true;

      const params = {};

      // 添加搜索条件
      for (let key in this.searchForm) {
        if (this.searchForm[key] != '') {
          params[key] = this.searchForm[key];
        }
      }

      getModuleList(params)
        .then(res => {
          this.moduleList = res.data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 搜索
    submitSearch() {
      if (this.loading) return false;
      this.getModuleListData();
    },

    // 删除、新增、更新、查看模块
    handleDelete(uuid) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要删除吗?')
        .then(() => {
          this.loadingText = '正在删除模块...';
          deleteModule({
            module_uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
              this.$message.success('删除成功');
              this.getModuleListData();
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
    triggerDetail(uuid) {
      this.$router.push({
        name: 'moduleDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerAddModule() {
      this.$router.push({
        name: 'moduleAdd'
      });
    },
    triggerUpdate(uuid) {
      this.$router.push({
        name: 'moduleUpdate',
        params: {
          uuid: uuid
        }
      });
    }
  }
};
</script>

<style lang='scss'>
.expand-list-box {
  .el-table__expanded-cell {
    padding: 0 0 0 47px;

    .el-table__body-wrapper {
      border-left: 1px solid #e4e7ed;
    }

    .el-table--border::after,
    .el-table--group::after,
    .el-table::before {
      background-color: #ffffff;
    }
  }
}
</style>
