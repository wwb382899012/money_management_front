import {
  fetchApi
} from '@/utils/request';

/**
 * 获取主体列表
 * @param {json} data
 *  @param {string} data.uuid      主体唯一标识uuid，搜索条件，非必填
 *  @param {string} data.name      主体名称，支持简称、全称模糊查询，非必填
 *  @param {string} data.status    主体启用状态标识，1-启用，2-注销，默认全部，非必填
 *  @param {number} data.is_internal 1-内部主体，2-外部主体
 *  @param {number} data.page      当前页码
 *  @param {number} data.limit     每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getMainBodyList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.MainBodyList',
    body: data
  });
}

/**
 * 获取当前账号主体列表
 * @param {json} data
 *  @param {string} data.uuid      主体唯一标识uuid，搜索条件，非必填
 *  @param {string} data.name      主体名称，支持简称、全称模糊查询，非必填
 *  @param {string} data.status    主体启用状态标识，1-启用，2-注销，默认全部，非必填
 *  @param {number} data.page      当前页码
 *  @param {number} data.limit     每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getMainBodyEffectList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.MainBodyEffectList',
    body: data
  });
}

/**
 * 启用主体
 * @param {json} data
 *  @param {string} data.uuid      主体唯一标识uuid
 */
export async function activateMainBody(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.MainBodyStatusModify',
    body: Object.assign({}, data, {
      status: 1
    })
  });
}

/**
 * 注销主体
 * @param {json} data
 *  @param {string} data.uuid      主体唯一标识uuid
 */
export async function cancelMainBody(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.MainBodyStatusModify',
    body: Object.assign({}, data, {
      status: 2
    })
  });
}

/**
 * 新增主体
 * @param {json} data
 *  @param {string} data.full_name      主体全称
 *  @param {string} data.short_name     主体简称
 *  @param {string} data.short_code     主体简码
 */
export async function addMainBody(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.MainBodyCreateOrUpdate',
    body: data
  });
}

/**
 * 更新主体
 * @param {json} data
 *  @param {string} data.uuid           主体唯一标识uuid
 *  @param {string} data.full_name      主体全称
 *  @param {string} data.short_name     主体简称
 *  @param {string} data.short_code     主体简码
 */
export async function updateMainBody(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.MainBodyCreateOrUpdate',
    body: data
  });
}
