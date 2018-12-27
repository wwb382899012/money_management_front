import webConfig from '@/config/index';
import store from '@/store/index';
import request from '@/utils/request_axios';
import {
  JSEncrypt
} from '@/utils/jsencrypt.min.js';

import {
  Message,
  MessageBox
} from 'element-ui';

const pubKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDRgrH6jrkIRZRq3s7mp9snLtU8
qHYK3BopeJAmPF0J+TFLL3toYtLbLOCO1aZn428DejlsSI6XT12ajLpyPHlLAOgj
5lOCN5t5OY5xpvBX3IzRTTICToYb8q3rTHHdLBs/ALFOXQ/mT+2v6vD6fLXDjTdX
p/HRMmNvpvQvc2dBHQIDAQAB
-----END PUBLIC KEY-----`;

/**
 * 加密函数
 * @param {string} value 待加密字符串
 */
function rsaEncrypt(value) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(pubKey);
  return encrypt.encrypt(value);
}

/**
 * 获取csrfToken方法
 */
async function fetchToken() {
  const jsondata = {
    service: 'com.jyblife.logic.bg.layer.HttpAccessLayer',
    env: webConfig.headerEnv,
    set: '',
    group: '*',
    version: '1.0.0',
    method: 'csrfToken',
    params: '{}'
  };
  return request('/api/csrfToken', jsondata);
}

/**
 * JMF请求方法
 * @param {json} data 请求参数
 *  @param {json}   data.body        请求数据体
 *  @param {string} data.serviceName 请求服务名
 */
export async function fetchApi(data) {
  try {
    let csrfToken = store.getters.csrfToken;
    let csrfTokenTimestamp = store.getters.csrfTokenTimestamp;
    if (!csrfToken || new Date().getTime() - csrfTokenTimestamp > webConfig.constants.CSRFTOKEN_EXPIREDTIME) {
      const tokenData = await fetchToken();
      if (tokenData.code != '0' || !tokenData.data || !tokenData.data.token) {
        return Promise.reject(tokenData);
      }
      store.dispatch('UpdateCsrftoken', tokenData.data.token);
      csrfToken = tokenData.data.token;
      csrfTokenTimestamp = (new Date()).getTime();
    }

    // 获取csrfToken成功继续实际请求
    const requestJsonData = {
      service: 'com.jyblife.logic.bg.layer.HttpAccessLayer',
      env: webConfig.headerEnv,
      set: '',
      group: '*',
      version: '1.0.0',
      method: 'access',
      params: data.body,
      targetService: data.serviceName,
      csrfToken: rsaEncrypt(csrfToken)
    };

    // 输出参数
    devConsoleLog('参数：');
    devConsoleLog(requestJsonData);

    return new Promise((resolve, reject) => {
      request('/api', requestJsonData, data.serviceName).then((response) => {
        devConsoleLog('返回值：');
        devConsoleLog(response);

        if (response.csrfToken) {
          store.dispatch('UpdateCsrftoken', response.csrfToken);
        }
        // csrtToken失效重新请求
        if (response.code == 4201020701) {
          store.dispatch('UpdateCsrftoken', '');
          Message.error(response.msg);
          reject(response);
        } else if (response.code == 5000020001) {
          // session token失效
          MessageBox.alert('登录已失效, 请重新登录', '温馨提示', {
            confirmButtonText: '确定',
            callback: () => {
              store.dispatch('FedLogOut').then(() => {
                window.location.reload();
              });
            }
          });
        } else if (response.code == '0') {
          resolve(response);
        } else {
          Message.error(response.msg);
          reject(response);
        }
      }).catch((error) => {
        if (error && error.msg) {
          Message.error(error.msg);
          reject(error);
        } else {
          Message.error('请求失败，请重试');
          reject({
            code: '1',
            msg: '请求失败，请重试'
          });
        }
      });
    });
  } catch (e) {
    Message.error('请求失败，请重试');
    return Promise.reject(e);
  }
}

/**
 * JMF文件下载方法
 * @param {json} data 请求参数
 *  @param {string} data.uuid 上传文件返回的uuid
 */
export async function fetchFile(data) {
  const jsondata = {
    service: 'com.jyblife.logic.bg.layer.FileDown',
    env: webConfig.headerEnv,
    set: '',
    group: '*',
    version: '1.0.0',
    method: 'access',
    params: {
      uuid: data.uuid
    }
  };
  return request('/api', jsondata, 'get');
}

/**
 * 开发环境输出日志
 * @param {mix} data 
 */
function devConsoleLog(data) {
  if (webConfig.headerEnv == 'dev') {
    console.log(data);
  }
}
