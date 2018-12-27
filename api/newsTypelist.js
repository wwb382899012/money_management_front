/**
 * 消息中心跳转表
 */
// order：audit，detail，transfer.audit，transfer.audit2，transfer.receipt，transfer.detail
// loan：audit，detail，transfer.audit，transfer.audit2，transfer.receipt，transfer.detail，
//       repay.audit，repay.detail，repay.transfer.audit，repay.transfer.audit2，repay.transfer.receipt，repay.transfer.detail
// inner：audit，audit2，receipt，detail
// financial：audit，audit2，receipt，detail，redemption，redemption.audit

export default {
  'order': {
    'detail': 'payOrderDetail',
    'audit': 'payOrderReview',
    'transfer.detail': 'payTransferDetail',
    'transfer.audit': 'payTransferReview',
    'transfer.audit2': 'payTransferRReview',
    'transfer.confirm': 'payTransferConfirm',
    'transfer.receipt': 'payTransferReceipt'
  },
  'loan': {
    'detail': 'loanOrderDetail',
    'audit': 'loanOrderReview',
    'transfer.detail': 'loanTransferDetail',
    'transfer.audit': 'loanTransferReview',
    'transfer.audit2': 'loanTransferRReview',
    'transfer.audit3': 'loanTransferRRReview',
    'transfer.confirm': 'loanTransferConfirm',
    'transfer.receipt': 'loanTransferReceipt',
    'repay.detail': 'repayOrderDetail',
    'repay.audit': 'repayOrderReview',
    'repay.transfer.detail': 'repayTransferDetail',
    'repay.transfer.audit': 'repayTransferReview',
    'repay.transfer.audit2': 'repayTransferRReview',
    'repay.transfer.confirm': 'repayTransferConfirm',
    'repay.transfer.receipt': 'repayTransferReceipt',
    'repay.change': 'repayCashFlowChange',
    'repay.change.audit': 'repayCashFlowReview'
  },
  'inner': {
    'detail': 'innerTransferDetail',
    'audit2': 'innerTransferRReview',
    'confirm': 'innerTransferConfirm',
    'receipt': 'innerTransferReceipt'
  },
  'financial': {
    'detail': 'financialPlanDetail',
    'audit': 'financialPlanReview',
    'audit2': 'financialPlanRReview',
    'receipt': 'financialPlanReceipt',
    'redemption': 'financialPlanExpire',
    'redemption.audit': 'financialPlanExpireReview',
    'redemption.receipt': 'financialPlanExpireReceipt'
  }
}
