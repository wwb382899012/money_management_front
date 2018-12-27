<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-tabs 
        v-model="activeName" 
        type="card">
        <el-tab-pane 
          label="还款指令审核" 
          name="first">
          <el-card>
            <div 
              slot="header" 
              class="clearfix">
              <span>还款指令审核</span>
            </div>
            <el-form 
              ref="reviewOrder" 
              :model="reviewOrder" 
              :rules="rules" 
              label-width="120px" 
              label-position="left" 
              size="small">
              <div class="form-line">
                <el-form-item
                  label="系统来源"
                  prop="system_flag">
                  <el-input 
                    v-model="reviewOrder.system_flag" 
                    disabled></el-input>  
                </el-form-item>
                <el-form-item 
                  label="外部指令号"
                  prop="out_order_num">
                  <el-input
                    v-model="reviewOrder.out_order_num"
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="还款编号" 
                  prop="order_num">
                  <el-input 
                    v-model="reviewOrder.order_num" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款编号" 
                  prop="loan_order_num">
                  <el-input 
                    v-model="reviewOrder.loan_order_num" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="贷款方" 
                  prop="repay_main_body">
                  <el-input 
                    v-model="reviewOrder.repay_main_body" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款方" 
                  prop="collect_main_body">
                  <el-input 
                    v-model="reviewOrder.collect_main_body" 
                    disabled></el-input>
                </el-form-item>
              </div>

              <div class="form-line">
                <el-form-item 
                  label="借款币种" 
                  prop="loan_currency">
                  <el-input 
                    v-model="reviewOrder.loanCurrencyStr" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="借款金额" 
                  prop="loan_amount">
                  <el-input 
                    v-model="reviewOrder.formatLoanAmount" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="还款币种" 
                  prop="currency">
                  <el-input 
                    v-model="reviewOrder.currencyStr"
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="本金回款" 
                  prop="amount">
                  <el-input 
                    v-model="reviewOrder.formatAmount" 
                    disabled></el-input>
                </el-form-item>
              </div>
              <div class="form-line">
                <el-form-item 
                  label="要求还款日" 
                  prop="amount">
                  <el-input 
                    v-model="reviewOrder.require_repay_date" 
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="还款说明" 
                  prop="amount">
                  <el-input 
                    v-if="reviewOrder.repay_desc"
                    v-model="reviewOrder.repay_desc" 
                    disabled></el-input>
                  <span 
                    v-else 
                    class="sub-text">无</span>
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
                  <el-input
                    v-model="reviewOrder.order_create_people"
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="指令状态" 
                  prop="repay_order_status">
                  <el-input 
                    v-model="orderStatusJson[reviewOrder.repay_order_status]"
                    disabled></el-input>
                </el-form-item>
              </div>
              <div 
                class="form-line">
                <el-form-item 
                  label="指令到达时间" 
                  prop="create_time">
                  <el-input 
                    v-model="reviewOrder.create_time"
                    disabled></el-input>
                </el-form-item>
                <el-form-item 
                  label="指令更新时间" 
                  prop="update_time">
                  <el-input 
                    v-model="reviewOrder.update_time"
                    disabled></el-input>
                </el-form-item>
              </div>

              <el-form-item 
                label="审核意见" 
                prop="review_comments">
                <el-input 
                  v-model="reviewOrder.review_comments" 
                  type="textarea" 
                  placeholder="请输入审核意见"></el-input>
              </el-form-item>
              <el-form-item 
                class="form-footer" 
                label-width="0"
                style="margin-bottom: 40px;">
                <el-button 
                  v-if="reviewOrder.repay_order_status == '0'"
                  :disabled="loading" 
                  size="medium" 
                  type="success" 
                  @click="resolveOrder('reviewOrder')">通过</el-button>
                <el-button 
                  v-if="reviewOrder.repay_order_status == '0'"
                  :disabled="loading" 
                  size="medium" 
                  type="danger" 
                  @click="rejectOrder('reviewOrder')">驳回</el-button>
                <tp-historyback 
                  name="repayOrderList"
                  size="medium"></tp-historyback>
              </el-form-item>
       
              <el-card class="box-card">
                <div slot="header">
                  <span>操作日志</span>
                </div>
                <div>
                  <el-table 
                    v-if="reviewOrder.node_list" 
                    :data="reviewOrder.node_list">
                    <el-table-column 
                      label="操作人">
                      <template slot-scope="scope">
                        {{ scope.row.optor_name ? scope.row.optor_name : (scope.$index == 0 && reviewOrder.order_create_people ? reviewOrder.order_create_people : '-') }}
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
            v-if="reviewOrder.loan_transfer_uuid" 
            :uuid="reviewOrder.loan_transfer_uuid"></transfer-detail>
          <span v-else>获取原借款调拨详情失败</span>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>

