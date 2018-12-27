<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>借款调拨上传银行流水</span>
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
                <el-table-column 
                  prop="real_repay_date" 
                  label="实际日期">
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
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="resolveTransfer('reviewTransfer')">提交</el-button>
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
  </div>

</template>
<script>
import { getLoanTransferDetail, loanTransferFlowResolve } from '@/api/loan';

export default {
  data() {
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
        collect_bank_account: '',
        collect_bank_name: '',
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
        contact_annex: '',
        transfer_status: '',
        loan_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        node_list: [],
        cashDetail: [],
        review_comments: '',
        bank_water: '',
        bank_img_file_uuid: ''
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
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
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

    // 提交银行回单
    resolveTransfer(formName) {
      if (this.loading) return false;
      this.loading = true;
      let bank_img_file_uuid = '';
      for (let i = 0; i < this.receiptFileList.length; i++) {
        bank_img_file_uuid += !i
          ? this.receiptFileList[i].uuid
          : ',' + this.receiptFileList[i].uuid;
      }
      this.reviewTransfer.bank_img_file_uuid = bank_img_file_uuid;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交银行流水回单吗?')
            .then(() => {
              this.mshowLoading('正在提交银行流水回单...');

              // 获取借款调拨审核参数
              const params = {
                instance_id: this.reviewTransfer.uuid,
                main_body_uuid: this.reviewTransfer.loan_main_body_uuid,
                info: this.reviewTransfer.review_comments,
                params: {
                  real_pay_type: this.reviewTransfer.real_pay_type,
                  bank_water: this.reviewTransfer.bank_water,
                  bank_img_file_uuid: this.reviewTransfer.bank_img_file_uuid
                }
              };

              loanTransferFlowResolve(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('提交银行流水回单成功');
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
      this.reviewTransfer.bank_img_file_uuid = uuids;
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
