import {
  fetchApi
} from '@/utils/request';

/**
 * 获取购买理财计划列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {number} data.hasAudit          审核状态：0-所有，1-无需审核处理，2-需要审核处理，默认0，非必填
 */
export async function getFinancialPlanList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.ListPlan',
    body: data
  });
}
/**
 * 新增理财计划
 * @param {json} data
 *  @param {string} data.product_name      理财产品名称
 *  @param {string} data.bank_dict_value   银行名称
 */
export async function addFinancialPlan(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.AddPlan',
    body: data
  });
}

/**
 * 更新理财计划
 * @param {json} data
 *  @param {string} data.product_name      理财产品名称
 *  @param {string} data.bank_dict_value   银行名称
 */
export async function updateFinancialPlan(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.SavePlan',
    body: data
  });
}

/**
 * 获取理财计划详情
 * @param {json} data
 *  @param {string} data.uuid 理财计划唯一标识uuid
 */
export async function getFinancialPlanDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.DetailPlan',
    body: data
  });
}

/**
 * 获取理财产品列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.product_name      理财产品名称，搜索条件，非必填
 *  @param {string} data.bank_dict_value   银行名称，搜索条件，非必填
 */
export async function getFinancialProductList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.ListProduct',
    body: data
  });
}

/**
 * 新增理财产品
 * @param {json} data
 *  @param {string} data.product_name      理财产品名称
 *  @param {string} data.bank_dict_value   银行名称
 */
export async function addFinancialProduct(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.AddProduct',
    body: data
  });
}

/**
 * 编辑理财产品
 * @param {json} data
 *  @param {string} data.uuid              理财产品uuid
 *  @param {string} data.product_name      理财产品名称
 *  @param {string} data.bank_dict_value   银行名称
 *  @param {number} data.status            启用状态：1-启用，2-注销
 */
export async function updateFinancialProduct(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.UpdateProduct',
    body: data
  });
}

/**
 * 启用理财产品
 * @param {json} data
 *  @param {string} data.uuid              理财产品uuid
 */
export async function activateFinancialProduct(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.StatusProduct',
    body: Object.assign({}, data, { status: 1 })
  });
}

/**
 * 注销理财产品
 * @param {json} data
 *  @param {string} data.uuid              理财产品uuid
 */
export async function cancelFinancialProduct(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.StatusProduct',
    body: Object.assign({}, data, { status: 2 })
  });
}

/**
 * 理财产品审核
 * @param {json} data
 *  @param {string} data.plan_uuid           业务数据唯一标识uuid
 *  @param {string} data.type                审批类型:start-发起审批,audit-审核
 *  @param {string} data.info                审批建议
 *  @param {string} data.approve_type        审批通过或拒绝: 1-审批通过,2-审批拒绝
 *  @param {string} data.bank_water_no       银行流水号
 *  @param {string} data.bank_water_img_uuid 银行流水回单附件
 */
function financialAudit(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.AuditPlan',
    body: data
  })
}

/**
 * 理财产品审核通过
 * @param {json} data
 *  @param {string} data.plan_uuid           业务数据唯一标识uuid
 *  @param {string} data.type                审批类型:start-发起审批,audit-审核
 *  @param {string} data.info                审批建议
 *  @param {string} data.approve_type        审批通过或拒绝: 1-审批通过,2-审批拒绝
 *  @param {string} data.bank_water_no       银行流水号
 *  @param {string} data.bank_water_img_uuid 银行流水回单附件
 */
export async function financialFlowResolve(data) {
  return financialAudit(Object.assign({}, data, { type: 'audit', approve_type: '1' }));
}

/**
 * 理财产品审核通过
 * @param {json} data
 *  @param {string} data.plan_uuid           业务数据唯一标识uuid
 *  @param {string} data.type                审批类型:start-发起审批,audit-审核
 *  @param {string} data.info                审批建议
 *  @param {string} data.approve_type        审批通过或拒绝: 1-审批通过,2-审批拒绝
 *  @param {string} data.bank_water_no       银行流水号
 *  @param {string} data.bank_water_img_uuid 银行流水回单附件
 */
export async function financialFlowReject(data) {
  return financialAudit(Object.assign({}, data, { type: 'audit', approve_type: '2' }));
}

/**
 * 理财产品赎回修改
 * @param {json} data
 *  @param {string} data.plan_uuid           理财计划uuid
 *  @param {string} data.cash_flow           现金流更改数组
 */
export async function saveRedemption(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.SaveRedemption',
    body: data
  });
}

/**
 * 赎回审核
 * @param {json} data
 *  @param {string} data.plan_uuid       理财计划uuid
 *  @param {string} data.cash_flow_uuid  赎回现金流uuid
 */
export async function auditRedemption(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.financial.AuditRedemption',
    body: data
  });
}
