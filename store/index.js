import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

// modules
import app from './modules/app';
import login from './modules/login';
import permission from './modules/permission';
import news from './modules/news';
import account from './modules/account';
import modules from './modules/modules';
import roles from './modules/roles';

import getters from './getters';

Vue.use(Vuex);

const debug = process.env.NODE_ENV != 'production';

export default new Vuex.Store({
  modules: {
    app,
    login,
    permission,
    news,
    account,
    modules,
    roles
  },
  getters,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
