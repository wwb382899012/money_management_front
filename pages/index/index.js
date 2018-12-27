import 'babel-polyfill';
import Vue from 'vue';
import ElementUI from 'element-ui';

import Breadcrumb from '@/components/bread-crumb.vue';
import HistoryBack from '@/components/history-back.vue';

import store from '@/store';
import router from '@/routes';
import '@/routes/permission';

import Mixins from '@/utils/mixin';
import Filters from '@/utils/filter';

import App from './app.vue';
import './index.scss';

Vue.use(Mixins);
Vue.use(ElementUI);
Vue.use(Filters);

Vue.component('tp-breadcrumb', Breadcrumb);
Vue.component('tp-historyback', HistoryBack);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
