/**
 * web配置
 */

// dev开发环境， sit测试环境 ，uat预发布环境，prod线上环境
const headerEnv = {
  dev: 'dev',
  test: 'sit',
  pre: 'uat',
  production: 'prod'
};

const constants = {
  // 过期时间，单位秒(ms)
  COOKIE_EXPIREDTIME: 86400000,
  CSRFTOKEN_EXPIREDTIME: 600000
};

export default {
  headerEnv: headerEnv[process.env.NODE_ENV] || headerEnv.dev,
  constants
};
