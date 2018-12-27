import {
  fetchApi
} from '@/utils/request';

/**
 * 获取银行账户列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.main_body_uuid    主体uuid，搜索条件，非必填
 *  @param {string} data.bank_name         开户行名称，搜索条件，非必填
 *  @param {string} data.real_pay_type     实付类型，0-全部 1-网银 2-银企 3-第三方代付，默认全部，非必填
 */
export async function getAccountList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountList',
    body: data
  });
}

/**
 * 获取银行账户列表
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
 *  @param {string} data.bank_name         开户行名称
 *  @param {string} data.short_name        账户简称
 *  @param {string} data.bank_account      银行账号
 *  @param {string} data.bank_dict_key     银行数据字典key
 *  @param {string} data.interface_priv    可访问系统列表
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
 *  @param {string} data.bank_name         开户行名称
 *  @param {string} data.short_name        账户简称
 *  @param {string} data.bank_account      银行账号
 *  @param {string} data.bank_dict_key     银行数据字典key
 *  @param {string} data.interface_priv    可访问系统列表
 */
export async function updateAccount(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.account.AccountUpdate',
    body: data
  });
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
