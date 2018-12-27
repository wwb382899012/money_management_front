<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>付款指令审核</span>
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
              label="指令编号" 
              prop="order_num">
              <el-input 
                v-model="reviewOrder.order_num" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="系统来源" 
              prop="system_flag">
              <el-input 
                v-model="reviewOrder.system_flag" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="外部系统编号" 
              prop="out_order_num">
              <el-input 
                v-model="reviewOrder.out_order_num" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="付款类别" 
              prop="order_pay_type">
              <el-input 
                v-model="reviewOrder.order_pay_type" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方" 
              prop="pay_main_body">
              <el-input 
                v-model="reviewOrder.pay_main_body" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款方" 
              prop="collect_main_body">
              <el-input 
                v-model="reviewOrder.collect_main_body" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方银行名称" 
              prop="pay_bank_name">
              <el-input 
                v-if="reviewOrder.pay_bank_name"
                v-model="reviewOrder.pay_bank_name" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款方银行名称" 
              prop="collect_bank_name">
              <el-input 
                v-if="reviewOrder.collect_bank_name"
                v-model="reviewOrder.collect_bank_name" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方银行账号" 
              prop="pay_bank_account">
              <el-input 
                v-if="reviewOrder.pay_bank_account"
                v-model="reviewOrder.pay_bank_account_str" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款方银行账号" 
              prop="collect_bank_account">
              <el-input 
                v-if="reviewOrder.collect_bank_account"
                v-model="reviewOrder.collect_bank_account_str" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <el-input 
                v-if="reviewOrder.currency"
                v-model="reviewOrder.currencyStr" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
            <el-form-item
              label="收款行行号"
            >
              <el-input 
                v-if="reviewOrder.collect_bank_link_code"
                v-model="reviewOrder.collect_bank_link_code" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款金额" 
              prop="amount">
              <el-input 
                v-if="reviewOrder.amount"
                v-model="reviewOrder.formatAmount" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
            <el-form-item
              label="收款行省市"
              prop="collect_city_name">
              <el-input 
                v-model="reviewOrder.collect_city_name" 
                disabled></el-input>
            </el-form-item>
          </div>
          <el-form-item 
            label="业务背景" 
            prop="bs_background">
            <el-input 
              v-if="reviewOrder.bs_background" 
              v-model="reviewOrder.bs_background" 
              disabled></el-input>
            <el-input 
              v-else 
              value="无" 
              disabled></el-input>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="指令发起人" 
              prop="order_create_people">
              <el-input 
                v-model="reviewOrder.order_create_people" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="要求付款日" 
              prop="require_pay_datetime">
              <el-input 
                v-if="reviewOrder.require_pay_datetime"
                v-model="reviewOrder.require_pay_datetime" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
          </div>
          <el-form-item 
            label="附件" 
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
              <el-input 
                v-model="orderStatusJson[reviewOrder.order_status]" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="付款状态" 
              prop="pay_status">
              <el-input 
                v-model="payStatusJson[reviewOrder.pay_status]" 
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
            label-width="0">
            <el-button 
              v-if="reviewOrder.order_status == '0'"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="resolveOrder('reviewOrder')">通过</el-button>
            <el-button 
              v-if="reviewOrder.order_status == '0'"
              :disabled="loading" 
              size="medium" 
              type="danger" 
              @click="rejectOrder('reviewOrder')">驳回</el-button>
            <tp-historyback 
              name="payOrderList"
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
    </div>
  </div>
</template>
<script>
import {
  getPayOrderDetail,
  payOrderFlowResolve,
  payOrderFlowReject
} from '@/api/pay';

