import {
  fetchApi
} from '@/utils/request';

/**
 * 获取全量业务交易表
 * @param {json} data
 *  @param {number} data.page         当前页码
 *  @param {number} data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getFullTradeReports(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.reports.FullTrade',
    body: data
  });
}

/**
 * 获取EOD日终检查表
 * @param {json} data
 *  @param {boolean} data.generate     是否生成
 *  @param {number}  data.page         当前页码
 *  @param {number}  data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
export async function getEodTradeReports(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.reports.EodTrade',
    body: data
  });
}
