webpackJsonp([21],{

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(755),
  /* template */
  __webpack_require__(756),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\financialPlan\\update.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] update.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69ec71b3", Component.options)
  } else {
    hotAPI.reload("data-v-69ec71b3", Component.options)
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

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_financial__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_mainBody__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_account__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_validate__ = __webpack_require__(638);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    var checkRate = function checkRate(rule, value, callback) {
      if (value && !Object(__WEBPACK_IMPORTED_MODULE_3__utils_validate__["a" /* validate2Decimal */])(value)) {
        return callback(new Error('请输入不超过两位小数的正数值'));
      }

      if (value && Number(value) < 0) {
        return callback(new Error('预计年化收益率不能为负'));
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

    var checkMoney = function checkMoney(rule, value, callback) {
      if (value && !Object(__WEBPACK_IMPORTED_MODULE_3__utils_validate__["a" /* validate2Decimal */])(value)) {
        return callback(new Error('请输入不超过两位位小数的正数值'));
      }

      if (value && Number(value) < 0) {
        return callback(new Error('投资总本金不能为负'));
      }

      if (value && Number(value).toFixed(2) == '0.00') {
        return callback(new Error('投资总本金不能为0'));
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
    var checkInterest = function checkInterest(rule, value, callback) {
      if (value && !Object(__WEBPACK_IMPORTED_MODULE_3__utils_validate__["a" /* validate2Decimal */])(value)) {
        return callback(new Error('请输入不超过两位位小数的正数值'));
      }

      if (value && Number(value) < 0) {
        return callback(new Error('预计利息不能为负'));
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
      updateFinancialPlan: {
        plan_uuid: '',
        plan_status: '',
        plan_main_body_uuid: '',
        pay_bank_uuid: '',
        pay_bank_name: '',
        pay_bank_account: '',
        money_manager_product_uuid: '',
        term_type: '',
        currency: 'CNY',
        amount: '',
        rate_start_date: '',
        rate_over_date: '',
        forecast_annual_income_rate: '',
        forecast_annual_income_rate_percentage: '',
        forecast_interest: '',
        forecast_interest_model: '',
        real_pay_type: 1,
        cash_flow: []
      },
      interData: {
        pay_bank_short_name: '',
        pay_bank_dict_key: ''
      },
      deleteCashFlow: [],
      rules: {
        plan_main_body_uuid: [{
          required: true,
          message: '请选择交易主体',
          trigger: 'change'
        }],
        pay_bank_uuid: [{
          required: true,
          message: '请选择出款银行',
          trigger: 'change'
        }],
        pay_bank_account: [{
          required: true,
          message: '请选择出款银行',
          trigger: 'change'
        }],
        money_manager_product_uuid: [{
          required: true,
          message: '请选择投资产品',
          trigger: 'change'
        }],
        term_type: [{
          required: true,
          message: '请选择期限类别',
          trigger: 'change'
        }],
        currency: [{
          required: true,
          message: '请选择币种',
          trigger: 'change'
        }],
        amount: [{
          required: true,
          message: '请输入投资总本金',
          trigger: 'blur'
        }, {
          validator: checkMoney,
          trigger: 'blur'
        }],
        rate_start_date: [{
          required: true,
          message: '请选择起息日',
          trigger: 'change'
        }],
        rate_over_date: [{
          required: true,
          message: '请选择到期日',
          trigger: 'change'
        }],
        forecast_annual_income_rate_percentage: [{
          required: true,
          message: '请输入预计年化收益率',
          trigger: ['blur', 'change']
        }, {
          validator: checkRate,
          trigger: ['blur', 'change']
        }],
        forecast_interest_model: [{
          required: true,
          message: '请输入预计利息',
          trigger: ['blur', 'change']
        }, {
          validator: checkInterest,
          trigger: ['blur', 'change']
        }],
        real_pay_type: [{
          required: true,
          message: '请选择实付类型',
          trigger: 'change'
        }]
      },
      mainBodyList: [],
      mainBodyLoading: false,
      bankAccountList: [],
      bankAccountLoading: false,
      financialProductList: [],
      financialProductLoading: false,
      startPickerOptions: {
        disabledDate: function disabledDate(time) {
          if (_this.updateFinancialPlan.rate_over_date) {
            return time.getTime() < Date.now() - 24 * 60 * 60 * 1000 || time.getTime() > new Date(_this.updateFinancialPlan.rate_over_date).getTime();
          } else {
            return time.getTime() < Date.now() - 24 * 60 * 60 * 1000;
          }
        }
      },
      overPickerOptions: {
        disabledDate: function disabledDate(time) {
          if (_this.updateFinancialPlan.rate_start_date) {
            return time.getTime() < Date.now() || time.getTime() < new Date(_this.updateFinancialPlan.rate_start_date).getTime();
          } else {
            return time.getTime() < Date.now();
          }
        }
      },
      backupCashFlow: []
    };
  },

  computed: {
    isUpdateCashFlowReady: function isUpdateCashFlowReady() {
      if (this.updateFinancialPlan.forecast_interest === this.updateFinancialPlan.forecast_interest_model) {
        this.calculate(false);
      } else {
        this.inputRate();
      }
      var ready = this.updateFinancialPlan.term_type && this.updateFinancialPlan.currency && this.updateFinancialPlan.amount && this.updateFinancialPlan.amount != 0 && this.updateFinancialPlan.rate_start_date && this.updateFinancialPlan.forecast_annual_income_rate_percentage;

      if (this.updateFinancialPlan.term_type == 2) {
        ready = ready && this.updateFinancialPlan.rate_over_date && this.updateFinancialPlan.forecast_interest !== '';
      }

      this.autoTriggerUpdateCashFlow(ready);

      return ready;
    }
  },
  created: function created() {
    var _this2 = this;

    if (!this.$route.params.uuid) {
      this.$message.error('链接错误，请输入正确链接');
      this.$router.replace({
        name: 'financialPlanList'
      });
    } else {
      this.updateFinancialPlan.plan_uuid = this.$route.params.uuid;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_financial__["h" /* getFinancialPlanDetail */])({
        plan_uuid: this.updateFinancialPlan.plan_uuid
      }).then(function (res) {
        _this2.backupCashFlow = res.data.cash_flow.slice();
        Object.assign(_this2.updateFinancialPlan, res.data);

        _this2.updateFinancialPlan.amount = (Number(_this2.updateFinancialPlan.amount) / 100).toFixed(2);

        _this2.updateFinancialPlan.forecast_annual_income_rate_percentage = (Number(_this2.updateFinancialPlan.forecast_annual_income_rate) * 100).toFixed(2);

        if (_this2.updateFinancialPlan.term_type == 2) {
          _this2.updateFinancialPlan.forecast_interest_model = (Number(_this2.updateFinancialPlan.forecast_interest) / 100).toFixed(2);
        } else {
          _this2.updateFinancialPlan.rate_over_date = '';
          _this2.updateFinancialPlan.forecast_interest = '';
          _this2.updateFinancialPlan.forecast_interest_model = '';
        }

        _this2.updateFinancialPlan.real_pay_type = Number(_this2.updateFinancialPlan.real_pay_type);

        _this2.loading = false;
        _this2.getBankAccountListData(true);
      }).catch(function () {
        _this2.loading = false;
      });

      this.getMainBodyEffectListData();
    }
  },

  methods: {
    // 选择交易主体
    getMainBodyEffectListData: function getMainBodyEffectListData() {
      var _this3 = this;

      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_mainBody__["d" /* getMainBodyEffectList */])({
        page: 1,
        limit: -1,
        is_internal: 1,
        status: 1
      }).then(function (res) {
        var data = res.data;
        _this3.mainBodyList = data.data;
        _this3.mainBodyLoading = false;
      }).catch(function () {
        _this3.mainBodyLoading = false;
      });
    },
    mainBodySelectToggle: function mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyEffectListData();
      }
    },
    handlePlanMainBodyChange: function handlePlanMainBodyChange() {
      this.updateFinancialPlan.forecast_annual_income_rate_percentage = '';
      this.updateFinancialPlan.forecast_annual_income_rate = '';
      this.updateFinancialPlan.forecast_interest_model = '';
      this.updateFinancialPlan.forecast_interest = '';
      this.updateFinancialPlan.money_manager_product_uuid = '';
      this.financialProductList = [];
      this.updateFinancialPlan.pay_bank_uuid = '';
      this.updateFinancialPlan.pay_bank_name = '';
      this.updateFinancialPlan.pay_bank_account = '';
      this.interData.pay_bank_dict_key = '';
      this.interData.pay_bank_short_name = '';
      this.bankAccountList = [];
    },


    // 选择出款银行
    getBankAccountListData: function getBankAccountListData(isInit) {
      var _this4 = this;

      if (!this.updateFinancialPlan.plan_main_body_uuid) {
        this.$message.warning('请先选择交易主体');
        return false;
      }
      if (this.bankAccountLoading) {
        return false;
      }
      this.bankAccountLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_2__api_account__["k" /* getEffectAccountList */])({
        page: 1,
        limit: -1,
        main_body_uuid: this.updateFinancialPlan.plan_main_body_uuid
      }).then(function (res) {
        var data = res.data.data;
        var bankAccountList = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].real_pay_type != 2) {
            bankAccountList.push(data[i]);
          }
        }

        _this4.bankAccountList = bankAccountList;

        if (isInit) {
          var hasAccount = false;
          for (var _i = 0; _i < _this4.bankAccountList.length; _i++) {
            if (_this4.updateFinancialPlan.pay_bank_uuid == _this4.bankAccountList[_i].uuid) {
              hasAccount = true;
              _this4.updateFinancialPlan.pay_bank_name = _this4.bankAccountList[_i].bank_name;
              _this4.updateFinancialPlan.pay_bank_account = _this4.bankAccountList[_i].bank_account;

              _this4.interData.pay_bank_short_name = _this4.bankAccountList[_i].short_name;
              _this4.interData.pay_bank_dict_key = _this4.bankAccountList[_i].bank_dict_key;
              break;
            }
          }

          if (!hasAccount) {
            _this4.updateFinancialPlan.forecast_annual_income_rate_percentage = '';
            _this4.updateFinancialPlan.forecast_annual_income_rate = '';
            _this4.updateFinancialPlan.forecast_interest_model = '';
            _this4.updateFinancialPlan.forecast_interest = '';
            _this4.updateFinancialPlan.money_manager_product_uuid = '';
            _this4.financialProductList = [];
            _this4.updateFinancialPlan.pay_bank_name = '';
            _this4.updateFinancialPlan.pay_bank_account = '';
            _this4.interData.pay_bank_short_name = '';
            _this4.interData.pay_bank_dict_key = '';
            _this4.$message.warning('原银行账号已不支持网银或不属于此交易主体，请重新选择');
          } else {
            _this4.getFinancialProductListData();
          }
        }
        _this4.bankAccountLoading = false;
      }).catch(function () {
        _this4.bankAccountLoading = false;
      });
    },
    bankAccountSelectToggle: function bankAccountSelectToggle(show) {
      if (show && !this.bankAccountLoading && !this.bankAccountList.length) {
        this.getBankAccountListData();
      }
    },
    handleBankChange: function handleBankChange(bankuuid) {
      for (var i = 0; i < this.bankAccountList.length; i++) {
        if (bankuuid == this.bankAccountList[i].uuid) {
          this.updateFinancialPlan.pay_bank_name = this.bankAccountList[i].bank_name;
          this.updateFinancialPlan.pay_bank_account = this.bankAccountList[i].bank_account;

          this.interData.pay_bank_short_name = this.bankAccountList[i].short_name;
          this.interData.pay_bank_dict_key = this.bankAccountList[i].bank_dict_key;
          break;
        }
      }
      this.updateFinancialPlan.forecast_annual_income_rate_percentage = '';
      this.updateFinancialPlan.forecast_annual_income_rate = '';
      this.updateFinancialPlan.forecast_interest_model = '';
      this.updateFinancialPlan.forecast_interest = '';
      this.updateFinancialPlan.money_manager_product_uuid = '';
      this.financialProductList = [];
    },


    // 选择理财产品
    getFinancialProductListData: function getFinancialProductListData() {
      var _this5 = this;

      if (!this.interData.pay_bank_short_name) {
        this.$message.warning('请先选择出款银行');
        return false;
      }
      if (this.financialProductLoading) {
        return false;
      }
      this.financialProductLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_financial__["j" /* getFinancialProductList */])({
        page: 1,
        limit: -1,
        bank_dict_value: this.interData.pay_bank_short_name,
        status: 1
      }).then(function (res) {
        var data = res.data;
        _this5.financialProductList = data.data;
        _this5.financialProductLoading = false;
      }).catch(function () {
        _this5.financialProductLoading = false;
      });
    },
    financialProductSelectToggle: function financialProductSelectToggle(show) {
      if (show && !this.financialProductLoading && !this.financialProductList.length) {
        this.getFinancialProductListData();
      }
    },
    handleFinancialProductChange: function handleFinancialProductChange(productuuid) {
      for (var i = 0; i < this.financialProductList.length; i++) {
        if (productuuid == this.financialProductList[i].uuid) {
          this.updateFinancialPlan.forecast_annual_income_rate = this.financialProductList[i].annual_income_rate;
          this.updateFinancialPlan.forecast_annual_income_rate_percentage = this.filterPercentage(this.updateFinancialPlan.forecast_annual_income_rate).slice(0, -1);
          break;
        }
      }
      this.updateFinancialPlan.forecast_interest_model = '';
      this.updateFinancialPlan.forecast_interest = '';
    },
    handleTermTypeChange: function handleTermTypeChange(termType) {
      if (termType == 1) {
        this.updateFinancialPlan.rate_over_date = '';
        this.updateFinancialPlan.forecast_interest_model = '';
        this.updateFinancialPlan.forecast_interest = '';
      }
    },


    // 计算预计利息
    calculate: function calculate(showWarning) {
      if (this.updateFinancialPlan.amount && this.updateFinancialPlan.rate_start_date && this.updateFinancialPlan.rate_over_date && this.updateFinancialPlan.forecast_annual_income_rate_percentage && this.updateFinancialPlan.term_type == 2) {
        this.updateFinancialPlan.forecast_annual_income_rate = Number(this.unfilterPercentage(this.updateFinancialPlan.forecast_annual_income_rate_percentage));

        // 间隔天数
        var days = (new Date(this.updateFinancialPlan.rate_over_date).getTime() - new Date(this.updateFinancialPlan.rate_start_date).getTime()) / 1000 / 24 / 3600;

        this.updateFinancialPlan.forecast_interest = (this.updateFinancialPlan.amount * this.updateFinancialPlan.forecast_annual_income_rate * days / 365).toFixed(2);

        this.updateFinancialPlan.forecast_interest_model = this.updateFinancialPlan.forecast_interest;

        this.autoTriggerUpdateCashFlow(true);
      } else {
        this.updateFinancialPlan.forecast_interest = '';
        this.updateFinancialPlan.forecast_interest_model = this.updateFinancialPlan.forecast_interest;
        showWarning && this.$message.warning('请填写完整数据或手动输入');
      }
    },


    // 手动填写预计利息
    inputRate: function inputRate() {
      this.updateFinancialPlan.forecast_interest = this.updateFinancialPlan.forecast_interest_model;
    },


    // 自动触发更新现金流
    autoTriggerUpdateCashFlow: function autoTriggerUpdateCashFlow(ready) {
      if (ready) {
        this.updateFinancialPlan.cash_flow = [];
        this.updateFinancialPlan.cash_flow.push({
          repay_date: this.updateFinancialPlan.rate_start_date,
          cash_flow_type: 1,
          amount: this.filterYuan2CentAmount(this.updateFinancialPlan.amount),
          change_amount: 0,
          info: ''
        });
        if (this.updateFinancialPlan.term_type == 2) {
          this.updateFinancialPlan.cash_flow.push({
            repay_date: this.updateFinancialPlan.rate_over_date,
            cash_flow_type: 2,
            amount: this.filterYuan2CentAmount(this.updateFinancialPlan.amount),
            change_amount: 0,
            info: ''
          });
          this.updateFinancialPlan.cash_flow.push({
            repay_date: this.updateFinancialPlan.rate_over_date,
            cash_flow_type: 3,
            amount: this.filterYuan2CentAmount(this.updateFinancialPlan.forecast_interest),
            change_amount: 0,
            info: ''
          });
        }
      } else {
        this.updateFinancialPlan.cash_flow = [];
      }
    },

    // 更新现金流
    triggerUpdateCashFlow: function triggerUpdateCashFlow(showWarning) {
      if (this.isUpdateCashFlowReady) {
        this.updateFinancialPlan.cash_flow = [];
        this.updateFinancialPlan.cash_flow.push({
          repay_date: this.updateFinancialPlan.rate_start_date,
          cash_flow_type: 1,
          amount: this.filterYuan2CentAmount(this.updateFinancialPlan.amount),
          change_amount: 0,
          info: ''
        });
        if (this.updateFinancialPlan.term_type == 2) {
          this.updateFinancialPlan.cash_flow.push({
            repay_date: this.updateFinancialPlan.rate_over_date,
            cash_flow_type: 2,
            amount: this.filterYuan2CentAmount(this.updateFinancialPlan.amount),
            change_amount: 0,
            info: ''
          });
          this.updateFinancialPlan.cash_flow.push({
            repay_date: this.updateFinancialPlan.rate_over_date,
            cash_flow_type: 3,
            amount: this.filterYuan2CentAmount(this.updateFinancialPlan.forecast_interest),
            change_amount: 0,
            info: ''
          });
        }
      } else {
        showWarning && this.$message.warning('请先填写完整的理财计划');
        this.updateFinancialPlan.cash_flow = [];
      }
    },


    // 保存和提交
    submitForm: function submitForm(formName, type) {
      var _this6 = this;

      if (this.loading) return false;
      this.loading = true;
      this.updateFinancialPlan.forecast_annual_income_rate = Number(this.unfilterPercentage(this.updateFinancialPlan.forecast_annual_income_rate_percentage));
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          if (_this6.updateFinancialPlan.cash_flow.length != 3 && _this6.updateFinancialPlan.term_type == 2 || _this6.updateFinancialPlan.cash_flow.length != 1 && _this6.updateFinancialPlan.term_type == 1) {
            _this6.$message.warning('请完善理财计划现金流表');
            _this6.loading = false;
            return false;
          }
          _this6.mconfirm(type == '1' ? '确定提交理财计划审核吗？' : '确认保存理财计划吗？').then(function () {
            _this6.mshowLoading(type == '1' ? '正在提交理财计划审核...' : '正在保存理财计划...');

            // 获取参数
            var params = JSON.parse(JSON.stringify(_this6.updateFinancialPlan));
            params.amount = _this6.filterYuan2CentAmount(params.amount);
            params.forecast_interest = _this6.filterYuan2CentAmount(params.forecast_interest);

            if (params.cash_flow.length == _this6.backupCashFlow.length) {
              for (var i = 0; i < _this6.backupCashFlow.length; i++) {
                params.cash_flow[i].uuid = _this6.backupCashFlow[i].uuid;
              }
            } else {
              params.cash_flow[0].uuid = _this6.backupCashFlow[0].uuid;

              if (params.cash_flow.length < _this6.backupCashFlow.length) {
                params.cash_flow = params.cash_flow.concat(_this6.backupCashFlow.slice(1));
                for (var _i2 = 1; _i2 < params.cash_flow.length; _i2++) {
                  params.cash_flow[_i2].is_delete = '2';
                }
              }
            }

            var index = 0;
            for (var _i3 = 0; _i3 < params.cash_flow.length; _i3++) {
              if (params.cash_flow[_i3].cash_flow_type == 1) {
                params.cash_flow[_i3].index = index;
                index++;
              } else if (params.cash_flow[_i3].cash_flow_type == 2) {
                params.cash_flow[_i3].index = index;
                params.cash_flow[_i3 + 1].index = index;
                index++;
              }
            }

            params.if_audit = type;

            Object(__WEBPACK_IMPORTED_MODULE_0__api_financial__["l" /* updateFinancialPlan */])(params).then(function () {
              _this6.loading = false;
              _this6.mhideLoading();
              _this6.$message.success(type == '1' ? '理财计划提交成功' : '理财计划保存成功');
              _this6.$router.replace({
                name: 'financialPlanList'
              });
            }).catch(function () {
              _this6.loading = false;
              _this6.mhideLoading();
            });
          }).catch(function () {
            _this6.loading = false;
          });
        } else {
          _this6.loading = false;
          _this6.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 756:
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
  }, [_c('span', [_vm._v("更新理财计划")])]), _vm._v(" "), _c('el-form', {
    ref: "updateFinancialPlan",
    attrs: {
      "model": _vm.updateFinancialPlan,
      "rules": _vm.rules,
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
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择交易主体"
    },
    on: {
      "visible-change": _vm.mainBodySelectToggle,
      "change": _vm.handlePlanMainBodyChange
    },
    model: {
      value: (_vm.updateFinancialPlan.plan_main_body_uuid),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "plan_main_body_uuid", $$v)
      },
      expression: "updateFinancialPlan.plan_main_body_uuid"
    }
  }, [_vm._l((_vm.mainBodyList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.full_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.mainBodyLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.mainBodyLoading),
      expression: "mainBodyLoading"
    }],
    key: "mainBodyLoading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "出款银行名称",
      "prop": "pay_bank_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择出款银行名称"
    },
    on: {
      "visible-change": _vm.bankAccountSelectToggle,
      "change": _vm.handleBankChange
    },
    model: {
      value: (_vm.updateFinancialPlan.pay_bank_uuid),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "pay_bank_uuid", $$v)
      },
      expression: "updateFinancialPlan.pay_bank_uuid"
    }
  }, [_vm._l((_vm.bankAccountList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.bank_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.bankAccountLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.bankAccountLoading),
      expression: "bankAccountLoading"
    }],
    key: "bankAccountLoading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "出款银行账号",
      "prop": "pay_bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "disabled": "",
      "placeholder": "请先选择出款银行名称"
    },
    model: {
      value: (_vm.updateFinancialPlan.pay_bank_account),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "pay_bank_account", $$v)
      },
      expression: "updateFinancialPlan.pay_bank_account"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "投资产品",
      "prop": "money_manager_product_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择投资产品"
    },
    on: {
      "visible-change": _vm.financialProductSelectToggle,
      "change": _vm.handleFinancialProductChange
    },
    model: {
      value: (_vm.updateFinancialPlan.money_manager_product_uuid),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "money_manager_product_uuid", $$v)
      },
      expression: "updateFinancialPlan.money_manager_product_uuid"
    }
  }, [_vm._l((_vm.financialProductList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.product_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.financialProductLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.financialProductLoading),
      expression: "financialProductLoading"
    }],
    key: "financialproductloading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "期限类别",
      "prop": "term_type"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择期限类别"
    },
    on: {
      "change": _vm.handleTermTypeChange
    },
    model: {
      value: (_vm.updateFinancialPlan.term_type),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "term_type", $$v)
      },
      expression: "updateFinancialPlan.term_type"
    }
  }, [_c('el-option', {
    attrs: {
      "value": 1,
      "label": "开放式"
    }
  }), _vm._v(" "), _c('el-option', {
    attrs: {
      "value": 2,
      "label": "有效期"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "币种",
      "prop": "currency"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择币种"
    },
    model: {
      value: (_vm.updateFinancialPlan.currency),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "currency", $$v)
      },
      expression: "updateFinancialPlan.currency"
    }
  }, [_c('el-option', {
    attrs: {
      "label": "人民币",
      "value": "CNY"
    }
  })], 1)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "投资总本金",
      "prop": "amount"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "请输入投资总本金"
    },
    model: {
      value: (_vm.updateFinancialPlan.amount),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "amount", $$v)
      },
      expression: "updateFinancialPlan.amount"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("元")])], 2)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "起息日",
      "prop": "rate_start_date"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "picker-options": _vm.startPickerOptions,
      "value-format": _vm.datedateFormat,
      "align": "right",
      "type": "date",
      "placeholder": "选择起息日"
    },
    model: {
      value: (_vm.updateFinancialPlan.rate_start_date),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "rate_start_date", $$v)
      },
      expression: "updateFinancialPlan.rate_start_date"
    }
  })], 1), _vm._v(" "), (!_vm.updateFinancialPlan.term_type || _vm.updateFinancialPlan.term_type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "投资产品到期日",
      "prop": "rate_over_date"
    }
  }, [_c('el-date-picker', {
    attrs: {
      "picker-options": _vm.overPickerOptions,
      "value-format": _vm.datedateFormat,
      "align": "right",
      "type": "date",
      "placeholder": "选择投资产品到期日"
    },
    model: {
      value: (_vm.updateFinancialPlan.rate_over_date),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "rate_over_date", $$v)
      },
      expression: "updateFinancialPlan.rate_over_date"
    }
  })], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-line"
  }, [_c('el-form-item', {
    attrs: {
      "label": "预计年化收益率",
      "prop": "forecast_annual_income_rate_percentage"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入预计年化收益率"
    },
    model: {
      value: (_vm.updateFinancialPlan.forecast_annual_income_rate_percentage),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "forecast_annual_income_rate_percentage", $$v)
      },
      expression: "updateFinancialPlan.forecast_annual_income_rate_percentage"
    }
  }, [_c('template', {
    slot: "append"
  }, [_vm._v("%")])], 2)], 1), _vm._v(" "), (!_vm.updateFinancialPlan.term_type || _vm.updateFinancialPlan.term_type == 2) ? _c('el-form-item', {
    attrs: {
      "label": "预计利息",
      "prop": "forecast_interest_model"
    }
  }, [_c('el-input', {
    attrs: {
      "type": "number",
      "placeholder": "请输入预计利息"
    },
    model: {
      value: (_vm.updateFinancialPlan.forecast_interest_model),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "forecast_interest_model", $$v)
      },
      expression: "updateFinancialPlan.forecast_interest_model"
    }
  }, [_c('template', {
    slot: "append"
  }, [_c('el-button', {
    attrs: {
      "icon": "el-icon-refresh"
    },
    on: {
      "click": _vm.calculate
    }
  })], 1)], 2)], 1) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": ""
    },
    model: {
      value: (_vm.updateFinancialPlan.real_pay_type),
      callback: function($$v) {
        _vm.$set(_vm.updateFinancialPlan, "real_pay_type", $$v)
      },
      expression: "updateFinancialPlan.real_pay_type"
    }
  }, [_c('el-option', {
    attrs: {
      "value": 1,
      "label": "网银"
    }
  })], 1)], 1), _vm._v(" "), _c('el-card', {
    staticClass: "box-card box-card-inside"
  }, [_c('div', {
    staticClass: "box-card-header",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c('span', [_vm._v("理财现金流表")]), _vm._v(" "), _c('div', [_c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "type": "text"
    },
    on: {
      "click": _vm.triggerUpdateCashFlow
    }
  }, [_vm._v("更新现金流表")])], 1)]), _vm._v(" "), _c('div', [_c('el-table', {
    attrs: {
      "data": _vm.updateFinancialPlan.cash_flow
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
        return [_vm._v("\n                  " + _vm._s(_vm._f("filterCent2YuanCurrencyAmount")([scope.row.amount, _vm.updateFinancialPlan.currency])) + "\n                ")]
      }
    }])
  })], 1)], 1)]), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.updateFinancialPlan.plan_status == 0 || _vm.updateFinancialPlan.plan_status == 4 || _vm.updateFinancialPlan.plan_status == 5) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading || !_vm.isUpdateCashFlowReady,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('updateFinancialPlan', '2')
      }
    }
  }, [_vm._v("保存")]) : _vm._e(), _vm._v(" "), (_vm.updateFinancialPlan.plan_status == 0 || _vm.updateFinancialPlan.plan_status == 4 || _vm.updateFinancialPlan.plan_status == 5) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading || !_vm.isUpdateCashFlowReady,
      "size": "medium",
      "type": "success"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('updateFinancialPlan', '1')
      }
    }
  }, [_vm._v("提交")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "financialPlanList",
      "size": "medium"
    }
  })], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-69ec71b3", module.exports)
  }
}

/***/ })

});