import {
  fetchApi
} from '@/utils/request';

/**
 * 用户登录
 * @param {json} data
 *  @param {string} data.username 用户名
 *  @param {string} data.password 密码
 */
export async function login(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.user.UserLogin',
    body: data
  });
}

/**
 * 用户注销登录
 */
export async function logout() {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.user.UserLogout',
    body: {}
  });
}

/**
 * 获取用户详情
 * @param {json} data
 *  @param {string}  data.user_id      用户ID
 *  @param {boolean} data.auth         是否获取权限目录树,非必填，默认为false
 */
export async function getUserInfo(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.user.UserDetail',
    body: data
  });
}
