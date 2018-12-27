const news = {
  state: {
    unread_news_amount: 0
  },

  mutations: {
    SET_UNREAD_NEWS_AMOUNT: (state, unreadNewsAmount) => {
      state.unread_news_amount = unreadNewsAmount;
    }
  },

  actions: {
    // 设置未读消息数量
    SetUnreadNewsAmount({
      commit
    }, amount) {
      commit('SET_UNREAD_NEWS_AMOUNT', amount);
    },
  }
};

export default news;
