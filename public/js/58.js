webpackJsonp([58],{

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(838),
  /* template */
  __webpack_require__(839),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\setting\\roles\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eae4d3c8", Component.options)
  } else {
    hotAPI.reload("data-v-eae4d3c8", Component.options)
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

/***/ 838:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      roleList: [],
      roleActiveStatusJson: {
        1: '启用',
        2: '停用'
      }
    };
  },
  created: function created() {
    this.getRoleListData();
  },

  methods: {
    // 获取表格列表数据
    getRoleListData: function getRoleListData() {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;

      var params = {
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      // 添加搜索条件
      for (var key in this.searchForm) {
        if (this.searchForm[key] != '') {
          params[key] = this.searchForm[key];
        }
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__api_roles__["d" /* getRoleList */])(params).then(function (res) {
        _this.roleList = res.data.data;
        _this.pageSetting.page = parseInt(res.data.page);
        _this.pageSetting.count = parseInt(res.data.count);
        _this.loading = false;
      }).catch(function () {
        _this.loading = false;
      });
    },


    // 搜索
    submitSearch: function submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getRoleListData();
    },


    // 分页
    handleSizeChange: function handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getRoleListData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getRoleListData();
    },


    // 新增、更新、授权、删除
    triggerAdd: function triggerAdd() {
      this.$router.push({
        name: 'roleAdd'
      });
    },
    triggerUpdate: function triggerUpdate(uuid) {
      this.$router.push({
        name: 'roleUpdate',
        params: {
          uuid: uuid
        }
      });
    },
    triggerAuthUpdate: function triggerAuthUpdate(uuid) {
      this.$router.push({
        name: 'roleAuthUpdate',
        params: {
          uuid: uuid
        }
      });
    },
    handleDelete: function handleDelete(uuid, index) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.mconfirm('确认删除吗？').then(function () {
        _this2.loadingText = '正在删除角色...';
        Object(__WEBPACK_IMPORTED_MODULE_0__api_roles__["b" /* deleteRole */])({
          role_uuid: uuid
        }).then(function () {
          _this2.loading = false;
          _this2.loadingText = '拼命加载中';
          _this2.$message.success('角色删除成功');
          _this2.roleList.splice(index, 1);
        }).catch(function () {
          _this2.loading = false;
          _this2.loadingText = '拼命加载中';
        });
      }).catch(function () {
        _this2.loading = false;
      });
    }
  }
});

/***/ }),

/***/ 839:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [_c('tp-breadcrumb'), _vm._v(" "), _c('div', {
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
      "placeholder": "请输入角色名关键字查询"
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
  })], 1)], 1), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleAdd') != -1) ? _c('el-form-item', {
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
      "click": _vm.triggerAdd
    }
  }, [_vm._v("添加")])], 1) : _vm._e()], 1)])], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    attrs: {
      "data": _vm.roleList,
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
      "width": "230px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleUpdate') != -1) ? _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.triggerUpdate(scope.row.uuid)
            }
          }
        }, [_vm._v("编辑")]) : _vm._e(), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleAuthUpdate') != -1) ? _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "default"
          },
          on: {
            "click": function($event) {
              _vm.triggerAuthUpdate(scope.row.uuid)
            }
          }
        }, [_vm._v("授权")]) : _vm._e(), _vm._v(" "), (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.role.RoleDel') != -1) ? _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "danger"
          },
          on: {
            "click": function($event) {
              _vm.handleDelete(scope.row.uuid, scope.$index)
            }
          }
        }, [_vm._v("删除")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "角色名",
      "prop": "name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm.roleActiveStatusJson[scope.row.status]) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "更新时间",
      "prop": "update_time"
    }
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
     require("vue-hot-reload-api").rerender("data-v-eae4d3c8", module.exports)
  }
}

/***/ })

});