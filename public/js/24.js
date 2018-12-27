webpackJsonp([24],{

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(778),
  /* template */
  __webpack_require__(782),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\financialPlan\\expireReceipt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] expireReceipt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0876571f", Component.options)
  } else {
    hotAPI.reload("data-v-0876571f", Component.options)
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

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getFinancialPlanList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addFinancialPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateFinancialPlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getFinancialPlanDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getFinancialProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addFinancialProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return updateFinancialProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activateFinancialProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cancelFinancialProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return financialFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return financialFlowReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return saveRedemption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return auditRedemption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取购买理财计划列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {number} data.hasAudit          审核状态：0-所有，1-无需审核处理，2-需要审核处理，默认0，非必填
 */
var getFinancialPlanList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.ListPlan',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getFinancialPlanList(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 新增理财计划
 * @param {json} data
 *  @param {string} data.product_name      理财产品名称
 *  @param {string} data.bank_dict_value   银行名称
 */
var addFinancialPlan = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.AddPlan',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function addFinancialPlan(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 更新理财计划
 * @param {json} data
 *  @param {string} data.product_name      理财产品名称
 *  @param {string} data.bank_dict_value   银行名称
 */
var updateFinancialPlan = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.SavePlan',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function updateFinancialPlan(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 获取理财计划详情
 * @param {json} data
 *  @param {string} data.uuid 理财计划唯一标识uuid
 */
var getFinancialPlanDetail = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.DetailPlan',
              body: data
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function getFinancialPlanDetail(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 获取理财产品列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.product_name      理财产品名称，搜索条件，非必填
 *  @param {string} data.bank_dict_value   银行名称，搜索条件，非必填
 */
var getFinancialProductList = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.ListProduct',
              body: data
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getFinancialProductList(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 新增理财产品
 * @param {json} data
 *  @param {string} data.product_name      理财产品名称
 *  @param {string} data.bank_dict_value   银行名称
 */
var addFinancialProduct = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.AddProduct',
              body: data
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function addFinancialProduct(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * 编辑理财产品
 * @param {json} data
 *  @param {string} data.uuid              理财产品uuid
 *  @param {string} data.product_name      理财产品名称
 *  @param {string} data.bank_dict_value   银行名称
 *  @param {number} data.status            启用状态：1-启用，2-注销
 */
var updateFinancialProduct = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.UpdateProduct',
              body: data
            }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function updateFinancialProduct(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * 启用理财产品
 * @param {json} data
 *  @param {string} data.uuid              理财产品uuid
 */
var activateFinancialProduct = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.StatusProduct',
              body: Object.assign({}, data, { status: 1 })
            }));

          case 1:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function activateFinancialProduct(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * 注销理财产品
 * @param {json} data
 *  @param {string} data.uuid              理财产品uuid
 */
var cancelFinancialProduct = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.StatusProduct',
              body: Object.assign({}, data, { status: 2 })
            }));

          case 1:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function cancelFinancialProduct(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * 理财产品审核
 * @param {json} data
 *  @param {string} data.plan_uuid           业务数据唯一标识uuid
 *  @param {string} data.type                审批类型:start-发起审批,audit-审核
 *  @param {string} data.info                审批建议
 *  @param {string} data.approve_type        审批通过或拒绝: 1-审批通过,2-审批拒绝
 *  @param {string} data.bank_water_no       银行流水号
 *  @param {string} data.bank_water_img_uuid 银行流水回单附件
 */
function financialAudit(data) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
    serviceName: 'com.jyblife.logic.bg.financial.AuditPlan',
    body: data
  });
}

/**
 * 理财产品审核通过
 * @param {json} data
 *  @param {string} data.plan_uuid           业务数据唯一标识uuid
 *  @param {string} data.type                审批类型:start-发起审批,audit-审核
 *  @param {string} data.info                审批建议
 *  @param {string} data.approve_type        审批通过或拒绝: 1-审批通过,2-审批拒绝
 *  @param {string} data.bank_water_no       银行流水号
 *  @param {string} data.bank_water_img_uuid 银行流水回单附件
 */
