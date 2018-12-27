<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>更新用户: “{{ updateUser.name }} - {{ updateUser.username }}”</span>
        </div>
        <el-form 
          ref="updateUser" 
          :model="updateUser" 
          :rules="rules" 
          label-width="80px" 
          label-position="left" 
          size="small">
          <el-form-item 
            label="用户主体" 
            prop="main_body_uuids">
            <el-tabs v-model="activeName">
              <el-tab-pane label="内部主体" name="first">
                <el-checkbox 
                  :indeterminate="isIndeterminate" 
                  v-model="checkAll" 
                  @change="handleCheckAllChange">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group 
                  v-model="updateUser.main_body_uuids" 
                  @change="handleCheckedMainBodyChange"
                >
                  <el-checkbox 
                    v-for="item in mainBodyList"
                    :label="item.uuid" 
                    :key="item.uuid" 
                    :value="item.uuid">{{ item.full_name }}</el-checkbox>
                </el-checkbox-group>
              </el-tab-pane>

              <el-tab-pane label="外部主体" name="second">
                <el-checkbox 
                  :indeterminate="isIndeterminateOut" 
                  v-model="checkAllOut" 
                  @change="handleCheckAllChangeOut">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group 
                  v-model="updateUser.main_body_uuids" 
                  @change="handleCheckedMainBodyChange"
                >
                  <el-checkbox 
                    v-for="item in outMainBodyList"
                    :label="item.uuid" 
                    :key="item.uuid" 
                    :value="item.uuid">{{ item.full_name }}</el-checkbox>
                </el-checkbox-group>
              </el-tab-pane>
            </el-tabs>

            
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="用户角色" 
            prop="roles_uuids">
            <el-select 
              :loading="roleLoading" 
              v-model="updateUser.roles_uuids" 
              multiple 
              filterable
              placeholder="请选择用户角色">
              <el-option 
                v-for="item in roleList" 
                :key="item.uuid" 
                :label="item.name" 
                :value="item.uuid">
              </el-option>
              <el-option 
                v-loading="roleLoading" 
                v-if="roleLoading" 
                key="roleloading" 
                disabled 
                element-loading-spinner="el-icon-loading"
                label="" 
                value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="用户状态" 
            prop="status">
            <el-select 
              v-model="updateUser.status" 
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
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.user.UserUpdate') != -1"
              :disabled="loading" 
              size="medium" 
              type="primary" 
              @click="submitForm('updateUser')">保存</el-button>
            <tp-historyback 
              name="userList"
              size="medium"></tp-historyback>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>

</template>
<script>
import { getUserDetail, updateUser } from '@/api/users';
import { getMainBodyList } from '@/api/mainBody';
import { getRoleList } from '@/api/roles';

