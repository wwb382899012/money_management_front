webpackJsonp([27],{

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(848)
}
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(849),
  /* template */
  __webpack_require__(850),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-30ca431c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\users\\update.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] update.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30ca431c", Component.options)
  } else {
    hotAPI.reload("data-v-30ca431c", Component.options)
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

/***/ 848:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_users__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_mainBody__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_roles__ = __webpack_require__(646);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      activeName: "first",
      checkAll: false,
      checkAllOut: false,
      isIndeterminate: true,
      isIndeterminateOut: true,
      loading: false,
      updateUser: {
        user_id: '',
        name: '',
        username: '',
        status: '',
        roles_uuids: [],
        main_body_uuids: []
      },
      roleList: [],
      roleLoading: false,
      mainBodyList: [],
      outMainBodyList: [],
      mainBodyLoading: false,
      outMainBodyLoading: false,
      mainBodyUuidList: [],
      outMainBodyUuidList: [],
      bodyPage: {
        page: 1,
        limit: 50,
        count: 0
      },
      rules: {
        roles_uuids: [{
          required: true,
          message: '请选择用户角色',
          trigger: 'change'
        }],
        main_body_uuids: [{
          required: true,
          message: '请选择用户主体',
          trigger: 'change'
        }],
        status: [{
          required: true,
          message: '请选择用户状态',
          trigger: 'change'
        }]
      }
    };
  },
  created: function created() {
    var _this = this;

    if (!this.$route.params.userid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'userList'
      });
    } else {
      this.updateUser.user_id = this.$route.params.userid;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_users__["a" /* getUserDetail */])({
        user_id: this.updateUser.user_id
      }).then(function (res) {
        var data = res.data;
        _this.updateUser.name = data.name;
        _this.updateUser.username = data.username;
        _this.updateUser.status = data.status;

        for (var i = 0; i < data.role.length; i++) {
          if (data.role[i].uuid) {
            _this.updateUser.roles_uuids.push(data.role[i].uuid);
          }
        }

        for (var j = 0; j < data.main_body.length; j++) {
          if (data.main_body[j].uuid) {
            _this.updateUser.main_body_uuids.push(data.main_body[j].uuid);
          }
        }
        _this.loading = false;
      }).catch(function () {
        _this.loading = false;
      });

      this.getRoleListData();
      this.getMainBodyListData();
    }
  },

  methods: {
    // 获取角色列表
    getRoleListData: function getRoleListData() {
      var _this2 = this;

      if (this.roleLoading) {
        return false;
      }
      this.roleLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_2__api_roles__["d" /* getRoleList */])({
        page: 1,
        limit: -1
      }).then(function (res) {
        _this2.roleList = res.data.data;
        _this2.roleLoading = false;
      }).catch(function () {
        _this2.roleLoading = false;
      });
    },

    // 获取主体列表
    getMainBodyListData: function getMainBodyListData() {
      // 内部
      this.getMainBodyListDataPiece();
      // 外部
      this.getOutMainBodyListDataPiece();
    },
    getMainBodyListDataPiece: function getMainBodyListDataPiece() {
      var _this3 = this;

      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_mainBody__["e" /* getMainBodyList */])({
        page: this.bodyPage.page,
        limit: this.bodyPage.limit,
        is_internal: 1
      }).then(function (res) {
        var mainBodyList = res.data.data;
        for (var i = 0; i < mainBodyList.length; i++) {
          _this3.mainBodyUuidList.push(mainBodyList[i].uuid);
        }
        _this3.mainBodyList = _this3.mainBodyList.concat(mainBodyList);

        _this3.bodyPage.page;
        _this3.bodyPage.count = Number(res.data.count);
        _this3.mainBodyLoading = false;
        if (_this3.bodyPage.page * _this3.bodyPage.limit < _this3.bodyPage.count) {
          _this3.bodyPage.page++;
          _this3.getMainBodyListDataPiece();
        }
      }).catch(function () {
        _this3.mainBodyLoading = false;
      });
    },


    // 获取外部主体
    getOutMainBodyListDataPiece: function getOutMainBodyListDataPiece() {
      var _this4 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (this.outMainBodyLoading) {
        return false;
      }
      this.outMainBodyLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_mainBody__["e" /* getMainBodyList */])({
        page: page,
        limit: this.bodyPage.limit,
        is_internal: 2
      }).then(function (res) {
        var mainBodyList = res.data.data;
        for (var i = 0; i < mainBodyList.length; i++) {
          _this4.outMainBodyUuidList.push(mainBodyList[i].uuid);
        }
        _this4.outMainBodyList = _this4.outMainBodyList.concat(mainBodyList);

        _this4.bodyPage.page;
        _this4.bodyPage.count = Number(res.data.count);
        _this4.outMainBodyLoading = false;
        if (page * _this4.bodyPage.limit < _this4.bodyPage.count) {
          page++;
          _this4.getOutMainBodyListDataPiece(page);
        }
      }).catch(function () {
        _this4.outMainBodyLoading = false;
      });
    },


    // 提交更新
    submitForm: function submitForm(formName) {
      var _this5 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this5.mconfirm('确定要提交吗？').then(function () {
            _this5.mshowLoading('正在更新用户...');

            var params = {
              user_id: _this5.updateUser.user_id,
              roles_uuids: _this5.updateUser.roles_uuids.join(','),
              main_body_uuids: _this5.updateUser.main_body_uuids.join(','),
              status: _this5.updateUser.status
            };

            Object(__WEBPACK_IMPORTED_MODULE_0__api_users__["c" /* updateUser */])(params).then(function () {
              _this5.loading = false;
              _this5.mhideLoading();
              _this5.$message.success('更新成功');
              _this5.$router.replace({
                name: 'userList'
              });
            }).catch(function () {
              _this5.loading = false;
              _this5.mhideLoading();
            });
          }).catch(function () {
            _this5.loading = false;
          });
        } else {
          _this5.loading = false;
          _this5.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    },


    // 选择主体修改
    handleCheckAllChange: function handleCheckAllChange(val) {
      this.updateUser.main_body_uuids = val ? arrayUnion(this.updateUser.main_body_uuids, this.mainBodyUuidList) : arrayDiff(this.updateUser.main_body_uuids, this.mainBodyUuidList);
      this.isIndeterminate = false;
    },
    handleCheckedMainBodyChange: function handleCheckedMainBodyChange(value) {
      var checkedCount = value.length;
      this.checkAll = checkedCount === this.mainBodyUuidList.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.mainBodyUuidList.length;
    },
    handleCheckAllChangeOut: function handleCheckAllChangeOut(val) {
      this.updateUser.main_body_uuids = val ? arrayUnion(this.updateUser.main_body_uuids, this.outMainBodyUuidList) : arrayDiff(this.updateUser.main_body_uuids, this.outMainBodyUuidList);
      console.log(this.updateUser.main_body_uuids);
      this.isIndeterminateOut = false;
    },
    handleCheckedMainBodyChangeOut: function handleCheckedMainBodyChangeOut(value) {
      var checkedCount = value.length;
      this.checkAllOut = checkedCount === this.outMainBodyUuidList.length;
      this.isIndeterminateOut = checkedCount > 0 && checkedCount < this.outMainBodyUuidList.length;
    }
  }
});

