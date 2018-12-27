webpackJsonp([40],{

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(829)
}
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(830),
  /* template */
  __webpack_require__(831),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\modules\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3041db92", Component.options)
  } else {
    hotAPI.reload("data-v-3041db92", Component.options)
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

/***/ 829:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 830:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      searchForm: {
        name: ''
      },
      moduleList: [],
      moduleActiveStatusJson: {
        0: '启用',
        1: '停用'
      }
    };
  },
  created: function created() {
    this.getModuleListData();
  },

  methods: {
    // 获取列表数据
    getModuleListData: function getModuleListData() {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;

      var params = {};

      // 添加搜索条件
      for (var key in this.searchForm) {
        if (this.searchForm[key] != '') {
          params[key] = this.searchForm[key];
        }
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["d" /* getModuleList */])(params).then(function (res) {
        _this.moduleList = res.data;
        _this.loading = false;
      }).catch(function () {
        _this.loading = false;
      });
    },


    // 搜索
    submitSearch: function submitSearch() {
      if (this.loading) return false;
      this.getModuleListData();
    },


    // 删除、新增、更新、查看模块
    handleDelete: function handleDelete(uuid) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要删除吗?').then(function () {
        _this2.loadingText = '正在删除模块...';
        Object(__WEBPACK_IMPORTED_MODULE_0__api_modules__["b" /* deleteModule */])({
          module_uuid: uuid
        }).then(function () {
          _this2.loading = false;
          _this2.loadingText = '拼命加载中';
          _this2.$message.success('删除成功');
          _this2.getModuleListData();
        }).catch(function () {
          _this2.loading = false;
          _this2.loadingText = '拼命加载中';
        });
      }).catch(function () {
        _this2.loading = false;
      });
    },
    triggerDetail: function triggerDetail(uuid) {
      this.$router.push({
        name: 'moduleDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerAddModule: function triggerAddModule() {
      this.$router.push({
        name: 'moduleAdd'
      });
    },
    triggerUpdate: function triggerUpdate(uuid) {
      this.$router.push({
        name: 'moduleUpdate',
        params: {
          uuid: uuid
        }
      });
    }
  }
});

/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [_c('tp-breadcrumb'), _vm._v(" "), _c('div', {
    staticClass: "content-container expand-list-box"
  }, [_c('div', {
    staticClass: "search-form-box inline-search-form-box"
  }, [_c('el-form', {
    ref: "searchForm",
    attrs: {
      "model": _vm.searchForm,
      "size": "medium"
    }
  }, [_c('div', {
    staticStyle: {
      "display": "flex"
    }
  }, [_c('el-form-item', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('el-input', {
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "placeholder": "请输入模块名关键字查询"
    },
    model: {
      value: (_vm.searchForm.name),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "name", $$v)
      },
      expression: "searchForm.name"
    }
  }, [_c('el-button', {
    attrs: {
      "slot": "append",
      "disabled": _vm.loading,
      "icon": "el-icon-search"
    },
    on: {
      "click": _vm.submitSearch
    },
    slot: "append"
  })], 1)], 1), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleAdd') != -1) ? _c('el-form-item', {
    staticStyle: {
      "margin-left": "20px",
      "flex-shrink": "0"
    }
  }, [_c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "type": "success"
    },
    on: {
      "click": _vm.triggerAddModule
    }
  }, [_vm._v("添加")])], 1) : _vm._e()], 1)])], 1), _vm._v(" "), _c('div', [_c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "data": _vm.moduleList,
      "header-cell-style": _vm.styleObject,
      "cell-style": _vm.styleObject,
      "border": "",
      "element-loading-text": "拼命加载中",
      "element-loading-spinner": "el-icon-loading",
      "element-loading-background": "rgba(0, 0, 0, 0.5)"
    }
  }, [_c('el-table-column', {
    attrs: {
      "type": "expand"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-table', {
          attrs: {
            "show-header": false,
            "data": scope.row.children,
            "cell-style": _vm.styleObject,
            "empty-text": "暂无子模块"
          }
        }, [_c('el-table-column', {
          attrs: {
            "width": "230px"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function(scope) {
              return [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleDetail') != -1) ? _c('el-button', {
                attrs: {
                  "disabled": _vm.loading,
                  "size": "mini",
                  "type": "primary"
                },
                on: {
                  "click": function($event) {
                    _vm.triggerDetail(scope.row.uuid)
                  }
                }
              }, [_vm._v("详情")]) : _vm._e(), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleUpdate') != -1) ? _c('el-button', {
                attrs: {
                  "disabled": _vm.loading,
                  "size": "mini",
                  "type": "default"
                },
                on: {
                  "click": function($event) {
                    _vm.triggerUpdate(scope.row.uuid)
                  }
                }
              }, [_vm._v("编辑")]) : _vm._e(), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.module.ModuleDel') != -1) ? _c('el-button', {
                attrs: {
                  "disabled": _vm.loading,
                  "size": "mini",
                  "type": "danger"
                },
                on: {
                  "click": function($event) {
                    _vm.handleDelete(scope.row.uuid)
                  }
                }
              }, [_vm._v("删除")]) : _vm._e()]
            }
          }])
        }), _vm._v(" "), _c('el-table-column', {
          attrs: {
            "prop": "name"
          }
        }), _vm._v(" "), _c('el-table-column', {
          scopedSlots: _vm._u([{
            key: "default",
            fn: function(scope) {
              return [_vm._v("\n                  " + _vm._s(_vm.moduleActiveStatusJson[scope.row.status]) + "\n                ")]
            }
          }])
        })], 1)]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "230px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.triggerDetail(scope.row.uuid, scope.row)
            }
          }
        }, [_vm._v("详情")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "default"
          },
          on: {
            "click": function($event) {
              _vm.triggerUpdate(scope.row.uuid, scope.row)
            }
          }
        }, [_vm._v("编辑")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.row.uuid, scope.$index, scope.row.pid_uuid)
            }
          }
        }, [_vm._v("删除")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "模块名",
      "prop": "name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n            " + _vm._s(_vm.moduleActiveStatusJson[scope.row.status]) + "\n          ")]
      }
    }])
  })], 1)], 1)])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3041db92", module.exports)
  }
}

/***/ })

});