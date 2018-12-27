import {
  fetchApi
} from '@/utils/request';

/**
 * 获取业务系统列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.uuid              业务系统uuid，搜索条件，非必填
 *  @param {string} data.system_flag       业务系统唯一标识，搜索条件，非必填
 *  @param {string} data.sys_name          业务系统名称，搜索条件，非必填
 *  @param {string} data.status            业务系统状态，默认全部，1-启用，2-注销，搜索条件，非必填
 */
export async function getSystemList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.SystemList',
    body: data
  });
}

/**
 * 新增业务系统
 * @param {json} data
 *  @param {string} data.system_flag       业务系统唯一标识
 *  @param {string} data.sys_name          业务系统名称
 *  @param {string} data.status            业务系统状态，1-启用，2-注销
 *  @param {string} data.pwd_key           业务系统密钥
 *  @param {string} data.ip_address        服务器ip限制,非必填
 */
export async function addSystem(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.SystemCreateOrUpdate',
    body: data
  });
}

/**
 * 编辑业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 *  @param {string} data.system_flag       业务系统唯一标识
 *  @param {string} data.sys_name          业务系统名称
 *  @param {string} data.status            业务系统状态，1-启用，2-注销
 *  @param {string} data.pwd_key           业务系统密钥
 *  @param {string} data.ip_address        服务器ip限制,非必填
 */
export async function updateSystem(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.SystemCreateOrUpdate',
    body: data
  });
}

/**
 * 启用业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
export async function activateSystem(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
    body: Object.assign({}, data, { status: 1 })
  });
}

/**
 * 注销业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
export async function cancelSystem(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
    body: Object.assign({}, data, { status: 2 })
  });
}

/**
 * 删除业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
export async function deleteSystem(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
    body: Object.assign({}, data, { status: 3 })
  });
}
