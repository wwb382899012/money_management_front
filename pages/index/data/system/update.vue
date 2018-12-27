<template>
  <div class="content-container form-dialog-box">
    <el-form 
      ref="updateSystem" 
      :model="updateSystem" 
      :rules="rules" 
      label-width="120px" 
      label-position="left" 
      size="small">
      <el-form-item 
        label="业务系统名称" 
        prop="sys_name">
        <el-input 
          v-model="updateSystem.sys_name" 
          placeholder="请输入业务系统名称"></el-input>
      </el-form-item>
      <el-form-item 
        label="业务系统标识" 
        prop="system_flag">
        <el-input 
          v-model="updateSystem.system_flag" 
          placeholder="请输入业务系统标识"></el-input>
      </el-form-item>
      <el-form-item 
        label="密钥Key" 
        prop="pwd_key">
        <el-input 
          v-model="updateSystem.pwd_key" 
          placeholder="请输入密钥"></el-input>
      </el-form-item>
      <el-form-item 
        label="服务器IP" 
        prop="ip_address">
        <el-input 
          v-model="updateSystem.ip_address" 
          placeholder="请输入服务器IP，多个用逗号分隔"></el-input>
      </el-form-item>
      <el-form-item 
        class="form-footer" 
        label-width="0">
        <el-button 
          v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemUpdate') != -1"
          :disabled="loading" 
          size="medium" 
          type="primary" 
          @click="submitForm('updateSystem')">保存</el-button>
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
import { updateSystem } from '@/api/system';
import { validateIP } from '@/utils/validate';

export default {
  props: {
    currentSystem: {
      type: Object,
      default: null
    }
  },
  data() {
    const checkIPAddress = (rule, value, callback) => {
      if (!value) {
        return callback();
      }

      if (value.indexOf(',') == -1) {
        if (!validateIP(value)) {
          return callback(new Error('IP "' + value + '" 格式错误'));
        }
      } else {
        const errorIPs = value.split(',').filter(ip => !validateIP(ip));
        if (errorIPs.length) {
          return callback(new Error('IP "' + errorIPs[0] + '" 格式错误'));
        }
      }

      callback();
    };
    return {
      loading: false,
      updateSystem: {
        uuid: '',
        sys_name: '',
        system_flag: '',
        pwd_key: '',
        ip_address: ''
      },
      rules: {
        sys_name: [
          {
            required: true,
            message: '请输入业务系统名称',
            trigger: 'blur'
          }
        ],
        system_flag: [
          {
            required: true,
            message: '请输入业务系统标识',
            trigger: 'blur'
          }
        ],
        pwd_key: [
          {
            required: true,
            message: '请输入业务系统密钥',
            trigger: 'blur'
          }
        ],
        ip_address: [
          {
            validator: checkIPAddress,
            trigger: 'blur'
          }
        ]
      }
    };
  },
  created() {
    if (this.currentSystem) {
      Object.assign(this.updateSystem, this.currentSystem);
    }
  },
  methods: {
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交吗？')
            .then(() => {
              this.mshowLoading('正在更新业务系统...');

              updateSystem(this.updateSystem)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('更新成功');
                  this.$emit('updateSystemSuccess');
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