var financialFlowResolve = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt('return', financialAudit(Object.assign({}, data, { type: 'audit', approve_type: '1' })));

          case 1:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function financialFlowResolve(_x10) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * 理财产品审核通过
 * @param {json} data
 *  @param {string} data.plan_uuid           业务数据唯一标识uuid
 *  @param {string} data.type                审批类型:start-发起审批,audit-审核
 *  @param {string} data.info                审批建议
 *  @param {string} data.approve_type        审批通过或拒绝: 1-审批通过,2-审批拒绝
 *  @param {string} data.bank_water_no       银行流水号
 *  @param {string} data.bank_water_img_uuid 银行流水回单附件
 */
var financialFlowReject = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt('return', financialAudit(Object.assign({}, data, { type: 'audit', approve_type: '2' })));

          case 1:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function financialFlowReject(_x11) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * 理财产品赎回修改
 * @param {json} data
 *  @param {string} data.plan_uuid           理财计划uuid
 *  @param {string} data.cash_flow           现金流更改数组
 */
var saveRedemption = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.SaveRedemption',
              body: data
            }));

          case 1:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function saveRedemption(_x12) {
    return _ref12.apply(this, arguments);
  };
}();

/**
 * 赎回审核
 * @param {json} data
 *  @param {string} data.plan_uuid       理财计划uuid
 *  @param {string} data.cash_flow_uuid  赎回现金流uuid
 */
