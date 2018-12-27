const news = {
  state: {
    role_list: [],
    current_role: {}
  },

  mutations: {
    SET_ROLE_LIST: (state, roleList) => {
      state.role_list = roleList;
    },
    SET_CURRENT_ROLE: (state, currentRole) => {
      state.current_role = currentRole;
    }
  },

  actions: {
    // 设置角色列表
    SetRoleList({ commit }, roleList) {
      commit('SET_ROLE_LIST', roleList);
    },
    // 设置传递的角色
    SetCurrentRole({ commit }, currentRole) {
      commit('SET_CURRENT_ROLE', currentRole);
    }
  }
};

export default news;

