<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header"
          class="clearfix">
          <span>新增银行账户</span>
        </div>
        <el-form 
          ref="newAccount"
          :model="newAccount"
          :rules="rules"
          label-width="140px"
          label-position="left"
          size="small">
          <el-form-item 
            label="交易主体"
            prop="main_body_uuid">
            <el-select 
              v-model="newAccount.main_body_uuid"
              placeholder="请选择交易主体"
              filterable
              @visible-change="mainBodySelectToggle">
              <el-option 
                v-for="item in mainBodyList"
                :key="item.uuid"
                :label="item.full_name"
                :value="item.uuid">
              </el-option>
              <el-option 
                v-loading="mainBodyLoading"
                v-if="mainBodyLoading"
                key="mainbodyloading"
                disabled
                element-loading-spinner="el-icon-loading"
                label=""
                value="loading"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label="所属银行"
            prop="bank_dict_key">
            <el-select 
              v-model="newAccount.bank_dict_key"
              filterable
              placeholder="请选择所属银行"
              @change="bankSelectChange">
              <el-option 
                v-for="item in bankList"
                :key="item.dict_key"
                :label="item.dict_value"
                :value="item.dict_key">
              </el-option>
              <el-option 
                v-loading="bankDataLoading"
                v-if="bankDataLoading"
                key="bankDataLoading"
                disabled
                element-loading-spinner="el-icon-loading"
                label=""
                value="loading"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            class="inline-input-group"
            label="开户行所在省市"
            prop="province">
            <el-select 
              v-model="newAccount.province"
              filterable
              class="el-form-item-width-half"
              placeholder="请选择开户行所在省"
              style="padding-right: 20px;"
              @change="handleProvinceChange">
              <el-option 
                v-for="provinceName in bankAddressProvincesList"
                :key="provinceName"
                :label="provinceName"
                :value="provinceName"></el-option>
            </el-select>
            <el-select 
              v-if="newAccount.province"
              v-model="newAccount.city"
              filterable
              class="el-form-item-width-half"
              placeholder="请选择开户行所在市"
              @change="handleCityChange">
              <el-option 
                v-for="(cityName,cityCode) in bankAddressProvincesJson[newAccount.province]"
                :key="cityCode"
                :label="cityName"
                :value="cityCode"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label="开户行全称"
            prop="sub_branch_name">
            <el-select 
              :placeholder="newAccount.bank_dict_key === '' || newAccount.city === '' ? '请先选择所属银行和所属省市' : '请输入或选择开户行全称'"
              v-model="newAccount.sub_branch_name"
              filterable
              allow-create
              @visible-change="branchBankToggle"
              @change="handleSelectBranchBank">
              <el-option 
                v-for="item in branchBankList"
                :key="item.bank_link_code + item.sub_branch_name"
                :label="item.sub_branch_name"
                :value="item.sub_branch_name">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label="开户行行号"
            prop="bank_link_code">
            <el-input 
              :placeholder="newAccount.bank_dict_key === '' || newAccount.city === '' ? '请先选择所属银行和所属省市' : '请输入银行行号或选择开户行全称获得'"
              v-model="newAccount.bank_link_code"
              type="number"></el-input>
          </el-form-item>
          <el-form-item 
            label="银行账号"
            prop="bank_account">
            <el-input 
              v-model="newAccount.bank_account"
              placeholder="请输入银行账号"></el-input>
          </el-form-item>
          <el-form-item 
            label="开户户名"
            prop="account_name">
            <el-input 
              v-model="newAccount.account_name"
              placeholder="请输入开户户名"></el-input>
          </el-form-item>
          <el-form-item 
            label="可访问系统列表"
            prop="interface_priv">
            <el-select 
              v-model="newAccount.interface_priv"
              placeholder="请选择可访问系统列表"
              multiple
              filterable
              @visible-change="systemSelectToggle">
              <el-option 
                v-for="item in systemList"
                :key="item.uuid"
                :label="item.sys_name"
                :value="item.uuid">
              </el-option>
              <el-option 
                v-loading="systemLoading"
                v-if="systemLoading"
                key="systemloading"
                disabled
                element-loading-spinner="el-icon-loading"
                label=""
                value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label="实付类型"
            prop="real_pay_type">
            <el-select 
              v-model="newAccount.real_pay_type"
              filterable
              placeholder="请选择实付类型">
              <el-option 
                v-for="(realPayTypeStr, realPayTypeCode) in realPayTypeJson"
                :key="realPayTypeCode"
                :label="realPayTypeStr"
                :value="realPayTypeCode"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label="开户行地址"
            prop="address">
            <el-input 
              v-model="newAccount.address"
              placeholder="请输入开户行地址"></el-input>
          </el-form-item>
          <el-form-item 
            v-if="bankAddresssAreaCodesJson && newAccount.bank_dict_key"
            label="开户行所属区域"
            prop="area">
            <el-select 
              v-model="newAccount.area"
              filterable
              placeholder="请选择开户行所属区域">
              <el-option 
                v-for="(areaName, areaCode) in bankAddresssAreaCodesJson"
                :key="areaName"
                :label="areaName"
                :value="areaCode"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            class="form-footer"
            label-width="0">
            <el-button 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountAdd') != -1"
              :disabled="loading"
              size="medium"
              type="primary"
              @click="submitForm('newAccount')">保存</el-button>
            <tp-historyback 
              name="accountList"
              size="medium"></tp-historyback>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
