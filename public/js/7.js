webpackJsonp([7],{

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(795),
  /* template */
  __webpack_require__(802),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\data\\mainBody\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32abeeda", Component.options)
  } else {
    hotAPI.reload("data-v-32abeeda", Component.options)
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

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_mainBody__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_vue__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__add_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_vue__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__update_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    AddMainBody: __WEBPACK_IMPORTED_MODULE_1__add_vue___default.a,
    UpdateMainBody: __WEBPACK_IMPORTED_MODULE_2__update_vue___default.a
  },
  data: function data() {
    return {
      loading: false,
      loadingText: '拼命加载中',
      searchForm: {
        name: '',
        status: '',
        is_internal: ''
      },
      activeStatusJson: {
        1: '启用',
        2: '注销'
      },
      mainBodyList: [],
      userMainBodyList: [],
      timestamp: Date.now(),
      addMainBodyDialogVisible: false,
      updateMainBodyDialogVisible: false,
      currentMainBody: {
        uuid: '',
        full_name: '',
        short_name: '',
        short_code: '',
        is_internal: ''
      }
    };
  },
  created: function created() {
    this.getMainBodyListData();
  },

  methods: {
    getMainBodyListData: function getMainBodyListData() {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;

      var params = {
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      // 获取搜索参数
      for (var key in this.searchForm) {
        if (this.searchForm[key] !== '') {
          params[key] = this.searchForm[key];
        }
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__api_mainBody__["e" /* getMainBodyList */])(params).then(function (res) {
        _this.mainBodyList = res.data.data;
        _this.userMainBodyList = res.data.userMainBodyData;
        _this.pageSetting.page = parseInt(res.data.page);
        _this.pageSetting.count = parseInt(res.data.count);
        _this.loading = false;
      }).catch(function () {
        _this.loading = false;
      });
    },


    // 搜索和重置搜索
    submitSearch: function submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getMainBodyListData();
      return false;
    },
    handleReset: function handleReset() {
      if (this.loading) return false;

      // 重置搜索条件
      for (var key in this.searchForm) {
        this.searchForm[key] = '';
      }

      this.pageSetting.page = 1;
      this.getMainBodyListData();

      return false;
    },


    // 分页
    handleSizeChange: function handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getMainBodyListData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getMainBodyListData();
    },


    // 启用和注销主体
    handleActivateMainBody: function handleActivateMainBody(uuid, index) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要启用吗?').then(function () {
        _this2.loadingText = '正在启用' + _this2.mainBodyList[index].full_name;
        _this2.mainBodyList[index].status = 1;
        Object(__WEBPACK_IMPORTED_MODULE_0__api_mainBody__["a" /* activateMainBody */])({
          uuid: uuid
        }).then(function () {
          _this2.loading = false;
          _this2.loadingText = '拼命加载中';
        }).catch(function () {
          _this2.mainBodyList[index].status = 2;
          _this2.loading = false;
          _this2.loadingText = '拼命加载中';
        });
      }).catch(function () {
        _this2.loading = false;
      });
    },
    handleCancelMainBody: function handleCancelMainBody(uuid, index) {
      var _this3 = this;

      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要注销吗?').then(function () {
        _this3.loadingText = '正在注销' + _this3.mainBodyList[index].full_name;
        _this3.mainBodyList[index].status = 2;
        Object(__WEBPACK_IMPORTED_MODULE_0__api_mainBody__["c" /* cancelMainBody */])({
          uuid: uuid
        }).then(function () {
          _this3.loading = false;
          _this3.loadingText = '拼命加载中';
        }).catch(function () {
          _this3.mainBodyList[index].status = 1;
          _this3.loading = false;
          _this3.loadingText = '拼命加载中';
        });
      }).catch(function () {
        _this3.loading = false;
      });
    },


    // 新增和修改主体
    triggerAddMainBody: function triggerAddMainBody() {
      this.addMainBodyDialogVisible = true;
    },
    triggerUpdateMainBody: function triggerUpdateMainBody(currentMainBody) {
      this.currentMainBody = JSON.parse(JSON.stringify(currentMainBody));
      this.updateMainBodyDialogVisible = true;
    },
    reloadMainBodyList: function reloadMainBodyList() {
      this.addMainBodyDialogVisible = false;
      this.updateMainBodyDialogVisible = false;
      this.getMainBodyListData();
    },
    closeDialog: function closeDialog() {
      this.addMainBodyDialogVisible = false;
      this.updateMainBodyDialogVisible = false;
    }
  }
});

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(797),
  /* template */
  __webpack_require__(798),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\data\\mainBody\\add.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] add.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70330395", Component.options)
  } else {
    hotAPI.reload("data-v-70330395", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_mainBody__ = __webpack_require__(634);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    var checkShortCode = function checkShortCode(rule, value, callback) {
      if (!value && _this.newMainBody.is_internal == 1) {
        return callback(new Error('内部主体必须填写主体简码'));
      }
      if (value && !/^[a-zA-Z]{2,7}$/.test(value)) {
        return callback(new Error('主体简码只能是2到7位的英文字母'));
      }

      return callback();
    };
    return {
      loading: false,
      newMainBody: {
        full_name: '',
        short_name: '',
        short_code: '',
        is_internal: 1
      },
      rules: {
        full_name: [{
          required: true,
          message: '请输入主体全称',
          trigger: 'blur'
        }],
        short_name: [{
          required: true,
          message: '请输入主体简称',
          trigger: 'blur'
        }],
        short_code: [{
          validator: checkShortCode,
          trigger: 'blur'
        }],
        is_internal: [{
          required: true,
          message: '请选择是否公司内部主体',
          trigger: 'change'
        }]
      }
    };
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2.mconfirm('确定要提交吗？').then(function () {
            _this2.mshowLoading('正在新增主体...');

            var params = JSON.parse(JSON.stringify(_this2.newMainBody));
            params.short_code = params.short_code ? params.short_code.toUpperCase() : '';

            Object(__WEBPACK_IMPORTED_MODULE_0__api_mainBody__["b" /* addMainBody */])(params).then(function () {
              _this2.loading = false;
              _this2.mhideLoading();
              _this2.$message.success('新增成功');
              _this2.$emit('addMainBodySuccess');
            }).catch(function () {
              _this2.loading = false;
              _this2.mhideLoading();
            });
          }).catch(function () {
            _this2.loading = false;
          });
        } else {
          _this2.loading = false;
          _this2.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-container form-dialog-box"
  }, [_c('el-form', {
    ref: "newMainBody",
    attrs: {
      "model": _vm.newMainBody,
      "rules": _vm.rules,
      "label-width": "140px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "主体全称",
      "prop": "full_name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入主体全称"
    },
    model: {
      value: (_vm.newMainBody.full_name),
      callback: function($$v) {
        _vm.$set(_vm.newMainBody, "full_name", $$v)
      },
      expression: "newMainBody.full_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "主体简称",
      "prop": "short_name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入主体简称"
    },
    model: {
      value: (_vm.newMainBody.short_name),
      callback: function($$v) {
        _vm.$set(_vm.newMainBody, "short_name", $$v)
      },
      expression: "newMainBody.short_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "主体简码",
      "prop": "short_code"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入主体简码"
    },
    model: {
      value: (_vm.newMainBody.short_code),
      callback: function($$v) {
        _vm.$set(_vm.newMainBody, "short_code", $$v)
      },
      expression: "newMainBody.short_code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否公司内部主体",
      "prop": "is_internal"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.newMainBody.is_internal),
      callback: function($$v) {
        _vm.$set(_vm.newMainBody, "is_internal", $$v)
      },
      expression: "newMainBody.is_internal"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("是")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("否")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyCreate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('newMainBody')
      }
    }
  }, [_vm._v("保存")]) : _vm._e(), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "default"
    },
    on: {
      "click": function($event) {
        _vm.$emit('closeDialog')
      }
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70330395", module.exports)
  }
}

