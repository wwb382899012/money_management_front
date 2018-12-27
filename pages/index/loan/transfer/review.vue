<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>借款调拨发起</span>
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
              label="系统来源" 
              prop="system_flag">
              <el-input 
                v-model="reviewTransfer.system_flag" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="外部指令号" 
              prop="out_order_num">
              <el-input 
                v-model="reviewTransfer.out_order_num" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="资金交易编号" 
              prop="transfer_num">
              <el-input 
                v-model="reviewTransfer.transfer_num" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="借款编号" 
              prop="loan_order_num">
              <el-input 
                v-model="reviewTransfer.loan_order_num" 
                disabled></el-input>
            </el-form-item>      
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款方" 
              prop="loan_main_body">
              <el-input 
                v-model="reviewTransfer.loan_main_body" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="贷款方" 
              prop="collect_main_body">
              <el-input 
                v-model="reviewTransfer.collect_main_body" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款方银行名称" 
              prop="loan_account_uuid">
              <el-select 
                v-model="reviewTransfer.loan_account_uuid" 
                filterable
                placeholder="请选择借款方银行名称" 
                @visible-change="loanBankAccountSelectToggle"
                @change="loanBankAccountSelectChange">
                <el-option 
                  v-for="item in loanBankAccountList" 
                  :key="item.uuid" 
                  :label="item.bank_name" 
                  :value="item.uuid">
                </el-option>
                <el-option 
                  v-loading="loanBankAccountLoading" 
                  v-if="loanBankAccountLoading" 
                  key="loanBankAccountLoading" 
                  disabled
                  element-loading-spinner="el-icon-loading" 
                  label="" 
                  value="loading"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item 
              label="贷款方银行名称" 
              prop="collect_account_uuid">
              <el-select 
                v-model="reviewTransfer.collect_account_uuid" 
                filterable
                placeholder="请选择贷款方银行名称" 
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
              label="借款方银行账号" 
              prop="loan_bank_account">
              <el-input 
                v-model="reviewTransfer.loan_bank_account" 
                placeholder="请选择借款方银行名称获取"
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="贷款方银行账号" 
              prop="collect_bank_account">
              <el-input 
                v-model="reviewTransfer.collect_bank_account" 
                placeholder="请选择贷款方银行名称获取"
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
                  value="2" 
                  label="银企"></el-option>
                <el-option 
                  value="1" 
                  label="网银"></el-option>
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
              label="借款币种" 
              prop="currency">
              <el-input 
                v-model="reviewTransfer.currencyStr" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="借款金额" 
              prop="amount">
              <el-input 
                v-model="reviewTransfer.formatAmount" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款日期" 
              prop="loan_datetime">
              <el-input 
                v-model="reviewTransfer.loan_datetime" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="预计还款日" 
              prop="forecast_datetime">
              <el-input 
                v-model="reviewTransfer.forecast_datetime" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="指令发起人" 
              prop="transfer_create_people">
              <el-input 
                v-model="reviewTransfer.transfer_create_people" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="利息率" 
              prop="rate">
              <el-input 
                v-model="reviewTransfer.rateStr" 
                disabled>
                <template slot="append">
                  %
                </template>
              </el-input>
            </el-form-item>
          </div>
          <el-form-item 
            label="业务背景" 
            prop="bs_background">
            <el-input 
              v-if="reviewTransfer.bs_background" 
              v-model="reviewTransfer.bs_background" 
              disabled></el-input>
            <div 
              v-else 
              class="sub-text">无</div>
          </el-form-item>
          <el-form-item label="其他说明">
            <el-input 
              v-if="reviewTransfer.plus_require" 
              v-model="reviewTransfer.plus_require" 
              disabled></el-input>
            <div 
              v-else 
              class="sub-text">无</div>
          </el-form-item>
          <el-form-item 
            label="合同附件" 
            prop="contact_annex">
            <el-upload 
              v-if="fileList.length" 
              ref="upload" 
              :file-list="fileList" 
              :auto-upload="false" 
              :on-preview="handleFilePreview" 
              class="no-upload-text"
              action=""
              disabled></el-upload>
            <div 
              v-else 
              class="sub-text">无</div>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="指令状态" 
              prop="transfer_status">
              <el-input 
                v-model="loanTransferStatusJson[reviewTransfer.transfer_status]" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="借款状态" 
              prop="loan_status">
              <el-input 
                v-model="loanPayStatusJson[reviewTransfer.loan_status]" 
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
          <el-card class="box-card box-card-inside">
            <div 
              slot="header" 
              class="box-card-header">
              <span>借款现金流表</span>
              <div>
                <el-button 
                  :disabled="loading || !(reviewTransfer.amount &&
                    reviewTransfer.loan_datetime &&
                    reviewTransfer.forecast_datetime &&
                  reviewTransfer.rate)"
                  type="text" 
                  @click="triggerUpdateCashFlow">更新现金流表</el-button>
                <el-button 
                  :disabled="loading || !(reviewTransfer.amount &&
                    reviewTransfer.loan_datetime &&
                    reviewTransfer.forecast_datetime &&
                  reviewTransfer.rate) || leftCashAmount <= 0" 
                  type="text" 
                  @click="triggerAddCashFlow">新增</el-button>
              </div>
            </div>
            <div class="text item">
              <el-table :data="reviewTransfer.cashDetail">
                <el-table-column 
                  prop="repay_date" 
                  label="日期">
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
                  label="说明" 
                  prop="info">
                </el-table-column>
                <el-table-column 
                  label="操作" 
                  width="200">
                  <template slot-scope="scope">
                    <template
                      v-if="scope.row.cash_flow_type == 2">
                      <el-button 
                        :disabled="loading" 
                        size="mini" 
                        type="text" 
                        @click="triggerCashFlowEdit(scope.row,scope.$index)">修改</el-button>
                      <el-button 
                        :disabled="loading" 
                        size="mini" 
                        type="text" 
                        @click="triggerCashFlowDelete(scope.$index)">删除</el-button>
                    </template>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
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
            label-width="0">
            <el-button 
              v-if="reviewTransfer.transfer_status == '0'"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="startTransferFlow('reviewTransfer')">通过</el-button>
            <el-button 
              v-if="reviewTransfer.transfer_status == '0'"
              :disabled="loading" 
              size="medium" 
              type="warning" 
              @click="rejectOrder('reviewTransfer')">驳回</el-button>
            <tp-historyback 
              name="loanTransferList"
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
    </div>
    
    <el-dialog 
      v-if="addCashFlowDialogVisible"
      :append-to-body="true"
      :key="'addCashFlowDialog' + timestamp" 
      :visible.sync="addCashFlowDialogVisible" 
      title="新增借款现金流" 
      left
      @close="timestamp = Date.now()">
      <add-cash-flow 
        :picker-options="addPickerOptions"
        :left-cash-amount="leftCashAmount"
        @addCashFlowSuccess="pushNewCashFlow" 
        @closeDialog="closeDialog"></add-cash-flow>
    </el-dialog>
    <el-dialog 
      v-if="updateCashFlowDialogVisible"
      :append-to-body="true"
      :key="'updateCashFlowDialog' + timestamp" 
      :visible.sync="updateCashFlowDialogVisible" 
      title="修改借款现金流" 
      left 
      @close="timestamp = Date.now()">
      <update-cash-flow 
        :left-cash-amount="leftCashAmount"
        :picker-options="updatePickerOptions"
        :current-index="currentIndex" 
        :current-cash-flow="currentCashFlow" 
        @updateCashFlowSuccess="changeUpdateCashFlow" 
        @closeDialog="closeDialog"></update-cash-flow>
    </el-dialog>
  </div>

