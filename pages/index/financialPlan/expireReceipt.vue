<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>理财赎回上传回单</span>
        </div>
        <el-form 
          ref="reviewFinancialPlan" 
          :model="reviewFinancialPlan" 
          label-width="120px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half" 
            label="交易主体" 
            prop="plan_main_body_uuid">
            <el-input 
              v-model="reviewFinancialPlan.plan_main_body_name" 
              disabled></el-input>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="出款银行名称" 
              prop="pay_bank_uuid">
              <el-input 
                v-model="reviewFinancialPlan.pay_bank_name" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="出款银行账号" 
              prop="pay_bank_account">
              <el-input 
                v-model="reviewFinancialPlan.pay_bank_account_str" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="投资产品" 
              prop="money_manager_product_uuid">
              <el-input 
                v-model="reviewFinancialPlan.money_manager_product_name" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="期限类别" 
              prop="term_type">
              <el-input 
                v-model="termTypeJson[reviewFinancialPlan.term_type]" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <el-input 
                v-model="reviewFinancialPlan.currencyStr" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="投资总本金" 
              prop="amount">
              <el-input 
                v-model="reviewFinancialPlan.amount" 
                placeholder="请输入投资总本金" 
                disabled>
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
          </div>
          <div 
            v-if="reviewFinancialPlan.term_type == 2" 
            class="form-line">
            <el-form-item 
              label="起息日" 
              prop="rate_start_date">
              <el-input 
                v-model="reviewFinancialPlan.rate_start_date" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="投资产品到期日" 
              prop="rate_over_date">
              <el-input 
                v-model="reviewFinancialPlan.rate_over_date" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div 
            v-if="reviewFinancialPlan.term_type == 2" 
            class="form-line">
            <el-form-item 
              label="预计年化收益率" 
              prop="forecast_annual_income_rate">
              <el-input 
                v-model="reviewFinancialPlan.forecast_annual_income_rate" 
                placeholder="请输入预计年化收益率" 
                disabled>
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
            <el-form-item 
              label="预计利息" 
              prop="forecast_interest">
              <el-input 
                v-model="reviewFinancialPlan.forecast_interest" 
                placeholder="请输入预计利息" 
                disabled>
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
          </div>
          <div 
            v-if="reviewFinancialPlan.term_type == 1" 
            class="form-line">
            <el-form-item 
              label="起息日" 
              prop="rate_start_date">
              <el-input 
                v-model="reviewFinancialPlan.rate_start_date" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="预计年化收益率" 
              prop="forecast_annual_income_rate">
              <el-input 
                v-model="reviewFinancialPlan.forecast_annual_income_rate" 
                placeholder="请输入预计年化收益率" 
                disabled>
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </div>
          <el-form-item 
            class="el-form-item-width-half" 
            label="实付类型" 
            prop="real_pay_type">
            <el-input 
              v-model="realPayTypeJson[reviewFinancialPlan.real_pay_type]" 
              disabled></el-input>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="指令状态" 
              prop="plan_status">
              <el-input 
                v-model="planTransferStatusJson[reviewFinancialPlan.plan_status]" 
                disabled>
              </el-input>
            </el-form-item>
            <el-form-item 
              label="付款状态" 
              prop="pay_status">
              <el-input 
                v-model="payStatusJson[reviewFinancialPlan.pay_status]" 
                disabled>
              </el-input>
            </el-form-item>
          </div>
          <el-card class="box-card box-card-inside">
            <div 
              slot="header">
              <span>理财现金流表</span>
            </div>
            <div>
              <el-table 
                :data="reviewFinancialPlan.cash_flow"
                :row-style="hideRejectRow">
                <el-table-column 
                  prop="repay_date" 
                  label="日期">
                </el-table-column>
                <el-table-column label="事项">
                  <template slot-scope="scope">
                    {{ cashFlowTypeJson[scope.row.cash_flow_type] }}
                  </template>
                </el-table-column>
                <el-table-column label="金额">
                  <template slot-scope="scope">
                    {{ [scope.row.amount, reviewFinancialPlan.currency] | filterCent2YuanCurrencyAmount }}
                  </template>
                </el-table-column>
                <el-table-column label="实际值">
                  <template slot-scope="scope">
                    {{ scope.row.status == 19 || scope.row.status == 20 || scope.row.cash_flow_type == 1 ? filterCent2YuanCurrencyAmount([scope.row.real_amount, reviewFinancialPlan.currency]) : '' }}
                  </template>
                </el-table-column>
                <el-table-column label="调整额">
                  <template slot-scope="scope">
                    {{ scope.row.status == 19 || scope.row.status == 20 || scope.row.cash_flow_type == 1 ? filterCent2YuanCurrencyAmount([scope.row.change_amount, reviewFinancialPlan.currency]) : '' }}
                  </template>
                </el-table-column>
                <el-table-column 
                  label="说明" 
                  prop="info">
                </el-table-column>
                <el-table-column 
                  label="状态">
                  <template slot-scope="scope">
                    {{ scope.row.cash_flow_type == 1 ? payStatusJson[reviewFinancialPlan.pay_status] : cashFlowStatusJson[scope.row.status] }}
                  </template>
                </el-table-column>
                <el-table-column 
                  label="操作" 
                  width="150px">
                  <template slot-scope="scope">
                    <template v-if="scope.row.status == 19 && scope.row.cash_flow_type == 2">
                      <el-button 
                        :disabled="loading" 
                        size="mini" 
                        type="success" 
                        @click="triggerExpireReceipt(scope.$index, scope.row)">上传回单</el-button>
                    </template>
                    <template v-if="scope.row.status == 19 && scope.row.cash_flow_type == 3">
                      <el-button 
                        :disabled="loading" 
                        size="mini" 
                        type="success" 
                        @click="triggerExpireReceipt(scope.$index, scope.row)">修改</el-button>
                    </template>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
          <el-form-item 
            v-if="needExpireAudit"
            prop="review_comments" 
            label-width="0">
            <el-input 
              v-model="reviewFinancialPlan.review_comments" 
              type="textarea" 
              placeholder="请输入审核意见"></el-input>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="reviewFinancialPlan.pay_status == 2 && reviewFinancialPlan.is_pay_off != 2 
              && !needExpireAudit && needExpireReceipt"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="resolveAuditRedemption('reviewFinancialPlan')">提交</el-button>
            <tp-historyback 
              name="financialPlanList"
              size="medium"></tp-historyback>
          </el-form-item>

          <el-card 
            v-if="rejectCashFlow && rejectCashFlow.length"
            class="box-card box-card-inside"
            style="margin-top: 80px;">
            <div 
              slot="header" 
              class="box-card-header">
              <span>理财现金流驳回数据表</span>
            </div>
            <div>
              <el-table :data="rejectCashFlow">
                <el-table-column 
                  prop="repay_date" 
                  label="日期">
                </el-table-column>
                <el-table-column label="事项">
                  <template slot-scope="scope">
                    {{ cashFlowTypeJson[scope.row.cash_flow_type] }}
                  </template>
                </el-table-column>
                <el-table-column label="金额">
                  <template slot-scope="scope">
                    {{ [scope.row.amount, reviewFinancialPlan.currency] | filterCent2YuanCurrencyAmount }}
                  </template>
                </el-table-column>
                <el-table-column
                  label="状态"
                  prop="status">
                  <template slot-scope="scope">
                    {{ cashFlowStatusJson[scope.row.status] }}
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>

          <el-card class="box-card">
            <div slot="header">
              <span>操作日志</span>
            </div>
            <div>
              <el-table 
                v-if="reviewFinancialPlan.node_list" 
                :data="reviewFinancialPlan.node_list">
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
      v-if="expireFlowReceiptDialogVisible"
      :append-to-body="true"
      :key="'expireFlowReceiptDialog' + timestamp" 
      :visible.sync="expireFlowReceiptDialogVisible" 
      title="编辑赎回" 
      left
      @close="timestamp = Date.now()">
      <expire-flow-receipt
        :current-index="currentIndex"
        :current-redemption="currentRedemption" 
        @expireFlowReceiptSuccess="updateNewCashFlow"
        @closeDialog="closeDialog"></expire-flow-receipt>
    </el-dialog>
  </div>

