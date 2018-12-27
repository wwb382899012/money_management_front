import NProgress from 'nprogress';

import store from '@/store';
import {
  getToken,
  getUserId
} from '@/utils/auth';
import router from '@/routes';

const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path == '/' && to.name != 'dashboard') {
    next('/404');
    NProgress.done();
  } else if (getToken() && getUserId()) {
    if (to.path == '/login') {
      next({
        path: '/dashboard'
      });
      NProgress.done();
    } else if (store.getters && store.getters.originAuth && store.getters.originAuth == 'none') {
      store.dispatch('GetUserInfo').then((res) => {
        let authority = [];
        if (res.data.module_uuids && !res.data.admin) {
          const mainbody = res.data.main_body ? res.data.main_body.slice() : [];
          const mainBodyList = [];

          for (let i = 0; i < mainbody.length; i++) {
            if (mainbody[i] && mainbody[i].uuid) {
              mainBodyList.push(mainbody[i].uuid);
            }
          }

          store.dispatch('SetMainBodyAuth', mainBodyList);

          const auth = res.data.module_uuids;
          for (let i = 0; i < auth.length; i++) {
            auth[i].son.split(',').forEach((son) => {
              authority.push(`${auth[i].module_server}.${son}`);
            });
          }

          store.dispatch('SetAuth', authority);
        }

        if (res.data.admin) {
          authority = 'all';
          store.dispatch('SetAuth', 'admin');
        }

        store.dispatch('GenerateRoutes', {
          authority
        }).then(() => {
          // 动态添加路由
          router.addRoutes(store.getters.asyncRouters);
          next({ ...to,
            replace: true
          });
        });
      }).catch(() => {
        store.dispatch('FedLogOut').then(() => {
          next({
            path: '/login'
          });
        });
      });
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) != -1) {
    next();
    NProgress.done();
  } else {
    next('/login');
    NProgress.done();
  }
});

router.afterEach((to, from) => {
  document.documentElement.scrollTop = 0;
  if (from && from.name) {
    store.dispatch('UpdateRouterFrom', from.name);
  } else {
    store.dispatch('UpdateRouterFrom', '');
  }
  NProgress.done();
});
