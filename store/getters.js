const getters = {
  sidebar: state => state.app.sidebar,
  csrfToken: state => state.app.csrf.token,
  routerFrom: state => state.app.routerFrom,
  csrfTokenTimestamp: state => state.app.csrf.timestamp,
  token: state => state.login.token,
  user_id: state => state.login.user_id,
  username: state => state.login.username,
  name: state => state.login.name,
  originAuth: state => state.login.originAuth,
  auth: state => state.login.auth,
  mainBodyAuth: state => state.login.mainBodyAuth,
  authority: state => state.permission.authority,
  permissionRouters: state => state.permission.routers,
  asyncRouters: state => state.permission.asyncRouters,
  unreadNewsAmount: state => state.news.unread_news_amount,
  moduleList: state => state.modules.module_list,
  currentModule: state => state.modules.current_module,
  currentAccount: state => state.account.current_account,
  roleList: state => state.roles.role_list,
  currentRole: state => state.roles.current_role
};
export default getters;
