import {
  asyncRouterMap,
  constantRouterMap
} from '@/routes';

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouter
 * @param roles
 */
function filterAsyncRouter(asyncRouter, authority) {

  // 测试渲染所有权限
  // authority = 'all';

  const accessedRouters = [];
  accessedRouters[0] = asyncRouterMap.dashboard;
  accessedRouters[0].children = [];
  accessedRouters[1] = asyncRouterMap.filter;

  // 默认权限
  if (!authority.length) {
    return accessedRouters;
  }

  // 获取所有权限，用于测试
  if (authority == 'all') {
    let index = 0;
    const childList = asyncRouterMap.children;
    for (let i = 0; i < asyncRouterMap.main.length; i++) {
      const children = asyncRouterMap.main[i];
      if (children.modules && typeof children.modules === 'object' && children.modules.length) {
        accessedRouters[0].children[index] = children;
        accessedRouters[0].children[index].children = [];
        for (let j = 0; j < children.modules.length; j++) {
          accessedRouters[0].children[index].children.push(childList[children.modules[j]]);
        }
        accessedRouters[0].children[index].meta.children = accessedRouters[0].children[index].children;
        index++;
      }
    }
  } else {
    let index = 0;
    const childList = asyncRouterMap.children;
    for (let i = 0; i < asyncRouterMap.main.length; i++) {
      const children = asyncRouterMap.main[i];
      if (children.modules && typeof children.modules === 'object' && children.modules.length) {
        const intersection = children.modules.filter(v => authority.indexOf(v) > -1);

        if (intersection.length) {
          accessedRouters[0].children[index] = children;
          accessedRouters[0].children[index].children = [];
          for (let j = 0; j < intersection.length; j++) {
            if (childList[intersection[j]]) {
              accessedRouters[0].children[index].children.push(childList[intersection[j]]);
            }
          }
          accessedRouters[0].children[index].meta.children = accessedRouters[0].children[index].children;
          index++;
        }
      }
    }
  }

  return accessedRouters;
}

const permission = {
  state: {
    authority: [],
    routers: constantRouterMap,
    asyncRouters: []
  },
  mutations: {
    SET_AUTHORITY: (state, authority) => {
      state.authority = authority;
    },
    SET_ROUTERS: (state, routers) => {
      state.asyncRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    },
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise((resolve) => {
        const {
          authority
        } = data;
        commit('SET_AUTHORITY', authority);
        const accessedRouters = filterAsyncRouter(asyncRouterMap, authority);
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      });
    }
  }
};

export default permission;
