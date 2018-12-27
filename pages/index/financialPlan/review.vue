<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>理财计划审核</span>
        </div>
        <el-form 
          ref="reviewFinancialPlan" 
          :model="reviewFinancialPlan" 
          :rules="rules" 
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
            <div slot="header">
              <span>理财现金流表</span>
            </div>
            <div>
              <el-table :data="reviewFinancialPlan.cash_flow">
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
                  label="金额">
                  <template slot-scope="scope">
                    {{ [scope.row.amount, reviewFinancialPlan.currency] | filterCent2YuanCurrencyAmount }}
                  </template>
                </el-table-column>
                <el-table-column 
                  label="说明" 
                  prop="info">
                </el-table-column>
              </el-table>
            </div>
          </el-card>
          <el-form-item 
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
              v-if="reviewFinancialPlan.plan_status == 1"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="resolveFinancialPlan('reviewFinancialPlan')">通过</el-button>
            <el-button 
              v-if="reviewFinancialPlan.plan_status == 1"
              :disabled="loading" 
              size="medium" 
              type="danger" 
              @click="rejectFinancialPlan('reviewFinancialPlan')">驳回</el-button>
            <tp-historyback 
              name="financialPlanList"
              size="medium"></tp-historyback>
          </el-form-item>

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
  </div>

</template>
<script>
import {
  getFinancialPlanDetail,
  financialFlowResolve,
  financialFlowReject
} from '@/api/financial';

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
      rules: {
        review_comments: [
          {
            validator: checkComments,
            trigger: 'blur'
          }
        ]
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
      termTypeJson: {
        1: '开放式',
        2: '有效期'
      }
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

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  },
  methods: {
    resolveFinancialPlan(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要通过理财计划审核吗?')
            .then(() => {
              this.mshowLoading('正在提交理财计划审核...');

              // 获取审核参数
              const params = {
                plan_uuid: this.reviewFinancialPlan.plan_uuid,
                info: this.reviewFinancialPlan.review_comments
              };

              financialFlowResolve(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('理财计划审核成功');
                  this.$router.replace({
                    name: 'financialPlanList'
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
    rejectFinancialPlan(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewFinancialPlan.review_comments &&
        this.reviewFinancialPlan.review_comments.length <= 100
      ) {
        this.isReject = false;

        this.mconfirm('确定要驳回理财计划吗?')
          .then(() => {
            this.mshowLoading('正在驳回理财计划...');
            // 获取审核参数
            const params = {
              plan_uuid: this.reviewFinancialPlan.plan_uuid,
              info: this.reviewFinancialPlan.review_comments
            };

            financialFlowReject(params)
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('理财计划驳回成功');
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
      } else {
        this.loading = false;
        this.isReject = false;
        this.$message.warning('请完善数据填写后重试');
        return false;
      }
    }
  }
};
</script>
