import {
  fetchApi
} from '@/utils/request';

/**
 * 获取消息列表通用接口
 * @param {json} data
 *  @param {number} data.page         当前页码
 *  @param {number} data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {number} data.status       1不限制 2未读 3已读 非必填，默认1
 */
export async function getNewsList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.news.ListNews',
    body: data
  });
}

/**
 * 获取未读消息列表
 * @param {json} data
 *  @param {string} data.sessionToken 会话token前缀
 *  @param {number} data.page         当前页码
 *  @param {number} data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getUnreadNewsList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.news.ListNews',
    body: Object.assign({}, data, { status: 2 })
  });
}

/**
 * 获取已读消息列表
 * @param {json} data
 *  @param {number} data.page         当前页码
 *  @param {number} data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getReadNewsList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.news.ListNews',
    body: Object.assign({}, data, { status: 3 })
  });
}

/**
 * 标记消息已读
 * @param {json} data
 *  @param {array} data.news_uuids 消息uuid列表
 */
export async function setReadNews(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.news.ReadNews',
    body: data
  });
}
