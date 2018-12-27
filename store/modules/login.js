import {
  login,
  logout,
  getUserInfo
} from '@/api/login';
import {
  getToken,
  setToken,
  removeToken,
  getUserId,
  setUserId,
  removeUserId
} from '@/utils/auth';
import md5 from 'js-md5';

const user = {
  state: {
    token: getToken(),
    user_id: getUserId(),
    username: '',
    name: '',
    originAuth: 'none',
    auth: [],
    mainBodyAuth: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER_ID: (state, userId) => {
      state.user_id = userId;
    },
    SET_USER_NAME: (state, username) => {
      state.username = username;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_ORIGINAUTH: (state, originAuth) => {
      state.originAuth = originAuth;
    },
    SET_AUTH: (state, auth) => {
      state.auth = auth;
    },
    SET_MAIN_BODY_AUTH: (state, mainBodyAuth) => {
      state.mainBodyAuth = mainBodyAuth;
    }
  },

  actions: {
    // 登录
    Login({
      commit
    }, userInfo) {
      const params = {
        username: userInfo.username.trim(),
        password: md5(userInfo.password)
      };
      return new Promise((resolve, reject) => {
        login(params).then((response) => {
          const data = response.data;
          setToken(data.token);
          setUserId(data.user_id);
          commit('SET_TOKEN', data.token);
          commit('SET_USER_ID', data.user_id);
          resolve();
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 获取用户信息
    GetUserInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo({
          user_id: state.user_id,
          auth: true
        }).then((response) => {
          const data = response.data;
          commit('SET_ORIGINAUTH', 'set');
          commit('SET_USER_NAME', data.username);
          commit('SET_NAME', data.name);
          resolve(response);
        }).catch((error) => {
          reject(error);
        });
      });
    },

    // 配置权限
    SetAuth({
      commit
    }, auth) {
      commit('SET_AUTH', auth)
    },

    // 配置主体权限
    SetMainBodyAuth({
      commit
    }, mainBodyAuth) {
      commit('SET_MAIN_BODY_AUTH', mainBodyAuth)
    },

    /**
     * 后台注销登录
     */
    ServerLogOut() {
      return logout();
    },

    // 前台注销登录
    FedLogOut({
      commit
    }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '');
        commit('SET_USER_ID', '');
        removeToken();
        removeUserId();
        resolve();
      });
    }
  }
};

export default user;
