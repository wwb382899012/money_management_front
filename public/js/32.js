webpackJsonp([32],{

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(846),
  /* template */
  __webpack_require__(847),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\users\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-43f49b31", Component.options)
  } else {
    hotAPI.reload("data-v-43f49b31", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getMainBodyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getMainBodyEffectList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activateMainBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cancelMainBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addMainBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateMainBody; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取主体列表
 * @param {json} data
 *  @param {string} data.uuid      主体唯一标识uuid，搜索条件，非必填
 *  @param {string} data.name      主体名称，支持简称、全称模糊查询，非必填
 *  @param {string} data.status    主体启用状态标识，1-启用，2-注销，默认全部，非必填
 *  @param {number} data.is_internal 1-内部主体，2-外部主体
 *  @param {number} data.page      当前页码
 *  @param {number} data.limit     每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getMainBodyList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.MainBodyList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getMainBodyList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取当前账号主体列表
 * @param {json} data
 *  @param {string} data.uuid      主体唯一标识uuid，搜索条件，非必填
 *  @param {string} data.name      主体名称，支持简称、全称模糊查询，非必填
 *  @param {string} data.status    主体启用状态标识，1-启用，2-注销，默认全部，非必填
 *  @param {number} data.page      当前页码
 *  @param {number} data.limit     每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getMainBodyEffectList = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.MainBodyEffectList',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getMainBodyEffectList(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 启用主体
 * @param {json} data
 *  @param {string} data.uuid      主体唯一标识uuid
 */
var activateMainBody = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.MainBodyStatusModify',
              body: Object.assign({}, data, {
                status: 1
              })
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function activateMainBody(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 注销主体
 * @param {json} data
 *  @param {string} data.uuid      主体唯一标识uuid
 */
var cancelMainBody = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.MainBodyStatusModify',
              body: Object.assign({}, data, {
                status: 2
              })
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function cancelMainBody(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 新增主体
 * @param {json} data
 *  @param {string} data.full_name      主体全称
 *  @param {string} data.short_name     主体简称
 *  @param {string} data.short_code     主体简码
 */
var addMainBody = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.MainBodyCreateOrUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function addMainBody(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 更新主体
 * @param {json} data
 *  @param {string} data.uuid           主体唯一标识uuid
 *  @param {string} data.full_name      主体全称
 *  @param {string} data.short_name     主体简称
 *  @param {string} data.short_code     主体简码
 */
var updateMainBody = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.MainBodyCreateOrUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function updateMainBody(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRoleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRoleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateRoleAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteRole; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取角色列表
 * @param {json} data
 *  @param {string} data.name         用户名模糊搜索，非必填
 *  @param {number} data.page         当前页码
 *  @param {number} data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getRoleList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.role.RoleList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getRoleList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取角色详情
 * @param {json} data
 *  @param {string} data.role_uuid 角色uuid
 */
var getRoleDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.role.RoleDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getRoleDetail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 角色新增
 * @param {json} data
 *  @param {string} data.name         角色名称
 *  @param {string} data.info         角色描述，非必填
 *  @param {number} data.status       角色状态 1启用，2禁用
 *  @param {array}  data.module_uuids 角色模块权限 [{"xxxx":"edit,del"}]选中的模型数据，允许值:[]
 */
var addRole = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.role.RoleAdd',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addRole(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 角色更新
 * @param {json} data
 *  @param {string} data.role_uuid       角色uuid
 *  @param {string} data.name            角色名称
 *  @param {string} data.info            角色描述，非必填
 *  @param {number} data.status          角色状态 1启用，2禁用
 */
var updateRole = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.role.RoleUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateRole(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 角色授权
 * @param {json} data
 *  @param {string} data.role_uuid       角色uuid
 *  @param {array}  data.module_uuids    角色模块权限 [{"xxxx":"edit,del"}]选中的模型数据，允许值:[]
 */
var updateRoleAuth = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.role.RoleAuthUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function updateRoleAuth(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 角色删除
 * @param {json} data
 *  @param {string} data.role_uuid 角色uuid
 */
var deleteRole = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.role.RoleDel',
              body: data
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function deleteRole(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUserDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return updateUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取用户列表
 * @param {json} data
 *  @param {string} data.username         用户名模糊搜索，非必填
 *  @param {number} data.main_body_uuid   交易主体uuid搜索，非必填
 *  @param {number} data.role_uuid        角色uuid搜索，非必填
 *  @param {number} data.page             当前页码
 *  @param {number} data.limit            每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getUserList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.user.UserList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取用户详情
 * @param {json} data
 *  @param {string} data.user_id 用户user_id
 */
var getUserDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.user.UserDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getUserDetail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 用户更新
 * @param {json} data
 *  @param {string} data.user_id          用户user_id
 *  @param {string} data.roles_uuids      用户角色uuids，多个用逗号隔开
 *  @param {string} data.main_body_uuids  用户主体uuids，多个用逗号隔开
 */
var updateUser = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.user.UserUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function updateUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_users__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_mainBody__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_roles__ = __webpack_require__(646);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      searchForm: {
        username: '',
        main_body_uuid: '',
        role_uuid: ''
      },
      activeStatusJson: {
        1: '启用',
        2: '注销'
      },
      loading: false,
      userList: [],
      roleList: [],
      roleLoading: false,
      mainBodyList: [],
      mainBodyLoading: false
    };
  },
  created: function created() {
    this.getUserListData();
  },

  methods: {
    getRoleListData: function getRoleListData() {
      var _this = this;

      if (this.roleLoading) {
        return false;
      }
      this.roleLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_2__api_roles__["d" /* getRoleList */])({
        page: 1,
        limit: -1
      }).then(function (res) {
        var data = res.data;
        _this.roleList = data.data;
        _this.roleLoading = false;
      }).catch(function () {
        _this.roleLoading = false;
      });
    },
    getMainBodyListData: function getMainBodyListData() {
      var _this2 = this;

      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_mainBody__["e" /* getMainBodyList */])({
        page: 1,
        limit: -1
      }).then(function (res) {
        var data = res.data;
        _this2.mainBodyList = data.data;
        _this2.mainBodyLoading = false;
      }).catch(function () {
        _this2.mainBodyLoading = false;
      });
    },
    roleSelectToggle: function roleSelectToggle(show) {
      if (show && !this.roleLoading && !this.roleList.length) {
        this.getRoleListData();
      }
    },
    mainBodySelectToggle: function mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyListData();
      }
    },
    getUserListData: function getUserListData(mshowLoading) {
      var _this3 = this;

      if (this.loading) return false;

      this.loading = true;

      // 是否显示全屏loading
      mshowLoading && this.mshowLoading('正在搜索用户列表...');

      // 获取列表参数, 接入搜索参数
      var params = {
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      // 添加搜索条件
      if (this.searchForm.username) {
        params.username = this.searchForm.username;
      }

      if (this.searchForm.main_body_uuid) {
        params.main_body_uuid = [];
        params.main_body_uuid.push(this.searchForm.main_body_uuid);
      }

      if (this.searchForm.role_uuid) {
        params.role_uuid = [];
        params.role_uuid.push(this.searchForm.role_uuid);
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__api_users__["b" /* getUserList */])(params).then(function (res) {
        _this3.userList = res.data.data;
        _this3.pageSetting.page = parseInt(res.data.page);
        _this3.pageSetting.count = parseInt(res.data.count);
        _this3.loading = false;
        _this3.mhideLoading();
      }).catch(function () {
        _this3.loading = false;
        _this3.mhideLoading();
      });
    },


    // 分页
    handleSizeChange: function handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getUserListData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getUserListData();
    },


    // 更新
    triggerUpdate: function triggerUpdate(userid) {
      this.$router.push({
        name: 'userUpdate',
        params: {
          userid: userid
        }
      });
    },


    // 搜索和重置
    submitSearch: function submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getUserListData(true);
    },
    resetSearch: function resetSearch() {
      if (this.loading) return false;
      this.searchForm = {
        username: '',
        main_body_uuid: [],
        role_uuid: []
      };
      this.pageSetting.page = 1;
      this.getUserListData(true);
    }
  }
});

/***/ }),

