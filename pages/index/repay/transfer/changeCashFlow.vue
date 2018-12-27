<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-tabs 
        v-model="activeName" 
        type="card">
        <el-tab-pane 
          label="修改还款计划" 
          name="first">
          <el-card>
            <div 
              slot="header" 
              class="clearfix">
              <span>修改还款计划</span>
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
                  prop="edit_status">
                  <el-input 
                    v-model="editStatusJson[reviewTransfer.edit_status]" 
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
                      label="还款说明">
                    </el-table-column>
                  </el-table>
                </div>
              </el-card>

              <el-card class="box-card box-card-inside">
                <div 
                  slot="header" 
                  class="box-card-header">
                  <span>还款现金流表</span>
                  <div>
                    <el-button 
                      :disabled="loading || leftCashAmount <= 0" 
                      type="text" 
                      @click="triggerAddCashFlow">新增</el-button>
                  </div>
                </div>
                <div class="text item">
                  <el-table :data="reviewTransfer.cashDetail">
                    <el-table-column 
                      label="选项"
                      width="60px">
                      <template slot-scope="scope">
                        <el-checkbox 
                          :value="scope.row.cash_status != 3"
                          disabled></el-checkbox>
                      </template>
                    </el-table-column>
                    <el-table-column 
                      prop="repay_date" 
                      label="要求还款日"
                      width="100px">
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
                        {{ [scope.row.real_amount, reviewTransfer.currency] | filterCent2YuanCurrencyAmount }}
                      </template>
                    </el-table-column>
                    <el-table-column label="状态">
                      <template slot-scope="scope">
                        {{ !scope.row.cash_status ? '未提交' : repayStatusJson[scope.row.cash_status] }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      label="说明" 
                      prop="info">
                    </el-table-column>
                    <el-table-column 
                      label="操作" 
                      width="100px"
                      fixed="right">
                      <template slot-scope="scope">
                        <template
                          v-if="scope.row.cash_flow_type == 2 && (!scope.row.cash_status || scope.row.cash_status == 1)">
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
                        <template v-if="scope.row.cash_flow_type == 3 && (!scope.row.cash_status || scope.row.cash_status == 1)">
                          <el-button
                            :disabled="loading"
                            size="mini"
                            type="text"
                            @click="triggerCashFlowEdit(scope.row,scope.$index)">修改</el-button>
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
                  v-if="reviewTransfer.edit_status == '3'"
                  :disabled="loading" 
                  size="medium" 
                  type="success" 
                  @click="resolveTransfer('reviewTransfer')">提交</el-button>
                <el-button 
                  v-if="reviewTransfer.edit_status == '3'"
                  :disabled="loading" 
                  size="medium" 
                  type="warning" 
                  @click="rejectOrder('reviewTransfer')">驳回</el-button>
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

    <el-dialog 
      v-if="addCashFlowDialogVisible"
      :append-to-body="true"
      :key="'addCashFlowDialog' + timestamp" 
      :visible.sync="addCashFlowDialogVisible" 
      title="新增还款现金流" 
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
      title="修改还款现金流" 
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
  getRepayTransferDetail,
  repayTransferFlowEditStart,
  repayOrderFlowReject
} from '@/api/repay';

import TransferDetail from '../../loan/transfer/detail.vue';

import AddCashFlow from './addCashFlow.vue';
import UpdateCashFlow from './updateCashFlow.vue';

