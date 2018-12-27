webpackJsonp([18],{

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(821),
  /* template */
  __webpack_require__(822),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\data\\account\\add.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] add.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1962a232", Component.options)
  } else {
    hotAPI.reload("data-v-1962a232", Component.options)
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

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  '福建省': {
    'FJLY': '龙岩市',
    'FJZZ': '漳州市',
    'FJNP': '南平市',
    'FJPT': '莆田市',
    'FJFZ': '福州市',
    'FJXM': '厦门市',
    'FJND': '宁德市',
    'FJQZ': '泉州市',
    'FJSM': '三明市'
  },
  '西藏自治区': {
    'XZLS': '拉萨市',
    'QHHX': '海西州',
    'XZAL': '阿里地区',
    'QHXN': '西宁市',
    'XZCD': '昌都地区',
    'XZNQ': '那曲地区',
    'QHGE': '格尔木市',
    'XZRK': '日喀则地区',
    'XZSN': '山南地区',
    'QHHB': '海北州',
    'QHYS': '玉树州',
    'QHHA': '海南州',
    'QHHD': '海东地区',
    'QHHN': '黄南州',
    'XZLZ': '林芝地区',
    'QHGL': '果洛州',
    'XZZM': '樟木口岸'
  },
  '贵州省': {
    'GZTR': '铜仁地区',
    'GZQN': '黔南州',
    'GZZY': '遵义市',
    'GZGY': '贵阳市',
    'GZAS': '安顺地区',
    'GZLP': '六盘水市',
    'GZQD': '黔东南州',
    'GZBJ': '毕节地区',
    'GZQX': '黔西南州'
  },
  '上海市': {
    'SHSH': '上海市'
  },
  '广东省': {
    'GDSW': '汕尾市',
    'GDJM': '江门市',
    'GDDG': '东莞市',
    'GDQY': '清远市',
    'GDSZ': '深圳市',
    'GDZH': '珠海市',
    'GDFS': '佛山市',
    'GDMZ': '梅州市',
    'GDYF': '云浮市',
    'GDZJ': '湛江市',
    'GDJY': '揭阳市',
    'GDHZ': '惠州市',
    'GDHY': '河源市',
    'GDYJ': '阳江市',
    'GDSG': '韶关市',
    'GDGZ': '广州市',
    'GDCZ': '潮州市',
    'GDZQ': '肇庆市',
    'GDZS': '中山市',
    'GDMM': '茂名市',
    'GDST': '汕头市'
  },
  '湖南省': {
    'HNXT': '湘潭市',
    'HNYZ': '永州市',
    'HNCD': '常德市',
    'HNYY': '岳阳市',
    'HNZZ': '株洲市',
    'HNHH': '怀化市',
    'HNZA': '张家界市',
    'HNSY': '邵阳市',
    'HNJS': '湘西土家族苗族自治州',
    'HNHY': '衡阳市',
    'HNYI': '益阳市',
    'HNCS': '长沙市',
    'HNCZ': '郴州市',
    'HNLD': '娄底市'
  },
  '湖北省': {
    'HBSZ': '随州市',
    'HBSY': '十堰市',
    'HBZG': '秭归县',
    'HBXG': '孝感市',
    'HBXF': '襄樊市',
    'HBES': '恩施州',
    'HBZJ': '枝江市',
    'HBEZ': '鄂州市',
    'HBXN': '咸宁市',
    'HBCY': '长阳县',
    'HBTM': '天门市',
    'HBXS': '兴山县',
    'HBXT': '仙桃市',
    'HBHG': '黄冈市',
    'HBJM': '荆门市',
    'HBYA': '远安县',
    'HBYD': '宜都市',
    'HBHS': '黄石市',
    'HBYC': '宜昌市',
    'HBWF': '五峰县',
    'HBWH': '武汉市',
    'HBJZ': '荆州市',
    'HBDY': '当阳市',
    'HBDZ': '大冶市',
    'HBQJ': '潜江市',
    'HBSN': '神农架林区'
  },
  '安徽省': {
    'AHCZ': '池州地区',
    'AHTL': '铜陵市',
    'AHLA': '六安地区',
    'AHFY': '阜阳市',
    'AHMA': '马鞍山市',
    'AHWH': '芜湖市',
    'AHCU': '滁州市',
    'AHHZ': '毫州市',
    'AHAQ': '安庆市',
    'AHHS': '黄山市',
    'AHXC': '宣城市',
    'AHSZ': '宿州市',
    'AHCH': '巢湖地区',
    'AHHN': '淮南市',
    'AHBB': '蚌埠市',
    'AHHF': '合肥市',
    'AHHB': '淮北市'
  },
  '四川省': {
    'SCNC': '南充市',
    'SCDY': '德阳市',
    'SCLA': '凉山州',
    'SCGY': '广元市',
    'SCGZ': '甘孜州',
    'SCDC': '达川市',
    'SCZY': '资阳地区',
    'SCNJ': '内江市',
    'SCGA': '广安市',
    'SCSN': '遂宁市',
    'SCBZ': '巴中地区',
    'SCMS': '眉山市',
    'SCLS': '乐山市',
    'SCAB': '阿坝州',
    'SCCD': '成都市',
    'SCLZ': '泸州市',
    'SCMY': '绵阳市',
    'SCZG': '自贡市',
    'SCPZ': '攀枝花市',
    'SCYA': '雅安地区',
    'SCYB': '宜宾市'
  },
  '新疆维吾尔自治区': {
    'XJBY': '巴音郭楞蒙古自治州',
    'XJTM': '图木舒克市',
    'XJTL': '吐鲁番地区',
    'XJTC': '塔城地区',
    'XJKZ': '克孜勒苏柯尔克孜州',
    'XALE': '阿拉尔市',
    'XJWJ': '五家渠市',
    'XJYL': '伊犁哈萨克自治州市',
    'XJWL': '乌鲁木齐市',
    'XJSH': '石河子市',
    'XJCJ': '昌吉回族自治州市',
    'XJKS': '喀什地区',
    'XJAL': '阿勒泰地区',
    'XJAK': '阿克苏地区',
    'XJKU': '库尔勒市',
    'XJHT': '和田地区',
    'XJKL': '克拉玛依市',
    'XJBE': '博尔塔拉蒙古自治州',
    'XJHM': '哈密地区'
  },
  '江苏省': {
    'JSHA': '淮安市',
    'JSCZ': '常州市',
    'JSSQ': '宿迁市',
    'JSNJ': '南京市',
    'JSWX': '无锡市',
    'JSYZ': '扬州市',
    'JSXZ': '徐州市',
    'JSTZ': '泰州市',
    'JSNT': '南通市',
    'JSYC': '盐城市',
    'JSSZ': '苏州市',
    'JSZG': '张家港市',
    'JSLY': '连云港市',
    'JSJY': '江阴市',
    'JSZJ': '镇江市'
  },
  '吉林省': {
    'JLCC': '长春市',
    'JLBC': '白城市',
    'JLBS': '白山市',
    'JLTH': '通化市',
    'JLJL': '吉林市',
    'JLYB': '延边自治州',
    'JLSY': '松原市',
    'JLSP': '四平市',
    'JLLY': '辽源市'
  },
  '宁夏回族自治区': {
    'NXYC': '银川市',
    'NXSZ': '石嘴山市',
    'NXGY': '固原地区',
    'NXWZ': '吴忠市'
  },
  '河北省': {
    'HELQ': '鹿泉市',
    'HESJ': '石家庄市',
    'HEQH': '秦皇岛市',
    'HECZ': '沧州市',
    'HELF': '廊坊市',
    'HEHD': '邯郸市',
    'HEXT': '邢台市',
    'HEHS': '衡水市',
    'HEZJ': '张家口市',
    'HETS': '唐山市',
    'HEBD': '保定市',
    'HECD': '承德市'
  },
  '河南省': {
    'HSAY': '安阳市',
    'HSSM': '三门峡市',
    'HSHB': '鹤壁市',
    'HSLH': '漯河市',
    'HSKF': '开封市',
    'HSSQ': '商丘市',
    'HSZZ': '郑州市',
    'HSXX': '新乡市',
    'HSXY': '信阳市',
    'HSPY': '濮阳市',
    'HSNY': '洛阳市',
    'HSXC': '许昌市',
    'HSJZ': '焦作市',
    'HSZK': '周口市',
    'HSPD': '平顶山市',
    'HSNA': '南阳市',
    'HSZM': '驻马店市'
  },
  '广西壮族自治区': {
    'GXHZ': '贺州市',
    'GXBS': '百色地区',
    'GXYL': '玉林市',
    'GXLB': '来宾市',
    'GXCZ': '崇左市',
    'GXHC': '河池地区',
    'GXFC': '防城港市',
    'GXNN': '南宁市',
    'GXGG': '贵港市',
    'GXWZ': '梧州市',
    'GXBH': '北海市',
    'GXGL': '桂林市',
    'GXQZ': '钦州市',
    'GXLZ': '柳州市'
  },
  '海南省': {
    'HALS': '陵水县',
    'HACJ': '昌江县',
    'HACM': '澄迈县',
    'HAQZ': '琼中县',
    'HAWC': '文昌市',
    'HATC': '屯昌县',
    'HABT': '保亭县',
    'HABS': '白沙县',
    'HALD': '乐东县',
    'HAWN': '万宁市',
    'HAQH': '琼海市',
    'HALG': '临高县',
    'HADA': '定安县',
    'HAZZ': '儋州市',
    'HADF': '东方市',
    'HAQS': '琼山市',
    'HAWZ': '五指山市',
    'HAHK': '海口市',
    'HASY': '三亚市'
  },
  '重庆市': {
    'CQRC': '荣昌县',
    'CQCS': '长寿市',
    'CQCQ': '重庆市',
    'CQKX': '开县',
    'CQCK': '城口县',
    'CQSZ': '石柱土家族自治县',
    'CQWZ': '万州市',
    'CQWX': '巫山县',
    'CQYY': '云阳县',
    'CQSQ': '双桥市',
    'CQWS': '万盛市',
    'CQYT': '酉阳土家族苗族自治县',
    'CQQJ': '黔江市',
    'CQDZ': '大足县',
    'CQWL': '武隆县',
    'CQBS': '璧山县',
    'CQWA': '巫溪县',
    'CQYC': '永川市',
    'CQDJ': '垫江县',
    'CQFL': '涪陵市',
    'CQFJ': '奉节县',
    'CQLP': '梁平县',
    'CQPS': '彭水苗族土家族自治县',
    'CQJJ': '江津市',
    'CQFD': '丰都县',
    'CQZX': '忠县',
    'CQHC': '合川市',
    'CQXS': '秀山土家族苗族自治县',
    'CQTN': '潼南县',
    'CQTL': '铜梁县',
    'CQNC': '南川市',
    'CQXJ': '綦江县'
  },
  '江西省': {
    'JXFZ': '抚州地区',
    'JXNC': '南昌市',
    'JXGZ': '赣州市',
    'JXPX': '萍乡市',
    'JXSY': '上饶市',
    'JXJA': '吉安地区',
    'JXJD': '景德镇市',
    'JXYC': '宜春地区',
    'JXYT': '鹰潭市',
    'JXJJ': '九江市',
    'JXXY': '新余市'
  },
  '云南省': {
    'YNCX': '楚雄州',
    'YNLC': '临沧地区',
    'YNSM': '思茅地区',
    'YNZT': '昭通地区',
    'YNQJ': '曲靖市',
    'YNDQ': '迪庆州',
    'YNBS': '保山地区',
    'YNDH': '德宏州',
    'YNDL': '大理州',
    'YNNJ': '怒江州',
    'YNWS': '文山州',
    'YNXS': '西双版纳州',
    'YNLJ': '丽江市',
    'YNHH': '红河州',
    'YNYX': '玉溪市',
    'YNKM': '昆明市'
  },
  '北京市': {
    'BJBJ': '北京市'
  },
  '甘肃省': {
    'GSDX': '定西地区',
    'GSYM': '玉门市',
    'GSBY': '白银市',
    'GSJC': '金昌市',
    'GSPL': '平凉地区',
    'GSZY': '张掖市',
    'GSTS': '天水市',
    'GSWW': '武威市',
    'GSLN': '陇南地区',
    'GSJQ': '酒泉市',
    'GSGN': '甘南州',
    'GSQY': '庆阳地区',
    'GSLX': '临夏州',
    'GSJY': '嘉峪关市',
    'GSLZ': '兰州市'
  },
  '陕西省': {
    'SXHZ': '汉中市',
    'SXXY': '咸阳市',
    'SXTC': '铜川市',
    'SXAK': '安康市',
    'SXXA': '西安市',
    'SXSL': '商洛市',
    'SXBJ': '宝鸡市',
    'SXYA': '延安市',
    'SXWN': '渭南市',
    'SXYL': '榆林市'
  },
  '山东省': {
    'SDDY': '东营市',
    'SDDZ': '德州市',
    'SDQD': '青岛市',
    'SDWH': '威海市',
    'SDHZ': '菏泽地区',
    'SDWF': '潍坊市',
    'SDYT': '烟台市',
    'SDLC': '聊城市',
    'SDBZ': '滨州市',
    'SDJN': '济南市',
    'SDJI': '济宁市',
    'SDZZ': '枣庄市',
    'SDTA': '泰安市',
    'SDLY': '临沂市',
    'SDLW': '莱芜市',
    'SDRZ': '日照市',
    'SDZB': '淄博市'
  },
  '浙江省': {
    'ZJZS': '舟山市',
    'ZJJH': '金华市',
    'ZJYW': '义乌市',
    'ZJHZ': '杭州市',
    'ZJZJ': '诸暨市',
    'ZJNB': '宁波市',
    'ZJQZ': '衢州市',
    'ZJJX': '嘉兴市',
    'ZJHU': '湖州市',
    'ZJWZ': '温州市',
    'ZJTZ': '台州市',
    'ZJLS': '丽水市',
    'ZJSX': '绍兴市'
  },
  '内蒙古自治区': {
    'NMCF': '赤峰市',
    'NMHL': '呼伦贝尔市',
    'NMER': '鄂尔多斯市',
    'NMXA': '兴安盟',
    'NMAL': '阿拉善盟市',
    'NMWL': '乌兰察布盟',
    'NMBY': '巴彦淖尔盟',
    'NMTL': '通辽市',
    'NMWH': '乌海市',
    'NMZL': '哲里木盟',
    'NMBT': '包头市',
    'NMXL': '锡林郭勒盟',
    'NMHH': '呼和浩特市',
    'NMEE': '伊克昭盟'
  },
  '青海省': {
    'XZLS': '拉萨市',
    'QHHX': '海西州',
    'XZAL': '阿里地区',
    'QHXN': '西宁市',
    'XZCD': '昌都地区',
    'XZNQ': '那曲地区',
    'QHGE': '格尔木市',
    'XZRK': '日喀则地区',
    'XZSN': '山南地区',
    'QHHB': '海北州',
    'QHYS': '玉树州',
    'QHHA': '海南州',
    'QHHD': '海东地区',
    'QHHN': '黄南州',
    'XZLZ': '林芝地区',
    'QHGL': '果洛州',
    'XZZM': '樟木口岸'
  },
  '天津市': {
    'TJTJ': '天津市'
  },
  '辽宁省': {
    'LNDD': '丹东市',
    'LNHL': '葫芦岛市',
    'LNDL': '大连市',
    'LNSY': '沈阳市',
    'LNFS': '抚顺市',
    'LNLY': '辽阳市',
    'LNJZ': '锦州市',
    'LNYK': '营口市',
    'LNAS': '鞍山市',
    'LNFX': '阜新市',
    'LNTL': '铁岭市',
    'LNBX': '本溪市',
    'LNCY': '朝阳市',
    'LNPJ': '盘锦市'
  },
  '黑龙江省': {
    'HLHE': '哈尔滨市',
    'HLML': '木兰县',
    'HLHG': '鹤岗市',
    'HLHI': '黑河市',
    'HLQQ': '齐齐哈尔市',
    'HLJM': '佳木斯市',
    'HLQT': '七台河市',
    'HLSZ': '尚志市',
    'HLSY': '双鸭山市',
    'HLYC': '伊春市',
    'HLDQ': '大庆市',
    'HLWC': '五常市',
    'HLJX': '鸡西市',
    'HLXH': '绥化市',
    'HLYL': '依兰县',
    'HLSH': '绥化',
    'HLDX': '大兴安岭地区',
    'HLTH': '通河县',
    'HLFZ': '方正县',
    'HLBY': '巴彦县',
    'HLMD': '牡丹江市',
    'HLYS': '延寿县'
  },
  '山西省': {
    'SAYQ': '阳泉市',
    'SAJC': '晋城市',
    'SACZ': '长治市',
    'SASZ': '朔州市',
    'SATY': '太原市',
    'SAXZ': '忻州市',
    'SADT': '大同市',
    'SALL': '吕梁市',
    'SAJZ': '晋中市',
    'SAYU': '榆次市',
    'SAYC': '运城市',
    'SALF': '临汾市'
  }
});

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_account__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_mainBody__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_system__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_provinceList__ = __webpack_require__(657);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    var checkProvinceCity = function checkProvinceCity(rule, value, callback) {
      if (value && !_this.newAccount.city) {
        return callback(new Error('请选择开户行所在市'));
      }

      return callback();
    };
    var checkBankLinkCode = function checkBankLinkCode(rule, value, callback) {
      if (value && !/^\d{12}$/.test(value)) {
        return callback(new Error('请输入正确的银行行号'));
      }

      return callback();
    };
    return {
      loading: false,
      newAccount: {
        sub_branch_name: '',
        bank_name: '',
        short_name: '',
        bank_dict_key: '',
        bank_account: '',
        account_name: '',
        interface_priv: [],
        main_body_uuid: '',
        real_pay_type: '',
        address: '',
        province: '',
        city: '',
        city_name: '',
        area: '',
        bank_link_code: ''
      },
      rules: {
        sub_branch_name: [{
          required: true,
          message: '请输入或选择开户行全称',
          trigger: 'change'
        }],
        bank_dict_key: [{
          required: true,
          message: '请选择所属银行',
          trigger: 'change'
        }],
        bank_account: [{
          required: true,
          message: '请输入银行账号',
          trigger: 'blur'
        }],
        account_name: [{
          required: true,
          message: '请输入开户户名',
          trigger: 'blur'
        }],
        main_body_uuid: [{
          required: true,
          message: '请选择交易主体',
          trigger: 'change'
        }],
        interface_priv: [{
          required: true,
          message: '请选择可访问系统列表',
          trigger: 'change'
        }],
        real_pay_type: [{
          required: true,
          message: '请选择实付类型',
          trigger: 'change'
        }],
        address: [{
          required: true,
          message: '请输入开户行地址',
          trigger: 'change'
        }],
        province: [{
          required: true,
          message: '请选择开户行所在省',
          trigger: 'change'
        }, {
          validator: checkProvinceCity,
          trigger: 'change'
        }],
        area: [{
          required: true,
          message: '请选择开户行所在区域',
          trigger: 'change'
        }],
        bank_link_code: [{
          validator: checkBankLinkCode,
          trigger: 'blur'
        }]
      },
      bankList: null,
      branchBankList: [],
      bankAddressProvincesList: [],
      bankAddressProvincesJson: null,
      bankAddresssAreaCodesJson: null,
      bankDataLoading: false,
      mainBodyList: [],
      mainBodyLoading: false,
      systemList: [],
      systemLoading: false
    };
  },
  created: function created() {
    this.getBankListData();
    this.getBankAddrJsonData();
  },

  methods: {
    getBankListData: function getBankListData() {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__api_account__["h" /* getBankDictList */])().then(function (res) {
        _this2.bankList = res.data.data;
      }).catch(function () {});
    },
    getBankAddrJsonData: function getBankAddrJsonData() {
      // 获取银行省市列表
      this.bankAddressProvincesJson = null;
      this.bankAddressProvincesJson = __WEBPACK_IMPORTED_MODULE_3__api_provinceList__["a" /* default */];
      for (var key in __WEBPACK_IMPORTED_MODULE_3__api_provinceList__["a" /* default */]) {
        this.bankAddressProvincesList.push(key);
      }
    },
    getBankInfoListData: function getBankInfoListData(bank) {
      var _this3 = this;

      if (this.bankDataLoading) {
        return false;
      }
      this.bankDataLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_0__api_account__["i" /* getBankInfoList */])({
        bank: bank
      }).then(function (res) {
        var data = res.data;

        // 获取银行地区列表
        _this3.bankAddresssAreaCodesJson = null;
        if (JSON.stringify(data.areaCodes) != '[]') {
          _this3.bankAddresssAreaCodesJson = data.areaCodes;
        }

        _this3.bankDataLoading = false;
      }).catch(function () {
        _this3.bankDataLoading = false;
      });
    },
    getBranchBankListData: function getBranchBankListData() {
      var _this4 = this;

      if (this.newAccount.short_name && this.newAccount.city_name) {
        Object(__WEBPACK_IMPORTED_MODULE_0__api_account__["j" /* getBranchBankList */])({
          page: 1,
          limit: -1,
          bank_name: this.newAccount.short_name,
          province: this.newAccount.province,
          city: this.newAccount.city_name
        }).then(function (res) {
          _this4.branchBankList = res.data.data;
        }).catch(function () {});
      }
    },
    getMainBodyEffectListData: function getMainBodyEffectListData() {
      var _this5 = this;

      if (this.mainBodyLoading) {
        return false;
      }
      this.mainBodyLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_1__api_mainBody__["d" /* getMainBodyEffectList */])({
        page: 1,
        limit: -1,
        status: 1
      }).then(function (res) {
        var data = res.data;
        _this5.mainBodyList = data.data;
        _this5.mainBodyLoading = false;
      }).catch(function () {
        _this5.mainBodyLoading = false;
      });
    },
    mainBodySelectToggle: function mainBodySelectToggle(show) {
      if (show && !this.mainBodyLoading && !this.mainBodyList.length) {
        this.getMainBodyEffectListData();
      }
    },
    bankSelectChange: function bankSelectChange(key) {
      this.bankAddresssAreaCodesJson = null;
      this.newAccount.sub_branch_name = '';
      this.newAccount.bank_name = '';
      this.newAccount.area = '';
      this.newAccount.bank_link_code = '';
      this.branchBankList = [];
      for (var i = 0; i < this.bankList.length; i++) {
        if (this.bankList[i].dict_key === key) {
          this.newAccount.short_name = this.bankList[i].dict_value;
          this.getBranchBankListData();
          break;
        }
      }
      this.getBankInfoListData(key);
    },
    handleProvinceChange: function handleProvinceChange() {
      this.newAccount.city = '';
      this.newAccount.city_name = '';
      this.newAccount.sub_branch_name = '';
      this.newAccount.bank_name = '';
      this.newAccount.bank_link_code = '';
      this.branchBankList = [];
    },
    handleCityChange: function handleCityChange(code) {
      this.newAccount.sub_branch_name = '';
      this.newAccount.bank_name = '';
      this.newAccount.bank_link_code = '';
      this.branchBankList = [];
      if (code) {
        this.newAccount.city_name = this.bankAddressProvincesJson[this.newAccount.province][code];
        this.getBranchBankListData();
      } else {
        this.newAccount.city_name = '';
      }
    },
    branchBankToggle: function branchBankToggle(show) {
      if (show && !this.newAccount.short_name) {
        return this.$message.warning('请先选择所属银行');
      }

      if (show && !this.newAccount.city_name) {
        return this.$message.warning('请先选择开户行所属省市');
      }
    },
    handleSelectBranchBank: function handleSelectBranchBank(subBranchName) {
      var hasCode = false;
      for (var i = 0; i < this.branchBankList.length; i++) {
        if (subBranchName == this.branchBankList[i].sub_branch_name) {
          hasCode = true;
          this.newAccount.bank_name = this.branchBankList[i].sub_branch_name;
          this.newAccount.bank_link_code = this.branchBankList[i].bank_link_code;
          break;
        }
      }

      // 自定义银行名称
      if (!hasCode) {
        this.newAccount.bank_name = subBranchName;
        this.newAccount.bank_link_code = '';
      }
    },
    getSystemListData: function getSystemListData() {
      var _this6 = this;

      if (this.systemLoading) {
        return false;
      }
      this.systemLoading = true;
      Object(__WEBPACK_IMPORTED_MODULE_2__api_system__["e" /* getSystemList */])({
        page: 1,
        limit: -1
      }).then(function (res) {
        var data = res.data;
        _this6.systemList = data.data;
        _this6.systemLoading = false;
      }).catch(function () {
        _this6.systemLoading = false;
      });
    },
    systemSelectToggle: function systemSelectToggle(show) {
      if (show && !this.systemLoading && !this.systemList.length) {
        this.getSystemListData();
      }
    },
    submitForm: function submitForm(formName) {
      var _this7 = this;

      if (this.loading) return false;
      this.loading = true;
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          _this7.mconfirm('确定要提交吗？').then(function () {
            _this7.mshowLoading('正在新增银行账户...');

            var params = JSON.parse(JSON.stringify(_this7.newAccount));

            params.interface_priv = params.interface_priv.join(',');

            Object(__WEBPACK_IMPORTED_MODULE_0__api_account__["d" /* addAccount */])(params).then(function () {
              _this7.loading = false;
              _this7.mhideLoading();
              _this7.$message.success('新增成功');
              _this7.$router.replace({
                name: 'accountList'
              });
            }).catch(function () {
              _this7.loading = false;
              _this7.mhideLoading();
            });
          }).catch(function () {
            _this7.loading = false;
          });
        } else {
          _this7.loading = false;
          _this7.$message.warning('请完善数据填写后重试');
          return false;
        }
      });
    }
  }
});

