<template>
  <div class="app-page-body">
    <tp-breadcrumb></tp-breadcrumb>
    <div class="content-container form-box">
      <el-card>
        <div 
          slot="header"
          class="clearfix">
          <span>更新银行账户</span>
        </div>
        <el-form 
          ref="updateAccount"
          :model="updateAccount"
          :rules="rules"
          label-width="140px"
          label-position="left"
          size="small">
          <el-form-item 
            label="交易主体"
            prop="main_body_uuid">
            <el-select 
              v-model="updateAccount.main_body_uuid"
              filterable
              placeholder="请选择交易主体"
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
                value=""></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label="所属银行"
            prop="bank_dict_key">
            <el-select 
              v-model="updateAccount.bank_dict_key"
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
              v-model="updateAccount.province"
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
              v-if="updateAccount.province"
              v-model="updateAccount.city"
              filterable
              class="el-form-item-width-half"
              placeholder="请选择开户行所在市"
              @change="handleCityChange">
              <el-option 
                v-for="(cityName,cityCode) in bankAddressProvincesJson[updateAccount.province]"
                :key="cityCode"
                :label="cityName"
                :value="cityCode"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label="开户行全称"
            prop="sub_branch_name">
            <el-select 
              :placeholder="updateAccount.bank_dict_key === '' || updateAccount.city === '' ? '请先选择所属银行和所属省市' : '请输入或选择开户行全称'"
              v-model="updateAccount.sub_branch_name"
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
              :placeholder="updateAccount.bank_dict_key === '' || updateAccount.city === '' ? '请先选择所属银行和所属省市' : '请输入银行行号或选择开户行全称获得'"
              v-model="updateAccount.bank_link_code"
              type="number"></el-input>
          </el-form-item>
          <el-form-item 
            label="银行账号"
            prop="bank_account">
            <el-input 
              v-model="updateAccount.bank_account"
              placeholder="请输入银行账号"></el-input>
          </el-form-item>
          <el-form-item 
            label="开户户名"
            prop="account_name">
            <el-input 
              v-model="updateAccount.account_name"
              placeholder="请输入开户户名"></el-input>
          </el-form-item>
          <el-form-item 
            label="可访问系统列表"
            prop="interface_priv">
            <el-select 
              v-model="updateAccount.interface_priv_array"
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
              v-model="updateAccount.real_pay_type"
              filterable
              placeholder="请选择实付类型">
              <el-option 
                :value="0"
                label="网银/银企"></el-option>
              <el-option 
                :value="1"
                label="网银"></el-option>
              <el-option 
                :value="2"
                label="银企"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item 
            label="开户行地址"
            prop="address">
            <el-input 
              v-model="updateAccount.address"
              placeholder="请输入开户行地址"></el-input>
          </el-form-item>
          <el-form-item 
            v-if="bankAddresssAreaCodesJson && updateAccount.bank_dict_key"
            label="开户行所属区域"
            prop="area">
            <el-select 
              v-model="updateAccount.area"
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
            label="余额"
            prop="balance">
            <el-input 
              v-model="updateAccount.balanceStr"
              placeholder="请输入账户余额"
              type="number"
              disabled>
              <template slot="append">元</template>
            </el-input>
          </el-form-item>
          <el-form-item 
            class="form-footer"
            label-width="0">
            <el-button 
              v-if="$store.getters.auth == 'admin' || $store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountUpdate') != -1"
              :disabled="loading"
              size="medium"
              type="primary"
              @click="submitForm('updateAccount')">保存</el-button>
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
  updateAccount,
  getAccountDetail,
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
      if (value && !this.updateAccount.city) {
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
      updateAccount: {
        uuid: '',
        sub_branch_name: '',
        bank_name: '',
        short_name: '',
        bank_dict_key: '',
        bank_account: '',
        account_name: '',
        interface_priv: '',
        interface_priv_array: [],
        main_body_uuid: '',
        real_pay_type: '',
        balance: '',
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
            trigger: 'blur'
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
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'accountList'
      });
    } else {
      this.updateAccount.uuid = this.$route.params.uuid;

      this.getMainBodyEffectListData();
      this.getSystemListData();

      this.getBankAddrJsonData();

      getAccountDetail({
        uuid: this.updateAccount.uuid
      })
        .then(res => {
          const data = res.data;
          Object.assign(this.updateAccount, data);
          this.formatAccountData();
        })
        .catch(() => {});
    }
  },
  methods: {
    // 格式化详情数据
    formatAccountData() {
      this.updateAccount.sub_branch_name = this.updateAccount.bank_name;

      this.updateAccount.real_pay_type = Number(
        this.updateAccount.real_pay_type
      );

      this.updateAccount.balanceStr = (
        Number(this.updateAccount.balance) / 100
      ).toFixed(2);

      if (this.updateAccount.interface_priv) {
        if (this.updateAccount.interface_priv.indexOf(',') == -1) {
          this.updateAccount.interface_priv_array = [];
          this.updateAccount.interface_priv_array.push(
            this.updateAccount.interface_priv
          );
        } else {
          this.updateAccount.interface_priv_array = this.updateAccount.interface_priv.split(
            ','
          );
        }
      } else {
        this.updateAccount.interface_priv_array = [];
      }

      this.getBankInfoListData(this.updateAccount.bank_dict_key);

      this.getBankListData();
      this.getBranchBankListData();
    },

    getBankListData() {
      getBankDictList()
        .then(res => {
          this.bankList = res.data.data;
        })
        .catch(() => {});
    },
    getBranchBankListData() {
      if (this.updateAccount.short_name && this.updateAccount.city_name) {
        getBranchBankList({
          page: 1,
          limit: -1,
          bank_name: this.updateAccount.short_name,
          province: this.updateAccount.province,
          city: this.updateAccount.city_name
        })
          .then(res => {
            this.branchBankList = res.data.data;
          })
          .catch(() => {});
      }
    },
    getBankAddrJsonData() {
      // 获取银行省市列表
      this.bankAddressProvincesJson = null;
      this.bankAddressProvincesJson = provincesListData;
      for (let key in provincesListData) {
        this.bankAddressProvincesList.push(key);
      }
    },
    // 选择银行
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

    bankSelectChange(key) {
      this.bankAddresssAreaCodesJson = null;
      this.updateAccount.sub_branch_name = '';
      this.updateAccount.bank_name = '';
      this.updateAccount.area = '';
      this.updateAccount.bank_link_code = '';
      this.branchBankList = [];
      for (let i = 0; i < this.bankList.length; i++) {
        if (this.bankList[i].dict_key === key) {
          this.updateAccount.short_name = this.bankList[i].dict_value;
          this.getBranchBankListData();
          break;
        }
      }
      if (Number(key) >= 1 && Number(key) <= 5) {
        this.getBankInfoListData(key);
        this.isYQSupport = true;
      } else {
        if (
          this.updateAccount.real_pay_type == '0' ||
          this.updateAccount.real_pay_type == '2'
        ) {
          this.updateAccount.real_pay_type = '1';
        }
        this.isYQSupport = false;
      }
    },
    handleProvinceChange() {
      this.updateAccount.city = '';
      this.updateAccount.city_name = '';
      this.updateAccount.sub_branch_name = '';
      this.updateAccount.bank_name = '';
      this.updateAccount.bank_link_code = '';
      this.branchBankList = [];
    },
    handleCityChange(code) {
      this.updateAccount.sub_branch_name = '';
      this.updateAccount.bank_name = '';
      this.updateAccount.bank_link_code = '';
      this.branchBankList = [];
      if (code) {
        this.updateAccount.city_name = this.bankAddressProvincesJson[
          this.updateAccount.province
        ][code];
        this.getBranchBankListData();
      } else {
        this.updateAccount.city_name = '';
      }
    },
    branchBankToggle(show) {
      if (show && !this.updateAccount.short_name) {
        return this.$message.warning('请先选择所属银行');
      }

      if (show && !this.updateAccount.city_name) {
        return this.$message.warning('请先选择开户行所属省市');
      }
    },
    handleSelectBranchBank(subBranchName) {
      let hasCode = false;
      for (let i = 0; i < this.branchBankList.length; i++) {
        if (subBranchName == this.branchBankList[i].sub_branch_name) {
          hasCode = true;
          this.updateAccount.bank_name = this.branchBankList[i].sub_branch_name;
          this.updateAccount.bank_link_code = this.branchBankList[
            i
          ].bank_link_code;
          break;
        }
      }

      // 自定义银行名称
      if (!hasCode) {
        this.updateAccount.bank_name = subBranchName;
        this.updateAccount.bank_link_code = '';
      }
    },

    // 选择主体
    getMainBodyEffectListData() {
      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      getMainBodyEffectList({
        page: 1,
        limit: -1
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

    // 选择业务系统
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

    // 提交更新
    submitForm(formName) {
      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.mconfirm('确定要提交吗？')
            .then(() => {
              this.mshowLoading('正在更新银行账户...');

              const params = JSON.parse(JSON.stringify(this.updateAccount));
              for (let i = 0; i < this.bankList.length; i++) {
                if (this.bankList[i].dict_key === params.bank_dict_key) {
                  params.short_name = this.bankList[i].dict_value;
                }
              }
              params.interface_priv = params.interface_priv_array.join(',');

              if (params.deal_status == 2) {
                addAccount(params)
                  .then(() => {
                    this.loading = false;
                    this.mhideLoading();
                    this.$message.success('更新成功');
                    this.$router.replace({
                      name: 'accountList'
                    });
                  })
                  .catch(() => {
                    this.loading = false;
                    this.mhideLoading();
                  });
              } else {
                updateAccount(params)
                  .then(() => {
                    this.loading = false;
                    this.mhideLoading();
                    this.$message.success('更新成功');
                    this.$router.replace({
                      name: 'accountList'
                    });
                  })
                  .catch(() => {
                    this.loading = false;
                    this.mhideLoading();
                  });
              }
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
