<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-tabs 
        v-model="activeName" 
        type="card">
        <el-tab-pane 
          label="还款调拨发起" 
          name="first">
          <el-card>
            <div 
              slot="header" 
              class="clearfix">
              <span>还款调拨发起</span>
            </div>
            <el-form 
              ref="reviewTransfer" 
              :model="reviewTransfer" 
              :rules="rules" 
              label-width="120px" 
              label-position="left" 
              size="small">
              <div class="form-line">
                <el-form-item 
                  label="还款资金交易编号" 
                  prop="repay_transfer_num">
                  <el-input 
                    v-model="reviewTransfer.repay_transfer_num" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款编号" 
                  prop="order_num">
                  <el-input 
                    v-model="reviewTransfer.order_num" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="指令状态" 
                  prop="repay_transfer_status">
                  <el-input 
                    v-model="repayTransferStatusJson[reviewTransfer.repay_transfer_status]" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="还款状态" 
                  prop="repay_status">
                  <el-input 
                    v-model="repayPayStatusJson[reviewTransfer.repay_status]" 
                    disabled></el-input>
                </el-form-item>
              </div>

              <el-card 
                v-if="reviewTransfer.orderDetail && reviewTransfer.orderDetail.length"
                class="box-card box-card-inside">
                <div 
                  slot="header" 
                  class="box-card-header">
                  <span>还款指令</span>
                </div>
                <div class="text item">
                  <el-table :data="reviewTransfer.orderDetail">
                    <el-table-column 
                      label="操作"
                      width="60px">
                      <template slot-scope="scope">
                        <el-button 
                          :disabled="loading" 
                          size="mini" 
                          type="text" 
                          @click="triggerCheckRepayOrder(scope.row.id)">详情</el-button>
                      </template>
                    </el-table-column>
                    <el-table-column 
                      prop="order_num" 
                      label="还款编号"
                      width="220">
                    </el-table-column>
                    <el-table-column 
                      prop="out_order_num" 
                      label="外部指令号"
                      width="100">
                    </el-table-column>
                    <el-table-column 
                      prop="system_flag" 
                      label="系统来源"
                      width="100">
                    </el-table-column>
                    <el-table-column  
                      label="本金回款"
                      width="150">
                      <template slot-scope="scope">
                        {{ [scope.row.amount, scope.row.currency] | filterCent2YuanCurrencyAmount }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      prop="require_repay_date" 
                      label="要求还款日"
                      width="100">
                    </el-table-column>
                    <el-table-column 
                      prop="repay_desc" 
                      label="还款说明"
                      show-overflow-tooltip>
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>

              <el-card class="box-card box-card-inside">
                <div 
                  slot="header">
                  <span>还款现金流表</span>
                </div>
                <div class="text item">
                  <el-table :data="reviewTransfer.cashDetail">
                    <el-table-column 
                      label="选项"
                      width="60px">
                      <template slot-scope="scope">
                        <el-checkbox 
                          :value="scope.row.checked"
                          disabled></el-checkbox>
                      </template>
                    </el-table-column>
                    <el-table-column 
                      prop="repay_date" 
                      label="要求还款日"
                      width="110px">
                    </el-table-column>
                    <el-table-column 
                      prop="real_repay_date" 
                      label="还款日期"
                      width="100px">
                    </el-table-column>
                    <el-table-column label="事项">
                      <template slot-scope="scope">
                        {{ cashFlowTypeJson[scope.row.cash_flow_type] }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      label="金额"
                      width="150px">
                      <template slot-scope="scope">
                        {{ [scope.row.amount, reviewTransfer.currency] | filterCent2YuanCurrencyAmount }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      label="实际金额"
                      width="150px">
                      <template slot-scope="scope">
                        {{ filterCent2YuanCurrencyAmount([scope.row.real_amount, reviewTransfer.currency]) }}
                      </template>
                    </el-table-column>
                    <el-table-column label="状态">
                      <template slot-scope="scope">
                        {{ scope.row.cash_flow_type == 1 ? '已支付' : repayStatusJson[scope.row.cash_status] }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      label="说明" 
                      prop="info">
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>

              <div class="form-line">
                <el-form-item 
                  label="贷款方" 
                  prop="repay_main_body">
                  <el-input 
                    v-model="reviewTransfer.repay_main_body" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款方" 
                  prop="collect_main_body">
                  <el-input 
                    v-model="reviewTransfer.collect_main_body" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方银行名称" 
                  prop="repay_account_uuid">
                  <el-select 
                    v-model="reviewTransfer.repay_account_uuid" 
                    filterable
                    placeholder="请选择贷款方银行名称" 
                    @visible-change="repayBankAccountSelectToggle"
                    @change="repayBankAccountSelectChange">
                    <el-option 
                      v-for="item in repayBankAccountList" 
                      :key="item.uuid" 
                      :label="item.bank_name" 
                      :value="item.uuid">
                    </el-option>
                    <el-option 
                      v-loading="repayBankAccountLoading" 
                      v-if="repayBankAccountLoading" 
                      key="repayBankAccountLoading" 
                      disabled
                      element-loading-spinner="el-icon-loading" 
                      label="" 
                      value="loading"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item 
                  label="借款方银行名称" 
                  prop="collect_account_uuid">
                  <el-select 
                    v-model="reviewTransfer.collect_account_uuid" 
                    filterable
                    placeholder="请选择借款方银行名称" 
                    @visible-change="collectBankAccountSelectToggle"
                    @change="collectBankAccountSelectChange">
                    <el-option 
                      v-for="item in collectBankAccountList" 
                      :key="item.uuid" 
                      :label="item.bank_name" 
                      :value="item.uuid">
                    </el-option>
                    <el-option 
                      v-loading="collectBankAccountLoading" 
                      v-if="collectBankAccountLoading" 
                      key="collectBankAccountLoading" 
                      disabled
                      element-loading-spinner="el-icon-loading" 
                      label="" 
                      value="loading"></el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方银行账号" 
                  prop="repay_bank_account">
                  <el-input 
                    v-model="reviewTransfer.repay_bank_account" 
                    placeholder="请选择借款方银行名称获取"
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款方银行账号" 
                  prop="collect_bank_account">
                  <el-input 
                    v-model="reviewTransfer.collect_bank_account" 
                    placeholder="请选择借款方银行名称获取"
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  class="el-form-item-width-half" 
                  label="实付类型" 
                  prop="real_pay_type">
                  <el-select 
                    :disabled="isBankSetRealPayType" 
                    v-model="reviewTransfer.real_pay_type"
                    filterable>
                    <el-option 
                      label="银企" 
                      value="2"></el-option>
                    <el-option 
                      label="网银" 
                      value="1"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item
                label="银企付款备注"
                v-if="reviewTransfer.real_pay_type == 2"
                prop="pay_remark">
                  <el-input v-model="reviewTransfer.pay_remark" placeholder="请输入内容" maxlength="50"></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="还款币种" 
                  prop="currency">
                  <el-input 
                    v-model="reviewTransfer.currencyStr"
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="还款金额" 
                  prop="repay_amount">
                  <el-input 
                    v-model="reviewTransfer.repay_amount_str" 
                    disabled
                    type="number" 
                    placeholder="请输入还款金额">
                    <template slot="append">元</template>
                  </el-input>
                </el-form-item>
              </div>

              <el-form-item 
                label-width="0" 
                prop="review_comments">
                <el-input 
                  v-model="reviewTransfer.review_comments" 
                  type="textarea" 
                  placeholder="请输入审核意见"></el-input>
              </el-form-item>
              <el-form-item 
                class="form-footer" 
                label-width="0"
                style="margin-bottom: 40px;">
                <el-button 
                  v-if="reviewTransfer.repay_transfer_status == '0' && reviewTransfer.edit_status == '1' && reviewTransfer.hasOrderDetail"
                  :disabled="loading" 
                  size="medium" 
                  type="success" 
                  @click="startTransferFlow('reviewTransfer')">提交</el-button>
                <tp-historyback 
                  name="repayTransferList"
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
          label="借款调拨详情" 
          name="second">
          <transfer-detail 
            v-if="reviewTransfer.loan_transfer_uuid" 
            :uuid="reviewTransfer.loan_transfer_uuid"></transfer-detail>
          <span v-else>获取原借款调拨详情失败</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>
<script>
import { getRepayTransferDetail, repayTransferFlowStart } from '@/api/repay';
import { getEffectAccountList } from '@/api/account';

import TransferDetail from '../../loan/transfer/detail.vue';

export default {
  components: {
    TransferDetail
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

    const checkRepayAccount = (rule, value, callback) => {
      if (
        value &&
        this.reviewTransfer.collect_account_uuid &&
        value == this.reviewTransfer.collect_account_uuid
      ) {
        return callback(new Error('贷款银行账号和借款银行账号不能相同'));
      }

      return callback();
    };
    const checkCollectAccount = (rule, value, callback) => {
      if (
        value &&
        this.reviewTransfer.loan_account_uuid &&
        value == this.reviewTransfer.loan_account_uuid
      ) {
        return callback(new Error('借款银行账号和贷款银行账号不能相同'));
      }

      return callback();
    };
    return {
      loading: false,
      reviewTransfer: {
        id: '',
        uuid: '',
        repay_transfer_num: '',
        order_num: '',
        repay_transfer_status: '',
        repay_status: '',
        repay_main_body_uuid: '',
        repay_main_body: '',
        repay_account_uuid: '',
        repay_bank_name: '',
        repay_bank_account: '',
        collect_main_body_uuid: '',
        collect_main_body: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        real_pay_type: '',
        pay_remark:'',
        currency: '',
        currencyStr: '',
        repay_amount: '',
        repay_amount_str: '',

        loan_transfer_uuid: '',

        review_comments: '',
        hasOrderDetail: false
      },
      rules: {
        repay_account_uuid: [
          {
            required: true,
            message: '请选择贷款银行',
            trigger: 'change'
          },
          {
            validator: checkRepayAccount,
            trigger: 'change'
          }
        ],
        collect_account_uuid: [
          {
            required: true,
            message: '请选择借款银行',
            trigger: 'change'
          },
          {
            validator: checkCollectAccount,
            trigger: 'change'
          }
        ],
        real_pay_type: [
          {
            required: true,
            message: '请选择实付类型',
            trigger: 'change'
          }
        ],
        review_comments: [
          {
            validator: checkComments,
            trigger: 'blur'
          }
        ],
        pay_remark: [
          {
            required: true,
            message: '请输入银企付款备注',
            trigger: 'blur'
          }
        ]
      },
      repayTransferStatusJson: {
        0: '待资金专员审核',
        2: '待权签人审核',
        3: '权签人审核通过',
        4: '权签人驳回',
        20: '已完结'
      },
      repayStatusJson: {
        1: '未提交',
        2: '待审核',
        3: '已支付',
        10: '待确认'
      },
      repayBankAccountList: [],
      repayBankAccountLoading: false,
      collectBankAccountList: [],
      collectBankAccountLoading: false,
      timestamp: Date.now(),
      isBankSetRealPayType: '',
      activeName: 'first',
      repay_index: ''
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'repayTransferList'
      });
    } else {
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getRepayTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.reviewTransfer, res.data);

          this.getRepayBankAccountListData();
          this.getCollectBankAccountListData();

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
      let orderDetail = [];
      if (this.reviewTransfer.orderDetail) {
        for (let i = 0; i < this.reviewTransfer.orderDetail.length; i++) {
          if (
            this.reviewTransfer.orderDetail[i].repay_order_status != 2 &&
            this.reviewTransfer.orderDetail[i].repay_order_status != 4
          ) {
            orderDetail.push(this.reviewTransfer.orderDetail[i]);
          }
        }
      }

      this.reviewTransfer.orderDetail = orderDetail;

      this.reviewTransfer.repay_bank_account_str = this.filterBankAccount(
        this.reviewTransfer.repay_bank_account
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

      if (this.reviewTransfer.require_pay_datetime == '0000-00-00') {
        this.reviewTransfer.require_pay_datetime = '';
      }

      if (
        this.reviewTransfer.real_pay_type == '0' ||
        !this.reviewTransfer.real_pay_type
      ) {
        this.reviewTransfer.real_pay_type = '';
      } else {
        this.reviewTransfer.real_pay_type =
          '' + this.reviewTransfer.real_pay_type;
      }

      this.sortCashFlowList();
    },

    // 还款现金流表排序
    sortCashFlowList() {
      this.reviewTransfer.cashDetail.sort((cashFlow1, cashFlow2) => {
        if (cashFlow1.repay_date == cashFlow2.repay_date) {
          return (
            Number(cashFlow1.cash_flow_type) - Number(cashFlow2.cash_flow_type)
          );
        }

        return (
          new Date(cashFlow1.repay_date).getTime() -
          new Date(cashFlow2.repay_date).getTime()
        );
      });

      let date = new Date();
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      let todayTimestamp = date.getTime();

      for (let i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
        if (
          this.reviewTransfer.cashDetail[i].cash_status == 1 &&
          this.reviewTransfer.cashDetail[i].cash_flow_type == 2 &&
          todayTimestamp <=
            new Date(
              this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00'
            ).getTime()
        ) {
          this.reviewTransfer.hasOrderDetail = true;
          this.reviewTransfer.cashDetail[i].checked = true;
          this.reviewTransfer.cashDetail[i + 1].checked = true;
          this.repay_index = this.reviewTransfer.cashDetail[i].index;

          this.reviewTransfer.repay_amount =
            Number(this.reviewTransfer.cashDetail[i].real_amount) +
            Number(this.reviewTransfer.cashDetail[i + 1].real_amount);
          this.reviewTransfer.repay_amount_str = this.filterCent2YuanNoThousandCurrencyAmount(
            this.reviewTransfer.repay_amount
          );
          break;
        }
      }

      if (!this.reviewTransfer.hasOrderDetail) {
        this.$message.warning('没有可还款的现金流，请通过还款指令修改现金流表');
      }
    },

    // 发起借款调拨
    startTransferFlow(formName) {
      if (!this.reviewTransfer.hasOrderDetail) {
        this.$message.warning('没有可还款的现金流');
        return false;
      }

      if (this.loading) return false;
      this.loading = true;

      const params = {
        repay_account_uuid: this.reviewTransfer.repay_account_uuid,
        collect_account_uuid: this.reviewTransfer.collect_account_uuid,
        real_pay_type: this.reviewTransfer.real_pay_type,
        index: this.repay_index,
        pay_remark: this.reviewTransfer.pay_remark
      };

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要发起还款调拨吗?')
            .then(() => {
              this.mshowLoading('正在提交还款调拨...');

              // 获取发起还款调拨参数
              repayTransferFlowStart({
                instance_id: this.reviewTransfer.id,
                main_body_uuid: this.reviewTransfer.collect_main_body_uuid,
                info: this.reviewTransfer.review_comments,
                params
              })
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('提交成功');
                  this.$router.replace({
                    name: 'repayTransferList'
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
          this.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    },

    // 查看还款指令详情
    triggerCheckRepayOrder(uuid) {
      this.$router.push({
        name: 'repayOrderDetail',
        params: {
          uuid
        }
      });
    },

    // 贷款银行
    getRepayBankAccountListData() {
      if (!this.reviewTransfer.repay_main_body_uuid) {
        this.$message.error('贷款主体非内部主体，无法修改贷款银行！');
      }

      if (
        this.repayBankAccountLoading ||
        !this.reviewTransfer.repay_main_body_uuid
      ) {
        return false;
      }

      this.repayBankAccountLoading = true;
      getEffectAccountList({
        page: 1,
        limit: -1,
        main_body_uuid: this.reviewTransfer.repay_main_body_uuid
      })
        .then(res => {
          this.repayBankAccountList = res.data.data;

          this.repayBankAccountSelectChange(
            this.reviewTransfer.repay_account_uuid
          );

          this.repayBankAccountLoading = false;
        })
        .catch(() => {
          this.repayBankAccountLoading = false;
        });
    },
    repayBankAccountSelectToggle(show) {
      if (
        show &&
        !this.repayBankAccountLoading &&
        !this.repayBankAccountList.length
      ) {
        this.getRepayBankAccountListData();
      }
    },
    repayBankAccountSelectChange(bankUuid) {
      let hasAccount = false;
      for (let i = 0; i < this.repayBankAccountList.length; i++) {
        if (bankUuid == this.repayBankAccountList[i].uuid) {
          hasAccount = true;
          this.reviewTransfer.repay_bank_account = this.repayBankAccountList[
            i
          ].bank_account;

          if (this.repayBankAccountList[i].real_pay_type != '0') {
            this.reviewTransfer.real_pay_type =
              '' + this.repayBankAccountList[i].real_pay_type;
            this.isBankSetRealPayType = true;
          } else {
            this.isBankSetRealPayType = false;
          }
          break;
        }
      }

      if (hasAccount) {
        if (this.$refs['reviewTransfer']) {
          this.$refs['reviewTransfer'].validateField('repay_account_uuid');
          this.reviewTransfer.repay_account_uuid &&
            this.$refs['reviewTransfer'].validateField('collect_account_uuid');
        }
      } else {
        this.reviewTransfer.repay_account_uuid = '';
        this.reviewTransfer.repay_bank_name = '';
        this.reviewTransfer.repay_bank_account = '';
        this.reviewTransfer.real_pay_type = '';
        this.isBankSetRealPayType = '';
      }
    },

    // 借款银行
    getCollectBankAccountListData() {
      if (!this.reviewTransfer.collect_main_body_uuid) {
        this.$message.error('借款款主体非内部主体，无法修改借款款银行！');
      }

      if (
        this.collectBankAccountLoading ||
        !this.reviewTransfer.collect_main_body_uuid
      ) {
        return false;
      }

      this.collectBankAccountLoading = true;
      getEffectAccountList({
        page: 1,
        limit: -1,
        main_body_uuid: this.reviewTransfer.collect_main_body_uuid
      })
        .then(res => {
          this.collectBankAccountList = res.data.data;
          this.collectBankAccountSelectChange(
            this.reviewTransfer.collect_account_uuid
          );
          this.collectBankAccountLoading = false;
        })
        .catch(() => {
          this.collectBankAccountLoading = false;
        });
    },
    collectBankAccountSelectToggle(show) {
      if (
        show &&
        !this.collectBankAccountLoading &&
        !this.collectBankAccountList.length
      ) {
        this.getCollectBankAccountListData();
      }
    },
    collectBankAccountSelectChange(bankUuid) {
      let hasAccount = false;
      for (let i = 0; i < this.collectBankAccountList.length; i++) {
        if (bankUuid == this.collectBankAccountList[i].uuid) {
          hasAccount = true;
          this.reviewTransfer.collect_bank_account = this.collectBankAccountList[
            i
          ].bank_account;
          break;
        }
      }

      if (hasAccount) {
        if (this.$refs['reviewTransfer']) {
          this.$refs['reviewTransfer'].validateField('collect_account_uuid');
          this.reviewTransfer.repay_account_uuid &&
            this.$refs['reviewTransfer'].validateField('repay_account_uuid');
        }
      } else {
        this.reviewTransfer.collect_account_uuid = '';
        this.reviewTransfer.collect_bank_name = '';
        this.reviewTransfer.collect_bank_account = '';
      }
    }
  }
};
</script>
