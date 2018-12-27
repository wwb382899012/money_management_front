<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box detail-form-box">
      <el-card>
        <div 
          slot="header" 
          class="clearfix">
          <span>模块详情: “{{ detailModule.name }}”</span>
        </div>
        <el-form 
          ref="detailModule" 
          label-width="80px" 
          label-position="left" 
          size="small">
          <el-form-item 
            label="模块名称">
            <div 
              class="sub-text" 
              v-text="detailModule.name"></div>
          </el-form-item>
          <el-form-item 
            v-if="detailModule.module_pid_uuid" 
            label="上级模块">
            <div 
              class="sub-text" 
              v-text="detailModule.pname"></div>
          </el-form-item>
          <el-form-item 
            v-if="detailModule.module_pid_uuid" 
            label="模块地址">
            <div 
              class="sub-text" 
              v-text="detailModule.api_url"></div>
          </el-form-item>
          <el-form-item 
            v-if="detailModule.module_pid_uuid" 
            label="模块功能" 
            prop="son_api">
            <div 
              class="sub-text" 
              v-text="detailModule.son_api"></div>
          </el-form-item>
          <el-form-item 
            label="排序码">
            <div 
              class="sub-text" 
              v-text="detailModule.sort"></div>
          </el-form-item>
          <el-form-item 
            label="是否启用">
            <div 
              class="sub-text" 
              v-text="moduleActiveStatusJson[detailModule.status]"></div>
          </el-form-item>
          <el-form-item 
            class="last-form-line"
            label="是否菜单">
            <div 
              class="sub-text" 
              v-text="isMenuJson[detailModule.is_menu]"></div>
          </el-form-item>
          <el-form-item 
            class="form-footer"
            label-width="0">
            <tp-historyback 
              name="moduleList"
              type="primary"
              size="medium"
              style="width:100px"></tp-historyback>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>

</template>
<script>
import { getModuleList, getModuleDetail } from '@/api/modules';

export default {
  data() {
    return {
      detailModule: {
        module_pid_uuid: '',
        module_uuid: '',
        pname: '',
        name: '',
        api_url: '',
        son_api: '',
        sort: '',
        status: '',
        is_menu: ''
      },
      moduleList: [],
      moduleActiveStatusJson: {
        0: '启用',
        1: '停用'
      },
      isMenuJson: {
        1: '是',
        2: '否'
      }
    };
  },
  created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'moduleList'
      });
    } else {
      getModuleList({})
        .then(res => {
          this.moduleList = res.data;
          this.initDetailModule();
        })
        .catch(() => {});
    }
  },
  methods: {
    initDetailModule() {
      getModuleDetail({
        module_uuid: this.$route.params.uuid
      })
        .then(res => {
          const data = res.data;

          for (let key in this.detailModule) {
            if (key == 'module_uuid') {
              this.detailModule.module_uuid = data.uuid;
            } else if (key == 'module_pid_uuid' && data.pid_uuid) {
              this.detailModule.module_pid_uuid = data.pid_uuid;
              for (let i = 0; i < this.moduleList.length; i++) {
                if (this.moduleList[i].uuid == data.pid_uuid) {
                  this.detailModule.pname = this.moduleList[i].name;
                  break;
                }
              }
            } else if (key != 'pname') {
              this.detailModule[key] = data[key];
            }
          }
        })
        .catch(() => {});
    }
  }
};
</script>
