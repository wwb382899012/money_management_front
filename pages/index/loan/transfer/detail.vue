<template>
  <div class="app-page-body">
    <tp-breadcrumb v-if="!uuid"></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>借款调拨详情</span>
        </div>
        <el-form 
          ref="detailTransfer" 
          :model="detailTransfer" 
          label-width="120px" 
          label-position="left" 
          size="small">
          <div class="form-line">
            <el-form-item 
              label="系统来源" 
              prop="system_flag">
              <div 
                class="sub-text" 
                v-text="detailTransfer.system_flag"></div>
            </el-form-item>
            <el-form-item 
              v-if="detailTransfer.system_flag != 'oa'"
              label="外部指令号" 
              prop="out_order_num">
              <div 
                class="sub-text" 
                v-text="detailTransfer.out_order_num" 
              ></div>
            </el-form-item>
            <el-form-item 
              v-else
              label="外部指令号" 
              prop="out_order_num">
              <div class="sub-text">
                <a 
                  :href="'http://oa.jyblife.com/workflow/request/ViewRequest.jsp?requestid=' + detailTransfer.request_id + '&ismonitor=1'" 
                  target="_blank"
                  style="color: #409EFF">{{ detailTransfer.out_order_num }}</a>
              </div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="资金交易编号" 
              prop="transfer_num">
              <div 
                class="sub-text" 
                v-text="detailTransfer.transfer_num"></div>
            </el-form-item>
            <el-form-item 
              label="借款编号" 
              prop="loan_order_num">
              <div 
                class="sub-text" 
                v-text="detailTransfer.loan_order_num"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款方" 
              prop="loan_main_body">
              <div 
                class="sub-text" 
                v-text="detailTransfer.loan_main_body"></div>
            </el-form-item>
            <el-form-item 
              label="贷款方" 
              prop="collect_main_body">
              <div 
                class="sub-text" 
                v-text="detailTransfer.collect_main_body"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款方银行名称" 
              prop="loan_bank_name">
              <div 
                class="sub-text" 
                v-text="detailTransfer.loan_bank_name"></div>
            </el-form-item>
            <el-form-item 
              label="贷款方银行名称" 
              prop="collect_bank_name">
              <div 
                class="sub-text" 
                v-text="detailTransfer.collect_bank_name"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款方银行账号" 
              prop="loan_bank_account">
              <div 
                class="sub-text">
                {{ detailTransfer.loan_bank_account | filterBankAccount }}  
              </div>
            </el-form-item>
            <el-form-item 
              label="贷款方银行账号" 
              prop="collect_bank_account">
              <div 
                class="sub-text">
                {{ detailTransfer.collect_bank_account | filterBankAccount }}
              </div>
            </el-form-item>
          </div>
          <el-form-item 
            label="实付类型" 
            prop="real_pay_type">
            <div 
              class="sub-text" 
              v-text="realPayTypeJson[detailTransfer.real_pay_type]"></div>
          </el-form-item>
          <el-form-item
            v-if="detailTransfer.real_pay_type == 2"
            label="付款备注"
            prop="pay_remark">
            <div
              class="sub-text"
              v-text="detailTransfer.pay_remark"></div>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="借款币种" 
              prop="currency">
              <div 
                class="sub-text" 
                v-text="detailTransfer.currencyStr"></div>
            </el-form-item>
            <el-form-item 
              label="借款金额" 
              prop="amount">
              <div 
                class="sub-text" 
                v-text="detailTransfer.formatAmount"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款日期" 
              prop="loan_datetime">
              <div 
                class="sub-text" 
                v-text="detailTransfer.loan_datetime"></div>
            </el-form-item>
            <el-form-item 
              label="预计还款日" 
              prop="forecast_datetime">
              <div 
                class="sub-text" 
                v-text="detailTransfer.forecast_datetime"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="指令发起人" 
              prop="transfer_create_people">
              <div 
                class="sub-text" 
                v-text="detailTransfer.transfer_create_people"></div>
            </el-form-item>
            <el-form-item 
              label="利息率" 
              prop="rate">
              <div 
                class="sub-text" 
                v-text="detailTransfer.rateStr">
              </div>
            </el-form-item>
          </div>
          <el-form-item 
            label="业务背景" 
            prop="bs_background">
            <div 
              class="sub-text" 
              v-text="detailTransfer.bs_background ? detailTransfer.bs_background : '无'"></div>
          </el-form-item>
          <el-form-item 
            label="其他说明">
            <div 
              class="sub-text" 
              v-text="detailTransfer.plus_require ? detailTransfer.plus_require : '无'"></div>
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
          <el-form-item 
            v-if="detailTransfer.bank_img_file_uuid" 
            label="银行流水号" 
            prop="bank_water">
            <div 
              class="sub-text" 
              v-text="detailTransfer.bank_water ? detailTransfer.bank_water : '无'"></div>
          </el-form-item>
          <el-form-item 
            v-if="detailTransfer.bank_img_file_uuid" 
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
          <div class="form-line">
            <el-form-item 
              label="指令状态">
              <div 
                class="sub-text"
                v-text="loanTransferStatusJson[detailTransfer.transfer_status]"></div>
            </el-form-item>
            <el-form-item 
              label="借款状态">
              <div 
                class="sub-text"
                v-text="loanPayStatusJson[detailTransfer.loan_status]"></div>
            </el-form-item>
          </div>
          <div class="form-line last-form-line">
            <el-form-item label="指令到达时间">
              <div 
                class="sub-text" 
                v-text="detailTransfer.create_time"></div>
            </el-form-item>
            <el-form-item label="指令更新时间">
              <div 
                class="sub-text" 
                v-text="detailTransfer.update_time"></div>
            </el-form-item>
          </div>

          <el-card 
            v-if="detailTransfer.cashDetail && detailTransfer.cashDetail.length" 
            class="box-card box-card-inside">
            <div slot="header">
              <span>借款现金流表</span>
            </div>
            <div>
              <el-table :data="detailTransfer.cashDetail">
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
                <el-table-column label="金额">
                  <template slot-scope="scope">
                    {{ [scope.row.amount, detailTransfer.currency] | filterCent2YuanCurrencyAmount }}
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
            v-if="!uuid"
            class="form-footer" 
            label-width="0">
            <tp-historyback 
              name="loanTransferList"
              type="primary" 
              size="medium" 
              style="width: 100px;"></tp-historyback>
          </el-form-item>

          <el-card class="box-card">
            <div slot="header">
              <span>操作日志</span>
            </div>
            <div>
              <el-table 
                v-if="detailTransfer.node_list" 
                :data="detailTransfer.node_list">
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
import { getLoanTransferDetail } from '@/api/loan';

