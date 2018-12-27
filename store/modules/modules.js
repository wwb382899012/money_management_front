const news = {
  state: {
    module_list: [],
    current_module: {}
  },

  mutations: {
    SET_MODULE_LIST: (state, moduleList) => {
      state.module_list = moduleList;
    },
    SET_CURRENT_MODULE: (state, currentModule) => {
      state.current_module = currentModule;
    }
  },

  actions: {
    // 设置模块列表
    SetModuleList({ commit }, moduleList) {
      commit('SET_MODULE_LIST', moduleList);
    },
    // 设置传递的模块
    SetCurrentModule({ commit }, currentModule) {
      commit('SET_CURRENT_MODULE', currentModule);
    }
  }
};

export default news;

