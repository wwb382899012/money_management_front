const account = {
  state: {
    current_account: {}
  },

  mutations: {
    SET_CURRENT_ACCOUNT: (state, currentAccount) => {
      state.current_account = currentAccount;
    }
  },

  actions: {
    // 设置传递的账户
    SetCurrentAccount({
      commit
    }, currentAccount) {
      commit('SET_CURRENT_ACCOUNT', currentAccount);
    }
  }
};

export default account;
