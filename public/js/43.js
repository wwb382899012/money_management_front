webpackJsonp([43],{

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(685),
  /* template */
  __webpack_require__(686),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\pay\\transfer\\receipt.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] receipt.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e27270b0", Component.options)
  } else {
    hotAPI.reload("data-v-e27270b0", Component.options)
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

/***/ 685:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        node_list: [],
        bank_water: '',
        bank_img_file_uuid: ''
      },
      rules: {
        bank_img_file_uuid: [{
          required: true,
          message: '请上传银行回单截图',
          trigger: 'change'
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
      fileList: [],
      receiptFileList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      timestamp: Date.now()
    };
  },
  created: function created() {
    var _this = this;

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
        Object.assign(_this.reviewTransfer, res.data);

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


    // 提交回单
    resolveTransfer: function resolveTransfer(formName) {
      var _this2 = this;

      if (this.loading) return false;
      this.loading = true;
      this.updateReceiptUuid();
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this2.mconfirm('确定要提交银行流水回单吗?').then(function () {
            _this2.mshowLoading('正在提交银行流水回单...');

            // 获取付款调拨审核参数
            var params = {
              instance_id: _this2.reviewTransfer.uuid,
              main_body_uuid: _this2.reviewTransfer.pay_main_body_uuid,
              info: _this2.reviewTransfer.review_comments,
              params: {
                real_pay_type: _this2.reviewTransfer.real_pay_type,
                bank_water: _this2.reviewTransfer.bank_water,
                bank_img_file_uuid: _this2.reviewTransfer.bank_img_file_uuid
              }
            };

            Object(__WEBPACK_IMPORTED_MODULE_0__api_pay__["j" /* payTransferFlowResolve */])(params).then(function () {
              _this2.loading = false;
              _this2.mhideLoading();
              _this2.$message.success('提交银行流水回单成功');
              _this2.$router.replace({
                name: 'payTransferList'
              });
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
      this.reviewTransfer.bank_img_file_uuid = uuids;
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

/***/ 686:
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
  }, [_c('span', [_vm._v("付款调拨上传流水")])]), _vm._v(" "), _c('el-form', {
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
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
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
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
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
    attrs: {
      "label": "收款行省市"
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
      value: (_vm.reviewTransfer.bank_water),
      callback: function($$v) {
        _vm.$set(_vm.reviewTransfer, "bank_water", $$v)
      },
      expression: "reviewTransfer.bank_water"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    class: {
      'limit-file-upload': _vm.receiptFileList >= 3
    },
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
  }, [_vm._v("查看原图")])], 1)]) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.reviewTransfer.transfer_status == '19' || _vm.reviewTransfer.need_ticket_back == '1') ? _c('el-button', {
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
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
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
        return [_vm._v("\n                  " + _vm._s(_vm.nodeStatusJson[scope.row.node_status] + (scope.row.deal_remark ? scope.row.deal_remark : '无')) + "\n                ")]
      }
    }])
  })], 1) : _vm._e()], 1)])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e27270b0", module.exports)
  }
}

/***/ })

});