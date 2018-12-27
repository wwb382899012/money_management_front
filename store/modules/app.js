import {
  getSidebarStatus,
  setSidebarStatus,
  removeSidebarStatus
} from '@/utils/auth';

const app = {
  state: {
    sidebar: !!getSidebarStatus(),
    csrf: {
      token: '',
      timestamp: 0
    },
    routerFrom: ''
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      if (state.sidebar && getSidebarStatus()) {
        removeSidebarStatus();
      } else {
        setSidebarStatus();
      }
      state.sidebar = !!getSidebarStatus();
    },
    UPDATE_CSRFTOKEN: (state, csrfToken) => {
      state.csrf.token = csrfToken;
      state.csrf.timestamp = (new Date()).getTime();
    },
    UPDATE_ROUTER_FROM: (state, routerFrom) => {
      state.routerFrom = routerFrom;
    }
  },
  actions: {
    ToggleSideBar: ({
      commit
    }) => {
      commit('TOGGLE_SIDEBAR');
    },
    UpdateCsrftoken: ({
      commit
    }, csrfToken) => {
      commit('UPDATE_CSRFTOKEN', csrfToken);
    },
    UpdateRouterFrom: ({
      commit
    }, routerFrom) => {
      commit('UPDATE_ROUTER_FROM', routerFrom);
    }
  }
};

export default app;
