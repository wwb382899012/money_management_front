<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>理财计划详情</span>
        </div>
        <el-form 
          ref="detailFinancialPlan" 
          :model="detailFinancialPlan" 
          label-width="120px" 
          label-position="left"
          size="small">
          <el-form-item 
            label="交易主体" 
            prop="plan_main_body_uuid">
            <div 
              class="sub-text" 
              v-text="detailFinancialPlan.plan_main_body_name" 
            ></div>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="出款银行名称" 
              prop="pay_bank_uuid">
              <div 
                class="sub-text" 
                v-text="detailFinancialPlan.pay_bank_name" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="出款银行账号" 
              prop="pay_bank_account">
              <div 
                class="sub-text">
                {{ detailFinancialPlan.pay_bank_account | filterBankAccount }}
              </div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="投资产品" 
              prop="money_manager_product_uuid">
              <div 
                class="sub-text" 
                v-text="detailFinancialPlan.money_manager_product_name" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="期限类别" 
              prop="term_type">
              <div 
                class="sub-text" 
                v-text="termTypeJson[detailFinancialPlan.term_type]" 
              ></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <div 
                class="sub-text" 
                v-text="detailFinancialPlan.currencyStr" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="投资总本金" 
              prop="amount">
              <div 
                class="sub-text" 
                v-text="detailFinancialPlan.amount" 
              >
              </div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="起息日" 
              prop="rate_start_date">
              <div 
                class="sub-text" 
                v-text="detailFinancialPlan.rate_start_date" 
              ></div>
            </el-form-item>
            <el-form-item 
              v-if="detailFinancialPlan.term_type == 2"
              label="投资产品到期日" 
              prop="rate_over_date">
              <div 
                class="sub-text" 
                v-text="detailFinancialPlan.rate_over_date" 
              ></div>
            </el-form-item>
            <el-form-item 
              v-else
              label="投资产品到期日" 
              prop="rate_over_date">
              <div class="sub-text">-</div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="预计年化收益率" 
              prop="forecast_annual_income_rate">
              <div 
                class="sub-text" 
                v-text="detailFinancialPlan.forecast_annual_income_rate" 
              >
              </div>
            </el-form-item>
            <el-form-item 
              v-if="detailFinancialPlan.term_type == 2"
              label="预计利息" 
              prop="forecast_interest">
              <div 
                class="sub-text" 
                v-text="detailFinancialPlan.forecast_interest"></div>
            </el-form-item>
            <el-form-item 
              v-else
              label="预计利息" 
              prop="forecast_interest">
              <div class="sub-text">-</div>
            </el-form-item>
          </div>
          <el-form-item 
            label="实付类型" 
            prop="real_pay_type">
            <div 
              class="sub-text" 
              v-text="realPayTypeJson[detailFinancialPlan.real_pay_type]" 
            ></div>
          </el-form-item>
          <div
            :class="{'last-form-line': !detailFinancialPlan.bank_img_file_uuid}" 
            class="form-line">
            <el-form-item 
              label="指令状态">
              <div 
                class="sub-text" 
                v-text="planTransferStatusJson[detailFinancialPlan.plan_status]" 
              ></div>
            </el-form-item>
            <el-form-item 
              label="付款状态">
              <div 
                class="sub-text" 
                v-text="payStatusJson[detailFinancialPlan.pay_status]" 
              ></div>
            </el-form-item>
          </div>
          <el-form-item 
            v-if="detailFinancialPlan.bank_img_file_uuid" 
            label="银行流水号" 
            prop="bank_water">
            <div 
              class="sub-text" 
              v-text="detailFinancialPlan.bank_water ? detailFinancialPlan.bank_water : '无'" 
            ></div>
          </el-form-item>
          <el-form-item 
            v-if="detailFinancialPlan.bank_img_file_uuid" 
            class="last-form-line"
            label="回单截图" 
            prop="bank_img_file_uuid">
            <el-upload 
              ref="receiptUpload" 
              :file-list="receiptFileList" 
              :on-preview="handlePictureCardPreview" 
              class="no-upload-text" 
              action="" 
              list-type="picture-card"
              disabled>
            </el-upload>
            <el-dialog 
              v-if="dialogVisible"
              :append-to-body="true"
              :key="timestamp"
              :visible.sync="dialogVisible"
              class="preview-dialog" 
              @close="timestamp = Date.now()">
              <img 
                :src="dialogImageUrl" 
                width="100%" 
                alt="回单截图">
              <div style="text-align:center;"><el-button @click="openInNewPage(dialogImageUrl)">查看原图</el-button></div>
            </el-dialog>
          </el-form-item>

          <el-card class="box-card box-card-inside">
            <div slot="header">
              <span>理财现金流表</span>
            </div>
            <div>
              <el-table 
                :data="detailFinancialPlan.cash_flow"
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
                    {{ [scope.row.amount, detailFinancialPlan.currency] | filterCent2YuanCurrencyAmount }}
                  </template>
                </el-table-column>
                <el-table-column label="实际值">
                  <template slot-scope="scope">
                    {{ scope.row.status == 19 || scope.row.status == 20 ? filterCent2YuanCurrencyAmount([scope.row.real_amount, detailFinancialPlan.currency]) : '' }}
                  </template>
                </el-table-column>
                <el-table-column label="调整额">
                  <template slot-scope="scope">
                    {{ scope.row.status == 19 || scope.row.status == 20 ? filterCent2YuanCurrencyAmount([scope.row.change_amount, detailFinancialPlan.currency]) : '' }}
                  </template>
                </el-table-column>
                <el-table-column 
                  label="说明" 
                  prop="info">
                </el-table-column>
                <el-table-column 
                  label="状态">
                  <template slot-scope="scope">
                    {{ scope.row.cash_flow_type == 1 ? payStatusJson[detailFinancialPlan.pay_status] : cashFlowStatusJson[scope.row.status] }}
                  </template>
                </el-table-column>
                <el-table-column 
                  label="操作" 
                  width="150px">
                  <template slot-scope="scope">
                    <template v-if="scope.row.status == 20 && scope.row.cash_flow_type == 2">
                      <el-button 
                        :disabled="loading" 
                        size="mini" 
                        type="success" 
                        @click="triggerCheckRedemption(scope.$index, scope.row)">详情</el-button>
                    </template>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <tp-historyback 
              name="financialPlanList"
              type="primary"
              size="medium"
              style="width:100px"></tp-historyback>
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
                    {{ [scope.row.amount, detailFinancialPlan.currency] | filterCent2YuanCurrencyAmount }}
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
                v-if="detailFinancialPlan.node_list" 
                :data="detailFinancialPlan.node_list">
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
      v-if="flowDetailDialogVisible"
      :append-to-body="true"
      :key="'expireFlowReceiptDialog' + timestamp" 
      :visible.sync="flowDetailDialogVisible" 
      title="本金回款详情" 
      left
      @close="timestamp = Date.now()">
      <flow-detail
        :currency="detailFinancialPlan.currency"
        :current-index="currentIndex"
        :current-redemption="currentRedemption"
        @closeDialog="closeDialog"></flow-detail>
    </el-dialog>
  </div>

