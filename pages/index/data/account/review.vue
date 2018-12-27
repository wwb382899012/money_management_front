<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>{{ resolveBtnTxt }}</span>
        </div>
        <el-form 
          ref="reviewAccount" 
          :model="reviewAccount" 
          :rules="rules"
          label-width="140px" 
          label-position="left" 
          size="small">
          <el-form-item 
            label="交易主体" 
            prop="main_body_name">
            <el-input 
              v-model="reviewAccount.main_body_name" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="所属银行" 
            prop="short_name">
            <el-input 
              v-model="reviewAccount.short_name" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            v-if="reviewAccount.provinceCityStr" 
            label="开户行所在省市" 
            prop="province">
            <el-input 
              v-model="reviewAccount.provinceCityStr" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="开户行全称" 
            prop="bank_name">
            <el-input 
              v-model="reviewAccount.bank_name" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="开户行行号" 
            prop="bank_link_code">
            <el-input 
              v-model="reviewAccount.bank_link_code_str" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="银行账号" 
            prop="bank_account">
            <el-input 
              v-model="reviewAccount.bank_account_str" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="开户户名" 
            prop="account_name">
            <el-input 
              v-model="reviewAccount.account_name" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="可访问系统列表" 
            prop="interface_priv_str">
            <el-input 
              v-model="reviewAccount.interface_priv_str" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="实付类型" 
            prop="real_pay_type">
            <el-input 
              v-model="realPayTypeJson[reviewAccount.real_pay_type]" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="开户行地址" 
            prop="address">
            <el-input 
              v-model="reviewAccount.address" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="开户行所属区域" 
            prop="area">
            <el-input 
              v-model="reviewAccount.areaStr" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="余额" 
            prop="balance">
            <el-input 
              v-model="reviewAccount.balanceStr" 
              disabled>
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item 
            label="审核状态" 
            prop="deal_status">
            <el-input 
              v-model="orderStatusJson[reviewAccount.deal_status]" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="账户状态" 
            prop="status">
            <el-input 
              v-model="accountStatusJson[reviewAccount.status]" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="创建时间" 
            prop="create_time">
            <el-input 
              v-model="reviewAccount.create_time" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="审核意见" 
            prop="review_comments">
            <el-input 
              v-model="reviewAccount.review_comments" 
              type="textarea" 
              placeholder="请输入审核意见"></el-input>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="flowCode && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountReview') != -1)" 
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="resolveAccount('reviewAccount')">{{ resolveBtnTxt }}</el-button>
            <el-button 
              v-if="flowCode && ($store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountReview') != -1)" 
              :disabled="loading" 
              size="medium" 
              type="danger" 
              @click="rejectAccount('reviewAccount')">{{ rejectBtnTxt }}</el-button>
            <tp-historyback 
              name="accountList"
              size="medium"></tp-historyback>
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
                    v-if="reviewAccount.add_node_list" 
                    :data="reviewAccount.add_node_list">
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
                    v-if="reviewAccount.update_node_list" 
                    :data="reviewAccount.update_node_list">
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
                  label="注销操作" 
                  name="del">
                  <el-table 
                    v-if="reviewAccount.del_node_list" 
                    :data="reviewAccount.del_node_list">
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
                  label="启用操作" 
                  name="enable">
                  <el-table 
                    v-if="reviewAccount.enable_node_list" 
                    :data="reviewAccount.enable_node_list">
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
              </el-tabs>
            </div>
          </el-card>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import {
  getAccountDetail,
  accountFlowResolve,
  accountFlowReject,
  getBankInfoList
} from '@/api/account';
import { getSystemList } from '@/api/system';

