<template>
  <div class="app-page-body">
    <tp-breadcrumb v-if="!uuid"></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>借款指令详情</span>
        </div>
        <el-form 
          ref="detailOrder" 
          :model="detailOrder" 
          label-width="120px" 
          label-position="left" 
          size="small">
          <el-form-item 
            label="系统来源" 
            prop="system_flag">
            <div 
              class="sub-text" 
              v-text="detailOrder.system_flag"></div>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="借款编号" 
              prop="order_num">
              <div 
                class="sub-text" 
                v-text="detailOrder.order_num"></div>
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
              label="借款方" 
              prop="loan_main_body">
              <div 
                class="sub-text" 
                v-text="detailOrder.loan_main_body"></div>
            </el-form-item>
            <el-form-item 
              label="贷款方" 
              prop="collect_main_body">
              <div 
                class="sub-text" 
                v-text="detailOrder.collect_main_body"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款方银行名称" 
              prop="loan_bank_name">
              <div 
                class="sub-text" 
                v-text="detailOrder.loan_bank_name ? detailOrder.loan_bank_name : '无'"></div>
            </el-form-item>
            <el-form-item 
              label="贷款方银行名称" 
              prop="collect_bank_name">
              <div 
                class="sub-text" 
                v-text="detailOrder.collect_bank_name ? detailOrder.collect_bank_name : '无'"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款方银行账号" 
              prop="loan_bank_account">
              <div 
                class="sub-text">
                {{ detailOrder.loan_bank_account ? filterBankAccount(detailOrder.loan_bank_account) : '无' }}
              </div>
            </el-form-item>
            <el-form-item 
              label="贷款方银行账号" 
              prop="collect_bank_account">
              <div 
                class="sub-text">
                {{ detailOrder.collect_bank_account ? filterBankAccount(detailOrder.collect_bank_account) : '无' }}
              </div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款币种" 
              prop="currency">
              <div 
                class="sub-text" 
                v-text="detailOrder.currencyStr"></div>
            </el-form-item>
            <el-form-item 
              label="借款金额" 
              prop="amount">
              <div 
                class="sub-text" 
                v-text="detailOrder.formatAmount"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="借款日期" 
              prop="loan_datetime">
              <div 
                class="sub-text" 
                v-text="detailOrder.loan_datetime"></div>
            </el-form-item>
            <el-form-item 
              label="预计还款日" 
              prop="forecast_datetime">
              <div 
                class="sub-text" 
                v-text="detailOrder.forecast_datetime"></div>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="指令发起人" 
              prop="order_create_people">
              <div 
                class="sub-text" 
                v-text="detailOrder.order_create_people"></div>
            </el-form-item>
            <el-form-item 
              label="利息率" 
              prop="rate">
              <div 
                class="sub-text" 
                v-text="detailOrder.rateStr">
              </div>
            </el-form-item>
          </div>
          <el-form-item 
            label="业务背景" 
            prop="bs_background">
            <div 
              class="sub-text" 
              v-text="detailOrder.bs_background ? detailOrder.bs_background : '无'"></div>
          </el-form-item>
          <el-form-item 
            label="其他说明">
            <div 
              class="sub-text" 
              v-text="detailOrder.plus_require ? detailOrder.plus_require : '无'"></div>
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
          <div class="form-line">
            <el-form-item 
              label="指令状态" 
              prop="order_status">
              <div 
                class="sub-text" 
                v-text="orderStatusJson[detailOrder.order_status]"></div>
            </el-form-item>
            <el-form-item 
              label="借款状态" 
              prop="loan_status">
              <div 
                class="sub-text" 
                v-text="loanPayStatusJson[detailOrder.loan_status]"></div>
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
              name="loanOrderList"
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
    </div>
  </div>

</template>
<script>
import { getLoanOrderDetail } from '@/api/loan';

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
      detailOrder: {
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
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        loan_datetime: '',
        forecast_datetime: '',
        order_create_people: '',
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
        node_list: []
      },
      fileList: []
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
      getLoanOrderDetail({
        uuid: order_uuid
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

      // 金额格式化
      this.detailOrder.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.detailOrder.amount,
        this.detailOrder.currency
      ]);

      // 币种格式化
      this.detailOrder.currencyStr = this.mformatCurrencyStr(
        this.detailOrder.currency
      );

      // 利息率格式化
      this.detailOrder.rateStr = this.filterPercentage(this.detailOrder.rate);

      // 操作日志格式化，去除当前节点
      if (this.detailOrder.node_list) {
        this.detailOrder.node_list = this.detailOrder.node_list.filter(function(
          item
        ) {
          return item.node_status != '1';
        });
      } else {
        this.detailOrder.node_list = [];
      }

      // 合同附件格式化
      if (this.detailOrder.contact_annex) {
        try {
          this.detailOrder.contact_annex = JSON.parse(
            this.detailOrder.contact_annex
          );
          for (let i = 0; i < this.detailOrder.contact_annex.length; i++) {
            this.fileList.push({
              name: this.detailOrder.contact_annex[i].name,
              url: this.detailOrder.contact_annex[i].url
            });
          }
        } catch (e) {}
      }
    }
  }
};
</script>
