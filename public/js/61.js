webpackJsonp([61],{

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(836),
  /* template */
  __webpack_require__(837),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\modules\\update.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] update.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ec8ef3d", Component.options)
  } else {
    hotAPI.reload("data-v-3ec8ef3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


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

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_modules__ = __webpack_require__(647);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _this = this;

    var checkName = function checkName(rule, value, callback) {
      for (var i = 0; i < _this.moduleList.length; i++) {
        if (_this.moduleList[i].name == value && _this.moduleList[i].uuid != _this.updateModule.module_uuid) {
          return callback(new Error('模块名称已存在'));
        }

        if (_this.moduleList[i].children) {
          for (var j = 0; j < _this.moduleList[i].children.length; j++) {
            if (_this.moduleList[i].children[j].name == value && _this.moduleList[i].children[j].uuid != _this.updateModule.module_uuid) {
              return callback(new Error('模块名称已存在'));
            }
          }
        }
      }
      callback();
    };

    return {
      loading: false,
      updateModule: {
        module_uuid: '',
        module_pid_uuid: '',
        name: '',
        api_url: '',
        son_api: '',
        sort: '',
        status: '',
        is_menu: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入模块名称',
          trigger: 'blur'
        }, {
          validator: checkName,
          trigger: 'blur'
        }],
        api_url: [{
          required: true,
          message: '请输入模块地址标识',
          trigger: 'blur'
        }],
        son_api: [{
          required: true,
          message: '请输入模块功能标识',
          trigger: 'blur'
        }],
        sort: [{
          required: true,
          message: '请输入排序码',
          trigger: 'blur'
        }],
        status: [{
          required: true,
          message: '请选择是否启用',
          trigger: 'change'
        }],
        is_menu: [{
          required: true,
          message: '请选择是否为菜单',
          trigger: 'change'
        }]
      },
      moduleList: []
    };
  },
  created: function created() {
    var _this2 = this;

    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'moduleList'
      });
    } else {
      this.updateModule.uuid = this.$route.params.uuid;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["d" /* getModuleList */])({}).then(function (res) {
        _this2.moduleList = res.data;
        _this2.initUpdateModule();
      }).catch(function () {});
    }
  },

  methods: {
    initUpdateModule: function initUpdateModule() {
      var _this3 = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["c" /* getModuleDetail */])({
        module_uuid: this.updateModule.uuid
      }).then(function (res) {
        var data = res.data;

        for (var key in _this3.updateModule) {
          if (key == 'module_uuid') {
            _this3.updateModule.module_uuid = data.uuid;
          } else if (key == 'module_pid_uuid' && data.pid_uuid) {
            _this3.updateModule.module_pid_uuid = data.pid_uuid;
            for (var i = 0; i < _this3.moduleList.length; i++) {
              if (_this3.moduleList[i].uuid == data.pid_uuid) {
                _this3.updateModule.pname = _this3.moduleList[i].name;
                break;
              }
            }
          } else if (key != 'pname') {
            _this3.updateModule[key] = data[key];
          }
        }
      }).catch(function () {});
    },
    submitForm: function submitForm(formName) {
      var _this4 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this4.mconfirm('确定要提交吗？').then(function () {
            _this4.mshowLoading('正在更新模块...');
            Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["e" /* updateModule */])(_this4.updateModule).then(function () {
              _this4.loading = false;
              _this4.mhideLoading();
              _this4.$message.success('更新成功');
              _this4.$router.replace({
                name: 'moduleList'
              });
            }).catch(function () {
              _this4.loading = false;
              _this4.mhideLoading();
            });
          }).catch(function () {
            _this4.loading = false;
          });
        } else {
          _this4.loading = false;
          _this4.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 837:
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
  }, [_c('span', [_vm._v("更新模块: “" + _vm._s(_vm.updateModule.name) + "”")])]), _vm._v(" "), _c('el-form', {
    ref: "updateModule",
    attrs: {
      "model": _vm.updateModule,
      "rules": _vm.rules,
      "label-width": "80px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "模块名称",
      "prop": "name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入模块名称"
    },
    model: {
      value: (_vm.updateModule.name),
      callback: function($$v) {
        _vm.$set(_vm.updateModule, "name", $$v)
      },
      expression: "updateModule.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "上级模块",
      "prop": "module_pid_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择上级模块",
      "filterable": "",
      "clearable": ""
    },
    model: {
      value: (_vm.updateModule.module_pid_uuid),
      callback: function($$v) {
        _vm.$set(_vm.updateModule, "module_pid_uuid", $$v)
      },
      expression: "updateModule.module_pid_uuid"
    }
  }, _vm._l((_vm.moduleList), function(item) {
    return (item.uuid != _vm.updateModule.module_uuid) ? _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.name,
        "value": item.uuid
      }
    }) : _vm._e()
  }))], 1), _vm._v(" "), (_vm.updateModule.module_pid_uuid) ? _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "模块地址",
      "prop": "api_url"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入模块地址标识"
    },
    model: {
      value: (_vm.updateModule.api_url),
      callback: function($$v) {
        _vm.$set(_vm.updateModule, "api_url", $$v)
      },
      expression: "updateModule.api_url"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.updateModule.module_pid_uuid) ? _c('el-form-item', {
    attrs: {
      "label": "模块功能",
      "prop": "son_api"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入模块功能标识"
    },
    model: {
      value: (_vm.updateModule.son_api),
      callback: function($$v) {
        _vm.$set(_vm.updateModule, "son_api", $$v)
      },
      expression: "updateModule.son_api"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "排序码",
      "prop": "sort"
    }
  }, [_c('el-input-number', {
    attrs: {
      "min": 0,
      "label": "请输入排序码"
    },
    model: {
      value: (_vm.updateModule.sort),
      callback: function($$v) {
        _vm.$set(_vm.updateModule, "sort", $$v)
      },
      expression: "updateModule.sort"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "是否启用",
      "prop": "status"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择是否启用"
    },
    model: {
      value: (_vm.updateModule.status),
      callback: function($$v) {
        _vm.$set(_vm.updateModule, "status", $$v)
      },
      expression: "updateModule.status"
    }
  }, [_c('el-option', {
    attrs: {
      "value": 0,
      "label": "启用"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": 1,
      "label": "注销"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "是否菜单",
      "prop": "is_menu"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择是否为菜单"
    },
    model: {
      value: (_vm.updateModule.is_menu),
      callback: function($$v) {
        _vm.$set(_vm.updateModule, "is_menu", $$v)
      },
      expression: "updateModule.is_menu"
    }
  }, [_c('el-option', {
    attrs: {
      "value": 1,
      "label": "是"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": 2,
      "label": "否"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "80px"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleUpdate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('updateModule')
      }
    }
  }, [_vm._v("保存")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "moduleList",
      "size": "medium"
    }
  })], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ec8ef3d", module.exports)
  }
}

/***/ })

});