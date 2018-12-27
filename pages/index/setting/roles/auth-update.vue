<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>角色授权: ”{{ updateRole.name }}“</span>
        </div>
        <el-tree 
          ref="moduleList" 
          :data="moduleList" 
          :default-expanded-keys="selectedKeys" 
          :props="defaultProps" 
          show-checkbox 
          node-key="uuid"
          @check-change="handleCheckChange">
        </el-tree>
        <el-form 
          ref="updateRole" 
          :model="updateRole" 
          label-width="0" 
          label-position="left" 
          size="small">
          <el-form-item 
            label-width="0"
            style="padding-top: 20px">
            <el-button 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleAuthUpdate') != -1"
              :disabled="loading" 
              size="medium" 
              type="primary" 
              @click="submitForm">保存</el-button>
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
import { getModuleList } from '@/api/modules';
import { getRoleDetail, updateRoleAuth } from '@/api/roles';

export default {
  data() {
    return {
      changed: false,
      loading: false,
      updateRole: {
        role_uuid: '',
        name: '',
        info: '',
        status: '1',
        module_uuids: []
      },
      moduleList: [],
      selectedKeys: [],
      defaultProps: {
        children: 'children',
        label: function(data) {
          return data.api_url ? data.name + ' | ' + data.api_url : data.name;
        }
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
      getModuleList({})
        .then(res => {
          this.moduleList = res.data;
          this.getRoleDetailData();
        })
        .catch(() => {});
    }
  },
  methods: {
    // 获取和格式化角色详情数据
    getRoleDetailData() {
      getRoleDetail({
        role_uuid: this.$route.params.uuid
      })
        .then(res => {
          const data = res.data;
          for (let key in this.updateRole) {
            if (key != 'role_uuid') {
              this.updateRole[key] = data[key];
              if (key == 'module_uuids') {
                if (data[key]) {
                  for (let i = 0; i < data[key].length; i++) {
                    if (data[key][i].son) {
                      if (data[key][i].son.indexOf(',') == -1) {
                        this.selectedKeys.push(
                          data[key][i].module_uuid + '_' + data[key][i].son
                        );
                      } else {
                        const sonList = data[key][i].son.split(',');
                        for (let j = 0; j < sonList.length; j++) {
                          this.selectedKeys.push(
                            data[key][i].module_uuid + '_' + sonList[j]
                          );
                        }
                      }
                    }
                  }
                  this.$refs.moduleList.setCheckedKeys(this.selectedKeys);
                } else {
                  this.updateRole[key] = [];
                }
              }
            }
          }
          this.$store.dispatch('SetCurrentRole', data);
        })
        .catch(() => {});
    },
    // 获取更新标记
    handleCheckChange() {
      this.changed = true;
    },
    // 提交授权
    submitForm() {
      if (this.loading) return false;
      this.loading = true;

      this.mconfirm('确定要提交吗？')
        .then(() => {
          // 获取授权数据

          // 获取目前被选中的节点所组成的数组
          const checkedKeys = this.$refs.moduleList.getCheckedKeys();
          // 获取目前被选中节点的key所组成的数组
          // const checkedNodes = this.$refs.moduleList.getCheckedNodes();

          // 格式化数据
          let selectedList = [];
          let tmpList = {};

          for (let i = 0; i < checkedKeys.length; i++) {
            if (checkedKeys[i].indexOf('_') != -1) {
              const key = checkedKeys[i].split('_')[0];
              const val = checkedKeys[i].split('_')[1];

              tmpList[key] = tmpList[key] ? tmpList[key] + ',' + val : val;
            }
          }

          for (let key in tmpList) {
            selectedList.push({
              [key]: tmpList[key]
            });
          }

          this.mshowLoading('正在更新角色授权...');
          updateRoleAuth({
            role_uuid: this.updateRole.role_uuid,
            module_uuids: selectedList
          })
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
    }
  }
};
</script>
