<template>
  <div class="content-container form-dialog-box">
    <el-form 
      ref="updateFinancialProduct" 
      :model="updateFinancialProduct" 
      :rules="rules" 
      label-width="120px" 
      label-position="left"
      size="mini">
      <el-form-item 
        label="理财产品名称" 
        prop="product_name">
        <el-input 
          v-model="updateFinancialProduct.product_name" 
          placeholder="请输入理财产品名称"></el-input>
      </el-form-item>
      <el-form-item 
        label="年化收益率" 
        prop="annual_income_rate_percentage">
        <el-input 
          v-model="updateFinancialProduct.annual_income_rate_percentage" 
          placeholder="请输入年化收益率" 
          type="number">
          <template slot="append">%</template>
        </el-input>
      </el-form-item>
      <el-form-item 
        label="银行名称" 
        prop="bank_dict_value">
        <el-select 
          v-model="updateFinancialProduct.bank_dict_value" 
          filterable
          placeholder="请选择银行名称" 
          @visible-change="bankSelectToggle">
          <el-option 
            v-for="item in bankList" 
            :key="item.dict_key" 
            :label="item.dict_value" 
            :value="item.dict_value">
          </el-option>
          <el-option 
            v-loading="bankLoading" 
            v-if="bankLoading" 
            key="bankLoading" 
            disabled 
            element-loading-spinner="el-icon-loading"
            label="" 
            value="loading"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item 
        label="产品状态" 
        prop="status">
        <el-select 
          v-model="updateFinancialProduct.status" 
          filterable
          placeholder="请选择产品状态">
          <el-option 
            :value="1" 
            label="启用"></el-option>
          <el-option 
            :value="2" 
            label="注销"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item 
        class="form-footer" 
        label-width="0">
        <el-button 
          v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.financial.UpdateProduct') != -1"
          :disabled="loading" 
          size="medium" 
          type="primary" 
          @click="submitForm('updateFinancialProduct')">保存</el-button>
        <el-button 
          :disabled="loading" 
          size="medium" 
          type="default" 
          @click="$emit('closeDialog')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { updateFinancialProduct } from '@/api/financial';
import { getBankDictList } from '@/api/account';
import { validate2Decimal } from '@/utils/validate';

export default {
  props: {
    currentFinancialProduct: {
      type: Object,
      default: null
    }
  },
  data() {
    const checkAnnualIncomeRate = (rule, value, callback) => {
      if (!validate2Decimal(value)) {
        return callback(new Error('请输入不超过两位小数的非负数值'));
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
    return {
      loading: false,
      updateFinancialProduct: {
        uuid: '',
        product_name: '',
        annual_income_rate: '',
        annual_income_rate_percentage: '',
        bank_dict_value: ''
      },
      rules: {
        product_name: [
          {
            required: true,
            message: '请输入理财产品名称',
            trigger: 'blur'
          }
        ],
        annual_income_rate_percentage: [
          {
            required: true,
            message: '请输入年化收益率',
            trigger: 'blur'
          },
          {
            validator: checkAnnualIncomeRate,
            trigger: 'blur'
          }
        ],
        bank_dict_value: [
          {
            required: true,
            message: '请选择银行名称',
            trigger: 'change'
          }
        ],
        status: [
          {
            required: true,
            message: '请选择产品状态',
            trigger: 'change'
          }
        ]
      },
      bankList: [],
      bankLoading: false
    };
  },
  created() {
    if (this.currentFinancialProduct) {
      Object.assign(this.updateFinancialProduct, this.currentFinancialProduct);
    }
    this.getBankListData();
  },
  methods: {
    // 获取银行列表
    getBankListData() {
      if (this.bankLoading) {
        return false;
      }
      this.bankLoading = true;

      getBankDictList()
        .then(res => {
          this.bankList = res.data.data;
          this.bankLoading = false;
        })
        .catch(() => {
          this.bankLoading = false;
        });
    },
    bankSelectToggle(show) {
      if (show && !this.bankLoading && JSON.stringify(this.bankList) == '[]') {
        this.getBankListData();
      }
    },
    // 提交更新
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交吗？')
            .then(() => {
              this.mshowLoading('正在更新理财产品...');

              const params = {
                uuid: this.updateFinancialProduct.uuid,
                product_name: this.updateFinancialProduct.product_name,
                annual_income_rate: this.unfilterPercentage(
                  this.updateFinancialProduct.annual_income_rate_percentage
                ),
                bank_dict_value: this.updateFinancialProduct.bank_dict_value,
                status: this.updateFinancialProduct.status
              };

              updateFinancialProduct(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('更新成功');
                  this.$emit('updateFinancialProductSuccess');
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
