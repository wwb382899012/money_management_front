webpackJsonp([41],{

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(844),
  /* template */
  __webpack_require__(845),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\roles\\auth-update.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] auth-update.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3565900", Component.options)
  } else {
    hotAPI.reload("data-v-f3565900", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getModuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getModuleDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取模块列表
 * @param {json} data
 *  @param {string} data.name         模块名称，非必填
 */
var getModuleList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.module.ModuleList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getModuleList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取模块详情
 * @param {json} data
 *  @param {string} data.module_uuid 模块uuid
 */
var getModuleDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.module.ModuleDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getModuleDetail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 模块新增
 * @param {json} data
 *  @param {string} data.module_pid_uuid       父级模块uuid，非必填
 *  @param {string} data.name                  模块名称
 *  @param {number} data.sort                  模块排序码
 *  @param {number} data.status                模块状态 0 启用 1停用
 *  @param {string} data.api_url               模块地址标识
 *  @param {string} son_api                    模块功能标识
 *  @param {number} data.is_menu               1菜单 2非菜单
 */
var addModule = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.module.ModuleAdd',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addModule(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 模块更新
 * @param {json} data
 *  @param {string} data.module_pid_uuid       父级模块uuid，非必填
 *  @param {string} data.module_uuid           模块uuid
 *  @param {string} data.name                  模块名称
 *  @param {number} data.sort                  模块排序码
 *  @param {number} data.status                模块状态 0 启用 1停用
 *  @param {string} data.api_url               模块地址标识
 *  @param {string} son_api                    模块功能标识
 *  @param {number} data.is_menu               1菜单 2非菜单
 */
var updateModule = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.module.ModuleUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateModule(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 模块删除
 * @param {json} data
 *  @param {string} data.module_uuid 模块uuid
 */
var deleteModule = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.module.ModuleDel',
              body: data
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteModule(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_modules__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_roles__ = __webpack_require__(646);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      changed: false,
      loading: false,
      updateRole: {
        role_uuid: '',
        name: '',
        info: '',
        status: '1',
        module_uuids: []
      },
      moduleList: [],
      selectedKeys: [],
      defaultProps: {
        children: 'children',
        label: function label(data) {
          return data.api_url ? data.name + ' | ' + data.api_url : data.name;
        }
      }
    };
  },
  created: function created() {
    var _this = this;

    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'roleList'
      });
    } else {
      this.updateRole.role_uuid = this.$route.params.uuid;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["d" /* getModuleList */])({}).then(function (res) {
        _this.moduleList = res.data;
        _this.getRoleDetailData();
      }).catch(function () {});
    }
  },

  methods: {
    // 获取和格式化角色详情数据
    getRoleDetailData: function getRoleDetailData() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_1__api_roles__["c" /* getRoleDetail */])({
        role_uuid: this.$route.params.uuid
      }).then(function (res) {
        var data = res.data;
        for (var key in _this2.updateRole) {
          if (key != 'role_uuid') {
            _this2.updateRole[key] = data[key];
            if (key == 'module_uuids') {
              if (data[key]) {
                for (var i = 0; i < data[key].length; i++) {
                  if (data[key][i].son) {
                    if (data[key][i].son.indexOf(',') == -1) {
                      _this2.selectedKeys.push(data[key][i].module_uuid + '_' + data[key][i].son);
                    } else {
                      var sonList = data[key][i].son.split(',');
                      for (var j = 0; j < sonList.length; j++) {
                        _this2.selectedKeys.push(data[key][i].module_uuid + '_' + sonList[j]);
                      }
                    }
                  }
                }
                _this2.$refs.moduleList.setCheckedKeys(_this2.selectedKeys);
              } else {
                _this2.updateRole[key] = [];
              }
            }
          }
        }
        _this2.$store.dispatch('SetCurrentRole', data);
      }).catch(function () {});
    },

    // 获取更新标记
    handleCheckChange: function handleCheckChange() {
      this.changed = true;
    },

    // 提交授权
    submitForm: function submitForm() {
      var _this3 = this;

      if (this.loading) return false;
      this.loading = true;

      this.mconfirm('确定要提交吗？').then(function () {
        // 获取授权数据

        // 获取目前被选中的节点所组成的数组
        var checkedKeys = _this3.$refs.moduleList.getCheckedKeys();
        // 获取目前被选中节点的key所组成的数组
        // const checkedNodes = this.$refs.moduleList.getCheckedNodes();

        // 格式化数据
        var selectedList = [];
        var tmpList = {};

        for (var i = 0; i < checkedKeys.length; i++) {
          if (checkedKeys[i].indexOf('_') != -1) {
            var key = checkedKeys[i].split('_')[0];
            var val = checkedKeys[i].split('_')[1];

            tmpList[key] = tmpList[key] ? tmpList[key] + ',' + val : val;
          }
        }

        for (var _key in tmpList) {
          selectedList.push(_defineProperty({}, _key, tmpList[_key]));
        }

        _this3.mshowLoading('正在更新角色授权...');
        Object(__WEBPACK_IMPORTED_MODULE_1__api_roles__["f" /* updateRoleAuth */])({
          role_uuid: _this3.updateRole.role_uuid,
          module_uuids: selectedList
        }).then(function () {
          _this3.loading = false;
          _this3.mhideLoading();
          _this3.$message.success('更新成功');
          _this3.$router.replace({
            name: 'roleList'
          });
        }).catch(function () {
          _this3.loading = false;
          _this3.mhideLoading();
        });
      }).catch(function () {
        _this3.loading = false;
      });
    }
  }
});

/***/ }),

/***/ 845:
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
  }, [_c('span', [_vm._v("角色授权: ”" + _vm._s(_vm.updateRole.name) + "“")])]), _vm._v(" "), _c('el-tree', {
    ref: "moduleList",
    attrs: {
      "data": _vm.moduleList,
      "default-expanded-keys": _vm.selectedKeys,
      "props": _vm.defaultProps,
      "show-checkbox": "",
      "node-key": "uuid"
    },
    on: {
      "check-change": _vm.handleCheckChange
    }
  }), _vm._v(" "), _c('el-form', {
    ref: "updateRole",
    attrs: {
      "model": _vm.updateRole,
      "label-width": "0",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleAuthUpdate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": _vm.submitForm
    }
  }, [_vm._v("保存")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "roleList",
      "size": "medium"
    }
  })], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f3565900", module.exports)
  }
}

/***/ })

});