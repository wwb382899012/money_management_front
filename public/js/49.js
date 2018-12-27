webpackJsonp([49],{

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

/***/ })

});