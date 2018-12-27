<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>新增内部调拨</span>
        </div>
        <el-form 
          ref="newInnerTransfer" 
          :model="newInnerTransfer" 
          :rules="rules" 
          label-width="140px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half" 
            label="调拨主体" 
            prop="main_body_uuid">
            <el-select 
              v-model="newInnerTransfer.main_body_uuid" 
              filterable
              placeholder="请选择调拨主体" 
              @visible-change="mainBodySelectToggle" 
              @change="mainBodySelectChange">
              <el-option 
                v-for="item in mainBodyList" 
                :key="item.uuid" 
                :label="item.full_name" 
                :value="item.uuid">
              </el-option>
              <el-option 
                v-loading="mainBodyLoading" 
                v-if="mainBodyLoading" 
                key="mainbodyloading" 
                disabled 
                element-loading-spinner="el-icon-loading"
                label="" 
                value=""></el-option>
            </el-select>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="付款银行名称" 
              prop="pay_account_uuid">
              <el-select 
                v-model="newInnerTransfer.pay_account_uuid" 
                filterable
                placeholder="请选择付款银行名称" 
                no-data-text="请先为主体添加银行账户"
                @visible-change="payBankAccountSelectToggle"
                @change="payBankAccountSelectChange">
                <template v-if="newInnerTransfer.main_body_uuid">
                  <el-option 
                    v-for="item in bankAccountList" 
                    :key="item.uuid" 
                    :label="item.bank_name" 
                    :value="item.uuid">
                  </el-option>
                  <el-option 
                    v-loading="bankAccountLoading" 
                    v-if="bankAccountLoading" 
                    key="bankAccountLoading" 
                    disabled 
                    element-loading-spinner="el-icon-loading"
                    label="" 
                    value="loading"></el-option>
                </template>
                <template v-else>
                  <el-option 
                    disabled 
                    label="请先选择调拨主体" 
                    value="notice"></el-option>
                </template>
              </el-select>
            </el-form-item>
            <el-form-item 
              label="收款银行名称" 
              prop="collect_account_uuid">
              <el-select 
                v-model="newInnerTransfer.collect_account_uuid" 
                filterable
                placeholder="请选择收款银行名称" 
                no-data-text="请先为主体添加银行账户"
                @visible-change="collectBankAccountSelectToggle"
                @change="collectBankAccountSelectChange">
                <template v-if="newInnerTransfer.main_body_uuid">
                  <el-option 
                    v-for="item in bankAccountList" 
                    :key="item.uuid" 
                    :label="item.bank_name" 
                    :value="item.uuid">
                  </el-option>
                  <el-option 
                    v-loading="bankAccountLoading" 
                    v-if="bankAccountLoading" 
                    key="bankAccountLoading" 
                    disabled 
                    element-loading-spinner="el-icon-loading"
                    label="" 
                    value="loading"></el-option>
                </template>
                <template v-else>
                  <el-option 
                    disabled 
                    label="请先选择调拨主体" 
                    value="notice"></el-option>
                </template>
              </el-select>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="付款银行账号" 
              prop="pay_bank_account">
              <el-input 
                v-model="newInnerTransfer.pay_bank_account" 
                placeholder="请选择付款银行获取" 
                disabled></el-input>
            </el-form-item>
            <el-form-item 
              label="收款银行账号" 
              prop="collect_bank_account">
              <el-input 
                v-model="newInnerTransfer.collect_bank_account" 
                placeholder="请选择收款银行获取" 
                disabled></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <el-select 
                v-model="newInnerTransfer.currency" 
                filterable
                placeholder="请选择币种">
                <el-option 
                  label="人民币" 
                  value="CNY"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item 
              label="金额" 
              prop="amount">
              <el-input 
                v-model="newInnerTransfer.amount" 
                placeholder="请输入金额" 
                type="number">
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="实付类型" 
              prop="real_pay_type">
              <el-select 
                :disabled="isBankSetRealPayType" 
                v-model="newInnerTransfer.real_pay_type"
                filterable>
                <el-option 
                  value="2" 
                  label="银企"></el-option>
                <el-option 
                  value="1" 
                  label="网银"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item 
              label="要求调拨日期" 
              prop="hope_deal_date">
              <el-date-picker 
                v-model="newInnerTransfer.hope_deal_date" 
                :value-format="datedateFormat" 
                :picker-options="pickerOptions"
                type="date" 
                placeholder="请选择要求调拨日期">
              </el-date-picker>
            </el-form-item>
          </div>
          <el-form-item
            label="银企付款备注"
            v-if="newInnerTransfer.real_pay_type == 2"
            prop="pay_remark">
            <el-input v-model="newInnerTransfer.pay_remark" placeholder="请输入内容" maxlength="50"></el-input>
          </el-form-item>
          <el-form-item 
            label="附件" 
            prop="annex_uuids">
            <el-upload 
              ref="upload" 
              :file-list="fileList" 
              :before-upload="beforeFileUpload"
              :on-success="handleFileUploadSuccess" 
              :on-error="handleFileUploadError" 
              :on-preview="handleFilePreview"
              :on-remove="handleFileRemove"
              action="/api/upload">
              <el-button 
                slot="trigger" 
                type="primary">选取文件</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item 
            label="调拨说明" 
            prop="special_require">
            <el-input 
              v-model="newInnerTransfer.special_require" 
              type="textarea" 
              placeholder="请输入其他说明"></el-input>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              :disabled="loading" 
              size="medium" 
              type="primary" 
              @click="handleSave('newInnerTransfer')">保存</el-button>
            <el-button 
              :disabled="loading" 
              size="medium" 
              type="success" 
              @click="handleSubmit('newInnerTransfer')">提交</el-button>
            <tp-historyback
              name="innerTransferList"
              size="medium"></tp-historyback>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import { getMainBodyEffectList } from '@/api/mainBody';
