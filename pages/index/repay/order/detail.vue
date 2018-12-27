<template>
  <div class="app-page-body">
    <tp-breadcrumb v-if="!uuid"></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-tabs 
        v-model="activeName" 
        type="card">
        <el-tab-pane 
          label="还款指令详情" 
          name="first">
          <el-card>
            <div 
              slot="header" 
              class="clearfix">
              <span>还款指令详情</span>
            </div>
            <el-form 
              ref="detailOrder" 
              :model="detailOrder" 
              label-width="120px" 
              label-position="left" 
              size="small">
              <div class="form-line">
                <el-form-item
                  label="系统来源"
                  prop="system_flag">
                  <div 
                    class="sub-text"
                    v-text="detailOrder.system_flag"></div>  
                </el-form-item>
                <el-form-item 
                  v-if="detailOrder.system_flag != 'oa'"
                  label="外部指令号" 
                  prop="out_order_num">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.out_order_num" 
                  ></div>
                </el-form-item>
                <el-form-item 
                  v-else
                  label="外部指令号" 
                  prop="out_order_num">
                  <div class="sub-text">
                    <a 
                      :href="'http://oa.jyblife.com/workflow/request/ViewRequest.jsp?requestid=' + detailOrder.request_id + '&ismonitor=1'" 
                      target="_blank"
                      style="color: #409EFF">{{ detailOrder.out_order_num }}</a>
                  </div>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="还款编号" 
                  prop="order_num">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.order_num"></div>
                </el-form-item>
                <el-form-item 
                  label="借款编号" 
                  prop="loan_order_num">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.loan_order_num"></div>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方" 
                  prop="repay_main_body">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.repay_main_body"></div>
                </el-form-item>
                <el-form-item 
                  label="借款方" 
                  prop="collect_main_body">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.collect_main_body"></div>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="借款币种" 
                  prop="currency">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.loanCurrencyStr"></div>
                </el-form-item>
                <el-form-item 
                  label="借款金额" 
                  prop="loan_amount">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.formatLoanAmount"></div>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="还款币种" 
                  prop="currency">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.currencyStr"></div>
                </el-form-item>
                <el-form-item 
                  label="本金回款" 
                  prop="amount">
                  <div 
                    class="sub-text" 
                    v-text="detailOrder.formatAmount"></div>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="要求还款日" 
                  prop="amount">
                  <div 
                    class="sub-text"
                    v-text="detailOrder.require_repay_date"></div>
                </el-form-item>
                <el-form-item 
                  label="还款说明" 
                  prop="amount">
                  <div 
                    v-if="detailOrder.repay_desc"
                    class="sub-text"
                    v-text="detailOrder.repay_desc"></div>
                  <div 
                    v-else 
                    class="sub-text">无</div>
                </el-form-item>
              </div>
              <el-form-item 
                label="还款附件" 
                prop="repay_annex">
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
              <div class="form-line">
                <el-form-item 
                  label="指令发起人">
                  <div
                    class="sub-text"
                    v-text="detailOrder.order_create_people"></div>
                </el-form-item>
                <el-form-item 
                  label="指令状态" 
                  prop="repay_order_status">
                  <div 
                    class="sub-text"
                    v-text="orderStatusJson[detailOrder.repay_order_status]"></div>
                </el-form-item>
              </div>
              <div 
                class="form-line last-form-line">
                <el-form-item 
                  label="指令到达时间" 
                  prop="create_time">
                  <div 
                    class="sub-text"
                    v-text="detailOrder.create_time"></div>
                </el-form-item>
                <el-form-item 
                  label="指令更新时间" 
                  prop="update_time">
                  <div 
                    class="sub-text"
                    v-text="detailOrder.update_time"></div>
                </el-form-item>
              </div>

              <el-form-item 
                v-if="!uuid" 
                class="form-footer" 
                label-width="0">
                <tp-historyback 
                  name="repayOrderList"
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
                    v-if="detailOrder.node_list" 
                    :data="detailOrder.node_list">
                    <el-table-column 
                      label="操作人">
                      <template slot-scope="scope">
                        {{ scope.row.optor_name ? scope.row.optor_name : (scope.$index == 0 && detailOrder.order_create_people ? detailOrder.order_create_people : '-') }}
                      </template>
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
            v-if="detailOrder.loan_transfer_uuid" 
            :uuid="detailOrder.loan_transfer_uuid"></transfer-detail>
          <span v-else>获取原借款调拨详情失败</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>
<script>
import { getRepayOrderDetail } from '@/api/repay';

import TransferDetail from '../../loan/transfer/detail.vue';

export default {
  components: {
    TransferDetail
  },
  props: {
    uuid: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      collapseActiveNames: [],
      loading: false,
      detailOrder: {
        uuid: '',
        system_flag: '',
        order_num: '',
        loan_order_num: '',
        out_order_num: '',
        request_id: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        repay_main_body: '',
        repay_bank_name: '',
        repay_bank_account: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        formatLoanAmount: '',
        real_pay_date: '',
        forecast_date: '',
        order_create_people: '',
        rate: '',
        rateStr: '',
        bs_background: '',
        special_require: '',
        repay_annex: '',
        order_status: '',
        repay_order_status: '',
        loan_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        node_list: []
      },
      fileList: [],
      activeName: 'first'
    };
  },
  created() {
    // 获取组件传参或路由传参，组件传参优先
    const order_uuid = this.uuid || this.$route.params.uuid;
    if (!order_uuid) {
      this.$message.error('链接错误，请输入正确链接');
    } else {
      this.detailOrder.uuid = order_uuid;
      this.loading = true;
      getRepayOrderDetail({
        id: order_uuid
      })
        .then(res => {
          Object.assign(this.detailOrder, res.data);

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
        this.detailOrder.out_order_num &&
        this.detailOrder.system_flag == 'oa'
      ) {
        this.detailOrder.request_id = this.detailOrder.out_order_num.split(
          '_'
        )[0];
      }

      this.detailOrder.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.detailOrder.amount,
        this.detailOrder.currency
      ]);

      this.detailOrder.formatLoanAmount = this.filterCent2YuanCurrencyAmount([
        this.detailOrder.loan_amount,
        this.detailOrder.loan_currency
      ]);

      this.detailOrder.currencyStr = this.mformatCurrencyStr(
        this.detailOrder.currency
      );

      this.detailOrder.loanCurrencyStr = this.mformatCurrencyStr(
        this.detailOrder.loan_currency
      );

      this.detailOrder.rateStr = this.filterPercentage(this.detailOrder.rate);

      if (this.detailOrder.node_list) {
        this.detailOrder.node_list = this.detailOrder.node_list.filter(function(
          item
        ) {
          return item.node_status != '1';
        });
      } else {
        this.detailOrder.node_list = [];
      }

      if (this.detailOrder.repay_annex) {
        try {
          this.detailOrder.repay_annex = JSON.parse(
            this.detailOrder.repay_annex
          );
          for (let i = 0; i < this.detailOrder.repay_annex.length; i++) {
            this.fileList.push({
              name: this.detailOrder.repay_annex[i].name,
              url: this.detailOrder.repay_annex[i].url
            });
          }
        } catch (e) {}
      }
    }
  }
};
</script>