</template>
<script>
import {
  getRepayOrderDetail,
  repayOrderFlowResolve,
  repayOrderFlowReject
} from '@/api/repay';

import TransferDetail from '../../loan/transfer/detail.vue';

export default {
  components: {
    TransferDetail
  },
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
      collapseActiveNames: [],
      loading: false,
      reviewOrder: {
        uuid: '',
        system_flag: '',
        order_num: '',
        out_order_num: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        repay_main_body: '',
        repay_account_uuid: '',
        repay_bank_name: '',
        repay_bank_account: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        loan_amount: '',
        formatLoanAmount: '',
        loan_currency: '',
        loanCurrencyStr: '',
        loan_datetime: '',
        forecast_date: '',
        order_create_people: '',
        rate: '',
        rateStr: '',
        bs_background: '',
        special_require: '',
        contact_annex: [],
        contact_annex_uuids: '',
        others_annex: [],
        others_annex_uuids: '',
        order_status: '',
        loan_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        review_comments: '',
        node_list: []
      },
      rules: {
        review_comments: [
          {
            validator: checkComments,
            trigger: 'blur'
          }
        ]
      },
      fileList: [],
      activeName: 'first'
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'repayOrderList'
      });
    } else {
      this.reviewOrder.uuid = this.$route.params.uuid;
      this.loading = true;
      getRepayOrderDetail({
        id: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.reviewOrder, res.data);

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
      this.reviewOrder.loan_bank_account_str = this.filterBankAccount(
        this.reviewOrder.loan_bank_account
      );
      this.reviewOrder.repay_bank_account_str = this.filterBankAccount(
        this.reviewOrder.repay_bank_account
      );

      this.reviewOrder.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.reviewOrder.amount,
        this.reviewOrder.currency
      ]);

      this.reviewOrder.formatLoanAmount = this.filterCent2YuanCurrencyAmount([
        this.reviewOrder.loan_amount,
        this.reviewOrder.loan_currency
      ]);

      this.reviewOrder.currencyStr = this.mformatCurrencyStr(
        this.reviewOrder.currency
      );

      this.reviewOrder.loanCurrencyStr = this.mformatCurrencyStr(
        this.reviewOrder.loan_currency
      );

      this.reviewOrder.rateStr = this.filterPercentage(this.reviewOrder.rate)
        .toString()
        .slice(0, -1);

      if (this.reviewOrder.node_list) {
        this.reviewOrder.node_list = this.reviewOrder.node_list.filter(function(
          item
        ) {
          return item.node_status != '1';
        });
      } else {
        this.reviewOrder.node_list = [];
      }

      if (this.reviewOrder.repay_annex) {
        try {
          this.reviewOrder.repay_annex = JSON.parse(
            this.reviewOrder.repay_annex
          );
          for (let i = 0; i < this.reviewOrder.repay_annex.length; i++) {
            this.fileList.push({
              name: this.reviewOrder.repay_annex[i].name,
              url: this.reviewOrder.repay_annex[i].url
            });
          }
        } catch (e) {}
      }
    },

    // 通过审核
    resolveOrder(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要通过还款审核吗?')
            .then(() => {
              this.mshowLoading('正在提交还款审核...');

              const params = {
                instance_id: this.reviewOrder.uuid,
                info: this.reviewOrder.review_comments,
                params: {}
              };

              repayOrderFlowResolve(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();

                  this.malert('还款指令审核成功，请继续修改还款计划', () => {
                    this.$router.replace({
                      name: 'repayCashFlowChange',
                      params: {
                        uuid: this.reviewOrder.repay_id
                      }
                    });
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

    // 驳回审核
    rejectOrder(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewOrder.review_comments &&
        this.reviewOrder.review_comments.length <= 100
      ) {
        this.isReject = false;

        this.mconfirm('确定要驳回还款吗?')
          .then(() => {
            this.mshowLoading('正在驳回还款...');

            const params = {
              instance_id: this.reviewOrder.uuid,
              info: this.reviewOrder.review_comments,
              params: {}
            };

            repayOrderFlowReject(params)
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('还款驳回成功');
                this.$router.replace({
                  name: 'repayOrderList'
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
