webpackJsonp([60],{

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(38)(
  /* script */
  __webpack_require__(791),
  /* template */
  __webpack_require__(792),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "E:\\Projects\\money_management_front\\pages\\index\\reports\\EodTradeReports.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] EodTradeReports.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3be45d68", Component.options)
  } else {
    hotAPI.reload("data-v-3be45d68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFullTradeReports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getEodTradeReports; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_request__ = __webpack_require__(143);
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



/**
 * 获取全量业务交易表
 * @param {json} data
 *  @param {number} data.page         当前页码
 *  @param {number} data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getFullTradeReports = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.reports.FullTrade',
              body: data
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getFullTradeReports(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取EOD日终检查表
 * @param {json} data
 *  @param {boolean} data.generate     是否生成
 *  @param {number}  data.page         当前页码
 *  @param {number}  data.limit        每页显示数量，默认50，传入值小于0，则不分页，非必填
 */
var getEodTradeReports = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(data) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt('return', Object(__WEBPACK_IMPORTED_MODULE_0__utils_request__["a" /* fetchApi */])({
              serviceName: 'com.jyblife.logic.bg.reports.EodTrade',
              body: data
            }));

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function getEodTradeReports(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ 791:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_reports__ = __webpack_require__(656);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      eodReportsList: [],
      mainBodyList: [],
      mainBodyLoading: false,
      eodReportsListData: [],
      exportLoading: false,
      exportFilename: 'export_eod_reports_list_',
      eodTradeTypeJson: {
        1: '付款指令',
        2: '付款调拨',
        3: '借款指令',
        4: '借款调拨',
        5: '还款指令',
        6: '还款交易',
        7: '内部调拨',
        8: '理财指令',
        9: '理财赎回'
      }
    };
  },
  created: function created() {
    this.getEodTradeReportsData();
  },

  methods: {
    // 表格
    getEodTradeReportsData: function getEodTradeReportsData() {
      var _this = this;

      if (this.loading) return false;
      this.loading = true;

      var params = {
        generate: false,
        page: this.pageSetting.page,
        limit: this.pageSetting.limit
      };

      Object(__WEBPACK_IMPORTED_MODULE_0__api_reports__["a" /* getEodTradeReports */])(params).then(function (res) {
        var data = res.data;
        _this.eodReportsList = data.data;
        _this.pageSetting.page = parseInt(data.page);
        _this.pageSetting.count = parseInt(data.count);
        _this.loading = false;
      }).catch(function () {
        _this.loading = false;
      });
    },


    // 表格操作
    triggerDetail: function triggerDetail(uuid, type) {
      var type2PathJson = {
        1: 'payOrderDetail',
        2: 'payTransferDetail',
        3: 'loanOrderDetail',
        4: 'loanTransferDetail',
        5: 'repayOrderDetail',
        6: 'repayTransferDetail',
        7: 'innerTransferDetail',
        8: 'financialPlanDetail',
        9: 'financialPlanDetail'
      };

      if (type2PathJson[type] && uuid) {
        this.$router.push({
          name: type2PathJson[type],
          params: {
            uuid: uuid
          }
        });
      } else {
        this.$message.warning('参数错误，无法查看对应详情');
      }
    },


    // 表格分页
    handleSizeChange: function handleSizeChange(val) {
      this.pageSetting.page = 1;
      this.pageSetting.limit = parseInt(val);
      this.getEodTradeReportsData();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      this.pageSetting.page = parseInt(val);
      this.getEodTradeReportsData();
    },


    // 获取生成报表
    getExportData: function getExportData() {
      var _this2 = this;

      if (this.exportLoading) return false;
      this.exportLoading = true;

      this.mshowLoading('正在生成EOD日终检查表...');
      var params = {
        generate: true,
        page: 1,
        limit: -1
      };

      this.eodReportsListData = [];

      Object(__WEBPACK_IMPORTED_MODULE_0__api_reports__["a" /* getEodTradeReports */])(params).then(function (res) {
        _this2.exportLoading = false;
        _this2.mhideLoading();
        _this2.getEodTradeReportsData();
        _this2.eodReportsListData = res.data.data;
        _this2.$message.success('生成报表成功');
      }).catch(function () {
        _this2.exportLoading = false;
        _this2.mhideLoading();
      });
    },


    // 导出
    handleDownload: function handleDownload() {
      var _this3 = this;

      if (this.exportLoading) {
        return false;
      }
      this.exportLoading = true;

      this.mconfirm('确定要导出当前生成的报表吗?').then(function () {
        _this3.mshowLoading('正在导出EOD日终检查表...');
        _this3.exportData(_this3.eodReportsListData);
      }).catch(function () {
        _this3.exportLoading = false;
      });
    },


    // 导出
    exportData: function exportData(list) {
      var _this4 = this;

      if (list.length) {
        var tHeader = ['外部指令编号', '资金交易编号', '交易主体', '业务类别', '指令到达时间', '指令接收时间', '调拨交易生成时间'];
        var filterList = ['out_order_num', 'transfer_num', 'main_body', 'trade_type', 'order_create_time', 'order_opt_time', 'transfer_create_time'];
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
          if (key == 'trade_type') {
            return item[key] ? _this5.eodTradeTypeJson[item[key]] : '-';
          }
          return item[key] ? item[key] : '-';
        });
      });

      return data;
    }
  }
});

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app-page-body"
  }, [_c('tp-breadcrumb'), _vm._v(" "), _c('div', {
    staticClass: "search-form-box"
  }, [_c('el-form', {
    attrs: {
      "inline": true,
      "label-width": "100px",
      "label-position": "left",
      "size": "mini"
    }
  }, [_c('el-form-item', [_c('el-button', {
    attrs: {
      "disabled": _vm.exportLoading,
      "type": "primary"
    },
    on: {
      "click": _vm.getExportData
    }
  }, [_vm._v("生成报表")]), _vm._v(" "), _c('el-button', {
    attrs: {
      "disabled": _vm.exportLoading,
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
    ref: "eodReportsList",
    attrs: {
      "data": _vm.eodReportsList,
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
      "width": "120",
      "fixed": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [(scope.row.opt_uuid) ? _c('el-button', {
          attrs: {
            "size": "mini",
            "type": "primary"
          },
          on: {
            "click": function($event) {
              _vm.triggerDetail(scope.row.opt_uuid, scope.row.trade_type)
            }
          }
        }, [_vm._v("查看详情")]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "out_order_num",
      "label": "外部指令编号",
      "width": "120"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.out_order_num ? scope.row.out_order_num : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "transfer_num",
      "label": "资金交易编号",
      "width": "220",
      "show-overflow-tooltip": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.transfer_num ? scope.row.transfer_num : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "main_body",
      "label": "交易主体",
      "show-overflow-tooltip": ""
    }
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "label": "业务类别",
      "width": "100"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(_vm.eodTradeTypeJson[scope.row.trade_type]) + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "order_create_time",
      "label": "指令到达时间",
      "width": "160"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.order_create_time ? scope.row.order_create_time : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "order_opt_time",
      "label": "指令接收时间",
      "width": "160"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.order_opt_time ? scope.row.order_opt_time : '-') + "\n      ")]
      }
    }])
  }), _vm._v(" "), _c('el-table-column', {
    attrs: {
      "prop": "transfer_create_time",
      "label": "调拨交易提交时间",
      "width": "160"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function(scope) {
        return [_vm._v("\n        " + _vm._s(scope.row.transfer_create_time ? scope.row.transfer_create_time : '-') + "\n      ")]
      }
    }])
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
     require("vue-hot-reload-api").rerender("data-v-3be45d68", module.exports)
  }
}

/***/ })

});