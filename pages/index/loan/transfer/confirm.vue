<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>打款状态确认</span>
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
              prop="loan_bank_name">
              <el-input 
                v-model="reviewTransfer.loan_bank_name" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="贷款方银行名称" 
              prop="collect_bank_name">
              <el-input 
                v-model="reviewTransfer.collect_bank_name" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款方银行账号" 
              prop="loan_bank_account">
              <el-input 
                v-model="reviewTransfer.loan_bank_account_str" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="贷款方银行账号" 
              prop="collect_bank_account">
              <el-input 
                v-model="reviewTransfer.collect_bank_account_str" 
                disabled></el-input>
            </el-form-item>
          </div>
          <el-form-item 
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
                <template slot="append">%</template>
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
            <span 
              v-else 
              class="sub-text">无</span>
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
              action=""></el-upload>
            <span 
              v-else 
              class="sub-text">无</span>
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
          <el-card 
            v-if="reviewTransfer.cashDetail && reviewTransfer.cashDetail.length" 
            class="box-card box-card-inside">
            <div slot="header">
              <span>借款现金流列表</span>
            </div>
            <div>
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
              </el-table>
            </div>
          </el-card>

          <el-form-item 
            class="el-form-item-width-half"
            label="银行流水号" 
            prop="bank_water">
            <el-input 
              v-model="reviewTransfer.bank_water" 
              placeholder="请输入银行流水号"></el-input>
          </el-form-item>

          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="reviewTransfer.transfer_status == '2' && reviewTransfer.loan_status == '10'"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="confirmLoanTransferSuccess('reviewTransfer')">确认打款成功</el-button>
            <el-button 
              v-if="reviewTransfer.transfer_status == '2' && reviewTransfer.loan_status == '10'"
              :disabled="loading" 
              size="medium" 
              type="warning" 
              @click="confirmLoanTransferFail">确认打款失败</el-button>
            <tp-historyback 
              name="loanTransferList"
              size="medium"></tp-historyback>
          </el-form-item>

          <el-card class="box-card">
            <div slot="header">
              <span>操作日志</span>
            </div>
            <div class="text item">
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
  </div>

</template>
<script>
import {
  getLoanTransferDetail,
  loanTransferConfirmSuccess,
  loanTransferConfirmFail
} from '@/api/loan';

export default {
  data() {
    const checkBankWater = (rule, value, callback) => {
      if (this.isConfirm) {
        if (value == '') {
          return callback(new Error('请填写银行流水号'));
        }
      }

      if (value && !/^[0-9A-Z-]+$/.test(value)) {
        return callback(new Error('请输入正确的银行流水号'));
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
        contact_annex: [],
        contact_annex_uuids: '',
        others_annex: [],
        others_annex_uuids: '',
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
        bank_water: [
          {
            validator: checkBankWater,
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
      isConfirm: false
    };
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
      this.reviewTransfer.loan_bank_account_str = this.filterBankAccount(
        this.reviewTransfer.loan_bank_account
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

      this.sortCashFLowList();
    },

    // 借款现金流表排序
    sortCashFLowList() {
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
    },

    // 确认打款成功
    confirmLoanTransferSuccess(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isConfirm = true;

      this.$refs[formName].validate(valid => {
        this.isConfirm = false;
        if (valid) {
          this.mconfirm('确认修改打款状态为成功吗？')
            .then(() => {
              this.mshowLoading('正在提交...');

              loanTransferConfirmSuccess({
                uuid: this.reviewTransfer.uuid,
                bank_water: this.reviewTransfer.bank_water
              })
                  .then(() => {
                    this.loading = false;
                    this.mhideLoading();
                    this.$message.success('打款状态已更新为成功状态');
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
        }  else {
          this.loading = false;
          this.$message.warning('请完善数据填写后重试');
          return false;
        }
      })
    },

    // 确认打款失败
    confirmLoanTransferFail() {
      if (this.loading) return false;
      this.loading = true;

      this.mconfirm('确认修改打款状态为失败吗？')
        .then(() => {
          this.mshowLoading('正在提交...');

          loanTransferConfirmFail({
            uuid: this.reviewTransfer.uuid
          })
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('打款状态已更新为失败状态');
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
    },
  }
};
</script>
