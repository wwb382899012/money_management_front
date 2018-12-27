<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>理财计划上传银行流水</span>
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
            <div 
              slot="header" 
              class="box-card-header">
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
                    {{ scope.row.status == 20 || scope.row.cash_flow_type == 1 ? filterCent2YuanCurrencyAmount([scope.row.real_amount, reviewFinancialPlan.currency]) : '' }}
                  </template>
                </el-table-column>
                <el-table-column label="调整额">
                  <template slot-scope="scope">
                    {{ scope.row.status == 20 || scope.row.cash_flow_type == 1 ? filterCent2YuanCurrencyAmount([scope.row.change_amount, reviewFinancialPlan.currency]) : '' }}
                  </template>
                </el-table-column>
                <el-table-column 
                  label="说明" 
                  prop="info">
                </el-table-column>
                <el-table-column
                  label="状态"
                  prop="status">
                  <template slot-scope="scope">
                    {{ scope.row.cash_flow_type == 1 ? payStatusJson[reviewFinancialPlan.pay_status] : cashFlowStatusJson[scope.row.status] }}
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
          <el-form-item 
            class="el-form-item-width-half"
            label="银行流水号" 
            prop="bank_water">
            <el-input 
              v-model="reviewFinancialPlan.bank_water" 
              placeholder="请输入银行流水号"></el-input>
          </el-form-item>
          <el-form-item 
            label="回单截图" 
            prop="bank_img_file_uuid">
            <el-upload 
              ref="receiptUpload" 
              :file-list="receiptFileList" 
              :before-upload="beforeReceiptUpload"
              :on-success="handleReceiptUploadSuccess" 
              :on-error="handleReceiptUploadError" 
              :on-preview="handlePictureCardPreview"
              :on-remove="handlePictureCardRemove"
              :limit="3"
              accept="jpg,jpeg,gif,png" 
              action="/api/upload" 
              list-type="picture-card">
              <div 
                id="file-paste" 
                contenteditable 
                @click.prevent.stop 
                @paste="handleFilePaste">
                <span class="sub-text">截图后此处粘贴</span>
                <span class="sub-text">最多上传三张</span>
              </div>
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
                alt="">
              <div style="text-align:center;"><el-button @click="openInNewPage(dialogImageUrl)">查看原图</el-button></div>
            </el-dialog>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="reviewFinancialPlan.plan_status == 19 || reviewFinancialPlan.need_ticket_back == '1'"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="resolveFinancialPlan('reviewFinancialPlan')">提交</el-button>
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
  </div>

</template>
<script>
import { getFinancialPlanDetail, financialFlowResolve } from '@/api/financial';

export default {
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
        bank_water: '',
        bank_img_file_uuid: '',
        review_comments: ''
      },
      rules: {
        bank_img_file_uuid: [
          {
            required: true,
            message: '请上传银行回单截图',
            trigger: 'change'
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
      fileList: [],
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now(),
      rejectCashFlow: [],
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

          for (let i = 0; i < this.reviewFinancialPlan.cash_flow.length; i++) {
            if (this.reviewFinancialPlan.cash_flow[i].status == 5) {
              this.rejectCashFlow.push(this.reviewFinancialPlan.cash_flow[i]);
            }
            
            if (
              (this.reviewFinancialPlan.cash_flow[i].status == 20 && 
              (this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '2' || 
              this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '3')) ||
              this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '1'
            ) {
              this.reviewFinancialPlan.cash_flow[i].real_amount =
                Number(this.reviewFinancialPlan.cash_flow[i].amount) +
                Number(this.reviewFinancialPlan.cash_flow[i].change_amount);
            }
          }

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
    // 隐藏驳回数据
    hideRejectRow({row}) {
      if (row.status == 5) {
        return 'display: none';
      } else {
        return '';
      }
    },
    
    // 提交回单
    resolveFinancialPlan(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.updateReceiptUuid();
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交银行流水吗?')
            .then(() => {
              this.mshowLoading('正在提交银行流水...');

              // 获取审核参数
              const params = {
                plan_uuid: this.reviewFinancialPlan.plan_uuid,
                info: this.reviewFinancialPlan.review_comments,
                bank_water: this.reviewFinancialPlan.bank_water,
                bank_img_file_uuid: this.reviewFinancialPlan.bank_img_file_uuid
              };

              financialFlowResolve(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('银行流水提交成功');
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

    // 上传回单
    handleFilePaste(event) {
      if (event.clipboardData && event.clipboardData.items) {
        const image = this.isImage(event.clipboardData.items);
        if (image) {
          event.preventDefault();
          const file = image.getAsFile();
          const uploadFile = {
            name: file.name,
            percentage: 0,
            raw: file,
            size: file.size,
            status: 'ready'
          };

          this.$refs.receiptUpload.uploadFiles.push(uploadFile);
          this.$refs.receiptUpload.submit();
        } else {
          event.preventDefault();
          return false;
        }
      }
    },
    handleReceiptUploadSuccess(res, file, fileList) {
      this.receiptFileList = fileList;
      if (res.code == '0' && res.data && res.data.uuid) {
        this.receiptFileList[this.receiptFileList.length - 1].uuid =
          res.data.uuid;
        this.receiptFileList[this.receiptFileList.length - 1].url =
          '/api/download?uuid=' + res.data.uuid;
      } else {
        this.receiptFileList.splice(-1, 1);
        this.$message.error('服务器繁忙，请重试！');
      }

      this.updateReceiptUuid();
    },
    handleReceiptUploadError() {
      this.$message.error('服务器繁忙，请重试！');
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handlePictureCardRemove(file, fileList) {
      this.receiptFileList = fileList;
    },
    updateReceiptUuid() {
      let uuids = '';
      for (let i = 0; i < this.receiptFileList.length; i++) {
        uuids += i
          ? ',' + this.receiptFileList[i].uuid
          : this.receiptFileList[i].uuid;
      }
      this.reviewFinancialPlan.bank_img_file_uuid = uuids;
    },
    beforeReceiptUpload(file) {
      if (this.receiptFileList.length >= 3) {
        this.$message.warning('单条银行流水最多上传三张回单截图');
        return false;
      }

      this.beforeImgUpload(file);
    }
  }
};
</script>
