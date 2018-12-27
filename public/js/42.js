webpackJsonp([42],{

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(793),
  /* template */
  __webpack_require__(794),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\reports\\fullTradeReports.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fullTradeReports.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d4c24d72", Component.options)
  } else {
    hotAPI.reload("data-v-d4c24d72", Component.options)
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

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFullTradeReports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEodTradeReports; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取全量业务交易表
 * @param {json} data
 *  @param {number} data.page         当前页码
 *  @param {number} data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getFullTradeReports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.reports.FullTrade',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getFullTradeReports(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取EOD日终检查表
 * @param {json} data
 *  @param {boolean} data.generate     是否生成
 *  @param {number}  data.page         当前页码
 *  @param {number}  data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getEodTradeReports = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.reports.EodTrade',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getEodTradeReports(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_reports__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_mainBody__ = __webpack_require__(634);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        trade_type: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        audit_begin_time: '',
        audit_end_time: ''
      },
      tradeTypeJson: {
        1: '付款',
        2: '借款',
        3: '内部调拨',
        4: '理财',
        5: '还款'
      },
      allReportsList: [],
      mainBodyList: [],
      mainBodyLoading: false,
      exportLoading: false,
      exportFilename: 'export_all_reports_list_'
    };
  },
  created: function created() {
    this.getFullTradeReportsData();
  },

  methods: {
    // 表格
    getFullTradeReportsData: function getFullTradeReportsData(mshowLoading) {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜素全量报表...');

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

      Object(__WEBPACK_IMPORTED_MODULE_0__api_reports__["b" /* getFullTradeReports */])(params).then(function (res) {
        var data = res.data;
        _this.allReportsList = data.data;
        _this.pageSetting.page = parseInt(data.page);
        _this.pageSetting.count = parseInt(data.count);

        _this.loading = false;
        _this.mhideLoading();
      }).catch(function () {
        _this.loading = false;
        _this.mhideLoading();
      });
    },


    // 表格操作
    triggerTransfer: function triggerTransfer(uuid, type) {
      switch (type) {
        case 1:
          this.$router.push({
            name: 'payTransferDetail',
            params: {
              uuid: uuid
            }
          });
          break;
        case 2:
          this.$router.push({
            name: 'loanTransferDetail',
            params: {
              uuid: uuid
            }
          });
          break;
        case 3:
          this.$router.push({
            name: 'innerTransferDetail',
            params: {
              uuid: uuid
            }
          });
          break;
        case 4:
          this.$router.push({
            name: 'financialPlanDetail',
            params: {
              uuid: uuid
            }
          });
          break;
        case 5:
          this.$router.push({
            name: 'repayTransferDetail',
            params: {
              uuid: uuid
            }
          });
          break;
        default:
          this.$message.warning('类型不存在，请联系管理员添加类型');
      }
    },


    // 表格分页
    handleSizeChange: function handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getFullTradeReportsData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getFullTradeReportsData();
    },


    // 搜索框

    // 搜索操作
    submitSearch: function submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getFullTradeReportsData(true);
    },
    handleReset: function handleReset() {
      Object.assign(this.searchForm, {
        trade_type: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        audit_begin_time: '',
        audit_end_time: ''
      });
      this.pageSetting.page = 1;
      this.getFullTradeReportsData();
    },


    // 导出
    handleDownload: function handleDownload() {
      var _this2 = this;

      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;

      this.mconfirm('确定要导出当前搜索条件的全量业务交易列表数据吗?').then(function () {
        _this2.mshowLoading('正在导出数据...');
        _this2.getExportData();
      }).catch(function () {
        _this2.exportLoading = false;
      });
    },


    // 获取导出数据
    getExportData: function getExportData() {
      var _this3 = this;

      var params = {
        page: 1,
        limit: -1
      };

      // 添加搜索条件
      for (var key in this.searchForm) {
        if (this.searchForm[key] != '') {
          params[key] = this.searchForm[key];
        }
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__api_reports__["b" /* getFullTradeReports */])(params).then(function (res) {
        _this3.exportData(res.data.data);
      }).catch(function () {
        _this3.exportLoading = false;
        _this3.mhideLoading();
      });
    },

    // 导出
    exportData: function exportData(list) {
      var _this4 = this;

      if (list.length) {
        var tHeader = ['指令编号', '资金交易编号', '交易日期', '要求付款日', '业务类别', '业务细类', '币种', '金额', '付款方', '付款方银行名称', '付款方银行账号', '收款方', '收款方银行名称', '收款方银行账号', '银行交易流水号', '实付类型', '到期日', '利息率', '指令到达时间', '指令接收时间', '调拨交易提交时间', '指令提交人', '资金交易专员', '资金部负责人审核时间', '权签审批时间', '权签人'];
        var filterList = ['out_order_num', 'trade_order_num', 'trade_date', 'pay_date', 'trade_type', 'trade_son_type', 'currency', 'amount', 'pay_main_body_name', 'pay_bank_name', 'pay_bank_account', 'collect_main_body_name', 'collect_bank_name', 'collect_bank_account', 'bank_water_no', 'real_pay_type', 'mature_date', 'interest_rate', 'trade_entry_datetime', 'trade_receive_datetime', 'order_create_datetime', 'order_create_user_name', 'audit_name_1', 'audit_datetime_2', 'audit_datetime_3', 'audit_name_3'];
        var originData = list;
        var data = this.formatData(filterList, originData);
        __webpack_require__.e/* import() */(68/* duplicate */).then(__webpack_require__.bind(null, 648)).then(function (excel) {
          excel.export_json_to_excel({
            header: tHeader,
            data: data,
            filename: _this4.exportFilename + _this4.filterDateTime(Date.now()).replace(/:|\s|-/g, '_')
          });
          _this4.mhideLoading();
          _this4.$message.success('导出成功');
          _this4.exportLoading = false;
        }).catch(function () {
          _this4.mhideLoading();
          _this4.exportLoading = false;
        });
      } else {
        this.mhideLoading();
        this.exportLoading = false;
        this.$message.warning('数据为空');
      }
    },

    // 格式化导出数据
    formatData: function formatData(filterList, jsonData) {
      var _this5 = this;

      var data = jsonData.map(function (item) {
        return filterList.map(function (key) {
          if (key == 'pay_bank_account' || key == 'collect_bank_account') {
            return _this5.filterBankAccount(item[key]);
          }

          if (key == 'trade_type') {
            return item[key] ? _this5.tradeTypeJson[item[key]] : '-';
          }
          if (key == 'currency') {
            return '人民币';
          }
          if (key == 'amount') {
            return _this5.filterCent2YuanCurrencyAmount([item[key], item['currency']]);
          }

          if (key == 'real_pay_type') {
            return _this5.realPayTypeJson[item[key]];
          }

          if (key == 'interest_rate') {
            return item[key] ? _this5.filterPercentage(item[key]) : '-';
          }

          return item[key] ? item[key] : '-';
        });
      });

      return data;
    },

    // 搜索数据
    getMainBodyListData: function getMainBodyListData() {
      var _this6 = this;

      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_mainBody__["e" /* getMainBodyList */])({
        page: 1,
        limit: -1
      }).then(function (res) {
        var data = res.data;
        _this6.mainBodyList = data.data;
        _this6.mainBodyLoading = false;
      }).catch(function () {
        _this6.mainBodyLoading = false;
      });
    },
    mainBodySelectToggle: function mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyListData();
      }
    }
  }
});

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [_c('tp-breadcrumb'), _vm._v(" "), _c('div', {
    staticClass: "search-form-box"
  }, [_c('el-tooltip', {
    staticClass: "item",
    staticStyle: {
      "position": "fixed",
      "top": "76px",
      "right": "50px"
    },
    attrs: {
      "content": _vm.searchFormStatus,
      "effect": "light",
      "placement": "top"
    }
  }, [_c('el-button', {
    staticStyle: {
      "padding": "6px"
    },
    attrs: {
      "icon": "el-icon-search",
      "type": "default",
      "circle": ""
    },
    on: {
      "click": function($event) {
        _vm.showSearchForm = !_vm.showSearchForm
      }
    }
  })], 1), _vm._v(" "), _c('el-form', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showSearchForm),
      expression: "showSearchForm"
    }],
    attrs: {
      "inline": true,
      "label-width": "100px",
      "label-position": "left",
      "size": "mini"
    },
    model: {
      value: (_vm.searchForm),
      callback: function($$v) {
        _vm.searchForm = $$v
      },
      expression: "searchForm"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令到达时间"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "value-format": _vm.datetimeFormat,
      "type": "datetime",
      "placeholder": "选择日期时间"
    },
    model: {
      value: (_vm.searchForm.apply_begin_time),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "apply_begin_time", $$v)
      },
      expression: "searchForm.apply_begin_time"
    }
  }), _vm._v(" -\n        "), _c('el-date-picker', {
    attrs: {
      "value-format": _vm.datetimeFormat,
      "type": "datetime",
      "placeholder": "选择日期时间"
    },
    model: {
      value: (_vm.searchForm.apply_end_time),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "apply_end_time", $$v)
      },
      expression: "searchForm.apply_end_time"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "指令接收时间"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "value-format": _vm.datetimeFormat,
      "type": "datetime",
      "placeholder": "选择日期时间"
    },
    model: {
      value: (_vm.searchForm.approve_begin_time),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "approve_begin_time", $$v)
      },
      expression: "searchForm.approve_begin_time"
    }
  }), _vm._v(" -\n        "), _c('el-date-picker', {
    attrs: {
      "value-format": _vm.datetimeFormat,
      "type": "datetime",
      "placeholder": "选择日期时间"
    },
    model: {
      value: (_vm.searchForm.approve_end_time),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "approve_end_time", $$v)
      },
      expression: "searchForm.approve_end_time"
    }
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "权签审批时间"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "value-format": _vm.datetimeFormat,
      "type": "datetime",
      "placeholder": "选择日期时间"
    },
    model: {
      value: (_vm.searchForm.audit_begin_time),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "audit_begin_time", $$v)
      },
      expression: "searchForm.audit_begin_time"
    }
  }), _vm._v(" -\n        "), _c('el-date-picker', {
    attrs: {
      "value-format": _vm.datetimeFormat,
      "type": "datetime",
      "placeholder": "选择日期时间"
    },
    model: {
      value: (_vm.searchForm.audit_end_time),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "audit_end_time", $$v)
      },
      expression: "searchForm.audit_end_time"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "业务类型"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择业务类型",
      "filterable": "",
      "clearable": ""
    },
    model: {
      value: (_vm.searchForm.trade_type),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "trade_type", $$v)
      },
      expression: "searchForm.trade_type"
    }
  }, _vm._l((_vm.tradeTypeJson), function(tradeTypeStr, tradeTypeCode) {
    return _c('el-option', {
      key: tradeTypeCode,
      attrs: {
        "label": tradeTypeStr,
        "value": tradeTypeCode
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
  }, [_vm._v("重置")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.exportLoading,
      "type": "success"
    },
    on: {
      "click": _vm.handleDownload
    }
  }, [_vm._v("导出")])], 1)], 1)], 1), _vm._v(" "), _c('el-table', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loading),
      expression: "loading"
    }],
    ref: "allReportsList",
    attrs: {
      "data": _vm.allReportsList,
      "header-cell-style": _vm.styleObject,
      "cell-style": _vm.styleObject,
      "height": _vm.tableHeight,
      "element-loading-text": "拼命加载中",
      "element-loading-spinner": "el-icon-loading",
      "element-loading-background": "rgba(0, 0, 0, 0.5)",
      "border": ""
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "120",
      "fixed": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.trade_uuid) ? _c('el-button', {
          attrs: {
            "size": "mini",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.triggerTransfer(scope.row.trade_uuid, scope.row.trade_type)
            }
          }
        }, [_vm._v("查看详情")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "out_order_num",
      "label": "指令编号",
      "width": "220",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.out_order_num ? scope.row.out_order_num : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "trade_order_num",
      "label": "资金交易编号",
      "width": "220",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.trade_order_num ? scope.row.trade_order_num : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "trade_date",
      "label": "交易日期",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.trade_date ? scope.row.trade_date : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pay_date",
      "label": "要求付款日",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.pay_date ? scope.row.pay_date : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "业务类别",
      "width": "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.trade_type ? _vm.tradeTypeJson[scope.row.trade_type] : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "trade_son_type",
      "label": "业务细类",
      "width": "160",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.trade_son_type ? scope.row.trade_son_type : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "币种",
      "width": "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm.mformatCurrencyStr(scope.row.currency)) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "金额",
      "width": "220"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm._f("filterCent2YuanCurrencyAmount")([scope.row.amount, scope.row.currency])) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pay_main_body_name",
      "label": "付款方",
      "width": "220",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pay_bank_name",
      "label": "付款方银行名称",
      "width": "220",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "pay_bank_account",
      "label": "付款方银行账号",
      "width": "220",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm._f("filterBankAccount")(scope.row.pay_bank_account)) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "collect_main_body_name",
      "label": "收款方",
      "width": "220",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.collect_main_body_name ? scope.row.collect_main_body_name : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "collect_bank_name",
      "label": "收款方银行名称",
      "width": "220",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.collect_bank_name ? scope.row.collect_bank_name : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "collect_bank_account",
      "label": "收款方银行账号",
      "width": "220",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm._f("filterBankAccount")(scope.row.collect_bank_account)) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "bank_water_no",
      "label": "银行交易流水号",
      "width": "150",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.bank_water_no ? scope.row.bank_water_no : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "实付类型",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm.realPayTypeJson[scope.row.real_pay_type]) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "mature_date",
      "label": "到期日",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.mature_date ? scope.row.mature_date : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "利息率",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.interest_rate !== null && scope.row.interest_rate !== '' ? _vm.filterPercentage(scope.row.interest_rate) : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "trade_entry_datetime",
      "label": "指令到达时间",
      "width": "160"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.trade_entry_datetime ? scope.row.trade_entry_datetime : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "trade_receive_datetime",
      "label": "指令接收时间",
      "width": "160"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.trade_receive_datetime ? scope.row.trade_receive_datetime : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "order_create_time",
      "label": "调拨交易提交时间",
      "width": "160"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.order_create_datetime ? scope.row.order_create_datetime : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "order_create_user_name",
      "label": "指令提交人",
      "width": "100",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.order_create_user_name ? scope.row.order_create_user_name : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "audit_name_1",
      "label": "资金交易专员",
      "width": "120",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.audit_name_1 ? scope.row.audit_name_1 : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "audit_datetime_2",
      "label": "资金部负责人审核时间",
      "width": "180"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.audit_datetime_2 ? scope.row.audit_datetime_2 : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "audit_datetime_3",
      "label": "权签审批时间",
      "width": "160"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.audit_datetime_3 ? scope.row.audit_datetime_3 : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "audit_name_3",
      "label": "权签人",
      "width": "100",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.audit_name_3 ? scope.row.audit_name_3 : '-') + "\n      ")]
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
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-d4c24d72", module.exports)
  }
}

/***/ })

});