webpackJsonp([6,49],{

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(641),
  /* template */
  __webpack_require__(642),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\loan\\transfer\\detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-474db93a", Component.options)
  } else {
    hotAPI.reload("data-v-474db93a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(719),
  /* template */
  __webpack_require__(720),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\repay\\transfer\\review.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] review.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e67d0476", Component.options)
  } else {
    hotAPI.reload("data-v-e67d0476", Component.options)
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

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoanOrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getLoanOrderDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loanOrderFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loanOrderFlowReject; });
/* unused harmony export loanOrderFlowStop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return loanTransferFlowStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getLoanTransferList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLoanTransferDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loanTransferFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return loanTransferFlowReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loanTransferFlowStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return loanTransferRetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loanTransferConfirmSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loanTransferConfirmFail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flow__ = __webpack_require__(633);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/**
 * 获取借款指令列表
 * @param {json} data
 *  @param {number}   data.page                   当前页码
 *  @param {number}   data.limit                  每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string}   data.order_create_people    指令发起人，搜索条件，非必填
 *  @param {number}   data.order_status           指令状态，搜索条件，非必填
 *  @param {datetime} data.apply_begin_time       指令到达开始时间，搜索条件，非必填
 *  @param {datetime} data.apply_end_time         指令到达结束时间，搜索条件，非必填
 *  @param {datetime} data.approve_begin_time     指令审核开始时间，搜索条件，非必填
 *  @param {datetime} data.approve_end_time       指令审核结束时间，搜索条件，非必填
 *  @param {string}   data.pay_main_body_uuid     借款方主体uuid，搜索条件，非必填
 *  @param {string}   data.collect_main_body_uuid 贷款方主体uuid，搜索条件，非必填
 */
var getLoanOrderList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.LoanOrderList',
              body: Object.assign({}, data, {
                loan_type: '1'
              })
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getLoanOrderList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取借款指令详情
 * @param {json} data
 *  @param {string} data.uuid 借款指令唯一标识uuid
 */
var getLoanOrderDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.LoanOrderDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getLoanOrderDetail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 借款指令通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var loanOrderFlowResolve = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'loan_order'
            });
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(params));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function loanOrderFlowResolve(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 借款指令驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var loanOrderFlowReject = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'loan_order'
            });
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(params));

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function loanOrderFlowReject(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 借款指令拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var loanOrderFlowStop = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'loan_order'
            });
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["d" /* flowStop */])(params));

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function loanOrderFlowStop(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 发起借款调拨
 * @param {json} data
 *  @param {string} data.instance_id    业务数据唯一标识uuid
 *  @param {string} data.main_body_uuid 主体唯一标识uuid
 *  @param {string} data.info           审批建议
 *  @param {json}   data.params         其他参数
 */
var loanTransferFlowStart = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'loan_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'loan_transfer_pay_type_2_code'
            });
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["c" /* flowStart */])(params));

          case 2:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function loanTransferFlowStart(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * 获取借款调拨列表
 * @param {json} data
 */
var getLoanTransferList = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.LoanTransferList',
              body: Object.assign({}, data, {
                loan_type: '1'
              })
            }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getLoanTransferList(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * 获取借款调拨详情
 * @param {json} data
 */
var getLoanTransferDetail = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.LoanTransferDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function getLoanTransferDetail(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * 借款调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var loanTransferFlowResolve = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'loan_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'loan_transfer_pay_type_2_code'
            });
            return _context9.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(params));

          case 2:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function loanTransferFlowResolve(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * 借款调拨驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var loanTransferFlowReject = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'loan_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'loan_transfer_pay_type_2_code'
            });
            return _context10.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(params));

          case 2:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function loanTransferFlowReject(_x10) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * 借款调拨拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var loanTransferFlowStop = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'loan_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'loan_transfer_pay_type_2_code'
            });
            return _context11.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["d" /* flowStop */])(params));

          case 2:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function loanTransferFlowStop(_x11) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * 打款重试
 * @param {json} data
 *  @param {string} uuid  付款调拨ID
 *  @param {string} ukPwd UKey密码
 */
var loanTransferRetry = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.PayRetry',
              body: data
            }));

          case 1:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function loanTransferRetry(_x12) {
    return _ref12.apply(this, arguments);
  };
}();

/**
 * 打款确认成功
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
var loanTransferConfirmSuccess = function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(data) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.ConfirmStatus',
              body: Object.assign({}, data, {
                status: 1
              })
            }));

          case 1:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  return function loanTransferConfirmSuccess(_x13) {
    return _ref13.apply(this, arguments);
  };
}();

/**
 * 打款确认失败
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
var loanTransferConfirmFail = function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(data) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.ConfirmStatus',
              body: Object.assign({}, data, {
                status: 2
              })
            }));

          case 1:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }));

  return function loanTransferConfirmFail(_x14) {
    return _ref14.apply(this, arguments);
  };
}();

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDictList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDictTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateDict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteDict; });
/* unused harmony export getFinancingPlatformList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取数据字典列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.dict_type         数据字典类型，搜索条件，非必填
 *  @param {string} data.dict_desc         数据字典描述，搜索条件，非必填
 */
var getDictList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.DictKvList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getDictList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取数据字典类型列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.dict_type         数据字典类型，搜索条件，非必填
 *  @param {string} data.dict_desc         数据字典描述，搜索条件，非必填
 */
var getDictTypeList = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.DictList',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getDictTypeList(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 新增数据字典
 * @param {json} data
 *  @param {string} data.dict_key       数据字典键值
 *  @param {string} data.dict_value     数据字典标签
 *  @param {string} data.dict_type      数据字典类型
 *  @param {string} data.dict_desc      数据字典描述
 *  @param {number} data.index          排序字段
 */
