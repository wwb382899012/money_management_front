webpackJsonp([8,47],{

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(654),
  /* template */
  __webpack_require__(655),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\pay\\order\\detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2dd358c6", Component.options)
  } else {
    hotAPI.reload("data-v-2dd358c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(681),
  /* template */
  __webpack_require__(682),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\pay\\transfer\\rreview.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rreview.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b39528c", Component.options)
  } else {
    hotAPI.reload("data-v-1b39528c", Component.options)
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

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPayOrderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getPayOrderDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return payOrderFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return payOrderFlowReject; });
/* unused harmony export payOrderFlowStop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return payTransferFlowStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getPayTransferList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getPayTransferDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return payTransferFlowResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return payTransferFlowReject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return payTransferFlowStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return payTransferRetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return payTransferConfirmSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return payTransferConfirmFail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flow__ = __webpack_require__(633);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





/**
 * 获取付款指令列表
 * @param {json} data
 *  @param {number}   data.page                   当前页码
 *  @param {number}   data.limit                  每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string}   data.order_create_people    指令发起人，搜索条件，非必填
 *  @param {number}   data.order_status           指令状态，搜索条件，非必填
 *  @param {datetime} data.apply_begin_time       指令到达开始时间，搜索条件，非必填
 *  @param {datetime} data.apply_end_time         指令到达结束时间，搜索条件，非必填
 *  @param {datetime} data.approve_begin_time     指令审核开始时间，搜索条件，非必填
 *  @param {datetime} data.approve_end_time       指令审核结束时间，搜索条件，非必填
 *  @param {string}   data.pay_main_body_uuid     付款方主体uuid，搜索条件，非必填
 *  @param {string}   data.collect_main_body_uuid 收款方主体uuid，搜索条件，非必填
 *  @param {number}   data.is_financing           是否需要融资，1-需要，2-不需要，搜索条件，非必填
 */
var getPayOrderList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.order.PayOrderList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getPayOrderList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取付款指令详情
 * @param {json} data
 *  @param {string} data.uuid 付款指令唯一标识uuid
 */
var getPayOrderDetail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.order.PayOrderDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getPayOrderDetail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 付款指令通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var payOrderFlowResolve = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'pay_order'
            });
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(params));

          case 2:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function payOrderFlowResolve(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 付款指令驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var payOrderFlowReject = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'pay_order'
            });
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(params));

          case 2:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function payOrderFlowReject(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 付款指令拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var payOrderFlowStop = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            params = Object.assign({}, data, {
              flow_code: 'pay_order'
            });
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["d" /* flowStop */])(params));

          case 2:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function payOrderFlowStop(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 发起付款调拨
 * @param {json} data
 *  @param {string} data.instance_id    业务数据唯一标识uuid
 *  @param {string} data.main_body_uuid 主体唯一标识uuid
 *  @param {string} data.info           审批建议
 *  @param {json}   data.params         其他参数
 */
var payTransferFlowStart = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'pay_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'pay_transfer_pay_type_2_code'
            });
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["c" /* flowStart */])(params));

          case 2:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function payTransferFlowStart(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/**
 * 获取付款调拨列表
 * @param {json} data
 */
var getPayTransferList = function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(data) {
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.order.PayTransferList',
              body: data
            }));

          case 1:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this);
  }));

  return function getPayTransferList(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

/**
 * 获取付款调拨详情
 * @param {json} data
 */
var getPayTransferDetail = function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(data) {
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.order.PayTransferDetail',
              body: data
            }));

          case 1:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function getPayTransferDetail(_x8) {
    return _ref8.apply(this, arguments);
  };
}();

/**
 * 付款调拨通过
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var payTransferFlowResolve = function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'pay_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'pay_transfer_pay_type_2_code'
            });
            return _context9.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["b" /* flowResolve */])(params));

          case 2:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, this);
  }));

  return function payTransferFlowResolve(_x9) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * 付款调拨驳回
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var payTransferFlowReject = function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'pay_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'pay_transfer_pay_type_2_code'
            });
            return _context10.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["a" /* flowReject */])(params));

          case 2:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, this);
  }));

  return function payTransferFlowReject(_x10) {
    return _ref10.apply(this, arguments);
  };
}();

/**
 * 付款调拨拒绝
 * @param {json} data
 *  @param {string} data.instance_id  业务数据唯一标识uuid
 *  @param {string} data.info         审批建议
 *  @param {json}   data.params       其他参数
 */
var payTransferFlowStop = function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(data) {
    var params;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            params = data.params.real_pay_type == '1' ? Object.assign({}, data, {
              flow_code: 'pay_transfer_pay_type_1_code'
            }) : Object.assign({}, data, {
              flow_code: 'pay_transfer_pay_type_2_code'
            });
            return _context11.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_1__flow__["d" /* flowStop */])(params));

          case 2:
          case 'end':
            return _context11.stop();
        }
      }
    }, _callee11, this);
  }));

  return function payTransferFlowStop(_x11) {
    return _ref11.apply(this, arguments);
  };
}();

/**
 * 打款重试
 * @param {json} data
 *  @param {string} data.uuid   付款指令唯一标识uuid
 *  @param {string} data.ukPwd  付款UKey密码
 */
var payTransferRetry = function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(data) {
    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.order.PayRetry',
              body: data
            }));

          case 1:
          case 'end':
            return _context12.stop();
        }
      }
    }, _callee12, this);
  }));

  return function payTransferRetry(_x12) {
    return _ref12.apply(this, arguments);
  };
}();

/**
 * 打款确认成功
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
var payTransferConfirmSuccess = function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(data) {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.order.ConfirmStatus',
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

  return function payTransferConfirmSuccess(_x13) {
    return _ref13.apply(this, arguments);
  };
}();

/**
 * 打款确认失败
 * 
 * @param {json} data
 *  @param {string} uuid 付款调拨ID
 */
