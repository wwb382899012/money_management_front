<template>
  <div class="content-container form-dialog-box">
    <el-form 
      ref="updateRedemption" 
      :model="updateRedemption" 
      :rules="rules" 
      label-width="120px" 
      label-position="left" 
      size="small">
      <el-form-item 
        label="赎回日期" 
        prop="repay_date">
        <el-date-picker 
          :picker-options="pickerOptions"
          v-model="updateRedemption.repay_date" 
          align="right" 
          type="date" 
          placeholder="选择日期" 
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-form-item>
      <el-form-item 
        label="事项" 
        prop="cash_flow_type">
        <el-select 
          v-model="updateRedemption.cash_flow_type" 
          filterable
          placeholder="选择事项">
          <el-option 
            :value="2" 
            label="本金回款"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item 
        label="金额" 
        prop="amount">
        <el-input 
          v-model="updateRedemption.amount" 
          type="number" 
          placeholder="请输入金额">
          <template slot-scope="append">元</template>
        </el-input>
      </el-form-item>
      <el-form-item 
        class="form-footer" 
        label-width="0">
        <el-button 
          :disabled="loading" 
          size="medium" 
          type="primary" 
          @click="submitForm('updateRedemption')">保存</el-button>
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

import { validate2Decimal } from '@/utils/validate';

export default {
  props: {
    pickerOptions: {
      type: Object,
      default() {
        return {
          disabledDate: time => {
            return time.getTime() < Date.now();
          }
        };
      }
    },
    leftCashAmount: {
      type: Number,
      default: 0
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    currentRedemption: {
      type: Object,
      default: null
    }
  },
  data() {
    const checkMoney = (rule, value, callback) => {
      if (value && !validate2Decimal(value)) {
        return callback(new Error('请输入不超过两位小数的正数值'));
      }

      if (value && Number(value).toFixed(2) == '0.00') {
        return callback(new Error('金额不能为0'));
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

    const checkOver = (rule, value, callback) => {
      if (value && Number(value) > this.leftCashAmountYuan) {
        return callback(
          new Error('超出本金回款剩余额度：' + this.leftCashAmountYuan + '元')
        );
      }

      return callback();
    };

    return {
      loading: false,
      index: '',
      updateRedemption: {
        uuid: '',
        repay_date: '',
        cash_flow_type: '',
        amount: '',
        change_amount: 0,
        info: ''
      },
      rules: {
        repay_date: [
          {
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        cash_flow_type: [
          {
            required: true,
            message: '请选择事项',
            trigger: 'change'
          }
        ],
        amount: [
          {
            required: true,
            message: '请输入金额',
            trigger: 'blur'
          },
          {
            validator: checkMoney,
            trigger: 'blur'
          },
          {
            validator: checkOver,
            trigger: 'blur'
          }
        ]
      },
      leftCashAmountYuan: ''
    };
  },
  created() {
    Object.assign(this.updateRedemption, this.currentRedemption);
    this.updateRedemption.amount = (
      Number(this.updateRedemption.amount) / 100
    ).toFixed(2);

    this.leftCashAmountYuan = Number(
      this.filterCent2YuanNoThousandCurrencyAmount(this.leftCashAmount + this.currentRedemption.amount)
    );
  },
  methods: {
    // 保存更新
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          let cashFlow = {
            repay_date: this.updateRedemption.repay_date,
            cash_flow_type: this.updateRedemption.cash_flow_type,
            amount: this.filterYuan2CentAmount(
              this.updateRedemption.amount
            ),
            real_amount: this.filterYuan2CentAmount(
              this.updateRedemption.amount
            ),
            change_amount: 0,
            info: this.updateRedemption.info,
            is_delete: '1',
            audit: '2'
          };
          if (this.updateRedemption.uuid) {
            cashFlow.uuid = this.updateRedemption.uuid;
          }
          this.$emit('updateRedemptionSuccess', this.currentIndex, cashFlow);
          this.loading = false;
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
