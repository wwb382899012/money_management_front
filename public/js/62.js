webpackJsonp([62],{

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(832),
  /* template */
  __webpack_require__(833),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\modules\\detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12a7cac5", Component.options)
  } else {
    hotAPI.reload("data-v-12a7cac5", Component.options)
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

/***/ 832:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      detailModule: {
        module_pid_uuid: '',
        module_uuid: '',
        pname: '',
        name: '',
        api_url: '',
        son_api: '',
        sort: '',
        status: '',
        is_menu: ''
      },
      moduleList: [],
      moduleActiveStatusJson: {
        0: '启用',
        1: '停用'
      },
      isMenuJson: {
        1: '是',
        2: '否'
      }
    };
  },
  created: function created() {
    var _this = this;

    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'moduleList'
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["d" /* getModuleList */])({}).then(function (res) {
        _this.moduleList = res.data;
        _this.initDetailModule();
      }).catch(function () {});
    }
  },

  methods: {
    initDetailModule: function initDetailModule() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["c" /* getModuleDetail */])({
        module_uuid: this.$route.params.uuid
      }).then(function (res) {
        var data = res.data;

        for (var key in _this2.detailModule) {
          if (key == 'module_uuid') {
            _this2.detailModule.module_uuid = data.uuid;
          } else if (key == 'module_pid_uuid' && data.pid_uuid) {
            _this2.detailModule.module_pid_uuid = data.pid_uuid;
            for (var i = 0; i < _this2.moduleList.length; i++) {
              if (_this2.moduleList[i].uuid == data.pid_uuid) {
                _this2.detailModule.pname = _this2.moduleList[i].name;
                break;
              }
            }
          } else if (key != 'pname') {
            _this2.detailModule[key] = data[key];
          }
        }
      }).catch(function () {});
    }
  }
});

/***/ }),

/***/ 833:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [_c('tp-breadcrumb'), _vm._v(" "), _c('div', {
    staticClass: "content-container form-box detail-form-box"
  }, [_c('el-card', [_c('div', {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("模块详情: “" + _vm._s(_vm.detailModule.name) + "”")])]), _vm._v(" "), _c('el-form', {
    ref: "detailModule",
    attrs: {
      "label-width": "80px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "模块名称"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailModule.name)
    }
  })]), _vm._v(" "), (_vm.detailModule.module_pid_uuid) ? _c('el-form-item', {
    attrs: {
      "label": "上级模块"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailModule.pname)
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.detailModule.module_pid_uuid) ? _c('el-form-item', {
    attrs: {
      "label": "模块地址"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailModule.api_url)
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.detailModule.module_pid_uuid) ? _c('el-form-item', {
    attrs: {
      "label": "模块功能",
      "prop": "son_api"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailModule.son_api)
    }
  })]) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "排序码"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailModule.sort)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否启用"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.moduleActiveStatusJson[_vm.detailModule.status])
    }
  })]), _vm._v(" "), _c('el-form-item', {
    staticClass: "last-form-line",
    attrs: {
      "label": "是否菜单"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.isMenuJson[_vm.detailModule.is_menu])
    }
  })]), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [_c('tp-historyback', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "name": "moduleList",
      "type": "primary",
      "size": "medium"
    }
  })], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12a7cac5", module.exports)
  }
}

/***/ })

});