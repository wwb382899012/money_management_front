webpackJsonp([30],{

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(827),
  /* template */
  __webpack_require__(828),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\data\\account\\review.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] review.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-207feb02", Component.options)
  } else {
    hotAPI.reload("data-v-207feb02", Component.options)
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

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getSystemList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activateSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cancelSystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteSystem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取业务系统列表
 * @param {json} data
 *  @param {number} data.page              当前页码
 *  @param {number} data.limit             每页显示数量，默认50，传入值小于0，则不分页，非必填
 *  @param {string} data.uuid              业务系统uuid，搜索条件，非必填
 *  @param {string} data.system_flag       业务系统唯一标识，搜索条件，非必填
 *  @param {string} data.sys_name          业务系统名称，搜索条件，非必填
 *  @param {string} data.status            业务系统状态，默认全部，1-启用，2-注销，搜索条件，非必填
 */
var getSystemList = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemList',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getSystemList(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 新增业务系统
 * @param {json} data
 *  @param {string} data.system_flag       业务系统唯一标识
 *  @param {string} data.sys_name          业务系统名称
 *  @param {string} data.status            业务系统状态，1-启用，2-注销
 *  @param {string} data.pwd_key           业务系统密钥
 *  @param {string} data.ip_address        服务器ip限制,非必填
 */
var addSystem = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemCreateOrUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function addSystem(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/**
 * 编辑业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 *  @param {string} data.system_flag       业务系统唯一标识
 *  @param {string} data.sys_name          业务系统名称
 *  @param {string} data.status            业务系统状态，1-启用，2-注销
 *  @param {string} data.pwd_key           业务系统密钥
 *  @param {string} data.ip_address        服务器ip限制,非必填
 */
var updateSystem = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemCreateOrUpdate',
              body: data
            }));

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function updateSystem(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

/**
 * 启用业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
var activateSystem = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(data) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
              body: Object.assign({}, data, { status: 1 })
            }));

          case 1:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function activateSystem(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

/**
 * 注销业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
var cancelSystem = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(data) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
              body: Object.assign({}, data, { status: 2 })
            }));

          case 1:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function cancelSystem(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * 删除业务系统
 * @param {json} data
 *  @param {string} data.uuid              业务系统uuid
 */
var deleteSystem = function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(data) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.base.SystemStatusModify',
              body: Object.assign({}, data, { status: 3 })
            }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function deleteSystem(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_account__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_system__ = __webpack_require__(645);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      activeName: 'add',
      loading: false,
      reviewAccount: {
        uuid: '',
        short_name: '',
        bank_name: '',
        bank_link_code: '',
        bank_link_code_str: '',
        bank_dict_key: '',
        bank_account: '',
        account_name: '',
        interface_priv: '',
        interface_priv_str: '',
        main_body_uuid: '',
        main_body_name: '',
        real_pay_type: '',
        balance: '',
        address: '',
        province: '',
        city: '',
        provinceCityStr: '',
        area: '',
        areaStr: '',
        review_comments: '',
        add_node_list: [],
        update_node_list: [],
        del_node_list: [],
        enable_node_list: []
      },
      rules: {
        review_comments: [{
          validator: checkComments,
          trigger: 'blur'
        }]
      },
      accountStatusJson: {
        0: '正常',
        1: '冻结',
        2: '注销'
      },
      bankAddresssAreaCodesJson: null,
      bankDataLoading: false,
      systemList: [],
      systemLoading: false,
      resolveBtnTxt: '',
      rejectBtnTxt: '',
      flowCode: ''
    };
  },
  created: function created() {
    var _this2 = this;

    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'accountList'
      });
    } else {
      this.reviewAccount.uuid = this.$route.params.uuid;
      this.loading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_account__["f" /* getAccountDetail */])({
        uuid: this.reviewAccount.uuid
      }).then(function (res) {
        Object.assign(_this2.reviewAccount, res.data);

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
      this.reviewAccount.bank_link_code_str = this.filterBankAccount(this.reviewAccount.bank_link_code);
      this.reviewAccount.bank_account_str = this.filterBankAccount(this.reviewAccount.bank_account);
      var statusJson = this.getFlowStatus();
      this.resolveBtnTxt = statusJson.resolveBtnTxt;
      this.rejectBtnTxt = statusJson.rejectBtnTxt;
      this.flowCode = statusJson.flowCode;

      this.reviewAccount.balanceStr = this.filterCent2YuanNoCurrencyAmount(this.reviewAccount.balance);

      this.reviewAccount.provinceCityStr = this.reviewAccount.province + this.reviewAccount.city_name;

      if (this.reviewAccount.area) {
        this.getBankInfoListData();
      } else {
        this.reviewAccount.areaStr = '-';
      }

      if (this.reviewAccount.interface_priv) {
        this.getSystemListData();
      } else {
        this.reviewAccount.interface_priv_str = '-';
      }

      if (this.reviewAccount.add_flow_info && this.reviewAccount.add_flow_info.node_list) {
        this.reviewAccount.add_node_list = this.reviewAccount.add_flow_info.node_list.filter(function (item) {
          return item.node_status != '1';
        });
      } else {
        this.reviewAccount.add_node_list = [];
      }
      if (this.reviewAccount.update_flow_info && this.reviewAccount.update_flow_info.node_list) {
        this.reviewAccount.update_node_list = this.reviewAccount.update_flow_info.node_list.filter(function (item) {
          return item.node_status != '1';
        });
      } else {
        this.reviewAccount.update_node_list = [];
      }
      if (this.reviewAccount.del_flow_info && this.reviewAccount.del_flow_info.node_list) {
        this.reviewAccount.del_node_list = this.reviewAccount.del_flow_info.node_list.filter(function (item) {
          return item.node_status != '1';
        });
      } else {
        this.reviewAccount.del_node_list = [];
      }
      if (this.reviewAccount.enable_flow_info && this.reviewAccount.enable_flow_info.node_list) {
        this.reviewAccount.enable_node_list = this.reviewAccount.enable_flow_info.node_list.filter(function (item) {
          return item.node_status != '1';
        });
      } else {
        this.reviewAccount.enable_node_list = [];
      }
    },

    // 获取当前审批流参数
    getFlowStatus: function getFlowStatus() {
      if (this.reviewAccount.add_flow_info && this.reviewAccount.add_flow_info.status == '1') {
        return {
          resolveBtnTxt: '新增审核',
          rejectBtnTxt: '新增驳回',
          flowCode: 'account_add_apply'
        };
      }

      if (this.reviewAccount.update_flow_info && this.reviewAccount.update_flow_info.status == '1') {
        return {
          resolveBtnTxt: '更新审核',
          rejectBtnTxt: '更新驳回',
          flowCode: 'account_update_apply'
        };
      }

      if (this.reviewAccount.del_flow_info && this.reviewAccount.del_flow_info.status == '1') {
        return {
          resolveBtnTxt: '注销审核',
          rejectBtnTxt: '注销驳回',
          flowCode: 'account_del_apply'
        };
      }

      if (this.reviewAccount.enable_flow_info && this.reviewAccount.enable_flow_info.status == '1') {
        return {
          resolveBtnTxt: '启用审核',
          rejectBtnTxt: '启用驳回',
          flowCode: 'account_enable_apply'
        };
      }

      return {
        resolveBtnTxt: '',
        rejectBtnTxt: '',
        flowCode: ''
      };
    },


    // 通过审核
    resolveAccount: function resolveAccount(formName) {
      var _this3 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this3.mconfirm('\u786E\u5B9A\u8981\u901A\u8FC7\u8D26\u6237' + _this3.resolveBtnTxt + '\u5417?').then(function () {
            _this3.mshowLoading('正在提交审核...');

            Object(__WEBPACK_IMPORTED_MODULE_0__api_account__["b" /* accountFlowResolve */])({
              instance_id: _this3.reviewAccount.uuid,
              info: _this3.reviewAccount.review_comments,
              flow_code: _this3.flowCode
            }).then(function () {
              _this3.loading = false;
              _this3.mhideLoading();
              _this3.$router.replace({
                name: 'accountList'
              });
            }).catch(function () {
              _this3.mhideLoading();
              _this3.loading = false;
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


    // 驳回
    rejectAccount: function rejectAccount(formName) {
      var _this4 = this;

      if (this.loading) return false;
      this.loading = true;
      this.isReject = true;

      this.$refs[formName].validateField('review_comments');

      if (this.reviewAccount.review_comments && this.reviewAccount.review_comments.length <= 100) {
        this.isReject = false;
        this.mconfirm('确定要驳回吗?').then(function () {
          _this4.mshowLoading('正在驳回...');

          // 获取审核参数
          Object(__WEBPACK_IMPORTED_MODULE_0__api_account__["a" /* accountFlowReject */])({
            instance_id: _this4.reviewAccount.uuid,
            info: _this4.reviewAccount.review_comments,
            flow_code: _this4.flowCode
          }).then(function () {
            _this4.loading = false;
            _this4.mhideLoading();
            _this4.$message.success('驳回成功');
            _this4.$router.replace({
              name: 'accountList'
            });
          }).catch(function () {
            _this4.loading = false;
            _this4.mhideLoading();
          });
        }).catch(function () {
          _this4.loading = false;
        });
      } else {
        this.loading = false;
        this.isReject = false;
        this.$message.warning('请完善数据填写后重试');
        return false;
      }
    },


    // 获取银行列表，格式化需要
    getBankInfoListData: function getBankInfoListData() {
      var _this5 = this;

      if (this.bankDataLoading) {
        return false;
      }
      this.bankDataLoading = true;
      var bankIndex = this.reviewAccount.bank_dict_key ? this.reviewAccount.bank_dict_key : '1';
      Object(__WEBPACK_IMPORTED_MODULE_0__api_account__["i" /* getBankInfoList */])({
        bank: bankIndex
      }).then(function (res) {
        var data = res.data;

        // 获取银行地区列表
        _this5.bankAddresssAreaCodesJson = null;
        if (JSON.stringify(data.areaCodes) != '[]') {
          _this5.bankAddresssAreaCodesJson = data.areaCodes;
          if (_this5.reviewAccount.area && _this5.bankAddresssAreaCodesJson[_this5.reviewAccount.area]) {
            _this5.reviewAccount.areaStr = _this5.bankAddresssAreaCodesJson[_this5.reviewAccount.area];
          } else {
            _this5.reviewAccount.areaStr = '-';
          }
        }

        _this5.bankDataLoading = false;
      }).catch(function () {
        _this5.bankDataLoading = false;
      });
    },

    // 获取系统列表，格式化需要
    getSystemListData: function getSystemListData() {
      var _this6 = this;

      if (this.systemLoading) {
        return false;
      }
      this.systemLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_system__["e" /* getSystemList */])({
        page: 1,
        limit: -1
      }).then(function (res) {
        var data = res.data;
        _this6.systemList = data.data;
        var interfacePrivArr = [];
        if (_this6.reviewAccount.interface_priv) {
          if (_this6.reviewAccount.interface_priv.indexOf(',')) {
            interfacePrivArr = _this6.reviewAccount.interface_priv.split(',');
          } else {
            interfacePrivArr.push(_this6.reviewAccount.interface_priv);
          }
        }
        var systemList = {};
        for (var i = 0; i < _this6.systemList.length; i++) {
          systemList[_this6.systemList[i].uuid] = _this6.systemList[i].sys_name;
        }
        for (var j = 0; j < interfacePrivArr.length; j++) {
          if (systemList[interfacePrivArr[j]]) {
            _this6.reviewAccount.interface_priv_str += j ? ',' + systemList[interfacePrivArr[j]] : systemList[interfacePrivArr[j]];
          } else {
            _this6.reviewAccount.interface_priv_str += j ? ',' + interfacePrivArr[j] : interfacePrivArr[j];
          }
        }
        _this6.systemLoading = false;
      }).catch(function () {
        _this6.systemLoading = false;
      });
    }
  }
});

/***/ }),

