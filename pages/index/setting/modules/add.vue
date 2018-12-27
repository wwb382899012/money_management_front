<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>新增模块</span>
        </div>
        <el-form 
          ref="newModule" 
          :model="newModule" 
          :rules="rules" 
          label-width="80px" 
          label-position="left" 
          size="small">
          <el-form-item 
            class="el-form-item-width-half" 
            label="模块名称" 
            prop="name">
            <el-input 
              v-model="newModule.name" 
              placeholder="请输入模块名称"></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="上级模块" 
            prop="module_pid_uuid">
            <el-select 
              v-model="newModule.module_pid_uuid" 
              clearable 
              filterable
              placeholder="请选择上级模块">
              <el-option 
                v-for="item in moduleList" 
                :label="item.name" 
                :value="item.uuid" 
                :key="item.uuid"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            v-if="newModule.module_pid_uuid" 
            class="el-form-item-width-half" 
            label="模块地址" 
            prop="api_url">
            <el-input 
              v-model="newModule.api_url" 
              placeholder="请输入模块地址标识"></el-input>
          </el-form-item>
          <el-form-item 
            v-if="newModule.module_pid_uuid" 
            label="模块功能" 
            prop="son_api">
            <el-input 
              v-model="newModule.son_api" 
              placeholder="请输入模块功能标识"></el-input>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="排序码" 
            prop="sort">
            <el-input-number 
              v-model="newModule.sort" 
              :min="0" 
              label="请输入排序码"></el-input-number>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="是否启用" 
            prop="status">
            <el-select 
              v-model="newModule.status" 
              filterable
              placeholder="请选择是否启用">
              <el-option 
                :value="0" 
                label="启用"></el-option>
              <el-option 
                :value="1" 
                label="停用"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            class="el-form-item-width-half" 
            label="是否菜单" 
            prop="is_menu">
            <el-select 
              v-model="newModule.is_menu" 
              filterable
              placeholder="请选择是否为菜单">
              <el-option 
                :value="1" 
                label="是菜单"></el-option>
              <el-option 
                :value="2" 
                label="非菜单"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label-width="80px"
            style="padding-top: 20px">
            <el-button 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleAdd') != -1"
              :disabled="loading" 
              size="medium" 
              type="primary" 
              @click="submitForm('newModule')">保存</el-button>
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
import { getModuleList, addModule } from '@/api/modules';

export default {
  data() {
    const checkName = (rule, value, callback) => {
      for (let i = 0; i < this.moduleList.length; i++) {
        if (this.moduleList[i].name == value) {
          return callback(new Error('模块名称已存在'));
        }

        if (this.moduleList[i].children) {
          for (let j = 0; j < this.moduleList[i].children.length; j++) {
            if (this.moduleList[i].children[j].name == value) {
              return callback(new Error('模块名称已存在'));
            }
          }
        }
      }

      return callback();
    };
    return {
      loading: false,
      newModule: {
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
    getModuleList({})
      .then(res => {
        this.moduleList = res.data;
      })
      .catch(() => {});
  },
  methods: {
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交吗？')
            .then(() => {
              this.mshowLoading('正在新增模块...');
              addModule(this.newModule)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('新增成功');
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