var auditRedemption = function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(data) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.financial.AuditRedemption',
              body: data
            }));

          case 1:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  return function auditRedemption(_x13) {
    return _ref13.apply(this, arguments);
  };
}();

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_financial__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expireFlowReceipt_vue__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__expireFlowReceipt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__expireFlowReceipt_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ExpireFlowReceipt: __WEBPACK_IMPORTED_MODULE_1__expireFlowReceipt_vue___default.a
  },
  data: function data() {
    return {
      loading: false,
      reviewFinancialPlan: {
        plan_uuid: '',
        plan_main_body_uuid: '',
        pay_bank_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        money_manager_product_uuid: '',
        term_type: '',
        currency: '',
        currencyStr: '',
        amount: '',
        rate_start_date: '',
        rate_over_date: '',
        forecast_annual_income_rate: '',
        forecast_interest: '',
        real_pay_type: '',
        cash_flow: [],
        node_list: [],
        review_comments: ''
      },
      planTransferStatusJson: {
        0: '已保存',
        1: '待资金部负责人审核',
        2: '待权签人审核',
        4: '资金部负责人驳回',
        5: '权签人驳回',
        19: '待上传回单',
        20: '已完结'
      },
      cashFlowStatusJson: {
        0: '已保存',
        2: '待权签人审核',
        5: '权签人驳回',
        19: '待上传回单',
        20: '已赎回'
      },
      termTypeJson: {
        1: '开放式',
        2: '有效期'
      },
      timestamp: Date.now(),
      expireFlowReceiptDialogVisible: false,
      currentIndex: '',
      currentRedemption: {},
      rejectCashFlow: [],
      needExpireAudit: false,
      needExpireReceipt: false
    };
  },
  created: function created() {
    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'financialPlanList'
      });
    } else {
      this.reviewFinancialPlan.plan_uuid = this.$route.params.uuid;
      this.getFinancialPlanDetailData();
    }
  },

  methods: {
    // 获取详情
    getFinancialPlanDetailData: function getFinancialPlanDetailData() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__api_financial__["h" /* getFinancialPlanDetail */])({
        plan_uuid: this.reviewFinancialPlan.plan_uuid
      }).then(function (res) {
        Object.assign(_this.reviewFinancialPlan, res.data);

        _this.reviewFinancialPlan.pay_bank_account_str = _this.filterBankAccount(_this.reviewFinancialPlan.pay_bank_account);

        _this.reviewFinancialPlan.currencyStr = _this.mformatCurrencyStr(_this.reviewFinancialPlan.currency);

        _this.reviewFinancialPlan.forecast_annual_income_rate = _this.filterPercentage(_this.reviewFinancialPlan.forecast_annual_income_rate).toString().slice(0, -1);
        _this.reviewFinancialPlan.amount = _this.filterCent2YuanNoCurrencyAmount(_this.reviewFinancialPlan.amount);
        _this.reviewFinancialPlan.forecast_interest = _this.filterCent2YuanNoCurrencyAmount(_this.reviewFinancialPlan.forecast_interest);

        if (_this.reviewFinancialPlan.node_list) {
          _this.reviewFinancialPlan.node_list = _this.reviewFinancialPlan.node_list.filter(function (item) {
            return item.node_status != '1';
          });
        } else {
          _this.reviewFinancialPlan.node_list = [];
        }

        for (var i = 0; i < _this.reviewFinancialPlan.cash_flow.length; i++) {
          if (_this.reviewFinancialPlan.cash_flow[i].status == 5) {
            _this.rejectCashFlow.push(_this.reviewFinancialPlan.cash_flow[i]);
          }

          if ((_this.reviewFinancialPlan.cash_flow[i].status == 19 || _this.reviewFinancialPlan.cash_flow[i].status == 20) && (_this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '2' || _this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '3') || _this.reviewFinancialPlan.cash_flow[i].cash_flow_type == '1') {
            _this.reviewFinancialPlan.cash_flow[i].real_amount = Number(_this.reviewFinancialPlan.cash_flow[i].amount) + Number(_this.reviewFinancialPlan.cash_flow[i].change_amount);
          }

          if (_this.reviewFinancialPlan.cash_flow[i].status == 2 && _this.reviewFinancialPlan.cash_flow[i].cash_flow_type != 1) {
            _this.needExpireAudit = true;
          }

          if (_this.reviewFinancialPlan.cash_flow[i].status == 19 && _this.reviewFinancialPlan.cash_flow[i].cash_flow_type != 1) {
            _this.needExpireReceipt = true;
          }
        }

        _this.loading = false;
      }).catch(function () {
        _this.loading = false;
      });
    },


    // 隐藏驳回数据
    hideRejectRow: function hideRejectRow(_ref) {
      var row = _ref.row;

      if (row.status == 5) {
        return 'display: none';
      } else {
        return '';
      }
    },


    // 通过审核
    resolveAuditRedemption: function resolveAuditRedemption() {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      var cash_flow = [];

      for (var i = 0; i < this.reviewFinancialPlan.cash_flow.length; i++) {
        if (this.reviewFinancialPlan.cash_flow[i].status == 19 && this.reviewFinancialPlan.cash_flow[i].cash_flow_type != 1) {
          cash_flow.push(this.reviewFinancialPlan.cash_flow[i]);

          if (this.reviewFinancialPlan.cash_flow[i].cash_flow_type == 2 && this.reviewFinancialPlan.cash_flow[i].bank_img_file_uuid == '') {
            this.$message.warning('请完善' + this.reviewFinancialPlan.cash_flow[i].repay_date + '的现金流银行流水数据');
            this.loading = false;
            return false;
          }
        }
      }

      this.mconfirm('确认更新银行流水和实际值吗?').then(function () {
        _this2.mshowLoading('正在提交...');

        Object(__WEBPACK_IMPORTED_MODULE_0__api_financial__["d" /* auditRedemption */])({
          plan_uuid: _this2.reviewFinancialPlan.plan_uuid,
          cash_flow: cash_flow,
          info: '',
          approve_type: '1'
        }).then(function () {
          _this2.loading = false;
          _this2.mhideLoading();
          _this2.$message.success('提交成功');
          _this2.$router.replace({
            name: 'financialPlanList'
          });
        }).catch(function () {
          _this2.loading = false;
          _this2.mhideLoading();
        });
      }).catch(function () {
        _this2.loading = false;
      });
    },


    // 触发更新弹窗
    triggerExpireReceipt: function triggerExpireReceipt(index, flow) {
      this.currentIndex = index;
      Object.assign(this.currentRedemption, flow);
      this.expireFlowReceiptDialogVisible = true;
    },

    // 更新成功
    updateNewCashFlow: function updateNewCashFlow(index, newCashFlow) {
      this.reviewFinancialPlan.cash_flow.splice(index, 1, newCashFlow);
      this.expireFlowReceiptDialogVisible = false;
    },
    closeDialog: function closeDialog() {
      this.expireFlowReceiptDialogVisible = false;
    }
  }
});

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(780),
  /* template */
  __webpack_require__(781),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\financialPlan\\expireFlowReceipt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] expireFlowReceipt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a635591", Component.options)
  } else {
    hotAPI.reload("data-v-3a635591", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_validate__ = __webpack_require__(638);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    currentIndex: {
      type: Number,
      default: 0
    },
    currentRedemption: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    var checkMoney = function checkMoney(rule, value, callback) {
      if (value && !Object(__WEBPACK_IMPORTED_MODULE_0__utils_validate__["a" /* validate2Decimal */])(value)) {
        return callback(new Error('请输入不超过两位小数的正数值'));
      }

      if (value) {
        var len = (value + '').length;
        var valArr = (value + '').split('.');
        if (valArr[1]) {
          if (valArr[1] == '00') {
            len = len - 3;
          }

          if (valArr[1] == '0') {
            len = len - 2;
          }

          if (/^[1-9]0$/.test(valArr[1])) {
            len = len - 1;
          }
        } else {
          if ((value + '').indexOf('.') > -1) {
            len = len - 1;
          }
        }

        if (len > 10) return callback(new Error('请输入不超过10位有效位的数值'));
      }

      return callback();
    };

    return {
      loading: false,
      index: '',
      updateRedemption: {
        uuid: '',
        repay_date: '',
        cash_flow_type: '',
        amount: '',
        real_amount: '',
        change_amount: 0,
        info: '',
        bank_water: '',
        bank_img_file_uuid: ''
      },
      rules: {
        real_amount: [{
          required: true,
          message: '请输入金额',
          trigger: 'blur'
        }, {
          validator: checkMoney,
          trigger: 'blur'
        }],
        bank_img_file_uuid: [{
          required: true,
          message: '请上传银行回单截图',
          trigger: 'change'
        }]
      },
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
    };
  },
  created: function created() {
    Object.assign(this.updateRedemption, this.currentRedemption);
    this.updateRedemption.amount = (Number(this.updateRedemption.amount) / 100).toFixed(2);
    this.updateRedemption.real_amount = (Number(this.updateRedemption.real_amount) / 100).toFixed(2);

    this.updateRedemption.cash_flow_type = Number(this.updateRedemption.cash_flow_type);

    if (this.updateRedemption.bank_img_file_uuid) {
      var imgList = this.updateRedemption.bank_img_file_uuid.split(',');
      for (var i = 0; i < imgList.length; i++) {
        this.receiptFileList.push({
          name: '回单' + i,
          uuid: imgList[i],
          url: '/api/download?uuid=' + imgList[i]
        });
      }
    }
  },

  methods: {
    // 保存更新
    submitForm: function submitForm(formName) {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;
      var bank_img_file_uuid = '';
      for (var i = 0; i < this.receiptFileList.length; i++) {
        bank_img_file_uuid += !i ? this.receiptFileList[i].uuid : ',' + this.receiptFileList[i].uuid;
      }
      this.updateRedemption.bank_img_file_uuid = bank_img_file_uuid;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var cashFlow = Object.assign({}, _this.currentRedemption);

          if (cashFlow.cash_flow_type == 2) {
            cashFlow.bank_water = _this.updateRedemption.bank_water;
            cashFlow.bank_img_file_uuid = _this.updateRedemption.bank_img_file_uuid;
            cashFlow.info = _this.updateRedemption.info;
            cashFlow.is_delete = '1';
            cashFlow.audit = '2';
          } else if (cashFlow.cash_flow_type == 3) {
            cashFlow.real_amount = _this.filterYuan2CentAmount(_this.updateRedemption.real_amount);
            cashFlow.change_amount = _this.filterYuan2CentAmount(_this.updateRedemption.real_amount) - _this.filterYuan2CentAmount(_this.updateRedemption.amount);
            cashFlow.info = _this.updateRedemption.info;
            cashFlow.is_delete = '1';
            cashFlow.audit = '2';
          }

          _this.$emit('expireFlowReceiptSuccess', _this.currentIndex, cashFlow);
          _this.loading = false;
        } else {
          _this.loading = false;
          _this.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    },


    // 上传回单
    handleFilePaste: function handleFilePaste(event) {
      if (event.clipboardData && event.clipboardData.items) {
        var image = this.isImage(event.clipboardData.items);
        if (image) {
          event.preventDefault();
          var file = image.getAsFile();
          var uploadFile = {
            name: file.name,
            percentage: 0,
            raw: file,
            size: file.size,
            status: 'ready'
          };

          this.$refs.receiptUpload.uploadFiles.push(uploadFile);
          this.$refs.receiptUpload.submit();
        } else {
          event.preventDefault();
          return false;
        }
      }
    },
    handleReceiptUploadSuccess: function handleReceiptUploadSuccess(res, file, fileList) {
      this.receiptFileList = fileList;
      if (res.code == '0' && res.data && res.data.uuid) {
        this.receiptFileList[this.receiptFileList.length - 1].uuid = res.data.uuid;
        this.receiptFileList[this.receiptFileList.length - 1].url = '/api/download?uuid=' + res.data.uuid;
      } else {
        this.receiptFileList.splice(-1, 1);
        this.$message.error('服务器繁忙，请重试！');
      }

      this.updateReceiptUuid();
    },
    handleReceiptUploadError: function handleReceiptUploadError() {
      this.$message.error('服务器繁忙，请重试！');
    },
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handlePictureCardRemove: function handlePictureCardRemove(file, fileList) {
      this.receiptFileList = fileList;
    },
    updateReceiptUuid: function updateReceiptUuid() {
      var uuids = '';
      for (var i = 0; i < this.receiptFileList.length; i++) {
        uuids += i ? ',' + this.receiptFileList[i].uuid : this.receiptFileList[i].uuid;
      }
      this.updateRedemption.bank_img_file_uuid = uuids;
    },
    beforeReceiptUpload: function beforeReceiptUpload(file) {
      if (this.receiptFileList.length >= 3) {
        this.$message.warning('单条银行流水最多上传三张回单截图');
        return false;
      }

      this.beforeImgUpload(file);
    }
  }
});

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-container form-dialog-box"
  }, [_c('el-form', {
    ref: "updateRedemption",
    attrs: {
      "model": _vm.updateRedemption,
      "rules": _vm.rules,
      "label-width": "100px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "赎回日期",
      "prop": "repay_date"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "align": "right",
      "type": "date",
      "placeholder": "选择日期",
      "value-format": "yyyy-MM-dd",
      "disabled": ""
    },
    model: {
      value: (_vm.updateRedemption.repay_date),
      callback: function($$v) {
        _vm.$set(_vm.updateRedemption, "repay_date", $$v)
      },
      expression: "updateRedemption.repay_date"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "事项",
      "prop": "cash_flow_type"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "选择事项",
      "filterable": "",
      "disabled": ""
    },
    model: {
      value: (_vm.updateRedemption.cash_flow_type),
      callback: function($$v) {
        _vm.$set(_vm.updateRedemption, "cash_flow_type", $$v)
      },
      expression: "updateRedemption.cash_flow_type"
    }
  }, [_c('el-option', {
    attrs: {
      "value": 2,
      "label": "本金回款"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": 3,
      "label": "利息回款"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "金额",
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "请输入金额",
      "disabled": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(append) {
        return [_vm._v("元")]
      }
    }]),
    model: {
      value: (_vm.updateRedemption.amount),
      callback: function($$v) {
        _vm.$set(_vm.updateRedemption, "amount", $$v)
      },
      expression: "updateRedemption.amount"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "实际金额",
      "prop": "real_amount"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": _vm.updateRedemption.cash_flow_type == 2,
      "type": "number",
      "placeholder": "请输入实际"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(append) {
        return [_vm._v("元")]
      }
    }]),
    model: {
      value: (_vm.updateRedemption.real_amount),
      callback: function($$v) {
        _vm.$set(_vm.updateRedemption, "real_amount", $$v)
      },
      expression: "updateRedemption.real_amount"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "说明",
      "prop": "info"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入说明"
    },
    model: {
      value: (_vm.updateRedemption.info),
      callback: function($$v) {
        _vm.$set(_vm.updateRedemption, "info", $$v)
      },
      expression: "updateRedemption.info"
    }
  })], 1), _vm._v(" "), (_vm.updateRedemption.cash_flow_type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "银行流水号",
      "prop": "bank_water"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入银行流水号"
    },
    model: {
      value: (_vm.updateRedemption.bank_water),
      callback: function($$v) {
        _vm.$set(_vm.updateRedemption, "bank_water", $$v)
      },
      expression: "updateRedemption.bank_water"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.updateRedemption.cash_flow_type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "回单截图",
      "prop": "bank_img_file_uuid"
    }
  }, [_c('el-upload', {
    ref: "receiptUpload",
    attrs: {
      "file-list": _vm.receiptFileList,
      "before-upload": _vm.beforeReceiptUpload,
      "on-success": _vm.handleReceiptUploadSuccess,
      "on-error": _vm.handleReceiptUploadError,
      "on-preview": _vm.handlePictureCardPreview,
      "on-remove": _vm.handlePictureCardRemove,
      "limit": 3,
      "accept": "jpg,jpeg,gif,png",
      "action": "/api/upload",
      "list-type": "picture-card"
    }
  }, [_c('div', {
    attrs: {
      "id": "file-paste",
      "contenteditable": ""
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        $event.stopPropagation();
      },
      "paste": _vm.handleFilePaste
    }
  }, [_c('span', {
    staticClass: "sub-text"
  }, [_vm._v("截图后此处粘贴")]), _vm._v(" "), _c('span', {
    staticClass: "sub-text"
  }, [_vm._v("最多上传三张")])])]), _vm._v(" "), (_vm.dialogVisible) ? _c('el-dialog', {
    key: _vm.timestamp,
    staticClass: "preview-dialog",
    attrs: {
      "append-to-body": true,
      "visible": _vm.dialogVisible
    },
    on: {
      "update:visible": function($event) {
        _vm.dialogVisible = $event
      },
      "close": function($event) {
        _vm.timestamp = Date.now()
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.dialogImageUrl,
      "width": "100%",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('el-button', {
    on: {
      "click": function($event) {
        _vm.openInNewPage(_vm.dialogImageUrl)
      }
    }
  }, [_vm._v("查看原图")])], 1)]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [_c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('updateRedemption')
      }
    }
  }, [_vm._v("保存")]), _vm._v(" "), _c('el-button', {
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
     require("vue-hot-reload-api").rerender("data-v-3a635591", module.exports)
  }
}