/***/ }),

/***/ 799:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(800),
  /* template */
  __webpack_require__(801),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\data\\mainBody\\update.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] update.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4efb5085", Component.options)
  } else {
    hotAPI.reload("data-v-4efb5085", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_mainBody__ = __webpack_require__(634);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    currentMainBody: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    var _this = this;

    var checkShortCode = function checkShortCode(rule, value, callback) {
      if (!value && _this.updateMainBody.is_internal == 1) {
        return callback(new Error('内部主体必须填写主体简码'));
      }
      if (value && !/^[a-zA-Z]{2,7}$/.test(value)) {
        return callback(new Error('主体简码只能是2到7位的英文字母'));
      }

      return callback();
    };
    return {
      loading: false,
      updateMainBody: {
        uuid: '',
        full_name: '',
        short_name: '',
        short_code: '',
        is_internal: ''
      },
      rules: {
        full_name: [{
          required: true,
          message: '请输入主体全称',
          trigger: 'blur'
        }],
        short_name: [{
          required: true,
          message: '请输入主体简称',
          trigger: 'blur'
        }],
        short_code: [{
          validator: checkShortCode,
          trigger: 'blur'
        }],
        is_internal: [{
          required: true,
          message: '请选择是否公司内部主体',
          trigger: 'change'
        }]
      }
    };
  },
  created: function created() {
    if (this.currentMainBody) {
      Object.assign(this.updateMainBody, this.currentMainBody);
    }
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2.mconfirm('确定要提交吗？').then(function () {
            _this2.mshowLoading('正在更新主体...');

            var params = JSON.parse(JSON.stringify(_this2.updateMainBody));
            params.short_code = params.short_code ? params.short_code.toUpperCase() : '';

            Object(__WEBPACK_IMPORTED_MODULE_0__api_mainBody__["f" /* updateMainBody */])(params).then(function () {
              _this2.loading = false;
              _this2.mhideLoading();
              _this2.$message.success('更新成功');
              _this2.$emit('updateMainBodySuccess');
            }).catch(function () {
              _this2.loading = false;
              _this2.mhideLoading();
            });
          }).catch(function () {
            _this2.loading = false;
          });
        } else {
          _this2.loading = false;
          _this2.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 801:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-container form-dialog-box"
  }, [_c('el-form', {
    ref: "updateMainBody",
    attrs: {
      "model": _vm.updateMainBody,
      "rules": _vm.rules,
      "label-width": "140px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "主体全称",
      "prop": "full_name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入主体全称"
    },
    model: {
      value: (_vm.updateMainBody.full_name),
      callback: function($$v) {
        _vm.$set(_vm.updateMainBody, "full_name", $$v)
      },
      expression: "updateMainBody.full_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "主体简称",
      "prop": "short_name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入主体简称"
    },
    model: {
      value: (_vm.updateMainBody.short_name),
      callback: function($$v) {
        _vm.$set(_vm.updateMainBody, "short_name", $$v)
      },
      expression: "updateMainBody.short_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "主体简码",
      "prop": "short_code"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入主体简码"
    },
    model: {
      value: (_vm.updateMainBody.short_code),
      callback: function($$v) {
        _vm.$set(_vm.updateMainBody, "short_code", $$v)
      },
      expression: "updateMainBody.short_code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否公司内部主体",
      "prop": "is_internal"
    }
  }, [_c('el-radio-group', {
    model: {
      value: (_vm.updateMainBody.is_internal),
      callback: function($$v) {
        _vm.$set(_vm.updateMainBody, "is_internal", $$v)
      },
      expression: "updateMainBody.is_internal"
    }
  }, [_c('el-radio', {
    attrs: {
      "label": 1
    }
  }, [_vm._v("是")]), _vm._v(" "), _c('el-radio', {
    attrs: {
      "label": 2
    }
  }, [_vm._v("否")])], 1)], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyUpdate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('updateMainBody')
      }
    }
  }, [_vm._v("保存")]) : _vm._e(), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "default"
    },
    on: {
      "click": function($event) {
        _vm.$emit('closeDialog')
      }
    }
  }, [_vm._v("取消")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4efb5085", module.exports)
  }
}