var addDict = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.DictCreateOrUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function addDict(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 更新数据字典
 * @param {json} data
 *  @param {string} data.uuid           数据字典uuid
 *  @param {string} data.dict_key       数据字典键值
 *  @param {string} data.dict_value     数据字典标签
 *  @param {string} data.dict_type      数据字典类型
 *  @param {string} data.dict_desc      数据字典描述
 *  @param {number} data.index          排序字段
 */
var updateDict = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.DictCreateOrUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function updateDict(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 删除数据字典
 * @param {json} data
 *  @param {string} data.uuid           数据字典uuid
 */
var deleteDict = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.DictKvDel',
              body: data
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function deleteDict(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 获取融资平台列表
 */
var getFinancingPlatformList = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.DictKvList',
              body: {
                page: 1,
                limit: -1,
                dict_type: 'financing_platform'
              }
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getFinancingPlatformList() {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getEffectAccountList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getAllAccountList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getAccountDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return delAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return activateAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return accountFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accountFlowReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getBankInfoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getBankDictList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getBranchBankList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flow__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dict__ = __webpack_require__(636);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







/**
 * 获取银行账户列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.main_body_uuid    主体uuid，搜索条件，非必填
 *  @param {string} data.bank_name         开户行名称，搜索条件，非必填
 *  @param {string} data.real_pay_type     实付类型，0-全部 1-网银 2-银企 3-第三方代付，默认全部，非必填
 */
var getEffectAccountList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.account.AccountEffectList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getEffectAccountList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取银行账户列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.main_body_uuid    主体uuid，搜索条件，非必填
 *  @param {string} data.bank_name         开户行名称，搜索条件，非必填
 *  @param {string} data.real_pay_type     实付类型，0-全部 1-网银 2-银企 3-第三方代付，默认全部，非必填
 */
var getAllAccountList = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.account.AccountList',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getAllAccountList(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 获取银行账户详情
 * @param {json} data
 *  @param {number} data.uuid              账户uuid
 */
var getAccountDetail = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.account.AccountDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function getAccountDetail(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 新增银行账户
 * @param {json} data
 *  @param {string} data.main_body_uuid    主体唯一标识uuid
 *  @param {string} data.bank_dict_key     银行数据字典key
 *  @param {string} data.bank_name         开户行名称
 *  @param {string} data.short_name        账户简称
 *  @param {string} data.bank_account      银行账号
 *  @param {string} data.account_name      开户名
 *  @param {string} data.interface_priv    可访问系统列表，多个逗号隔开
 *  @param {string} data.real_pay_type     实付类型，0-网银/银企，1-网银，2-银企
 *  @param {string} data.address           开户行地址
 *  @param {string} data.province          开户行省
 *  @param {string} data.city              开户行市code
 *  @param {string} data.city_name         开户行市名
 *  @param {string} data.area              开户行所属区域
 *  @param {string} data.single_pay_limit  单笔支付限额
 */
var addAccount = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.account.AccountAdd',
              body: data
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function addAccount(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 编辑银行账户
 * @param {json} data
 *  @param {string} data.uuid              账户uuid
 *  @param {string} data.main_body_uuid    主体唯一标识uuid
 *  @param {string} data.bank_dict_key     银行数据字典key
 *  @param {string} data.bank_name         开户行名称
 *  @param {string} data.short_name        账户简称
 *  @param {string} data.bank_account      银行账号
 *  @param {string} data.account_name      开户名
 *  @param {string} data.interface_priv    可访问系统列表，多个逗号隔开
 *  @param {string} data.real_pay_type     实付类型，0-网银/银企，1-网银，2-银企
 *  @param {string} data.address           开户行地址
 *  @param {string} data.province          开户行省
 *  @param {string} data.city              开户行市code
 *  @param {string} data.city_name         开户行市名
 *  @param {string} data.area              开户行所属区域
 *  @param {string} data.single_pay_limit  单笔支付限额
 */
var updateAccount = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.account.AccountUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function updateAccount(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 注销银行账户
 * @param {json} data
 *  @param {string} data.uuid              账户uuid
 */
var delAccount = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.account.AccountDel',
              body: data
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function delAccount(_x6) {
    return _ref6.apply(this, arguments);
  };
}();
/**
 * 启用银行账户
 * @param {json} data
 *  @param {string} data.uuid              账户uuid
 */
var activateAccount = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.account.AccountEnable',
              body: data
            }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function activateAccount(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * 账户新增、删除、启用、更新审核通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.flow_code    审批流名称
    // account_add_apply
    // account_del_apply
    // account_enable_apply
    // account_update_apply
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var accountFlowResolve = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            data.params = {};
            return _context8.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(data));

          case 2:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function accountFlowResolve(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * 账户新增、删除、启用、更新审核驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.flow_code    审批流名称
    // account_add_apply
    // account_del_apply
    // account_enable_apply
    // account_update_apply
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var accountFlowReject = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            data.params = {};
            return _context9.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(data));

          case 2:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function accountFlowReject(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * 查询银行地址列表
 * @param {json} data
 *  @param {string} data.bank 数据字典类型：1-兴业银行，2-招商银行，3-建设银行，4-平安银行，5-农业银行
 */
var getBankInfoList = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.BaseBankQuery',
              body: data
            }));

          case 1:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function getBankInfoList(_x10) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * 查询银行简称字典列表
 */
var getBankDictList = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_2__dict__["c" /* getDictList */])({
              page: 1,
              limit: -1,
              dict_type: 'bank'
            }));

          case 1:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function getBankDictList() {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * 查询银行支行和行号列表
 * 
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.bank_name         银行名称
 *  @param {string} data.province          省
 *  @param {string} data.city              市
 */
var getBranchBankList = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.BankBaseList',
              body: Object.assign({}, {
                page: 1,
                limit: -1
              }, data)
            }));

          case 1:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function getBranchBankList(_x11) {
    return _ref12.apply(this, arguments);
  };
}();

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRepayOrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRepayOrderDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return repayOrderFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return repayOrderFlowReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getRepayTransferList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getRepayTransferDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return repayTransferFlowStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return repayTransferFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return repayTransferFlowReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bankRepayTransferFlowResolve; });
/* unused harmony export repayTransferFlowStop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return repayTransferRetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return repayTransferConfirmSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return repayTransferConfirmFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return repayUploadWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return repayTransferFlowEditStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return repayTransferFlowEditResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return repayTransferFlowEditReject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flow__ = __webpack_require__(633);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/**
 * 获取还款指令列表
 * @param {json} data
 *  @param {number}   data.page                   当前页码
 *  @param {number}   data.limit                  每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string}   data.order_create_people    指令发起人，搜索条件，非必填
 *  @param {number}   data.order_status           指令状态，搜索条件，非必填
 *  @param {datetime} data.apply_begin_time       指令到达开始时间，搜索条件，非必填
 *  @param {datetime} data.apply_end_time         指令到达结束时间，搜索条件，非必填
 *  @param {datetime} data.approve_begin_time     指令审核开始时间，搜索条件，非必填
 *  @param {datetime} data.approve_end_time       指令审核结束时间，搜索条件，非必填
 *  @param {string}   data.pay_main_body_uuid     还款方主体uuid，搜索条件，非必填
 *  @param {string}   data.collect_main_body_uuid 贷款方主体uuid，搜索条件，非必填
 */