export default {
  props: {
    uuid: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      loading: false,
      detailTransfer: {
        uuid: '',
        system_flag: '',
        order_num: '',
        out_order_num: '',
        request_id: '',
        loan_main_body: '',
        loan_bank_name: '',
        loan_bank_account: '',
        collect_main_body: '',
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
        contact_annex: '',
        order_status: '',
        loan_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        bank_water: '',
        bank_img_file_uuid: '',
        cashDetail: [],
        node_list: []
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
    const transfer_uuid = this.uuid || this.$route.params.uuid;
    if (!transfer_uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'loanTransferList'
      });
    } else {
      this.detailTransfer.uuid = transfer_uuid;
      this.loading = true;
      getLoanTransferDetail({
        uuid: transfer_uuid
      })
        .then(res => {
          Object.assign(this.detailTransfer, res.data);

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
      // OA系统指令获取请求ID
      if (
        this.detailTransfer.out_order_num &&
        this.detailTransfer.system_flag == 'oa'
      ) {
        this.detailTransfer.request_id = this.detailTransfer.out_order_num.split(
          '_'
        )[0];
      }
      this.detailTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.detailTransfer.amount,
        this.detailTransfer.currency
      ]);

      this.detailTransfer.currencyStr = this.mformatCurrencyStr(
        this.detailTransfer.currency
      );

      this.detailTransfer.rateStr = this.filterPercentage(
        this.detailTransfer.rate
      );

      if (this.detailTransfer.node_list) {
        this.detailTransfer.node_list = this.detailTransfer.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.detailTransfer.node_list = [];
      }
      if (this.detailTransfer.require_pay_datetime == '0000-00-00') {
        this.detailTransfer.require_pay_datetime = '';
      }
      if (this.detailTransfer.contact_annex) {
        try {
          this.detailTransfer.contact_annex = JSON.parse(
            this.detailTransfer.contact_annex
          );
          for (let i = 0; i < this.detailTransfer.contact_annex.length; i++) {
            this.fileList.push({
              name: this.detailTransfer.contact_annex[i].name,
              url: this.detailTransfer.contact_annex[i].url
            });
          }
        } catch (e) {}
      }

      if (this.detailTransfer.bank_img_file_uuid) {
        let imgList = this.detailTransfer.bank_img_file_uuid.split(',');
        for (let i = 0; i < imgList.length; i++) {
          this.receiptFileList.push({
            name: '回单' + i,
            uuid: imgList[i],
            url: '/api/download?uuid=' + imgList[i]
          });
        }
      }

      if (this.detailTransfer.cashDetail.length) {
        this.sortCashFlowList();
      }
    },

    // 借款现金流表排序
    sortCashFlowList() {
      this.detailTransfer.cashDetail.sort((cashFlow1, cashFlow2) => {
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

    // 预览下载文件
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
