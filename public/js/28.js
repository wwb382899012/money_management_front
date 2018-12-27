webpackJsonp([28],{

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(745),
  /* template */
  __webpack_require__(746),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\innerTransfer\\rreview.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] rreview.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d077442", Component.options)
  } else {
    hotAPI.reload("data-v-3d077442", Component.options)
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

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Syunew6__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_Syunew6___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__utils_Syunew6__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_ukey__ = __webpack_require__(650);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        jmgPassWord: '',
        annex_uuids: '',
        special_require: '',
        node_list: [],
        review_comments: ''
      },
      rules: {
        review_comments: [{
          validator: checkComments,
          trigger: 'blur'
        }],
        jmgPassWord: [{
          required: true,
          message: '请输入加密狗密码',
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
      password1: '',
      password2: '',
      fileList: []
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

        if (_this2.reviewInnerTransfer.real_pay_type == 2) {
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


    // 内部调拨审核或重新打款
    resolveInnerTransfer: function resolveInnerTransfer(formName) {
      var _this3 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this3.mconfirm(_this3.reviewInnerTransfer.real_pay_type == '2' && _this3.reviewInnerTransfer.pay_status == '3' ? '确定要重新发起内部调拨付款吗?' : '确定要通过内部调拨审核吗?').then(function () {
            _this3.mshowLoading(_this3.reviewInnerTransfer.real_pay_type == '2' && _this3.reviewInnerTransfer.pay_status == '3' ? '正在重新发起内部调拨付款...' : '正在提交内部调拨审核...');

            if (_this3.reviewInnerTransfer.real_pay_type == 2) {
              if (!_this3.$store.getters.username) {
                _this3.mhideLoading();
                _this3.loading = false;
                _this3.$message.warning(_this3.reviewInnerTransfer.real_pay_type == '2' && _this3.reviewInnerTransfer.pay_status == '3' ? '重新发起付款失败!' : '内部调拨审核失败！');

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
                instance_id: _this3.reviewInnerTransfer.uuid,
                main_body_uuid: _this3.reviewInnerTransfer.pay_main_body_uuid,
                info: _this3.reviewInnerTransfer.review_comments,
                params: {
                  real_pay_type: _this3.reviewInnerTransfer.real_pay_type
                }
              };

              Object(__WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__["g" /* innerTransferFlowResolve */])(params).then(function () {
                _this3.loading = false;
                _this3.mhideLoading();
                _this3.$message.success('内部调拨审核成功');
                _this3.$router.replace({
                  name: 'innerTransferList'
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

    // 银企打款
    resolveYQTransfer: function resolveYQTransfer() {
      var _this4 = this;

      var params = {
        instance_id: this.reviewInnerTransfer.uuid,
        main_body_uuid: this.reviewInnerTransfer.main_body_uuid,
        info: this.reviewInnerTransfer.review_comments,
        params: {
          real_pay_type: this.reviewInnerTransfer.real_pay_type,
          jmgUserName: this.$store.getters.username,
          jmgPassWord: this.reviewInnerTransfer.jmgPassWord
        }
      };

      Object(__WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__["g" /* innerTransferFlowResolve */])(params).then(function () {
        _this4.loading = false;
        _this4.mhideLoading();
        if (_this4.reviewInnerTransfer.real_pay_type == '2' && _this4.reviewInnerTransfer.pay_status == '3') {
          _this4.$message.success('重新发起内部调拨付款成功');
        } else {
          _this4.$message.success('内部调拨审核成功');
        }
        _this4.$router.replace({
          name: 'innerTransferList'
        });
      }).catch(function () {
        _this4.loading = false;
        _this4.mhideLoading();
      });
    },

    // 银企重新打款
    retryYQTransfer: function retryYQTransfer() {
      var _this5 = this;

      var params = {
        uuid: this.reviewInnerTransfer.uuid,
        ukPwd: this.reviewInnerTransfer.jmgPassWord
      };

      Object(__WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__["h" /* innerTransferRetry */])(params).then(function () {
        _this5.loading = false;
        _this5.mhideLoading();
        _this5.$message.success('重新发起内部调拨付款成功');
        _this5.$router.replace({
          name: 'innerTransferList'
        });
      }).catch(function () {
        _this5.loading = false;
        _this5.mhideLoading();
      });
    },


    // 驳回内部调拨
    rejectInnerTransfer: function rejectInnerTransfer(formName) {
      var _this6 = this;

      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (this.reviewInnerTransfer.review_comments && this.reviewInnerTransfer.review_comments.length <= 100) {
        this.isReject = false;
        this.mconfirm('确定要驳回内部调拨审核吗?').then(function () {
          _this6.mshowLoading('正在驳回内部调拨审核...');

          Object(__WEBPACK_IMPORTED_MODULE_0__api_innerTransfer__["f" /* innerTransferFlowReject */])({
            instance_id: _this6.reviewInnerTransfer.uuid,
            info: _this6.reviewInnerTransfer.review_comments,
            main_body_uuid: _this6.reviewInnerTransfer.main_body_uuid,
            params: {
              real_pay_type: _this6.reviewInnerTransfer.real_pay_type
            }
          }).then(function () {
            _this6.loading = false;
            _this6.mhideLoading();
            _this6.$message.success('内部调拨审核驳回成功');
            _this6.$router.replace({
              name: 'innerTransferList'
            });
          }).catch(function () {
            _this6.mhideLoading();
            _this6.loading = false;
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


    // 银企操作
    initUkey: function initUkey() {
      var _this7 = this;

      //如果是IE10及以下浏览器，则跳过不处理，
      if (navigator.userAgent.indexOf('MSIE') > 0 && !navigator.userAgent.indexOf('opera') > -1) return;
      try {
        var s_pnp = new SoftKey6W();
        s_pnp.Socket_UK.onopen = function () {
          _this7.isUkeyConnected = true; //代表已经连接，用于判断是否安装了客户端服务
        };

        //在使用事件插拨时，注意，一定不要关掉Sockey，否则无法监测事件插拨
        s_pnp.Socket_UK.onmessage = function (Msg) {
          var PnpData = JSON.parse(Msg.data);
          if (PnpData.type == 'PnpEvent') {
            //如果是插拨事件处理消息
            if (PnpData.IsIn) {
              _this7.$message.info('加密狗已被插入');
            } else {
              _this7.$message.info('加密狗已被拔出');
            }
          }
        };

        s_pnp.Socket_UK.onclose = function () {};
      } catch (e) {
        return false;
      }
    },
    readCheckPwd: function readCheckPwd(password1, password2) {
      var _this8 = this;

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
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('未发现加密狗，请插入后重试');
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
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('查询加密狗失败，请重试');
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
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('查询加密狗失败，请重试');
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
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                s_simnew1.GetBuf(0); //发送命令从数据缓冲区中数据
              }
              break;
            case 6:
              {
                if (UK_Data.LastError != 0) {
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('查询加密狗失败，请重试');
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
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }

                if (UK_Data.return_value !== _this8.$store.getters.username) {
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('当前用户名和加密狗用户名不一致，请确认');
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
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }
                s_simnew1.GetBuf(0); //发送命令从数据缓冲区中数据
              }
              break;
            case 9:
              {
                if (UK_Data.LastError != 0) {
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('查询加密狗失败，请重试');
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
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('查询加密狗失败，请重试');
                  s_simnew1.Socket_UK.close();
                  return false;
                }

                if (_this8.reviewInnerTransfer.jmgPassWord != UK_Data.return_value) {
                  _this8.mhideLoading();
                  _this8.loading = false;
                  _this8.$message.warning('加密狗密码错误！');

                  return;
                } else {
                  // if (
                  //   this.reviewInnerTransfer.real_pay_type == '2' &&
                  //   this.reviewInnerTransfer.pay_status == '3'
                  // ) {
                  //   this.retryYQTransfer();
                  // } else {
                  //   this.resolveYQTransfer();
                  // }
                  _this8.resolveYQTransfer();
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

        if (this.reviewInnerTransfer.jmgPassWord != password) {
          this.mhideLoading();
          this.loading = false;
          this.$message.warning('加密狗密码错误！');

          return;
        } else {
          // if (
          //   this.reviewInnerTransfer.real_pay_type == '2' &&
          //   this.reviewInnerTransfer.pay_status == '3'
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

/***/ 746:
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
  }, [_c('span', [_vm._v("内部调拨审核")])]), _vm._v(" "), _c('el-form', {
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
  })], 1) : _vm._e(), _vm._v(" "), (_vm.reviewInnerTransfer.real_pay_type == 2) ? _c('el-form-item', {
    staticClass: "el-form-item-width-half",
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
      value: (_vm.reviewInnerTransfer.jmgPassWord),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "jmgPassWord", $$v)
      },
      expression: "reviewInnerTransfer.jmgPassWord"
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
    attrs: {
      "label": "处理意见",
      "prop": "review_comments"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入处理意见",
      "type": "textarea"
    },
    model: {
      value: (_vm.reviewInnerTransfer.review_comments),
      callback: function($$v) {
        _vm.$set(_vm.reviewInnerTransfer, "review_comments", $$v)
      },
      expression: "reviewInnerTransfer.review_comments"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.reviewInnerTransfer.transfer_status == '2' || (_vm.reviewInnerTransfer.transfer_status == '3' && _vm.reviewInnerTransfer.real_pay_type == '2' && _vm.reviewInnerTransfer.pay_status == '3')) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.resolveInnerTransfer('reviewInnerTransfer')
      }
    }
  }, [_vm._v(_vm._s(_vm.reviewInnerTransfer.transfer_status == '3' && _vm.reviewInnerTransfer.real_pay_type == '2' && _vm.reviewInnerTransfer.pay_status == '3' ? "重试" : "通过"))]) : _vm._e(), _vm._v(" "), (_vm.reviewInnerTransfer.transfer_status == '2' || (_vm.reviewInnerTransfer.transfer_status == '3' && _vm.reviewInnerTransfer.real_pay_type == '2' && _vm.reviewInnerTransfer.pay_status == '3')) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "danger"
    },
    on: {
      "click": function($event) {
        _vm.rejectInnerTransfer('reviewInnerTransfer')
      }
    }
  }, [_vm._v("驳回")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
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
     require("vue-hot-reload-api").rerender("data-v-3d077442", module.exports)
  }
}

/***/ })

});