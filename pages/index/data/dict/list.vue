<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="search-form-box">
      <el-form 
        ref="searchForm" 
        :inline="true" 
        :model="searchForm" 
        label-width="60px" 
        label-position="left" 
        size="mini">
        <el-form-item label="类型">
          <el-select 
            v-model="searchForm.dict_type" 
            placeholder="请选择类型" 
            clearable 
            filterable
            @visible-change="dictTypeSelectToggle">
            <el-option 
              v-for="item in dictTypeList" 
              :key="item.uuid" 
              :label="item.dict_type" 
              :value="item.dict_type">
            </el-option>
            <el-option 
              v-loading="dictTypeLoading" 
              v-if="dictTypeLoading" 
              key="dictTypeLoading" 
              disabled 
              element-loading-spinner="el-icon-loading"
              label="" 
              value="loading"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input 
            v-model="searchForm.dict_desc" 
            placeholder="请输入描述关键字"></el-input>
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
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.DictCreate') != -1"
            :disabled="loading" 
            type="success" 
            @click="triggerAddDict">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      :data="dictList" 
      :element-loading-text="loadingText" 
      :header-cell-style="styleObject" 
      :cell-style="styleObject"
      :height="tableHeight"
      element-loading-spinner="el-icon-loading" 
      element-loading-background="rgba(0, 0, 0, 0.5)"
      border>
      <el-table-column 
        label="操作" 
        width="160">
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.DictUpdate') != -1"
            :disabled="loading" 
            size="mini" 
            type="primary" 
            @click="triggerUpdateDict(scope.row)">修改</el-button>
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.DictKvDel') != -1"
            :disabled="loading" 
            size="mini" 
            type="danger" 
            @click="handleDeleteDict(scope.row.uuid, scope.$index)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        label="键值" 
        prop="dict_key"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="标签" 
        prop="dict_value"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="类型" 
        prop="dict_type"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="描述" 
        prop="dict_desc"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="排序" 
        prop="index">
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
      v-if="addDictDialogVisible"
      :append-to-body="true"
      :key="'addDictDialog' + timestamp" 
      :visible.sync="addDictDialogVisible" 
      title="新增数据字典" 
      left 
      @close="timestamp = Date.now()">
      <add-dict 
        @addDictSuccess="reloadDictList" 
        @closeDialog="closeDialog"></add-dict>
    </el-dialog>
    <el-dialog 
      v-if="updateDictDialogVisible"
      :append-to-body="true"
      :key="'updateDictDialog' + timestamp" 
      :visible.sync="updateDictDialogVisible" 
      title="更新数据字典" 
      left 
      @close="timestamp = Date.now()">
      <update-dict 
        :current-dict="currentDict" 
        @updateDictSuccess="reloadDictList" 
        @closeDialog="closeDialog"></update-dict>
    </el-dialog>
  </div>
</template>

<script>
import { getDictList, getDictTypeList, deleteDict } from '@/api/dict';

import AddDict from './add.vue';
import UpdateDict from './update.vue';

export default {
  components: {
    AddDict,
    UpdateDict
  },
  data() {
    return {
      loading: false,
      loadingText: '拼命加载中',
      searchForm: {
        dict_type: '',
        dict_desc: ''
      },
      dictList: [],
      dictTypeList: [],
      dictTypeLoading: false,
      timestamp: Date.now(),
      addDictDialogVisible: false,
      updateDictDialogVisible: false,
      currentDict: {
        dict_desc: '',
        dict_key: '',
        dict_type: '',
        dict_value: '',
        index: '',
        uuid: ''
      }
    };
  },
  created() {
    this.getDictListData();
  },
  methods: {
    // 表格数据获取
    getDictListData() {
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

      getDictList(params)
        .then(res => {
          this.dictList = res.data.data;
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
      this.getDictListData();
      return false;
    },
    handleReset() {
      if (this.loading) return false;
      // 重置搜索条件
      for (let key in this.searchForm) {
        this.searchForm[key] = '';
      }
      this.pageSetting.page = 1;
      this.getDictListData();

      return false;
    },

    // 搜索参数数据获取
    getDictTypeListData() {
      if (this.dictTypeLoading) {
        return false;
      }
      this.dictTypeLoading = true;
      getDictTypeList({})
        .then(res => {
          this.dictTypeList = res.data.data;
          this.dictTypeLoading = false;
        })
        .catch(() => {
          this.dictTypeLoading = false;
        });
    },
    dictTypeSelectToggle(show) {
      if (show && !this.dictTypeLoading && !this.dictTypeList.length) {
        this.getDictTypeListData();
      }
    },

    // 分页
    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getDictListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getDictListData();
    },

    // 删除字典
    handleDeleteDict(uuid, index) {
      if (this.loading) return false;
      this.loading = true;

      this.mconfirm('确定要删除吗?')
        .then(() => {
          this.loadingText = '正在删除' + this.dictList[index].dict_value;
          deleteDict({
            uuid: uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
              this.dictList.splice(index, 1);
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

    // 新增和更新字典
    triggerAddDict() {
      this.addDictDialogVisible = true;
    },
    triggerUpdateDict(currentDict) {
      Object.assign(this.currentDict, currentDict);
      this.updateDictDialogVisible = true;
    },
    reloadDictList() {
      this.addDictDialogVisible = false;
      this.updateDictDialogVisible = false;
      this.getDictListData();
    },
    closeDialog() {
      this.addDictDialogVisible = false;
      this.updateDictDialogVisible = false;
    }
  }
};
</script>
