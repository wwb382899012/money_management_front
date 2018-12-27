/**
 * 路由
 */

import Vue from 'vue';
import Router from 'vue-router';

import Abstract from '@/components/abstract.vue';
import Login from '@/pages/index/login/index.vue';

import Err404 from '@/pages/index/errorPage/404.vue';

import NewsList from '@/pages/index/news/list.vue';

Vue.use(Router);

const root = Vue.component('root', {
  template: '<router-view></router-view>'
});

let constantRouter = [{
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: Err404,
    name: '404',
    meta: {
      hidden: true
    }
  },
  {
    path: '/',
    component: root,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: NewsList,
      name: 'dashboard',
      title: '消息中心',
      iconClass: 'el-icon-fa-tachometer',
      meta: {
        title: '消息中心'
      }
    }]
  }
];

const asyncRouter = {
  dashboard: {
    path: '/',
    component: root,
    redirect: 'dashboard'
  },
  main: [{
    name: 'pay',
    path: 'pay',
    title: '付款管理',
    component: Abstract,
    iconClass: 'el-icon-fa-product-hunt',
    meta: {
      title: '付款管理'
    },
    modules: [
      'com.jyblife.logic.bg.order.PayOrderList',
      'com.jyblife.logic.bg.order.PayOrderDetail',
      'com.jyblife.logic.bg.order.PayOrderReview',
      'com.jyblife.logic.bg.order.PayTransferList',
      'com.jyblife.logic.bg.order.PayTransferDetail',
      'com.jyblife.logic.bg.order.PayTransferReview',
      'com.jyblife.logic.bg.order.PayTransferRReview',
      'com.jyblife.logic.bg.order.ConfirmStatus',
      'com.jyblife.logic.bg.order.PayTransferReceipt',
    ]
  }, {
    name: 'loan',
    path: 'loan',
    title: '借款管理',
    component: Abstract,
    iconClass: 'el-icon-fa-bold',
    meta: {
      title: '借款管理'
    },
    modules: [
      'com.jyblife.logic.bg.loan.LoanOrderList',
      'com.jyblife.logic.bg.loan.LoanOrderDetail',
      'com.jyblife.logic.bg.loan.LoanOrderReview',
      'com.jyblife.logic.bg.loan.LoanTransferList',
      'com.jyblife.logic.bg.loan.LoanTransferDetail',
      'com.jyblife.logic.bg.loan.LoanTransferReview',
      'com.jyblife.logic.bg.loan.LoanTransferRReview',
      'com.jyblife.logic.bg.loan.LoanTransferRRReview',
      'com.jyblife.logic.bg.loan.ConfirmStatus',
      'com.jyblife.logic.bg.loan.LoanTransferReceipt',
      'com.jyblife.logic.bg.loan.RepayOrderList',
      'com.jyblife.logic.bg.loan.RepayOrderDetail',
      'com.jyblife.logic.bg.loan.RepayOrderReview',
      'com.jyblife.logic.bg.loan.RepayList',
      'com.jyblife.logic.bg.loan.RepayDetail',
      'com.jyblife.logic.bg.loan.RepayTransferReview',
      'com.jyblife.logic.bg.loan.RepayTransferRReview',
      'com.jyblife.logic.bg.loan.RepayConfirmStatus',
      'com.jyblife.logic.bg.loan.RepayTransferReceipt',

      'com.jyblife.logic.bg.loan.RepayCashFlowChange',
      'com.jyblife.logic.bg.loan.RepayCashFlowReview',
    ]
  }, {
    name: 'inner',
    path: 'inner',
    title: '内部调拨',
    component: Abstract,
    iconClass: 'el-icon-fa-exchange',
    meta: {
      title: '内部调拨'
    },
    modules: [
      'com.jyblife.logic.bg.inner.InnerTransferList',
      'com.jyblife.logic.bg.inner.InnerTransferDetail',
      'com.jyblife.logic.bg.inner.CreateTransfer',
      'com.jyblife.logic.bg.inner.UpdateTransfer',
      'com.jyblife.logic.bg.inner.TransferRReview',
      'com.jyblife.logic.bg.inner.ConfirmStatus',
      'com.jyblife.logic.bg.inner.TransferReceipt',
    ]
  }, {
    name: 'financial',
    path: 'financial',
    title: '理财管理',
    component: Abstract,
    iconClass: 'el-icon-fa-money',
    meta: {
      title: '理财管理'
    },
    modules: [
      'com.jyblife.logic.bg.financial.ListPlan',
      'com.jyblife.logic.bg.financial.AddPlan',
      'com.jyblife.logic.bg.financial.SavePlan',
      'com.jyblife.logic.bg.financial.DetailPlan',
      'com.jyblife.logic.bg.financial.PlanReview',
      'com.jyblife.logic.bg.financial.PlanRReview',
      'com.jyblife.logic.bg.financial.PlanReceipt',
      'com.jyblife.logic.bg.financial.PlanExpire',
      'com.jyblife.logic.bg.financial.PlanExpireReview',
      'com.jyblife.logic.bg.financial.PlanExpireReceipt',
    ]
  }, {
    name: 'reports',
    path: 'reports',
    title: '报表中心',
    component: Abstract,
    iconClass: 'el-icon-fa-list-alt',
    meta: {
      title: '报表中心'
    },
    modules: [
      'com.jyblife.logic.bg.reports.EodTrade',
      'com.jyblife.logic.bg.reports.FullTrade'
    ]
  }, {
    name: 'data',
    path: 'data',
    title: '主数据管理',
    component: Abstract,
    iconClass: 'el-icon-fa-database',
    meta: {
      title: '主数据管理'
    },
    modules: [
      'com.jyblife.logic.bg.base.MainBodyList',
      'com.jyblife.logic.bg.account.AccountList',
      'com.jyblife.logic.bg.account.AccountAdd',
      'com.jyblife.logic.bg.account.AccountUpdate',
      'com.jyblife.logic.bg.account.AccountDetail',
      'com.jyblife.logic.bg.account.AccountReview',
      'com.jyblife.logic.bg.financial.ListProduct',
      'com.jyblife.logic.bg.base.SystemList',
      'com.jyblife.logic.bg.base.DictKvList'
    ]
  }, {
    name: 'setting',
    path: 'setting',
    title: '系统配置',
    component: Abstract,
    iconClass: 'el-icon-fa-cogs',
    meta: {
      title: '系统配置'
    },
    modules: [
      'com.jyblife.logic.bg.module.ModuleList',
      'com.jyblife.logic.bg.module.ModuleDetail',
      'com.jyblife.logic.bg.module.ModuleAdd',
      'com.jyblife.logic.bg.module.ModuleUpdate',
      'com.jyblife.logic.bg.role.RoleList',
      'com.jyblife.logic.bg.role.RoleAdd',
      'com.jyblife.logic.bg.role.RoleUpdate',
      'com.jyblife.logic.bg.role.RoleAuthUpdate',
      'com.jyblife.logic.bg.user.UserList',
      'com.jyblife.logic.bg.user.UserUpdate'
    ]
  }],
  children: {
    'com.jyblife.logic.bg.order.PayOrderList': {
      name: 'payOrderList',
      path: 'payOrderList',
      title: '付款指令列表',
      component: () =>
        import ('@/pages/index/pay/order/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '付款指令列表'
      }
    },
    'com.jyblife.logic.bg.order.PayOrderDetail': {
      name: 'payOrderDetail',
      path: 'payOrderDetail/:uuid',
      title: '付款指令详情',
      component: () =>
        import ('@/pages/index/pay/order/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '付款指令详情'
      }
    },
    'com.jyblife.logic.bg.order.PayOrderReview': {
      name: 'payOrderReview',
      path: 'payOrderReview/:uuid',
      title: '付款指令审核',
      component: () =>
        import ('@/pages/index/pay/order/review.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '付款指令审核'
      }
    },
    'com.jyblife.logic.bg.order.PayTransferList': {
      name: 'payTransferList',
      path: 'payTransferList',
      title: '付款调拨列表',
      component: () =>
        import ('@/pages/index/pay/transfer/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '付款调拨列表'
      }
    },
    'com.jyblife.logic.bg.order.PayTransferDetail': {
      name: 'payTransferDetail',
      path: 'payTransferDetail/:uuid',
      title: '付款调拨详情',
      component: () =>
        import ('@/pages/index/pay/transfer/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '付款调拨详情'
      }
    },
    'com.jyblife.logic.bg.order.PayTransferReview': {
      name: 'payTransferReview',
      path: 'payTransferReview/:uuid',
      title: '付款调拨审核',
      component: () =>
        import ('@/pages/index/pay/transfer/review.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '付款调拨审核'
      }
    },
    'com.jyblife.logic.bg.order.PayTransferRReview': {
      name: 'payTransferRReview',
      path: 'payTransferRReview/:uuid',
      title: '付款调拨复核',
      component: () =>
        import ('@/pages/index/pay/transfer/rreview.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '付款调拨复核'
      }
    },
    'com.jyblife.logic.bg.order.ConfirmStatus': {
      name: 'payTransferConfirm',
      path: 'payTransferConfirm/:uuid',
      title: '打款状态确认',
      component: () =>
        import ('@/pages/index/pay/transfer/confirm.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '打款状态确认'
      }
    },
    'com.jyblife.logic.bg.order.PayTransferReceipt': {
      name: 'payTransferReceipt',
      path: 'payTransferReceipt/:uuid',
      title: '付款调拨上传回单',
      component: () =>
        import ('@/pages/index/pay/transfer/receipt.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '付款调拨上传回单'
      }
    },
    'com.jyblife.logic.bg.loan.LoanOrderList': {
      name: 'loanOrderList',
      path: 'loanOrderList',
      title: '借款指令列表',
      component: () =>
        import ('@/pages/index/loan/order/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '借款指令列表'
      }
    },
    'com.jyblife.logic.bg.loan.LoanOrderDetail': {
      name: 'loanOrderDetail',
      path: 'loanOrderDetail/:uuid',
      title: '借款指令详情',
      component: () =>
        import ('@/pages/index/loan/order/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '借款指令详情'
      }
    },
    'com.jyblife.logic.bg.loan.LoanOrderReview': {
      name: 'loanOrderReview',
      path: 'loanOrderReview/:uuid',
      title: '借款指令审核',
      component: () =>
        import ('@/pages/index/loan/order/review.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '借款指令审核'
      }
    },
    'com.jyblife.logic.bg.loan.LoanTransferList': {
      name: 'loanTransferList',
      path: 'loanTransferList',
      title: '借款调拨列表',
      component: () =>
        import ('@/pages/index/loan/transfer/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '借款调拨列表'
      }
    },
    'com.jyblife.logic.bg.loan.LoanTransferDetail': {
      name: 'loanTransferDetail',
      path: 'loanTransferDetail/:uuid',
      title: '借款调拨详情',
      component: () =>
        import ('@/pages/index/loan/transfer/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '借款调拨详情'
      }
    },
    'com.jyblife.logic.bg.loan.LoanTransferReview': {
      name: 'loanTransferReview',
      path: 'loanTransferReview/:uuid',
      title: '借款调拨发起',
      component: () =>
        import ('@/pages/index/loan/transfer/review.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '借款调拨发起'
      }
    },
    'com.jyblife.logic.bg.loan.LoanTransferRReview': {
      name: 'loanTransferRReview',
      path: 'loanTransferRReview/:uuid',
      title: '借款调拨审核',
      component: () =>
        import ('@/pages/index/loan/transfer/rreview.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '借款调拨审核'
      }
    },
    'com.jyblife.logic.bg.loan.LoanTransferRRReview': {
      name: 'loanTransferRRReview',
      path: 'loanTransferRRReview/:uuid',
      title: '借款调拨复核',
      component: () =>
        import ('@/pages/index/loan/transfer/rrreview.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '借款调拨复核'
      }
    },
    'com.jyblife.logic.bg.loan.ConfirmStatus': {
      name: 'loanTransferConfirm',
      path: 'loanTransferConfirm/:uuid',
      title: '打款状态确认',
      component: () =>
        import ('@/pages/index/loan/transfer/confirm.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '打款状态确认'
      }
    },
    'com.jyblife.logic.bg.loan.LoanTransferReceipt': {
      name: 'loanTransferReceipt',
      path: 'loanTransferReceipt/:uuid',
      title: '借款调拨上传回单',
      component: () =>
        import ('@/pages/index/loan/transfer/receipt.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '借款调拨上传回单'
      }
    },

    'com.jyblife.logic.bg.loan.RepayOrderList': {
      name: 'repayOrderList',
      path: 'repayOrderList',
      title: '还款指令列表',
      component: () =>
        import ('@/pages/index/repay/order/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '还款指令列表'
      }
    },
    'com.jyblife.logic.bg.loan.RepayOrderDetail': {
      name: 'repayOrderDetail',
      path: 'repayOrderDetail/:uuid',
      title: '还款指令详情',
      component: () =>
        import ('@/pages/index/repay/order/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '还款指令详情'
      }
    },
    'com.jyblife.logic.bg.loan.RepayOrderReview': {
      name: 'repayOrderReview',
      path: 'repayOrderReview/:uuid',
      title: '还款指令审核',
      component: () =>
        import ('@/pages/index/repay/order/review.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '还款指令审核'
      }
    },
    'com.jyblife.logic.bg.loan.RepayList': {
      name: 'repayTransferList',
      path: 'repayTransferList',
      title: '还款调拨列表',
      component: () =>
        import ('@/pages/index/repay/transfer/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '还款调拨列表'
      }
    },
    'com.jyblife.logic.bg.loan.RepayDetail': {
      name: 'repayTransferDetail',
      path: 'repayTransferDetail/:uuid',
      title: '还款调拨详情',
      component: () =>
        import ('@/pages/index/repay/transfer/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '还款调拨详情'
      }
    },
    'com.jyblife.logic.bg.loan.RepayTransferReview': {
      name: 'repayTransferReview',
      path: 'repayTransferReview/:uuid',
      title: '还款调拨发起',
      component: () =>
        import ('@/pages/index/repay/transfer/review.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '还款调拨发起'
      }
    },
    'com.jyblife.logic.bg.loan.RepayTransferRReview': {
      name: 'repayTransferRReview',
      path: 'repayTransferRReview/:uuid',
      title: '还款调拨审核',
      component: () =>
        import ('@/pages/index/repay/transfer/rreview.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '还款调拨审核'
      }
    },
    'com.jyblife.logic.bg.loan.RepayConfirmStatus': {
      name: 'repayTransferConfirm',
      path: 'repayTransferConfirm/:uuid',
      title: '打款状态确认',
      component: () =>
        import ('@/pages/index/repay/transfer/confirm.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '打款状态确认'
      }
    },
    'com.jyblife.logic.bg.loan.RepayTransferReceipt': {
      name: 'repayTransferReceipt',
      path: 'repayTransferReceipt/:uuid',
      title: '还款调拨上传回单',
      component: () =>
        import ('@/pages/index/repay/transfer/receipt.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '还款调拨上传回单'
      }
    },
    'com.jyblife.logic.bg.loan.RepayCashFlowChange': {
      name: 'repayCashFlowChange',
      path: 'repayCashFlowChange/:uuid',
      title: '修改还款计划',
      component: () =>
        import ('@/pages/index/repay/transfer/changeCashFlow.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '修改还款计划'
      }
    },
    'com.jyblife.logic.bg.loan.RepayCashFlowReview': {
      name: 'repayCashFlowReview',
      path: 'repayCashFlowReview/:uuid',
      title: '审核还款计划',
      component: () =>
        import ('@/pages/index/repay/transfer/changeReview.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '审核还款计划'
      }
    },



    'com.jyblife.logic.bg.inner.InnerTransferList': {
      name: 'innerTransferList',
      path: 'innerTransferList',
      title: '资金内部调拨列表',
      component: () =>
        import ('@/pages/index/innerTransfer/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '资金内部调拨列表'
      }
    },
    'com.jyblife.logic.bg.inner.InnerTransferDetail': {
      name: 'innerTransferDetail',
      path: 'innerTransferDetail/:uuid',
      title: '内部调拨详情',
      component: () =>
        import ('@/pages/index/innerTransfer/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '内部调拨详情'
      }
    },
    'com.jyblife.logic.bg.inner.CreateTransfer': {
      name: 'addInnerTransfer',
      path: 'addInnerTransfer',
      title: '新增内部调拨',
      component: () =>
        import ('@/pages/index/innerTransfer/add.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '新增内部调拨'
      }
    },
    'com.jyblife.logic.bg.inner.UpdateTransfer': {
      name: 'updateInnerTransfer',
      path: 'updateInnerTransfer/:uuid',
      title: '更新内部调拨',
      component: () =>
        import ('@/pages/index/innerTransfer/update.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '更新内部调拨'
      }
    },
    'com.jyblife.logic.bg.inner.TransferRReview': {
      name: 'innerTransferRReview',
      path: 'innerTransferRReview/:uuid',
      title: '内部调拨审核',
      component: () =>
        import ('@/pages/index/innerTransfer/rreview.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '内部调拨审核'
      }
    },
    'com.jyblife.logic.bg.inner.ConfirmStatus': {
      name: 'innerTransferConfirm',
      path: 'innerTransferConfirm/:uuid',
      title: '打款状态确认',
      component: () =>
        import ('@/pages/index/innerTransfer/confirm.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '打款状态确认'
      }
    },
    'com.jyblife.logic.bg.inner.TransferReceipt': {
      name: 'innerTransferReceipt',
      path: 'innerTransferReceipt/:uuid',
      title: '内部调拨上传回单',
      component: () =>
        import ('@/pages/index/innerTransfer/receipt.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '内部调拨上传回单'
      }
    },
    'com.jyblife.logic.bg.financial.ListPlan': {
      name: 'financialPlanList',
      path: 'financialPlanList',
      title: '购买理财',
      component: () =>
        import ('@/pages/index/financialPlan/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '购买理财'
      }
    },
    'com.jyblife.logic.bg.financial.AddPlan': {
      name: 'addFinancialPlan',
      path: 'addFinancialPlan',
      title: '新增理财计划',
      component: () =>
        import ('@/pages/index/financialPlan/add.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '新增理财计划'
      }
    },
    'com.jyblife.logic.bg.financial.SavePlan': {
      name: 'updateFinancialPlan',
      path: 'updateFinancialPlan/:uuid',
      title: '更新理财计划',
      component: () =>
        import ('@/pages/index/financialPlan/update.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '更新理财计划'
      }
    },
    'com.jyblife.logic.bg.financial.DetailPlan': {
      name: 'financialPlanDetail',
      path: 'financialPlanDetail/:uuid',
      title: '理财计划详情',
      component: () =>
        import ('@/pages/index/financialPlan/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '理财计划详情'
      }
    },
    'com.jyblife.logic.bg.financial.PlanReview': {
      name: 'financialPlanReview',
      path: 'financialPlanReview/:uuid',
      title: '理财计划审核',
      component: () =>
        import ('@/pages/index/financialPlan/review.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '理财计划审核'
      }
    },
    'com.jyblife.logic.bg.financial.PlanRReview': {
      name: 'financialPlanRReview',
      path: 'financialPlanRReview/:uuid',
      title: '理财计划复核',
      component: () =>
        import ('@/pages/index/financialPlan/rreview.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '理财计划复核'
      }
    },
    'com.jyblife.logic.bg.financial.PlanReceipt': {
      name: 'financialPlanReceipt',
      path: 'financialPlanReceipt/:uuid',
      title: '理财计划回单',
      component: () =>
        import ('@/pages/index/financialPlan/receipt.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '理财计划回单'
      }
    },
    'com.jyblife.logic.bg.financial.PlanExpire': {
      name: 'financialPlanExpire',
      path: 'financialPlanExpire/:uuid',
      title: '理财赎回发起',
      component: () =>
        import ('@/pages/index/financialPlan/expire.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '理财赎回发起'
      }
    },
    'com.jyblife.logic.bg.financial.PlanExpireReview': {
      name: 'financialPlanExpireReview',
      path: 'financialPlanExpireReview/:uuid',
      title: '理财赎回审核',
      component: () =>
        import ('@/pages/index/financialPlan/ereview.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '理财赎回审核'
      }
    },
    'com.jyblife.logic.bg.financial.PlanExpireReceipt': {
      name: 'financialPlanExpireReceipt',
      path: 'financialPlanExpireReceipt/:uuid',
      title: '理财赎回提交回单',
      component: () =>
        import ('@/pages/index/financialPlan/expireReceipt.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '理财赎回提交回单'
      }
    },
    'com.jyblife.logic.bg.financial.ListProduct': {
      name: 'financialProductList',
      path: 'financialProductList',
      title: '理财产品管理',
      component: () =>
        import ('@/pages/index/data/financialProduct/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '理财产品管理'
      }
    },
    'com.jyblife.logic.bg.reports.EodTrade': {
      name: 'EodTradeReports',
      path: 'EodTradeReports',
      title: 'EOD日终检查表',
      component: () =>
        import ('@/pages/index/reports/EodTradeReports.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: 'EOD日终检查表'
      }
    },
    'com.jyblife.logic.bg.reports.FullTrade': {
      name: 'fullTradeReports',
      path: 'fullTradeReports',
      title: '全量业务交易表',
      component: () =>
        import ('@/pages/index/reports/fullTradeReports.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '全量业务交易表'
      }
    },
    'com.jyblife.logic.bg.base.MainBodyList': {
      name: 'mainBodyList',
      path: 'mainBodyList',
      title: '交易主体管理',
      component: () =>
        import ('@/pages/index/data/mainBody/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '交易主体管理'
      }
    },
    'com.jyblife.logic.bg.base.SystemList': {
      name: 'systemList',
      path: 'systemList',
      title: '业务系统管理',
      component: () =>
        import ('@/pages/index/data/system/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '业务系统管理'
      }
    },
    'com.jyblife.logic.bg.base.DictKvList': {
      name: 'dictList',
      path: 'dictList',
      title: '数据字典管理',
      component: () =>
        import ('@/pages/index/data/dict/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '数据字典管理'
      }
    },
    'com.jyblife.logic.bg.account.AccountList': {
      name: 'accountList',
      path: 'accountList',
      title: '银行账户管理',
      component: () =>
        import ('@/pages/index/data/account/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '银行账户管理'
      }
    },
    'com.jyblife.logic.bg.account.AccountAdd': {
      name: 'accountAdd',
      path: 'accountAdd',
      title: '银行账户新增',
      component: () =>
        import ('@/pages/index/data/account/add.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '银行账户新增'
      }
    },
    'com.jyblife.logic.bg.account.AccountUpdate': {
      name: 'accountUpdate',
      path: 'accountUpdate/:uuid',
      title: '银行账户更新',
      component: () =>
        import ('@/pages/index/data/account/update.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '银行账户更新'
      }
    },
    'com.jyblife.logic.bg.account.AccountDetail': {
      name: 'accountDetail',
      path: 'accountDetail/:uuid',
      title: '银行账户详情',
      component: () =>
        import ('@/pages/index/data/account/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '银行账户详情'
      }
    },
    'com.jyblife.logic.bg.account.AccountReview': {
      name: 'accountReview',
      path: 'accountReview/:uuid',
      title: '银行账户审核',
      component: () =>
        import ('@/pages/index/data/account/review.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '银行账户审核'
      }
    },
    'com.jyblife.logic.bg.module.ModuleList': {
      name: 'moduleList',
      path: 'moduleList',
      title: '模块管理',
      component: () =>
        import ('@/pages/index/setting/modules/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '模块管理'
      }
    },
    'com.jyblife.logic.bg.module.ModuleDetail': {
      name: 'moduleDetail',
      path: 'moduleDetail/:uuid',
      title: '模块详情',
      component: () =>
        import ('@/pages/index/setting/modules/detail.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '模块详情'
      }
    },
    'com.jyblife.logic.bg.module.ModuleAdd': {
      name: 'moduleAdd',
      path: 'moduleAdd',
      title: '模块新增',
      component: () =>
        import ('@/pages/index/setting/modules/add.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '模块新增'
      }
    },
    'com.jyblife.logic.bg.module.ModuleUpdate': {
      name: 'moduleUpdate',
      path: 'moduleUpdate/:uuid',
      title: '模块更新',
      component: () =>
        import ('@/pages/index/setting/modules/update.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '模块更新'
      }
    },
    'com.jyblife.logic.bg.role.RoleList': {
      name: 'roleList',
      path: 'roleList',
      title: '角色管理',
      component: () =>
        import ('@/pages/index/setting/roles/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '角色管理'
      }
    },
    'com.jyblife.logic.bg.role.RoleAdd': {
      name: 'roleAdd',
      path: 'roleAdd',
      title: '角色新增',
      component: () =>
        import ('@/pages/index/setting/roles/add.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '角色新增'
      }
    },
    'com.jyblife.logic.bg.role.RoleUpdate': {
      name: 'roleUpdate',
      path: 'roleUpdate/:uuid',
      title: '角色更新',
      component: () =>
        import ('@/pages/index/setting/roles/update.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '角色更新'
      }
    },
    'com.jyblife.logic.bg.role.RoleAuthUpdate': {
      name: 'roleAuthUpdate',
      path: 'roleAuthUpdate/:uuid',
      title: '角色授权',
      component: () =>
        import ('@/pages/index/setting/roles/auth-update.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '角色授权'
      }
    },
    'com.jyblife.logic.bg.user.UserList': {
      name: 'userList',
      path: 'userList',
      title: '系统用户',
      component: () =>
        import ('@/pages/index/setting/users/list.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      meta: {
        title: '系统用户'
      }
    },
    'com.jyblife.logic.bg.user.UserUpdate': {
      name: 'userUpdate',
      path: 'userUpdate/:userid',
      title: '用户更新',
      component: () =>
        import ('@/pages/index/setting/users/update.vue'),
      imgUrl: 'https://o0p2g4ul8.qnssl.com/vsite%2Fbackground.jpg',
      hidden: true,
      meta: {
        title: '用户更新'
      }
    },
  },
  filter: {
    path: '*',
    redirect: {
      path: '/404'
    }
  }
};

export const constantRouterMap = constantRouter;
export const asyncRouterMap = asyncRouter;

export default new Router({
  routes: constantRouter,
  mode: 'hash',
  linkActiveClass: 'active'
});
