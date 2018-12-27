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
        <el-form-item label="交易主体">
          <el-select 
            v-model="searchForm.main_body_uuid" 
            placeholder="请选择交易主体" 
            clearable 
            filterable
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
        <el-form-item label="开户行名称">
          <el-input 
            v-model="searchForm.bank_name" 
            placeholder="请输入开户行名称关键字"></el-input>
        </el-form-item>
        <el-form-item label="实付类型">
          <el-select 
            v-model="searchForm.real_pay_type"
            filterable
            placeholder="请选择实付类型" 
            clearable>
            <el-option 
              v-for="(realPayTypeStr, realPayTypeCode) in realPayTypeJson" 
              :key="realPayTypeCode" 
              :label="realPayTypeStr" 
              :value="realPayTypeCode">
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
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountAdd') != -1"
            :disabled="loading" 
            type="success" 
            @click="triggerAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table 
      v-loading="loading" 
      :data="accountList" 
      :element-loading-text="loadingText" 
      :header-cell-style="styleObject" 
      :cell-style="styleObject"
      :height="tableHeight"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.5)"
      border>
      <el-table-column 
        label="操作" 
        width="220"
        fixed>
        <template slot-scope="scope">
          <el-button 
            v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountDetail') != -1"
            :disabled="loading" 
            size="mini" 
            type="primary" 
            @click="triggerDetail(scope.row.uuid)">详情</el-button>
          <el-button 
            v-if="scope.row.deal_status == 0 && ((scope.row.add_flow_info && scope.row.add_flow_info.status == '1') 
              || (scope.row.update_flow_info && scope.row.update_flow_info.status == '1')
              || (scope.row.del_flow_info && scope.row.del_flow_info.status == '1')
              || (scope.row.enable_flow_info && scope.row.enable_flow_info.status == '1'))
            && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountReview') != -1)" 
            :disabled="loading" 
            size="mini" 
            type="success" 
            @click="triggerReview(scope.row.uuid)">
            {{ scope.row | formatApproveText }}
          </el-button>
          <el-button 
            v-if="scope.row.deal_status != 0 && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountUpdate') != -1)" 
            :disabled="loading" 
            size="mini" 
            type="default" 
            @click="triggerUpdate(scope.row.uuid)">修改</el-button>
          <el-button 
            v-if="scope.row.deal_status != 0 && scope.row.deal_status != 2 && scope.row.status == 0 && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountDel') != -1)" 
            :disabled="loading" 
            size="mini" 
            type="danger" 
            @click="handleCancel(scope.row.uuid, scope.$index)">注销</el-button>
          <el-button 
            v-if="scope.row.deal_status != 0 && scope.row.deal_status != 2 && scope.row.status != 0 && 
            ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountEnable') != -1)" 
            :disabled="loading" 
            size="mini" 
            type="success"
            @click="handleActivate(scope.row.uuid, scope.$index)">启用</el-button>
        </template>
      </el-table-column>
      <el-table-column 
        label="交易主体" 
        prop="main_body_name"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="开户行" 
        prop="bank_name"
        width="220"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="省份"
        prop="province"
        width="180"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        label="城市"
        prop="city_name"
        width="180"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="所属银行" 
        prop="short_name"
        width="160"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column 
        label="银行账号" 
        width="220"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.bank_account | filterBankAccount }}
        </template>
      </el-table-column>
      <el-table-column 
        label="实付类型"
        width="100">
        <template slot-scope="scope">
          {{ realPayTypeJson[scope.row.real_pay_type] ? realPayTypeJson[scope.row.real_pay_type] : '-' }}
        </template>
      </el-table-column>
      <el-table-column 
        label="账户余额(元)"
        width="220">
        <template slot-scope="scope">
          {{ scope.row.balance ? filterCent2YuanNoCurrencyAmount(scope.row.balance) : '0.00' }}
        </template>
      </el-table-column>
      <el-table-column
        label="可访问系统"
        width="150"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ [scope.row.interface_priv, systemListJson] | formatSystemList }}
        </template>
      </el-table-column>
      <el-table-column 
        label="开户行行号"
        width="160"
        show-overflow-tooltip>
        <template slot-scope="scope">
          {{ scope.row.bank_link_code | filterBankAccount }}
        </template>
      </el-table-column>
      <el-table-column 
        label="审核状态"
        width="80">
        <template slot-scope="scope">
          {{ orderStatusJson[scope.row.deal_status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="账户状态"
        width="80">
        <template slot-scope="scope">
          {{ accountStatusJson[scope.row.status] }}
        </template>
      </el-table-column>
      <el-table-column 
        label="创建人" 
        prop="create_user_name"
        width="100"
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
  </div>
</template>

<script>
import { getAllAccountList, activateAccount, delAccount } from '@/api/account';
import { getMainBodyEffectList } from '@/api/mainBody';
import { getSystemList } from '@/api/system';

export default {
  filters: {
    // 审核按钮文字
    formatApproveText(item) {
      if (item.add_flow_info && item.add_flow_info.status == '1') {
        return '新增审核';
      }

      if (item.update_flow_info && item.update_flow_info.status == '1') {
        return '更新审核';
      }

      if (item.del_flow_info && item.del_flow_info.status == '1') {
        return '注销审核';
      }

      if (item.enable_flow_info && item.enable_flow_info.status == '1') {
        return '启用审核';
      }

      return '';
    },
    formatSystemList(item) {
      if (item[0] && item[1]) {
        let interfacePrivArr = item[0].split(',');
        let interface_priv_str = '';
        for (let j = 0; j < interfacePrivArr.length; j++) {
          if (item[1][interfacePrivArr[j]]) {
            interface_priv_str += j
              ? ',' + item[1][interfacePrivArr[j]]
              : item[1][interfacePrivArr[j]];
          } else {
            interface_priv_str += j
              ? ',' + interfacePrivArr[j]
              : interfacePrivArr[j];
          }
        }
        return interface_priv_str;
      } else {
        return '';
      }
    }
  },
  data() {
    return {
      loading: false,
      loadingText: '拼命加载中',
      searchForm: {
        main_body_uuid: '',
        bank_name: '',
        real_pay_type: ''
      },
      accountList: [],
      currentAccount: {
        account_name: '',
        address: '',
        balance: '',
        bank_account: '',
        bank_dict_key: '',
        bank_name: '',
        city: '',
        create_time: '',
        create_user_id: '',
        deal_status: '',
        interface_priv: '',
        interface_priv_array: [],
        is_delete: '',
        main_body_name: '',
        main_body_uuid: '',
        real_pay_type: '',
        short_name: '',
        status: '',
        update_time: '',
        uuid: ''
      },
      accountStatusJson: {
        0: '正常',
        1: '冻结',
        2: '注销'
      },
      mainBodyList: [],
      mainBodyLoading: false,
      systemList: [],
      systemListJson: null,
      needAudit: false
    };
  },
  created() {
    this.getAllAccountListData();
    this.getSystemListData();
  },
  methods: {
    // 获取表格数据列表
    getAllAccountListData() {
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

      getAllAccountList(params)
        .then(res => {
          this.accountList = res.data.data;
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
      this.getAllAccountListData();
    },
    handleReset() {
      if (this.loading) return false;
      // 重置搜索条件
      for (let key in this.searchForm) {
        this.searchForm[key] = '';
      }
      this.pageSetting.page = 1;
      this.getAllAccountListData();
    },

    getMainBodyEffectListData() {
      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      getMainBodyEffectList({
        page: 1,
        limit: -1
      })
        .then(res => {
          this.mainBodyList = res.data.data;
          this.mainBodyLoading = false;
        })
        .catch(() => {
          this.mainBodyLoading = false;
        });
    },
    mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyEffectListData();
      }
    },

    // 获取业务系统数据，格式化需要
    getSystemListData() {
      getSystemList({
        page: 1,
        limit: -1
      })
        .then(res => {
          const data = res.data;
          this.systemList = data.data;
          let systemListJson = {};
          for (let i = 0; i < this.systemList.length; i++) {
            systemListJson[this.systemList[i].uuid] = this.systemList[
              i
            ].sys_name;
          }
          this.systemListJson = systemListJson;
        })
        .catch(() => {});
    },

    handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getAllAccountListData();
    },
    handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getAllAccountListData();
    },
    handleActivate(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要启用吗?')
        .then(() => {
          this.loadingText = '正在启用' + this.accountList[index].bank_name;
          activateAccount({
            uuid,
            status: 0
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
              this.$message.success('启用成功');
              this.getAllAccountListData();
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
    handleCancel(uuid, index) {
      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要注销吗?')
        .then(() => {
          this.loadingText = '正在注销' + this.accountList[index].bank_name;
          delAccount({
            uuid
          })
            .then(() => {
              this.loading = false;
              this.loadingText = '拼命加载中';
              this.$message.success('注销成功');
              this.getAllAccountListData();
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
    triggerAdd() {
      this.$router.push({
        name: 'accountAdd'
      });
    },
    triggerDetail(uuid) {
      this.$router.push({
        name: 'accountDetail',
        params: {
          uuid
        }
      });
    },
    triggerReview(uuid) {
      this.$router.push({
        name: 'accountReview',
        params: {
          uuid
        }
      });
    },
    triggerUpdate(uuid) {
      this.$router.push({
        name: 'accountUpdate',
        params: {
          uuid
        }
      });
    },
    reloadAccountList() {
      this.addAccountDialogVisible = false;
      this.updateAccountDialogVisible = false;
      this.timestamp = new Date().getTime();
      this.getAllAccountListData();
    }
  }
};
</script>
