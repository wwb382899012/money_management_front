<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>打款状态确认</span>
        </div>
        <el-form 
          ref="reviewInnerTransfer" 
          :model="reviewInnerTransfer" 
          :rules="rules"
          label-width="140px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half" 
            label="调拨主体" 
            prop="main_body_uuid">
            <el-input 
              v-model="reviewInnerTransfer.main_body_name" 
              disabled></el-input>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="付款银行名称" 
              prop="pay_bank_name">
              <el-input 
                v-model="reviewInnerTransfer.pay_bank_name" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款银行名称" 
              prop="collect_bank_name">
              <el-input 
                v-model="reviewInnerTransfer.collect_bank_name" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款银行账号" 
              prop="pay_bank_account">
              <el-input 
                v-model="reviewInnerTransfer.pay_bank_account_str" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款银行账号" 
              prop="collect_bank_account">
              <el-input 
                v-model="reviewInnerTransfer.collect_bank_account_str" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <el-input 
                v-model="reviewInnerTransfer.currencyStr" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="金额" 
              prop="amount">
              <el-input 
                v-model="reviewInnerTransfer.formatAmount" 
                placeholder="请输入金额" 
                disabled>
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="实付类型" 
              prop="real_pay_type">
              <el-input
                v-model="realPayTypeJson[reviewInnerTransfer.real_pay_type]" 
                disabled>
              </el-input>
            </el-form-item>
            <el-form-item 
              label="要求调拨日期" 
              prop="hope_deal_date">
              <el-input
                v-model="reviewInnerTransfer.hope_deal_date"
                disabled>
              </el-input>
            </el-form-item>
          </div>
          <el-form-item
            v-if="reviewInnerTransfer.real_pay_type == 2"
            label="付款备注"
            prop="pay_remark">
            <el-input 
              v-model="reviewInnerTransfer.pay_remark" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="附件" 
            prop="annex_uuids">
            <el-upload 
              v-if="fileList.length" 
              ref="upload" 
              :file-list="fileList" 
              :auto-upload="false" 
              :on-preview="handleFilePreview" 
              class="no-upload-text"
              action=""></el-upload>
            <div 
              v-else 
              class="sub-text">无</div>
          </el-form-item>
          <div class="form-line">
            <el-form-item label="指令状态">
              <el-input 
                v-model="innerTransferStatusJson[reviewInnerTransfer.transfer_status]" 
                disabled></el-input>
            </el-form-item>
            <el-form-item label="调拨状态">
              <el-input 
                v-model="payStatusJson[reviewInnerTransfer.pay_status]" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item label="指令到达时间">
              <el-input 
                v-model="reviewInnerTransfer.create_time" 
                disabled></el-input>
            </el-form-item>
          </div>
          <el-form-item 
            label="调拨说明" 
            prop="special_require">
            <el-input 
              v-if="reviewInnerTransfer.special_require" 
              v-model="reviewInnerTransfer.special_require" 
              type="textarea" 
              placeholder="请输入其他说明"
              disabled></el-input>
            <el-input 
              v-else 
              value="无" 
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half"
            label="银行流水号" 
            prop="bank_water">
            <el-input 
              v-model="reviewInnerTransfer.bank_water" 
              placeholder="请输入银行流水号"></el-input>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="reviewInnerTransfer.transfer_status == '3' && reviewInnerTransfer.pay_status == '10'"
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="confirmInnerTransferSuccess('reviewInnerTransfer')">确认打款成功</el-button>
            <el-button 
              v-if="reviewInnerTransfer.transfer_status == '3' && reviewInnerTransfer.pay_status == '10'"
              :disabled="loading" 
              size="medium" 
              type="warning" 
              @click="confirmInnerTransferFail">确认打款失败</el-button>
            <tp-historyback 
              name="innerTransferList"
              size="medium"></tp-historyback>
          </el-form-item>

          <el-card class="box-card">
            <div slot="header">
              <span>操作日志</span>
            </div>
            <div>
              <el-table 
                v-if="reviewInnerTransfer.node_list" 
                :data="reviewInnerTransfer.node_list">
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
  getInnerTransferDetail,
  innerTransferConfirmSuccess,
  innerTransferConfirmFail
} from '@/api/innerTransfer';

