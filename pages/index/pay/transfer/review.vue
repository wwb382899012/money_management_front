<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>付款调拨审核</span>
        </div>
        <el-form 
          ref="reviewTransfer" 
          :model="reviewTransfer" 
          :rules="rules" 
          label-width="140px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half"
            label="系统来源" 
            prop="system_flag">
            <el-input 
              v-model="reviewTransfer.system_flag" 
              disabled></el-input>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="资金交易编号" 
              prop="transfer_num">
              <el-input 
                v-model="reviewTransfer.transfer_num" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="付款类别" 
              prop="transfer_pay_type">
              <el-input 
                v-model="reviewTransfer.transfer_pay_type" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方" 
              prop="pay_main_body">
              <el-input 
                v-model="reviewTransfer.pay_main_body" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款方" 
              prop="collect_main_body">
              <el-input 
                v-model="reviewTransfer.collect_main_body" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方银行名称" 
              prop="pay_account_uuid">
              <el-select 
                v-model="reviewTransfer.pay_account_uuid" 
                filterable
                placeholder="请选择付款方银行名称" 
                @visible-change="payBankAccountSelectToggle"
                @change="payBankAccountSelectChange">
                <el-option 
                  v-for="item in payBankAccountList" 
                  :key="item.uuid" 
                  :label="item.bank_name" 
                  :value="item.uuid">
                </el-option>
                <el-option 
                  v-loading="payBankAccountLoading" 
                  v-if="payBankAccountLoading" 
                  key="payBankAccountLoading" 
                  disabled
                  element-loading-spinner="el-icon-loading" 
                  label="" 
                  value="loading"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item 
              v-if="isCollectMainBodyInternal" 
              label="收款方银行名称" 
              prop="collect_account_uuid">
              <el-select 
                v-model="reviewTransfer.collect_account_uuid"
                filterable
                placeholder="请选择收款方银行名称" 
                @visible-change="collectBankAccountSelectToggle"
                @change="collectBankAccountSelectChange">
                <el-option 
                  v-for="item in collectBankAccountList" 
                  :key="item.uuid" 
                  :label="item.bank_name" 
                  :value="item.uuid">
                </el-option>
                <el-option 
                  v-loading="collectBankAccountLoading" 
                  v-if="collectBankAccountLoading" 
                  key="collectBankAccountLoading" 
                  disabled
                  element-loading-spinner="el-icon-loading" 
                  label="" 
                  value="loading"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item 
              v-else 
              label="收款方银行名称" 
              prop="collect_bank_name">
              <el-input 
                v-model="reviewTransfer.collect_bank_name" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款方银行账号" 
              prop="pay_bank_account">
              <el-input 
                v-model="reviewTransfer.pay_bank_account" 
                placeholder="请选择收款方银行名称获取" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款方银行账号" 
              prop="collect_bank_account">
              <el-input 
                v-model="reviewTransfer.collect_bank_account" 
                placeholder="请选择收款方银行名称获取" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              class="el-form-item-width-half" 
              label="实付类型" 
              prop="real_pay_type">
              <el-select 
                :disabled="isBankSetRealPayType" 
                v-model="reviewTransfer.real_pay_type"
                filterable>
                <el-option 
                  label="银企" 
                  value="2"></el-option>
                <el-option 
                  label="网银" 
                  value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label="银企付款备注"
              v-if="reviewTransfer.real_pay_type == 2"
              prop="pay_remark">
              <el-input v-model="reviewTransfer.pay_remark" placeholder="请输入内容" maxlength="50"></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <el-input 
                v-if="reviewTransfer.currency"
                v-model="reviewTransfer.currencyStr" 
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
                v-if="reviewTransfer.collect_bank_link_code"
                v-model="reviewTransfer.collect_bank_link_code" 
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
                v-if="reviewTransfer.amount"
                v-model="reviewTransfer.formatAmount" 
                disabled></el-input>
              <el-input 
                v-else 
                value="无" 
                disabled></el-input>
            </el-form-item>
            <el-form-item
              label="收款行省市"
            >
              <el-input 
                v-model="reviewTransfer.collect_city_name" 
                disabled></el-input>
            </el-form-item>
          </div>
          <el-form-item 
            label="业务背景" 
            prop="bs_background">
            <el-input 
              v-if="reviewTransfer.bs_background" 
              v-model="reviewTransfer.bs_background" 
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
                v-model="reviewTransfer.order_create_people" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="要求付款日" 
              prop="require_pay_datetime">
              <el-date-picker 
                v-model="reviewTransfer.require_pay_datetime" 
                :value-format="datedateFormat" 
                :picker-options="pickerOptions"
                type="date" 
                placeholder="请选择要求付款日">
              </el-date-picker>
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
              label="指令状态">
              <el-input 
                v-model="payTransferStatusJson[reviewTransfer.transfer_status]" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="付款状态">
              <el-input 
                v-model="payStatusJson[reviewTransfer.pay_status]" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div 
            class="form-line">
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
          <el-form-item 
            label="处理意见" 
            prop="review_comments">
            <el-input 
              v-model="reviewTransfer.review_comments" 
              type="textarea" 
              placeholder="请输入处理意见"></el-input>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="reviewTransfer.transfer_status == '0'"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="startTransferFlow('reviewTransfer')">通过</el-button>
            <el-button 
              v-if="reviewTransfer.transfer_status == '0'"
              :disabled="loading" 
              size="medium" 
              type="warning" 
              @click="rejectOrder('reviewTransfer')">驳回</el-button>
            <tp-historyback
              name="payTransferList"
              size="medium"
            ></tp-historyback>
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
import {
  getPayTransferDetail,
  payOrderFlowReject,
  payTransferFlowStart
} from '@/api/pay';
import { getEffectAccountList } from '@/api/account';
import { getMainBodyList } from '@/api/mainBody';

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
    const checkPayAccount = (rule, value, callback) => {
      if (
        value &&
        (this.reviewTransfer.collect_account_uuid ||
          this.reviewTransfer.collect_bank_account) &&
        (value == this.reviewTransfer.collect_account_uuid ||
          this.reviewTransfer.pay_bank_account ==
            this.reviewTransfer.collect_bank_account)
      ) {
        return callback(new Error('付款银行账号和收款银行账号不能相同'));
      }

      return callback();
    };
    const checkCollectAccount = (rule, value, callback) => {
      if (
        value &&
        this.reviewTransfer.pay_account_uuid &&
        value == this.reviewTransfer.pay_account_uuid
      ) {
        return callback(new Error('收款银行账号和付款银行账号不能相同'));
      }

      return callback();
    };
    return {
      isBankSetRealPayType: false,
      loading: false,
      reviewTransfer: {
        uuid: '',
        system_flag: '',
        transfer_num: '',
        transfer_pay_type: '',
        pay_main_body: '',
        pay_account_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_main_body: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        collect_city: '',
        collect_city_name: '',
        collect_bank_link_code: '',
        real_pay_type: '',
        pay_remark: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        bs_background: '',
        order_create_people: '',
        require_pay_datetime: '',
        contact_annex: '',
        transfer_status: '',
        pay_status: '',
        create_time: '',
        update_time: '',
        review_comments: '',
        node_list: []
      },
      rules: {
        require_pay_datetime: [
          {
            required: true,
            message: '请选择要求付款日期',
            trigger: 'change'
          }
        ],
        pay_account_uuid: [
          {
            required: true,
            message: '请选择付款银行',
            trigger: 'change'
          },
          {
            validator: checkPayAccount,
            trigger: 'change'
          }
        ],
        collect_account_uuid: [
          {
            required: true,
            message: '请选择收款银行',
            trigger: 'change'
          },
          {
            validator: checkCollectAccount,
            trigger: 'change'
          }
        ],
        real_pay_type: [
          {
            required: true,
            message: '请选择实付类型',
            trigger: 'change'
          }
        ],
        review_comments: [
          {
            validator: checkComments,
            trigger: 'blur'
          }
        ],
        pay_remark: [
          {
            required: true,
            message: '请输入银企付款备注',
            trigger: 'blur'
          }
        ]
      },
      payTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        19: '待上传回单',
        20: '已完结'
      },
      fileList: [],
      payBankAccountList: [],
      payBankAccountLoading: false,
      isCollectMainBodyInternal: false,
      collectBankAccountList: [],
      collectBankAccountLoading: false,
      pickerOptions: {
        disabledDate: time => {
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
        }
      }
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'payTransferList'
      });
    } else {
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getPayTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.reviewTransfer, res.data);

          this.formatDetailData();
          this.getPayBankAccountListData();

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

      if (this.reviewTransfer.real_pay_type == '0') {
        this.reviewTransfer.real_pay_type = '';
      } else {
        this.reviewTransfer.real_pay_type =
          '' + this.reviewTransfer.real_pay_type;
      }

      // 判断收款方是否为内部主体
      if (this.reviewTransfer.collect_main_body_uuid) {
        getMainBodyList({
          page: 1,
          limit: -1,
          uuid: this.reviewTransfer.collect_main_body_uuid
        })
          .then(res => {
            if (res.data && res.data.data.length) {
              const mainBody = res.data.data[0];
              this.isCollectMainBodyInternal = mainBody.is_internal == 1;
              if (this.isCollectMainBodyInternal) {
                this.getCollectBankAccountListData();
              }
            } else {
              this.isCollectMainBodyInternal = false;
            }
          })
          .catch(() => {});
      } else {
        this.isCollectMainBodyInternal = false;
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
    },

    // 付款银行
    getPayBankAccountListData() {
      if (!this.reviewTransfer.pay_main_body_uuid) {
        return this.$message.error('付款主体缺失，指令信息不足！');
      }

      if (this.payBankAccountLoading) {
        return false;
      }
      this.payBankAccountLoading = true;
      getEffectAccountList({
        page: 1,
        limit: -1,
        main_body_uuid: this.reviewTransfer.pay_main_body_uuid
      })
        .then(res => {
          this.payBankAccountList = res.data.data;

          if (
            this.reviewTransfer.pay_account_uuid &&
            this.reviewTransfer.pay_bank_account
          ) {
            this.payBankAccountSelectChange(
              this.reviewTransfer.pay_account_uuid
            );
          }

          this.payBankAccountLoading = false;
        })
        .catch(() => {
          this.payBankAccountLoading = false;
        });
    },
    payBankAccountSelectToggle(show) {
      if (
        show &&
        !this.payBankAccountLoading &&
        !this.payBankAccountList.length
      ) {
        this.getPayBankAccountListData();
      }
    },
    payBankAccountSelectChange(bankUuid) {
      let hasAccount = false;
      for (let i = 0; i < this.payBankAccountList.length; i++) {
        if (bankUuid == this.payBankAccountList[i].uuid) {
          hasAccount = true;
          this.reviewTransfer.pay_bank_account = this.payBankAccountList[
            i
          ].bank_account;

          if (this.payBankAccountList[i].real_pay_type != '0') {
            this.isBankSetRealPayType = true;
            this.reviewTransfer.real_pay_type =
              '' + this.payBankAccountList[i].real_pay_type;
          } else {
            this.isBankSetRealPayType = false;
          }
          break;
        }
      }

      if (hasAccount) {
        if (
          this.reviewTransfer.collect_main_body_uuid &&
          this.reviewTransfer.collect_account_uuid &&
          this.$refs['reviewTransfer']
        ) {
          this.$refs['reviewTransfer'].validateField('collect_account_uuid');
        }
      } else {
        this.reviewTransfer.pay_account_uuid = '';
        this.reviewTransfer.pay_bank_name = '';
        this.reviewTransfer.pay_bank_account = '';
        this.reviewTransfer.real_pay_type = '';
        this.isBankSetRealPayType = false;
      }
    },

    // 内部主体收款银行
    getCollectBankAccountListData() {
      if (this.collectBankAccountLoading) {
        return false;
      }

      this.collectBankAccountLoading = true;
      getEffectAccountList({
        page: 1,
        limit: -1,
        main_body_uuid: this.reviewTransfer.collect_main_body_uuid
      })
        .then(res => {
          this.collectBankAccountList = res.data.data;
          this.collectBankAccountLoading = false;
        })
        .catch(() => {
          this.collectBankAccountLoading = false;
        });
    },
    collectBankAccountSelectToggle(show) {
      if (
        show &&
        !this.collectBankAccountLoading &&
        !this.collectBankAccountList.length
      ) {
        this.getCollectBankAccountListData();
      }
    },
    collectBankAccountSelectChange(bankUuid) {
      let hasAccount = false;
      for (let i = 0; i < this.collectBankAccountList.length; i++) {
        if (bankUuid == this.collectBankAccountList[i].uuid) {
          hasAccount = true;
          this.reviewTransfer.collect_bank_account = this.collectBankAccountList[
            i
          ].bank_account;
          this.reviewTransfer.collect_city = this.collectBankAccountList[
            i
          ].city;
          this.reviewTransfer.collect_city_name =
            this.collectBankAccountList[i].province +
            this.collectBankAccountList[i].city_name;
          this.reviewTransfer.collect_bank_link_code = this.collectBankAccountList[
            i
          ].bank_link_code;
          break;
        }
      }

      if (hasAccount) {
        if (this.$refs['reviewTransfer']) {
          this.$refs['reviewTransfer'].validateField('collect_account_uuid');
          this.reviewTransfer.pay_account_uuid &&
            this.$refs['reviewTransfer'].validateField('pay_account_uuid');
        }
      } else {
        this.reviewTransfer.collect_account_uuid = '';
        this.reviewTransfer.collect_bank_name = '';
        this.reviewTransfer.collect_bank_account = '';
        this.reviewTransfer.collect_city = '';
        this.reviewTransfer.collect_city_name = '';
        this.reviewTransfer.collect_bank_link_code = '';
      }
    },

    // 发起调拨
    startTransferFlow(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要发起付款调拨吗?')
            .then(() => {
              this.mshowLoading('正在发起付款调拨...');

              // 获取发起付款调拨参数
              const params = {
                real_pay_type: this.reviewTransfer.real_pay_type,
                pay_remark: this.reviewTransfer.pay_remark,
                pay_account_uuid: this.reviewTransfer.pay_account_uuid,
                require_pay_datetime: this.reviewTransfer.require_pay_datetime
              };

              if (
                this.isCollectMainBodyInternal &&
                this.reviewTransfer.collect_account_uuid
              ) {
                params.collect_account_uuid = this.reviewTransfer.collect_account_uuid;
              }

              payTransferFlowStart({
                instance_id: this.reviewTransfer.uuid,
                main_body_uuid: this.reviewTransfer.pay_main_body_uuid,
                info: this.reviewTransfer.review_comments,
                params
              })
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('发起付款调拨成功');
                  this.$router.replace({
                    name: 'payTransferList'
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
    // 驳回指令
    rejectOrder(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (
        this.reviewTransfer.review_comments &&
        this.reviewTransfer.review_comments.length <= 100
      ) {
        this.isReject = false;

        this.mconfirm('确定要驳回付款调拨吗?')
          .then(() => {
            this.mshowLoading('正在驳回付款调拨...');

            payOrderFlowReject({
              instance_id: this.reviewTransfer.pay_order_uuid,
              info: this.reviewTransfer.review_comments,
              params: {}
            })
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('付款调拨驳回成功');
                this.$router.replace({
                  name: 'payTransferList'
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