import {
  addAccount,
  getBankInfoList,
  getBankDictList,
  getBranchBankList
} from '@/api/account';
import { getMainBodyEffectList } from '@/api/mainBody';
import { getSystemList } from '@/api/system';

import provincesListData from '@/api/provinceList';

export default {
  data() {
    const checkProvinceCity = (rule, value, callback) => {
      if (value && !this.newAccount.city) {
        return callback(new Error('请选择开户行所在市'));
      }

      return callback();
    };
    const checkBankLinkCode = (rule, value, callback) => {
      if (value && !/^\d{12}$/.test(value)) {
        return callback(new Error('请输入正确的银行行号'));
      }

      return callback();
    };
    return {
      loading: false,
      newAccount: {
        sub_branch_name: '',
        bank_name: '',
        short_name: '',
        bank_dict_key: '',
        bank_account: '',
        account_name: '',
        interface_priv: [],
        main_body_uuid: '',
        real_pay_type: '',
        address: '',
        province: '',
        city: '',
        city_name: '',
        area: '',
        bank_link_code: ''
      },
      rules: {
        sub_branch_name: [
          {
            required: true,
            message: '请输入或选择开户行全称',
            trigger: 'change'
          }
        ],
        bank_dict_key: [
          {
            required: true,
            message: '请选择所属银行',
            trigger: 'change'
          }
        ],
        bank_account: [
          {
            required: true,
            message: '请输入银行账号',
            trigger: 'blur'
          }
        ],
        account_name: [
          {
            required: true,
            message: '请输入开户户名',
            trigger: 'blur'
          }
        ],
        main_body_uuid: [
          {
            required: true,
            message: '请选择交易主体',
            trigger: 'change'
          }
        ],
        interface_priv: [
          {
            required: true,
            message: '请选择可访问系统列表',
            trigger: 'change'
          }
        ],
        real_pay_type: [
          {
            required: true,
            message: '请选择实付类型',
            trigger: 'change'
          }
        ],
        address: [
          {
            required: true,
            message: '请输入开户行地址',
            trigger: 'change'
          }
        ],
        province: [
          {
            required: true,
            message: '请选择开户行所在省',
            trigger: 'change'
          },
          {
            validator: checkProvinceCity,
            trigger: 'change'
          }
        ],
        area: [
          {
            required: true,
            message: '请选择开户行所在区域',
            trigger: 'change'
          }
        ],
        bank_link_code: [
          {
            validator: checkBankLinkCode,
            trigger: 'blur'
          }
        ]
      },
      bankList: null,
      branchBankList: [],
      bankAddressProvincesList: [],
      bankAddressProvincesJson: null,
      bankAddresssAreaCodesJson: null,
      bankDataLoading: false,
      mainBodyList: [],
      mainBodyLoading: false,
      systemList: [],
      systemLoading: false
    };
  },
  created() {
    this.getBankListData();
    this.getBankAddrJsonData();
  },
  methods: {
    getBankListData() {
      getBankDictList()
        .then(res => {
          this.bankList = res.data.data;
        })
        .catch(() => {});
    },
    getBankAddrJsonData() {
      // 获取银行省市列表
      this.bankAddressProvincesJson = null;
      this.bankAddressProvincesJson = provincesListData;
      for (let key in provincesListData) {
        this.bankAddressProvincesList.push(key);
      }
    },
    getBankInfoListData(bank) {
      if (this.bankDataLoading) {
        return false;
      }
      this.bankDataLoading = true;
      getBankInfoList({
        bank
      })
        .then(res => {
          const data = res.data;

          // 获取银行地区列表
          this.bankAddresssAreaCodesJson = null;
          if (JSON.stringify(data.areaCodes) != '[]') {
            this.bankAddresssAreaCodesJson = data.areaCodes;
          }

          this.bankDataLoading = false;
        })
        .catch(() => {
          this.bankDataLoading = false;
        });
    },
    getBranchBankListData() {
      if (this.newAccount.short_name && this.newAccount.city_name) {
        getBranchBankList({
          page: 1,
          limit: -1,
          bank_name: this.newAccount.short_name,
          province: this.newAccount.province,
          city: this.newAccount.city_name
        })
          .then(res => {
            this.branchBankList = res.data.data;
          })
          .catch(() => {});
      }
    },
    getMainBodyEffectListData() {
      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      getMainBodyEffectList({
        page: 1,
        limit: -1,
        status: 1
      })
        .then(res => {
          const data = res.data;
          this.mainBodyList = data.data;
          this.mainBodyLoading = false;
        })
        .catch(() => {
          this.mainBodyLoading = false;
        });
    },
    mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyEffectListData();
      }
    },
    bankSelectChange(key) {
      this.bankAddresssAreaCodesJson = null;
      this.newAccount.sub_branch_name = '';
      this.newAccount.bank_name = '';
      this.newAccount.area = '';
      this.newAccount.bank_link_code = '';
      this.branchBankList = [];
      for (let i = 0; i < this.bankList.length; i++) {
        if (this.bankList[i].dict_key === key) {
          this.newAccount.short_name = this.bankList[i].dict_value;
          this.getBranchBankListData();
          break;
        }
      }
      this.getBankInfoListData(key);
    },
    handleProvinceChange() {
      this.newAccount.city = '';
      this.newAccount.city_name = '';
      this.newAccount.sub_branch_name = '';
      this.newAccount.bank_name = '';
      this.newAccount.bank_link_code = '';
      this.branchBankList = [];
    },
    handleCityChange(code) {
      this.newAccount.sub_branch_name = '';
      this.newAccount.bank_name = '';
      this.newAccount.bank_link_code = '';
      this.branchBankList = [];
      if (code) {
        this.newAccount.city_name = this.bankAddressProvincesJson[
          this.newAccount.province
        ][code];
        this.getBranchBankListData();
      } else {
        this.newAccount.city_name = '';
      }
    },
    branchBankToggle(show) {
      if (show && !this.newAccount.short_name) {
        return this.$message.warning('请先选择所属银行');
      }

      if (show && !this.newAccount.city_name) {
        return this.$message.warning('请先选择开户行所属省市');
      }
    },
    handleSelectBranchBank(subBranchName) {
      let hasCode = false;
      for (let i = 0; i < this.branchBankList.length; i++) {
        if (subBranchName == this.branchBankList[i].sub_branch_name) {
          hasCode = true;
          this.newAccount.bank_name = this.branchBankList[i].sub_branch_name;
          this.newAccount.bank_link_code = this.branchBankList[
            i
          ].bank_link_code;
          break;
        }
      }

      // 自定义银行名称
      if (!hasCode) {
        this.newAccount.bank_name = subBranchName;
        this.newAccount.bank_link_code = '';
      }
    },
    getSystemListData() {
      if (this.systemLoading) {
        return false;
      }
      this.systemLoading = true;
      getSystemList({
        page: 1,
        limit: -1
      })
        .then(res => {
          const data = res.data;
          this.systemList = data.data;
          this.systemLoading = false;
        })
        .catch(() => {
          this.systemLoading = false;
        });
    },
    systemSelectToggle(show) {
      if (show && !this.systemLoading && !this.systemList.length) {
        this.getSystemListData();
      }
    },
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交吗？')
            .then(() => {
              this.mshowLoading('正在新增银行账户...');

              const params = JSON.parse(JSON.stringify(this.newAccount));

              params.interface_priv = params.interface_priv.join(',');

              addAccount(params)
                .then(() => {
                  this.loading = false;
                  this.mhideLoading();
                  this.$message.success('新增成功');
                  this.$router.replace({
                    name: 'accountList'
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
