import store from '@/store/index';
import { setToken, setUserId } from '@/utils/auth';

import axios from 'axios';

const baseUrl = `http://${window.location.host}`;

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options, serviceName, method = 'post') {
  const datas = {
    url,
    method,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Frame-type': 'JMF',
      'Csrf-token': options.csrfToken
    },
    timeout: 10000,
    baseURL: baseUrl
  };
  if (method == 'get') {
    datas.params = options;
  } else {
    datas.data = JSON.stringify(options);
  }
  if (baseUrl || url.indexOf('http://') == 0) {
    datas.withCredentials = true;
  }

  const whiteList = ['com.jyblife.logic.bg.user.UserLogin'];
  if (whiteList.indexOf(serviceName) == -1 && store.getters.token) {
    setToken(store.getters.token);
    setUserId(store.getters.user_id);
  }

  return axios.request(datas)
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error));
}
