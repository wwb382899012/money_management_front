webpackJsonp([1],{

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(693),
  /* template */
  __webpack_require__(700),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\loan\\transfer\\review.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] review.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-adcdb22c", Component.options)
  } else {
    hotAPI.reload("data-v-adcdb22c", Component.options)
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

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_loan__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_account__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addCashFlow_vue__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addCashFlow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__addCashFlow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updateCashFlow_vue__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updateCashFlow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__updateCashFlow_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    AddCashFlow: __WEBPACK_IMPORTED_MODULE_2__addCashFlow_vue___default.a,
    UpdateCashFlow: __WEBPACK_IMPORTED_MODULE_3__updateCashFlow_vue___default.a
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

    var checkLoanAccount = function checkLoanAccount(rule, value, callback) {
      if (value && _this.reviewTransfer.collect_account_uuid && value == _this.reviewTransfer.collect_account_uuid) {
        return callback(new Error('借款银行账号和贷款银行账号不能相同'));
      }

      return callback();
    };
    var checkCollectAccount = function checkCollectAccount(rule, value, callback) {
      if (value && _this.reviewTransfer.loan_account_uuid && value == _this.reviewTransfer.loan_account_uuid) {
        return callback(new Error('贷款银行账号和借款银行账号不能相同'));
      }

      return callback();
    };

    return {
      loading: false,
      reviewTransfer: {
        uuid: '',
        system_flag: '',
        order_num: '',
        out_order_num: '',
        loan_main_body_uuid: '',
        loan_main_body: '',
        loan_account_uuid: '',
        loan_bank_name: '',
        loan_bank_account: '',
        collect_main_body_uuid: '',
        collect_main_body: '',
        collect_account_uuid: '',
        collect_bank_name: '',
        collect_bank_account: '',
        real_pay_type: '',
        pay_remark: '',
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
        transfer_status: '',
        loan_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        node_list: [],
        cashDetail: [],
        review_comments: ''
      },
      rules: {
        loan_account_uuid: [{
          required: true,
          message: '请选择贷款银行',
          trigger: 'change'
        }, {
          validator: checkLoanAccount,
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
      collectBankAccountList: [],
      collectBankAccountLoading: false,
      loanBankAccountList: [],
      loanBankAccountLoading: false,
      isBankSetRealPayType: false,
      timestamp: Date.now(),
      addCashFlowDialogVisible: false,
      updateCashFlowDialogVisible: false,
      currentIndex: '',
      currentCashFlow: {},
      updatePickerOptions: null
    };
  },

  computed: {
    pickerOptions: function pickerOptions() {
      var _this2 = this;

      return {
        disabledDate: function disabledDate(time) {
          return time.getTime() < Date.now() - 24 * 3600000 || time.getTime() < new Date(_this2.reviewTransfer.loan_datetime + ' 00:00:00').getTime() - 24 * 36000000;
        }
      };
    },
    addPickerOptions: function addPickerOptions() {
      var _this3 = this;

      return {
        disabledDate: function disabledDate(time) {
          var dateBool = false;
          for (var i = 0; i < _this3.reviewTransfer.cashDetail.length; i++) {
            if (_this3.reviewTransfer.cashDetail[i].cash_flow_type == 2) {
              dateBool = dateBool || time.getTime() == new Date(_this3.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00').getTime();
            }
          }
          return time.getTime() < Date.now() - 24 * 3600000 || time.getTime() < new Date(_this3.reviewTransfer.loan_datetime).getTime() - 24 * 36000000 || dateBool;
        }
      };
    },
    leftCashAmount: function leftCashAmount() {
      if (this.reviewTransfer.cashDetail.length > 0) {
        var amount = Number(this.reviewTransfer.cashDetail[0].amount);
        if (this.reviewTransfer.cashDetail.length > 1) {
          for (var i = 1; i < this.reviewTransfer.cashDetail.length; i++) {
            if (this.reviewTransfer.cashDetail[i].cash_flow_type == 2) {
              amount -= Number(this.reviewTransfer.cashDetail[i].amount);
            }
          }
        }
        return amount;
      } else {
        return 0;
      }
    }
  },
  created: function created() {
    var _this4 = this;

    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'loanTransferList'
      });
    } else {
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_loan__["c" /* getLoanTransferDetail */])({
        uuid: this.$route.params.uuid
      }).then(function (res) {
        Object.assign(_this4.reviewTransfer, res.data);

        _this4.getLoanBankAccountListData();
        _this4.getCollectBankAccountListData();

        _this4.formatDetailData();

        if (!_this4.reviewTransfer.cashDetail.length) {
          _this4.triggerUpdateCashFlow(false);
        } else {
          _this4.sortCashFlowList();
        }

        _this4.loading = false;
      }).catch(function () {
        _this4.loading = false;
      });
    }
  },

  methods: {
    // 格式化详情数据
    formatDetailData: function formatDetailData() {
      this.reviewTransfer.formatAmount = this.filterCent2YuanCurrencyAmount([this.reviewTransfer.amount, this.reviewTransfer.currency]);

      this.reviewTransfer.currencyStr = this.mformatCurrencyStr(this.reviewTransfer.currency);

      this.reviewTransfer.rateStr = this.filterPercentage(this.reviewTransfer.rate).toString().slice(0, -1);

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
      if (this.reviewTransfer.contact_annex) {
        try {
          this.reviewTransfer.contact_annex = JSON.parse(this.reviewTransfer.contact_annex);
          for (var i = 0; i < this.reviewTransfer.contact_annex.length; i++) {
            this.fileList.push({
              name: this.reviewTransfer.contact_annex[i].name,
              url: this.reviewTransfer.contact_annex[i].url
            });
          }
        } catch (e) {}
      }

      if (this.reviewTransfer.real_pay_type == '0') {
        this.reviewTransfer.real_pay_type = '';
      } else {
        this.reviewTransfer.real_pay_type = '' + this.reviewTransfer.real_pay_type;
      }

      this.getCollectBankAccountListData();
    },


    // 发起借款调拨
    startTransferFlow: function startTransferFlow(formName) {
      var _this5 = this;

      if (this.loading) return false;
      this.loading = true;

      if (!this.reviewTransfer.cashDetail.length || this.leftCashAmount != 0) {
        this.$message.warning('本金回款不足，请检查现金流表');
        this.loading = false;
        return false;
      }
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this5.mconfirm('确定要通过借款调拨审核吗?').then(function () {
            _this5.mshowLoading('正在通过借款调拨审核...');

            // 获取发起借款调拨参数

            var params = {
              real_pay_type: _this5.reviewTransfer.real_pay_type,
              pay_remark: _this5.reviewTransfer.pay_remark,
              forecast_datetime: _this5.reviewTransfer.forecast_datetime,
              loan_account_uuid: _this5.reviewTransfer.loan_account_uuid,
              collect_account_uuid: _this5.reviewTransfer.collect_account_uuid,
              cashDetail: _this5.reviewTransfer.cashDetail
            };

            Object(__WEBPACK_IMPORTED_MODULE_0__api_loan__["k" /* loanTransferFlowStart */])({
              instance_id: _this5.reviewTransfer.uuid,
              main_body_uuid: _this5.reviewTransfer.loan_main_body_uuid,
              info: _this5.reviewTransfer.review_comments,
              params: params
            }).then(function () {
              _this5.loading = false;
              _this5.mhideLoading();
              _this5.$message.success('提交成功');
              _this5.$router.replace({
                name: 'loanTransferList'
              });
            }).catch(function () {
              _this5.loading = false;
              _this5.mhideLoading();
            });
          }).catch(function () {
            _this5.loading = false;
          });
        } else {
          _this5.loading = false;
          _this5.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    },

    // 驳回借款指令
    rejectOrder: function rejectOrder(formName) {
      var _this6 = this;

      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (this.reviewTransfer.review_comments && this.reviewTransfer.review_comments.length <= 100) {
        this.isReject = false;

        this.mconfirm('确定要驳回吗?').then(function () {
          _this6.mshowLoading('正在驳回借款...');
          // 获取指令拒绝参数
          var params = {
            instance_id: _this6.reviewTransfer.loan_order_uuid,
            info: _this6.reviewTransfer.review_comments,
            params: {}
          };

          Object(__WEBPACK_IMPORTED_MODULE_0__api_loan__["e" /* loanOrderFlowReject */])(params).then(function () {
            _this6.loading = false;
            _this6.mhideLoading();
            _this6.$message.success('借款驳回成功');
            _this6.$router.replace({
              name: 'loanTransferList'
            });
          }).catch(function () {
            _this6.loading = false;
            _this6.mhideLoading();
          });
        }).catch(function () {
          _this6.loading = false;
        });
      } else {
        this.loading = false;
        this.isReject = false;
        this.$message.warning('请完善数据填写后重试');
        return false;
      }
    },


    // 借款银行
    getLoanBankAccountListData: function getLoanBankAccountListData() {
      var _this7 = this;

      if (!this.reviewTransfer.loan_main_body_uuid) {
        this.$message.error('借款主体缺失，指令信息不足！');
      }

      if (this.loanBankAccountLoading || !this.reviewTransfer.loan_main_body_uuid) {
        return false;
      }
      this.loanBankAccountLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_account__["k" /* getEffectAccountList */])({
        page: 1,
        limit: -1,
        main_body_uuid: this.reviewTransfer.loan_main_body_uuid
      }).then(function (res) {
        _this7.loanBankAccountList = res.data.data;

        _this7.loanBankAccountLoading = false;
      }).catch(function () {
        _this7.loanBankAccountLoading = false;
      });
    },
    loanBankAccountSelectToggle: function loanBankAccountSelectToggle(show) {
      if (show && !this.loanBankAccountLoading && !this.loanBankAccountList.length) {
        this.getLoanBankAccountListData();
      }
    },
    loanBankAccountSelectChange: function loanBankAccountSelectChange(bankUuid) {
      var hasAccount = false;
      for (var i = 0; i < this.loanBankAccountList.length; i++) {
        if (bankUuid == this.loanBankAccountList[i].uuid) {
          hasAccount = true;
          this.reviewTransfer.loan_bank_account = this.loanBankAccountList[i].bank_account;

          if (this.loanBankAccountList[i].real_pay_type != '0') {
            this.reviewTransfer.real_pay_type = '' + this.loanBankAccountList[i].real_pay_type;
            this.isBankSetRealPayType = true;
          } else {
            this.isBankSetRealPayType = false;
          }
          break;
        }
      }

      if (hasAccount) {
        if (this.reviewTransfer.collect_account_uuid && this.$refs['reviewTransfer']) {
          this.$refs['reviewTransfer'].validateField('collect_account_uuid');
        }
      } else {
        this.reviewTransfer.loan_account_uuid = '';
        this.reviewTransfer.loan_bank_name = '';
        this.reviewTransfer.loan_bank_account = '';
        this.reviewTransfer.real_pay_type = '';
        this.isBankSetRealPayType = false;
      }
    },


    // 贷款银行
    getCollectBankAccountListData: function getCollectBankAccountListData() {
      var _this8 = this;

      if (!this.reviewTransfer.collect_main_body_uuid) {
        this.$message.error('贷款主体缺失，指令信息不足！');
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
        _this8.collectBankAccountList = res.data.data;
        _this8.collectBankAccountLoading = false;
      }).catch(function () {
        _this8.collectBankAccountLoading = false;
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
          this.reviewTransfer.loan_account_uuid && this.$refs['reviewTransfer'].validateField('loan_account_uuid');
        }
      } else {
        this.reviewTransfer.collect_account_uuid = '';
        this.reviewTransfer.collect_bank_name = '';
        this.reviewTransfer.collect_bank_account = '';
      }
    },


    // 借款现金流处理
    // 计算利息回款
    calIntAmount: function calIntAmount(amount, date) {
      return Math.round(Number(amount) * Number(this.reviewTransfer.rate) * ((new Date(date).getTime() - new Date(this.reviewTransfer.loan_datetime).getTime()) / 1000 / 24 / 3600) / 365 / 100);
    },

    // 获取利息回款现金流
    calIntCashFlow: function calIntCashFlow(cashFlow) {
      var newIntCashFlow = {
        repay_date: cashFlow.repay_date,
        cash_flow_type: '3',
        amount: 0,
        real_amount: 0,
        info: ''
      };
      newIntCashFlow.amount = this.calIntAmount(cashFlow.amount, cashFlow.repay_date);

      newIntCashFlow.real_amount = newIntCashFlow.amount;

      return newIntCashFlow;
    },

    // 借款现金流表排序
    sortCashFlowList: function sortCashFlowList() {
      this.reviewTransfer.cashDetail.sort(function (cashFlow1, cashFlow2) {
        if (cashFlow1.repay_date == cashFlow2.repay_date) {
          return Number(cashFlow1.cash_flow_type) - Number(cashFlow2.cash_flow_type);
        }

        return new Date(cashFlow1.repay_date).getTime() - new Date(cashFlow2.repay_date).getTime();
      });

      var index = 1;
      for (var i = 0; i < this.reviewTransfer.cashDetail.length; i++) {
        if (this.reviewTransfer.cashDetail[i].cash_flow_type == 1) {
          this.reviewTransfer.cashDetail[i].index = 1;
          index++;
        }
        if (this.reviewTransfer.cashDetail[i].cash_flow_type == 2) {
          this.reviewTransfer.cashDetail[i].index = index;
          this.reviewTransfer.cashDetail[i + 1].index = index;
          index++;
        }
      }
    },

    // 刷新借款现金流表
    triggerUpdateCashFlow: function triggerUpdateCashFlow(showWarning) {
      if (this.reviewTransfer.amount && this.reviewTransfer.loan_datetime && this.reviewTransfer.forecast_datetime && this.reviewTransfer.rate) {
        this.reviewTransfer.cashDetail = [{
          repay_date: this.reviewTransfer.loan_datetime,
          cash_flow_type: '1',
          amount: this.reviewTransfer.amount,
          real_amount: this.reviewTransfer.amount,
          info: ''
        }, {
          repay_date: this.reviewTransfer.forecast_datetime,
          cash_flow_type: '2',
          amount: this.reviewTransfer.amount,
          real_amount: this.reviewTransfer.amount,
          info: ''
        }];
        var newIntCashFlow = this.calIntCashFlow(this.reviewTransfer.cashDetail[1]);
        this.reviewTransfer.cashDetail.push(newIntCashFlow);
        this.sortCashFlowList();
      } else {
        if (showWarning) {
          this.$message.warning('请完善数据后重试');
        }
        this.reviewTransfer.cashDetail = [];
      }
    },

    // 触发新增本金回款
    triggerAddCashFlow: function triggerAddCashFlow() {
      this.addCashFlowDialogVisible = true;
    },

    // 获取新增的本金回款
    pushNewCashFlow: function pushNewCashFlow(newCashFlow) {
      this.reviewTransfer.cashDetail.push(newCashFlow);
      var newIntCashFlow = this.calIntCashFlow(newCashFlow);
      this.reviewTransfer.cashDetail.push(newIntCashFlow);
      this.sortCashFlowList();
      this.addCashFlowDialogVisible = false;
    },
    triggerCashFlowEdit: function triggerCashFlowEdit(currentCashFlow, currentIndex) {
      var _this9 = this;

      this.currentCashFlow = JSON.parse(JSON.stringify(currentCashFlow));
      this.currentIndex = currentIndex;

      this.updatePickerOptions = {
        disabledDate: function disabledDate(time) {
          var updateBool = false;
          for (var i = 0; i < _this9.reviewTransfer.cashDetail.length; i++) {
            if (_this9.reviewTransfer.cashDetail[i].cash_flow_type == 2 && i != currentIndex) {
              updateBool = updateBool || time.getTime() == new Date(_this9.reviewTransfer.cashDetail[i].repay_date + ' 00:00:00').getTime();
            }
          }
          return time.getTime() < Date.now() - 24 * 3600000 || time.getTime() < new Date(_this9.reviewTransfer.loan_datetime).getTime() - 24 * 36000000 || updateBool;
        }
      };

      this.updateCashFlowDialogVisible = true;
    },
    triggerCashFlowDelete: function triggerCashFlowDelete(index) {
      this.reviewTransfer.cashDetail.splice(index, 2);
    },
    changeUpdateCashFlow: function changeUpdateCashFlow(index, newCashFlow) {
      if (newCashFlow.cash_flow_type == 2) {
        this.reviewTransfer.cashDetail.splice(index, 1, newCashFlow);
        var newIntCashFlow = this.calIntCashFlow(newCashFlow);
        this.reviewTransfer.cashDetail.splice(index + 1, 1, newIntCashFlow);
        this.sortCashFlowList();
      } else if (newCashFlow.cash_flow_type == 3) {
        this.reviewTransfer.cashDetail.splice(index, 1, newCashFlow);
      }

      this.updateCashFlowDialogVisible = false;
    },
    closeDialog: function closeDialog() {
      this.addCashFlowDialogVisible = false;
      this.updateCashFlowDialogVisible = false;
    },
    forecastDateChange: function forecastDateChange() {
      this.triggerUpdateCashFlow(false);
    }
  }
});