export default {
  data() {
    const checkComments = (rule, value, callback) => {
      if (this.isReject) {
        if (value == '') {
          return callback(new Error('请填写驳回原因'));
        }
        if (value.length > 100) {
          return callback(new Error('驳回原因长度不能超过100个字符'));
        }
      }

      if (this.isStop) {
        if (value == '') {
          return callback(new Error('请填写拒绝原因'));
        }
        if (value.length > 100) {
          return callback(new Error('驳回原因长度不能超过100个字符'));
        }
      }

      if (value.length > 100) {
        return callback(new Error('审核意见长度不能超过100个字符'));
      }

      callback();
    };

    return {
      activeName: 'add',
      loading: false,
      reviewAccount: {
        uuid: '',
        short_name: '',
        bank_name: '',
        bank_link_code: '',
        bank_link_code_str: '',
        bank_dict_key: '',
        bank_account: '',
        account_name: '',
        interface_priv: '',
        interface_priv_str: '',
        main_body_uuid: '',
        main_body_name: '',
        real_pay_type: '',
        balance: '',
        address: '',
        province: '',
        city: '',
        provinceCityStr: '',
        area: '',
        areaStr: '',
        review_comments: '',
        add_node_list: [],
        update_node_list: [],
        del_node_list: [],
        enable_node_list: []
      },
      rules: {
        review_comments: [
          {
            validator: checkComments,
            trigger: 'blur'
          }
        ]
      },
      accountStatusJson: {
        0: '正常',
        1: '冻结',
        2: '注销'
      },
      bankAddresssAreaCodesJson: null,
      bankDataLoading: false,
      systemList: [],
      systemLoading: false,
      resolveBtnTxt: '',
      rejectBtnTxt: '',
      flowCode: ''
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'accountList'
      });
    } else {
      this.reviewAccount.uuid = this.$route.params.uuid;
      this.loading = true;
      getAccountDetail({
        uuid: this.reviewAccount.uuid
      })
        .then(res => {
          Object.assign(this.reviewAccount, res.data);

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
      this.reviewAccount.bank_link_code_str = this.filterBankAccount(
        this.reviewAccount.bank_link_code
      );
      this.reviewAccount.bank_account_str = this.filterBankAccount(
        this.reviewAccount.bank_account
      );
      const statusJson = this.getFlowStatus();
      this.resolveBtnTxt = statusJson.resolveBtnTxt;
      this.rejectBtnTxt = statusJson.rejectBtnTxt;
      this.flowCode = statusJson.flowCode;

      this.reviewAccount.balanceStr = this.filterCent2YuanNoCurrencyAmount(
        this.reviewAccount.balance
      );

      this.reviewAccount.provinceCityStr =
        this.reviewAccount.province + this.reviewAccount.city_name;

      if (this.reviewAccount.area) {
        this.getBankInfoListData();
      } else {
        this.reviewAccount.areaStr = '-';
      }

      if (this.reviewAccount.interface_priv) {
        this.getSystemListData();
      } else {
        this.reviewAccount.interface_priv_str = '-';
      }

      if (
        this.reviewAccount.add_flow_info &&
        this.reviewAccount.add_flow_info.node_list
      ) {
        this.reviewAccount.add_node_list = this.reviewAccount.add_flow_info.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.reviewAccount.add_node_list = [];
      }
      if (
        this.reviewAccount.update_flow_info &&
        this.reviewAccount.update_flow_info.node_list
      ) {
        this.reviewAccount.update_node_list = this.reviewAccount.update_flow_info.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.reviewAccount.update_node_list = [];
      }
      if (
        this.reviewAccount.del_flow_info &&
        this.reviewAccount.del_flow_info.node_list
      ) {
        this.reviewAccount.del_node_list = this.reviewAccount.del_flow_info.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.reviewAccount.del_node_list = [];
      }
      if (
        this.reviewAccount.enable_flow_info &&
        this.reviewAccount.enable_flow_info.node_list
      ) {
        this.reviewAccount.enable_node_list = this.reviewAccount.enable_flow_info.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.reviewAccount.enable_node_list = [];
      }
    },
    // 获取当前审批流参数
    getFlowStatus() {
      if (
        this.reviewAccount.add_flow_info &&
        this.reviewAccount.add_flow_info.status == '1'
      ) {
        return {
          resolveBtnTxt: '新增审核',
          rejectBtnTxt: '新增驳回',
          flowCode: 'account_add_apply'
        };
      }

      if (
        this.reviewAccount.update_flow_info &&
        this.reviewAccount.update_flow_info.status == '1'
      ) {
        return {
          resolveBtnTxt: '更新审核',
          rejectBtnTxt: '更新驳回',
          flowCode: 'account_update_apply'
        };
      }

      if (
        this.reviewAccount.del_flow_info &&
        this.reviewAccount.del_flow_info.status == '1'
      ) {
        return {
          resolveBtnTxt: '注销审核',
          rejectBtnTxt: '注销驳回',
          flowCode: 'account_del_apply'
        };
      }

      if (
        this.reviewAccount.enable_flow_info &&
        this.reviewAccount.enable_flow_info.status == '1'
      ) {
        return {
          resolveBtnTxt: '启用审核',
          rejectBtnTxt: '启用驳回',
          flowCode: 'account_enable_apply'
        };
      }

      return {
        resolveBtnTxt: '',
        rejectBtnTxt: '',
        flowCode: ''
      };
    },

    // 通过审核
    resolveAccount(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm(`确定要通过账户${this.resolveBtnTxt}吗?`)
            .then(() => {
              this.mshowLoading('正在提交审核...');

              accountFlowResolve({
                instance_id: this.reviewAccount.uuid,
                info: this.reviewAccount.review_comments,
                flow_code: this.flowCode
              })
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$router.replace({
                    name: 'accountList'
                  });
                })
                .catch(() => {
                  this.mhideLoading();
                  this.loading = false;
                });
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          this.loading = false;
          this.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    },

    // 驳回
    rejectAccount(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewAccount.review_comments &&
        this.reviewAccount.review_comments.length <= 100
      ) {
        this.isReject = false;
        this.mconfirm('确定要驳回吗?')
          .then(() => {
            this.mshowLoading('正在驳回...');

            // 获取审核参数
            accountFlowReject({
              instance_id: this.reviewAccount.uuid,
              info: this.reviewAccount.review_comments,
              flow_code: this.flowCode
            })
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('驳回成功');
                this.$router.replace({
                  name: 'accountList'
                });
              })
              .catch(() => {
                this.loading = false;
                this.mhideLoading();
              });
          })
          .catch(() => {
            this.loading = false;
          });
      } else {
        this.loading = false;
        this.isReject = false;
        this.$message.warning('请完善数据填写后重试');
        return false;
      }
    },

    // 获取银行列表，格式化需要
    getBankInfoListData() {
      if (this.bankDataLoading) {
        return false;
      }
      this.bankDataLoading = true;
      const bankIndex = this.reviewAccount.bank_dict_key
        ? this.reviewAccount.bank_dict_key
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
              this.reviewAccount.area &&
              this.bankAddresssAreaCodesJson[this.reviewAccount.area]
            ) {
              this.reviewAccount.areaStr = this.bankAddresssAreaCodesJson[
                this.reviewAccount.area
              ];
            } else {
              this.reviewAccount.areaStr = '-';
            }
          }

          this.bankDataLoading = false;
        })
        .catch(() => {
          this.bankDataLoading = false;
        });
    },
    // 获取系统列表，格式化需要
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
          if (this.reviewAccount.interface_priv) {
            if (this.reviewAccount.interface_priv.indexOf(',')) {
              interfacePrivArr = this.reviewAccount.interface_priv.split(',');
            } else {
              interfacePrivArr.push(this.reviewAccount.interface_priv);
            }
          }
          let systemList = {};
          for (let i = 0; i < this.systemList.length; i++) {
            systemList[this.systemList[i].uuid] = this.systemList[i].sys_name;
          }
          for (let j = 0; j < interfacePrivArr.length; j++) {
            if (systemList[interfacePrivArr[j]]) {
              this.reviewAccount.interface_priv_str += j
                ? ',' + systemList[interfacePrivArr[j]]
                : systemList[interfacePrivArr[j]];
            } else {
              this.reviewAccount.interface_priv_str += j
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
