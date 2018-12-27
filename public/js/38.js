webpackJsonp([38],{

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(687),
  /* template */
  __webpack_require__(688),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\loan\\order\\list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-575957c1", Component.options)
  } else {
    hotAPI.reload("data-v-575957c1", Component.options)
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

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_loan__ = __webpack_require__(635);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      searchForm: {
        order_create_people: '',
        order_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        loan_main_body_uuid: '',
        collect_main_body_uuid: '',
        order_num: '',
        out_order_num: ''
      },
      orderList: [],
      collectMainBodyList: [],
      collectMainBodyLoading: false,
      loanMainBodyList: [],
      loanMainBodyLoading: false,
      exportFilename: 'export_loan_order_list_'
    };
  },
  created: function created() {
    this.getLoanOrderListData();
  },

  methods: {
    // 表格数据
    getLoanOrderListData: function getLoanOrderListData(mshowLoading) {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;

      // 判断是否需要全局loading
      mshowLoading && this.mshowLoading('正在搜索借款指令列表...');

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

      Object(__WEBPACK_IMPORTED_MODULE_0__api_loan__["b" /* getLoanOrderList */])(params).then(function (res) {
        _this.orderList = res.data.data;
        _this.pageSetting.page = parseInt(res.data.page);
        _this.pageSetting.count = parseInt(res.data.count);

        _this.loading = false;
        _this.mhideLoading();
      }).catch(function () {
        _this.loading = false;
        _this.mhideLoading();
      });
    },


    // 表格操作
    triggerDetail: function triggerDetail(uuid) {
      this.$router.push({
        name: 'loanOrderDetail',
        params: {
          uuid: uuid
        }
      });
    },
    triggerReview: function triggerReview(uuid) {
      this.$router.push({
        name: 'loanOrderReview',
        params: {
          uuid: uuid
        }
      });
    },


    // 表格分页
    handleSizeChange: function handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getLoanOrderListData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getLoanOrderListData();
    },


    // 搜索框

    // 搜索操作
    submitSearch: function submitSearch() {
      if (this.loading) return false;
      this.pageSetting.page = 1;
      this.getLoanOrderListData(true);
    },
    handleReset: function handleReset() {
      Object.assign(this.searchForm, {
        order_create_people: '',
        order_status: '',
        apply_begin_time: '',
        apply_end_time: '',
        approve_begin_time: '',
        approve_end_time: '',
        loan_main_body_uuid: '',
        collect_main_body_uuid: '',
        order_num: '',
        out_order_num: ''
      });
      this.pageSetting.page = 1;
      this.getLoanOrderListData();
    },


    // 导出
    handleDownload: function handleDownload() {
      var _this2 = this;

      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;

      this.mconfirm('确定要导出当前搜索条件的借款指令列表数据吗?').then(function () {
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

      Object(__WEBPACK_IMPORTED_MODULE_0__api_loan__["b" /* getLoanOrderList */])(params).then(function (res) {
        _this3.exportData(res.data.data);
      }).catch(function () {
        _this3.exportLoading = false;
        _this3.mhideLoading();
      });
    },

    // 导出文件
    exportData: function exportData(list) {
      var _this4 = this;

      if (list.length) {
        var tHeader = ['借款编号', '外部指令号', '借款金额', '借款方', '贷款方', '指令状态', '借款状态', '系统来源', '指令发起人', '业务背景', '借款币种', '借款日期', '预计还款日', '利息率', '指令到达时间', '指令更新时间'];
        var filterList = ['order_num', 'out_order_num', 'amount', 'loan_main_body', 'collect_main_body', 'order_status', 'loan_status', 'system_flag', 'order_create_people', 'bs_background', 'currency', 'loan_datetime', 'forecast_datetime', 'rate', 'create_time', 'update_time'];
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

          if (key == 'bs_background') {
            return item[key] ? item[key] : '-';
          }

          if (key == 'currency') {
            return _this5.mformatCurrencyStr(item[key]);
          }
          if (key == 'amount') {
            return _this5.filterCent2YuanCurrencyAmount([item[key], item['currency']]);
          }
          if (key == 'rate') {
            return _this5.filterPercentage(item[key]);
          }
          if (key == 'order_status') {
            return _this5.orderStatusJson[item[key]];
          }
          if (key == 'loan_status') {
            return _this5.loanPayStatusJson[item[key]];
          }

          return item[key];
        });
      });

      return data;
    },


    // 搜索数据
    getCollectMainBodyListData: function getCollectMainBodyListData() {
      var _this6 = this;

      if (this.collectMainBodyLoading) {
        return false;
      }
      this.collectMainBodyLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_mainBody__["e" /* getMainBodyList */])({
        page: 1,
        limit: -1,
        is_internal: 1
      }).then(function (res) {
        _this6.collectMainBodyList = res.data.data;
        _this6.collectMainBodyLoading = false;
      }).catch(function () {
        _this6.collectMainBodyLoading = false;
      });
    },
    collectMainBodySelectToggle: function collectMainBodySelectToggle(show) {
      if (show && !this.collectMainBodyLoading && !this.collectMainBodyList.length) {
        this.getCollectMainBodyListData();
      }
    },
    getLoanMainBodyListData: function getLoanMainBodyListData() {
      var _this7 = this;

      if (this.loanMainBodyLoading) {
        return false;
      }
      this.loanMainBodyLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_mainBody__["d" /* getMainBodyEffectList */])({
        page: 1,
        limit: -1,
        is_internal: 1
      }).then(function (res) {
        _this7.loanMainBodyList = res.data.data;
        _this7.loanMainBodyLoading = false;
      }).catch(function () {
        _this7.loanmainBodyLoading = false;
      });
    },
    loanMainBodySelectToggle: function loanMainBodySelectToggle(show) {
      if (show && !this.loanMainBodyLoading && !this.loanMainBodyList.length) {
        this.getLoanMainBodyListData();
      }
    }
  }
});

