import {
  fetchApi
} from '@/utils/request';

/**
 * 获取Ukey读取密码
 * @param {json} data
 *  @param {string} data.user_account            用户账号
 */
export default async function getUkeyPwd(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.pay.GetUKPwd',
    body: data
  });
}
