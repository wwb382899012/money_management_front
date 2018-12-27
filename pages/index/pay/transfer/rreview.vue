<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-tabs 
        v-model="activeName" 
        type="card">
        <el-tab-pane 
          label="调拨复核" 
          name="first">
          <el-card>
            <div 
              slot="header" 
              class="clearfix">
              <span>付款调拨复核</span>
            </div>
            <el-form 
              ref="reviewTransfer" 
              :model="reviewTransfer" 
              :rules="rules" 
              label-width="140px" 
              label-position="left" 
              size="small">
              <el-form-item 
                class="el-form-item-width-half"
                label="系统来源" 
                prop="system_flag">
                <el-input 
                  v-model="reviewTransfer.system_flag" 
                  disabled></el-input>
              </el-form-item>
              <div class="form-line">
                <el-form-item 
                  label="资金交易编号" 
                  prop="transfer_num">
                  <el-input 
                    v-model="reviewTransfer.transfer_num" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="付款类别" 
                  prop="transfer_pay_type">
                  <el-input 
                    v-model="reviewTransfer.transfer_pay_type" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="付款方" 
                  prop="pay_main_body">
                  <el-input 
                    v-model="reviewTransfer.pay_main_body" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="收款方" 
                  prop="collect_main_body">
                  <el-input 
                    v-model="reviewTransfer.collect_main_body" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  :class="{'highlight-change-item': changeKeysList.indexOf('pay_account_uuid') != -1}" 
                  label="付款方银行名称" 
                  prop="pay_bank_name">
                  <el-input 
                    v-model="reviewTransfer.pay_bank_name" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  :class="{'highlight-change-item': changeKeysList.indexOf('collect_account_uuid') != -1}"
                  label="收款方银行名称" 
                  prop="collect_bank_name">
                  <el-input 
                    v-model="reviewTransfer.collect_bank_name" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  :class="{'highlight-change-item': changeKeysList.indexOf('pay_account_uuid') != -1}"
                  label="付款方银行账号" 
                  prop="pay_bank_account">
                  <el-input 
                    v-model="reviewTransfer.pay_bank_account_str" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  :class="{'highlight-change-item': changeKeysList.indexOf('collect_account_uuid') != -1}"
                  label="收款方银行账号" 
                  prop="collect_bank_account">
                  <el-input 
                    v-model="reviewTransfer.collect_bank_account_str" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div 
                v-if="reviewTransfer.real_pay_type == 2" 
                class="form-line">
                <el-form-item 
                  :class="{'highlight-change-item': changeKeysList.indexOf('real_pay_type') != -1}"
                  label="实付类型" 
                  prop="real_pay_type">
                  <el-input 
                    v-model="realPayTypeJson[reviewTransfer.real_pay_type]" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="加密狗密码" 
                  prop="jmgPassWord">
                  <el-input 
                    v-model="reviewTransfer.jmgPassWord" 
                    type="password" 
                    placeholder="请输入加密狗密码"></el-input>
                </el-form-item>
              </div>
              <el-form-item 
                v-else 
                :class="{'highlight-change-item': changeKeysList.indexOf('real_pay_type') != -1}"
                class="el-form-item-width-half" 
                label="实付类型" 
                prop="real_pay_type">
                <el-input 
                  v-model="realPayTypeJson[reviewTransfer.real_pay_type]" 
                  disabled></el-input>
              </el-form-item>
              <el-form-item
              v-if="reviewTransfer.real_pay_type == 2"
              label="付款备注"
              prop="pay_remark">
                <el-input 
                    v-model="reviewTransfer.pay_remark" 
                    disabled></el-input>
              </el-form-item>
              <div class="form-line">
                <el-form-item 
                  label="币种" 
                  prop="currency">
                  <el-input 
                    v-if="reviewTransfer.currency"
                    v-model="reviewTransfer.currencyStr" 
                    disabled></el-input>
                  <el-input 
                    v-else 
                    value="无" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item
                  :class="{'highlight-change-item': changeKeysList.indexOf('collect_bank_link_code') != -1}"
                  label="收款行行号">
                  <el-input 
                    v-if="reviewTransfer.collect_bank_link_code"
                    v-model="reviewTransfer.collect_bank_link_code" 
                    disabled></el-input>
                  <el-input 
                    v-else 
                    value="无" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="付款金额" 
                  prop="amount">
                  <el-input 
                    v-if="reviewTransfer.amount"
                    v-model="reviewTransfer.formatAmount" 
                    disabled></el-input>
                  <el-input 
                    v-else 
                    value="无" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item
                  :class="{'highlight-change-item': changeKeysList.indexOf('collect_city_name') != -1}"
                  label="收款行省市"
                  prop="collect_city_name">
                  <el-input 
                    v-model="reviewTransfer.collect_city_name" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <el-form-item 
                label="业务背景" 
                prop="bs_background">
                <el-input 
                  v-if="reviewTransfer.bs_background" 
                  v-model="reviewTransfer.bs_background" 
                  disabled></el-input>
                <el-input 
                  v-else 
                  value="无" 
                  disabled></el-input>
              </el-form-item>
              <div class="form-line">
                <el-form-item 
                  label="指令发起人" 
                  prop="order_create_people">
                  <el-input 
                    v-model="reviewTransfer.order_create_people" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  :class="{'highlight-change-item': changeKeysList.indexOf('require_pay_datetime') != -1}" 
                  label="要求付款日"
                  prop="require_pay_datetime">
                  <el-input 
                    v-if="reviewTransfer.require_pay_datetime" 
                    v-model="reviewTransfer.require_pay_datetime"
                    disabled></el-input>
                  <el-input 
                    v-else 
                    value="无" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <el-form-item 
                label="附件" 
                prop="contact_annex">
                <el-upload 
                  v-if="fileList.length" 
                  ref="upload" 
                  :file-list="fileList" 
                  :auto-upload="false" 
                  :on-preview="handleFilePreview" 
                  class="no-upload-text"
                  action=""></el-upload>
                <span 
                  v-else 
                  class="sub-text">无</span>
              </el-form-item>
              <div class="form-line">
                <el-form-item 
                  label="指令状态">
                  <el-input 
                    v-model="payTransferStatusJson[reviewTransfer.transfer_status]" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="付款状态">
                  <el-input 
                    v-model="payStatusJson[reviewTransfer.pay_status]" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item label="指令到达时间">
                  <el-input 
                    v-model="reviewTransfer.create_time" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item label="指令更新时间">
                  <el-input 
                    v-model="reviewTransfer.update_time" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <el-form-item 
                label="处理意见" 
                prop="review_comments">
                <el-input 
                  v-model="reviewTransfer.review_comments" 
                  type="textarea" 
                  placeholder="请输入处理意见"></el-input>
              </el-form-item>
              <el-form-item 
                class="form-footer" 
                label-width="0">
                <el-button 
                  v-if="reviewTransfer.transfer_status == '1' || (reviewTransfer.transfer_status == '2' && reviewTransfer.real_pay_type == '2' && reviewTransfer.pay_status == '3')"
                  :disabled="loading" 
                  size="medium" 
                  type="success" 
                  @click="resolveTransfer('reviewTransfer')">{{ reviewTransfer.transfer_status == '2' && reviewTransfer.real_pay_type == '2' && reviewTransfer.pay_status == '3' ? "重试" : "通过" }}</el-button>
                <el-button 
                  v-if="reviewTransfer.transfer_status == '1' || (reviewTransfer.transfer_status == '2' && reviewTransfer.real_pay_type == '2' && reviewTransfer.pay_status == '3')"
                  :disabled="loading" 
                  size="medium" 
                  type="warning" 
                  @click="rejectTransfer('reviewTransfer')">驳回</el-button>
                <el-button 
                  v-if="reviewTransfer.transfer_status == '1' || (reviewTransfer.transfer_status == '2' && reviewTransfer.real_pay_type == '2' && reviewTransfer.pay_status == '3')"
                  :disabled="loading" 
                  size="medium" 
                  type="danger" 
                  @click="stopTransfer('reviewTransfer')">拒绝</el-button>
                <tp-historyback
                  name="payTransferList"
                  size="medium"></tp-historyback>
              </el-form-item>

              <el-card class="box-card">
                <div slot="header">
                  <span>操作日志</span>
                </div>
                <div>
                  <el-table 
                    v-if="reviewTransfer.node_list" 
                    :data="reviewTransfer.node_list">
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
                </div>
              </el-card>
            </el-form>
          </el-card>
        </el-tab-pane>
        <el-tab-pane 
          label="原指令详情" 
          name="second">
          <order-detail 
            v-if="reviewTransfer.pay_order_uuid" 
            :uuid="reviewTransfer.pay_order_uuid"></order-detail>
          <span v-else>获取原指令详情失败</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>
