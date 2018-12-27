<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-tabs 
        v-model="activeName" 
        type="card">
        <el-tab-pane 
          label="还款调拨上传回单" 
          name="first">
          <el-card>
            <div 
              slot="header" 
              class="clearfix">
              <span>还款调拨上传回单</span>
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
                      width="100px">
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
                    <el-table-column label="选项">
                      <template slot-scope="scope">
                        <el-checkbox 
                          :value="scope.row.checked"
                          disabled></el-checkbox>
                      </template>
                    </el-table-column>
                    <el-table-column 
                      prop="repay_date" 
                      label="要求还款日">
                    </el-table-column>
                    <el-table-column 
                      prop="real_repay_date" 
                      label="还款日期">
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
                  <el-input 
                    v-model="reviewTransfer.repay_bank_name" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款方银行名称" 
                  prop="collect_account_uuid">
                  <el-input 
                    v-model="reviewTransfer.collect_bank_name" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方银行账号" 
                  prop="repay_bank_account">
                  <el-input 
                    v-model="reviewTransfer.repay_bank_account" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款方银行账号" 
                  prop="collect_bank_account">
                  <el-input 
                    v-model="reviewTransfer.collect_bank_account" 
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
                  v-if="reviewTransfer.repay_transfer_status == '20' && reviewTransfer.need_repay_ticket_back == 1"
                  :disabled="loading" 
                  size="medium" 
                  type="success" 
                  @click="resolveTransfer('reviewTransfer')">提交</el-button>
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
import { getRepayTransferDetail, repayUploadWater } from '@/api/repay';

import TransferDetail from '../../loan/transfer/detail.vue';

export default {
  components: {
    TransferDetail
  },
  data() {
    return {
      loading: false,
      reviewTransfer: {
        id: '',
        uuid: '',
        index: '',
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

        loan_transfer_uuid: '',
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
      activeName: 'first',
      repay_index: '',
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
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
      }

      this.sortCashFlowList();
    },

    // 还款现金流表排序并勾选
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

      for (let i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
        if (
          this.reviewTransfer.cashDetail[i].cash_flow_type == 2 &&
          this.reviewTransfer.index == this.reviewTransfer.cashDetail[i].index
        ) {
          this.reviewTransfer.cashDetail[i].checked = true;
          this.reviewTransfer.cashDetail[i + 1].checked = true;

          this.reviewTransfer.repay_amount =
            Number(this.reviewTransfer.cashDetail[i].real_amount) +
            Number(this.reviewTransfer.cashDetail[i + 1].real_amount);
          this.reviewTransfer.repay_amount_str = this.filterCent2YuanNoThousandCurrencyAmount(
            this.reviewTransfer.repay_amount
          );
          break;
        }
      }
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

              repayUploadWater({
                uuid: this.reviewTransfer.id,
                bank_water: this.reviewTransfer.bank_water,
                bank_img_file_uuid: this.reviewTransfer.bank_img_file_uuid
              })
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('提交银行流水回单成功');
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