import { getEffectAccountList } from '@/api/account';

import { addInnerTransfer } from '@/api/innerTransfer';

import { validate2Decimal } from '@/utils/validate';

export default {
  data() {
    const checkMoney = (rule, value, callback) => {
      if (value && !validate2Decimal(value)) {
        return callback(new Error('请输入不超过两位小数的非负数值'));
      }

      if (value && Number(value) < 0) {
        return callback(new Error('调拨金额不能为负'));
      }

      if (value) {
        let len = (value + '').length;
        let valArr = (value + '').split('.');
        if (valArr[1]) {
          if (valArr[1] == '00') {
            len = len - 3;
          }

          if (valArr[1] == '0') {
            len = len - 2;
          }

          if (/^[1-9]0$/.test(valArr[1])) {
            len = len - 1;
          }
        } else {
          if ((value + '').indexOf('.') > -1) {
            len = len - 1;
          }
        }

        if (len > 10) return callback(new Error('请输入不超过10位有效位的数值'));
      }

      return callback();
    };

    const checkMoneyZero = (rule, value, callback) => {
      if (value && Number(value).toFixed(2) == '0.00') {
        return callback(new Error('调拨金额不能为0'));
      }

      if (value) {
        let len = (value + '').length;
        let valArr = (value + '').split('.');
        if (valArr[1]) {
          if (valArr[1] == '00') {
            len = len - 3;
          }

          if (valArr[1] == '0') {
            len = len - 2;
          }

          if (/^[1-9]0$/.test(valArr[1])) {
            len = len - 1;
          }
        } else {
          if ((value + '').indexOf('.') > -1) {
            len = len - 1;
          }
        }

        if (len > 10) return callback(new Error('请输入不超过10位有效位的数值'));
      }

      return callback();
    };

    const checkPayAccount = (rule, value, callback) => {
      if (
        value &&
        this.newInnerTransfer.collect_account_uuid &&
        value == this.newInnerTransfer.collect_account_uuid
      ) {
        return callback(new Error('付款银行账号和收款银行账号不能相同'));
      }

      return callback();
    };
    const checkCollectAccount = (rule, value, callback) => {
      if (
        value &&
        this.newInnerTransfer.pay_account_uuid &&
        value == this.newInnerTransfer.pay_account_uuid
      ) {
        return callback(new Error('收款银行账号和付款银行账号不能相同'));
      }

      return callback();
    };

    return {
      loading: false,
      newInnerTransfer: {
        main_body_uuid: '',
        pay_account_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        currency: 'CNY',
        amount: '',
        hope_deal_date: '',
        real_pay_type: '',
        pay_remark: '',
        annex_uuids: '',
        special_require: ''
      },
      rules: {
        main_body_uuid: [
          {
            required: true,
            message: '请选择调拨主体',
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
        pay_bank_account: [
          {
            required: true,
            message: '请选择付款银行',
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
        collect_bank_account: [
          {
            required: true,
            message: '请选择收款银行',
            trigger: 'change'
          }
        ],
        currency: [
          {
            required: true,
            message: '请选择币种',
            trigger: 'change'
          }
        ],
        amount: [
          {
            required: true,
            message: '请输入调拨金额',
            trigger: 'blur'
          },
          {
            validator: checkMoney,
            trigger: 'blur'
          },
          {
            validator: checkMoneyZero,
            trigger: 'blur'
          }
        ],
        hope_deal_date: [
          {
            required: true,
            message: '请选择要求调拨日期',
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
        pay_remark: [
          {
            required: true,
            message: '请输入银企付款备注',
            trigger: 'blur'
          }
        ]
      },
      mainBodyList: [],
      mainBodyLoading: false,
      isBankSetRealPayType: false,
      bankAccountList: [],
      bankAccountLoading: false,
      fileList: [],
      pickerOptions: {
        disabledDate: time => {
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
        }
      }
    };
  },
  methods: {
    // 选择调拨主体
    getMainBodyEffectListData() {
      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      getMainBodyEffectList({
        page: 1,
        limit: -1,
        is_internal: 1,
        status: 1
      })
        .then(res => {
          const data = res.data;
          this.mainBodyList = data.data;
          this.mainBodyLoading = false;
        })
        .catch(() => {
          this.mainBodyLoading = false;
        });
    },
    mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyEffectListData();
      }
    },
    mainBodySelectChange() {
      this.newInnerTransfer.pay_account_uuid = '';
      this.newInnerTransfer.pay_bank_name = '';
      this.newInnerTransfer.pay_bank_account = '';
      this.newInnerTransfer.collect_account_uuid = '';
      this.newInnerTransfer.collect_bank_name = '';
      this.newInnerTransfer.collect_bank_account = '';
      this.newInnerTransfer.real_pay_type = '';
      this.newInnerTransfer.pay_remark = '';
      this.isBankSetRealPayType = false;
      this.bankAccountList.length = 0;
      this.getBankAccountListData();
    },

    // 选择银行
    getBankAccountListData() {
      if (this.bankAccountLoading) {
        return false;
      }

      if (!this.newInnerTransfer.main_body_uuid) {
        this.$message.warning('请先选择调拨主体');
        return false;
      }

      this.bankAccountLoading = true;
      getEffectAccountList({
        page: 1,
        limit: -1,
        main_body_uuid: this.newInnerTransfer.main_body_uuid
      })
        .then(res => {
          this.bankAccountList = res.data.data;
          let setFlag = 0;
          for (let i = 0; i < this.bankAccountList.length; i++) {
            if (
              this.newInnerTransfer.pay_account_uuid ==
              this.bankAccountList[i].uuid
            ) {
              this.newInnerTransfer.pay_bank_name = this.bankAccountList[
                i
              ].bank_name;
              this.newInnerTransfer.pay_bank_account = this.bankAccountList[
                i
              ].bank_account;
              if (this.bankAccountList[i].real_pay_type != '0') {
                this.newInnerTransfer.real_pay_type =
                  '' + this.bankAccountList[i].real_pay_type;
                this.isBankSetRealPayType = true;
              } else {
                this.isBankSetRealPayType = false;
              }
              setFlag++;
              if (setFlag == 2) break;
            }

            if (
              this.newInnerTransfer.collect_account_uuid ==
              this.bankAccountList[i].uuid
            ) {
              this.newInnerTransfer.collect_bank_name = this.bankAccountList[
                i
              ].bank_name;
              this.newInnerTransfer.collect_bank_account = this.bankAccountList[
                i
              ].bank_account;

              setFlag++;
              if (setFlag == 2) break;
            }
          }
          this.bankAccountLoading = false;
        })
        .catch(() => {
          this.bankAccountLoading = false;
        });
    },
    payBankAccountSelectToggle(show) {
      if (show && !this.newInnerTransfer.main_body_uuid) {
        this.$message.warning('请先选择调拨主体');
        return false;
      }
      if (show && !this.bankAccountLoading && !this.bankAccountList.length) {
        this.getBankAccountListData();
      }
    },
    payBankAccountSelectChange(bankUuid) {
      for (let i = 0; i < this.bankAccountList.length; i++) {
        if (bankUuid == this.bankAccountList[i].uuid) {
          this.newInnerTransfer.pay_bank_name = this.bankAccountList[
            i
          ].bank_name;
          this.newInnerTransfer.pay_bank_account = this.bankAccountList[
            i
          ].bank_account;
          if (this.bankAccountList[i].real_pay_type != '0') {
            this.newInnerTransfer.real_pay_type =
              '' + this.bankAccountList[i].real_pay_type;
            this.isBankSetRealPayType = true;
          } else {
            this.isBankSetRealPayType = false;
          }
          break;
        }
      }

      if (
        this.newInnerTransfer.collect_account_uuid &&
        this.$refs['newInnerTransfer']
      ) {
        this.$refs['newInnerTransfer'].validateField('collect_account_uuid');
      }
    },
    collectBankAccountSelectToggle(show) {
      if (show && !this.newInnerTransfer.main_body_uuid) {
        this.$message.warning('请先选择调拨主体');
        return false;
      }
      if (show && !this.bankAccountLoading && !this.bankAccountList.length) {
        this.getBankAccountListData();
      }
    },
    collectBankAccountSelectChange(bankUuid) {
      for (let i = 0; i < this.bankAccountList.length; i++) {
        if (bankUuid == this.bankAccountList[i].uuid) {
          this.newInnerTransfer.collect_bank_name = this.bankAccountList[
            i
          ].bank_name;
          this.newInnerTransfer.collect_bank_account = this.bankAccountList[
            i
          ].bank_account;
          break;
        }
      }

      if (
        this.newInnerTransfer.pay_account_uuid &&
        this.$refs['newInnerTransfer']
      ) {
        this.$refs['newInnerTransfer'].validateField('pay_account_uuid');
      }
    },

    // 上传附件
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
    },
    handleFileRemove(file, fileList) {
      this.fileList = fileList;
    },

    // 保存
    handleSave(formName) {
      this.submitForm(formName, '1');
    },

    // 提交
    handleSubmit(formName) {
      this.submitForm(formName, '2');
    },

    // 提交新增内部调拨
    submitForm(formName, type) {
      if (this.loading) return false;
      this.loading = true;

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm(type == '1' ? '确定要保存吗？' : '确定要提交吗？')
            .then(() => {
              this.mshowLoading(
                type == '1' ? '正在保存内部调拨...' : '正在提交内部调拨...'
              );

              // 获取新增内部调拨参数
              let annex_uuids = '';
              if (this.fileList.length) {
                for (let i = 0; i < this.fileList.length; i++) {
                  annex_uuids += i
                    ? ',' + this.fileList[i].uuid
                    : this.fileList[i].uuid;
                }
              }

              const params = JSON.parse(JSON.stringify(this.newInnerTransfer));
              params.annex_uuids = annex_uuids;
              params.opt_type = type;
              params.amount = this.filterYuan2CentAmount(params.amount);

              addInnerTransfer(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success(type == '1' ? '保存成功' : '提交成功');
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
        } else {
          this.loading = false;
          this.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    }
  }
};
</script>