var payTransferConfirmFail = function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(data) {
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            return _context14.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.order.ConfirmStatus',
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

  return function payTransferConfirmFail(_x14) {
    return _ref14.apply(this, arguments);
  };
}();

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

window.SoftKey6W = function SoftKey6W() {
  var isIE11 = navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf("rv:11.0") > -1;
  var isEDGE = navigator.userAgent.indexOf("Edge") > -1;
  var u = document.URL;
  var url;
  if (u.substring(0, 5) == "https") {
    if (isIE11 || isEDGE) {
      url = "wss://127.0.0.1:4007/xxx";
    } else {
      url = "wss://localhost:4007/xxx";
    }
  } else {
    url = "ws://127.0.0.1:4007/xxx";
  }

  var Socket_UK;

  if (typeof MozWebSocket != "undefined") {
    Socket_UK = new MozWebSocket(url, "usbkey-protocol");
  } else {
    this.Socket_UK = new WebSocket(url, "usbkey-protocol");
  }

  this.FindPort = function (start) {
    var msg = {
      FunName: "FindPort",
      start: start
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.FindPort_2 = function (start, in_data, verf_data) {
    var msg = {
      FunName: "FindPort_2",
      start: start,
      in_data: in_data,
      verf_data: verf_data
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.FindPort_3 = function (start, in_data, verf_data) {
    var msg = {
      FunName: "FindPort_3",
      start: start,
      in_data: in_data,
      verf_data: verf_data
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetVersion = function (Path) {
    var msg = {
      FunName: "GetVersion",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetVersionEx = function (Path) {
    var msg = {
      FunName: "GetVersionEx",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetID_1 = function (Path) {
    var msg = {
      FunName: "GetID_1",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetID_2 = function (Path) {
    var msg = {
      FunName: "GetID_2",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.sRead = function (Path) {
    var msg = {
      FunName: "sRead",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.sWrite = function (InData, Path) {
    var msg = {
      FunName: "sWrite",
      InData: InData,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.sWrite_2 = function (InData, Path) {
    var msg = {
      FunName: "sWrite_2",
      InData: InData,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.sWrite_2Ex = function (InData, Path) {
    var msg = {
      FunName: "sWrite_2Ex",
      InData: InData,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.sWriteEx = function (InData, Path) {
    var msg = {
      FunName: "sWriteEx",
      InData: InData,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.sWriteEx_New = function (InData, Path) {
    var msg = {
      FunName: "sWriteEx_New",
      InData: InData,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.sWrite_2Ex_New = function (InData, Path) {
    var msg = {
      FunName: "sWrite_2Ex_New",
      InData: InData,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SetBuf = function (InData, pos) {
    var msg = {
      FunName: "SetBuf",
      InData: InData,
      pos: pos
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetBuf = function (pos) {
    var msg = {
      FunName: "GetBuf",
      pos: pos
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.YRead = function (Address, len, HKey, LKey, Path) {
    var msg = {
      FunName: "YRead",
      Address: Address,
      len: len,
      HKey: HKey,
      LKey: LKey,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.YWrite = function (Address, len, HKey, LKey, Path) {
    var msg = {
      FunName: "YWrite",
      Address: Address,
      len: len,
      HKey: HKey,
      LKey: LKey,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.YReadString = function (Address, len, HKey, LKey, Path) {
    var msg = {
      FunName: "YReadString",
      Address: Address,
      len: len,
      HKey: HKey,
      LKey: LKey,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.YWriteString = function (InString, Address, HKey, LKey, Path) {
    var msg = {
      FunName: "YWriteString",
      InString: InString,
      Address: Address,
      HKey: HKey,
      LKey: LKey,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SetWritePassword = function (W_Hkey, W_Lkey, new_Hkey, new_Lkey, Path) {
    var msg = {
      FunName: "SetWritePassword",
      W_Hkey: W_Hkey,
      W_Lkey: W_Lkey,
      new_Hkey: new_Hkey,
      new_Lkey: new_Lkey,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SetReadPassword = function (W_Hkey, W_Lkey, new_Hkey, new_Lkey, Path) {
    var msg = {
      FunName: "SetReadPassword",
      W_Hkey: W_Hkey,
      W_Lkey: W_Lkey,
      new_Hkey: new_Hkey,
      new_Lkey: new_Lkey,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.DecString = function (InString, Key) {
    var msg = {
      FunName: "DecString",
      InString: InString,
      Key: Key
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.EncString = function (InString, Path) {
    var msg = {
      FunName: "EncString",
      InString: InString,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.EncString_New = function (InString, Path) {
    var msg = {
      FunName: "EncString_New",
      InString: InString,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.Cal = function (Path) {
    var msg = {
      FunName: "Cal",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.Cal_New = function (Path) {
    var msg = {
      FunName: "Cal_New",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SetCal_2 = function (Key, Path) {
    var msg = {
      FunName: "SetCal_2",
      Key: Key,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SetCal_New = function (Key, Path) {
    var msg = {
      FunName: "SetCal_New",
      Key: Key,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SetEncBuf = function (InData, pos) {
    var msg = {
      FunName: "SetEncBuf",
      InData: InData,
      pos: pos
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetEncBuf = function (pos) {
    var msg = {
      FunName: "GetEncBuf",
      pos: pos
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.ReSet = function (Path) {
    var msg = {
      FunName: "ReSet",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.MacAddr = function () {
    var msg = {
      FunName: "MacAddr"
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetChipID = function (Path) {
    var msg = {
      FunName: "GetChipID",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.StarGenKeyPair = function (Path) {
    var msg = {
      FunName: "StarGenKeyPair",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GenPubKeyY = function () {
    var msg = {
      FunName: "GenPubKeyY"
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GenPubKeyX = function () {
    var msg = {
      FunName: "GenPubKeyX"
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GenPriKey = function () {
    var msg = {
      FunName: "GenPriKey"
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetPubKeyY = function (Path) {
    var msg = {
      FunName: "GetPubKeyY",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetPubKeyX = function (Path) {
    var msg = {
      FunName: "GetPubKeyX",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.GetSm2UserName = function (Path) {
    var msg = {
      FunName: "GetSm2UserName",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.Set_SM2_KeyPair = function (PriKey, PubKeyX, PubKeyY, sm2UserName, Path) {
    var msg = {
      FunName: "Set_SM2_KeyPair",
      PriKey: PriKey,
      PubKeyX: PubKeyX,
      PubKeyY: PubKeyY,
      sm2UserName: sm2UserName,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.YtSign = function (SignMsg, Pin, Path) {
    var msg = {
      FunName: "YtSign",
      SignMsg: SignMsg,
      Pin: Pin,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.YtSign_2 = function (SignMsg, Pin, Path) {
    var msg = {
      FunName: "YtSign_2",
      SignMsg: SignMsg,
      Pin: Pin,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.YtVerfiy = function (id, SignMsg, PubKeyX, PubKeyY, VerfiySign, Path) {
    var msg = {
      FunName: "YtVerfiy",
      id: id,
      SignMsg: SignMsg,
      PubKeyX: PubKeyX,
      PubKeyY: PubKeyY,
      VerfiySign: VerfiySign,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SM2_DecString = function (InString, Pin, Path) {
    var msg = {
      FunName: "SM2_DecString",
      InString: InString,
      Pin: Pin,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SM2_EncString = function (InString, Path) {
    var msg = {
      FunName: "SM2_EncString",
      InString: InString,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.YtSetPin = function (OldPin, NewPin, Path) {
    var msg = {
      FunName: "YtSetPin",
      OldPin: OldPin,
      NewPin: NewPin,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.FindU = function (start) {
    var msg = {
      FunName: "FindU",
      start: start
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.FindU_2 = function (start, in_data, verf_data) {
    var msg = {
      FunName: "FindU_2",
      start: start,
      in_data: in_data,
      verf_data: verf_data
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.FindU_3 = function (start, in_data, verf_data) {
    var msg = {
      FunName: "FindU_3",
      start: start,
      in_data: in_data,
      verf_data: verf_data
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.IsUReadOnly = function (Path) {
    var msg = {
      FunName: "IsUReadOnly",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SetUReadOnly = function (Path) {
    var msg = {
      FunName: "SetUReadOnly",
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.SetHidOnly = function (IsHidOnly, Path) {
    var msg = {
      FunName: "SetHidOnly",
      IsHidOnly: IsHidOnly,
      Path: Path
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.ResetOrder = function () {
    var msg = {
      FunName: "ResetOrder"
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };

  this.ContinueOrder = function () {
    var msg = {
      FunName: "ContinueOrder"
    };
    this.Socket_UK.send(JSON.stringify(msg));
  };
};

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取Ukey读取密码
 * @param {json} data
 *  @param {string} data.user_account            用户账号
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.pay.GetUKPwd',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getUkeyPwd(_x) {
    return _ref.apply(this, arguments);
  }

  return getUkeyPwd;
})());

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_pay__ = __webpack_require__(643);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      detailOrder: {
        uuid: '',
        out_order_num: '',
        request_id: '',
        system_flag: '',
        order_pay_type: '',
        pay_main_body: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        collect_city: '',
        collect_city_name: '',
        collect_bank_link_code: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        is_financing: '',
        financing_dict_key: '',
        financing_dict_value: '',
        bs_background: '',
        order_create_people: '',
        require_pay_datetime: '',
        special_require: '',
        contact_annex: '',
        order_status: '',
        pay_status: '',
        create_time: '',
        update_time: '',
        plus_require: '',
        node_list: []
      },
      fileList: []
    };
  },
  created: function created() {
    var _this = this;

    // 获取组件传参或路由传参，组件传参优先
    var order_uuid = this.uuid || this.$route.params.uuid;
    if (!order_uuid) {
      this.$message.error('链接错误，请输入正确链接');
    } else {
      this.detailOrder.uuid = order_uuid;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["a" /* getPayOrderDetail */])({
        uuid: order_uuid
      }).then(function (res) {
        Object.assign(_this.detailOrder, res.data);

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
      if (this.detailOrder.out_order_num && this.detailOrder.system_flag == 'oa') {
        this.detailOrder.request_id = this.detailOrder.out_order_num.split('_')[0];
      }

      // 金额格式化
      this.detailOrder.formatAmount = this.filterCent2YuanCurrencyAmount([this.detailOrder.amount, this.detailOrder.currency]);

      // 币种格式化
      this.detailOrder.currencyStr = this.mformatCurrencyStr(this.detailOrder.currency);

      // 操作日志格式化
      if (this.detailOrder.node_list) {
        this.detailOrder.node_list = this.detailOrder.node_list.filter(function (item) {
          return item.node_status != '1';
        });
      } else {
        this.detailOrder.node_list = [];
      }

      // 要求付款日清除错误格式
      if (this.detailOrder.require_pay_datetime == '0000-00-00') {
        this.detailOrder.require_pay_datetime = '';
      }

      // 附件参数格式化
      if (this.detailOrder.contact_annex) {
        try {
          this.detailOrder.contact_annex = JSON.parse(this.detailOrder.contact_annex);
          for (var i = 0; i < this.detailOrder.contact_annex.length; i++) {
            this.fileList.push({
              name: this.detailOrder.contact_annex[i].name,
              url: this.detailOrder.contact_annex[i].url
            });
          }
        } catch (e) {}
      }
    }
  }
});

/***/ }),

/***/ 655:
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
  }, [_c('span', [_vm._v("付款指令详情")])]), _vm._v(" "), _c('el-form', {
    ref: "detailOrder",
    attrs: {
      "model": _vm.detailOrder,
      "label-width": "120px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令编号",
      "prop": "order_num"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.order_num)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "系统来源",
      "prop": "system_flag"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.system_flag)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [(_vm.detailOrder.system_flag != 'oa') ? _c('el-form-item', {
    attrs: {
      "label": "外部指令号",
      "prop": "out_order_num"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.out_order_num)
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
      "href": 'http://oa.jyblife.com/workflow/request/ViewRequest.jsp?requestid=' + _vm.detailOrder.request_id + '&ismonitor=1',
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.detailOrder.out_order_num))])])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "付款类别",
      "prop": "order_pay_type"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.order_pay_type)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "付款方",
      "prop": "pay_main_body"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.pay_main_body)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款方",
      "prop": "collect_main_body"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.collect_main_body)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "付款方银行名称",
      "prop": "pay_bank_name"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.pay_bank_name ? _vm.detailOrder.pay_bank_name : '无')
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款方银行名称",
      "prop": "collect_bank_name"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.collect_bank_name ? _vm.detailOrder.collect_bank_name : '无')
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "付款方银行账号",
      "prop": "pay_bank_account"
    }
  }, [_c('div', {
    staticClass: "sub-text"
  }, [_vm._v("\n              " + _vm._s(_vm.detailOrder.pay_bank_account ? _vm.filterBankAccount(_vm.detailOrder.pay_bank_account) : '无') + "\n            ")])]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款方银行账号",
      "prop": "collect_bank_account"
    }
  }, [_c('div', {
    staticClass: "sub-text"
  }, [_vm._v("\n              " + _vm._s(_vm.detailOrder.collect_bank_account ? _vm.filterBankAccount(_vm.detailOrder.collect_bank_account) : '无') + "\n            ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "币种",
      "prop": "currency"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.currencyStr)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款行行号"
    }
  }, [_c('div', {
    staticClass: "sub-text"
  }, [_vm._v(_vm._s(_vm.detailOrder.collect_bank_link_code ? _vm.detailOrder.collect_bank_link_code : '-'))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "付款金额",
      "prop": "amount"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.formatAmount)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款行省市",
      "prop": "collect_city_name"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.collect_city_name)
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "业务背景",
      "prop": "bs_background"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.bs_background ? _vm.detailOrder.bs_background : '无')
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令发起人",
      "prop": "order_create_people"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.order_create_people)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "要求付款日",
      "prop": "require_pay_datetime"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.require_pay_datetime ? _vm.detailOrder.require_pay_datetime : '无')
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "附件",
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
      "label": "指令状态"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.orderStatusJson[_vm.detailOrder.order_status])
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "付款状态"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.payStatusJson[_vm.detailOrder.pay_status])
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line last-form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令到达时间",
      "prop": "create_time"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.create_time)
    }
  })]), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "指令更新时间",
      "prop": "update_time"
    }
  }, [_c('div', {
    staticClass: "sub-text",
    domProps: {
      "textContent": _vm._s(_vm.detailOrder.update_time)
    }
  })])], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(!_vm.uuid) ? _c('tp-historyback', {
    staticStyle: {
      "width": "100px"
    },
    attrs: {
      "name": "payOrderList",
      "type": "primary",
      "size": "medium"
    }
  }) : _vm._e()], 1), _vm._v(" "), _c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("操作日志")])]), _vm._v(" "), _c('div', [(_vm.detailOrder.node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.detailOrder.node_list
    }
  }, [_c('el-table-column', {
    attrs: {
      "label": "操作人"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n                  " + _vm._s(scope.row.optor_name ? scope.row.optor_name : (scope.$index == 0 && _vm.detailOrder.order_create_people ? _vm.detailOrder.order_create_people : '-')) + "\n                ")]
      }
    }])
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
     require("vue-hot-reload-api").rerender("data-v-2dd358c6", module.exports)
  }
}

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_pay__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Syunew6__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Syunew6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_Syunew6__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_ukey__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_detail_vue__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__order_detail_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    OrderDetail: __WEBPACK_IMPORTED_MODULE_3__order_detail_vue___default.a
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
    return {
      isUkeyConnected: false,
      activeName: 'first',
      loading: false,
      reviewTransfer: {
        uuid: '',
        system_flag: '',
        transfer_num: '',
        transfer_pay_type: '',
        pay_main_body: '',
        pay_bank_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        collect_main_body: '',
        collect_bank_name: '',
        collect_bank_account: '',
        collect_city: '',
        collect_city_name: '',
        collect_bank_link_code: '',
        real_pay_type: '',
        jmgPassWord: '',
        currency: '',
        currencyStr: '',
        amount: '',
        formatAmount: '',
        bs_background: '',
        order_create_people: '',
        require_pay_datetime: '',
        transfer_status: '',
        pay_status: '',
        create_time: '',
        update_time: '',
        review_comments: '',
        contact_annex: '',
        node_list: []
      },
      rules: {
        jmgPassWord: [{
          required: true,
          message: '请输入加密狗密码',
          trigger: 'blur'
        }],
        review_comments: [{
          validator: checkComments,
          trigger: 'blur'
        }]
      },
      payTransferStatusJson: {
        0: '待资金专员审核',
        1: '待权签人审核',
        2: '权签人审核通过',
        3: '资金专员驳回',
        4: '权签人拒绝',
        19: '待上传回单',
        20: '已完结'
      },
      password1: '',
      password2: '',
      fileList: [],
      changeKeysList: []
    };
  },
  created: function created() {
    var _this2 = this;

    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'payTransferList'
      });
    } else {
      this.reviewTransfer.uuid = this.$route.params.uuid;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["c" /* getPayTransferDetail */])({
        uuid: this.$route.params.uuid
      }).then(function (res) {
        Object.assign(_this2.reviewTransfer, res.data);

        Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["a" /* getPayOrderDetail */])({
          uuid: _this2.reviewTransfer.pay_order_uuid
        }).then(function (res) {
          var detailOrderData = res.data;

          if (detailOrderData.pay_account_uuid != _this2.reviewTransfer.pay_account_uuid) {
            _this2.changeKeysList.push('pay_account_uuid');
          }

          if (detailOrderData.collect_account_uuid != _this2.reviewTransfer.collect_account_uuid) {
            _this2.changeKeysList.push('collect_account_uuid');
          }

          if (detailOrderData.collect_city_name != _this2.reviewTransfer.collect_city_name) {
            _this2.changeKeysList.push('collect_city_name');
          }

          if ((detailOrderData.collect_bank_link_code || _this2.reviewTransfer.collect_bank_link_code) && detailOrderData.collect_bank_link_code != _this2.reviewTransfer.collect_bank_link_code) {
            _this2.changeKeysList.push('collect_bank_link_code');
          }

          if (detailOrderData.real_pay_type != _this2.reviewTransfer.real_pay_type) {
            _this2.changeKeysList.push('real_pay_type');
          }

          if (detailOrderData.require_pay_datetime != _this2.reviewTransfer.require_pay_datetime) {
            _this2.changeKeysList.push('require_pay_datetime');
          }
        }).catch(function () {});

        if (_this2.reviewTransfer.real_pay_type == '2') {
          _this2.initUkey();
        }

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
      this.reviewTransfer.pay_bank_account_str = this.filterBankAccount(this.reviewTransfer.pay_bank_account);
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

      if (this.reviewTransfer.real_pay_type == '0') {
        this.reviewTransfer.real_pay_type = '';
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
    },


    // 复核通过
    resolveTransfer: function resolveTransfer(formName) {
      var _this3 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this3.mconfirm(_this3.reviewTransfer.real_pay_type == '2' && _this3.reviewTransfer.pay_status == '3' ? '确定要重新发起付款吗?' : '确定要通过付款调拨复核吗?').then(function () {
            _this3.mshowLoading(_this3.reviewTransfer.real_pay_type == '2' && _this3.reviewTransfer.pay_status == '3' ? '正在重新发起付款...' : '正在通过付款调拨复核...');

            if (_this3.reviewTransfer.real_pay_type == 2) {
              if (!_this3.$store.getters.username) {
                _this3.mhideLoading();
                _this3.loading = false;
                _this3.$message.warning(_this3.reviewTransfer.real_pay_type == '2' && _this3.reviewTransfer.pay_status == '3' ? '重新发起付款失败!' : '通过付款调拨复核失败！');

                return;
              }

              Object(__WEBPACK_IMPORTED_MODULE_2__api_ukey__["a" /* default */])({
                user_account: _this3.$store.getters.username
              }).then(function (res) {
                if (JSON.stringify(res.data) == '[]' || !res.data.readPwd_1 || !res.data.readPwd_2) {
                  _this3.$message.warning('用户未申请加密狗，请申请或更换用户后重试');
                  _this3.mhideLoading();
                  _this3.loading = false;
                  return;
                }

                var ukPwd1 = res.data.readPwd_1;
                var ukPwd2 = res.data.readPwd_2;

                _this3.readCheckPwd(ukPwd1, ukPwd2);
              }).catch(function () {
                _this3.mhideLoading();
                _this3.loading = false;
              });
            } else {
              // 获取付款调拨审核参数
              var params = {
                instance_id: _this3.reviewTransfer.uuid,
                main_body_uuid: _this3.reviewTransfer.pay_main_body_uuid,
                info: _this3.reviewTransfer.review_comments,
                params: {
                  real_pay_type: _this3.reviewTransfer.real_pay_type
                }
              };

              Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["j" /* payTransferFlowResolve */])(params).then(function () {
                _this3.loading = false;
                _this3.mhideLoading();
                _this3.$message.success('通过付款调拨复核成功');
                _this3.$router.replace({
                  name: 'payTransferList'
                });
              }).catch(function () {
                _this3.loading = false;
                _this3.mhideLoading();
              });
            }
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
    resolveYQTransfer: function resolveYQTransfer() {
      var _this4 = this;

      // 获取付款调拨审核参数
      var params = {
        instance_id: this.reviewTransfer.uuid,
        main_body_uuid: this.reviewTransfer.pay_main_body_uuid,
        info: this.reviewTransfer.review_comments,
        params: {
          real_pay_type: this.reviewTransfer.real_pay_type,
          jmgUserName: this.$store.getters.username,
          jmgPassWord: this.reviewTransfer.jmgPassWord
        }
      };

      Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["j" /* payTransferFlowResolve */])(params).then(function () {
        _this4.loading = false;
        _this4.mhideLoading();
        if (_this4.reviewTransfer.real_pay_type == '2' && _this4.reviewTransfer.pay_status == '3') {
          _this4.$message.success('重新发起付款成功');
        } else {
          _this4.$message.success('通过付款调拨复核成功');
        }
        _this4.$router.replace({
          name: 'payTransferList'
        });
      }).catch(function () {
        _this4.loading = false;
        _this4.mhideLoading();
      });
    },
    retryYQTransfer: function retryYQTransfer() {
      var _this5 = this;

      // 获取付款调拨审核参数
      var params = {
        uuid: this.reviewTransfer.uuid,
        ukPwd: this.reviewTransfer.jmgPassWord
      };

      Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["m" /* payTransferRetry */])(params).then(function () {
        _this5.loading = false;
        _this5.mhideLoading();
        _this5.$message.success('重新发起付款成功');
        _this5.$router.replace({
          name: 'payTransferList'
        });
      }).catch(function () {
        _this5.loading = false;
        _this5.mhideLoading();
      });
    },

    // 驳回调拨复核
    rejectTransfer: function rejectTransfer(formName) {
      var _this6 = this;

      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (this.reviewTransfer.review_comments && this.reviewTransfer.review_comments.length <= 100) {
        this.isReject = false;

        this.mconfirm('确定要驳回付款调拨吗?').then(function () {
          _this6.mshowLoading('正在驳回付款调拨...');

          // 获取付款调拨驳回参数
          var params = {
            instance_id: _this6.reviewTransfer.uuid,
            main_body_uuid: _this6.reviewTransfer.pay_main_body_uuid,
            info: _this6.reviewTransfer.review_comments,
            params: {
              real_pay_type: _this6.reviewTransfer.real_pay_type,
              pay_account_uuid: _this6.reviewTransfer.pay_account_uuid,
              collect_account_uuid: _this6.reviewTransfer.collect_account_uuid
            }
          };

          Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["i" /* payTransferFlowReject */])(params).then(function () {
            _this6.loading = false;
            _this6.mhideLoading();
            _this6.$message.success('付款调拨驳回成功');
            _this6.$router.replace({
              name: 'payTransferList'
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

    // 拒绝调拨复核
    stopTransfer: function stopTransfer(formName) {
      var _this7 = this;

      if (this.loading) return false;
      this.loading = true;
      this.isStop = true;

      this.$refs[formName].validateField('review_comments');

      if (this.reviewTransfer.review_comments && this.reviewTransfer.review_comments.length <= 100) {
        this.isStop = false;

        this.mconfirm('确定要拒绝付款调拨吗?').then(function () {
          _this7.mshowLoading('正在拒绝付款调拨...');

          // 获取付款调拨拒绝参数

          var params = {
            instance_id: _this7.reviewTransfer.uuid,
            main_body_uuid: _this7.reviewTransfer.pay_main_body_uuid,
            info: _this7.reviewTransfer.review_comments,
            params: {
              real_pay_type: _this7.reviewTransfer.real_pay_type,
              pay_account_uuid: _this7.reviewTransfer.pay_account_uuid,
              collect_account_uuid: _this7.reviewTransfer.collect_account_uuid
            }
          };

          Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["l" /* payTransferFlowStop */])(params).then(function () {
            _this7.loading = false;
            _this7.mhideLoading();
            _this7.$message.success('付款调拨拒绝成功');
            _this7.$router.replace({
              name: 'payTransferList'
            });
          }).catch(function () {
            _this7.loading = false;
            _this7.mhideLoading();
          });
        }).catch(function () {
          _this7.loading = false;
        });
      } else {
        this.loading = false;
        this.isStop = false;
        this.$message.warning('请完善数据填写后重试');
        return false;
      }
    },


    // 银企操作
    initUkey: function initUkey() {
      var _this8 = this;

      //如果是IE10及以下浏览器，则跳过不处理，
      if (navigator.userAgent.indexOf('MSIE') > 0 && !navigator.userAgent.indexOf('opera') > -1) return;
      try {
        var s_pnp = new SoftKey6W();
        s_pnp.Socket_UK.onopen = function () {
          _this8.isUkeyConnected = true; //代表已经连接，用于判断是否安装了客户端服务
        };

        //在使用事件插拨时，注意，一定不要关掉Sockey，否则无法监测事件插拨
        s_pnp.Socket_UK.onmessage = function (Msg) {
          var PnpData = JSON.parse(Msg.data);
          if (PnpData.type == 'PnpEvent') {
            //如果是插拨事件处理消息
            if (PnpData.IsIn) {
              _this8.$message.info('加密狗已被插入');
            } else {
              _this8.$message.info('加密狗已被拔出');
            }
          }
        };

        s_pnp.Socket_UK.onclose = function () {};
      } catch (e) {
        return false;
      }
    },
    readCheckPwd: function readCheckPwd(password1, password2) {
      var _this9 = this;

      //如果是IE10及以下浏览器，则使用AVCTIVEX控件的方式
      if (navigator.userAgent.indexOf('MSIE') > 0 && !navigator.userAgent.indexOf('opera') > -1) return this.Handle_IE10_ReadCheckPwd(password1, password2);

      //判断是否安装了服务程序，如果没有安装提示用户安装
      if (!this.isUkeyConnected) {
        this.mhideLoading();
        this.loading = false;
        this.$message.warning('未找到加密狗驱动，请安装驱动后重试');
        return false;
      }

      var DevicePath = void 0,
          ret = void 0,
          n = void 0,
          mylen = void 0,
          ID_1 = void 0,
          ID_2 = void 0,
          addr = void 0;
      try {
        var s_simnew1 = new SoftKey6W(); //创建UK类

        s_simnew1.Socket_UK.onopen = function () {
          s_simnew1.ResetOrder(); //这里调用ResetOrder将计数清零，这样，消息处理处就会收到0序号的消息，通过计数及序号的方式，从而生产流程
        };

        //写代码时一定要注意，每调用我们的一个UKEY函数，就会生产一个计数，即增加一个序号，较好的逻辑是一个序号的消息处理中，只调用我们一个UKEY的函数
        s_simnew1.Socket_UK.onmessage = function (Msg) {
          var UK_Data = JSON.parse(Msg.data);
          //alert(Msg.data);
          if (UK_Data.type != 'Process') return; //如果不是流程处理消息，则跳过
          switch (UK_Data.order) {
            case 0:
              {
                s_simnew1.FindPort(0); //发送命令取UK的路径
              }
              break;
            case 1:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('未发现加密狗，请插入后重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                DevicePath = UK_Data.return_value; //获得返回的UK的路径
                s_simnew1.GetID_1(DevicePath); //发送命令取ID_1
              }
              break;
            case 2:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                ID_1 = UK_Data.return_value; //获得返回的UK的ID_1
                s_simnew1.GetID_2(DevicePath); //发送命令取ID_2
              }
              break;
            case 3:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                ID_2 = UK_Data.return_value; //获得返回的UK的ID_2

                s_simnew1.ContinueOrder();
              }
              break;
            case 4:
              {
                //获取设置在锁中的用户名
                //先从地址0读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 0;
                s_simnew1.YRead(addr, 1, password1, password2, DevicePath); //发送命令取UK地址0的数据
              }
              break;
            case 5:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                s_simnew1.GetBuf(0); //发送命令从数据缓冲区中数据
              }
              break;
            case 6:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                mylen = UK_Data.return_value; //获得返回的数据缓冲区中数据

                //再从地址1读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 1;
                s_simnew1.YReadString(addr, mylen, password1, password2, DevicePath); //发送命令从UK地址1中取字符串
              }
              break;
            case 7:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }

                if (UK_Data.return_value !== _this9.$store.getters.username) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('当前用户名和加密狗用户名不一致，请确认');
                  return false;
                }

                //获到设置在锁中的用户密码,
                //先从地址20读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 20;
                s_simnew1.YRead(addr, 1, password1, password2, DevicePath); //发送命令取UK地址20的数据
              }
              break;
            case 8:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                s_simnew1.GetBuf(0); //发送命令从数据缓冲区中数据
              }
              break;
            case 9:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                mylen = UK_Data.return_value; //获得返回的数据缓冲区中数据

                //再从地址21读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
                addr = 21;
                s_simnew1.YReadString(addr, mylen, password1, password2, DevicePath); //发送命令从UK地址21中取字符串
              }
              break;
            case 10:
              {
                if (UK_Data.LastError != 0) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }

                if (_this9.reviewTransfer.jmgPassWord != UK_Data.return_value) {
                  _this9.mhideLoading();
                  _this9.loading = false;
                  _this9.$message.warning('加密狗密码错误！');

                  return;
                } else {
                  // if (
                  //   this.reviewTransfer.real_pay_type == '2' &&
                  //   this.reviewTransfer.pay_status == '3'
                  // ) {
                  //   this.retryYQTransfer();
                  // } else {
                  //   this.resolveYQTransfer();
                  // }
                  _this9.resolveYQTransfer();
                }

                //所有工作处理完成后，关掉Socket
                s_simnew1.Socket_UK.close();
              }
              break;
          }
        };

        s_simnew1.Socket_UK.onclose = function () {};
        return true;
      } catch (e) {
        this.mhideLoading();
        this.loading = false;
        return false;
      }
    },
    Handle_IE10_ReadCheckPwd: function Handle_IE10_ReadCheckPwd(password1, password2) {
      var DevicePath, ret, n, mylen;
      try {
        //建立操作我们的锁的控件对象，用于操作我们的锁
        var s_simnew1;
        //创建控件

        s_simnew1 = new ActiveXObject('Syunew6A.s_simnew6');

        //查找是否存在锁,这里使用了FindPort函数
        DevicePath = s_simnew1.FindPort(0);
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('未发现加密狗，请插入后重试');
          return false;
        }

        //'读取锁的ID
        var id = this.toHex(s_simnew1.GetID_1(DevicePath)) + this.toHex(s_simnew1.GetID_2(DevicePath));
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        //获取设置在锁中的用户名
        //先从地址0读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        ret = s_simnew1.YRead(0, 1, password1, password2, DevicePath);
        mylen = s_simnew1.GetBuf(0);
        //再从地址1读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        var username = s_simnew1.YReadString(1, mylen, password1, password2, DevicePath);
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        if (username !== this.$store.getters.username) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('当前用户名和加密狗用户名不一致，请确认');
          return false;
        }

        //获到设置在锁中的用户密码,
        //先从地址20读取字符串的长度,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        ret = s_simnew1.YRead(20, 1, password1, password2, DevicePath);
        mylen = s_simnew1.GetBuf(0);
        //再从地址21读取相应的长度的字符串，,使用默认的读密码"FFFFFFFF","FFFFFFFF"
        var password = s_simnew1.YReadString(21, mylen, password1, password2, DevicePath);
        if (s_simnew1.LastError != 0) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('查询加密狗失败，请重试');
          return false;
        }

        if (this.reviewTransfer.jmgPassWord != password) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('加密狗密码错误！');

          return;
        } else {
          // if (
          //   this.reviewTransfer.real_pay_type == '2' &&
          //   this.reviewTransfer.pay_status == '3'
          // ) {
          //   this.retryYQTransfer();
          // } else {
          //   this.resolveYQTransfer();
          // }
          this.resolveYQTransfer();
        }

        return true;
      } catch (e) {
        this.mhideLoading();
        this.loading = false;
        this.$message.warning('加密狗查询失败，请确认是否正确安装驱动');
      }
    },
    toHex: function toHex(n) {
      var result = '';
      var start = true;
      var digitArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

      for (var i = 32; i > 0;) {
        i -= 4;
        var digit = n >> i & 0xf;

        if (!start || digit != 0) {
          start = false;
          result += digitArray[digit];
        }
      }

      return result === '' ? '0' : result;
    }
  }
});

/***/ }),

/***/ 682:
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
      "label": "调拨复核",
      "name": "first"
    }
  }, [_c('el-card', [_c('div', {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("付款调拨复核")])]), _vm._v(" "), _c('el-form', {
    ref: "reviewTransfer",
    attrs: {
      "model": _vm.reviewTransfer,
      "rules": _vm.rules,
      "label-width": "140px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    staticClass: "el-form-item-width-half",
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
  })], 1), _vm._v(" "), _c('div', {
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
      "label": "付款类别",
      "prop": "transfer_pay_type"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.transfer_pay_type),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "transfer_pay_type", $$v)
      },
      expression: "reviewTransfer.transfer_pay_type"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "付款方",
      "prop": "pay_main_body"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.pay_main_body),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "pay_main_body", $$v)
      },
      expression: "reviewTransfer.pay_main_body"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "收款方",
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
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('pay_account_uuid') != -1
    },
    attrs: {
      "label": "付款方银行名称",
      "prop": "pay_bank_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.pay_bank_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "pay_bank_name", $$v)
      },
      expression: "reviewTransfer.pay_bank_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('collect_account_uuid') != -1
    },
    attrs: {
      "label": "收款方银行名称",
      "prop": "collect_bank_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.collect_bank_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "collect_bank_name", $$v)
      },
      expression: "reviewTransfer.collect_bank_name"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('pay_account_uuid') != -1
    },
    attrs: {
      "label": "付款方银行账号",
      "prop": "pay_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.pay_bank_account_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "pay_bank_account_str", $$v)
      },
      expression: "reviewTransfer.pay_bank_account_str"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('collect_account_uuid') != -1
    },
    attrs: {
      "label": "收款方银行账号",
      "prop": "collect_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.collect_bank_account_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "collect_bank_account_str", $$v)
      },
      expression: "reviewTransfer.collect_bank_account_str"
    }
  })], 1)], 1), _vm._v(" "), (_vm.reviewTransfer.real_pay_type == 2) ? _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('real_pay_type') != -1
    },
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.realPayTypeJson[_vm.reviewTransfer.real_pay_type]),
      callback: function($$v) {
        _vm.$set(_vm.realPayTypeJson, _vm.reviewTransfer.real_pay_type, $$v)
      },
      expression: "realPayTypeJson[reviewTransfer.real_pay_type]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "加密狗密码",
      "prop": "jmgPassWord"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "password",
      "placeholder": "请输入加密狗密码"
    },
    model: {
      value: (_vm.reviewTransfer.jmgPassWord),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "jmgPassWord", $$v)
      },
      expression: "reviewTransfer.jmgPassWord"
    }
  })], 1)], 1) : _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('real_pay_type') != -1
    },
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.realPayTypeJson[_vm.reviewTransfer.real_pay_type]),
      callback: function($$v) {
        _vm.$set(_vm.realPayTypeJson, _vm.reviewTransfer.real_pay_type, $$v)
      },
      expression: "realPayTypeJson[reviewTransfer.real_pay_type]"
    }
  })], 1), _vm._v(" "), (_vm.reviewTransfer.real_pay_type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "付款备注",
      "prop": "pay_remark"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.pay_remark),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "pay_remark", $$v)
      },
      expression: "reviewTransfer.pay_remark"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "币种",
      "prop": "currency"
    }
  }, [(_vm.reviewTransfer.currency) ? _c('el-input', {
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
  }) : _c('el-input', {
    attrs: {
      "value": "无",
      "disabled": ""
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('collect_bank_link_code') != -1
    },
    attrs: {
      "label": "收款行行号"
    }
  }, [(_vm.reviewTransfer.collect_bank_link_code) ? _c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.collect_bank_link_code),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "collect_bank_link_code", $$v)
      },
      expression: "reviewTransfer.collect_bank_link_code"
    }
  }) : _c('el-input', {
    attrs: {
      "value": "无",
      "disabled": ""
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "付款金额",
      "prop": "amount"
    }
  }, [(_vm.reviewTransfer.amount) ? _c('el-input', {
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
  }) : _c('el-input', {
    attrs: {
      "value": "无",
      "disabled": ""
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('collect_city_name') != -1
    },
    attrs: {
      "label": "收款行省市",
      "prop": "collect_city_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.collect_city_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "collect_city_name", $$v)
      },
      expression: "reviewTransfer.collect_city_name"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
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
  }) : _c('el-input', {
    attrs: {
      "value": "无",
      "disabled": ""
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "指令发起人",
      "prop": "order_create_people"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.order_create_people),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "order_create_people", $$v)
      },
      expression: "reviewTransfer.order_create_people"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    class: {
      'highlight-change-item': _vm.changeKeysList.indexOf('require_pay_datetime') != -1
    },
    attrs: {
      "label": "要求付款日",
      "prop": "require_pay_datetime"
    }
  }, [(_vm.reviewTransfer.require_pay_datetime) ? _c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewTransfer.require_pay_datetime),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "require_pay_datetime", $$v)
      },
      expression: "reviewTransfer.require_pay_datetime"
    }
  }) : _c('el-input', {
    attrs: {
      "value": "无",
      "disabled": ""
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "附件",
      "prop": "contact_annex"
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
  }) : _c('span', {
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
      value: (_vm.payTransferStatusJson[_vm.reviewTransfer.transfer_status]),
      callback: function($$v) {
        _vm.$set(_vm.payTransferStatusJson, _vm.reviewTransfer.transfer_status, $$v)
      },
      expression: "payTransferStatusJson[reviewTransfer.transfer_status]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "付款状态"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.payStatusJson[_vm.reviewTransfer.pay_status]),
      callback: function($$v) {
        _vm.$set(_vm.payStatusJson, _vm.reviewTransfer.pay_status, $$v)
      },
      expression: "payStatusJson[reviewTransfer.pay_status]"
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
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "处理意见",
      "prop": "review_comments"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入处理意见"
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
  }, [(_vm.reviewTransfer.transfer_status == '1' || (_vm.reviewTransfer.transfer_status == '2' && _vm.reviewTransfer.real_pay_type == '2' && _vm.reviewTransfer.pay_status == '3')) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.resolveTransfer('reviewTransfer')
      }
    }
  }, [_vm._v(_vm._s(_vm.reviewTransfer.transfer_status == '2' && _vm.reviewTransfer.real_pay_type == '2' && _vm.reviewTransfer.pay_status == '3' ? "重试" : "通过"))]) : _vm._e(), _vm._v(" "), (_vm.reviewTransfer.transfer_status == '1' || (_vm.reviewTransfer.transfer_status == '2' && _vm.reviewTransfer.real_pay_type == '2' && _vm.reviewTransfer.pay_status == '3')) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "warning"
    },
    on: {
      "click": function($event) {
        _vm.rejectTransfer('reviewTransfer')
      }
    }
  }, [_vm._v("驳回")]) : _vm._e(), _vm._v(" "), (_vm.reviewTransfer.transfer_status == '1' || (_vm.reviewTransfer.transfer_status == '2' && _vm.reviewTransfer.real_pay_type == '2' && _vm.reviewTransfer.pay_status == '3')) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "danger"
    },
    on: {
      "click": function($event) {
        _vm.stopTransfer('reviewTransfer')
      }
    }
  }, [_vm._v("拒绝")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "payTransferList",
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
      "label": "原指令详情",
      "name": "second"
    }
  }, [(_vm.reviewTransfer.pay_order_uuid) ? _c('order-detail', {
    attrs: {
      "uuid": _vm.reviewTransfer.pay_order_uuid
    }
  }) : _c('span', [_vm._v("获取原指令详情失败")])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1b39528c", module.exports)
  }
}

/***/ })

});