<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>银行账户详情</span>
        </div>
        <el-form 
          ref="detailAccount" 
          :model="detailAccount" 
          label-width="140px" 
          label-position="left" 
          size="small">
          <el-form-item 
            label="交易主体" 
            prop="main_body_name">
            <div 
              class="sub-text" 
              v-text="detailAccount.main_body_name"></div>
          </el-form-item>
          <el-form-item 
            label="所属银行" 
            prop="short_name">
            <div 
              class="sub-text" 
              v-text="detailAccount.short_name"></div>
          </el-form-item>
          <el-form-item 
            label="开户行所在省市" 
            prop="province">
            <div 
              class="sub-text" 
              v-text="detailAccount.provinceCityStr"></div>
          </el-form-item>
          <el-form-item 
            label="开户行全称" 
            prop="bank_name">
            <div 
              class="sub-text" 
              v-text="detailAccount.bank_name"></div>
          </el-form-item>
          <el-form-item 
            label="开户行行号" 
            prop="bank_link_code">
            <div class="sub-text">{{ detailAccount.bank_link_code | filterBankAccount }}</div>
          </el-form-item>
          <el-form-item 
            label="银行账号" 
            prop="bank_account">
            <div 
              class="sub-text" 
            >{{ detailAccount.bank_account | filterBankAccount }}</div>
          </el-form-item>
          <el-form-item 
            label="开户户名" 
            prop="account_name">
            <div 
              class="sub-text" 
              v-text="detailAccount.account_name"></div>
          </el-form-item>
          <el-form-item 
            label="可访问系统列表" 
            prop="interface_priv">
            <div 
              class="sub-text" 
              v-text="detailAccount.interface_priv_str"></div>
          </el-form-item>
          <el-form-item 
            label="实付类型" 
            prop="real_pay_type">
            <div 
              class="sub-text" 
              v-text="realPayTypeJson[detailAccount.real_pay_type]"></div>
          </el-form-item>
          <el-form-item 
            label="开户行地址" 
            prop="address">
            <div 
              class="sub-text" 
              v-text="detailAccount.address"></div>
          </el-form-item>
          <el-form-item 
            label="开户行所属区域" 
            prop="area">
            <div class="sub-text">{{ detailAccount.areaStr ? detailAccount.areaStr : '-' }}</div>
          </el-form-item>
          <el-form-item 
            label="余额" 
            prop="balance">
            <div 
              class="sub-text" 
              v-text="detailAccount.balanceStr">
            </div>
          </el-form-item>
          <el-form-item 
            label="审核状态" 
            prop="deal_status">
            <div 
              class="sub-text" 
              v-text="orderStatusJson[detailAccount.deal_status]"></div>
          </el-form-item>
          <el-form-item 
            label="账户状态" 
            prop="status">
            <div 
              class="sub-text" 
              v-text="accountStatusJson[detailAccount.status]"></div>
          </el-form-item>
          <el-form-item 
            label="创建时间" 
            prop="create_time">
            <div 
              class="sub-text" 
              v-text="detailAccount.create_time"></div>
          </el-form-item>
          <el-form-item 
            class="last-form-line"
            label="更新时间" 
            prop="update_time">
            <div 
              class="sub-text" 
              v-text="detailAccount.update_time"></div>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <tp-historyback 
              name="accountList"
              type="primary"
              size="medium"
              style="width: 100px"></tp-historyback>
          </el-form-item>

          <el-card class="box-card">
            <div slot="header">
              <span>操作日志</span>
            </div>
            <div>
              <el-tabs 
                v-model="activeName"
                type="border-card">
                <el-tab-pane 
                  label="新增操作" 
                  name="add">
                  <el-table 
                    v-if="detailAccount.add_node_list" 
                    :data="detailAccount.add_node_list">
                    <el-table-column 
                      label="操作人" 
                      prop="optor_name">
                    </el-table-column>
                    <el-table-column 
                      label="操作类型" 
                      prop="node_desc">
                    </el-table-column>
                    <el-table-column 
                      label="操作时间" 
                      prop="update_time">
                    </el-table-column>
                    <el-table-column label="处理意见">
                      <template slot-scope="scope">
                        {{ nodeStatusJson[scope.row.node_status] + (scope.row.deal_remark ? scope.row.deal_remark : '无') }}
                      </template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane 
                  label="更新操作" 
                  name="update">
                  <el-table 
                    v-if="detailAccount.update_node_list" 
                    :data="detailAccount.update_node_list">
                    <el-table-column 
                      label="操作人" 
                      prop="optor_name">
                    </el-table-column>
                    <el-table-column 
                      label="操作类型" 
                      prop="node_desc">
                    </el-table-column>
                    <el-table-column 
                      label="操作时间" 
                      prop="update_time">
                    </el-table-column>
                    <el-table-column label="处理意见">
                      <template slot-scope="scope">
                        {{ scope.row.deal_remark ? scope.row.deal_remark : '无' }}
                      </template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane 
                  label="注销操作" 
                  name="del">
                  <el-table 
                    v-if="detailAccount.del_node_list" 
                    :data="detailAccount.del_node_list">
                    <el-table-column 
                      label="操作人" 
                      prop="optor_name">
                    </el-table-column>
                    <el-table-column 
                      label="操作类型" 
                      prop="node_desc">
                    </el-table-column>
                    <el-table-column 
                      label="操作时间" 
                      prop="update_time">
                    </el-table-column>
                    <el-table-column label="处理意见">
                      <template slot-scope="scope">
                        {{ scope.row.deal_remark ? scope.row.deal_remark : '无' }}
                      </template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane 
                  label="启用操作" 
                  name="enable">
                  <el-table 
                    v-if="detailAccount.enable_node_list" 
                    :data="detailAccount.enable_node_list">
                    <el-table-column 
                      label="操作人" 
                      prop="optor_name">
                    </el-table-column>
                    <el-table-column 
                      label="操作类型" 
                      prop="node_desc">
                    </el-table-column>
                    <el-table-column 
                      label="操作时间" 
                      prop="update_time">
                    </el-table-column>
                    <el-table-column label="处理意见">
                      <template slot-scope="scope">
                        {{ scope.row.deal_remark ? scope.row.deal_remark : '无' }}
                      </template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-card>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import { getAccountDetail, getBankInfoList } from '@/api/account';