/***/ }),

/***/ 802:
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
      "label": "主体名称"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入主体名称关键字"
    },
    model: {
      value: (_vm.searchForm.name),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "name", $$v)
      },
      expression: "searchForm.name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "启用状态"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择启用状态",
      "clearable": ""
    },
    model: {
      value: (_vm.searchForm.status),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "status", $$v)
      },
      expression: "searchForm.status"
    }
  }, _vm._l((_vm.activeStatusJson), function(statusStr, statusCode) {
    return _c('el-option', {
      key: statusCode,
      attrs: {
        "label": statusStr,
        "value": statusCode
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "是否内部主体"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择是否内部主体",
      "clearable": ""
    },
    model: {
      value: (_vm.searchForm.is_internal),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "is_internal", $$v)
      },
      expression: "searchForm.is_internal"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "是",
      "value": "1"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "否",
      "value": "2"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
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
      "type": "default"
    },
    on: {
      "click": _vm.handleReset
    }
  }, [_vm._v("重置")]), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyCreate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "type": "success"
    },
    on: {
      "click": _vm.triggerAddMainBody
    }
  }, [_vm._v("新增")]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "data": _vm.mainBodyList,
      "element-loading-text": _vm.loadingText,
      "header-cell-style": _vm.styleObject,
      "cell-style": _vm.styleObject,
      "height": _vm.tableHeight,
      "border": "",
      "element-loading-spinner": "el-icon-loading",
      "element-loading-background": "rgba(0, 0, 0, 0.5)"
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "150",
      "fixed": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(_vm.$store.getters.auth == 'admin' ||
          (_vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyUpdate') != -1 && _vm.userMainBodyList.indexOf(scope.row.uuid) != -1)) ? _c('el-button', {
          key: 'update' + scope.row.uuid,
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.triggerUpdateMainBody(scope.row)
            }
          }
        }, [_vm._v("修改")]) : _vm._e(), _vm._v(" "), (scope.row.status == 1 && (_vm.$store.getters.auth == 'admin' ||
          (_vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyCancel') != -1 && _vm.userMainBodyList.indexOf(scope.row.uuid) != -1))) ? _c('el-button', {
          key: 'cancel' + scope.row.uuid,
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleCancelMainBody(scope.row.uuid, scope.$index)
            }
          }
        }, [_vm._v("注销")]) : _vm._e(), _vm._v(" "), (scope.row.status != 1 && (_vm.$store.getters.auth == 'admin' ||
          (_vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.MainBodyActivate') != -1 && _vm.userMainBodyList.indexOf(scope.row.uuid) != -1))) ? _c('el-button', {
          key: 'active' + scope.row.uuid,
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.handleActivateMainBody(scope.row.uuid, scope.$index)
            }
          }
        }, [_vm._v("启用")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "主体全称",
      "prop": "full_name",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "主体简称",
      "prop": "short_name",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "简码",
      "width": "200",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.short_code ? scope.row.short_code : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "是否内部主体",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.is_internal == '1' ? '是' : '否') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "启用状态",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm.activeStatusJson[scope.row.status]) + "\n      ")]
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
  })], 1), _vm._v(" "), (_vm.addMainBodyDialogVisible) ? _c('el-dialog', {
    key: 'addMainBodyDialog' + _vm.timestamp,
    attrs: {
      "append-to-body": true,
      "visible": _vm.addMainBodyDialogVisible,
      "title": "新增主体",
      "left": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.addMainBodyDialogVisible = $event
      },
      "close": function($event) {
        _vm.timestamp = Date.now();
      }
    }
  }, [_c('add-main-body', {
    on: {
      "addMainBodySuccess": _vm.reloadMainBodyList,
      "closeDialog": _vm.closeDialog
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.updateMainBodyDialogVisible) ? _c('el-dialog', {
    key: 'updateMainBodyDialog' + _vm.timestamp,
    attrs: {
      "append-to-body": true,
      "visible": _vm.updateMainBodyDialogVisible,
      "title": "更新主体",
      "left": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.updateMainBodyDialogVisible = $event
      },
      "close": function($event) {
        _vm.timestamp = Date.now()
      }
    }
  }, [_c('update-main-body', {
    attrs: {
      "current-main-body": _vm.currentMainBody
    },
    on: {
      "updateMainBodySuccess": _vm.reloadMainBodyList,
      "closeDialog": _vm.closeDialog
    }
  })], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-32abeeda", module.exports)
  }
}

/***/ })

});