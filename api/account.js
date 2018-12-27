import {
  fetchApi
} from '@/utils/request';

import {
  flowResolve,
  flowReject
} from './flow';

import {
  getDictList
} from './dict';

/**
 * 获取银行账户列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.main_body_uuid    主体uuid，搜索条件，非必填
 *  @param {string} data.bank_name         开户行名称，搜索条件，非必填
 *  @param {string} data.real_pay_type     实付类型，0-全部 1-网银 2-银企 3-第三方代付，默认全部，非必填
 */
export async function getEffectAccountList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountEffectList',
    body: data
  });
}

/**
 * 获取银行账户列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.main_body_uuid    主体uuid，搜索条件，非必填
 *  @param {string} data.bank_name         开户行名称，搜索条件，非必填
 *  @param {string} data.real_pay_type     实付类型，0-全部 1-网银 2-银企 3-第三方代付，默认全部，非必填
 */
export async function getAllAccountList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountList',
    body: data
  });
}

/**
 * 获取银行账户详情
 * @param {json} data
 *  @param {number} data.uuid              账户uuid
 */
export async function getAccountDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountDetail',
    body: data
  });
}

/**
 * 新增银行账户
 * @param {json} data
 *  @param {string} data.main_body_uuid    主体唯一标识uuid
 *  @param {string} data.bank_dict_key     银行数据字典key
 *  @param {string} data.bank_name         开户行名称
 *  @param {string} data.short_name        账户简称
 *  @param {string} data.bank_account      银行账号
 *  @param {string} data.account_name      开户名
 *  @param {string} data.interface_priv    可访问系统列表，多个逗号隔开
 *  @param {string} data.real_pay_type     实付类型，0-网银/银企，1-网银，2-银企
 *  @param {string} data.address           开户行地址
 *  @param {string} data.province          开户行省
 *  @param {string} data.city              开户行市code
 *  @param {string} data.city_name         开户行市名
 *  @param {string} data.area              开户行所属区域
 *  @param {string} data.single_pay_limit  单笔支付限额
 */
export async function addAccount(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountAdd',
    body: data
  });
}

/**
 * 编辑银行账户
 * @param {json} data
 *  @param {string} data.uuid              账户uuid
 *  @param {string} data.main_body_uuid    主体唯一标识uuid
 *  @param {string} data.bank_dict_key     银行数据字典key
 *  @param {string} data.bank_name         开户行名称
 *  @param {string} data.short_name        账户简称
 *  @param {string} data.bank_account      银行账号
 *  @param {string} data.account_name      开户名
 *  @param {string} data.interface_priv    可访问系统列表，多个逗号隔开
 *  @param {string} data.real_pay_type     实付类型，0-网银/银企，1-网银，2-银企
 *  @param {string} data.address           开户行地址
 *  @param {string} data.province          开户行省
 *  @param {string} data.city              开户行市code
 *  @param {string} data.city_name         开户行市名
 *  @param {string} data.area              开户行所属区域
 *  @param {string} data.single_pay_limit  单笔支付限额
 */
export async function updateAccount(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountUpdate',
    body: data
  });
}

/**
 * 注销银行账户
 * @param {json} data
 *  @param {string} data.uuid              账户uuid
 */
export async function delAccount(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountDel',
    body: data
  });
}
/**
 * 启用银行账户
 * @param {json} data
 *  @param {string} data.uuid              账户uuid
 */
export async function activateAccount(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountEnable',
    body: data
  });
}

/**
 * 账户新增、删除、启用、更新审核通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.flow_code    审批流名称
    // account_add_apply
    // account_del_apply
    // account_enable_apply
    // account_update_apply
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function accountFlowResolve(data) {
  data.params = {};
  return flowResolve(data);
}

/**
 * 账户新增、删除、启用、更新审核驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.flow_code    审批流名称
    // account_add_apply
    // account_del_apply
    // account_enable_apply
    // account_update_apply
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function accountFlowReject(data) {
  data.params = {};
  return flowReject(data);
}

/**
 * 查询银行地址列表
 * @param {json} data
 *  @param {string} data.bank 数据字典类型：1-兴业银行，2-招商银行，3-建设银行，4-平安银行，5-农业银行
 */
export async function getBankInfoList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.BaseBankQuery',
    body: data
  });
}

/**
 * 查询银行简称字典列表
 */
export async function getBankDictList() {
  return getDictList({
    page: 1,
    limit: -1,
    dict_type: 'bank'
  });
}

/**
 * 查询银行支行和行号列表
 * 
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.bank_name         银行名称
 *  @param {string} data.province          省
 *  @param {string} data.city              市
 */
export async function getBranchBankList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.BankBaseList',
    body: Object.assign({}, {
      page: 1,
      limit: -1
    }, data)
  });
}