var getRepayOrderList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.RepayOrderList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getRepayOrderList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取还款指令详情
 * @param {json} data
 *  @param {string} data.uuid 还款指令唯一标识uuid
 */
var getRepayOrderDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.RepayOrderDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getRepayOrderDetail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 还款指令通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var repayOrderFlowResolve = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_order'
            });
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(params));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function repayOrderFlowResolve(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 还款指令驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var repayOrderFlowReject = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_order'
            });
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(params));

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function repayOrderFlowReject(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 获取还款调拨列表
 * @param {json} data
 */
var getRepayTransferList = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.RepayList',
              body: data
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getRepayTransferList(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 获取还款调拨详情
 * @param {json} data
 */
var getRepayTransferDetail = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.RepayDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function getRepayTransferDetail(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * 发起还款调拨
 * @param {json} data
 *  @param {string} data.instance_id    业务数据唯一标识uuid
 *  @param {string} data.main_body_uuid 主体唯一标识uuid
 *  @param {string} data.info           审批建议
 *  @param {json}   data.params         其他参数
 */
var repayTransferFlowStart = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_apply'
            });
            return _context7.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["c" /* flowStart */])(params));

          case 2:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function repayTransferFlowStart(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * 还款调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var repayTransferFlowResolve = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_apply'
            });
            return _context8.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(params));

          case 2:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function repayTransferFlowResolve(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * 还款调拨驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var repayTransferFlowReject = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_apply'
            });
            return _context9.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(params));

          case 2:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function repayTransferFlowReject(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * 权签人网银调拨通过
 * @param {json} data 
 */
var bankRepayTransferFlowResolve = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.flow.Stop',
              body: Object.assign({}, data, {
                flow_code: 'repay_apply',
                approve_type: '1'
              })
            }));

          case 1:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function bankRepayTransferFlowResolve(_x10) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * 还款调拨拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var repayTransferFlowStop = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_apply'
            });
            return _context11.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["d" /* flowStop */])(params));

          case 2:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function repayTransferFlowStop(_x11) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * 打款重试
 * @param {json} data
 *  @param {string} uuid  付款调拨ID
 *  @param {string} ukPwd UKey密码
 */
var repayTransferRetry = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.RepayRetry',
              body: data
            }));

          case 1:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function repayTransferRetry(_x12) {
    return _ref12.apply(this, arguments);
  };
}();

/**
 * 打款确认成功
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
var repayTransferConfirmSuccess = function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(data) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.RepayConfirmStatus',
              body: Object.assign({}, data, {
                status: 1
              })
            }));

          case 1:
          case 'end':
            return _context13.stop();
        }
      }
    }, _callee13, this);
  }));

  return function repayTransferConfirmSuccess(_x13) {
    return _ref13.apply(this, arguments);
  };
}();

/**
 * 打款确认失败
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
var repayTransferConfirmFail = function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(data) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.RepayConfirmStatus',
              body: Object.assign({}, data, {
                status: 2
              })
            }));

          case 1:
          case 'end':
            return _context14.stop();
        }
      }
    }, _callee14, this);
  }));

  return function repayTransferConfirmFail(_x14) {
    return _ref14.apply(this, arguments);
  };
}();

/**
 * 上传回单
 * @param {json} data
 */
var repayUploadWater = function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(data) {
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            return _context15.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.loan.RepayUploadWater',
              body: data
            }));

          case 1:
          case 'end':
            return _context15.stop();
        }
      }
    }, _callee15, this);
  }));

  return function repayUploadWater(_x15) {
    return _ref15.apply(this, arguments);
  };
}();

/**
 * 发起修改还款现金流
 * @param {json} data
 *  @param {string} data.instance_id    业务数据唯一标识uuid
 *  @param {string} data.main_body_uuid 主体唯一标识uuid
 *  @param {string} data.info           审批建议
 *  @param {json}   data.params         其他参数
 */
var repayTransferFlowEditStart = function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_cash_flow_edit'
            });
            return _context16.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["c" /* flowStart */])(params));

          case 2:
          case 'end':
            return _context16.stop();
        }
      }
    }, _callee16, this);
  }));

  return function repayTransferFlowEditStart(_x16) {
    return _ref16.apply(this, arguments);
  };
}();

