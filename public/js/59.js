webpackJsonp([59],{

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(840),
  /* template */
  __webpack_require__(841),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\roles\\add.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] add.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49be6c13", Component.options)
  } else {
    hotAPI.reload("data-v-49be6c13", Component.options)
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

/***/ 840:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_roles__ = __webpack_require__(646);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loading: false,
      newRole: {
        name: '',
        info: '',
        status: 1,
        module_uuids: []
      },
      rules: {
        name: [{
          required: true,
          message: '请输入角色名称',
          trigger: 'blur'
        }],
        status: [{
          required: true,
          message: '请选择是否启用角色',
          trigger: 'change'
        }]
      },
      moduleList: []
    };
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.mconfirm('确定要提交吗？').then(function () {
            _this.mshowLoading('正在新增角色...');
            Object(__WEBPACK_IMPORTED_MODULE_0__api_roles__["a" /* addRole */])(_this.newRole).then(function (res) {
              _this.loading = false;
              _this.mhideLoading();
              _this.malert('新增成功，请继续为角色添加权限', function () {
                _this.$router.replace({
                  name: 'roleAuthUpdate',
                  params: {
                    uuid: res.data.role_uuid
                  }
                });
              });
            }).catch(function () {
              _this.loading = false;
              _this.mhideLoading();
            });
          }).catch(function () {
            _this.loading = false;
          });
        } else {
          _this.loading = false;
          _this.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 841:
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
  }, [_c('span', [_vm._v("新增角色")])]), _vm._v(" "), _c('el-form', {
    ref: "newRole",
    attrs: {
      "model": _vm.newRole,
      "rules": _vm.rules,
      "label-width": "80px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "角色名称",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入角色名称"
    },
    model: {
      value: (_vm.newRole.name),
      callback: function($$v) {
        _vm.$set(_vm.newRole, "name", $$v)
      },
      expression: "newRole.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "角色描述",
      "prop": "info"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入角色描述"
    },
    model: {
      value: (_vm.newRole.info),
      callback: function($$v) {
        _vm.$set(_vm.newRole, "info", $$v)
      },
      expression: "newRole.info"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "角色状态",
      "prop": "status"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择是否启用"
    },
    model: {
      value: (_vm.newRole.status),
      callback: function($$v) {
        _vm.$set(_vm.newRole, "status", $$v)
      },
      expression: "newRole.status"
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
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleAdd') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('newRole')
      }
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
     require("vue-hot-reload-api").rerender("data-v-49be6c13", module.exports)
  }
}

/***/ })

});