</template>
<script>
import {
  getLoanTransferDetail,
  loanOrderFlowReject,
  loanTransferFlowStart
} from '@/api/loan';
import { getEffectAccountList } from '@/api/account';

import AddCashFlow from './addCashFlow.vue';
import UpdateCashFlow from './updateCashFlow.vue';

export default {
  components: {
    AddCashFlow,
    UpdateCashFlow
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

    const checkLoanAccount = (rule, value, callback) => {
      if (
        value &&
        this.reviewTransfer.collect_account_uuid &&
        value == this.reviewTransfer.collect_account_uuid
      ) {
        return callback(new Error('借款银行账号和贷款银行账号不能相同'));
      }

      return callback();
    };
    const checkCollectAccount = (rule, value, callback) => {
      if (
        value &&
        this.reviewTransfer.loan_account_uuid &&
        value == this.reviewTransfer.loan_account_uuid
      ) {
        return callback(new Error('贷款银行账号和借款银行账号不能相同'));
      }

      return callback();
    };

    return {
      loading: false,
      reviewTransfer: {
        uuid: '',
        system_flag: '',
        order_num: '',
        out_order_num: '',
        loan_main_body_uuid: '',
        loan_main_body: '',
        loan_account_uuid: '',
        loan_bank_name: '',
        loan_bank_account: '',
        collect_main_body_uuid: '',
        collect_main_body: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        real_pay_type: '',
        pay_remark:'',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        loan_datetime: '',
        forecast_datetime: '',
        transfer_create_people: '',
        rate: '',
        rateStr: '',
        bs_background: '',
        special_require: '',
        contact_annex: '',
        transfer_status: '',
        loan_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        node_list: [],
        cashDetail: [],
        review_comments: ''
      },
      rules: {
        loan_account_uuid: [
          {
            required: true,
            message: '请选择贷款银行',
            trigger: 'change'
          },
          {
            validator: checkLoanAccount,
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
      loanTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        5: '待资金部负责人审核',
        20: '已完结'
      },
      fileList: [],
      collectBankAccountList: [],
      collectBankAccountLoading: false,
      loanBankAccountList: [],
      loanBankAccountLoading: false,
      isBankSetRealPayType: false,
      timestamp: Date.now(),
      addCashFlowDialogVisible: false,
      updateCashFlowDialogVisible: false,
      currentIndex: '',
      currentCashFlow: {},
      updatePickerOptions: null
    };
  },
  computed: {
    pickerOptions() {
      return {
        disabledDate: time => {
          return (
            time.getTime() < Date.now() - 24 * 3600000 ||
            time.getTime() <
              new Date(
                this.reviewTransfer.loan_datetime + ' 00:00:00'
              ).getTime() -
                24 * 36000000
          );
        }
      };
    },
    addPickerOptions() {
      return {
        disabledDate: time => {
          let dateBool = false;
          for (let i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
            if (this.reviewTransfer.cashDetail[i].cash_flow_type == 2) {
              dateBool =
                dateBool ||
                time.getTime() ==
                  new Date(
                    this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00'
                  ).getTime();
            }
          }
          return (
            time.getTime() < Date.now() - 24 * 3600000 ||
            time.getTime() <
              new Date(this.reviewTransfer.loan_datetime).getTime() -
                24 * 36000000 ||
            dateBool
          );
        }
      };
    },
    leftCashAmount() {
      if (this.reviewTransfer.cashDetail.length > 0) {
        let amount = Number(this.reviewTransfer.cashDetail[0].amount);
        if (this.reviewTransfer.cashDetail.length > 1) {
          for (let i = 1; i < this.reviewTransfer.cashDetail.length; i++) {
            if (this.reviewTransfer.cashDetail[i].cash_flow_type == 2) {
              amount -= Number(this.reviewTransfer.cashDetail[i].amount);
            }
          }
        }
        return amount;
      } else {
        return 0;
      }
    }
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'loanTransferList'
      });
    } else {
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getLoanTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.reviewTransfer, res.data);

          this.getLoanBankAccountListData();
          this.getCollectBankAccountListData();

          this.formatDetailData();

          if (!this.reviewTransfer.cashDetail.length) {
            this.triggerUpdateCashFlow(false);
          } else {
            this.sortCashFlowList();
          }

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
      this.reviewTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.reviewTransfer.amount,
        this.reviewTransfer.currency
      ]);

      this.reviewTransfer.currencyStr = this.mformatCurrencyStr(
        this.reviewTransfer.currency
      );

      this.reviewTransfer.rateStr = this.filterPercentage(
        this.reviewTransfer.rate
      )
        .toString()
        .slice(0, -1);

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

      if (this.reviewTransfer.real_pay_type == '0') {
        this.reviewTransfer.real_pay_type = '';
      } else {
        this.reviewTransfer.real_pay_type =
          '' + this.reviewTransfer.real_pay_type;
      }

      this.getCollectBankAccountListData();
    },

    // 发起借款调拨
    startTransferFlow(formName) {
      if (this.loading) return false;
      this.loading = true;

      if (!this.reviewTransfer.cashDetail.length || this.leftCashAmount != 0) {
        this.$message.warning('本金回款不足，请检查现金流表');
        this.loading = false;
        return false;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要通过借款调拨审核吗?')
            .then(() => {
              this.mshowLoading('正在通过借款调拨审核...');

              // 获取发起借款调拨参数

              let params = {
                real_pay_type: this.reviewTransfer.real_pay_type,
                pay_remark: this.reviewTransfer.pay_remark,
                forecast_datetime: this.reviewTransfer.forecast_datetime,
                loan_account_uuid: this.reviewTransfer.loan_account_uuid,
                collect_account_uuid: this.reviewTransfer.collect_account_uuid,
                cashDetail: this.reviewTransfer.cashDetail
              };

              loanTransferFlowStart({
                instance_id: this.reviewTransfer.uuid,
                main_body_uuid: this.reviewTransfer.loan_main_body_uuid,
                info: this.reviewTransfer.review_comments,
                params
              })
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('提交成功');
                  this.$router.replace({
                    name: 'loanTransferList'
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
    // 驳回借款指令
    rejectOrder(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewTransfer.review_comments &&
        this.reviewTransfer.review_comments.length <= 100
      ) {
        this.isReject = false;

        this.mconfirm('确定要驳回吗?')
          .then(() => {
            this.mshowLoading('正在驳回借款...');
            // 获取指令拒绝参数
            const params = {
              instance_id: this.reviewTransfer.loan_order_uuid,
              info: this.reviewTransfer.review_comments,
              params: {}
            };

            loanOrderFlowReject(params)
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('借款驳回成功');
                this.$router.replace({
                  name: 'loanTransferList'
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

    // 借款银行
    getLoanBankAccountListData() {
      if (!this.reviewTransfer.loan_main_body_uuid) {
        this.$message.error('借款主体缺失，指令信息不足！');
      }

      if (
        this.loanBankAccountLoading ||
        !this.reviewTransfer.loan_main_body_uuid
      ) {
        return false;
      }
      this.loanBankAccountLoading = true;
      getEffectAccountList({
        page: 1,
        limit: -1,
        main_body_uuid: this.reviewTransfer.loan_main_body_uuid
      })
        .then(res => {
          this.loanBankAccountList = res.data.data;

          this.loanBankAccountLoading = false;
        })
        .catch(() => {
          this.loanBankAccountLoading = false;
        });
    },
    loanBankAccountSelectToggle(show) {
      if (
        show &&
        !this.loanBankAccountLoading &&
        !this.loanBankAccountList.length
      ) {
        this.getLoanBankAccountListData();
      }
    },
    loanBankAccountSelectChange(bankUuid) {
      let hasAccount = false;
      for (let i = 0; i < this.loanBankAccountList.length; i++) {
        if (bankUuid == this.loanBankAccountList[i].uuid) {
          hasAccount = true;
          this.reviewTransfer.loan_bank_account = this.loanBankAccountList[
            i
          ].bank_account;

          if (this.loanBankAccountList[i].real_pay_type != '0') {
            this.reviewTransfer.real_pay_type =
              '' + this.loanBankAccountList[i].real_pay_type;
            this.isBankSetRealPayType = true;
          } else {
            this.isBankSetRealPayType = false;
          }
          break;
        }
      }

      if (hasAccount) {
        if (
          this.reviewTransfer.collect_account_uuid &&
          this.$refs['reviewTransfer']
        ) {
          this.$refs['reviewTransfer'].validateField('collect_account_uuid');
        }
      } else {
        this.reviewTransfer.loan_account_uuid = '';
        this.reviewTransfer.loan_bank_name = '';
        this.reviewTransfer.loan_bank_account = '';
        this.reviewTransfer.real_pay_type = '';
        this.isBankSetRealPayType = false;
      }
    },

    // 贷款银行
    getCollectBankAccountListData() {
      if (!this.reviewTransfer.collect_main_body_uuid) {
        this.$message.error('贷款主体缺失，指令信息不足！');
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
          this.reviewTransfer.loan_account_uuid &&
            this.$refs['reviewTransfer'].validateField('loan_account_uuid');
        }
      } else {
        this.reviewTransfer.collect_account_uuid = '';
        this.reviewTransfer.collect_bank_name = '';
        this.reviewTransfer.collect_bank_account = '';
      }
    },

    // 借款现金流处理
    // 计算利息回款
    calIntAmount(amount, date) {
      return Math.round(
        Number(amount) *
          Number(this.reviewTransfer.rate) *
          ((new Date(date).getTime() -
            new Date(this.reviewTransfer.loan_datetime).getTime()) /
            1000 /
            24 /
            3600) /
          365 / 100
      );
    },
    // 获取利息回款现金流
    calIntCashFlow(cashFlow) {
      let newIntCashFlow = {
        repay_date: cashFlow.repay_date,
        cash_flow_type: '3',
        amount: 0,
        real_amount: 0,
        info: ''
      };
      newIntCashFlow.amount = this.calIntAmount(
        cashFlow.amount,
        cashFlow.repay_date
      );

      newIntCashFlow.real_amount = newIntCashFlow.amount;

      return newIntCashFlow;
    },
    // 借款现金流表排序
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

      let index = 1;
      for (let i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
        if (this.reviewTransfer.cashDetail[i].cash_flow_type == 1) {
          this.reviewTransfer.cashDetail[i].index = 1;
          index++;
        }
        if (this.reviewTransfer.cashDetail[i].cash_flow_type == 2) {
          this.reviewTransfer.cashDetail[i].index = index;
          this.reviewTransfer.cashDetail[i + 1].index = index;
          index++;
        }
      }
    },
    // 刷新借款现金流表
    triggerUpdateCashFlow(showWarning) {
      if (
        this.reviewTransfer.amount &&
        this.reviewTransfer.loan_datetime &&
        this.reviewTransfer.forecast_datetime &&
        this.reviewTransfer.rate
      ) {
        this.reviewTransfer.cashDetail = [
          {
            repay_date: this.reviewTransfer.loan_datetime,
            cash_flow_type: '1',
            amount: this.reviewTransfer.amount,
            real_amount: this.reviewTransfer.amount,
            info: ''
          },
          {
            repay_date: this.reviewTransfer.forecast_datetime,
            cash_flow_type: '2',
            amount: this.reviewTransfer.amount,
            real_amount: this.reviewTransfer.amount,
            info: ''
          }
        ];
        let newIntCashFlow = this.calIntCashFlow(
          this.reviewTransfer.cashDetail[1]
        );
        this.reviewTransfer.cashDetail.push(newIntCashFlow);
        this.sortCashFlowList();
      } else {
        if (showWarning) {
          this.$message.warning('请完善数据后重试');
        }
        this.reviewTransfer.cashDetail = [];
      }
    },
    // 触发新增本金回款
    triggerAddCashFlow() {
      this.addCashFlowDialogVisible = true;
    },
    // 获取新增的本金回款
    pushNewCashFlow(newCashFlow) {
      this.reviewTransfer.cashDetail.push(newCashFlow);
      let newIntCashFlow = this.calIntCashFlow(newCashFlow);
      this.reviewTransfer.cashDetail.push(newIntCashFlow);
      this.sortCashFlowList();
      this.addCashFlowDialogVisible = false;
    },
    triggerCashFlowEdit(currentCashFlow, currentIndex) {
      this.currentCashFlow = JSON.parse(JSON.stringify(currentCashFlow));
      this.currentIndex = currentIndex;

      this.updatePickerOptions = {
        disabledDate: time => {
          let updateBool = false;
          for (let i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
            if (
              this.reviewTransfer.cashDetail[i].cash_flow_type == 2 &&
              i != currentIndex
            ) {
              updateBool =
                updateBool ||
                time.getTime() ==
                  new Date(
                    this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00'
                  ).getTime();
            }
          }
          return (
            time.getTime() < Date.now() - 24 * 3600000 ||
            time.getTime() <
              new Date(this.reviewTransfer.loan_datetime).getTime() -
                24 * 36000000 ||
            updateBool
          );
        }
      };

      this.updateCashFlowDialogVisible = true;
    },
    triggerCashFlowDelete(index) {
      this.reviewTransfer.cashDetail.splice(index, 2);
    },
    changeUpdateCashFlow(index, newCashFlow) {
      if (newCashFlow.cash_flow_type == 2) {
        this.reviewTransfer.cashDetail.splice(index, 1, newCashFlow);
        let newIntCashFlow = this.calIntCashFlow(newCashFlow);
        this.reviewTransfer.cashDetail.splice(index + 1, 1, newIntCashFlow);
        this.sortCashFlowList();
      } else if (newCashFlow.cash_flow_type == 3) {
        this.reviewTransfer.cashDetail.splice(index, 1, newCashFlow);
      }

      this.updateCashFlowDialogVisible = false;
    },
    closeDialog() {
      this.addCashFlowDialogVisible = false;
      this.updateCashFlowDialogVisible = false;
    },

    forecastDateChange() {
      this.triggerUpdateCashFlow(false);
    }
  }
};
</script>
