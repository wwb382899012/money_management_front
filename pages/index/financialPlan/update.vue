<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>更新理财计划</span>
        </div>
        <el-form 
          ref="updateFinancialPlan" 
          :model="updateFinancialPlan" 
          :rules="rules" 
          label-width="120px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half" 
            label="交易主体" 
            prop="plan_main_body_uuid">
            <el-select 
              v-model="updateFinancialPlan.plan_main_body_uuid" 
              filterable
              placeholder="请选择交易主体" 
              @visible-change="mainBodySelectToggle" 
              @change="handlePlanMainBodyChange">
              <el-option 
                v-for="item in mainBodyList" 
                :key="item.uuid" 
                :label="item.full_name" 
                :value="item.uuid">
              </el-option>
              <el-option 
                v-loading="mainBodyLoading" 
                v-if="mainBodyLoading" 
                key="mainBodyLoading" 
                disabled 
                element-loading-spinner="el-icon-loading"
                label="" 
                value="loading"></el-option>
            </el-select>
          </el-form-item>
          <div class="form-line">
            <el-form-item 
              label="出款银行名称" 
              prop="pay_bank_uuid">
              <el-select 
                v-model="updateFinancialPlan.pay_bank_uuid" 
                filterable
                placeholder="请选择出款银行名称" 
                @visible-change="bankAccountSelectToggle"
                @change="handleBankChange">
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
              </el-select>
            </el-form-item>
            <el-form-item 
              label="出款银行账号" 
              prop="pay_bank_account">
              <el-input 
                v-model="updateFinancialPlan.pay_bank_account" 
                disabled 
                placeholder="请先选择出款银行名称"></el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="投资产品" 
              prop="money_manager_product_uuid">
              <el-select 
                v-model="updateFinancialPlan.money_manager_product_uuid" 
                filterable
                placeholder="请选择投资产品" 
                @visible-change="financialProductSelectToggle"
                @change="handleFinancialProductChange">
                <el-option 
                  v-for="item in financialProductList" 
                  :key="item.uuid" 
                  :label="item.product_name" 
                  :value="item.uuid">
                </el-option>
                <el-option 
                  v-loading="financialProductLoading" 
                  v-if="financialProductLoading" 
                  key="financialproductloading" 
                  disabled
                  element-loading-spinner="el-icon-loading" 
                  label="" 
                  value="loading"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item 
              label="期限类别" 
              prop="term_type">
              <el-select 
                v-model="updateFinancialPlan.term_type" 
                filterable
                placeholder="请选择期限类别"
                @change="handleTermTypeChange">
                <el-option 
                  :value="1" 
                  label="开放式"></el-option>
                <el-option 
                  :value="2" 
                  label="有效期"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="币种" 
              prop="currency">
              <el-select 
                v-model="updateFinancialPlan.currency" 
                filterable
                placeholder="请选择币种">
                <el-option 
                  label="人民币" 
                  value="CNY"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item 
              label="投资总本金" 
              prop="amount">
              <el-input 
                v-model="updateFinancialPlan.amount" 
                type="number" 
                placeholder="请输入投资总本金">
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="起息日" 
              prop="rate_start_date">
              <el-date-picker 
                v-model="updateFinancialPlan.rate_start_date" 
                :picker-options="startPickerOptions" 
                :value-format="datedateFormat" 
                align="right" 
                type="date"
                placeholder="选择起息日">
              </el-date-picker>
            </el-form-item>
            <el-form-item 
              v-if="!updateFinancialPlan.term_type || updateFinancialPlan.term_type == 2"
              label="投资产品到期日" 
              prop="rate_over_date">
              <el-date-picker 
                v-model="updateFinancialPlan.rate_over_date" 
                :picker-options="overPickerOptions" 
                :value-format="datedateFormat" 
                align="right" 
                type="date"
                placeholder="选择投资产品到期日">
              </el-date-picker>
            </el-form-item>
          </div>
          <div class="form-line">
            <el-form-item 
              label="预计年化收益率" 
              prop="forecast_annual_income_rate_percentage">
              <el-input 
                v-model="updateFinancialPlan.forecast_annual_income_rate_percentage" 
                placeholder="请输入预计年化收益率">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
            <el-form-item 
              v-if="!updateFinancialPlan.term_type || updateFinancialPlan.term_type == 2"
              label="预计利息" 
              prop="forecast_interest_model">
              <el-input 
                v-model="updateFinancialPlan.forecast_interest_model" 
                type="number" 
                placeholder="请输入预计利息">
                <template slot="append"><el-button 
                  icon="el-icon-refresh" 
                  @click="calculate"></el-button></template>
              </el-input>
            </el-form-item>
          </div>
          <el-form-item 
            class="el-form-item-width-half" 
            label="实付类型" 
            prop="real_pay_type">
            <el-select 
              v-model="updateFinancialPlan.real_pay_type"
              filterable>
              <el-option 
                :value="1" 
                label="网银"></el-option>
            </el-select>
          </el-form-item>
          <el-card class="box-card box-card-inside">
            <div 
              slot="header" 
              class="box-card-header">
              <span>理财现金流表</span>
              <div>
                <el-button 
                  :disabled="loading" 
                  type="text" 
                  @click="triggerUpdateCashFlow">更新现金流表</el-button>
              </div>
            </div>
            <div>
              <el-table :data="updateFinancialPlan.cash_flow">
                <el-table-column 
                  prop="repay_date" 
                  label="日期">
                </el-table-column>
                <el-table-column label="事项">
                  <template slot-scope="scope">
                    {{ cashFlowTypeJson[scope.row.cash_flow_type] }}
                  </template>
                </el-table-column>
                <el-table-column 
                  label="金额">
                  <template slot-scope="scope">
                    {{ [scope.row.amount, updateFinancialPlan.currency] | filterCent2YuanCurrencyAmount }}
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              v-if="updateFinancialPlan.plan_status == 0 || updateFinancialPlan.plan_status == 4 || updateFinancialPlan.plan_status == 5"
              :disabled="loading || !isUpdateCashFlowReady" 
              size="medium" 
              type="primary" 
              @click="submitForm('updateFinancialPlan', '2')">保存</el-button>
            <el-button 
              v-if="updateFinancialPlan.plan_status == 0 || updateFinancialPlan.plan_status == 4 || updateFinancialPlan.plan_status == 5"
              :disabled="loading || !isUpdateCashFlowReady" 
              size="medium" 
              type="success" 
              @click="submitForm('updateFinancialPlan', '1')">提交</el-button>
            <tp-historyback 
              name="financialPlanList"
              size="medium"></tp-historyback>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>