<script>
import {
  getPayOrderDetail,
  getPayTransferDetail,
  payTransferFlowResolve,
  payTransferFlowReject,
  payTransferFlowStop,
  payTransferRetry
} from '@/api/pay';

import '@/utils/Syunew6';
import getUkeyPwd from '@/api/ukey';

import OrderDetail from '../order/detail.vue';

export default {
  components: {
    OrderDetail
  },
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
      isUkeyConnected: false,
      activeName: 'first',
      loading: false,
      reviewTransfer: {
        uuid: '',
        system_flag: '',
        transfer_num: '',
        transfer_pay_type: '',
        pay_main_body: '',
        pay_bank_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        collect_city: '',
        collect_city_name: '',
        collect_bank_link_code: '',
        real_pay_type: '',
        jmgPassWord: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        bs_background: '',
        order_create_people: '',
        require_pay_datetime: '',
        transfer_status: '',
        pay_status: '',
        create_time: '',
        update_time: '',
        review_comments: '',
        contact_annex: '',
        node_list: []
      },
      rules: {
        jmgPassWord: [
          {
            required: true,
            message: '请输入加密狗密码',
            trigger: 'blur'
          }
        ],
        review_comments: [
          {
            validator: checkComments,
            trigger: 'blur'
          }
        ]
      },
      payTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        19: '待上传回单',
        20: '已完结'
      },
      password1: '',
      password2: '',
      fileList: [],
      changeKeysList: []
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'payTransferList'
      });
    } else {
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getPayTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.reviewTransfer, res.data);

          getPayOrderDetail({
            uuid: this.reviewTransfer.pay_order_uuid
          })
            .then(res => {
              const detailOrderData = res.data;

              if (
                detailOrderData.pay_account_uuid !=
                this.reviewTransfer.pay_account_uuid
              ) {
                this.changeKeysList.push('pay_account_uuid');
              }

              if (
                detailOrderData.collect_account_uuid !=
                this.reviewTransfer.collect_account_uuid
              ) {
                this.changeKeysList.push('collect_account_uuid');
              }

              if (
                detailOrderData.collect_city_name !=
                this.reviewTransfer.collect_city_name
              ) {
                this.changeKeysList.push('collect_city_name');
              }

              if (
                (detailOrderData.collect_bank_link_code ||
                  this.reviewTransfer.collect_bank_link_code) &&
                detailOrderData.collect_bank_link_code !=
                  this.reviewTransfer.collect_bank_link_code
              ) {
                this.changeKeysList.push('collect_bank_link_code');
              }

              if (
                detailOrderData.real_pay_type !=
                this.reviewTransfer.real_pay_type
              ) {
                this.changeKeysList.push('real_pay_type');
              }

              if (
                detailOrderData.require_pay_datetime !=
                this.reviewTransfer.require_pay_datetime
              ) {
                this.changeKeysList.push('require_pay_datetime');
              }
            })
            .catch(() => {});

          if (this.reviewTransfer.real_pay_type == '2') {
            this.initUkey();
          }

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
      this.reviewTransfer.pay_bank_account_str = this.filterBankAccount(
        this.reviewTransfer.pay_bank_account
      );
      this.reviewTransfer.collect_bank_account_str = this.filterBankAccount(
        this.reviewTransfer.collect_bank_account
      );

      this.reviewTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.reviewTransfer.amount,
        this.reviewTransfer.currency
      ]);

      this.reviewTransfer.currencyStr = this.mformatCurrencyStr(
        this.reviewTransfer.currency
      );

      if (this.reviewTransfer.node_list) {
        this.reviewTransfer.node_list = this.reviewTransfer.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.reviewTransfer.node_list = [];
      }

      if (this.reviewTransfer.real_pay_type == '0') {
        this.reviewTransfer.real_pay_type = '';
      }

      if (this.reviewTransfer.require_pay_datetime == '0000-00-00') {
        this.reviewTransfer.require_pay_datetime = '';
      }

      if (this.reviewTransfer.contact_annex) {
        try {
          this.reviewTransfer.contact_annex = JSON.parse(
            this.reviewTransfer.contact_annex
          );
          for (let i = 0; i < this.reviewTransfer.contact_annex.length; i++) {
            this.fileList.push({
              name: this.reviewTransfer.contact_annex[i].name,
              url: this.reviewTransfer.contact_annex[i].url
            });
          }
        } catch (e) {}
      }
    },

    // 复核通过
    resolveTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm(
            this.reviewTransfer.real_pay_type == '2' &&
            this.reviewTransfer.pay_status == '3'
              ? '确定要重新发起付款吗?'
              : '确定要通过付款调拨复核吗?'
          )
            .then(() => {
              this.mshowLoading(
                this.reviewTransfer.real_pay_type == '2' &&
                this.reviewTransfer.pay_status == '3'
                  ? '正在重新发起付款...'
                  : '正在通过付款调拨复核...'
              );

              if (this.reviewTransfer.real_pay_type == 2) {
                if (!this.$store.getters.username) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning(
                    this.reviewTransfer.real_pay_type == '2' &&
                    this.reviewTransfer.pay_status == '3'
                      ? '重新发起付款失败!'
                      : '通过付款调拨复核失败！'
                  );

                  return;
                }

                getUkeyPwd({
                  user_account: this.$store.getters.username
                })
                  .then(res => {
                    if (
                      JSON.stringify(res.data) == '[]' ||
                      !res.data.readPwd_1 ||
                      !res.data.readPwd_2
                    ) {
                      this.$message.warning(
                        '用户未申请加密狗，请申请或更换用户后重试'
                      );
                      this.mhideLoading();
                      this.loading = false;
                      return;
                    }

                    const ukPwd1 = res.data.readPwd_1;
                    const ukPwd2 = res.data.readPwd_2;

                    this.readCheckPwd(ukPwd1, ukPwd2);
                  })
                  .catch(() => {
                    this.mhideLoading();
                    this.loading = false;
                  });
              } else {
                // 获取付款调拨审核参数
                const params = {
                  instance_id: this.reviewTransfer.uuid,
                  main_body_uuid: this.reviewTransfer.pay_main_body_uuid,
                  info: this.reviewTransfer.review_comments,
                  params: {
                    real_pay_type: this.reviewTransfer.real_pay_type
                  }
                };

                payTransferFlowResolve(params)
                  .then(() => {
                    this.loading = false;
                    this.mhideLoading();
                    this.$message.success('通过付款调拨复核成功');
                    this.$router.replace({
                      name: 'payTransferList'
                    });
                  })
                  .catch(() => {
                    this.loading = false;
                    this.mhideLoading();
                  });
              }
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
    resolveYQTransfer() {
      // 获取付款调拨审核参数
      const params = {
        instance_id: this.reviewTransfer.uuid,
        main_body_uuid: this.reviewTransfer.pay_main_body_uuid,
        info: this.reviewTransfer.review_comments,
        params: {
          real_pay_type: this.reviewTransfer.real_pay_type,
          jmgUserName: this.$store.getters.username,
          jmgPassWord: this.reviewTransfer.jmgPassWord
        }
      };

      payTransferFlowResolve(params)
        .then(() => {
          this.loading = false;
          this.mhideLoading();
          if (
            this.reviewTransfer.real_pay_type == '2' &&
            this.reviewTransfer.pay_status == '3'
          ) {
            this.$message.success('重新发起付款成功');
          } else {
            this.$message.success('通过付款调拨复核成功');
          }
          this.$router.replace({
            name: 'payTransferList'
          });
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },
    retryYQTransfer() {
      // 获取付款调拨审核参数
      const params = {
        uuid: this.reviewTransfer.uuid,
        ukPwd: this.reviewTransfer.jmgPassWord
      };

      payTransferRetry(params)
        .then(() => {
          this.loading = false;
          this.mhideLoading();
          this.$message.success('重新发起付款成功');
          this.$router.replace({
            name: 'payTransferList'
          });
        })
        .catch(() => {
          this.loading = false;
          this.mhideLoading();
        });
    },
    // 驳回调拨复核
    rejectTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewTransfer.review_comments &&
        this.reviewTransfer.review_comments.length <= 100
      ) {
        this.isReject = false;

        this.mconfirm('确定要驳回付款调拨吗?')
          .then(() => {
            this.mshowLoading('正在驳回付款调拨...');

            // 获取付款调拨驳回参数
            const params = {
              instance_id: this.reviewTransfer.uuid,
              main_body_uuid: this.reviewTransfer.pay_main_body_uuid,
              info: this.reviewTransfer.review_comments,
              params: {
                real_pay_type: this.reviewTransfer.real_pay_type,
                pay_account_uuid: this.reviewTransfer.pay_account_uuid,
                collect_account_uuid: this.reviewTransfer.collect_account_uuid
              }
            };

            payTransferFlowReject(params)
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('付款调拨驳回成功');
                this.$router.replace({
                  name: 'payTransferList'
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
    // 拒绝调拨复核
    stopTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isStop = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewTransfer.review_comments &&
        this.reviewTransfer.review_comments.length <= 100
      ) {
        this.isStop = false;

        this.mconfirm('确定要拒绝付款调拨吗?')
          .then(() => {
            this.mshowLoading('正在拒绝付款调拨...');

            // 获取付款调拨拒绝参数

            const params = {
              instance_id: this.reviewTransfer.uuid,
              main_body_uuid: this.reviewTransfer.pay_main_body_uuid,
              info: this.reviewTransfer.review_comments,
              params: {
                real_pay_type: this.reviewTransfer.real_pay_type,
                pay_account_uuid: this.reviewTransfer.pay_account_uuid,
                collect_account_uuid: this.reviewTransfer.collect_account_uuid
              }
            };

            payTransferFlowStop(params)
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('付款调拨拒绝成功');
                this.$router.replace({
                  name: 'payTransferList'
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
        this.isStop = false;
        this.$message.warning('请完善数据填写后重试');
        return false;
      }
    },

    // 银企操作
    initUkey() {
      //如果是IE10及以下浏览器，则跳过不处理，
      if (
        navigator.userAgent.indexOf('MSIE') > 0 &&
        !navigator.userAgent.indexOf('opera') > -1
      )
        return;
      try {
        const s_pnp = new SoftKey6W();
        s_pnp.Socket_UK.onopen = () => {
          this.isUkeyConnected = true; //代表已经连接，用于判断是否安装了客户端服务
        };

        //在使用事件插拨时，注意，一定不要关掉Sockey，否则无法监测事件插拨
        s_pnp.Socket_UK.onmessage = Msg => {
          const PnpData = JSON.parse(Msg.data);
          if (PnpData.type == 'PnpEvent') {
            //如果是插拨事件处理消息
            if (PnpData.IsIn) {
              this.$message.info('加密狗已被插入');
            } else {
              this.$message.info('加密狗已被拔出');
            }
          }
        };

        s_pnp.Socket_UK.onclose = function() {};
      } catch (e) {
        return false;
      }
    },
    readCheckPwd(password1, password2) {
      //如果是IE10及以下浏览器，则使用AVCTIVEX控件的方式
      if (
        navigator.userAgent.indexOf('MSIE') > 0 &&
        !navigator.userAgent.indexOf('opera') > -1
      )
        return this.Handle_IE10_ReadCheckPwd(password1, password2);

      //判断是否安装了服务程序，如果没有安装提示用户安装
      if (!this.isUkeyConnected) {
        this.mhideLoading();
        this.loading = false;
        this.$message.warning('未找到加密狗驱动，请安装驱动后重试');
        return false;
      }

      let DevicePath, ret, n, mylen, ID_1, ID_2, addr;
      try {
        let s_simnew1 = new SoftKey6W(); //创建UK类

        s_simnew1.Socket_UK.onopen = function() {
          s_simnew1.ResetOrder(); //这里调用ResetOrder将计数清零，这样，消息处理处就会收到0序号的消息，通过计数及序号的方式，从而生产流程
        };

        //写代码时一定要注意，每调用我们的一个UKEY函数，就会生产一个计数，即增加一个序号，较好的逻辑是一个序号的消息处理中，只调用我们一个UKEY的函数
        s_simnew1.Socket_UK.onmessage = Msg => {
          let UK_Data = JSON.parse(Msg.data);
          //alert(Msg.data);
          if (UK_Data.type != 'Process') return; //如果不是流程处理消息，则跳过
          switch (UK_Data.order) {
            case 0:
              {
                s_simnew1.FindPort(0); //发送命令取UK的路径
              }
              break;
            case 1:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('未发现加密狗，请插入后重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                DevicePath = UK_Data.return_value; //获得返回的UK的路径
                s_simnew1.GetID_1(DevicePath); //发送命令取ID_1
              }
              break;
            case 2:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                ID_1 = UK_Data.return_value; //获得返回的UK的ID_1
                s_simnew1.GetID_2(DevicePath); //发送命令取ID_2
              }
              break;
            case 3:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                ID_2 = UK_Data.return_value; //获得返回的UK的ID_2

                s_simnew1.ContinueOrder();
              }
              break;
            case 4:
              {
                //获取设置在锁中的用户名
                //先从地址0读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 0;
                s_simnew1.YRead(addr, 1, password1, password2, DevicePath); //发送命令取UK地址0的数据
              }
              break;
            case 5:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                s_simnew1.GetBuf(0); //发送命令从数据缓冲区中数据
              }
              break;
            case 6:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                mylen = UK_Data.return_value; //获得返回的数据缓冲区中数据

                //再从地址1读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 1;
                s_simnew1.YReadString(
                  addr,
                  mylen,
                  password1,
                  password2,
                  DevicePath
                ); //发送命令从UK地址1中取字符串
              }
              break;
            case 7:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }

                if (UK_Data.return_value !== this.$store.getters.username) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning(
                    '当前用户名和加密狗用户名不一致，请确认'
                  );
                  return false;
                }

                //获到设置在锁中的用户密码,
                //先从地址20读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 20;
                s_simnew1.YRead(addr, 1, password1, password2, DevicePath); //发送命令取UK地址20的数据
              }
              break;
            case 8:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                s_simnew1.GetBuf(0); //发送命令从数据缓冲区中数据
              }
              break;
            case 9:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                mylen = UK_Data.return_value; //获得返回的数据缓冲区中数据

                //再从地址21读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 21;
                s_simnew1.YReadString(
                  addr,
                  mylen,
                  password1,
                  password2,
                  DevicePath
                ); //发送命令从UK地址21中取字符串
              }
              break;
            case 10:
              {
                if (UK_Data.LastError != 0) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }

                if (this.reviewTransfer.jmgPassWord != UK_Data.return_value) {
                  this.mhideLoading();
                  this.loading = false;
                  this.$message.warning('加密狗密码错误！');

                  return;
                } else {
                  // if (
                  //   this.reviewTransfer.real_pay_type == '2' &&
                  //   this.reviewTransfer.pay_status == '3'
                  // ) {
                  //   this.retryYQTransfer();
                  // } else {
                  //   this.resolveYQTransfer();
                  // }
                  this.resolveYQTransfer();
                }

                //所有工作处理完成后，关掉Socket
                s_simnew1.Socket_UK.close();
              }
              break;
          }
        };

        s_simnew1.Socket_UK.onclose = function() {};
        return true;
      } catch (e) {
        this.mhideLoading();
        this.loading = false;
        return false;
      }
    },
    Handle_IE10_ReadCheckPwd(password1, password2) {
      var DevicePath, ret, n, mylen;
      try {
        //建立操作我们的锁的控件对象，用于操作我们的锁
        var s_simnew1;
        //创建控件

        s_simnew1 = new ActiveXObject('Syunew6A.s_simnew6');

        //查找是否存在锁,这里使用了FindPort函数
        DevicePath = s_simnew1.FindPort(0);
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('未发现加密狗，请插入后重试');
          return false;
        }

        //'读取锁的ID
        let id =
          this.toHex(s_simnew1.GetID_1(DevicePath)) +
          this.toHex(s_simnew1.GetID_2(DevicePath));
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        //获取设置在锁中的用户名
        //先从地址0读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        ret = s_simnew1.YRead(0, 1, password1, password2, DevicePath);
        mylen = s_simnew1.GetBuf(0);
        //再从地址1读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        let username = s_simnew1.YReadString(
          1,
          mylen,
          password1,
          password2,
          DevicePath
        );
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        if (username !== this.$store.getters.username) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('当前用户名和加密狗用户名不一致，请确认');
          return false;
        }

        //获到设置在锁中的用户密码,
        //先从地址20读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        ret = s_simnew1.YRead(20, 1, password1, password2, DevicePath);
        mylen = s_simnew1.GetBuf(0);
        //再从地址21读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        let password = s_simnew1.YReadString(
          21,
          mylen,
          password1,
          password2,
          DevicePath
        );
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        if (this.reviewTransfer.jmgPassWord != password) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('加密狗密码错误！');

          return;
        } else {
          // if (
          //   this.reviewTransfer.real_pay_type == '2' &&
          //   this.reviewTransfer.pay_status == '3'
          // ) {
          //   this.retryYQTransfer();
          // } else {
          //   this.resolveYQTransfer();
          // }
          this.resolveYQTransfer();
        }

        return true;
      } catch (e) {
        this.mhideLoading();
        this.loading = false;
        this.$message.warning('加密狗查询失败，请确认是否正确安装驱动');
      }
    },
    toHex(n) {
      let result = '';
      let start = true;
      let digitArray = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
      ];

      for (let i = 32; i > 0; ) {
        i -= 4;
        const digit = (n >> i) & 0xf;

        if (!start || digit != 0) {
          start = false;
          result += digitArray[digit];
        }
      }

      return result === '' ? '0' : result;
    }
  }
};
</script>