export default {
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
      loading: false,
      reviewOrder: {
        uuid: '',
        out_order_num: '',
        system_flag: '',
        order_pay_type: '',
        pay_main_body: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        collect_city: '',
        collect_city_name: '',
        collect_bank_link_code: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        is_financing: '',
        financing_dict_key: '',
        financing_dict_value: '',
        bs_background: '',
        order_create_people: '',
        require_pay_datetime: '',
        special_require: '',
        contact_annex: '',
        order_status: '',
        pay_status: '',
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
      payBankAccountList: [],
      payBankAccountLoading: false
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'payOrderList'
      });
    } else {
      this.reviewOrder.uuid = this.$route.params.uuid;
      this.loading = true;
      getPayOrderDetail({
        uuid: this.$route.params.uuid
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
      // 银行账号格式化
      this.reviewOrder.pay_bank_account_str = this.filterBankAccount(
        this.reviewOrder.pay_bank_account
      );
      this.reviewOrder.collect_bank_account_str = this.filterBankAccount(
        this.reviewOrder.collect_bank_account
      );

      // 币种格式化
      this.reviewOrder.currencyStr = this.mformatCurrencyStr(
        this.reviewOrder.currency
      );

      // 金额格式化
      this.reviewOrder.formatAmount = this.filterCent2YuanCurrencyAmount([
        this.reviewOrder.amount,
        this.reviewOrder.currency
      ]);

      // 操作日志去除当前审核节点
      if (this.reviewOrder.node_list) {
        this.reviewOrder.node_list = this.reviewOrder.node_list.filter(function(
          item
        ) {
          return item.node_status != '1';
        });
      } else {
        this.reviewOrder.node_list = [];
      }

      // 去除错误要求付款日
      if (this.reviewOrder.require_pay_datetime == '0000-00-00') {
        this.reviewOrder.require_pay_datetime = '';
      }

      // 格式化附件参数
      if (this.reviewOrder.contact_annex) {
        try {
          this.reviewOrder.contact_annex = JSON.parse(
            this.reviewOrder.contact_annex
          );
          for (let i = 0; i < this.reviewOrder.contact_annex.length; i++) {
            this.fileList.push({
              name: this.reviewOrder.contact_annex[i].name,
              url: this.reviewOrder.contact_annex[i].url
            });
          }
        } catch (e) {}
      }
    },

    // 付款指令通过
    resolveOrder(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要通过付款审核吗?')
            .then(() => {
              this.mshowLoading('正在提交付款审核...');

              payOrderFlowResolve({
                instance_id: this.reviewOrder.uuid,
                info: this.reviewOrder.review_comments,
                params: {}
              })
                .then(res => {
                  this.loading = false;
                  this.mhideLoading();
                  // 参数判断，防止审核成功后返回参数错误无法跳转
                  if (
                    res.data &&
                    res.data.data &&
                    res.data.data.transfer_uuid
                  ) {
                    this.malert('付款审核成功，请继续发起付款调拨', () => {
                      this.$router.replace({
                        name: 'payTransferReview',
                        params: {
                          uuid: res.data.data.transfer_uuid
                        }
                      });
                    });
                  } else {
                    this.malert(
                      '付款审核成功，请从调拨列表进入继续发起付款调拨',
                      () => {
                        this.$router.replace({
                          name: 'payTransferList'
                        });
                      }
                    );
                  }
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

    // 付款指令驳回
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

        this.mconfirm('确定要驳回付款吗?')
          .then(() => {
            this.mshowLoading('正在驳回付款...');

            payOrderFlowReject({
              instance_id: this.reviewOrder.uuid,
              info: this.reviewOrder.review_comments,
              params: {}
            })
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('付款驳回成功');
                this.$router.replace({
                  name: 'payOrderList'
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
    },

    // 上传文件
    handleFileUploadSuccess(res, file, fileList) {
      this.fileList = fileList;
      if (res.code == '0' && res.data && res.data.uuid) {
        this.fileList[this.fileList.length - 1].uuid = res.data.uuid;
        this.fileList[this.fileList.length - 1].url =
          '/api/download?uuid=' + res.data.uuid;
      } else {
        this.fileList.splice(-1, 1);
        this.$message.error('服务器繁忙，请重试！');
      }
    },
    handleFileUploadError() {
      this.$message.error('服务器繁忙，请重试！');
    }
  }
};
</script>
