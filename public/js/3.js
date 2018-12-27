webpackJsonp([3],{

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(803),
  /* template */
  __webpack_require__(810),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\data\\system\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05c14a26", Component.options)
  } else {
    hotAPI.reload("data-v-05c14a26", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = validateIP;
/* unused harmony export validate4Decimal */
/* harmony export (immutable) */ __webpack_exports__["a"] = validate2Decimal;
function validateIP(str) {
  var reg = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$/;
  return reg.test(str);
}

function validate4Decimal(val) {
  var reg = /^\d*(\.\d{1,4})?$/;
  return reg.test(val);
}

function validate2Decimal(val) {
  var reg = /^\d*(\.\d{1,2})?$/;
  return reg.test(val);
}

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSystemList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activateSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cancelSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteSystem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取业务系统列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.uuid              业务系统uuid，搜索条件，非必填
 *  @param {string} data.system_flag       业务系统唯一标识，搜索条件，非必填
 *  @param {string} data.sys_name          业务系统名称，搜索条件，非必填
 *  @param {string} data.status            业务系统状态，默认全部，1-启用，2-注销，搜索条件，非必填
 */
var getSystemList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSystemList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 新增业务系统
 * @param {json} data
 *  @param {string} data.system_flag       业务系统唯一标识
 *  @param {string} data.sys_name          业务系统名称
 *  @param {string} data.status            业务系统状态，1-启用，2-注销
 *  @param {string} data.pwd_key           业务系统密钥
 *  @param {string} data.ip_address        服务器ip限制,非必填
 */
var addSystem = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemCreateOrUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function addSystem(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 编辑业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 *  @param {string} data.system_flag       业务系统唯一标识
 *  @param {string} data.sys_name          业务系统名称
 *  @param {string} data.status            业务系统状态，1-启用，2-注销
 *  @param {string} data.pwd_key           业务系统密钥
 *  @param {string} data.ip_address        服务器ip限制,非必填
 */
var updateSystem = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemCreateOrUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function updateSystem(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 启用业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
var activateSystem = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
              body: Object.assign({}, data, { status: 1 })
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function activateSystem(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 注销业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
var cancelSystem = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
              body: Object.assign({}, data, { status: 2 })
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function cancelSystem(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 删除业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
var deleteSystem = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
              body: Object.assign({}, data, { status: 3 })
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function deleteSystem(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_system__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_vue__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__add_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_vue__ = __webpack_require__(807);
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AddSystem: __WEBPACK_IMPORTED_MODULE_1__add_vue___default.a,
    UpdateSystem: __WEBPACK_IMPORTED_MODULE_2__update_vue___default.a
  },
  data: function data() {
    return {
      loading: false,
      loadingText: '拼命加载中',
      searchForm: {
        sys_name: '',
        status: ''
      },
      activeStatusJson: {
        1: '启用',
        2: '注销'
      },
      systemList: [],
      timestamp: Date.now(),
      addSystemDialogVisible: false,
      updateSystemDialogVisible: false,
      currentSystem: {
        uuid: '',
        sys_name: '',
        bank_dict_value: '',
        status: ''
      }
    };
  },
  created: function created() {
    this.getSystemListData();
  },

  methods: {
    // 表格数据获取
    getSystemListData: function getSystemListData() {
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

      Object(__WEBPACK_IMPORTED_MODULE_0__api_system__["e" /* getSystemList */])(params).then(function (res) {
        _this.systemList = res.data.data;
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
      this.getSystemListData();
    },
    handleReset: function handleReset() {
      if (this.loading) return false;
      // 重置搜索条件
      for (var key in this.searchForm) {
        this.searchForm[key] = '';
      }
      this.pageSetting.page = 1;
      this.getSystemListData();
    },


    // 分页操作
    handleSizeChange: function handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getSystemListData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getSystemListData();
    },


    // 注销启用删除操作
    handleActivateSystem: function handleActivateSystem(uuid, index) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要启用吗?').then(function () {
        _this2.loadingText = '正在启用' + _this2.systemList[index].sys_name;
        _this2.systemList[index].status = 1;
        Object(__WEBPACK_IMPORTED_MODULE_0__api_system__["a" /* activateSystem */])({
          uuid: uuid
        }).then(function () {
          _this2.loading = false;
          _this2.loadingText = '拼命加载中';
          _this2.$message.success('启动成功');
        }).catch(function () {
          _this2.systemList[index].status = 2;
          _this2.loading = false;
          _this2.loadingText = '拼命加载中';
        });
      }).catch(function () {
        _this2.loading = false;
      });
    },
    handleCancelSystem: function handleCancelSystem(uuid, index) {
      var _this3 = this;

      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要注销吗?').then(function () {
        _this3.loadingText = '正在注销' + _this3.systemList[index].sys_name;
        _this3.systemList[index].status = 2;
        Object(__WEBPACK_IMPORTED_MODULE_0__api_system__["c" /* cancelSystem */])({
          uuid: uuid
        }).then(function () {
          _this3.loading = false;
          _this3.loadingText = '拼命加载中';
          _this3.$message.success('注销成功');
        }).catch(function () {
          _this3.systemList[index].status = 1;
          _this3.loading = false;
          _this3.loadingText = '拼命加载中';
        });
      }).catch(function () {
        _this3.loading = false;
      });
    },
    handleDeleteSystem: function handleDeleteSystem(uuid, index) {
      var _this4 = this;

      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确定要删除吗?').then(function () {
        _this4.loadingText = '正在删除' + _this4.systemList[index].sys_name;
        __WEBPACK_IMPORTED_MODULE_0__api_system__["c" /* cancelSystem */], Object(__WEBPACK_IMPORTED_MODULE_0__api_system__["d" /* deleteSystem */])({
          uuid: uuid
        }).then(function () {
          _this4.loading = false;
          _this4.loadingText = '拼命加载中';
          _this4.systemList.splice(index, 1);
          _this4.$message.success('删除成功');
        }).catch(function () {
          _this4.loading = false;
          _this4.loadingText = '拼命加载中';
        });
      }).catch(function () {
        _this4.loading = false;
      });
    },


    // 新增更新业务系统
    triggerAddSystem: function triggerAddSystem() {
      this.addSystemDialogVisible = true;
    },
    triggerUpdateSystem: function triggerUpdateSystem(currentSystem) {
      this.currentSystem = JSON.parse(JSON.stringify(currentSystem));
      this.updateSystemDialogVisible = true;
    },
    reloadSystemList: function reloadSystemList() {
      this.addSystemDialogVisible = false;
      this.updateSystemDialogVisible = false;
      this.getSystemListData();
    },
    closeDialog: function closeDialog() {
      this.addSystemDialogVisible = false;
      this.updateSystemDialogVisible = false;
    }
  }
});

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(805),
  /* template */
  __webpack_require__(806),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\data\\system\\add.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] add.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ac1e26e", Component.options)
  } else {
    hotAPI.reload("data-v-2ac1e26e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_system__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_validate__ = __webpack_require__(638);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var checkIPAddress = function checkIPAddress(rule, value, callback) {
      if (!value) {
        return callback();
      }

      if (value.indexOf(',') == -1) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_validate__["b" /* validateIP */])(value)) {
          return callback(new Error('IP "' + value + '" 格式错误'));
        }
      } else {
        var errorIPs = value.split(',').filter(function (ip) {
          return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_validate__["b" /* validateIP */])(ip);
        });
        if (errorIPs.length) {
          return callback(new Error('IP "' + errorIPs[0] + '" 格式错误'));
        }
      }

      return callback();
    };
    return {
      loading: false,
      newSystem: {
        sys_name: '',
        system_flag: '',
        pwd_key: '',
        ip_address: ''
      },
      rules: {
        sys_name: [{
          required: true,
          message: '请输入业务系统名称',
          trigger: 'blur'
        }],
        system_flag: [{
          required: true,
          message: '请输入业务系统标识',
          trigger: 'blur'
        }],
        pwd_key: [{
          required: true,
          message: '请输入业务系统密钥',
          trigger: 'blur'
        }],
        ip_address: [{
          validator: checkIPAddress,
          trigger: 'blur'
        }]
      }
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
            _this.mshowLoading('正在新增业务系统...');

            Object(__WEBPACK_IMPORTED_MODULE_0__api_system__["b" /* addSystem */])(_this.newSystem).then(function () {
              _this.loading = false;
              _this.mhideLoading();
              _this.$message.success('新增成功');
              _this.$emit('addSystemSuccess');
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

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-container form-dialog-box"
  }, [_c('el-form', {
    ref: "newSystem",
    attrs: {
      "model": _vm.newSystem,
      "rules": _vm.rules,
      "label-width": "120px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "业务系统名称",
      "prop": "sys_name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入业务系统名称"
    },
    model: {
      value: (_vm.newSystem.sys_name),
      callback: function($$v) {
        _vm.$set(_vm.newSystem, "sys_name", $$v)
      },
      expression: "newSystem.sys_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "业务系统标识",
      "prop": "system_flag"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入业务系统标识"
    },
    model: {
      value: (_vm.newSystem.system_flag),
      callback: function($$v) {
        _vm.$set(_vm.newSystem, "system_flag", $$v)
      },
      expression: "newSystem.system_flag"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密钥Key",
      "prop": "pwd_key"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入密钥"
    },
    model: {
      value: (_vm.newSystem.pwd_key),
      callback: function($$v) {
        _vm.$set(_vm.newSystem, "pwd_key", $$v)
      },
      expression: "newSystem.pwd_key"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "服务器IP",
      "prop": "ip_address"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入服务器IP，多个用逗号分隔"
    },
    model: {
      value: (_vm.newSystem.ip_address),
      callback: function($$v) {
        _vm.$set(_vm.newSystem, "ip_address", $$v)
      },
      expression: "newSystem.ip_address"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemCreate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('newSystem')
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
     require("vue-hot-reload-api").rerender("data-v-2ac1e26e", module.exports)
  }
}

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(808),
  /* template */
  __webpack_require__(809),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\data\\system\\update.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] update.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9bb1ee5e", Component.options)
  } else {
    hotAPI.reload("data-v-9bb1ee5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_system__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_validate__ = __webpack_require__(638);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    currentSystem: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    var checkIPAddress = function checkIPAddress(rule, value, callback) {
      if (!value) {
        return callback();
      }

      if (value.indexOf(',') == -1) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils_validate__["b" /* validateIP */])(value)) {
          return callback(new Error('IP "' + value + '" 格式错误'));
        }
      } else {
        var errorIPs = value.split(',').filter(function (ip) {
          return !Object(__WEBPACK_IMPORTED_MODULE_1__utils_validate__["b" /* validateIP */])(ip);
        });
        if (errorIPs.length) {
          return callback(new Error('IP "' + errorIPs[0] + '" 格式错误'));
        }
      }

      callback();
    };
    return {
      loading: false,
      updateSystem: {
        uuid: '',
        sys_name: '',
        system_flag: '',
        pwd_key: '',
        ip_address: ''
      },
      rules: {
        sys_name: [{
          required: true,
          message: '请输入业务系统名称',
          trigger: 'blur'
        }],
        system_flag: [{
          required: true,
          message: '请输入业务系统标识',
          trigger: 'blur'
        }],
        pwd_key: [{
          required: true,
          message: '请输入业务系统密钥',
          trigger: 'blur'
        }],
        ip_address: [{
          validator: checkIPAddress,
          trigger: 'blur'
        }]
      }
    };
  },
  created: function created() {
    if (this.currentSystem) {
      Object.assign(this.updateSystem, this.currentSystem);
    }
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this.mconfirm('确定要提交吗？').then(function () {
            _this.mshowLoading('正在更新业务系统...');

            Object(__WEBPACK_IMPORTED_MODULE_0__api_system__["f" /* updateSystem */])(_this.updateSystem).then(function () {
              _this.loading = false;
              _this.mhideLoading();
              _this.$message.success('更新成功');
              _this.$emit('updateSystemSuccess');
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

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-container form-dialog-box"
  }, [_c('el-form', {
    ref: "updateSystem",
    attrs: {
      "model": _vm.updateSystem,
      "rules": _vm.rules,
      "label-width": "120px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "业务系统名称",
      "prop": "sys_name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入业务系统名称"
    },
    model: {
      value: (_vm.updateSystem.sys_name),
      callback: function($$v) {
        _vm.$set(_vm.updateSystem, "sys_name", $$v)
      },
      expression: "updateSystem.sys_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "业务系统标识",
      "prop": "system_flag"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入业务系统标识"
    },
    model: {
      value: (_vm.updateSystem.system_flag),
      callback: function($$v) {
        _vm.$set(_vm.updateSystem, "system_flag", $$v)
      },
      expression: "updateSystem.system_flag"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "密钥Key",
      "prop": "pwd_key"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入密钥"
    },
    model: {
      value: (_vm.updateSystem.pwd_key),
      callback: function($$v) {
        _vm.$set(_vm.updateSystem, "pwd_key", $$v)
      },
      expression: "updateSystem.pwd_key"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "服务器IP",
      "prop": "ip_address"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入服务器IP，多个用逗号分隔"
    },
    model: {
      value: (_vm.updateSystem.ip_address),
      callback: function($$v) {
        _vm.$set(_vm.updateSystem, "ip_address", $$v)
      },
      expression: "updateSystem.ip_address"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemUpdate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('updateSystem')
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
     require("vue-hot-reload-api").rerender("data-v-9bb1ee5e", module.exports)
  }
}

/***/ }),

/***/ 810:
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
      "label": "业务系统名称"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入业务系统名称"
    },
    model: {
      value: (_vm.searchForm.sys_name),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "sys_name", $$v)
      },
      expression: "searchForm.sys_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "系统状态"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择系统状态",
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
  }))], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
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
  }, [_vm._v("重置")]), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemCreate') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "type": "success"
    },
    on: {
      "click": _vm.triggerAddSystem
    }
  }, [_vm._v("新增")]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "data": _vm.systemList,
      "element-loading-text": _vm.loadingText,
      "header-cell-style": _vm.styleObject,
      "cell-style": _vm.styleObject,
      "height": _vm.tableHeight,
      "element-loading-spinner": "el-icon-loading",
      "element-loading-background": "rgba(0, 0, 0, 0.5)",
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "220"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemUpdate') != -1) ? _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.triggerUpdateSystem(scope.row)
            }
          }
        }, [_vm._v("修改")]) : _vm._e(), _vm._v(" "), (scope.row.status == 1 && (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemCancel') != -1)) ? _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleCancelSystem(scope.row.uuid, scope.$index)
            }
          }
        }, [_vm._v("注销")]) : [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemActivate') != -1) ? _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.handleActivateSystem(scope.row.uuid, scope.$index)
            }
          }
        }, [_vm._v("启用")]) : _vm._e(), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.base.SystemDel') != -1) ? _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDeleteSystem(scope.row.uuid, scope.$index)
            }
          }
        }, [_vm._v("删除")]) : _vm._e()]]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "系统名称",
      "prop": "sys_name",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "服务器IP",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.ip_address ? scope.row.ip_address : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "密钥Key",
      "prop": "pwd_key",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态",
      "width": "160"
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
  })], 1), _vm._v(" "), (_vm.addSystemDialogVisible) ? _c('el-dialog', {
    key: 'addSystemDialog' + _vm.timestamp,
    attrs: {
      "append-to-body": true,
      "visible": _vm.addSystemDialogVisible,
      "title": "新增业务系统",
      "left": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.addSystemDialogVisible = $event
      },
      "close": function($event) {
        _vm.timestamp = Date.now()
      }
    }
  }, [_c('add-system', {
    on: {
      "addSystemSuccess": _vm.reloadSystemList,
      "closeDialog": _vm.closeDialog
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.updateSystemDialogVisible) ? _c('el-dialog', {
    key: 'updateSystemDialog' + _vm.timestamp,
    attrs: {
      "append-to-body": true,
      "visible": _vm.updateSystemDialogVisible,
      "title": "编辑业务系统",
      "left": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.updateSystemDialogVisible = $event
      },
      "close": function($event) {
        _vm.timestamp = Date.now()
      }
    }
  }, [_c('update-system', {
    attrs: {
      "current-system": _vm.currentSystem
    },
    on: {
      "updateSystemSuccess": _vm.reloadSystemList,
      "closeDialog": _vm.closeDialog
    }
  })], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05c14a26", module.exports)
  }
}

/***/ })

});