<template>
  <div class="content-container form-dialog-box">
    <el-form 
      ref="updateMainBody" 
      :model="updateMainBody" 
      :rules="rules" 
      label-width="140px" 
      label-position="left" 
      size="small">
      <el-form-item 
        label="主体全称" 
        prop="full_name">
        <el-input 
          v-model="updateMainBody.full_name" 
          placeholder="请输入主体全称"></el-input>
      </el-form-item>
      <el-form-item 
        label="主体简称" 
        prop="short_name">
        <el-input 
          v-model="updateMainBody.short_name" 
          placeholder="请输入主体简称"></el-input>
      </el-form-item>
      <el-form-item 
        label="主体简码" 
        prop="short_code">
        <el-input 
          v-model="updateMainBody.short_code" 
          placeholder="请输入主体简码"></el-input>
      </el-form-item>
      <el-form-item 
        label="是否公司内部主体" 
        prop="is_internal">
        <el-radio-group v-model="updateMainBody.is_internal">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item 
        class="form-footer" 
        label-width="0">
        <el-button 
          v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyUpdate') != -1"
          :disabled="loading" 
          size="medium" 
          type="primary" 
          @click="submitForm('updateMainBody')">保存</el-button>
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
import { updateMainBody } from '@/api/mainBody';

export default {
  props: {
    currentMainBody: {
      type: Object,
      default: null
    }
  },
  data() {
    const checkShortCode = (rule, value, callback) => {
      if (!value && this.updateMainBody.is_internal == 1) {
        return callback(new Error('内部主体必须填写主体简码'));
      }
      if (value && !/^[a-zA-Z]{2,7}$/.test(value)) {
        return callback(new Error('主体简码只能是2到7位的英文字母'));
      }

      return callback();
    };
    return {
      loading: false,
      updateMainBody: {
        uuid: '',
        full_name: '',
        short_name: '',
        short_code: '',
        is_internal: ''
      },
      rules: {
        full_name: [
          {
            required: true,
            message: '请输入主体全称',
            trigger: 'blur'
          }
        ],
        short_name: [
          {
            required: true,
            message: '请输入主体简称',
            trigger: 'blur'
          }
        ],
        short_code: [
          {
            validator: checkShortCode,
            trigger: 'blur'
          }
        ],
        is_internal: [
          {
            required: true,
            message: '请选择是否公司内部主体',
            trigger: 'change'
          }
        ]
      }
    };
  },
  created() {
    if (this.currentMainBody) {
      Object.assign(this.updateMainBody, this.currentMainBody);
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
              this.mshowLoading('正在更新主体...');

              const params = JSON.parse(JSON.stringify(this.updateMainBody));
              params.short_code = params.short_code
                ? params.short_code.toUpperCase()
                : '';

              updateMainBody(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('更新成功');
                  this.$emit('updateMainBodySuccess');
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
