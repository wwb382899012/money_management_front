<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-tabs 
        v-model="activeName" 
        type="card">
        <el-tab-pane 
          label="还款调拨详情" 
          name="first">
          <el-card>
            <div 
              slot="header" 
              class="clearfix">
              <span>还款调拨详情</span>
            </div>
            <el-form 
              ref="detailTransfer" 
              :model="detailTransfer" 
              label-width="120px" 
              label-position="left" 
              size="small">
              <div class="form-line">
                <el-form-item 
                  label="还款资金交易编号" 
                  prop="repay_transfer_num">
                  <div 
                    class="sub-text" 
                    v-text="detailTransfer.repay_transfer_num"></div>
                </el-form-item>
                <el-form-item 
                  label="借款编号" 
                  prop="order_num">
                  <div 
                    class="sub-text" 
                    v-text="detailTransfer.order_num"></div>
                </el-form-item>
              </div>
              <div class="form-line last-form-line">
                <el-form-item 
                  label="指令状态" 
                  prop="repay_transfer_status">
                  <div 
                    class="sub-text"
                    v-text="repayTransferStatusJson[detailTransfer.repay_transfer_status]"></div>
                </el-form-item>
                <el-form-item 
                  label="还款状态" 
                  prop="repay_status">
                  <div 
                    class="sub-text"
                    v-text="repayPayStatusJson[detailTransfer.repay_status]"></div>
                </el-form-item>
              </div>

              <el-card 
                v-if="detailTransfer.orderDetail && detailTransfer.orderDetail.length"
                class="box-card box-card-inside">
                <div 
                  slot="header" 
                  class="box-card-header">
                  <span>还款指令</span>
                </div>
                <div class="text item">
                  <el-table :data="detailTransfer.orderDetail">
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
                      width="220px">
                    </el-table-column>
                    <el-table-column 
                      prop="out_order_num" 
                      label="外部指令号"
                      width="100px">
                    </el-table-column>
                    <el-table-column 
                      prop="system_flag" 
                      label="系统来源"
                      width="100">
                    </el-table-column>
                    <el-table-column  
                      label="本金回款"
                      width="150px">
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
                  <el-table 
                    :data="detailTransfer.cashDetail"
                    :row-class-name="setCurrentRow">
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
                        {{ [scope.row.amount, detailTransfer.currency] | filterCent2YuanCurrencyAmount }}
                      </template>
                    </el-table-column>
                    <el-table-column 
                      label="实际金额"
                      width="150px">
                      <template slot-scope="scope">
                        {{ filterCent2YuanCurrencyAmount([scope.row.real_amount, detailTransfer.currency]) }}
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
                  <div 
                    class="sub-text"
                    v-text="detailTransfer.repay_main_body"></div>
                </el-form-item>
                <el-form-item 
                  label="借款方" 
                  prop="collect_main_body">
                  <div 
                    class="sub-text"
                    v-text="detailTransfer.collect_main_body"></div>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方银行名称" 
                  prop="repay_account_uuid">
                  <div 
                    class="sub-text"
                    v-text="detailTransfer.repay_bank_name"></div>
                </el-form-item>
                <el-form-item 
                  label="借款方银行名称" 
                  prop="collect_account_uuid">
                  <div 
                    class="sub-text"
                    v-text="detailTransfer.collect_bank_name"></div>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方银行账号" 
                  prop="repay_bank_account">
                  <div 
                    class="sub-text"
                    v-text="detailTransfer.repay_bank_account_str"></div>
                </el-form-item>
                <el-form-item 
                  label="借款方银行账号" 
                  prop="collect_bank_account">
                  <div 
                    class="sub-text"
                    v-text="detailTransfer.collect_bank_account_str"></div>
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
                    v-text="detailTransfer.pay_remark" 
                    disabled></div>
                </el-form-item>
              <div
                :class="{'last-form-line': !detailTransfer.bank_img_file_uuid}" 
                class="form-line">
                <el-form-item 
                  label="还款币种" 
                  prop="currency">
                  <div 
                    class="sub-text"
                    v-text="detailTransfer.currencyStr"></div>
                </el-form-item>
                <el-form-item 
                  label="还款金额" 
                  prop="repay_amount">
                  <div 
                    class="sub-text"
                    v-text="detailTransfer.repay_amount_str">
                    <template slot="append">元</template>
                  </div>
                </el-form-item>
              </div>
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


              <el-form-item 
                class="form-footer" 
                label-width="0">
                <tp-historyback 
                  name="repayTransferList"
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
        </el-tab-pane>
        <el-tab-pane 
          label="借款调拨详情" 
          name="second">
          <transfer-detail 
            v-if="detailTransfer.loan_transfer_uuid" 
            :uuid="detailTransfer.loan_transfer_uuid"></transfer-detail>
          <span v-else>获取原借款调拨详情失败</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>