/***/ }),

/***/ 688:
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
      "label": "指令发起人"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入指令发起人"
    },
    model: {
      value: (_vm.searchForm.order_create_people),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "order_create_people", $$v)
      },
      expression: "searchForm.order_create_people"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "指令状态"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择指令状态",
      "clearable": ""
    },
    model: {
      value: (_vm.searchForm.order_status),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "order_status", $$v)
      },
      expression: "searchForm.order_status"
    }
  }, _vm._l((_vm.orderStatusJson), function(orderStatusStr, orderStatus) {
    return _c('el-option', {
      key: orderStatus,
      attrs: {
        "label": orderStatusStr,
        "value": orderStatus
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
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
  })], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "借款方"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择借款方",
      "clearable": "",
      "filterable": ""
    },
    on: {
      "visible-change": _vm.loanMainBodySelectToggle
    },
    model: {
      value: (_vm.searchForm.loan_main_body_uuid),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "loan_main_body_uuid", $$v)
      },
      expression: "searchForm.loan_main_body_uuid"
    }
  }, [_vm._l((_vm.loanMainBodyList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.full_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.loanMainBodyLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.loanMainBodyLoading),
      expression: "loanMainBodyLoading"
    }],
    key: "loanMainBodyLoading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "贷款方"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择贷款方",
      "clearable": "",
      "filterable": ""
    },
    on: {
      "visible-change": _vm.collectMainBodySelectToggle
    },
    model: {
      value: (_vm.searchForm.collect_main_body_uuid),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "collect_main_body_uuid", $$v)
      },
      expression: "searchForm.collect_main_body_uuid"
    }
  }, [_vm._l((_vm.collectMainBodyList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.full_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.collectMainBodyLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.collectMainBodyLoading),
      expression: "collectMainBodyLoading"
    }],
    key: "collectMainBodyLoading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "指令更新时间"
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
      "label": "借款编号"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入借款编号"
    },
    model: {
      value: (_vm.searchForm.order_num),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "order_num", $$v)
      },
      expression: "searchForm.order_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "外部指令号"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入外部指令号"
    },
    model: {
      value: (_vm.searchForm.out_order_num),
      callback: function($$v) {
        _vm.$set(_vm.searchForm, "out_order_num", $$v)
      },
      expression: "searchForm.out_order_num"
    }
  })], 1), _vm._v(" "), _c('el-form-item', [_c('el-button', {
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
      "disabled": _vm.loading,
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
    ref: "orderList",
    attrs: {
      "data": _vm.orderList,
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
      "width": "150",
      "align": "left",
      "fixed": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.loan.LoanOrderDetail') != -1) ? _c('el-button', {
          attrs: {
            "size": "mini",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.triggerDetail(scope.row.uuid)
            }
          }
        }, [_vm._v("详情")]) : _vm._e(), _vm._v(" "), (scope.row.order_status == '0' && (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.loan.LoanOrderReview') != -1)) ? _c('el-button', {
          attrs: {
            "size": "mini",
            "type": "success"
          },
          on: {
            "click": function($event) {
              _vm.triggerReview(scope.row.uuid)
            }
          }
        }, [_vm._v("审核")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "order_num",
      "label": "借款编号",
      "width": "220",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "out_order_num",
      "label": "外部指令号",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "借款金额",
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
      "prop": "loan_main_body",
      "label": "借款方",
      "width": "220",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "collect_main_body",
      "label": "贷款方",
      "width": "220",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "指令状态",
      "width": "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm.orderStatusJson[scope.row.order_status]) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "借款状态",
      "width": "80"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm.loanPayStatusJson[scope.row.loan_status]) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "system_flag",
      "label": "系统来源",
      "width": "80"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "order_create_people",
      "label": "指令发起人",
      "width": "100",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "bs_background",
      "label": "业务背景",
      "width": "120",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "借款币种",
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
      "prop": "loan_datetime",
      "label": "借款日期",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "forecast_datetime",
      "label": "预计还款日",
      "width": "100"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "利息率",
      "width": "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm._f("filterPercentage")(scope.row.rate)) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "create_time",
      "label": "指令到达时间",
      "width": "160"
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "update_time",
      "label": "指令更新时间",
      "width": "160"
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
     require("vue-hot-reload-api").rerender("data-v-575957c1", module.exports)
  }
}

/***/ })

});