</template>
<script>
import {
  updateFinancialPlan,
  getFinancialPlanDetail,
  getFinancialProductList
} from '@/api/financial';
import { getMainBodyEffectList } from '@/api/mainBody';
import { getEffectAccountList } from '@/api/account';

import { validate2Decimal } from '@/utils/validate';

export default {
  data() {
    const checkRate = (rule, value, callback) => {
      if (value && !validate2Decimal(value)) {
        return callback(new Error('请输入不超过两位小数的正数值'));
      }

      if (value && Number(value) < 0) {
        return callback(new Error('预计年化收益率不能为负'));
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

        if (len > 10)
          return callback(new Error('请输入不超过10位有效位的数值'));
      }

      return callback();
    };

    const checkMoney = (rule, value, callback) => {
      if (value && !validate2Decimal(value)) {
        return callback(new Error('请输入不超过两位位小数的正数值'));
      }

      if (value && Number(value) < 0) {
        return callback(new Error('投资总本金不能为负'));
      }

      if (value && Number(value).toFixed(2) == '0.00') {
        return callback(new Error('投资总本金不能为0'));
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

        if (len > 10)
          return callback(new Error('请输入不超过10位有效位的数值'));
      }

      return callback();
    };
    const checkInterest = (rule, value, callback) => {
      if (value && !validate2Decimal(value)) {
        return callback(new Error('请输入不超过两位位小数的正数值'));
      }

      if (value && Number(value) < 0) {
        return callback(new Error('预计利息不能为负'));
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

        if (len > 10)
          return callback(new Error('请输入不超过10位有效位的数值'));
      }

      return callback();
    };

    return {
      loading: false,
      updateFinancialPlan: {
        plan_uuid: '',
        plan_status: '',
        plan_main_body_uuid: '',
        pay_bank_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        money_manager_product_uuid: '',
        term_type: '',
        currency: 'CNY',
        amount: '',
        rate_start_date: '',
        rate_over_date: '',
        forecast_annual_income_rate: '',
        forecast_annual_income_rate_percentage: '',
        forecast_interest: '',
        forecast_interest_model: '',
        real_pay_type: 1,
        cash_flow: []
      },
      interData: {
        pay_bank_short_name: '',
        pay_bank_dict_key: ''
      },
      deleteCashFlow: [],
      rules: {
        plan_main_body_uuid: [
          {
            required: true,
            message: '请选择交易主体',
            trigger: 'change'
          }
        ],
        pay_bank_uuid: [
          {
            required: true,
            message: '请选择出款银行',
            trigger: 'change'
          }
        ],
        pay_bank_account: [
          {
            required: true,
            message: '请选择出款银行',
            trigger: 'change'
          }
        ],
        money_manager_product_uuid: [
          {
            required: true,
            message: '请选择投资产品',
            trigger: 'change'
          }
        ],
        term_type: [
          {
            required: true,
            message: '请选择期限类别',
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
            message: '请输入投资总本金',
            trigger: 'blur'
          },
          {
            validator: checkMoney,
            trigger: 'blur'
          }
        ],
        rate_start_date: [
          {
            required: true,
            message: '请选择起息日',
            trigger: 'change'
          }
        ],
        rate_over_date: [
          {
            required: true,
            message: '请选择到期日',
            trigger: 'change'
          }
        ],
        forecast_annual_income_rate_percentage: [
          {
            required: true,
            message: '请输入预计年化收益率',
            trigger: ['blur', 'change']
          },
          {
            validator: checkRate,
            trigger: ['blur', 'change']
          }
        ],
        forecast_interest_model: [
          {
            required: true,
            message: '请输入预计利息',
            trigger: ['blur', 'change']
          },
          {
            validator: checkInterest,
            trigger: ['blur', 'change']
          }
        ],
        real_pay_type: [
          {
            required: true,
            message: '请选择实付类型',
            trigger: 'change'
          }
        ]
      },
      mainBodyList: [],
      mainBodyLoading: false,
      bankAccountList: [],
      bankAccountLoading: false,
      financialProductList: [],
      financialProductLoading: false,
      startPickerOptions: {
        disabledDate: time => {
          if (this.updateFinancialPlan.rate_over_date) {
            return (
              time.getTime() < Date.now() - 24 * 60 * 60 * 1000 ||
              time.getTime() >
                new Date(this.updateFinancialPlan.rate_over_date).getTime()
            );
          } else {
            return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
          }
        }
      },
      overPickerOptions: {
        disabledDate: time => {
          if (this.updateFinancialPlan.rate_start_date) {
            return (
              time.getTime() < Date.now() ||
              time.getTime() <
                new Date(this.updateFinancialPlan.rate_start_date).getTime()
            );
          } else {
            return time.getTime() < Date.now();
          }
        }
      },
      backupCashFlow: []
    };
  },
  computed: {
    isUpdateCashFlowReady() {
      if (
        this.updateFinancialPlan.forecast_interest ===
        this.updateFinancialPlan.forecast_interest_model
      ) {
        this.calculate(false);
      } else {
        this.inputRate();
      }
      let ready =
        this.updateFinancialPlan.term_type &&
        this.updateFinancialPlan.currency &&
        this.updateFinancialPlan.amount &&
        this.updateFinancialPlan.amount != 0 &&
        this.updateFinancialPlan.rate_start_date &&
        this.updateFinancialPlan.forecast_annual_income_rate_percentage;

      if (this.updateFinancialPlan.term_type == 2) {
        ready =
          ready &&
          this.updateFinancialPlan.rate_over_date &&
          this.updateFinancialPlan.forecast_interest !== '';
      }

      this.autoTriggerUpdateCashFlow(ready);

      return ready;
    }
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'financialPlanList'
      });
    } else {
      this.updateFinancialPlan.plan_uuid = this.$route.params.uuid;
      getFinancialPlanDetail({
        plan_uuid: this.updateFinancialPlan.plan_uuid
      })
        .then(res => {
          this.backupCashFlow = res.data.cash_flow.slice();
          Object.assign(this.updateFinancialPlan, res.data);

          this.updateFinancialPlan.amount = (
            Number(this.updateFinancialPlan.amount) / 100
          ).toFixed(2);

          this.updateFinancialPlan.forecast_annual_income_rate_percentage = (
            Number(this.updateFinancialPlan.forecast_annual_income_rate) * 100
          ).toFixed(2);

          if (this.updateFinancialPlan.term_type == 2) {
            this.updateFinancialPlan.forecast_interest_model = (
              Number(this.updateFinancialPlan.forecast_interest) / 100
            ).toFixed(2);
          } else {
            this.updateFinancialPlan.rate_over_date = '';
            this.updateFinancialPlan.forecast_interest = '';
            this.updateFinancialPlan.forecast_interest_model = '';
          }

          this.updateFinancialPlan.real_pay_type = Number(
            this.updateFinancialPlan.real_pay_type
          );

          this.loading = false;
          this.getBankAccountListData(true);
        })
        .catch(() => {
          this.loading = false;
        });

      this.getMainBodyEffectListData();
    }
  },
  methods: {
    // 选择交易主体
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
    handlePlanMainBodyChange() {
      this.updateFinancialPlan.forecast_annual_income_rate_percentage = '';
      this.updateFinancialPlan.forecast_annual_income_rate = '';
      this.updateFinancialPlan.forecast_interest_model = '';
      this.updateFinancialPlan.forecast_interest = '';
      this.updateFinancialPlan.money_manager_product_uuid = '';
      this.financialProductList = [];
      this.updateFinancialPlan.pay_bank_uuid = '';
      this.updateFinancialPlan.pay_bank_name = '';
      this.updateFinancialPlan.pay_bank_account = '';
      this.interData.pay_bank_dict_key = '';
      this.interData.pay_bank_short_name = '';
      this.bankAccountList = [];
    },

    // 选择出款银行
    getBankAccountListData(isInit) {
      if (!this.updateFinancialPlan.plan_main_body_uuid) {
        this.$message.warning('请先选择交易主体');
        return false;
      }
      if (this.bankAccountLoading) {
        return false;
      }
      this.bankAccountLoading = true;
      getEffectAccountList({
        page: 1,
        limit: -1,
        main_body_uuid: this.updateFinancialPlan.plan_main_body_uuid
      })
        .then(res => {
          const data = res.data.data;
          let bankAccountList = [];
          for (let i = 0; i < data.length; i++) {
            if (data[i].real_pay_type != 2) {
              bankAccountList.push(data[i]);
            }
          }

          this.bankAccountList = bankAccountList;

          if (isInit) {
            let hasAccount = false;
            for (let i = 0; i < this.bankAccountList.length; i++) {
              if (
                this.updateFinancialPlan.pay_bank_uuid ==
                this.bankAccountList[i].uuid
              ) {
                hasAccount = true;
                this.updateFinancialPlan.pay_bank_name = this.bankAccountList[
                  i
                ].bank_name;
                this.updateFinancialPlan.pay_bank_account = this.bankAccountList[
                  i
                ].bank_account;

                this.interData.pay_bank_short_name = this.bankAccountList[
                  i
                ].short_name;
                this.interData.pay_bank_dict_key = this.bankAccountList[
                  i
                ].bank_dict_key;
                break;
              }
            }

            if (!hasAccount) {
              this.updateFinancialPlan.forecast_annual_income_rate_percentage =
                '';
              this.updateFinancialPlan.forecast_annual_income_rate = '';
              this.updateFinancialPlan.forecast_interest_model = '';
              this.updateFinancialPlan.forecast_interest = '';
              this.updateFinancialPlan.money_manager_product_uuid = '';
              this.financialProductList = [];
              this.updateFinancialPlan.pay_bank_name = '';
              this.updateFinancialPlan.pay_bank_account = '';
              this.interData.pay_bank_short_name = '';
              this.interData.pay_bank_dict_key = '';
              this.$message.warning(
                '原银行账号已不支持网银或不属于此交易主体，请重新选择'
              );
            } else {
              this.getFinancialProductListData();
            }
          }
          this.bankAccountLoading = false;
        })
        .catch(() => {
          this.bankAccountLoading = false;
        });
    },
    bankAccountSelectToggle(show) {
      if (show && !this.bankAccountLoading && !this.bankAccountList.length) {
        this.getBankAccountListData();
      }
    },
    handleBankChange(bankuuid) {
      for (let i = 0; i < this.bankAccountList.length; i++) {
        if (bankuuid == this.bankAccountList[i].uuid) {
          this.updateFinancialPlan.pay_bank_name = this.bankAccountList[
            i
          ].bank_name;
          this.updateFinancialPlan.pay_bank_account = this.bankAccountList[
            i
          ].bank_account;

          this.interData.pay_bank_short_name = this.bankAccountList[
            i
          ].short_name;
          this.interData.pay_bank_dict_key = this.bankAccountList[
            i
          ].bank_dict_key;
          break;
        }
      }
      this.updateFinancialPlan.forecast_annual_income_rate_percentage = '';
      this.updateFinancialPlan.forecast_annual_income_rate = '';
      this.updateFinancialPlan.forecast_interest_model = '';
      this.updateFinancialPlan.forecast_interest = '';
      this.updateFinancialPlan.money_manager_product_uuid = '';
      this.financialProductList = [];
    },

    // 选择理财产品
    getFinancialProductListData() {
      if (!this.interData.pay_bank_short_name) {
        this.$message.warning('请先选择出款银行');
        return false;
      }
      if (this.financialProductLoading) {
        return false;
      }
      this.financialProductLoading = true;
      getFinancialProductList({
        page: 1,
        limit: -1,
        bank_dict_value: this.interData.pay_bank_short_name,
        status: 1
      })
        .then(res => {
          const data = res.data;
          this.financialProductList = data.data;
          this.financialProductLoading = false;
        })
        .catch(() => {
          this.financialProductLoading = false;
        });
    },
    financialProductSelectToggle(show) {
      if (
        show &&
        !this.financialProductLoading &&
        !this.financialProductList.length
      ) {
        this.getFinancialProductListData();
      }
    },
    handleFinancialProductChange(productuuid) {
      for (let i = 0; i < this.financialProductList.length; i++) {
        if (productuuid == this.financialProductList[i].uuid) {
          this.updateFinancialPlan.forecast_annual_income_rate = this.financialProductList[
            i
          ].annual_income_rate;
          this.updateFinancialPlan.forecast_annual_income_rate_percentage = this.filterPercentage(
            this.updateFinancialPlan.forecast_annual_income_rate
          ).slice(0, -1);
          break;
        }
      }
      this.updateFinancialPlan.forecast_interest_model = '';
      this.updateFinancialPlan.forecast_interest = '';
    },
    handleTermTypeChange(termType) {
      if (termType == 1) {
        this.updateFinancialPlan.rate_over_date = '';
        this.updateFinancialPlan.forecast_interest_model = '';
        this.updateFinancialPlan.forecast_interest = '';
      }
    },

    // 计算预计利息
    calculate(showWarning) {
      if (
        this.updateFinancialPlan.amount &&
        this.updateFinancialPlan.rate_start_date &&
        this.updateFinancialPlan.rate_over_date &&
        this.updateFinancialPlan.forecast_annual_income_rate_percentage &&
        this.updateFinancialPlan.term_type == 2
      ) {
        this.updateFinancialPlan.forecast_annual_income_rate = Number(
          this.unfilterPercentage(
            this.updateFinancialPlan.forecast_annual_income_rate_percentage
          )
        );

        // 间隔天数
        const days =
          (new Date(this.updateFinancialPlan.rate_over_date).getTime() -
            new Date(this.updateFinancialPlan.rate_start_date).getTime()) /
          1000 /
          24 /
          3600;

        this.updateFinancialPlan.forecast_interest = (
          this.updateFinancialPlan.amount *
          this.updateFinancialPlan.forecast_annual_income_rate *
          days /
          365
        ).toFixed(2);

        this.updateFinancialPlan.forecast_interest_model = this.updateFinancialPlan.forecast_interest;

        this.autoTriggerUpdateCashFlow(true);
      } else {
        this.updateFinancialPlan.forecast_interest = '';
        this.updateFinancialPlan.forecast_interest_model = this.updateFinancialPlan.forecast_interest;
        showWarning && this.$message.warning('请填写完整数据或手动输入');
      }
    },

    // 手动填写预计利息
    inputRate() {
      this.updateFinancialPlan.forecast_interest = this.updateFinancialPlan.forecast_interest_model;
    },

    // 自动触发更新现金流
    autoTriggerUpdateCashFlow(ready) {
      if (ready) {
        this.updateFinancialPlan.cash_flow = [];
        this.updateFinancialPlan.cash_flow.push({
          repay_date: this.updateFinancialPlan.rate_start_date,
          cash_flow_type: 1,
          amount: this.filterYuan2CentAmount(this.updateFinancialPlan.amount),
          change_amount: 0,
          info: ''
        });
        if (this.updateFinancialPlan.term_type == 2) {
          this.updateFinancialPlan.cash_flow.push({
            repay_date: this.updateFinancialPlan.rate_over_date,
            cash_flow_type: 2,
            amount: this.filterYuan2CentAmount(this.updateFinancialPlan.amount),
            change_amount: 0,
            info: ''
          });
          this.updateFinancialPlan.cash_flow.push({
            repay_date: this.updateFinancialPlan.rate_over_date,
            cash_flow_type: 3,
            amount: this.filterYuan2CentAmount(
              this.updateFinancialPlan.forecast_interest
            ),
            change_amount: 0,
            info: ''
          });
        }
      } else {
        this.updateFinancialPlan.cash_flow = [];
      }
    },
    // 更新现金流
    triggerUpdateCashFlow(showWarning) {
      if (this.isUpdateCashFlowReady) {
        this.updateFinancialPlan.cash_flow = [];
        this.updateFinancialPlan.cash_flow.push({
          repay_date: this.updateFinancialPlan.rate_start_date,
          cash_flow_type: 1,
          amount: this.filterYuan2CentAmount(this.updateFinancialPlan.amount),
          change_amount: 0,
          info: ''
        });
        if (this.updateFinancialPlan.term_type == 2) {
          this.updateFinancialPlan.cash_flow.push({
            repay_date: this.updateFinancialPlan.rate_over_date,
            cash_flow_type: 2,
            amount: this.filterYuan2CentAmount(this.updateFinancialPlan.amount),
            change_amount: 0,
            info: ''
          });
          this.updateFinancialPlan.cash_flow.push({
            repay_date: this.updateFinancialPlan.rate_over_date,
            cash_flow_type: 3,
            amount: this.filterYuan2CentAmount(
              this.updateFinancialPlan.forecast_interest
            ),
            change_amount: 0,
            info: ''
          });
        }
      } else {
        showWarning && this.$message.warning('请先填写完整的理财计划');
        this.updateFinancialPlan.cash_flow = [];
      }
    },

    // 保存和提交
    submitForm(formName, type) {
      if (this.loading) return false;
      this.loading = true;
      this.updateFinancialPlan.forecast_annual_income_rate = Number(
        this.unfilterPercentage(
          this.updateFinancialPlan.forecast_annual_income_rate_percentage
        )
      );
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (
            (this.updateFinancialPlan.cash_flow.length != 3 &&
              this.updateFinancialPlan.term_type == 2) ||
            (this.updateFinancialPlan.cash_flow.length != 1 &&
              this.updateFinancialPlan.term_type == 1)
          ) {
            this.$message.warning('请完善理财计划现金流表');
            this.loading = false;
            return false;
          }
          this.mconfirm(
            type == '1' ? '确定提交理财计划审核吗？' : '确认保存理财计划吗？'
          )
            .then(() => {
              this.mshowLoading(
                type == '1' ? '正在提交理财计划审核...' : '正在保存理财计划...'
              );

              // 获取参数
              let params = JSON.parse(JSON.stringify(this.updateFinancialPlan));
              params.amount = this.filterYuan2CentAmount(params.amount);
              params.forecast_interest = this.filterYuan2CentAmount(
                params.forecast_interest
              );

              if (params.cash_flow.length == this.backupCashFlow.length) {
                for (let i = 0; i < this.backupCashFlow.length; i++) {
                  params.cash_flow[i].uuid = this.backupCashFlow[i].uuid;
                }
              } else {
                params.cash_flow[0].uuid = this.backupCashFlow[0].uuid;

                if (params.cash_flow.length < this.backupCashFlow.length) {
                  params.cash_flow = params.cash_flow.concat(
                    this.backupCashFlow.slice(1)
                  );
                  for (let i = 1; i < params.cash_flow.length; i++) {
                    params.cash_flow[i].is_delete = '2';
                  }
                }
              }

              let index = 0;
              for (let i = 0; i < params.cash_flow.length; i++) {
                if (params.cash_flow[i].cash_flow_type == 1) {
                  params.cash_flow[i].index = index;
                  index++;
                } else if (params.cash_flow[i].cash_flow_type == 2) {
                  params.cash_flow[i].index = index;
                  params.cash_flow[i+1].index = index;
                  index++;
                }
              }

              params.if_audit = type;

              updateFinancialPlan(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success(
                    type == '1' ? '理财计划提交成功' : '理财计划保存成功'
                  );
                  this.$router.replace({
                    name: 'financialPlanList'
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