</template>
<script>
import { getFinancialPlanDetail, auditRedemption } from '@/api/financial';

import ExpireFlowReceipt from './expireFlowReceipt.vue';

export default {
  components: {
    ExpireFlowReceipt
  },
  data() {
    return {
      loading: false,
      reviewFinancialPlan: {
        plan_uuid: '',
        plan_main_body_uuid: '',
        pay_bank_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        money_manager_product_uuid: '',
        term_type: '',
        currency: '',
        currencyStr: '',
        amount: '',
        rate_start_date: '',
        rate_over_date: '',
        forecast_annual_income_rate: '',
        forecast_interest: '',
        real_pay_type: '',
        cash_flow: [],
        node_list: [],
        review_comments: ''
      },
      planTransferStatusJson: {
        0: '已保存',
        1: '待资金部负责人审核',
        2: '待权签人审核',
        4: '资金部负责人驳回',
        5: '权签人驳回',
        19: '待上传回单',
        20: '已完结'
      },
      cashFlowStatusJson: {
        0: '已保存',
        2: '待权签人审核',
        5: '权签人驳回',
        19: '待上传回单',
        20: '已赎回'
      },
      termTypeJson: {
        1: '开放式',
        2: '有效期'
      },
      timestamp: Date.now(),
      expireFlowReceiptDialogVisible: false,
      currentIndex: '',
      currentRedemption: {},
      rejectCashFlow: [],
      needExpireAudit: false,
      needExpireReceipt: false,
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'financialPlanList'
      });
    } else {
      this.reviewFinancialPlan.plan_uuid = this.$route.params.uuid;
      this.getFinancialPlanDetailData();
    }
  },
  methods: {
    // 获取详情
    getFinancialPlanDetailData() {
      getFinancialPlanDetail({
        plan_uuid: this.reviewFinancialPlan.plan_uuid
      })
        .then(res => {
          Object.assign(this.reviewFinancialPlan, res.data);

          this.reviewFinancialPlan.pay_bank_account_str = this.filterBankAccount(
            this.reviewFinancialPlan.pay_bank_account
          );

          this.reviewFinancialPlan.currencyStr = this.mformatCurrencyStr(
            this.reviewFinancialPlan.currency
          );

          this.reviewFinancialPlan.forecast_annual_income_rate = this.filterPercentage(
            this.reviewFinancialPlan.forecast_annual_income_rate
          )
            .toString()
            .slice(0, -1);
          this.reviewFinancialPlan.amount = this.filterCent2YuanNoCurrencyAmount(
            this.reviewFinancialPlan.amount
          );
          this.reviewFinancialPlan.forecast_interest = this.filterCent2YuanNoCurrencyAmount(
            this.reviewFinancialPlan.forecast_interest
          );

          if (this.reviewFinancialPlan.node_list) {
            this.reviewFinancialPlan.node_list = this.reviewFinancialPlan.node_list.filter(
              function(item) {
                return item.node_status != '1';
              }
            );
          } else {
            this.reviewFinancialPlan.node_list = [];
          }

          for (let i = 0; i < this.reviewFinancialPlan.cash_flow.length; i++) {
            if (this.reviewFinancialPlan.cash_flow[i].status == 5) {
              this.rejectCashFlow.push(this.reviewFinancialPlan.cash_flow[i]);
            }

            if (
              ((this.reviewFinancialPlan.cash_flow[i].status == 19 || 
              this.reviewFinancialPlan.cash_flow[i].status == 20) && 
              (this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '2' || 
              this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '3')) ||
              this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '1'
            ) {
              this.reviewFinancialPlan.cash_flow[i].real_amount =
                Number(this.reviewFinancialPlan.cash_flow[i].amount) +
                Number(this.reviewFinancialPlan.cash_flow[i].change_amount);
            }

            if (
              this.reviewFinancialPlan.cash_flow[i].status == 2 &&
              this.reviewFinancialPlan.cash_flow[i].cash_flow_type != 1
            ) {
              this.needExpireAudit = true;
            }

            if (
              this.reviewFinancialPlan.cash_flow[i].status == 19 && 
              this.reviewFinancialPlan.cash_flow[i].cash_flow_type != 1
            ) {
              this.needExpireReceipt = true;
            }
          }

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },

    // 隐藏驳回数据
    hideRejectRow({row}) {
      if (row.status == 5) {
        return 'display: none';
      } else {
        return '';
      }
    },

    // 通过审核
    resolveAuditRedemption() {
      if (this.loading) return false;
      this.loading = true;
      let cash_flow = [];

      for (let i = 0; i < this.reviewFinancialPlan.cash_flow.length; i++) {
        if (
          this.reviewFinancialPlan.cash_flow[i].status == 19 &&
          this.reviewFinancialPlan.cash_flow[i].cash_flow_type != 1
        ) {
          cash_flow.push(this.reviewFinancialPlan.cash_flow[i]);

          if (this.reviewFinancialPlan.cash_flow[i].cash_flow_type == 2 && this.reviewFinancialPlan.cash_flow[i].bank_img_file_uuid == '') {
            this.$message.warning('请完善' + this.reviewFinancialPlan.cash_flow[i].repay_date +  '的现金流银行流水数据');
            this.loading = false;
            return false;
          }
        }
      }

      this.mconfirm('确认更新银行流水和实际值吗?')
        .then(() => {
          this.mshowLoading('正在提交...');
          
          auditRedemption({
            plan_uuid: this.reviewFinancialPlan.plan_uuid,
            cash_flow,
            info: '',
            approve_type: '1'
          })
            .then(() => {
              this.loading = false;
              this.mhideLoading();
              this.$message.success('提交成功');
              this.$router.replace({
                name: 'financialPlanList'
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
    },

    // 触发更新弹窗
    triggerExpireReceipt(index, flow) {
      this.currentIndex = index;
      Object.assign(this.currentRedemption, flow);
      this.expireFlowReceiptDialogVisible = true;
    },
    // 更新成功
    updateNewCashFlow(index, newCashFlow) {
      this.reviewFinancialPlan.cash_flow.splice(index, 1, newCashFlow);
      this.expireFlowReceiptDialogVisible = false;
    },
    closeDialog() {
      this.expireFlowReceiptDialogVisible = false;
    },
  }
};
</script>
