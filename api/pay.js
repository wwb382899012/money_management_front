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
 * 获取付款指令列表
 * @param {json} data
 *  @param {number}   data.page                   当前页码
 *  @param {number}   data.limit                  每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string}   data.order_create_people    指令发起人，搜索条件，非必填
 *  @param {number}   data.order_status           指令状态，搜索条件，非必填
 *  @param {datetime} data.apply_begin_time       指令到达开始时间，搜索条件，非必填
 *  @param {datetime} data.apply_end_time         指令到达结束时间，搜索条件，非必填
 *  @param {datetime} data.approve_begin_time     指令审核开始时间，搜索条件，非必填
 *  @param {datetime} data.approve_end_time       指令审核结束时间，搜索条件，非必填
 *  @param {string}   data.pay_main_body_uuid     付款方主体uuid，搜索条件，非必填
 *  @param {string}   data.collect_main_body_uuid 收款方主体uuid，搜索条件，非必填
 *  @param {number}   data.is_financing           是否需要融资，1-需要，2-不需要，搜索条件，非必填
 */
export async function getPayOrderList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.order.PayOrderList',
    body: data
  });
}

/**
 * 获取付款指令详情
 * @param {json} data
 *  @param {string} data.uuid 付款指令唯一标识uuid
 */
export async function getPayOrderDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.order.PayOrderDetail',
    body: data
  });
}

/**
 * 付款指令通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function payOrderFlowResolve(data) {
  const params = Object.assign({}, data, {
    flow_code: 'pay_order'
  });
  return flowResolve(params);
}

/**
 * 付款指令驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function payOrderFlowReject(data) {
  const params = Object.assign({}, data, {
    flow_code: 'pay_order'
  });
  return flowReject(params);
}

/**
 * 付款指令拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function payOrderFlowStop(data) {
  const params = Object.assign({}, data, {
    flow_code: 'pay_order'
  });
  return flowStop(params);
}

/**
 * 发起付款调拨
 * @param {json} data
 *  @param {string} data.instance_id    业务数据唯一标识uuid
 *  @param {string} data.main_body_uuid 主体唯一标识uuid
 *  @param {string} data.info           审批建议
 *  @param {json}   data.params         其他参数
 */
export async function payTransferFlowStart(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'pay_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'pay_transfer_pay_type_2_code'
  });
  return flowStart(params);
}

/**
 * 获取付款调拨列表
 * @param {json} data
 */
export async function getPayTransferList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.order.PayTransferList',
    body: data
  });
}

/**
 * 获取付款调拨详情
 * @param {json} data
 */
export async function getPayTransferDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.order.PayTransferDetail',
    body: data
  });
}

/**
 * 付款调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function payTransferFlowResolve(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'pay_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'pay_transfer_pay_type_2_code'
  });
  return flowResolve(params);
}

/**
 * 付款调拨驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function payTransferFlowReject(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'pay_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'pay_transfer_pay_type_2_code'
  });
  return flowReject(params);
}

/**
 * 付款调拨拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function payTransferFlowStop(data) {
  const params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
    flow_code: 'pay_transfer_pay_type_1_code'
  }) : Object.assign({}, data, {
    flow_code: 'pay_transfer_pay_type_2_code'
  });
  return flowStop(params);
}

/**
 * 打款重试
 * @param {json} data
 *  @param {string} data.uuid   付款指令唯一标识uuid
 *  @param {string} data.ukPwd  付款UKey密码
 */
export async function payTransferRetry(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.order.PayRetry',
    body: data
  });
}

/**
 * 打款确认成功
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
export async function payTransferConfirmSuccess(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.order.ConfirmStatus',
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
export async function payTransferConfirmFail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.order.ConfirmStatus',
    body: Object.assign({}, data, {
      status: 2
    })
  })
}