export default {
  components: {
    AddCashFlow,
    UpdateCashFlow,
    TransferDetail
  },
  data() {
    const checkBankWater = (rule, value, callback) => {
      if (value && !/^[0-9A-Z-]+$/.test(value)) {
        return callback(new Error('请输入正确的银行流水号'));
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
        currency: '',
        currencyStr: '',
        repay_amount: '',
        repay_amount_str: '',
        cashDetail: [],

        loan_transfer_uuid: '',
        rate: '',
        real_pay_date: '',
        node_list: [],

        review_comments: ''
      },
      rules: {
        bank_water: [
          {
            required: true,
            message: '请输入银行流水号',
            trigger: 'blur'
          },
          {
            validator: checkBankWater,
            trigger: 'blur'
          }
        ]
      },
      repayTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        20: '已完结'
      },
      editStatusJson: {
        1: '已完结',
        2: '指令审核中',
        3: '待资金专员审核',
        4: '待资金部负责人审核'
      },
      repayStatusJson: {
        1: '未提交',
        2: '待审核',
        3: '已支付',
        10: '待确认'
      },
      activeName: 'first',
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
                this.reviewTransfer.real_pay_date + ' 00:00:00'
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
            if (
              this.reviewTransfer.cashDetail[i].cash_flow_type == 2 &&
              (this.reviewTransfer.cashDetail[i].cash_status == 1 ||
                !this.reviewTransfer.cashDetail[i].cash_status)
            ) {
              dateBool =
                dateBool ||
                time.getTime() ==
                  new Date(
                    this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00'
                  ).getTime();
            } else if (
              this.reviewTransfer.cashDetail[i].cash_flow_type == 2 &&
              (this.reviewTransfer.cashDetail[i].cash_status == 3 ||
                this.reviewTransfer.cashDetail[i].cash_status == 2)
            ) {
              dateBool =
                dateBool ||
                time.getTime() <=
                  new Date(
                    this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00'
                  ).getTime();
            }
          }
          return (
            time.getTime() < Date.now() - 24 * 3600000 ||
            time.getTime() <
              new Date(this.reviewTransfer.real_pay_date).getTime() -
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
      }

      if (this.reviewTransfer.orderDetail) {
        this.reviewTransfer.orderDetail = this.reviewTransfer.orderDetail.slice(
          0,
          1
        );
      }

      this.sortCashFlowList();
    },

    // 提交修改还款计划
    resolveTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      if (!this.reviewTransfer.cashDetail.length || this.leftCashAmount != 0) {
        this.$message.warning('本金回款不足，请检查现金流表');
        this.loading = false;
        return false;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交修改还款计划吗?')
            .then(() => {
              this.mshowLoading('正在提交修改还款计划...');

              // 获取借款调拨审核参数
              const params = {
                repay_id: this.reviewTransfer.id
              };
              let repayCashDetail = [];
              for (let i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
                if (
                  this.reviewTransfer.cashDetail[i].cash_flow_type != 1 &&
                  this.reviewTransfer.cashDetail[i].cash_status != 2 &&
                  this.reviewTransfer.cashDetail[i].cash_status != 3
                ) {
                  repayCashDetail.push(this.reviewTransfer.cashDetail[i]);
                }
              }

              params.repayCashDetail = repayCashDetail;

              repayTransferFlowEditStart({
                instance_id: this.reviewTransfer.id,
                main_body_uuid: this.reviewTransfer.repay_main_body_uuid,
                info: this.reviewTransfer.review_comments,
                params
              })
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('提交修改还款计划成功');
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
    // 驳回修改还款计划
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
            this.mshowLoading('正在驳回修改还款计划...');
            // 获取指令拒绝参数
            const params = {
              instance_id: this.reviewTransfer.orderDetail[0].id,
              info: this.reviewTransfer.review_comments,
              params: {}
            };

            repayOrderFlowReject(params)
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('修改还款计划驳回成功');
                this.$router.replace({
                  name: 'repayOrderList'
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

    // 查看还款指令详情
    triggerCheckRepayOrder(uuid) {
      this.$router.push({
        name: 'repayOrderDetail',
        params: {
          uuid
        }
      });
    },

    // 还款现金流处理
    // 计算利息回款
    calIntAmount(amount, date) {
      console.log(amount);
      return Math.round(
        Number(amount) *
          Number(this.reviewTransfer.rate) *
          ((new Date(date).getTime() -
            new Date(
              this.reviewTransfer.cashDetail[0].real_repay_date
            ).getTime()) /
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
            if (i == currentIndex) {
              continue;
            } else if (
              this.reviewTransfer.cashDetail[i].cash_flow_type == 2 &&
              (this.reviewTransfer.cashDetail[i].cash_status == 1 ||
                !this.reviewTransfer.cashDetail[i].cash_status)
            ) {
              updateBool =
                updateBool ||
                time.getTime() ==
                  new Date(
                    this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00'
                  ).getTime();
            } else if (
              this.reviewTransfer.cashDetail[i].cash_flow_type == 2 &&
              (this.reviewTransfer.cashDetail[i].cash_status == 3 ||
                this.reviewTransfer.cashDetail[i].cash_status == 2)
            ) {
              updateBool =
                updateBool ||
                time.getTime() <=
                  new Date(
                    this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00'
                  ).getTime();
            }
          }

          return (
            time.getTime() < Date.now() - 24 * 3600000 ||
            time.getTime() <
              new Date(this.reviewTransfer.real_pay_date).getTime() -
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
    }
  }
};
</script>
