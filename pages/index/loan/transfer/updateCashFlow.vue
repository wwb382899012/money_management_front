<template>
  <div class="content-container form-dialog-box">
    <el-row>
      <el-col :md="24">
        <el-form 
          ref="updateCashFlow" 
          :model="updateCashFlow" 
          :rules="rules" 
          label-width="100px" 
          label-position="left" 
          size="small">
          <el-form-item 
            label="日期" 
            prop="repay_date">
            <el-date-picker 
              v-model="updateCashFlow.repay_date" 
              :value-format="datedateFormat" 
              :picker-options="pickerOptions"
              :disabled="updateCashFlow.cash_flow_type == 3"
              align="right" 
              type="date" 
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item 
            label="事项" 
            prop="cash_flow_type">
            <el-input 
              v-if="updateCashFlow.cash_flow_type == 2"
              value="本金回款"
              disabled></el-input>
            <el-input 
              v-if="updateCashFlow.cash_flow_type == 3"
              value="利息回款"
              disabled></el-input>
          </el-form-item>
          <el-form-item 
            label="金额" 
            prop="amount">
            <el-input 
              :disabled="updateCashFlow.cash_flow_type == 3"
              v-model="updateCashFlow.amount" 
              type="number" 
              placeholder="请输入金额">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item
            v-if="updateCashFlow.cash_flow_type == 3"
            label="实际金额"
            prop="real_amount">
            <el-input
              v-model="updateCashFlow.real_amount"
              type="number"
              placeholder="请输入实际金额">
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item 
            label="说明" 
            prop="info">
            <el-input 
              v-model="updateCashFlow.info" 
              type="textarea" 
              placeholder="请输入说明"></el-input>
          </el-form-item>
          <el-form-item 
            class="form-footer" 
            label-width="0">
            <el-button 
              :disabled="loading" 
              size="medium" 
              type="primary" 
              @click="submitForm('updateCashFlow')">保存</el-button>
            <el-button 
              :disabled="loading" 
              size="medium" 
              type="default" 
              @click="$emit('closeDialog')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { validate2Decimal } from '@/utils/validate';

export default {
  props: {
    leftCashAmount: {
      type: Number,
      default() {
        return 0;
      }
    },
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
    currentIndex: {
      type: Number,
      default: 0
    },
    currentCashFlow: {
      type: Object,
      default: null
    }
  },
  data() {
    const checkMoney = (rule, value, callback) => {
      if (value && !validate2Decimal(value)) {
        return callback(new Error('请输入不超过两位小数的非负数值'));
      }

      if (
        value &&
        Number(value).toFixed(2) == '0.00' &&
        this.updateCashFlow.cash_flow_type == 2
      ) {
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

    const checkInterest = (rule, value, callback) => {
      if (value && !validate2Decimal(value)) {
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
      leftCashAmountCent: '',
      leftCashAmountYuan: '',
      updateCashFlow: {
        repay_date: '',
        cash_flow_type: '',
        amount: '',
        real_amount: '',
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
        ],
        real_amount: [
          {
            required: true,
            message: '请输入实际金额',
            trigger: 'blur'
          },
          {
            validator: checkInterest,
            trigger: 'blur'
          }
        ]
      }
    };
  },
  created() {
    this.leftCashAmountCent =
      Number(this.currentCashFlow.amount) + Number(this.leftCashAmount);
    this.leftCashAmountYuan = this.filterCent2YuanNoThousandCurrencyAmount(
      this.leftCashAmountCent
    );

    this.updateCashFlow.cash_flow_type = Number(
      this.updateCashFlow.cash_flow_type
    );

    Object.assign(this.updateCashFlow, this.currentCashFlow);
    this.updateCashFlow.amount = this.filterCent2YuanNoThousandCurrencyAmount(
      this.updateCashFlow.amount
    );
    this.updateCashFlow.real_amount = this.filterCent2YuanNoThousandCurrencyAmount(
      this.updateCashFlow.real_amount
    );
  },
  methods: {
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          const flow = JSON.parse(JSON.stringify(this.updateCashFlow));

          flow.amount = this.filterYuan2CentAmount(flow.amount);
          if (flow.cash_flow_type == 2) {
            flow.real_amount = flow.amount;
          } else {
            flow.real_amount = this.filterYuan2CentAmount(flow.real_amount);
          }
          this.$emit('updateCashFlowSuccess', this.currentIndex, flow);
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