/***/ }),

/***/ 782:
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
  }, [_c('span', [_vm._v("理财赎回上传回单")])]), _vm._v(" "), _c('el-form', {
    ref: "reviewFinancialPlan",
    attrs: {
      "model": _vm.reviewFinancialPlan,
      "label-width": "120px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "交易主体",
      "prop": "plan_main_body_uuid"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.plan_main_body_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "plan_main_body_name", $$v)
      },
      expression: "reviewFinancialPlan.plan_main_body_name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "出款银行名称",
      "prop": "pay_bank_uuid"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.pay_bank_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "pay_bank_name", $$v)
      },
      expression: "reviewFinancialPlan.pay_bank_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "出款银行账号",
      "prop": "pay_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.pay_bank_account_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "pay_bank_account_str", $$v)
      },
      expression: "reviewFinancialPlan.pay_bank_account_str"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "投资产品",
      "prop": "money_manager_product_uuid"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.money_manager_product_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "money_manager_product_name", $$v)
      },
      expression: "reviewFinancialPlan.money_manager_product_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "期限类别",
      "prop": "term_type"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.termTypeJson[_vm.reviewFinancialPlan.term_type]),
      callback: function($$v) {
        _vm.$set(_vm.termTypeJson, _vm.reviewFinancialPlan.term_type, $$v)
      },
      expression: "termTypeJson[reviewFinancialPlan.term_type]"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "币种",
      "prop": "currency"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.currencyStr),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "currencyStr", $$v)
      },
      expression: "reviewFinancialPlan.currencyStr"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "投资总本金",
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入投资总本金",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.amount),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "amount", $$v)
      },
      expression: "reviewFinancialPlan.amount"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1)], 1), _vm._v(" "), (_vm.reviewFinancialPlan.term_type == 2) ? _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "起息日",
      "prop": "rate_start_date"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.rate_start_date),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "rate_start_date", $$v)
      },
      expression: "reviewFinancialPlan.rate_start_date"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "投资产品到期日",
      "prop": "rate_over_date"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.rate_over_date),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "rate_over_date", $$v)
      },
      expression: "reviewFinancialPlan.rate_over_date"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.reviewFinancialPlan.term_type == 2) ? _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "预计年化收益率",
      "prop": "forecast_annual_income_rate"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入预计年化收益率",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.forecast_annual_income_rate),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "forecast_annual_income_rate", $$v)
      },
      expression: "reviewFinancialPlan.forecast_annual_income_rate"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("%")])], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预计利息",
      "prop": "forecast_interest"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入预计利息",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.forecast_interest),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "forecast_interest", $$v)
      },
      expression: "reviewFinancialPlan.forecast_interest"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.reviewFinancialPlan.term_type == 1) ? _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "起息日",
      "prop": "rate_start_date"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.rate_start_date),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "rate_start_date", $$v)
      },
      expression: "reviewFinancialPlan.rate_start_date"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预计年化收益率",
      "prop": "forecast_annual_income_rate"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入预计年化收益率",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewFinancialPlan.forecast_annual_income_rate),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "forecast_annual_income_rate", $$v)
      },
      expression: "reviewFinancialPlan.forecast_annual_income_rate"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("%")])], 2)], 1)], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.realPayTypeJson[_vm.reviewFinancialPlan.real_pay_type]),
      callback: function($$v) {
        _vm.$set(_vm.realPayTypeJson, _vm.reviewFinancialPlan.real_pay_type, $$v)
      },
      expression: "realPayTypeJson[reviewFinancialPlan.real_pay_type]"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令状态",
      "prop": "plan_status"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.planTransferStatusJson[_vm.reviewFinancialPlan.plan_status]),
      callback: function($$v) {
        _vm.$set(_vm.planTransferStatusJson, _vm.reviewFinancialPlan.plan_status, $$v)
      },
      expression: "planTransferStatusJson[reviewFinancialPlan.plan_status]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "付款状态",
      "prop": "pay_status"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.payStatusJson[_vm.reviewFinancialPlan.pay_status]),
      callback: function($$v) {
        _vm.$set(_vm.payStatusJson, _vm.reviewFinancialPlan.pay_status, $$v)
      },
      expression: "payStatusJson[reviewFinancialPlan.pay_status]"
    }
  })], 1)], 1), _vm._v(" "), _c('el-card', {
    staticClass: "box-card box-card-inside"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("理财现金流表")])]), _vm._v(" "), _c('div', [_c('el-table', {
    attrs: {
      "data": _vm.reviewFinancialPlan.cash_flow,
      "row-style": _vm.hideRejectRow
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "repay_date",
      "label": "日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "事项"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(_vm.cashFlowTypeJson[scope.row.cash_flow_type]) + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "金额"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(_vm._f("filterCent2YuanCurrencyAmount")([scope.row.amount, _vm.reviewFinancialPlan.currency])) + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "实际值"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(scope.row.status == 19 || scope.row.status == 20 || scope.row.cash_flow_type == 1 ? _vm.filterCent2YuanCurrencyAmount([scope.row.real_amount, _vm.reviewFinancialPlan.currency]) : '') + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "调整额"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(scope.row.status == 19 || scope.row.status == 20 || scope.row.cash_flow_type == 1 ? _vm.filterCent2YuanCurrencyAmount([scope.row.change_amount, _vm.reviewFinancialPlan.currency]) : '') + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "说明",
      "prop": "info"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(scope.row.cash_flow_type == 1 ? _vm.payStatusJson[_vm.reviewFinancialPlan.pay_status] : _vm.cashFlowStatusJson[scope.row.status]) + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "150px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.status == 19 && scope.row.cash_flow_type == 2) ? [_c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.triggerExpireReceipt(scope.$index, scope.row)
            }
          }
        }, [_vm._v("上传回单")])] : _vm._e(), _vm._v(" "), (scope.row.status == 19 && scope.row.cash_flow_type == 3) ? [_c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.triggerExpireReceipt(scope.$index, scope.row)
            }
          }
        }, [_vm._v("修改")])] : _vm._e()]
      }
    }])
  })], 1)], 1)]), _vm._v(" "), (_vm.needExpireAudit) ? _c('el-form-item', {
    attrs: {
      "prop": "review_comments",
      "label-width": "0"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入审核意见"
    },
    model: {
      value: (_vm.reviewFinancialPlan.review_comments),
      callback: function($$v) {
        _vm.$set(_vm.reviewFinancialPlan, "review_comments", $$v)
      },
      expression: "reviewFinancialPlan.review_comments"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.reviewFinancialPlan.pay_status == 2 && _vm.reviewFinancialPlan.is_pay_off != 2 &&
    !_vm.needExpireAudit && _vm.needExpireReceipt) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.resolveAuditRedemption('reviewFinancialPlan')
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "financialPlanList",
      "size": "medium"
    }
  })], 1), _vm._v(" "), (_vm.rejectCashFlow && _vm.rejectCashFlow.length) ? _c('el-card', {
    staticClass: "box-card box-card-inside",
    staticStyle: {
      "margin-top": "80px"
    }
  }, [_c('div', {
    staticClass: "box-card-header",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("理财现金流驳回数据表")])]), _vm._v(" "), _c('div', [_c('el-table', {
    attrs: {
      "data": _vm.rejectCashFlow
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "repay_date",
      "label": "日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "事项"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(_vm.cashFlowTypeJson[scope.row.cash_flow_type]) + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "金额"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(_vm._f("filterCent2YuanCurrencyAmount")([scope.row.amount, _vm.reviewFinancialPlan.currency])) + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态",
      "prop": "status"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(_vm.cashFlowStatusJson[scope.row.status]) + "\n                ")]
      }
    }])
  })], 1)], 1)]) : _vm._e(), _vm._v(" "), _c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("操作日志")])]), _vm._v(" "), _c('div', [(_vm.reviewFinancialPlan.node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.reviewFinancialPlan.node_list
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "操作人",
      "prop": "optor_name"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作类型",
      "prop": "node_desc"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作时间",
      "prop": "update_time"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "处理意见"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(_vm.nodeStatusJson[scope.row.node_status] + (scope.row.deal_remark ? scope.row.deal_remark : '无')) + "\n                ")]
      }
    }])
  })], 1) : _vm._e()], 1)])], 1)], 1)], 1), _vm._v(" "), (_vm.expireFlowReceiptDialogVisible) ? _c('el-dialog', {
    key: 'expireFlowReceiptDialog' + _vm.timestamp,
    attrs: {
      "append-to-body": true,
      "visible": _vm.expireFlowReceiptDialogVisible,
      "title": "编辑赎回",
      "left": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.expireFlowReceiptDialogVisible = $event
      },
      "close": function($event) {
        _vm.timestamp = Date.now()
      }
    }
  }, [_c('expire-flow-receipt', {
    attrs: {
      "current-index": _vm.currentIndex,
      "current-redemption": _vm.currentRedemption
    },
    on: {
      "expireFlowReceiptSuccess": _vm.updateNewCashFlow,
      "closeDialog": _vm.closeDialog
    }
  })], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0876571f", module.exports)
  }
}

/***/ })

});