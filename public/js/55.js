webpackJsonp([55],{

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(747),
  /* template */
  __webpack_require__(748),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\innerTransfer\\confirm.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] confirm.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1930a755", Component.options)
  } else {
    hotAPI.reload("data-v-1930a755", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return flowStart; });
/* unused harmony export flowApprove */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flowReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return flowStop; });
/* unused harmony export getFlowDetailList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 发起流程
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var flowStart = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.flow.Start',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function flowStart(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 流程审批
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 *  @param {number} data.approve_type 审批类型：1-通过，2-拒绝
 */
var flowApprove = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.flow.Approve',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function flowApprove(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 流程审批通过
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var flowResolve = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.flow.Approve',
              body: Object.assign({}, data, { approve_type: '1' })
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function flowResolve(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 流程审批驳回
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var flowReject = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.flow.Approve',
              body: Object.assign({}, data, { approve_type: '2' })
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function flowReject(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 流程审批拒绝
 * @param {json} data
 *  @param {string} data.flow_code    业务流程编号
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var flowStop = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.flow.Approve',
              body: Object.assign({}, data, { approve_type: '3' })
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function flowStop(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 流程列表
 * @param {json} data
 *  @param {number} data.page        当前页码
 *  @param {number} data.limit       每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.flow_code   业务流程编号
 *  @param {string} data.instance_id 业务数据唯一标识uuid，多个用逗号分隔
 *  @param {string} data.node_code   业务流程节点编号
 *  @param {string} data.status      流程状态查询类型：1-待审批，2-审批通过，3-审批拒绝
 */
var getFlowDetailList = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.flow.DetailList',
              body: data
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getFlowDetailList(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getInnerTransferList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getInnerTransferDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addInnerTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return updateInnerTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return innerTransferFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return innerTransferFlowReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return innerTransferRetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return innerTransferConfirmSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return innerTransferConfirmFail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flow__ = __webpack_require__(633);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/**
 * 获取内部调拨列表
 * @param {json} data
 *  @param {number}   data.page                   当前页码
 *  @param {number}   data.limit                  每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getInnerTransferList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.inner.InnerTransferList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getInnerTransferList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取内部调拨详情
 * @param {json} data
 *  @param {string}   data.uuid                   内部调拨uuid
 */
var getInnerTransferDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.inner.InnerTransferDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getInnerTransferDetail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 新增内部调拨
 * @param {json} data
 * @param {string} data.main_body_uuid            调拨主体uuid
 * @param {string} data.opt_type                  提交操作：1-保存，2-提交
 * @param {string} data.pay_account_uuid          付款银行uuid
 * @param {string} data.pay_bank_name             付款银行名称
 * @param {string} data.pay_bank_account          付款银行账号
 * @param {string} collect_account_uuid           收款银行uuid
 * @param {string} collect_bank_name              收款银行名称
 * @param {string} collect_bank_account           收款银行账号
 * @param {string} currency                       币种
 * @param {string} amount                         调拨金额
 * @param {string} hope_deal_date                 要求调拨日期
 * @param {string} real_pay_type                  实付方式
 * @param {string} pay_remark                     银企付款备注
 * @param {string} annex_uuids                    附件
 * @param {string} special_require                调拨说明
 */
var addInnerTransfer = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.inner.CreateTransfer',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addInnerTransfer(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 更新内部调拨
 * @param {json} data
 * @param {string} data.uuid                      内部调拨uuid
 * @param {string} data.opt_type                  提交操作：1-保存，2-提交
 * @param {string} data.main_body_uuid            调拨主体uuid
 * @param {string} data.pay_account_uuid          付款银行uuid
 * @param {string} data.pay_bank_name             付款银行名称
 * @param {string} data.pay_bank_account          付款银行账号
 * @param {string} collect_account_uuid           收款银行uuid
 * @param {string} collect_bank_name              收款银行名称
 * @param {string} collect_bank_account           收款银行账号
 * @param {string} currency                       币种
 * @param {string} amount                         调拨金额
 * @param {string} hope_deal_date                 要求调拨日期
 * @param {string} real_pay_type                  实付方式
 * @param {string} pay_remark                     银企付款备注
 * @param {string} annex_uuids                    附件
 * @param {string} special_require                调拨说明
 */
var updateInnerTransfer = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.inner.UpdateTransfer',
              body: data
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateInnerTransfer(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 内部调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var innerTransferFlowResolve = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'inner_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'inner_transfer_pay_type_2_code'
            });
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(params));

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function innerTransferFlowResolve(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 内部调拨拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var innerTransferFlowReject = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'inner_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'inner_transfer_pay_type_2_code'
            });
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(params));

          case 2:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function innerTransferFlowReject(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * 打款重试
 * @param {json} data
 *  @param {string} uuid  付款调拨ID
 *  @param {string} ukPwd UKey密码
 */
var innerTransferRetry = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.inner.PayRetry',
              body: data
            }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function innerTransferRetry(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * 打款确认成功
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
var innerTransferConfirmSuccess = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.inner.ConfirmStatus',
              body: Object.assign({}, data, {
                status: 1
              })
            }));

          case 1:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function innerTransferConfirmSuccess(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * 打款确认失败
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
var innerTransferConfirmFail = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.inner.ConfirmStatus',
              body: Object.assign({}, data, {
                status: 2
              })
            }));

          case 1:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function innerTransferConfirmFail(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__ = __webpack_require__(644);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    var checkBankWater = function checkBankWater(rule, value, callback) {
      if (_this.isConfirm) {
        if (value == '') {
          return callback(new Error('请填写银行流水号'));
        }
      }

      if (value && !/^[0-9A-Z-]+$/.test(value)) {
        return callback(new Error('请输入正确的银行流水号'));
      }

      return callback();
    };
    return {
      loading: false,
      reviewInnerTransfer: {
        uuid: '',
        main_body_uuid: '',
        pay_account_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        currency: 'CNY',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        hope_deal_date: '',
        real_pay_type: '',
        annex_uuids: '',
        special_require: '',
        node_list: [],
        review_comments: '',
        bank_water: ''
      },
      rules: {
        bank_water: [{
          validator: checkBankWater,
          trigger: 'blur'
        }]
      },
      innerTransferStatusJson: {
        0: '已保存',
        1: '待资金部负责人审核',
        2: '待权签人审核',
        3: '权签人审核通过',
        5: '权签人驳回',
        20: '已完结'
      },
      fileList: [],
      isConfirm: false
    };
  },
  created: function created() {
    var _this2 = this;

    if (!this.$route.params.uuid) {
      this.$message.error('缺少内部调拨ID，请输入正确的链接');
      this.$router.replace({
        name: 'innerTransferList'
      });
    } else {
      this.reviewInnerTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__["b" /* getInnerTransferDetail */])({
        uuid: this.$route.params.uuid
      }).then(function (res) {
        Object.assign(_this2.reviewInnerTransfer, res.data);

        _this2.formatDetailData();

        _this2.loading = false;
      }).catch(function () {
        _this2.loading = false;
      });
    }
  },

  methods: {
    // 格式化详情数据
    formatDetailData: function formatDetailData() {
      // 格式化银行账号
      this.reviewInnerTransfer.pay_bank_account_str = this.filterBankAccount(this.reviewInnerTransfer.pay_bank_account);
      this.reviewInnerTransfer.collect_bank_account_str = this.filterBankAccount(this.reviewInnerTransfer.collect_bank_account);

      // 格式化金钱
      this.reviewInnerTransfer.formatAmount = this.filterCent2YuanNoCurrencyAmount(this.reviewInnerTransfer.amount);

      // 币种格式化
      this.reviewInnerTransfer.currencyStr = this.mformatCurrencyStr(this.reviewInnerTransfer.currency);

      // 格式化操作日志，去除当前审核节点
      if (this.reviewInnerTransfer.node_list) {
        this.reviewInnerTransfer.node_list = this.reviewInnerTransfer.node_list.filter(function (item) {
          return item.node_status != '1';
        });
      } else {
        this.reviewInnerTransfer.node_list = [];
      }

      // 格式化附件参数
      if (this.reviewInnerTransfer.annex) {
        for (var i = 0; i < this.reviewInnerTransfer.annex.length; i++) {
          if (this.reviewInnerTransfer.annex[i]) {
            this.fileList.push({
              name: this.reviewInnerTransfer.annex[i].origin_name,
              uuid: this.reviewInnerTransfer.annex[i].uuid,
              url: '/api/download?uuid=' + this.reviewInnerTransfer.annex[i].uuid
            });
          }
        }
      }
    },


    // 确认打款成功
    confirmInnerTransferSuccess: function confirmInnerTransferSuccess(formName) {
      var _this3 = this;

      if (this.loading) return false;
      this.loading = true;
      this.isConfirm = true;

      this.$refs[formName].validate(function (valid) {
        _this3.isConfirm = false;
        if (valid) {
          _this3.mconfirm('确认修改打款状态为成功吗？').then(function () {
            _this3.mshowLoading('正在提交...');

            Object(__WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__["e" /* innerTransferConfirmSuccess */])({
              uuid: _this3.reviewInnerTransfer.uuid,
              bank_water: _this3.reviewInnerTransfer.bank_water
            }).then(function () {
              _this3.loading = false;
              _this3.mhideLoading();
              _this3.$message.success('打款状态已更新为成功状态');
              _this3.$router.replace({
                name: 'innerTransferList'
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
    },


    // 确认打款失败
    confirmInnerTransferFail: function confirmInnerTransferFail() {
      var _this4 = this;

      if (this.loading) return false;
      this.loading = true;

      this.mconfirm('确认修改打款状态为失败吗？').then(function () {
        _this4.mshowLoading('正在提交...');

        Object(__WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__["d" /* innerTransferConfirmFail */])({
          uuid: _this4.reviewInnerTransfer.uuid
        }).then(function () {
          _this4.loading = false;
          _this4.mhideLoading();
          _this4.$message.success('打款状态已更新为失败状态');
          _this4.$router.replace({
            name: 'innerTransferList'
          });
        }).catch(function () {
          _this4.loading = false;
          _this4.mhideLoading();
        });
      }).catch(function () {
        _this4.loading = false;
      });
    }
  }
});

/***/ }),

/***/ 748:
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
  }, [_c('span', [_vm._v("打款状态确认")])]), _vm._v(" "), _c('el-form', {
    ref: "reviewInnerTransfer",
    attrs: {
      "model": _vm.reviewInnerTransfer,
      "rules": _vm.rules,
      "label-width": "140px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "调拨主体",
      "prop": "main_body_uuid"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.main_body_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "main_body_name", $$v)
      },
      expression: "reviewInnerTransfer.main_body_name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "付款银行名称",
      "prop": "pay_bank_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.pay_bank_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "pay_bank_name", $$v)
      },
      expression: "reviewInnerTransfer.pay_bank_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款银行名称",
      "prop": "collect_bank_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.collect_bank_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "collect_bank_name", $$v)
      },
      expression: "reviewInnerTransfer.collect_bank_name"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "付款银行账号",
      "prop": "pay_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.pay_bank_account_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "pay_bank_account_str", $$v)
      },
      expression: "reviewInnerTransfer.pay_bank_account_str"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款银行账号",
      "prop": "collect_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.collect_bank_account_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "collect_bank_account_str", $$v)
      },
      expression: "reviewInnerTransfer.collect_bank_account_str"
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
      value: (_vm.reviewInnerTransfer.currencyStr),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "currencyStr", $$v)
      },
      expression: "reviewInnerTransfer.currencyStr"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "金额",
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入金额",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.formatAmount),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "formatAmount", $$v)
      },
      expression: "reviewInnerTransfer.formatAmount"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.realPayTypeJson[_vm.reviewInnerTransfer.real_pay_type]),
      callback: function($$v) {
        _vm.$set(_vm.realPayTypeJson, _vm.reviewInnerTransfer.real_pay_type, $$v)
      },
      expression: "realPayTypeJson[reviewInnerTransfer.real_pay_type]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "要求调拨日期",
      "prop": "hope_deal_date"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.hope_deal_date),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "hope_deal_date", $$v)
      },
      expression: "reviewInnerTransfer.hope_deal_date"
    }
  })], 1)], 1), _vm._v(" "), (_vm.reviewInnerTransfer.real_pay_type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "付款备注",
      "prop": "pay_remark"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.pay_remark),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "pay_remark", $$v)
      },
      expression: "reviewInnerTransfer.pay_remark"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "附件",
      "prop": "annex_uuids"
    }
  }, [(_vm.fileList.length) ? _c('el-upload', {
    ref: "upload",
    staticClass: "no-upload-text",
    attrs: {
      "file-list": _vm.fileList,
      "auto-upload": false,
      "on-preview": _vm.handleFilePreview,
      "action": ""
    }
  }) : _c('div', {
    staticClass: "sub-text"
  }, [_vm._v("无")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令状态"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.innerTransferStatusJson[_vm.reviewInnerTransfer.transfer_status]),
      callback: function($$v) {
        _vm.$set(_vm.innerTransferStatusJson, _vm.reviewInnerTransfer.transfer_status, $$v)
      },
      expression: "innerTransferStatusJson[reviewInnerTransfer.transfer_status]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "调拨状态"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.payStatusJson[_vm.reviewInnerTransfer.pay_status]),
      callback: function($$v) {
        _vm.$set(_vm.payStatusJson, _vm.reviewInnerTransfer.pay_status, $$v)
      },
      expression: "payStatusJson[reviewInnerTransfer.pay_status]"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令到达时间"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.create_time),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "create_time", $$v)
      },
      expression: "reviewInnerTransfer.create_time"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "调拨说明",
      "prop": "special_require"
    }
  }, [(_vm.reviewInnerTransfer.special_require) ? _c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入其他说明",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewInnerTransfer.special_require),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "special_require", $$v)
      },
      expression: "reviewInnerTransfer.special_require"
    }
  }) : _c('el-input', {
    attrs: {
      "value": "无",
      "disabled": ""
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "银行流水号",
      "prop": "bank_water"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入银行流水号"
    },
    model: {
      value: (_vm.reviewInnerTransfer.bank_water),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "bank_water", $$v)
      },
      expression: "reviewInnerTransfer.bank_water"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.reviewInnerTransfer.transfer_status == '3' && _vm.reviewInnerTransfer.pay_status == '10') ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.confirmInnerTransferSuccess('reviewInnerTransfer')
      }
    }
  }, [_vm._v("确认打款成功")]) : _vm._e(), _vm._v(" "), (_vm.reviewInnerTransfer.transfer_status == '3' && _vm.reviewInnerTransfer.pay_status == '10') ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "warning"
    },
    on: {
      "click": _vm.confirmInnerTransferFail
    }
  }, [_vm._v("确认打款失败")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "innerTransferList",
      "size": "medium"
    }
  })], 1), _vm._v(" "), _c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("操作日志")])]), _vm._v(" "), _c('div', [(_vm.reviewInnerTransfer.node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.reviewInnerTransfer.node_list
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
  })], 1) : _vm._e()], 1)])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1930a755", module.exports)
  }
}

/***/ })

});