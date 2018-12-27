<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>新增角色</span>
        </div>
        <el-form 
          ref="newRole" 
          :model="newRole" 
          :rules="rules" 
          label-width="80px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half" 
            label="角色名称" 
            prop="name">
            <el-input 
              v-model="newRole.name" 
              placeholder="请输入角色名称"></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="角色描述" 
            prop="info">
            <el-input 
              v-model="newRole.info" 
              placeholder="请输入角色描述"></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="角色状态" 
            prop="status">
            <el-select 
              v-model="newRole.status" 
              filterable
              placeholder="请选择是否启用">
              <el-option 
                :value="1" 
                label="启用"></el-option>
              <el-option 
                :value="2" 
                label="停用"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label-width="80px"
            style="padding-top: 20px">
            <el-button 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleAdd') != -1"
              :disabled="loading" 
              size="medium" 
              type="primary" 
              @click="submitForm('newRole')">保存</el-button>
            <tp-historyback 
              name="roleList"
              size="medium"></tp-historyback>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>

</template>
<script>
import { addRole } from '@/api/roles';

export default {
  data() {
    return {
      loading: false,
      newRole: {
        name: '',
        info: '',
        status: 1,
        module_uuids: []
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入角色名称',
            trigger: 'blur'
          }
        ],
        status: [
          {
            required: true,
            message: '请选择是否启用角色',
            trigger: 'change'
          }
        ]
      },
      moduleList: []
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
              this.mshowLoading('正在新增角色...');
              addRole(this.newRole)
                .then(res => {
                  this.loading = false;
                  this.mhideLoading();
                  this.malert('新增成功，请继续为角色添加权限', () => {
                    this.$router.replace({
                      name: 'roleAuthUpdate',
                      params: {
                        uuid: res.data.role_uuid
                      }
                    });
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