export default {
  data() {
    return {
      activeName: "first",
      checkAll: false,
      checkAllOut:false,
      isIndeterminate: true,
      isIndeterminateOut: true,
      loading: false,
      updateUser: {
        user_id: '',
        name: '',
        username: '',
        status: '',
        roles_uuids: [],
        main_body_uuids: []
      },
      roleList: [],
      roleLoading: false,
      mainBodyList: [],
      outMainBodyList: [],
      mainBodyLoading: false,
      outMainBodyLoading: false,
      mainBodyUuidList: [],
      outMainBodyUuidList: [],
      bodyPage: {
        page: 1,
        limit: 50,
        count: 0
      },
      rules: {
        roles_uuids: [
          {
            required: true,
            message: '请选择用户角色',
            trigger: 'change'
          }
        ],
        main_body_uuids: [
          {
            required: true,
            message: '请选择用户主体',
            trigger: 'change'
          }
        ],
        status: [
          {
            required: true,
            message: '请选择用户状态',
            trigger: 'change'
          }
        ]
      }
    };
  },
  created() {
    if (!this.$route.params.userid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'userList'
      });
    } else {
      this.updateUser.user_id = this.$route.params.userid;
      this.loading = true;
      getUserDetail({
        user_id: this.updateUser.user_id
      })
        .then(res => {
          const data = res.data;
          this.updateUser.name = data.name;
          this.updateUser.username = data.username;
          this.updateUser.status = data.status;

          for (let i = 0; i < data.role.length; i++) {
            if (data.role[i].uuid) {
              this.updateUser.roles_uuids.push(data.role[i].uuid);
            }
          }

          for (let j = 0; j < data.main_body.length; j++) {
            if (data.main_body[j].uuid) {
              this.updateUser.main_body_uuids.push(data.main_body[j].uuid);
            }
          }
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });

      this.getRoleListData();
      this.getMainBodyListData();
    }
  },
  methods: {
    // 获取角色列表
    getRoleListData() {
      if (this.roleLoading) {
        return false;
      }
      this.roleLoading = true;
      getRoleList({
        page: 1,
        limit: -1
      })
        .then(res => {
          this.roleList = res.data.data;
          this.roleLoading = false;
        })
        .catch(() => {
          this.roleLoading = false;
        });
    },
    // 获取主体列表
    getMainBodyListData() {
      // 内部
      this.getMainBodyListDataPiece();
      // 外部
      this.getOutMainBodyListDataPiece();
    },

    getMainBodyListDataPiece() {
      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      getMainBodyList({
        page: this.bodyPage.page,
        limit: this.bodyPage.limit,
        is_internal: 1
      })
        .then(res => {
          let mainBodyList = res.data.data;
          for (let i = 0; i < mainBodyList.length; i++) {
            this.mainBodyUuidList.push(mainBodyList[i].uuid);
          }
          this.mainBodyList = this.mainBodyList.concat(mainBodyList);

          this.bodyPage.page;
          this.bodyPage.count = Number(res.data.count);
          this.mainBodyLoading = false;
          if (this.bodyPage.page * this.bodyPage.limit < this.bodyPage.count) {
            this.bodyPage.page++;
            this.getMainBodyListDataPiece();
          }
        })
        .catch(() => {
          this.mainBodyLoading = false;
        });
    },

    // 获取外部主体
    getOutMainBodyListDataPiece(page=1) {
      if (this.outMainBodyLoading) {
        return false;
      }
      this.outMainBodyLoading = true;
      getMainBodyList({
        page: page,
        limit: this.bodyPage.limit,
        is_internal: 2
      })
        .then(res => {
          let mainBodyList = res.data.data;
          for (let i = 0; i < mainBodyList.length; i++) {
            this.outMainBodyUuidList.push(mainBodyList[i].uuid);
          }
          this.outMainBodyList = this.outMainBodyList.concat(mainBodyList);

          this.bodyPage.page;
          this.bodyPage.count = Number(res.data.count);
          this.outMainBodyLoading = false;
          if (page * this.bodyPage.limit < this.bodyPage.count) {
            page++;
            this.getOutMainBodyListDataPiece(page);
          }
        })
        .catch(() => {
          this.outMainBodyLoading = false;
        });
    },

    // 提交更新
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交吗？')
            .then(() => {
              this.mshowLoading('正在更新用户...');

              const params = {
                user_id: this.updateUser.user_id,
                roles_uuids: this.updateUser.roles_uuids.join(','),
                main_body_uuids: this.updateUser.main_body_uuids.join(','),
                status: this.updateUser.status
              };

              updateUser(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('更新成功');
                  this.$router.replace({
                    name: 'userList'
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
    },

    // 选择主体修改
    handleCheckAllChange(val) {
      this.updateUser.main_body_uuids = val ? arrayUnion(this.updateUser.main_body_uuids, this.mainBodyUuidList) : arrayDiff(this.updateUser.main_body_uuids, this.mainBodyUuidList);
      this.isIndeterminate = false;
    },
    handleCheckedMainBodyChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.mainBodyUuidList.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.mainBodyUuidList.length;
    },

    
    handleCheckAllChangeOut(val) {
      this.updateUser.main_body_uuids = val ? arrayUnion(this.updateUser.main_body_uuids, this.outMainBodyUuidList) : arrayDiff(this.updateUser.main_body_uuids, this.outMainBodyUuidList);
      console.log(this.updateUser.main_body_uuids);
      this.isIndeterminateOut = false;
    },
    handleCheckedMainBodyChangeOut(value) {
      let checkedCount = value.length;
      this.checkAllOut = checkedCount === this.outMainBodyUuidList.length;
      this.isIndeterminateOut =
        checkedCount > 0 && checkedCount < this.outMainBodyUuidList.length;
    }

  }
};

function arrayUnion(arr1, arr2) {
  var set1 = new Set(arr1);
  var set2 = new Set(arr2);

  let union = Array.from(new Set([...set1, ...set2]));
  return union;
}

function arrayDiff(arr1, arr2) {
  let diff = arr1.filter(key => !arr2.includes(key));
  return diff;
}
</script>

<style lang="scss" scoped>
.form-box .el-form {
  max-width: 100%;
}
.el-checkbox-group {
  display: flex;
  flex-wrap: wrap;
}
.el-checkbox {
  margin-left: 0;
  margin-right: 30px;
}
</style>