/***/ 828:
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
  }, [_c('span', [_vm._v(_vm._s(_vm.resolveBtnTxt))])]), _vm._v(" "), _c('el-form', {
    ref: "reviewAccount",
    attrs: {
      "model": _vm.reviewAccount,
      "rules": _vm.rules,
      "label-width": "140px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "交易主体",
      "prop": "main_body_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.main_body_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "main_body_name", $$v)
      },
      expression: "reviewAccount.main_body_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "所属银行",
      "prop": "short_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.short_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "short_name", $$v)
      },
      expression: "reviewAccount.short_name"
    }
  })], 1), _vm._v(" "), (_vm.reviewAccount.provinceCityStr) ? _c('el-form-item', {
    attrs: {
      "label": "开户行所在省市",
      "prop": "province"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.provinceCityStr),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "provinceCityStr", $$v)
      },
      expression: "reviewAccount.provinceCityStr"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户行全称",
      "prop": "bank_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.bank_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "bank_name", $$v)
      },
      expression: "reviewAccount.bank_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户行行号",
      "prop": "bank_link_code"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.bank_link_code_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "bank_link_code_str", $$v)
      },
      expression: "reviewAccount.bank_link_code_str"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "银行账号",
      "prop": "bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.bank_account_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "bank_account_str", $$v)
      },
      expression: "reviewAccount.bank_account_str"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户户名",
      "prop": "account_name"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.account_name),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "account_name", $$v)
      },
      expression: "reviewAccount.account_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "可访问系统列表",
      "prop": "interface_priv_str"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.interface_priv_str),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "interface_priv_str", $$v)
      },
      expression: "reviewAccount.interface_priv_str"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.realPayTypeJson[_vm.reviewAccount.real_pay_type]),
      callback: function($$v) {
        _vm.$set(_vm.realPayTypeJson, _vm.reviewAccount.real_pay_type, $$v)
      },
      expression: "realPayTypeJson[reviewAccount.real_pay_type]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户行地址",
      "prop": "address"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.address),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "address", $$v)
      },
      expression: "reviewAccount.address"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户行所属区域",
      "prop": "area"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.areaStr),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "areaStr", $$v)
      },
      expression: "reviewAccount.areaStr"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "余额",
      "prop": "balance"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.balanceStr),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "balanceStr", $$v)
      },
      expression: "reviewAccount.balanceStr"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "审核状态",
      "prop": "deal_status"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.orderStatusJson[_vm.reviewAccount.deal_status]),
      callback: function($$v) {
        _vm.$set(_vm.orderStatusJson, _vm.reviewAccount.deal_status, $$v)
      },
      expression: "orderStatusJson[reviewAccount.deal_status]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "账户状态",
      "prop": "status"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.accountStatusJson[_vm.reviewAccount.status]),
      callback: function($$v) {
        _vm.$set(_vm.accountStatusJson, _vm.reviewAccount.status, $$v)
      },
      expression: "accountStatusJson[reviewAccount.status]"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "创建时间",
      "prop": "create_time"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": ""
    },
    model: {
      value: (_vm.reviewAccount.create_time),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "create_time", $$v)
      },
      expression: "reviewAccount.create_time"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "审核意见",
      "prop": "review_comments"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "textarea",
      "placeholder": "请输入审核意见"
    },
    model: {
      value: (_vm.reviewAccount.review_comments),
      callback: function($$v) {
        _vm.$set(_vm.reviewAccount, "review_comments", $$v)
      },
      expression: "reviewAccount.review_comments"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.flowCode && (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountReview') != -1)) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.resolveAccount('reviewAccount')
      }
    }
  }, [_vm._v(_vm._s(_vm.resolveBtnTxt))]) : _vm._e(), _vm._v(" "), (_vm.flowCode && (_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountReview') != -1)) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "danger"
    },
    on: {
      "click": function($event) {
        _vm.rejectAccount('reviewAccount')
      }
    }
  }, [_vm._v(_vm._s(_vm.rejectBtnTxt))]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "accountList",
      "size": "medium"
    }
  })], 1), _vm._v(" "), _c('el-card', {
    staticClass: "box-card"
  }, [_c('div', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("操作日志")])]), _vm._v(" "), _c('div', [_c('el-tabs', {
    attrs: {
      "type": "border-card"
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
      "label": "新增操作",
      "name": "add"
    }
  }, [(_vm.reviewAccount.add_node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.reviewAccount.add_node_list
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
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "更新操作",
      "name": "update"
    }
  }, [(_vm.reviewAccount.update_node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.reviewAccount.update_node_list
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
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "注销操作",
      "name": "del"
    }
  }, [(_vm.reviewAccount.del_node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.reviewAccount.del_node_list
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
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('el-tab-pane', {
    attrs: {
      "label": "启用操作",
      "name": "enable"
    }
  }, [(_vm.reviewAccount.enable_node_list) ? _c('el-table', {
    attrs: {
      "data": _vm.reviewAccount.enable_node_list
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
  })], 1) : _vm._e()], 1)], 1)], 1)])], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-207feb02", module.exports)
  }
}

/***/ })

});