/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(695),
  /* template */
  __webpack_require__(696),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\loan\\transfer\\addCashFlow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] addCashFlow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11b820c0", Component.options)
  } else {
    hotAPI.reload("data-v-11b820c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 695:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    leftCashAmount: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    pickerOptions: {
      type: Object,
      default: function _default() {
        return {
          disabledDate: function disabledDate(time) {
            return time.getTime() < Date.now();
          }
        };
      }
    }
  },
  data: function data() {
    var _this = this;

    var checkMoney = function checkMoney(rule, value, callback) {
      if (value && !Object(__WEBPACK_IMPORTED_MODULE_0__utils_validate__["a" /* validate2Decimal */])(value)) {
        return callback(new Error('请输入不超过两位小数的正数值'));
      }

      if (value && Number(value).toFixed(2) == '0.00') {
        return callback(new Error('金额不能为0'));
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

    var checkOver = function checkOver(rule, value, callback) {
      if (value && Number(value) > _this.leftCashAmountYuan) {
        return callback(new Error('超出本金回款剩余额度：' + _this.leftCashAmountYuan + '元'));
      }

      return callback();
    };

    return {
      loading: false,
      leftCashAmountYuan: '',
      newCashFlow: {
        repay_date: '',
        cash_flow_type: '2',
        amount: '',
        real_amount: '',
        info: ''
      },
      rules: {
        repay_date: [{
          required: true,
          message: '请选择日期',
          trigger: 'change'
        }],
        cash_flow_type: [{
          required: true,
          message: '请选择事项',
          trigger: 'change'
        }],
        amount: [{
          required: true,
          message: '请输入金额',
          trigger: 'blur'
        }, {
          validator: checkMoney,
          trigger: 'blur'
        }, {
          validator: checkOver,
          trigger: 'blur'
        }]
      }
    };
  },
  created: function created() {
    this.leftCashAmountYuan = Number(this.filterCent2YuanNoThousandCurrencyAmount(this.leftCashAmount));
    this.newCashFlow.amount = this.leftCashAmountYuan;
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var flow = JSON.parse(JSON.stringify(_this2.newCashFlow));

          flow.amount = _this2.filterYuan2CentAmount(flow.amount);
          flow.real_amount = flow.amount;
          _this2.$emit('addCashFlowSuccess', flow);
          _this2.loading = false;
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

/***/ 696:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-container form-dialog-box"
  }, [_c('el-form', {
    ref: "newCashFlow",
    attrs: {
      "model": _vm.newCashFlow,
      "rules": _vm.rules,
      "label-width": "100px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "日期",
      "prop": "repay_date"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "value-format": _vm.datedateFormat,
      "picker-options": _vm.pickerOptions,
      "align": "right",
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.newCashFlow.repay_date),
      callback: function($$v) {
        _vm.$set(_vm.newCashFlow, "repay_date", $$v)
      },
      expression: "newCashFlow.repay_date"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "事项",
      "prop": "cash_flow_type"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "选择事项",
      "disabled": ""
    },
    model: {
      value: (_vm.newCashFlow.cash_flow_type),
      callback: function($$v) {
        _vm.$set(_vm.newCashFlow, "cash_flow_type", $$v)
      },
      expression: "newCashFlow.cash_flow_type"
    }
  }, [_c('el-option', {
    key: "2",
    attrs: {
      "label": "本金回款",
      "value": "2"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "金额",
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "请输入金额"
    },
    model: {
      value: (_vm.newCashFlow.amount),
      callback: function($$v) {
        _vm.$set(_vm.newCashFlow, "amount", $$v)
      },
      expression: "newCashFlow.amount"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1), _vm._v(" "), _c('el-form-item', {
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
      value: (_vm.newCashFlow.info),
      callback: function($$v) {
        _vm.$set(_vm.newCashFlow, "info", $$v)
      },
      expression: "newCashFlow.info"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
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
        _vm.submitForm('newCashFlow')
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
     require("vue-hot-reload-api").rerender("data-v-11b820c0", module.exports)
  }
}

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(698),
  /* template */
  __webpack_require__(699),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\loan\\transfer\\updateCashFlow.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] updateCashFlow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b995f7c", Component.options)
  } else {
    hotAPI.reload("data-v-7b995f7c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 698:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    leftCashAmount: {
      type: Number,
      default: function _default() {
        return 0;
      }
    },
    pickerOptions: {
      type: Object,
      default: function _default() {
        return {
          disabledDate: function disabledDate(time) {
            return time.getTime() < Date.now();
          }
        };
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    },
    currentCashFlow: {
      type: Object,
      default: null
    }
  },
  data: function data() {
    var _this = this;

    var checkMoney = function checkMoney(rule, value, callback) {
      if (value && !Object(__WEBPACK_IMPORTED_MODULE_0__utils_validate__["a" /* validate2Decimal */])(value)) {
        return callback(new Error('请输入不超过两位小数的非负数值'));
      }

      if (value && Number(value).toFixed(2) == '0.00' && _this.updateCashFlow.cash_flow_type == 2) {
        return callback(new Error('金额不能为0'));
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

    var checkOver = function checkOver(rule, value, callback) {
      if (value && Number(value) > _this.leftCashAmountYuan) {
        return callback(new Error('超出本金回款剩余额度：' + _this.leftCashAmountYuan + '元'));
      }

      return callback();
    };

    var checkInterest = function checkInterest(rule, value, callback) {
      if (value && !Object(__WEBPACK_IMPORTED_MODULE_0__utils_validate__["a" /* validate2Decimal */])(value)) {
        return callback(new Error('请输入不超过两位小数的非负数值'));
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
      leftCashAmountCent: '',
      leftCashAmountYuan: '',
      updateCashFlow: {
        repay_date: '',
        cash_flow_type: '',
        amount: '',
        real_amount: '',
        info: ''
      },
      rules: {
        repay_date: [{
          required: true,
          message: '请选择日期',
          trigger: 'change'
        }],
        cash_flow_type: [{
          required: true,
          message: '请选择事项',
          trigger: 'change'
        }],
        amount: [{
          required: true,
          message: '请输入金额',
          trigger: 'blur'
        }, {
          validator: checkMoney,
          trigger: 'blur'
        }, {
          validator: checkOver,
          trigger: 'blur'
        }],
        real_amount: [{
          required: true,
          message: '请输入实际金额',
          trigger: 'blur'
        }, {
          validator: checkInterest,
          trigger: 'blur'
        }]
      }
    };
  },
  created: function created() {
    this.leftCashAmountCent = Number(this.currentCashFlow.amount) + Number(this.leftCashAmount);
    this.leftCashAmountYuan = this.filterCent2YuanNoThousandCurrencyAmount(this.leftCashAmountCent);

    this.updateCashFlow.cash_flow_type = Number(this.updateCashFlow.cash_flow_type);

    Object.assign(this.updateCashFlow, this.currentCashFlow);
    this.updateCashFlow.amount = this.filterCent2YuanNoThousandCurrencyAmount(this.updateCashFlow.amount);
    this.updateCashFlow.real_amount = this.filterCent2YuanNoThousandCurrencyAmount(this.updateCashFlow.real_amount);
  },

  methods: {
    submitForm: function submitForm(formName) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          var flow = JSON.parse(JSON.stringify(_this2.updateCashFlow));

          flow.amount = _this2.filterYuan2CentAmount(flow.amount);
          if (flow.cash_flow_type == 2) {
            flow.real_amount = flow.amount;
          } else {
            flow.real_amount = _this2.filterYuan2CentAmount(flow.real_amount);
          }
          _this2.$emit('updateCashFlowSuccess', _this2.currentIndex, flow);
          _this2.loading = false;
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

/***/ 699:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content-container form-dialog-box"
  }, [_c('el-row', [_c('el-col', {
    attrs: {
      "md": 24
    }
  }, [_c('el-form', {
    ref: "updateCashFlow",
    attrs: {
      "model": _vm.updateCashFlow,
      "rules": _vm.rules,
      "label-width": "100px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "日期",
      "prop": "repay_date"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "value-format": _vm.datedateFormat,
      "picker-options": _vm.pickerOptions,
      "disabled": _vm.updateCashFlow.cash_flow_type == 3,
      "align": "right",
      "type": "date",
      "placeholder": "选择日期"
    },
    model: {
      value: (_vm.updateCashFlow.repay_date),
      callback: function($$v) {
        _vm.$set(_vm.updateCashFlow, "repay_date", $$v)
      },
      expression: "updateCashFlow.repay_date"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "事项",
      "prop": "cash_flow_type"
    }
  }, [(_vm.updateCashFlow.cash_flow_type == 2) ? _c('el-input', {
    attrs: {
      "value": "本金回款",
      "disabled": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.updateCashFlow.cash_flow_type == 3) ? _c('el-input', {
    attrs: {
      "value": "利息回款",
      "disabled": ""
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "金额",
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": _vm.updateCashFlow.cash_flow_type == 3,
      "type": "number",
      "placeholder": "请输入金额"
    },
    model: {
      value: (_vm.updateCashFlow.amount),
      callback: function($$v) {
        _vm.$set(_vm.updateCashFlow, "amount", $$v)
      },
      expression: "updateCashFlow.amount"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1), _vm._v(" "), (_vm.updateCashFlow.cash_flow_type == 3) ? _c('el-form-item', {
    attrs: {
      "label": "实际金额",
      "prop": "real_amount"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "请输入实际金额"
    },
    model: {
      value: (_vm.updateCashFlow.real_amount),
      callback: function($$v) {
        _vm.$set(_vm.updateCashFlow, "real_amount", $$v)
      },
      expression: "updateCashFlow.real_amount"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
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
      value: (_vm.updateCashFlow.info),
      callback: function($$v) {
        _vm.$set(_vm.updateCashFlow, "info", $$v)
      },
      expression: "updateCashFlow.info"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
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
        _vm.submitForm('updateCashFlow')
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
  }, [_vm._v("取消")])], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7b995f7c", module.exports)
  }
}

/***/ }),

/***/ 700:
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
  }, [_c('span', [_vm._v("借款调拨发起")])]), _vm._v(" "), _c('el-form', {
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
      "label": "系统来源",
      "prop": "system_flag"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.system_flag),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "system_flag", $$v)
      },
      expression: "reviewTransfer.system_flag"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "外部指令号",
      "prop": "out_order_num"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.out_order_num),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "out_order_num", $$v)
      },
      expression: "reviewTransfer.out_order_num"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "资金交易编号",
      "prop": "transfer_num"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.transfer_num),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "transfer_num", $$v)
      },
      expression: "reviewTransfer.transfer_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款编号",
      "prop": "loan_order_num"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.loan_order_num),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "loan_order_num", $$v)
      },
      expression: "reviewTransfer.loan_order_num"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "借款方",
      "prop": "loan_main_body"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.loan_main_body),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "loan_main_body", $$v)
      },
      expression: "reviewTransfer.loan_main_body"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贷款方",
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
      "label": "借款方银行名称",
      "prop": "loan_account_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择借款方银行名称"
    },
    on: {
      "visible-change": _vm.loanBankAccountSelectToggle,
      "change": _vm.loanBankAccountSelectChange
    },
    model: {
      value: (_vm.reviewTransfer.loan_account_uuid),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "loan_account_uuid", $$v)
      },
      expression: "reviewTransfer.loan_account_uuid"
    }
  }, [_vm._l((_vm.loanBankAccountList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.bank_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.loanBankAccountLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loanBankAccountLoading),
      expression: "loanBankAccountLoading"
    }],
    key: "loanBankAccountLoading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贷款方银行名称",
      "prop": "collect_account_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择贷款方银行名称"
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
      "label": "借款方银行账号",
      "prop": "loan_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请选择借款方银行名称获取",
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.loan_bank_account),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "loan_bank_account", $$v)
      },
      expression: "reviewTransfer.loan_bank_account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贷款方银行账号",
      "prop": "collect_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请选择贷款方银行名称获取",
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
      "value": "2",
      "label": "银企"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": "1",
      "label": "网银"
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
      "label": "借款币种",
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
      "label": "借款金额",
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.formatAmount),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "formatAmount", $$v)
      },
      expression: "reviewTransfer.formatAmount"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "借款日期",
      "prop": "loan_datetime"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.loan_datetime),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "loan_datetime", $$v)
      },
      expression: "reviewTransfer.loan_datetime"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "预计还款日",
      "prop": "forecast_datetime"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.forecast_datetime),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "forecast_datetime", $$v)
      },
      expression: "reviewTransfer.forecast_datetime"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令发起人",
      "prop": "transfer_create_people"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.transfer_create_people),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "transfer_create_people", $$v)
      },
      expression: "reviewTransfer.transfer_create_people"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "利息率",
      "prop": "rate"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.rateStr),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "rateStr", $$v)
      },
      expression: "reviewTransfer.rateStr"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("\n                %\n              ")])], 2)], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "业务背景",
      "prop": "bs_background"
    }
  }, [(_vm.reviewTransfer.bs_background) ? _c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.bs_background),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "bs_background", $$v)
      },
      expression: "reviewTransfer.bs_background"
    }
  }) : _c('div', {
    staticClass: "sub-text"
  }, [_vm._v("无")])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "其他说明"
    }
  }, [(_vm.reviewTransfer.plus_require) ? _c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.plus_require),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "plus_require", $$v)
      },
      expression: "reviewTransfer.plus_require"
    }
  }) : _c('div', {
    staticClass: "sub-text"
  }, [_vm._v("无")])], 1), _vm._v(" "), _c('el-form-item', {
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
  }, [_vm._v("无")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令状态",
      "prop": "transfer_status"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.loanTransferStatusJson[_vm.reviewTransfer.transfer_status]),
      callback: function($$v) {
        _vm.$set(_vm.loanTransferStatusJson, _vm.reviewTransfer.transfer_status, $$v)
      },
      expression: "loanTransferStatusJson[reviewTransfer.transfer_status]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款状态",
      "prop": "loan_status"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.loanPayStatusJson[_vm.reviewTransfer.loan_status]),
      callback: function($$v) {
        _vm.$set(_vm.loanPayStatusJson, _vm.reviewTransfer.loan_status, $$v)
      },
      expression: "loanPayStatusJson[reviewTransfer.loan_status]"
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
      value: (_vm.reviewTransfer.create_time),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "create_time", $$v)
      },
      expression: "reviewTransfer.create_time"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "指令更新时间"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.update_time),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "update_time", $$v)
      },
      expression: "reviewTransfer.update_time"
    }
  })], 1)], 1), _vm._v(" "), _c('el-card', {
    staticClass: "box-card box-card-inside"
  }, [_c('div', {
    staticClass: "box-card-header",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("借款现金流表")]), _vm._v(" "), _c('div', [_c('el-button', {
    attrs: {
      "disabled": _vm.loading || !(_vm.reviewTransfer.amount &&
        _vm.reviewTransfer.loan_datetime &&
        _vm.reviewTransfer.forecast_datetime &&
        _vm.reviewTransfer.rate),
      "type": "text"
    },
    on: {
      "click": _vm.triggerUpdateCashFlow
    }
  }, [_vm._v("更新现金流表")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.loading || !(_vm.reviewTransfer.amount &&
        _vm.reviewTransfer.loan_datetime &&
        _vm.reviewTransfer.forecast_datetime &&
        _vm.reviewTransfer.rate) || _vm.leftCashAmount <= 0,
      "type": "text"
    },
    on: {
      "click": _vm.triggerAddCashFlow
    }
  }, [_vm._v("新增")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "text item"
  }, [_c('el-table', {
    attrs: {
      "data": _vm.reviewTransfer.cashDetail
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
      "label": "金额",
      "width": "150px"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(_vm._f("filterCent2YuanCurrencyAmount")([scope.row.amount, _vm.reviewTransfer.currency])) + "\n                ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "说明",
      "prop": "info"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "操作",
      "width": "200"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.cash_flow_type == 2) ? [_c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "text"
          },
          on: {
            "click": function($event) {
              _vm.triggerCashFlowEdit(scope.row, scope.$index)
            }
          }
        }, [_vm._v("修改")]), _vm._v(" "), _c('el-button', {
          attrs: {
            "disabled": _vm.loading,
            "size": "mini",
            "type": "text"
          },
          on: {
            "click": function($event) {
              _vm.triggerCashFlowDelete(scope.$index)
            }
          }
        }, [_vm._v("删除")])] : _vm._e()]
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c('el-form-item', {
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
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.reviewTransfer.transfer_status == '0') ? _c('el-button', {
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
  }, [_vm._v("通过")]) : _vm._e(), _vm._v(" "), (_vm.reviewTransfer.transfer_status == '0') ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.rejectOrder('reviewTransfer')
      }
    }
  }, [_vm._v("驳回")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "loanTransferList",
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
        return [_vm._v("\n                  " + _vm._s(_vm.nodeStatusJson[scope.row.node_status] + (scope.row.deal_remark ? scope.row.deal_remark : '无')) + "\n                ")]
      }
    }])
  })], 1) : _vm._e()], 1)])], 1)], 1)], 1), _vm._v(" "), (_vm.addCashFlowDialogVisible) ? _c('el-dialog', {
    key: 'addCashFlowDialog' + _vm.timestamp,
    attrs: {
      "append-to-body": true,
      "visible": _vm.addCashFlowDialogVisible,
      "title": "新增借款现金流",
      "left": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.addCashFlowDialogVisible = $event
      },
      "close": function($event) {
        _vm.timestamp = Date.now()
      }
    }
  }, [_c('add-cash-flow', {
    attrs: {
      "picker-options": _vm.addPickerOptions,
      "left-cash-amount": _vm.leftCashAmount
    },
    on: {
      "addCashFlowSuccess": _vm.pushNewCashFlow,
      "closeDialog": _vm.closeDialog
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.updateCashFlowDialogVisible) ? _c('el-dialog', {
    key: 'updateCashFlowDialog' + _vm.timestamp,
    attrs: {
      "append-to-body": true,
      "visible": _vm.updateCashFlowDialogVisible,
      "title": "修改借款现金流",
      "left": ""
    },
    on: {
      "update:visible": function($event) {
        _vm.updateCashFlowDialogVisible = $event
      },
      "close": function($event) {
        _vm.timestamp = Date.now()
      }
    }
  }, [_c('update-cash-flow', {
    attrs: {
      "left-cash-amount": _vm.leftCashAmount,
      "picker-options": _vm.updatePickerOptions,
      "current-index": _vm.currentIndex,
      "current-cash-flow": _vm.currentCashFlow
    },
    on: {
      "updateCashFlowSuccess": _vm.changeUpdateCashFlow,
      "closeDialog": _vm.closeDialog
    }
  })], 1) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-adcdb22c", module.exports)
  }
}

/***/ })

});