import {
  fetchApi
} from '@/utils/request';

import {
  flowStart,
  flowResolve,
  flowReject,
  flowStop
} from './flow';

/**
 * 获取还款指令列表
 * @param {json} data
 *  @param {number}   data.page                   当前页码
 *  @param {number}   data.limit                  每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string}   data.order_create_people    指令发起人，搜索条件，非必填
 *  @param {number}   data.order_status           指令状态，搜索条件，非必填
 *  @param {datetime} data.apply_begin_time       指令到达开始时间，搜索条件，非必填
 *  @param {datetime} data.apply_end_time         指令到达结束时间，搜索条件，非必填
 *  @param {datetime} data.approve_begin_time     指令审核开始时间，搜索条件，非必填
 *  @param {datetime} data.approve_end_time       指令审核结束时间，搜索条件，非必填
 *  @param {string}   data.pay_main_body_uuid     还款方主体uuid，搜索条件，非必填
 *  @param {string}   data.collect_main_body_uuid 贷款方主体uuid，搜索条件，非必填
 */
export async function getRepayOrderList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.RepayOrderList',
    body: data
  });
}

/**
 * 获取还款指令详情
 * @param {json} data
 *  @param {string} data.uuid 还款指令唯一标识uuid
 */
export async function getRepayOrderDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.RepayOrderDetail',
    body: data
  });
}

/**
 * 还款指令通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function repayOrderFlowResolve(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_order'
  });
  return flowResolve(params);
}

/**
 * 还款指令驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function repayOrderFlowReject(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_order'
  });
  return flowReject(params);
}

/**
 * 获取还款调拨列表
 * @param {json} data
 */
export async function getRepayTransferList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.RepayList',
    body: data
  });
}

/**
 * 获取还款调拨详情
 * @param {json} data
 */
export async function getRepayTransferDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.RepayDetail',
    body: data
  });
}

/**
 * 发起还款调拨
 * @param {json} data
 *  @param {string} data.instance_id    业务数据唯一标识uuid
 *  @param {string} data.main_body_uuid 主体唯一标识uuid
 *  @param {string} data.info           审批建议
 *  @param {json}   data.params         其他参数
 */
export async function repayTransferFlowStart(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_apply'
  });
  return flowStart(params);
}

/**
 * 还款调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function repayTransferFlowResolve(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_apply'
  });
  return flowResolve(params);
}

/**
 * 还款调拨驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function repayTransferFlowReject(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_apply'
  });
  return flowReject(params);
}

/**
 * 权签人网银调拨通过
 * @param {json} data 
 */
export async function bankRepayTransferFlowResolve(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.flow.Stop',
    body: Object.assign({}, data, {
      flow_code: 'repay_apply',
      approve_type: '1'
    })
  });
}

/**
 * 还款调拨拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function repayTransferFlowStop(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_apply'
  });
  return flowStop(params);
}

/**
 * 打款重试
 * @param {json} data
 *  @param {string} uuid  付款调拨ID
 *  @param {string} ukPwd UKey密码
 */
export async function repayTransferRetry(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.RepayRetry',
    body: data
  });
}

/**
 * 打款确认成功
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
export async function repayTransferConfirmSuccess(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.RepayConfirmStatus',
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
export async function repayTransferConfirmFail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.RepayConfirmStatus',
    body: Object.assign({}, data, {
      status: 2
    })
  })
}

/**
 * 上传回单
 * @param {json} data
 */
export async function repayUploadWater(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.RepayUploadWater',
    body: data
  });
}

/**
 * 发起修改还款现金流
 * @param {json} data
 *  @param {string} data.instance_id    业务数据唯一标识uuid
 *  @param {string} data.main_body_uuid 主体唯一标识uuid
 *  @param {string} data.info           审批建议
 *  @param {json}   data.params         其他参数
 */
export async function repayTransferFlowEditStart(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_cash_flow_edit'
  });
  return flowStart(params);
}

/**
 * 修改还款现金流调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function repayTransferFlowEditResolve(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_cash_flow_edit'
  });
  return flowResolve(params);
}

/**
 * 修改还款现金流调拨驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function repayTransferFlowEditReject(data) {
  const params = Object.assign({}, data, {
    flow_code: 'repay_cash_flow_edit'
  });
  return flowReject(params);
}
