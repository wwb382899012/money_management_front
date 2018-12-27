import {
  fetchApi
} from '@/utils/request';

/**
 * 获取数据字典列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.dict_type         数据字典类型，搜索条件，非必填
 *  @param {string} data.dict_desc         数据字典描述，搜索条件，非必填
 */
export async function getDictList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.DictKvList',
    body: data
  });
}

/**
 * 获取数据字典类型列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.dict_type         数据字典类型，搜索条件，非必填
 *  @param {string} data.dict_desc         数据字典描述，搜索条件，非必填
 */
export async function getDictTypeList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.DictList',
    body: data
  });
}

/**
 * 新增数据字典
 * @param {json} data
 *  @param {string} data.dict_key       数据字典键值
 *  @param {string} data.dict_value     数据字典标签
 *  @param {string} data.dict_type      数据字典类型
 *  @param {string} data.dict_desc      数据字典描述
 *  @param {number} data.index          排序字段
 */
export async function addDict(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.DictCreateOrUpdate',
    body: data
  });
}

/**
 * 更新数据字典
 * @param {json} data
 *  @param {string} data.uuid           数据字典uuid
 *  @param {string} data.dict_key       数据字典键值
 *  @param {string} data.dict_value     数据字典标签
 *  @param {string} data.dict_type      数据字典类型
 *  @param {string} data.dict_desc      数据字典描述
 *  @param {number} data.index          排序字段
 */
export async function updateDict(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.DictCreateOrUpdate',
    body: data
  });
}

/**
 * 删除数据字典
 * @param {json} data
 *  @param {string} data.uuid           数据字典uuid
 */
export async function deleteDict(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.DictKvDel',
    body: data
  });
}

/**
 * 获取融资平台列表
 */
export async function getFinancingPlatformList() {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.base.DictKvList',
    body: {
      page: 1,
      limit: -1,
      dict_type: 'financing_platform'
    }
  });
}