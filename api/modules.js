import {
  fetchApi
} from '@/utils/request';

/**
 * 获取模块列表
 * @param {json} data
 *  @param {string} data.name         模块名称，非必填
 */
export async function getModuleList(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.module.ModuleList',
    body: data
  });
}

/**
 * 获取模块详情
 * @param {json} data
 *  @param {string} data.module_uuid 模块uuid
 */
export async function getModuleDetail(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.module.ModuleDetail',
    body: data
  });
}

/**
 * 模块新增
 * @param {json} data
 *  @param {string} data.module_pid_uuid       父级模块uuid，非必填
 *  @param {string} data.name                  模块名称
 *  @param {number} data.sort                  模块排序码
 *  @param {number} data.status                模块状态 0 启用 1停用
 *  @param {string} data.api_url               模块地址标识
 *  @param {string} son_api                    模块功能标识
 *  @param {number} data.is_menu               1菜单 2非菜单
 */
export async function addModule(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.module.ModuleAdd',
    body: data
  });
}

/**
 * 模块更新
 * @param {json} data
 *  @param {string} data.module_pid_uuid       父级模块uuid，非必填
 *  @param {string} data.module_uuid           模块uuid
 *  @param {string} data.name                  模块名称
 *  @param {number} data.sort                  模块排序码
 *  @param {number} data.status                模块状态 0 启用 1停用
 *  @param {string} data.api_url               模块地址标识
 *  @param {string} son_api                    模块功能标识
 *  @param {number} data.is_menu               1菜单 2非菜单
 */
export async function updateModule(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.module.ModuleUpdate',
    body: data
  });
}

/**
 * 模块删除
 * @param {json} data
 *  @param {string} data.module_uuid 模块uuid
 */
export async function deleteModule(data) {
  return fetchApi({
    serviceName: 'com.jyblife.logic.bg.module.ModuleDel',
    body: data
  });
}
