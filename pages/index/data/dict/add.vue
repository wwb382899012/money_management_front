<template>
  <div class="content-container form-dialog-box">
    <el-form 
      ref="newDict" 
      :model="newDict" 
      :rules="rules" 
      label-width="60px" 
      label-position="left" 
      size="small">
      <div class="form-line">
        <el-form-item 
          label="键值" 
          prop="dict_key">
          <el-input 
            v-model="newDict.dict_key" 
            placeholder="请输入键值"></el-input>
        </el-form-item>
        <el-form-item 
          label="标签" 
          prop="dict_value">
          <el-input 
            v-model="newDict.dict_value" 
            placeholder="请输入标签"></el-input>
        </el-form-item>
      </div>
      <div class="form-line">
        <el-form-item 
          label="类型" 
          prop="dict_type">
          <el-input 
            v-model="newDict.dict_type" 
            placeholder="请输入类型"></el-input>
        </el-form-item>
        <el-form-item 
          label="描述" 
          prop="dict_desc">
          <el-input 
            v-model="newDict.dict_desc" 
            placeholder="请输入描述"></el-input>
        </el-form-item>
      </div>
      <el-form-item 
        class="el-form-item-width-half" 
        label="排序" 
        prop="index">
        <el-input 
          v-model="newDict.index" 
          placeholder="请输入排序"></el-input>
      </el-form-item>
      <el-form-item 
        class="form-footer" 
        label-width="0">
        <el-button 
          v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.base.DictCreate') != -1"
          :disabled="loading" 
          size="medium" 
          type="primary" 
          @click="submitForm('newDict')">保存</el-button>
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
import { addDict } from '@/api/dict';

export default {
  data() {
    return {
      loading: false,
      newDict: {
        dict_key: '',
        dict_value: '',
        dict_type: '',
        dict_desc: '',
        index: ''
      },
      rules: {
        dict_key: [
          {
            required: true,
            message: '请输入键值',
            trigger: 'blur'
          }
        ],
        dict_value: [
          {
            required: true,
            message: '请输入标签',
            trigger: 'blur'
          }
        ],
        dict_type: [
          {
            required: true,
            message: '请输入类型',
            trigger: 'blur'
          }
        ],
        dict_desc: [
          {
            required: true,
            message: '请输入描述',
            trigger: 'blur'
          }
        ],
        index: [
          {
            required: true,
            message: '请输入排序',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交吗？')
            .then(() => {
              this.mshowLoading('正在新增数据字典...');

              addDict(this.newDict)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('新增成功');
                  this.$emit('addDictSuccess');
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
