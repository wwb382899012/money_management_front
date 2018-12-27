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
 * 获取借款指令列表
 * @param {json} data
 *  @param {number}   data.page                   当前页码
 *  @param {number}   data.limit                  每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string}   data.order_create_people    指令发起人，搜索条件，非必填
 *  @param {number}   data.order_status           指令状态，搜索条件，非必填
 *  @param {datetime} data.apply_begin_time       指令到达开始时间，搜索条件，非必填
 *  @param {datetime} data.apply_end_time         指令到达结束时间，搜索条件，非必填
 *  @param {datetime} data.approve_begin_time     指令审核开始时间，搜索条件，非必填
 *  @param {datetime} data.approve_end_time       指令审核结束时间，搜索条件，非必填
 *  @param {string}   data.pay_main_body_uuid     借款方主体uuid，搜索条件，非必填
 *  @param {string}   data.collect_main_body_uuid 贷款方主体uuid，搜索条件，非必填
 */
export async function getLoanOrderList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.LoanOrderList',
    body: Object.assign({}, data, {
      loan_type: '1'
    })
  });
}

/**
 * 获取借款指令详情
 * @param {json} data
 *  @param {string} data.uuid 借款指令唯一标识uuid
 */
export async function getLoanOrderDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.LoanOrderDetail',
    body: data
  });
}

/**
 * 借款指令通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function loanOrderFlowResolve(data) {
  const params = Object.assign({}, data, {
    flow_code: 'loan_order'
  });
  return flowResolve(params);
}

/**
 * 借款指令驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function loanOrderFlowReject(data) {
  const params = Object.assign({}, data, {
    flow_code: 'loan_order'
  });
  return flowReject(params);
}

/**
 * 借款指令拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function loanOrderFlowStop(data) {
  const params = Object.assign({}, data, {
    flow_code: 'loan_order'
  });
  return flowStop(params);
}

/**
 * 发起借款调拨
 * @param {json} data
 *  @param {string} data.instance_id    业务数据唯一标识uuid
 *  @param {string} data.main_body_uuid 主体唯一标识uuid
 *  @param {string} data.info           审批建议
 *  @param {json}   data.params         其他参数
 */
export async function loanTransferFlowStart(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'loan_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'loan_transfer_pay_type_2_code'
  });
  return flowStart(params);
}

/**
 * 获取借款调拨列表
 * @param {json} data
 */
export async function getLoanTransferList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.LoanTransferList',
    body: Object.assign({}, data, {
      loan_type: '1'
    })
  });
}

/**
 * 获取借款调拨详情
 * @param {json} data
 */
export async function getLoanTransferDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.LoanTransferDetail',
    body: data
  });
}

/**
 * 借款调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function loanTransferFlowResolve(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'loan_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'loan_transfer_pay_type_2_code'
  });
  return flowResolve(params);
}

/**
 * 借款调拨驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function loanTransferFlowReject(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'loan_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'loan_transfer_pay_type_2_code'
  });
  return flowReject(params);
}

/**
 * 借款调拨拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function loanTransferFlowStop(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'loan_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'loan_transfer_pay_type_2_code'
  });
  return flowStop(params);
}

/**
 * 打款重试
 * @param {json} data
 *  @param {string} uuid  付款调拨ID
 *  @param {string} ukPwd UKey密码
 */
export async function loanTransferRetry(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.PayRetry',
    body: data
  });
}

/**
 * 打款确认成功
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
export async function loanTransferConfirmSuccess(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.ConfirmStatus',
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
export async function loanTransferConfirmFail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.loan.ConfirmStatus',
    body: Object.assign({}, data, {
      status: 2
    })
  })
}
