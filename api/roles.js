import {
  fetchApi
} from '@/utils/request';

/**
 * 获取角色列表
 * @param {json} data
 *  @param {string} data.name         用户名模糊搜索，非必填
 *  @param {number} data.page         当前页码
 *  @param {number} data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getRoleList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.role.RoleList',
    body: data
  });
}

/**
 * 获取角色详情
 * @param {json} data
 *  @param {string} data.role_uuid 角色uuid
 */
export async function getRoleDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.role.RoleDetail',
    body: data
  });
}

/**
 * 角色新增
 * @param {json} data
 *  @param {string} data.name         角色名称
 *  @param {string} data.info         角色描述，非必填
 *  @param {number} data.status       角色状态 1启用，2禁用
 *  @param {array}  data.module_uuids 角色模块权限 [{"xxxx":"edit,del"}]选中的模型数据，允许值:[]
 */
export async function addRole(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.role.RoleAdd',
    body: data
  });
}

/**
 * 角色更新
 * @param {json} data
 *  @param {string} data.role_uuid       角色uuid
 *  @param {string} data.name            角色名称
 *  @param {string} data.info            角色描述，非必填
 *  @param {number} data.status          角色状态 1启用，2禁用
 */
export async function updateRole(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.role.RoleUpdate',
    body: data
  });
}

/**
 * 角色授权
 * @param {json} data
 *  @param {string} data.role_uuid       角色uuid
 *  @param {array}  data.module_uuids    角色模块权限 [{"xxxx":"edit,del"}]选中的模型数据，允许值:[]
 */
export async function updateRoleAuth(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.role.RoleAuthUpdate',
    body: data
  });
}

/**
 * 角色删除
 * @param {json} data
 *  @param {string} data.role_uuid 角色uuid
 */
export async function deleteRole(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.role.RoleDel',
    body: data
  });
}
