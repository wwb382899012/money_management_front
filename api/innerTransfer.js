import {
  fetchApi
} from '@/utils/request';

import {
  flowResolve,
  flowReject
} from './flow';

/**
 * 获取内部调拨列表
 * @param {json} data
 *  @param {number}   data.page                   当前页码
 *  @param {number}   data.limit                  每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getInnerTransferList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.inner.InnerTransferList',
    body: data
  });
}

/**
 * 获取内部调拨详情
 * @param {json} data
 *  @param {string}   data.uuid                   内部调拨uuid
 */
export async function getInnerTransferDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.inner.InnerTransferDetail',
    body: data
  });
}

/**
 * 新增内部调拨
 * @param {json} data
 * @param {string} data.main_body_uuid            调拨主体uuid
 * @param {string} data.opt_type                  提交操作：1-保存，2-提交
 * @param {string} data.pay_account_uuid          付款银行uuid
 * @param {string} data.pay_bank_name             付款银行名称
 * @param {string} data.pay_bank_account          付款银行账号
 * @param {string} collect_account_uuid           收款银行uuid
 * @param {string} collect_bank_name              收款银行名称
 * @param {string} collect_bank_account           收款银行账号
 * @param {string} currency                       币种
 * @param {string} amount                         调拨金额
 * @param {string} hope_deal_date                 要求调拨日期
 * @param {string} real_pay_type                  实付方式
 * @param {string} pay_remark                     银企付款备注
 * @param {string} annex_uuids                    附件
 * @param {string} special_require                调拨说明
 */
export async function addInnerTransfer(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.inner.CreateTransfer',
    body: data
  });
}

/**
 * 更新内部调拨
 * @param {json} data
 * @param {string} data.uuid                      内部调拨uuid
 * @param {string} data.opt_type                  提交操作：1-保存，2-提交
 * @param {string} data.main_body_uuid            调拨主体uuid
 * @param {string} data.pay_account_uuid          付款银行uuid
 * @param {string} data.pay_bank_name             付款银行名称
 * @param {string} data.pay_bank_account          付款银行账号
 * @param {string} collect_account_uuid           收款银行uuid
 * @param {string} collect_bank_name              收款银行名称
 * @param {string} collect_bank_account           收款银行账号
 * @param {string} currency                       币种
 * @param {string} amount                         调拨金额
 * @param {string} hope_deal_date                 要求调拨日期
 * @param {string} real_pay_type                  实付方式
 * @param {string} pay_remark                     银企付款备注
 * @param {string} annex_uuids                    附件
 * @param {string} special_require                调拨说明
 */
export async function updateInnerTransfer(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.inner.UpdateTransfer',
    body: data
  });
}

/**
 * 内部调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function innerTransferFlowResolve(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'inner_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'inner_transfer_pay_type_2_code'
  });
  return flowResolve(params);
}

/**
 * 内部调拨拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function innerTransferFlowReject(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'inner_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'inner_transfer_pay_type_2_code'
  });
  return flowReject(params);
}

/**
 * 打款重试
 * @param {json} data
 *  @param {string} uuid  付款调拨ID
 *  @param {string} ukPwd UKey密码
 */
export async function innerTransferRetry(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.inner.PayRetry',
    body: data
  });
}

/**
 * 打款确认成功
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
export async function innerTransferConfirmSuccess(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.inner.ConfirmStatus',
    body: Object.assign({}, data, {
      status: 1
    })
  })
}

/**
 * 打款确认失败
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
export async function innerTransferConfirmFail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.inner.ConfirmStatus',
    body: Object.assign({}, data, {
      status: 2
    })
  })
}