/***/ 847:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [_c('tp-breadcrumb'), _vm._v(" "), _c('div', {
    staticClass: "search-form-box"
  }, [_c('el-form', {
    ref: "searchForm",
    attrs: {
      "inline": true,
      "model": _vm.searchForm,
      "label-width": "100px",
      "label-position": "left",
      "size": "mini"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户名"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入用户名"
    },
    model: {
      value: (_vm.searchForm.username),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "username", $$v)
      },
      expression: "searchForm.username"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "用户主体"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "filterable": "",
      "placeholder": "请选择用户主体"
    },
    on: {
      "visible-change": _vm.mainBodySelectToggle
    },
    model: {
      value: (_vm.searchForm.main_body_uuid),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "main_body_uuid", $$v)
      },
      expression: "searchForm.main_body_uuid"
    }
  }, [_vm._l((_vm.mainBodyList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.full_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.mainBodyLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.mainBodyLoading),
      expression: "mainBodyLoading"
    }],
    key: "mainbodyloading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "用户角色"
    }
  }, [_c('el-select', {
    attrs: {
      "loading": _vm.roleLoading,
      "clearable": "",
      "filterable": "",
      "placeholder": "请选择用户角色"
    },
    on: {
      "visible-change": _vm.roleSelectToggle
    },
    model: {
      value: (_vm.searchForm.role_uuid),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "role_uuid", $$v)
      },
      expression: "searchForm.role_uuid"
    }
  }, [_vm._l((_vm.roleList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.roleLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.roleLoading),
      expression: "roleLoading"
    }],
    key: "roleloading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "type": "primary"
    },
    on: {
      "click": _vm.submitSearch
    }
  }, [_vm._v("查询")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "type": "success"
    },
    on: {
      "click": _vm.resetSearch
    }
  }, [_vm._v("重置")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "data": _vm.userList,
      "header-cell-style": _vm.styleObject,
      "cell-style": _vm.styleObject,
      "height": _vm.tableHeight,
      "border": "",
      "element-loading-text": "拼命加载中",
      "element-loading-spinner": "el-icon-loading",
      "element-loading-background": "rgba(0, 0, 0, 0.5)"
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "80px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.user.UserUpdate') != -1) ? _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.triggerUpdate(scope.row.user_id)
            }
          }
        }, [_vm._v("编辑")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "用户名",
      "prop": "username"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "姓名",
      "prop": "name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "角色"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.role_name ? scope.row.role_name : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm.activeStatusJson[scope.row.status]) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "最后登录时间"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.last_login_datetime ? scope.row.last_login_datetime : '-') + "\n      ")]
      }
    }])
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "table-footer"
  }, [_c('el-pagination', {
    attrs: {
      "current-page": _vm.pageSetting.page,
      "page-sizes": _vm.pageSetting.size,
      "page-size": _vm.pageSetting.limit,
      "total": _vm.pageSetting.count,
      "layout": _vm.pageSetting.layout,
      "background": ""
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-43f49b31", module.exports)
  }
}

/***/ })

});