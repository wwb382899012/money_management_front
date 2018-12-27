<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>更新模块: “{{ updateModule.name }}”</span>
        </div>
        <el-form 
          ref="updateModule" 
          :model="updateModule" 
          :rules="rules" 
          label-width="80px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half" 
            label="模块名称" 
            prop="name">
            <el-input 
              v-model="updateModule.name" 
              placeholder="请输入模块名称"></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="上级模块" 
            prop="module_pid_uuid">
            <el-select 
              v-model="updateModule.module_pid_uuid" 
              placeholder="请选择上级模块" 
              filterable
              clearable>
              <el-option 
                v-for="item in moduleList" 
                v-if="item.uuid != updateModule.module_uuid" 
                :label="item.name" 
                :value="item.uuid"
                :key="item.uuid"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            v-if="updateModule.module_pid_uuid" 
            class="el-form-item-width-half" 
            label="模块地址" 
            prop="api_url">
            <el-input 
              v-model="updateModule.api_url" 
              placeholder="请输入模块地址标识"></el-input>
          </el-form-item>
          <el-form-item 
            v-if="updateModule.module_pid_uuid" 
            label="模块功能" 
            prop="son_api">
            <el-input 
              v-model="updateModule.son_api" 
              placeholder="请输入模块功能标识"></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="排序码" 
            prop="sort">
            <el-input-number 
              v-model="updateModule.sort" 
              :min="0" 
              label="请输入排序码"></el-input-number>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="是否启用" 
            prop="status">
            <el-select 
              v-model="updateModule.status" 
              filterable
              placeholder="请选择是否启用">
              <el-option 
                :value="0" 
                label="启用"></el-option>
              <el-option 
                :value="1" 
                label="注销"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="是否菜单" 
            prop="is_menu">
            <el-select 
              v-model="updateModule.is_menu" 
              filterable
              placeholder="请选择是否为菜单">
              <el-option 
                :value="1" 
                label="是"></el-option>
              <el-option 
                :value="2" 
                label="否"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label-width="80px"
            style="padding-top:20px;">
            <el-button 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleUpdate') != -1"
              :disabled="loading" 
              size="medium" 
              type="primary" 
              @click="submitForm('updateModule')">保存</el-button>
            <tp-historyback 
              name="moduleList"
              size="medium"></tp-historyback>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>

</template>
<script>
import { getModuleList, getModuleDetail, updateModule } from '@/api/modules';

export default {
  data() {
    const checkName = (rule, value, callback) => {
      for (let i = 0; i < this.moduleList.length; i++) {
        if (
          this.moduleList[i].name == value &&
          this.moduleList[i].uuid != this.updateModule.module_uuid
        ) {
          return callback(new Error('模块名称已存在'));
        }

        if (this.moduleList[i].children) {
          for (let j = 0; j < this.moduleList[i].children.length; j++) {
            if (
              this.moduleList[i].children[j].name == value &&
              this.moduleList[i].children[j].uuid !=
                this.updateModule.module_uuid
            ) {
              return callback(new Error('模块名称已存在'));
            }
          }
        }
      }
      callback();
    };

    return {
      loading: false,
      updateModule: {
        module_uuid: '',
        module_pid_uuid: '',
        name: '',
        api_url: '',
        son_api: '',
        sort: '',
        status: '',
        is_menu: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入模块名称',
            trigger: 'blur'
          },
          {
            validator: checkName,
            trigger: 'blur'
          }
        ],
        api_url: [
          {
            required: true,
            message: '请输入模块地址标识',
            trigger: 'blur'
          }
        ],
        son_api: [
          {
            required: true,
            message: '请输入模块功能标识',
            trigger: 'blur'
          }
        ],
        sort: [
          {
            required: true,
            message: '请输入排序码',
            trigger: 'blur'
          }
        ],
        status: [
          {
            required: true,
            message: '请选择是否启用',
            trigger: 'change'
          }
        ],
        is_menu: [
          {
            required: true,
            message: '请选择是否为菜单',
            trigger: 'change'
          }
        ]
      },
      moduleList: []
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'moduleList'
      });
    } else {
      this.updateModule.uuid = this.$route.params.uuid;
      getModuleList({})
        .then(res => {
          this.moduleList = res.data;
          this.initUpdateModule();
        })
        .catch(() => {});
    }
  },
  methods: {
    initUpdateModule() {
      getModuleDetail({
        module_uuid: this.updateModule.uuid
      })
        .then(res => {
          const data = res.data;

          for (let key in this.updateModule) {
            if (key == 'module_uuid') {
              this.updateModule.module_uuid = data.uuid;
            } else if (key == 'module_pid_uuid' && data.pid_uuid) {
              this.updateModule.module_pid_uuid = data.pid_uuid;
              for (let i = 0; i < this.moduleList.length; i++) {
                if (this.moduleList[i].uuid == data.pid_uuid) {
                  this.updateModule.pname = this.moduleList[i].name;
                  break;
                }
              }
            } else if (key != 'pname') {
              this.updateModule[key] = data[key];
            }
          }
        })
        .catch(() => {});
    },
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交吗？')
            .then(() => {
              this.mshowLoading('正在更新模块...');
              updateModule(this.updateModule)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('更新成功');
                  this.$router.replace({
                    name: 'moduleList'
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