</template>
<script>
import { getFinancialPlanDetail } from '@/api/financial';

import FlowDetail from './flowDetail.vue';

export default {
  components: {
    FlowDetail
  },
  data() {
    return {
      loading: false,
      detailFinancialPlan: {
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
        bank_water: '',
        bank_img_file_uuid: '',
        cash_flow: [],
        node_list: []
      },
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now(),
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
      rejectCashFlow: [],
      flowDetailDialogVisible: false,
      currentIndex: '',
      currentRedemption: {},
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'financialPlanList'
      });
    } else {
      this.detailFinancialPlan.plan_uuid = this.$route.params.uuid;
      this.getFinancialPlanDetailData();
    }
  },
  methods: {
    // 获取理财计划详情
    getFinancialPlanDetailData() {
      getFinancialPlanDetail({
        plan_uuid: this.detailFinancialPlan.plan_uuid
      })
        .then(res => {
          Object.assign(this.detailFinancialPlan, res.data);

          this.detailFinancialPlan.pay_bank_account_str = this.filterBankAccount(
            this.detailFinancialPlan.pay_bank_account
          );

          this.detailFinancialPlan.currencyStr = this.mformatCurrencyStr(
            this.detailFinancialPlan.currency
          );

          this.detailFinancialPlan.forecast_annual_income_rate = this.filterPercentage(
            this.detailFinancialPlan.forecast_annual_income_rate
          )
            .toString();
          this.detailFinancialPlan.amount = this.filterCent2YuanNoCurrencyAmount(
            this.detailFinancialPlan.amount
          );
          this.detailFinancialPlan.forecast_interest = this.filterCent2YuanNoCurrencyAmount(
            this.detailFinancialPlan.forecast_interest
          );

          if (this.detailFinancialPlan.node_list) {
            this.detailFinancialPlan.node_list = this.detailFinancialPlan.node_list.filter(
              function(item) {
                return item.node_status != '1';
              }
            );
          } else {
            this.detailFinancialPlan.node_list = [];
          }

          if (this.detailFinancialPlan.bank_img_file_uuid) {
            let imgList = this.detailFinancialPlan.bank_img_file_uuid.split(',');
            for (let i = 0; i < imgList.length; i++) {
              this.receiptFileList.push({
                name: '回单' + i,
                uuid: imgList[i],
                url: '/api/download?uuid=' + imgList[i]
              });
            }
          }

          for (let i = 0; i < this.detailFinancialPlan.cash_flow.length; i++) {
            this.detailFinancialPlan.cash_flow[i].checked = false;

            if (this.detailFinancialPlan.cash_flow[i].status == 5) {
              this.rejectCashFlow.push(this.detailFinancialPlan.cash_flow[i]);
            }

            this.detailFinancialPlan.cash_flow[i].real_amount =
              Number(this.detailFinancialPlan.cash_flow[i].amount) +
              Number(this.detailFinancialPlan.cash_flow[i].change_amount);
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
    // 预览回单
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 查看本金回款详情
    triggerCheckRedemption(index, flow) {
      this.currentIndex = index;
      Object.assign(this.currentRedemption, flow);
      this.flowDetailDialogVisible = true;
    },

    closeDialog() {
      this.dialogVisible = false;
      this.flowDetailDialogVisible = false;
    },
  }
};
</script>
