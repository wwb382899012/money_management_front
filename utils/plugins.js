import { Loading } from 'element-ui';

export default {
  install(Vue) {
    Vue.prototype.jyb_loading = (loadingText) => {
      const options = {
        lock: true,
        text: loadingText,
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      };
      return Loading.service(options);
    };
  }
};