/***/ }),

/***/ 822:
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
  }, [_c('span', [_vm._v("新增银行账户")])]), _vm._v(" "), _c('el-form', {
    ref: "newAccount",
    attrs: {
      "model": _vm.newAccount,
      "rules": _vm.rules,
      "label-width": "140px",
      "label-position": "left",
      "size": "small"
    }
  }, [_c('el-form-item', {
    attrs: {
      "label": "交易主体",
      "prop": "main_body_uuid"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择交易主体",
      "filterable": ""
    },
    on: {
      "visible-change": _vm.mainBodySelectToggle
    },
    model: {
      value: (_vm.newAccount.main_body_uuid),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "main_body_uuid", $$v)
      },
      expression: "newAccount.main_body_uuid"
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
    key: "mainbodyloading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "所属银行",
      "prop": "bank_dict_key"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择所属银行"
    },
    on: {
      "change": _vm.bankSelectChange
    },
    model: {
      value: (_vm.newAccount.bank_dict_key),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "bank_dict_key", $$v)
      },
      expression: "newAccount.bank_dict_key"
    }
  }, [_vm._l((_vm.bankList), function(item) {
    return _c('el-option', {
      key: item.dict_key,
      attrs: {
        "label": item.dict_value,
        "value": item.dict_key
      }
    })
  }), _vm._v(" "), (_vm.bankDataLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.bankDataLoading),
      expression: "bankDataLoading"
    }],
    key: "bankDataLoading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": "loading"
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    staticClass: "inline-input-group",
    attrs: {
      "label": "开户行所在省市",
      "prop": "province"
    }
  }, [_c('el-select', {
    staticClass: "el-form-item-width-half",
    staticStyle: {
      "padding-right": "20px"
    },
    attrs: {
      "filterable": "",
      "placeholder": "请选择开户行所在省"
    },
    on: {
      "change": _vm.handleProvinceChange
    },
    model: {
      value: (_vm.newAccount.province),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "province", $$v)
      },
      expression: "newAccount.province"
    }
  }, _vm._l((_vm.bankAddressProvincesList), function(provinceName) {
    return _c('el-option', {
      key: provinceName,
      attrs: {
        "label": provinceName,
        "value": provinceName
      }
    })
  })), _vm._v(" "), (_vm.newAccount.province) ? _c('el-select', {
    staticClass: "el-form-item-width-half",
    attrs: {
      "filterable": "",
      "placeholder": "请选择开户行所在市"
    },
    on: {
      "change": _vm.handleCityChange
    },
    model: {
      value: (_vm.newAccount.city),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "city", $$v)
      },
      expression: "newAccount.city"
    }
  }, _vm._l((_vm.bankAddressProvincesJson[_vm.newAccount.province]), function(cityName, cityCode) {
    return _c('el-option', {
      key: cityCode,
      attrs: {
        "label": cityName,
        "value": cityCode
      }
    })
  })) : _vm._e()], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户行全称",
      "prop": "sub_branch_name"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": _vm.newAccount.bank_dict_key === '' || _vm.newAccount.city === '' ? '请先选择所属银行和所属省市' : '请输入或选择开户行全称',
      "filterable": "",
      "allow-create": ""
    },
    on: {
      "visible-change": _vm.branchBankToggle,
      "change": _vm.handleSelectBranchBank
    },
    model: {
      value: (_vm.newAccount.sub_branch_name),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "sub_branch_name", $$v)
      },
      expression: "newAccount.sub_branch_name"
    }
  }, _vm._l((_vm.branchBankList), function(item) {
    return _c('el-option', {
      key: item.bank_link_code + item.sub_branch_name,
      attrs: {
        "label": item.sub_branch_name,
        "value": item.sub_branch_name
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户行行号",
      "prop": "bank_link_code"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": _vm.newAccount.bank_dict_key === '' || _vm.newAccount.city === '' ? '请先选择所属银行和所属省市' : '请输入银行行号或选择开户行全称获得',
      "type": "number"
    },
    model: {
      value: (_vm.newAccount.bank_link_code),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "bank_link_code", $$v)
      },
      expression: "newAccount.bank_link_code"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "银行账号",
      "prop": "bank_account"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入银行账号"
    },
    model: {
      value: (_vm.newAccount.bank_account),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "bank_account", $$v)
      },
      expression: "newAccount.bank_account"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户户名",
      "prop": "account_name"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入开户户名"
    },
    model: {
      value: (_vm.newAccount.account_name),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "account_name", $$v)
      },
      expression: "newAccount.account_name"
    }
  })], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "可访问系统列表",
      "prop": "interface_priv"
    }
  }, [_c('el-select', {
    attrs: {
      "placeholder": "请选择可访问系统列表",
      "multiple": "",
      "filterable": ""
    },
    on: {
      "visible-change": _vm.systemSelectToggle
    },
    model: {
      value: (_vm.newAccount.interface_priv),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "interface_priv", $$v)
      },
      expression: "newAccount.interface_priv"
    }
  }, [_vm._l((_vm.systemList), function(item) {
    return _c('el-option', {
      key: item.uuid,
      attrs: {
        "label": item.sys_name,
        "value": item.uuid
      }
    })
  }), _vm._v(" "), (_vm.systemLoading) ? _c('el-option', {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: (_vm.systemLoading),
      expression: "systemLoading"
    }],
    key: "systemloading",
    attrs: {
      "disabled": "",
      "element-loading-spinner": "el-icon-loading",
      "label": "",
      "value": ""
    }
  }) : _vm._e()], 2)], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "实付类型",
      "prop": "real_pay_type"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择实付类型"
    },
    model: {
      value: (_vm.newAccount.real_pay_type),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "real_pay_type", $$v)
      },
      expression: "newAccount.real_pay_type"
    }
  }, _vm._l((_vm.realPayTypeJson), function(realPayTypeStr, realPayTypeCode) {
    return _c('el-option', {
      key: realPayTypeCode,
      attrs: {
        "label": realPayTypeStr,
        "value": realPayTypeCode
      }
    })
  }))], 1), _vm._v(" "), _c('el-form-item', {
    attrs: {
      "label": "开户行地址",
      "prop": "address"
    }
  }, [_c('el-input', {
    attrs: {
      "placeholder": "请输入开户行地址"
    },
    model: {
      value: (_vm.newAccount.address),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "address", $$v)
      },
      expression: "newAccount.address"
    }
  })], 1), _vm._v(" "), (_vm.bankAddresssAreaCodesJson && _vm.newAccount.bank_dict_key) ? _c('el-form-item', {
    attrs: {
      "label": "开户行所属区域",
      "prop": "area"
    }
  }, [_c('el-select', {
    attrs: {
      "filterable": "",
      "placeholder": "请选择开户行所属区域"
    },
    model: {
      value: (_vm.newAccount.area),
      callback: function($$v) {
        _vm.$set(_vm.newAccount, "area", $$v)
      },
      expression: "newAccount.area"
    }
  }, _vm._l((_vm.bankAddresssAreaCodesJson), function(areaName, areaCode) {
    return _c('el-option', {
      key: areaName,
      attrs: {
        "label": areaName,
        "value": areaCode
      }
    })
  }))], 1) : _vm._e(), _vm._v(" "), _c('el-form-item', {
    staticClass: "form-footer",
    attrs: {
      "label-width": "0"
    }
  }, [(_vm.$store.getters.auth == 'admin' || _vm.$store.getters.auth.indexOf('com.jyblife.logic.bg.account.AccountAdd') != -1) ? _c('el-button', {
    attrs: {
      "disabled": _vm.loading,
      "size": "medium",
      "type": "primary"
    },
    on: {
      "click": function($event) {
        _vm.submitForm('newAccount')
      }
    }
  }, [_vm._v("保存")]) : _vm._e(), _vm._v(" "), _c('tp-historyback', {
    attrs: {
      "name": "accountList",
      "size": "medium"
    }
  })], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1962a232", module.exports)
  }
}

/***/ })

});