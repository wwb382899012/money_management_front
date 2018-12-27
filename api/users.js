import {
  fetchApi
} from '@/utils/request';

/**
 * 获取用户列表
 * @param {json} data
 *  @param {string} data.username         用户名模糊搜索，非必填
 *  @param {number} data.main_body_uuid   交易主体uuid搜索，非必填
 *  @param {number} data.role_uuid        角色uuid搜索，非必填
 *  @param {number} data.page             当前页码
 *  @param {number} data.limit            每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getUserList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.user.UserList',
    body: data
  });
}

/**
 * 获取用户详情
 * @param {json} data
 *  @param {string} data.user_id 用户user_id
 */
export async function getUserDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.user.UserDetail',
    body: data
  });
}

/**
 * 用户更新
 * @param {json} data
 *  @param {string} data.user_id          用户user_id
 *  @param {string} data.roles_uuids      用户角色uuids，多个用逗号隔开
 *  @param {string} data.main_body_uuids  用户主体uuids，多个用逗号隔开
 */
export async function updateUser(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.user.UserUpdate',
    body: data
  });
}
