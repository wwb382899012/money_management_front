import {
  fetchApi
} from '@/utils/request';

/**
 * 发起流程
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function flowStart(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.flow.Start',
    body: data
  });
}

/**
 * 流程审批
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 *  @param {number} data.approve_type 审批类型：1-通过，2-拒绝
 */
export async function flowApprove(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.flow.Approve',
    body: data
  });
}

/**
 * 流程审批通过
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function flowResolve(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.flow.Approve',
    body: Object.assign({}, data, { approve_type: '1' })
  });
}

/**
 * 流程审批驳回
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function flowReject(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.flow.Approve',
    body: Object.assign({}, data, { approve_type: '2' })
  });
}

/**
 * 流程审批拒绝
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
export async function flowStop(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.flow.Approve',
    body: Object.assign({}, data, { approve_type: '3' })
  });
}

/**
 * 流程列表
 * @param {json} data
 *  @param {number} data.page        当前页码
 *  @param {number} data.limit       每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.flow_code   业务流程编号
 *  @param {string} data.instance_id 业务数据唯一标识uuid，多个用逗号分隔
 *  @param {string} data.node_code   业务流程节点编号
 *  @param {string} data.status      流程状态查询类型：1-待审批，2-审批通过，3-审批拒绝
 */
export async function getFlowDetailList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.flow.DetailList',
    body: data
  });
}
