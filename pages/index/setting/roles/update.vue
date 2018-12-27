<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>更新角色: “{{ updateRole.name }}”</span>
        </div>
        <el-form 
          ref="updateRole" 
          :model="updateRole" 
          :rules="rules" 
          label-width="80px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half" 
            label="角色名称" 
            prop="name">
            <el-input 
              v-model="updateRole.name" 
              placeholder="请输入角色名称"></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="角色描述" 
            prop="info">
            <el-input 
              v-model="updateRole.info" 
              placeholder="请输入角色描述"></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="角色状态" 
            prop="status">
            <el-select 
              v-model="updateRole.status" 
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
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleUpdate') != -1"
              :disabled="loading" 
              size="medium" 
              type="primary" 
              @click="submitForm('updateRole')">保存</el-button>
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
import { getRoleDetail, updateRole } from '@/api/roles';

export default {
  data() {
    return {
      loading: false,
      updateRole: {
        role_uuid: '',
        name: '',
        info: '',
        status: 1
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
      }
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'roleList'
      });
    } else {
      this.updateRole.role_uuid = this.$route.params.uuid;
      getRoleDetail({
        role_uuid: this.updateRole.role_uuid
      })
        .then(res => {
          const data = res.data;
          for (let key in this.updateRole) {
            if (key != 'role_uuid' && key != 'module_uuids') {
              this.updateRole[key] = data[key];
            }
          }
        })
        .catch(() => {});
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
              this.mshowLoading('正在更新角色...');
              updateRole(this.updateRole)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('更新成功');
                  this.$router.replace({
                    name: 'roleList'
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