export default {
  data() {
    const checkBankWater = (rule, value, callback) => {
      if (this.isConfirm) {
        if (value == '') {
          return callback(new Error('请填写银行流水号'));
        }
      }

      if (value && !/^[0-9A-Z-]+$/.test(value)) {
        return callback(new Error('请输入正确的银行流水号'));
      }

      return callback();
    };
    return {
      loading: false,
      reviewInnerTransfer: {
        uuid: '',
        main_body_uuid: '',
        pay_account_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        currency: 'CNY',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        hope_deal_date: '',
        real_pay_type: '',
        annex_uuids: '',
        special_require: '',
        node_list: [],
        review_comments: '',
        bank_water: ''
      },
      rules: {
        bank_water: [
          {
            validator: checkBankWater,
            trigger: 'blur'
          }
        ]
      },
      innerTransferStatusJson: {
        0: '已保存',
        1: '待资金部负责人审核',
        2: '待权签人审核',
        3: '权签人审核通过',
        5: '权签人驳回',
        20: '已完结'
      },
      fileList: [],
      isConfirm: false
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('缺少内部调拨ID，请输入正确的链接');
      this.$router.replace({
        name: 'innerTransferList'
      });
    } else {
      this.reviewInnerTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      getInnerTransferDetail({
        uuid: this.$route.params.uuid
      })
        .then(res => {
          Object.assign(this.reviewInnerTransfer, res.data);

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
      // 格式化银行账号
      this.reviewInnerTransfer.pay_bank_account_str = this.filterBankAccount(
        this.reviewInnerTransfer.pay_bank_account
      );
      this.reviewInnerTransfer.collect_bank_account_str = this.filterBankAccount(
        this.reviewInnerTransfer.collect_bank_account
      );

      // 格式化金钱
      this.reviewInnerTransfer.formatAmount = this.filterCent2YuanNoCurrencyAmount(
        this.reviewInnerTransfer.amount
      );

      // 币种格式化
      this.reviewInnerTransfer.currencyStr = this.mformatCurrencyStr(
        this.reviewInnerTransfer.currency
      );

      // 格式化操作日志，去除当前审核节点
      if (this.reviewInnerTransfer.node_list) {
        this.reviewInnerTransfer.node_list = this.reviewInnerTransfer.node_list.filter(
          function(item) {
            return item.node_status != '1';
          }
        );
      } else {
        this.reviewInnerTransfer.node_list = [];
      }

      // 格式化附件参数
      if (this.reviewInnerTransfer.annex) {
        for (let i = 0; i < this.reviewInnerTransfer.annex.length; i++) {
          if (this.reviewInnerTransfer.annex[i]) {
            this.fileList.push({
              name: this.reviewInnerTransfer.annex[i].origin_name,
              uuid: this.reviewInnerTransfer.annex[i].uuid,
              url:
                '/api/download?uuid=' + this.reviewInnerTransfer.annex[i].uuid
            });
          }
        }
      }
    },

    // 确认打款成功
    confirmInnerTransferSuccess(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.isConfirm = true;

      this.$refs[formName].validate(valid => {
        this.isConfirm = false;
        if (valid) {
          this.mconfirm('确认修改打款状态为成功吗？')
            .then(() => {
              this.mshowLoading('正在提交...');

              innerTransferConfirmSuccess({
                uuid: this.reviewInnerTransfer.uuid,
                bank_water: this.reviewInnerTransfer.bank_water
              })
                  .then(() => {
                    this.loading = false;
                    this.mhideLoading();
                    this.$message.success('打款状态已更新为成功状态');
                    this.$router.replace({
                      name: 'innerTransferList'
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
        }  else {
          this.loading = false;
          this.$message.warning('请完善数据填写后重试');
          return false;
        }
      })
    },

    // 确认打款失败
    confirmInnerTransferFail() {
      if (this.loading) return false;
      this.loading = true;

      this.mconfirm('确认修改打款状态为失败吗？')
        .then(() => {
          this.mshowLoading('正在提交...');

          innerTransferConfirmFail({
            uuid: this.reviewInnerTransfer.uuid
          })
              .then(() => {
                this.loading = false;
                this.mhideLoading();
                this.$message.success('打款状态已更新为失败状态');
                this.$router.replace({
                  name: 'innerTransferList'
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
    },
  }
};
</script>