/**
 * 修改还款现金流调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var repayTransferFlowEditResolve = function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee17$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_cash_flow_edit'
            });
            return _context17.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(params));

          case 2:
          case 'end':
            return _context17.stop();
        }
      }
    }, _callee17, this);
  }));

  return function repayTransferFlowEditResolve(_x17) {
    return _ref17.apply(this, arguments);
  };
}();

/**
 * 修改还款现金流调拨驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var repayTransferFlowEditReject = function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'repay_cash_flow_edit'
            });
            return _context18.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(params));

          case 2:
          case 'end':
            return _context18.stop();
        }
      }
    }, _callee18, this);
  }));

  return function repayTransferFlowEditReject(_x18) {
    return _ref18.apply(this, arguments);
  };
}();

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_loan__ = __webpack_require__(635);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    uuid: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      loading: false,
      detailTransfer: {
        uuid: '',
        system_flag: '',
        order_num: '',
        out_order_num: '',
        request_id: '',
        loan_main_body: '',
        loan_bank_name: '',
        loan_bank_account: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        real_pay_type: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        loan_datetime: '',
        forecast_datetime: '',
        transfer_create_people: '',
        rate: '',
        rateStr: '',
        bs_background: '',
        special_require: '',
        contact_annex: '',
        order_status: '',
        loan_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        bank_water: '',
        bank_img_file_uuid: '',
        cashDetail: [],
        node_list: []
      },
      loanTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        5: '待资金部负责人审核',
        20: '已完结'
      },
      fileList: [],
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
    };
  },
  created: function created() {
    var _this = this;

    var transfer_uuid = this.uuid || this.$route.params.uuid;
    if (!transfer_uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'loanTransferList'
      });
    } else {
      this.detailTransfer.uuid = transfer_uuid;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_loan__["c" /* getLoanTransferDetail */])({
        uuid: transfer_uuid
      }).then(function (res) {
        Object.assign(_this.detailTransfer, res.data);

        _this.formatDetailData();

        _this.loading = false;
      }).catch(function () {
        _this.loading = false;
      });
    }
  },

  methods: {
    // 格式化详情数据
    formatDetailData: function formatDetailData() {
      // OA系统指令获取请求ID
      if (this.detailTransfer.out_order_num && this.detailTransfer.system_flag == 'oa') {
        this.detailTransfer.request_id = this.detailTransfer.out_order_num.split('_')[0];
      }
      this.detailTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([this.detailTransfer.amount, this.detailTransfer.currency]);

      this.detailTransfer.currencyStr = this.mformatCurrencyStr(this.detailTransfer.currency);

      this.detailTransfer.rateStr = this.filterPercentage(this.detailTransfer.rate);

      if (this.detailTransfer.node_list) {
        this.detailTransfer.node_list = this.detailTransfer.node_list.filter(function (item) {
          return item.node_status != '1';
        });
      } else {
        this.detailTransfer.node_list = [];
      }
      if (this.detailTransfer.require_pay_datetime == '0000-00-00') {
        this.detailTransfer.require_pay_datetime = '';
      }
      if (this.detailTransfer.contact_annex) {
        try {
          this.detailTransfer.contact_annex = JSON.parse(this.detailTransfer.contact_annex);
          for (var i = 0; i < this.detailTransfer.contact_annex.length; i++) {
            this.fileList.push({
              name: this.detailTransfer.contact_annex[i].name,
              url: this.detailTransfer.contact_annex[i].url
            });
          }
        } catch (e) {}
      }

      if (this.detailTransfer.bank_img_file_uuid) {
        var imgList = this.detailTransfer.bank_img_file_uuid.split(',');
        for (var _i = 0; _i < imgList.length; _i++) {
          this.receiptFileList.push({
            name: '回单' + _i,
            uuid: imgList[_i],
            url: '/api/download?uuid=' + imgList[_i]
          });
        }
      }

      if (this.detailTransfer.cashDetail.length) {
        this.sortCashFlowList();
      }
    },


    // 借款现金流表排序
    sortCashFlowList: function sortCashFlowList() {
      this.detailTransfer.cashDetail.sort(function (cashFlow1, cashFlow2) {
        if (cashFlow1.repay_date == cashFlow2.repay_date) {
          return Number(cashFlow1.cash_flow_type) - Number(cashFlow2.cash_flow_type);
        }

        return new Date(cashFlow1.repay_date).getTime() - new Date(cashFlow2.repay_date).getTime();
      });
    },


    // 预览下载文件
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
});

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [(!_vm.uuid) ? _c('tp-breadcrumb') : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "content-container form-box detail-form-box"
  }, [_c('el-card', [_c('div', {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("借款调拨详情")])]), _vm._v(" "), _c('el-form', {
    ref: "detailTransfer",
    attrs: {
      "model": _vm.detailTransfer,
      "label-width": "120px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "系统来源",
      "prop": "system_flag"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.system_flag)
    }
  })]), _vm._v(" "), (_vm.detailTransfer.system_flag != 'oa') ? _c('el-form-item', {
    attrs: {
      "label": "外部指令号",
      "prop": "out_order_num"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.out_order_num)
    }
  })]) : _c('el-form-item', {
    attrs: {
      "label": "外部指令号",
      "prop": "out_order_num"
    }
  }, [_c('div', {
    staticClass: "sub-text"
  }, [_c('a', {
    staticStyle: {
      "color": "#409EFF"
    },
    attrs: {
      "href": 'http://oa.jyblife.com/workflow/request/ViewRequest.jsp?requestid=' + _vm.detailTransfer.request_id + '&ismonitor=1',
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.detailTransfer.out_order_num))])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "资金交易编号",
      "prop": "transfer_num"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.transfer_num)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款编号",
      "prop": "loan_order_num"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.loan_order_num)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "借款方",
      "prop": "loan_main_body"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.loan_main_body)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贷款方",
      "prop": "collect_main_body"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.collect_main_body)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "借款方银行名称",
      "prop": "loan_bank_name"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.loan_bank_name)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贷款方银行名称",
      "prop": "collect_bank_name"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.collect_bank_name)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "借款方银行账号",
      "prop": "loan_bank_account"
    }
  }, [_c('div', {
    staticClass: "sub-text"
  }, [_vm._v("\n              " + _vm._s(_vm._f("filterBankAccount")(_vm.detailTransfer.loan_bank_account)) + "  \n            ")])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贷款方银行账号",
      "prop": "collect_bank_account"
    }
  }, [_c('div', {
    staticClass: "sub-text"
  }, [_vm._v("\n              " + _vm._s(_vm._f("filterBankAccount")(_vm.detailTransfer.collect_bank_account)) + "\n            ")])])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.realPayTypeJson[_vm.detailTransfer.real_pay_type])
    }
  })]), _vm._v(" "), (_vm.detailTransfer.real_pay_type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "付款备注",
      "prop": "pay_remark"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.pay_remark)
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "借款币种",
      "prop": "currency"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.currencyStr)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款金额",
      "prop": "amount"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.formatAmount)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "借款日期",
      "prop": "loan_datetime"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.loan_datetime)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预计还款日",
      "prop": "forecast_datetime"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.forecast_datetime)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令发起人",
      "prop": "transfer_create_people"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.transfer_create_people)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "利息率",
      "prop": "rate"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.rateStr)
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "业务背景",
      "prop": "bs_background"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.bs_background ? _vm.detailTransfer.bs_background : '无')
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "其他说明"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.plus_require ? _vm.detailTransfer.plus_require : '无')
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "合同附件",
      "prop": "contact_annex"
    }
  }, [(_vm.fileList.length) ? _c('el-upload', {
    ref: "upload",
    staticClass: "no-upload-text",
    attrs: {
      "file-list": _vm.fileList,
      "auto-upload": false,
      "on-preview": _vm.handleFilePreview,
      "action": "",
      "disabled": ""
    }
  }) : _c('div', {
    staticClass: "sub-text"
  }, [_vm._v("无")])], 1), _vm._v(" "), (_vm.detailTransfer.bank_img_file_uuid) ? _c('el-form-item', {
    attrs: {
      "label": "银行流水号",
      "prop": "bank_water"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.bank_water ? _vm.detailTransfer.bank_water : '无')
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.detailTransfer.bank_img_file_uuid) ? _c('el-form-item', {
    attrs: {
      "label": "回单截图",
      "prop": "bank_img_file_uuid"
    }
  }, [_c('el-upload', {
    ref: "receiptUpload",
    staticClass: "no-upload-text",
    attrs: {
      "file-list": _vm.receiptFileList,
      "on-preview": _vm.handlePictureCardPreview,
      "action": "",
      "list-type": "picture-card",
      "disabled": ""
    }
  }), _vm._v(" "), (_vm.dialogVisible) ? _c('el-dialog', {
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
      "alt": "回单截图"
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
  }, [_vm._v("查看原图")])], 1)]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令状态"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.loanTransferStatusJson[_vm.detailTransfer.transfer_status])
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款状态"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.loanPayStatusJson[_vm.detailTransfer.loan_status])
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line last-form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令到达时间"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.create_time)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "指令更新时间"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailTransfer.update_time)
    }
  })])], 1), _vm._v(" "), (_vm.detailTransfer.cashDetail && _vm.detailTransfer.cashDetail.length) ? _c('el-card', {
    staticClass: "box-card box-card-inside"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("借款现金流表")])]), _vm._v(" "), _c('div', [_c('el-table', {
    attrs: {
      "data": _vm.detailTransfer.cashDetail
    }
  }, [_c('el-table-column', {
    attrs: {
      "prop": "repay_date",
      "label": "日期"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "real_repay_date",
      "label": "实际日期"
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
        return [_vm._v("\n                  " + _vm._s(_vm._f("filterCent2YuanCurrencyAmount")([scope.row.amount, _vm.detailTransfer.currency])) + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "说明",
      "prop": "info"
    }
  })], 1)], 1)]) : _vm._e(), _vm._v(" "), (!_vm.uuid) ? _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [_c('tp-historyback', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "name": "loanTransferList",
      "type": "primary",
      "size": "medium"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("操作日志")])]), _vm._v(" "), _c('div', [(_vm.detailTransfer.node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.detailTransfer.node_list
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
     require("vue-hot-reload-api").rerender("data-v-474db93a", module.exports)
  }
}

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_repay__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_account__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_transfer_detail_vue__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loan_transfer_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__loan_transfer_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    TransferDetail: __WEBPACK_IMPORTED_MODULE_2__loan_transfer_detail_vue___default.a
  },
  data: function data() {
    var _this = this;

    var checkComments = function checkComments(rule, value, callback) {
      if (_this.isReject) {
        if (value == '') {
          return callback(new Error('请填写驳回原因'));
        }
        if (value.length > 100) {
          return callback(new Error('驳回原因长度不能超过100个字符'));
        }
      }

      if (_this.isStop) {
        if (value == '') {
          return callback(new Error('请填写拒绝原因'));
        }
        if (value.length > 100) {
          return callback(new Error('驳回原因长度不能超过100个字符'));
        }
      }

      if (value.length > 100) {
        return callback(new Error('审核意见长度不能超过100个字符'));
      }

      callback();
    };

    var checkRepayAccount = function checkRepayAccount(rule, value, callback) {
      if (value && _this.reviewTransfer.collect_account_uuid && value == _this.reviewTransfer.collect_account_uuid) {
        return callback(new Error('贷款银行账号和借款银行账号不能相同'));
      }

      return callback();
    };
    var checkCollectAccount = function checkCollectAccount(rule, value, callback) {
      if (value && _this.reviewTransfer.loan_account_uuid && value == _this.reviewTransfer.loan_account_uuid) {
        return callback(new Error('借款银行账号和贷款银行账号不能相同'));
      }

      return callback();
    };
    return {
      loading: false,
      reviewTransfer: {
        id: '',
        uuid: '',
        repay_transfer_num: '',
        order_num: '',
        repay_transfer_status: '',
        repay_status: '',
        repay_main_body_uuid: '',
        repay_main_body: '',
        repay_account_uuid: '',
        repay_bank_name: '',
        repay_bank_account: '',
        collect_main_body_uuid: '',
        collect_main_body: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        real_pay_type: '',
        pay_remark: '',
        currency: '',
        currencyStr: '',
        repay_amount: '',
        repay_amount_str: '',

        loan_transfer_uuid: '',

        review_comments: '',
        hasOrderDetail: false
      },
      rules: {
        repay_account_uuid: [{
          required: true,
          message: '请选择贷款银行',
          trigger: 'change'
        }, {
          validator: checkRepayAccount,
          trigger: 'change'
        }],
        collect_account_uuid: [{
          required: true,
          message: '请选择借款银行',
          trigger: 'change'
        }, {
          validator: checkCollectAccount,
          trigger: 'change'
        }],
        real_pay_type: [{
          required: true,
          message: '请选择实付类型',
          trigger: 'change'
        }],
        review_comments: [{
          validator: checkComments,
          trigger: 'blur'
        }],
        pay_remark: [{
          required: true,
          message: '请输入银企付款备注',
          trigger: 'blur'
        }]
      },
      repayTransferStatusJson: {
        0: '待资金专员审核',
        2: '待权签人审核',
        3: '权签人审核通过',
        4: '权签人驳回',
        20: '已完结'
      },
      repayStatusJson: {
        1: '未提交',
        2: '待审核',
        3: '已支付',
        10: '待确认'
      },
      repayBankAccountList: [],
      repayBankAccountLoading: false,
      collectBankAccountList: [],
      collectBankAccountLoading: false,
      timestamp: Date.now(),
      isBankSetRealPayType: '',
      activeName: 'first',
      repay_index: ''
    };
  },
  created: function created() {
    var _this2 = this;

    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'repayTransferList'
      });
    } else {
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_repay__["d" /* getRepayTransferDetail */])({
        uuid: this.$route.params.uuid
      }).then(function (res) {
        Object.assign(_this2.reviewTransfer, res.data);

        _this2.getRepayBankAccountListData();
        _this2.getCollectBankAccountListData();

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
      var orderDetail = [];
      if (this.reviewTransfer.orderDetail) {
        for (var i = 0; i < this.reviewTransfer.orderDetail.length; i++) {
          if (this.reviewTransfer.orderDetail[i].repay_order_status != 2 && this.reviewTransfer.orderDetail[i].repay_order_status != 4) {
            orderDetail.push(this.reviewTransfer.orderDetail[i]);
          }
        }
      }

      this.reviewTransfer.orderDetail = orderDetail;

      this.reviewTransfer.repay_bank_account_str = this.filterBankAccount(this.reviewTransfer.repay_bank_account);
      this.reviewTransfer.collect_bank_account_str = this.filterBankAccount(this.reviewTransfer.collect_bank_account);

      this.reviewTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([this.reviewTransfer.amount, this.reviewTransfer.currency]);

      this.reviewTransfer.currencyStr = this.mformatCurrencyStr(this.reviewTransfer.currency);

      if (this.reviewTransfer.node_list) {
        this.reviewTransfer.node_list = this.reviewTransfer.node_list.filter(function (item) {
          return item.node_status != '1';
        });
      } else {
        this.reviewTransfer.node_list = [];
      }

      if (this.reviewTransfer.require_pay_datetime == '0000-00-00') {
        this.reviewTransfer.require_pay_datetime = '';
      }

      if (this.reviewTransfer.real_pay_type == '0' || !this.reviewTransfer.real_pay_type) {
        this.reviewTransfer.real_pay_type = '';
      } else {
        this.reviewTransfer.real_pay_type = '' + this.reviewTransfer.real_pay_type;
      }

      this.sortCashFlowList();
    },


    // 还款现金流表排序
    sortCashFlowList: function sortCashFlowList() {
      this.reviewTransfer.cashDetail.sort(function (cashFlow1, cashFlow2) {
        if (cashFlow1.repay_date == cashFlow2.repay_date) {
          return Number(cashFlow1.cash_flow_type) - Number(cashFlow2.cash_flow_type);
        }

        return new Date(cashFlow1.repay_date).getTime() - new Date(cashFlow2.repay_date).getTime();
      });

      var date = new Date();
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      var todayTimestamp = date.getTime();

      for (var i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
        if (this.reviewTransfer.cashDetail[i].cash_status == 1 && this.reviewTransfer.cashDetail[i].cash_flow_type == 2 && todayTimestamp <= new Date(this.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00').getTime()) {
          this.reviewTransfer.hasOrderDetail = true;
          this.reviewTransfer.cashDetail[i].checked = true;
          this.reviewTransfer.cashDetail[i + 1].checked = true;
          this.repay_index = this.reviewTransfer.cashDetail[i].index;

          this.reviewTransfer.repay_amount = Number(this.reviewTransfer.cashDetail[i].real_amount) + Number(this.reviewTransfer.cashDetail[i + 1].real_amount);
          this.reviewTransfer.repay_amount_str = this.filterCent2YuanNoThousandCurrencyAmount(this.reviewTransfer.repay_amount);
          break;
        }
      }

      if (!this.reviewTransfer.hasOrderDetail) {
        this.$message.warning('没有可还款的现金流，请通过还款指令修改现金流表');
      }
    },


    // 发起借款调拨
    startTransferFlow: function startTransferFlow(formName) {
      var _this3 = this;

      if (!this.reviewTransfer.hasOrderDetail) {
        this.$message.warning('没有可还款的现金流');
        return false;
      }

      if (this.loading) return false;
      this.loading = true;

      var params = {
        repay_account_uuid: this.reviewTransfer.repay_account_uuid,
        collect_account_uuid: this.reviewTransfer.collect_account_uuid,
        real_pay_type: this.reviewTransfer.real_pay_type,
        index: this.repay_index,
        pay_remark: this.reviewTransfer.pay_remark
      };

      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this3.mconfirm('确定要发起还款调拨吗?').then(function () {
            _this3.mshowLoading('正在提交还款调拨...');

            // 获取发起还款调拨参数
            Object(__WEBPACK_IMPORTED_MODULE_0__api_repay__["o" /* repayTransferFlowStart */])({
              instance_id: _this3.reviewTransfer.id,
              main_body_uuid: _this3.reviewTransfer.collect_main_body_uuid,
              info: _this3.reviewTransfer.review_comments,
              params: params
            }).then(function () {
              _this3.loading = false;
              _this3.mhideLoading();
              _this3.$message.success('提交成功');
              _this3.$router.replace({
                name: 'repayTransferList'
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


    // 查看还款指令详情
    triggerCheckRepayOrder: function triggerCheckRepayOrder(uuid) {
      this.$router.push({
        name: 'repayOrderDetail',
        params: {
          uuid: uuid
        }
      });
    },


    // 贷款银行
    getRepayBankAccountListData: function getRepayBankAccountListData() {
      var _this4 = this;

      if (!this.reviewTransfer.repay_main_body_uuid) {
        this.$message.error('贷款主体非内部主体，无法修改贷款银行！');
      }

      if (this.repayBankAccountLoading || !this.reviewTransfer.repay_main_body_uuid) {
        return false;
      }

      this.repayBankAccountLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_account__["k" /* getEffectAccountList */])({
        page: 1,
        limit: -1,
        main_body_uuid: this.reviewTransfer.repay_main_body_uuid
      }).then(function (res) {
        _this4.repayBankAccountList = res.data.data;

        _this4.repayBankAccountSelectChange(_this4.reviewTransfer.repay_account_uuid);

        _this4.repayBankAccountLoading = false;
      }).catch(function () {
        _this4.repayBankAccountLoading = false;
      });
    },
    repayBankAccountSelectToggle: function repayBankAccountSelectToggle(show) {
      if (show && !this.repayBankAccountLoading && !this.repayBankAccountList.length) {
        this.getRepayBankAccountListData();
      }
    },
    repayBankAccountSelectChange: function repayBankAccountSelectChange(bankUuid) {
      var hasAccount = false;
      for (var i = 0; i < this.repayBankAccountList.length; i++) {
        if (bankUuid == this.repayBankAccountList[i].uuid) {
          hasAccount = true;
          this.reviewTransfer.repay_bank_account = this.repayBankAccountList[i].bank_account;

          if (this.repayBankAccountList[i].real_pay_type != '0') {
            this.reviewTransfer.real_pay_type = '' + this.repayBankAccountList[i].real_pay_type;
            this.isBankSetRealPayType = true;
          } else {
            this.isBankSetRealPayType = false;
          }
          break;
        }
      }

      if (hasAccount) {
        if (this.$refs['reviewTransfer']) {
          this.$refs['reviewTransfer'].validateField('repay_account_uuid');
          this.reviewTransfer.repay_account_uuid && this.$refs['reviewTransfer'].validateField('collect_account_uuid');
        }
      } else {
        this.reviewTransfer.repay_account_uuid = '';
        this.reviewTransfer.repay_bank_name = '';
        this.reviewTransfer.repay_bank_account = '';
        this.reviewTransfer.real_pay_type = '';
        this.isBankSetRealPayType = '';
      }
    },


    // 借款银行
    getCollectBankAccountListData: function getCollectBankAccountListData() {
      var _this5 = this;

      if (!this.reviewTransfer.collect_main_body_uuid) {
        this.$message.error('借款款主体非内部主体，无法修改借款款银行！');
      }

      if (this.collectBankAccountLoading || !this.reviewTransfer.collect_main_body_uuid) {
        return false;
      }

      this.collectBankAccountLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_account__["k" /* getEffectAccountList */])({
        page: 1,
        limit: -1,
        main_body_uuid: this.reviewTransfer.collect_main_body_uuid
      }).then(function (res) {
        _this5.collectBankAccountList = res.data.data;
        _this5.collectBankAccountSelectChange(_this5.reviewTransfer.collect_account_uuid);
        _this5.collectBankAccountLoading = false;
      }).catch(function () {
        _this5.collectBankAccountLoading = false;
      });
    },
    collectBankAccountSelectToggle: function collectBankAccountSelectToggle(show) {
      if (show && !this.collectBankAccountLoading && !this.collectBankAccountList.length) {
        this.getCollectBankAccountListData();
      }
    },
    collectBankAccountSelectChange: function collectBankAccountSelectChange(bankUuid) {
      var hasAccount = false;
      for (var i = 0; i < this.collectBankAccountList.length; i++) {
        if (bankUuid == this.collectBankAccountList[i].uuid) {
          hasAccount = true;
          this.reviewTransfer.collect_bank_account = this.collectBankAccountList[i].bank_account;
          break;
        }
      }

      if (hasAccount) {
        if (this.$refs['reviewTransfer']) {
          this.$refs['reviewTransfer'].validateField('collect_account_uuid');
          this.reviewTransfer.repay_account_uuid && this.$refs['reviewTransfer'].validateField('repay_account_uuid');
        }
      } else {
        this.reviewTransfer.collect_account_uuid = '';
        this.reviewTransfer.collect_bank_name = '';
        this.reviewTransfer.collect_bank_account = '';
      }
    }
  }
});

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [_c('tp-breadcrumb'), _vm._v(" "), _c('div', {
    staticClass: "content-container form-box"
  }, [_c('el-tabs', {
    attrs: {
      "type": "card"
    },
    model: {
      value: (_vm.activeName),
      callback: function($$v) {
        _vm.activeName = $$v
      },
      expression: "activeName"
    }
  }, [_c('el-tab-pane', {
    attrs: {
      "label": "还款调拨发起",
      "name": "first"
    }
  }, [_c('el-card', [_c('div', {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("还款调拨发起")])]), _vm._v(" "), _c('el-form', {
    ref: "reviewTransfer",
    attrs: {
      "model": _vm.reviewTransfer,
      "rules": _vm.rules,
      "label-width": "120px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "还款资金交易编号",
      "prop": "repay_transfer_num"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.repay_transfer_num),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "repay_transfer_num", $$v)
      },
      expression: "reviewTransfer.repay_transfer_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款编号",
      "prop": "order_num"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.order_num),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "order_num", $$v)
      },
      expression: "reviewTransfer.order_num"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令状态",
      "prop": "repay_transfer_status"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.repayTransferStatusJson[_vm.reviewTransfer.repay_transfer_status]),
      callback: function($$v) {
        _vm.$set(_vm.repayTransferStatusJson, _vm.reviewTransfer.repay_transfer_status, $$v)
      },
      expression: "repayTransferStatusJson[reviewTransfer.repay_transfer_status]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "还款状态",
      "prop": "repay_status"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.repayPayStatusJson[_vm.reviewTransfer.repay_status]),
      callback: function($$v) {
        _vm.$set(_vm.repayPayStatusJson, _vm.reviewTransfer.repay_status, $$v)
      },
      expression: "repayPayStatusJson[reviewTransfer.repay_status]"
    }
  })], 1)], 1), _vm._v(" "), (_vm.reviewTransfer.orderDetail && _vm.reviewTransfer.orderDetail.length) ? _c('el-card', {
    staticClass: "box-card box-card-inside"
  }, [_c('div', {
    staticClass: "box-card-header",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("还款指令")])]), _vm._v(" "), _c('div', {
    staticClass: "text item"
  }, [_c('el-table', {
    attrs: {
      "data": _vm.reviewTransfer.orderDetail
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "60px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "text"
          },
          on: {
            "click": function($event) {
              _vm.triggerCheckRepayOrder(scope.row.id)
            }
          }
        }, [_vm._v("详情")])]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "order_num",
      "label": "还款编号",
      "width": "220"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "out_order_num",
      "label": "外部指令号",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "system_flag",
      "label": "系统来源",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "本金回款",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                      " + _vm._s(_vm._f("filterCent2YuanCurrencyAmount")([scope.row.amount, scope.row.currency])) + "\n                    ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "require_repay_date",
      "label": "要求还款日",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "repay_desc",
      "label": "还款说明",
      "show-overflow-tooltip": ""
    }
  })], 1)], 1)]) : _vm._e(), _vm._v(" "), _c('el-card', {
    staticClass: "box-card box-card-inside"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("还款现金流表")])]), _vm._v(" "), _c('div', {
    staticClass: "text item"
  }, [_c('el-table', {
    attrs: {
      "data": _vm.reviewTransfer.cashDetail
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "选项",
      "width": "60px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_c('el-checkbox', {
          attrs: {
            "value": scope.row.checked,
            "disabled": ""
          }
        })]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "repay_date",
      "label": "要求还款日",
      "width": "110px"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "real_repay_date",
      "label": "还款日期",
      "width": "100px"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "事项"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                      " + _vm._s(_vm.cashFlowTypeJson[scope.row.cash_flow_type]) + "\n                    ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "金额",
      "width": "150px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                      " + _vm._s(_vm._f("filterCent2YuanCurrencyAmount")([scope.row.amount, _vm.reviewTransfer.currency])) + "\n                    ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "实际金额",
      "width": "150px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                      " + _vm._s(_vm.filterCent2YuanCurrencyAmount([scope.row.real_amount, _vm.reviewTransfer.currency])) + "\n                    ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "状态"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                      " + _vm._s(scope.row.cash_flow_type == 1 ? '已支付' : _vm.repayStatusJson[scope.row.cash_status]) + "\n                    ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "说明",
      "prop": "info"
    }
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "贷款方",
      "prop": "repay_main_body"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.repay_main_body),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "repay_main_body", $$v)
      },
      expression: "reviewTransfer.repay_main_body"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款方",
      "prop": "collect_main_body"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.collect_main_body),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "collect_main_body", $$v)
      },
      expression: "reviewTransfer.collect_main_body"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "贷款方银行名称",
      "prop": "repay_account_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择贷款方银行名称"
    },
    on: {
      "visible-change": _vm.repayBankAccountSelectToggle,
      "change": _vm.repayBankAccountSelectChange
    },
    model: {
      value: (_vm.reviewTransfer.repay_account_uuid),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "repay_account_uuid", $$v)
      },
      expression: "reviewTransfer.repay_account_uuid"
    }
  }, [_vm._l((_vm.repayBankAccountList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.bank_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.repayBankAccountLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.repayBankAccountLoading),
      expression: "repayBankAccountLoading"
    }],
    key: "repayBankAccountLoading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款方银行名称",
      "prop": "collect_account_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择借款方银行名称"
    },
    on: {
      "visible-change": _vm.collectBankAccountSelectToggle,
      "change": _vm.collectBankAccountSelectChange
    },
    model: {
      value: (_vm.reviewTransfer.collect_account_uuid),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "collect_account_uuid", $$v)
      },
      expression: "reviewTransfer.collect_account_uuid"
    }
  }, [_vm._l((_vm.collectBankAccountList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.bank_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.collectBankAccountLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.collectBankAccountLoading),
      expression: "collectBankAccountLoading"
    }],
    key: "collectBankAccountLoading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "贷款方银行账号",
      "prop": "repay_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请选择借款方银行名称获取",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.repay_bank_account),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "repay_bank_account", $$v)
      },
      expression: "reviewTransfer.repay_bank_account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款方银行账号",
      "prop": "collect_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请选择借款方银行名称获取",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.collect_bank_account),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "collect_bank_account", $$v)
      },
      expression: "reviewTransfer.collect_bank_account"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('el-select', {
    attrs: {
      "disabled": _vm.isBankSetRealPayType,
      "filterable": ""
    },
    model: {
      value: (_vm.reviewTransfer.real_pay_type),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "real_pay_type", $$v)
      },
      expression: "reviewTransfer.real_pay_type"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "银企",
      "value": "2"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "label": "网银",
      "value": "1"
    }
  })], 1)], 1), _vm._v(" "), (_vm.reviewTransfer.real_pay_type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "银企付款备注",
      "prop": "pay_remark"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入内容",
      "maxlength": "50"
    },
    model: {
      value: (_vm.reviewTransfer.pay_remark),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "pay_remark", $$v)
      },
      expression: "reviewTransfer.pay_remark"
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "还款币种",
      "prop": "currency"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.currencyStr),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "currencyStr", $$v)
      },
      expression: "reviewTransfer.currencyStr"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "还款金额",
      "prop": "repay_amount"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": "",
      "type": "number",
      "placeholder": "请输入还款金额"
    },
    model: {
      value: (_vm.reviewTransfer.repay_amount_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "repay_amount_str", $$v)
      },
      expression: "reviewTransfer.repay_amount_str"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label-width": "0",
      "prop": "review_comments"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入审核意见"
    },
    model: {
      value: (_vm.reviewTransfer.review_comments),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "review_comments", $$v)
      },
      expression: "reviewTransfer.review_comments"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    staticStyle: {
      "margin-bottom": "40px"
    },
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.reviewTransfer.repay_transfer_status == '0' && _vm.reviewTransfer.edit_status == '1' && _vm.reviewTransfer.hasOrderDetail) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.startTransferFlow('reviewTransfer')
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "repayTransferList",
      "size": "medium"
    }
  })], 1), _vm._v(" "), _c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("操作日志")])]), _vm._v(" "), _c('div', [(_vm.reviewTransfer.node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.reviewTransfer.node_list
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
        return [_vm._v("\n                      " + _vm._s(_vm.nodeStatusJson[scope.row.node_status] + (scope.row.deal_remark ? scope.row.deal_remark : '无')) + "\n                    ")]
      }
    }])
  })], 1) : _vm._e()], 1)])], 1)], 1)], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "借款调拨详情",
      "name": "second"
    }
  }, [(_vm.reviewTransfer.loan_transfer_uuid) ? _c('transfer-detail', {
    attrs: {
      "uuid": _vm.reviewTransfer.loan_transfer_uuid
    }
  }) : _c('span', [_vm._v("获取原借款调拨详情失败")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e67d0476", module.exports)
  }
}

/***/ })

});