function arrayUnion(arr1, arr2) {
  var set1 = new Set(arr1);
  var set2 = new Set(arr2);

  var union = Array.from(new Set([].concat(_toConsumableArray(set1), _toConsumableArray(set2))));
  return union;
}

function arrayDiff(arr1, arr2) {
  var diff = arr1.filter(function (key) {
    return !arr2.includes(key);
  });
  return diff;
}

/***/ }),

/***/ 850:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [_c('tp-breadcrumb'), _vm._v(" "), _c('div', {
    staticClass: "content-container form-box"
  }, [_c('el-card', [_c('div', {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("更新用户: “" + _vm._s(_vm.updateUser.name) + " - " + _vm._s(_vm.updateUser.username) + "”")])]), _vm._v(" "), _c('el-form', {
    ref: "updateUser",
    attrs: {
      "model": _vm.updateUser,
      "rules": _vm.rules,
      "label-width": "80px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "用户主体",
      "prop": "main_body_uuids"
    }
  }, [_c('el-tabs', {
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "内部主体",
      "name": "first"
    }
  }, [_c('el-checkbox', {
    attrs: {
      "indeterminate": _vm.isIndeterminate
    },
    on: {
      "change": _vm.handleCheckAllChange
    },
    model: {
      value: (_vm.checkAll),
      callback: function($$v) {
        _vm.checkAll = $$v
      },
      expression: "checkAll"
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "15px 0"
    }
  }), _vm._v(" "), _c('el-checkbox-group', {
    on: {
      "change": _vm.handleCheckedMainBodyChange
    },
    model: {
      value: (_vm.updateUser.main_body_uuids),
      callback: function($$v) {
        _vm.$set(_vm.updateUser, "main_body_uuids", $$v)
      },
      expression: "updateUser.main_body_uuids"
    }
  }, _vm._l((_vm.mainBodyList), function(item) {
    return _c('el-checkbox', {
      key: item.uuid,
      attrs: {
        "label": item.uuid,
        "value": item.uuid
      }
    }, [_vm._v(_vm._s(item.full_name))])
  }))], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "外部主体",
      "name": "second"
    }
  }, [_c('el-checkbox', {
    attrs: {
      "indeterminate": _vm.isIndeterminateOut
    },
    on: {
      "change": _vm.handleCheckAllChangeOut
    },
    model: {
      value: (_vm.checkAllOut),
      callback: function($$v) {
        _vm.checkAllOut = $$v
      },
      expression: "checkAllOut"
    }
  }, [_vm._v("全选")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin": "15px 0"
    }
  }), _vm._v(" "), _c('el-checkbox-group', {
    on: {
      "change": _vm.handleCheckedMainBodyChange
    },
    model: {
      value: (_vm.updateUser.main_body_uuids),
      callback: function($$v) {
        _vm.$set(_vm.updateUser, "main_body_uuids", $$v)
      },
      expression: "updateUser.main_body_uuids"
    }
  }, _vm._l((_vm.outMainBodyList), function(item) {
    return _c('el-checkbox', {
      key: item.uuid,
      attrs: {
        "label": item.uuid,
        "value": item.uuid
      }
    }, [_vm._v(_vm._s(item.full_name))])
  }))], 1)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "用户角色",
      "prop": "roles_uuids"
    }
  }, [_c('el-select', {
    attrs: {
      "loading": _vm.roleLoading,
      "multiple": "",
      "filterable": "",
      "placeholder": "请选择用户角色"
    },
    model: {
      value: (_vm.updateUser.roles_uuids),
      callback: function($$v) {
        _vm.$set(_vm.updateUser, "roles_uuids", $$v)
      },
      expression: "updateUser.roles_uuids"
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
      "value": ""
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "用户状态",
      "prop": "status"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择是否启用"
    },
    model: {
      value: (_vm.updateUser.status),
      callback: function($$v) {
        _vm.$set(_vm.updateUser, "status", $$v)
      },
      expression: "updateUser.status"
    }
  }, [_c('el-option', {
    attrs: {
      "value": 1,
      "label": "启用"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": 2,
      "label": "停用"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "80px"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.user.UserUpdate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('updateUser')
      }
    }
  }, [_vm._v("保存")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "userList",
      "size": "medium"
    }
  })], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30ca431c", module.exports)
  }
}

/***/ })

});