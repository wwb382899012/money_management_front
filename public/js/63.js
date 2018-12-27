webpackJsonp([63],{

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(834),
  /* template */
  __webpack_require__(835),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\modules\\add.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] add.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36509fdd", Component.options)
  } else {
    hotAPI.reload("data-v-36509fdd", Component.options)
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

/***/ 834:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    var _this = this;

    var checkName = function checkName(rule, value, callback) {
      for (var i = 0; i < _this.moduleList.length; i++) {
        if (_this.moduleList[i].name == value) {
          return callback(new Error('模块名称已存在'));
        }

        if (_this.moduleList[i].children) {
          for (var j = 0; j < _this.moduleList[i].children.length; j++) {
            if (_this.moduleList[i].children[j].name == value) {
              return callback(new Error('模块名称已存在'));
            }
          }
        }
      }

      return callback();
    };
    return {
      loading: false,
      newModule: {
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

    Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["d" /* getModuleList */])({}).then(function (res) {
      _this2.moduleList = res.data;
    }).catch(function () {});
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this3 = this;

      if (this.loading) return false;
      this.loading = true;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this3.mconfirm('确定要提交吗？').then(function () {
            _this3.mshowLoading('正在新增模块...');
            Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["a" /* addModule */])(_this3.newModule).then(function () {
              _this3.loading = false;
              _this3.mhideLoading();
              _this3.$message.success('新增成功');
              _this3.$router.replace({
                name: 'moduleList'
              });
            }).catch(function () {
              _this3.loading = false;
              _this3.mhideLoading();
            });
          }).catch(function () {
            _this3.loading = false;
          });
        } else {
          _this3.loading = false;
          _this3.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 835:
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
  }, [_c('span', [_vm._v("新增模块")])]), _vm._v(" "), _c('el-form', {
    ref: "newModule",
    attrs: {
      "model": _vm.newModule,
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
      value: (_vm.newModule.name),
      callback: function($$v) {
        _vm.$set(_vm.newModule, "name", $$v)
      },
      expression: "newModule.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "上级模块",
      "prop": "module_pid_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "clearable": "",
      "filterable": "",
      "placeholder": "请选择上级模块"
    },
    model: {
      value: (_vm.newModule.module_pid_uuid),
      callback: function($$v) {
        _vm.$set(_vm.newModule, "module_pid_uuid", $$v)
      },
      expression: "newModule.module_pid_uuid"
    }
  }, _vm._l((_vm.moduleList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.name,
        "value": item.uuid
      }
    })
  }))], 1), _vm._v(" "), (_vm.newModule.module_pid_uuid) ? _c('el-form-item', {
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
      value: (_vm.newModule.api_url),
      callback: function($$v) {
        _vm.$set(_vm.newModule, "api_url", $$v)
      },
      expression: "newModule.api_url"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.newModule.module_pid_uuid) ? _c('el-form-item', {
    attrs: {
      "label": "模块功能",
      "prop": "son_api"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入模块功能标识"
    },
    model: {
      value: (_vm.newModule.son_api),
      callback: function($$v) {
        _vm.$set(_vm.newModule, "son_api", $$v)
      },
      expression: "newModule.son_api"
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
      value: (_vm.newModule.sort),
      callback: function($$v) {
        _vm.$set(_vm.newModule, "sort", $$v)
      },
      expression: "newModule.sort"
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
      value: (_vm.newModule.status),
      callback: function($$v) {
        _vm.$set(_vm.newModule, "status", $$v)
      },
      expression: "newModule.status"
    }
  }, [_c('el-option', {
    attrs: {
      "value": 0,
      "label": "启用"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": 1,
      "label": "停用"
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
      value: (_vm.newModule.is_menu),
      callback: function($$v) {
        _vm.$set(_vm.newModule, "is_menu", $$v)
      },
      expression: "newModule.is_menu"
    }
  }, [_c('el-option', {
    attrs: {
      "value": 1,
      "label": "是菜单"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": 2,
      "label": "非菜单"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticStyle: {
      "padding-top": "20px"
    },
    attrs: {
      "label-width": "80px"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleAdd') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('newModule')
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
     require("vue-hot-reload-api").rerender("data-v-36509fdd", module.exports)
  }
}

/***/ })

});