import { getSystemList } from '@/api/system';

export default {
  data() {
    return {
      activeName: 'add',
      loading: false,
      detailAccount: {
        uuid: '',
        short_name: '',
        bank_name: '',
        bank_link_code: '',
        bank_dict_key: '',
        bank_account: '',
        account_name: '',
        interface_priv: '',
        interface_priv_str: '',
        main_body_uuid: '',
        main_body_name: '',
        real_pay_type: '',
        balance: '',
        balanceStr: '',
        address: '',
        province: '',
        city: '',
        provinceCityStr: '',
        area: '',
        areaStr: '',
        add_node_list: [],
        update_node_list: [],
        del_node_list: [],
        enable_node_list: []
      },
      accountStatusJson: {
        0: '正常',
        1: '冻结',
        2: '注销'
      },
      bankAddresssAreaCodesJson: null,
      bankDataLoading: false,
      systemList: [],
      systemLoading: false
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'accountList'
      });
    } else {
      this.detailAccount.uuid = this.$route.params.uuid;
      this.loading = true;
      getAccountDetail({
        uuid: this.detailAccount.uuid
      })
        .then(res => {
          Object.assign(this.detailAccount, res.data);

          this.formatDetailData();

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  },
  methods: {
    // 格式化详情数据
    formatDetailData() {
      this.detailAccount.balanceStr = this.filterCent2YuanCurrencyAmount([
        this.detailAccount.balance
      ]);

      this.detailAccount.provinceCityStr =
        this.detailAccount.province + this.detailAccount.city_name;

      if (this.detailAccount.area) {
        this.getBankInfoListData();
      }

      if (this.detailAccount.interface_priv) {
        this.getSystemListData();
      }

      if (
        this.detailAccount.add_flow_info &&
        this.detailAccount.add_flow_info.node_list
      ) {
        this.detailAccount.add_node_list = this.detailAccount.add_flow_info.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.detailAccount.add_node_list = [];
      }
      if (
        this.detailAccount.update_flow_info &&
        this.detailAccount.update_flow_info.node_list
      ) {
        this.detailAccount.update_node_list = this.detailAccount.update_flow_info.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.detailAccount.update_node_list = [];
      }
      if (
        this.detailAccount.del_flow_info &&
        this.detailAccount.del_flow_info.node_list
      ) {
        this.detailAccount.del_node_list = this.detailAccount.del_flow_info.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.detailAccount.del_node_list = [];
      }
      if (
        this.detailAccount.enable_flow_info &&
        this.detailAccount.enable_flow_info.node_list
      ) {
        this.detailAccount.enable_node_list = this.detailAccount.enable_flow_info.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.detailAccount.enable_node_list = [];
      }
    },
    // 获取银行列表数据，格式化需要
    getBankInfoListData() {
      if (this.bankDataLoading) {
        return false;
      }
      this.bankDataLoading = true;
      const bankIndex = this.detailAccount.bank_dict_key
        ? this.detailAccount.bank_dict_key
        : '1';
      getBankInfoList({
        bank: bankIndex
      })
        .then(res => {
          const data = res.data;

          // 获取银行地区列表
          this.bankAddresssAreaCodesJson = null;
          if (JSON.stringify(data.areaCodes) != '[]') {
            this.bankAddresssAreaCodesJson = data.areaCodes;
            if (
              this.detailAccount.area &&
              this.bankAddresssAreaCodesJson[this.detailAccount.area]
            ) {
              this.detailAccount.areaStr = this.bankAddresssAreaCodesJson[
                this.detailAccount.area
              ];
            }
          }

          this.bankDataLoading = false;
        })
        .catch(() => {
          this.bankDataLoading = false;
        });
    },
    // 获取业务系统数据，格式化需要
    getSystemListData() {
      if (this.systemLoading) {
        return false;
      }
      this.systemLoading = true;
      getSystemList({
        page: 1,
        limit: -1
      })
        .then(res => {
          const data = res.data;
          this.systemList = data.data;
          let interfacePrivArr = [];
          if (this.detailAccount.interface_priv) {
            if (this.detailAccount.interface_priv.indexOf(',')) {
              interfacePrivArr = this.detailAccount.interface_priv.split(',');
            } else {
              interfacePrivArr.push(this.detailAccount.interface_priv);
            }
          }
          let systemList = {};
          for (let i = 0; i < this.systemList.length; i++) {
            systemList[this.systemList[i].uuid] = this.systemList[i].sys_name;
          }
          for (let j = 0; j < interfacePrivArr.length; j++) {
            if (systemList[interfacePrivArr[j]]) {
              this.detailAccount.interface_priv_str += j
                ? ',' + systemList[interfacePrivArr[j]]
                : systemList[interfacePrivArr[j]];
            } else {
              this.detailAccount.interface_priv_str += j
                ? ',' + interfacePrivArr[j]
                : interfacePrivArr[j];
            }
          }
          this.systemLoading = false;
        })
        .catch(() => {
          this.systemLoading = false;
        });
    }
  }
};
</script>