<script>
import { getRepayTransferDetail } from '@/api/repay';

import TransferDetail from '../../loan/transfer/detail.vue';

export default {
  components: {
    TransferDetail
  },
  data() {
    return {
      loading: false,
      detailTransfer: {
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
        repay_bank_account_str: '',
        collect_main_body_uuid: '',
        collect_main_body: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        collect_bank_account_str: '',
        real_pay_type: '',
        currency: '',
        currencyStr: '',
        repay_amount: '',
        repay_amount_str: '',

        bank_water: '',
        bank_img_file_uuid: '',

        loan_transfer_uuid: ''
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
      this.detailTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getRepayTransferDetail({
        uuid: this.$route.params.uuid
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
      let orderDetail = [];
      if (this.detailTransfer.orderDetail) {
        for (let i = 0; i < this.detailTransfer.orderDetail.length; i++) {
          if (
            this.detailTransfer.orderDetail[i].repay_order_status != 2 &&
            this.detailTransfer.orderDetail[i].repay_order_status != 4
          ) {
            orderDetail.push(this.detailTransfer.orderDetail[i]);
          }
        }
      }
      this.detailTransfer.orderDetail = orderDetail;

      this.detailTransfer.repay_bank_account_str = this.filterBankAccount(
        this.detailTransfer.repay_bank_account
      );
      this.detailTransfer.collect_bank_account_str = this.filterBankAccount(
        this.detailTransfer.collect_bank_account
      );

      this.detailTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.detailTransfer.amount,
        this.detailTransfer.currency
      ]);

      this.detailTransfer.currencyStr = this.mformatCurrencyStr(
        this.detailTransfer.currency
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

      if (
        this.detailTransfer.real_pay_type == '0' ||
        !this.detailTransfer.real_pay_type
      ) {
        this.detailTransfer.real_pay_type = '';
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

      this.sortCashFlowList();
    },

    // 还款现金流表排序并勾选
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

      for (let i = 0; i < this.detailTransfer.cashDetail.length; i++) {
        if (
          this.detailTransfer.cashDetail[i].index ==
            this.detailTransfer.index &&
          this.detailTransfer.cashDetail[i].cash_flow_type == 2
        ) {
          this.detailTransfer.repay_amount =
            Number(this.detailTransfer.cashDetail[i].real_amount) +
            Number(this.detailTransfer.cashDetail[i + 1].real_amount);
          this.detailTransfer.repay_amount_str = this.filterCent2YuanNoThousandCurrencyAmount(
            this.detailTransfer.repay_amount
          );
          break;
        }
      }
    },

    // 获取当前行
    setCurrentRow({ row }) {
      if (
        this.detailTransfer.index == row.index &&
        (row.cash_flow_type == 2 || row.cash_flow_type == 3)
      ) {
        return 'success-row';
      }

      return '';
    },

    // 预览下载文件
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    // 查看还款指令详情
    triggerCheckRepayOrder(uuid) {
      this.$router.push({
        name: 'repayOrderDetail',
        params: {
          uuid
        }
      });
    }
  }
};
</script>
