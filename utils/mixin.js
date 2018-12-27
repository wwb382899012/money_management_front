import {
  Loading,
  Message,
  MessageBox
} from 'element-ui';

import webConfig from '@/config/index';

import {
  filterCent2YuanCurrencyAmount,
  filterCent2YuanNoCurrencyAmount,
  filterCent2WanNoCurrencyAmount,
  filterYuan2CentAmount,
  filterCent2YuanNoThousandCurrencyAmount,
  filterWan2CentAmount,
  filterDateTime,
  filterDate,
  filterPercentage,
  unfilterPercentage,
  filterBankAccount
} from './filter';

export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          headerEnv: webConfig.headerEnv,
          datetimeFormat: 'yyyy-MM-dd HH:mm:ss',
          datedateFormat: 'yyyy-MM-dd',
          styleObject: {
            width: '100%',
            whiteSpace: 'nowrap'
          },
          tableHeight: (Number(document.documentElement.offsetHeight) - 200) + 'px',
          pageSetting: {
            page: 1,
            limit: 20,
            count: 0,
            size: [5, 10, 15, 20, 50],
            layout: 'total, sizes, prev, pager, next, jumper'
          },
          orderStatusJson: {
            0: '待审核',
            1: '已审核',
            2: '已驳回',
            4: '已拒绝',
            20: '已完结'
          },
          payStatusJson: {
            0: '未付款',
            1: '付款中',
            2: '付款成功',
            3: '付款失败',
            10: '待确认'
          },
          loanPayStatusJson: {
            0: '未借款',
            1: '借款中',
            2: '借款成功',
            3: '借款失败',
            10: '待确认'
          },
          repayPayStatusJson: {
            0: '未还款',
            1: '还款中',
            2: '还款成功',
            3: '还款失败',
            10: '待确认'
          },
          currencyJson: {
            CNY: '人民币'
          },
          realPayTypeJson: {
            0: '网银/银企',
            1: '网银',
            2: '银企'
          },
          isPayOffJson: {
            1: '否',
            2: '是'
          },
          cashFlowTypeJson: {
            1: '本金支付',
            2: '本金回款',
            3: '利息回款'
          },
          nodeStatusJson: {
            1: '待审核: ',
            2: '通过: ',
            3: '驳回: ',
            4: '拒绝: '
          },

          isReject: false,
          isStop: false,

          showSearchForm: true,

          fullScreenLoading: null,
        };
      },
      computed: {
        searchFormStatus() {
          return this.showSearchForm ? '隐藏搜索框' : '展开搜索框'
        }
      },
      methods: {
        filterCent2YuanCurrencyAmount,
        filterCent2YuanNoCurrencyAmount,
        filterCent2WanNoCurrencyAmount,
        filterYuan2CentAmount,
        filterCent2YuanNoThousandCurrencyAmount,
        filterWan2CentAmount,
        filterDateTime,
        filterDate,
        filterPercentage,
        unfilterPercentage,
        filterBankAccount,

        mformatCurrencyStr(currency) {
          if (currency) {
            currency = currency.toUpperCase();
          }
          return currency && this.currencyJson[currency] ? this.currencyJson[currency] : '人民币';
        },

        // 弹出框
        mshowLoading(loadingText) {
          const options = {
            lock: true,
            text: loadingText,
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          };
          this.fullScreenLoading = Loading.service(options);
        },
        mhideLoading() {
          if (this.fullScreenLoading) {
            this.fullScreenLoading.close();
          }
          this.fullScreenLoading = null;
        },
        mconfirm(message) {
          const options = {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info',
            closeOnClickModal: false,
            closeOnPressEscape: false
          };
          return MessageBox.confirm(message, '提示', options);
        },
        malert(message, cb) {
          MessageBox.alert(message, '提示', {
            confirmButtonText: '确定',
            callback: () => {
              cb();
            }
          });
        },

        beforeFileUpload(file) {
          const isLt2M = file.size / 1024 / 1024 < 200;

          if (!isLt2M) {
            Message.warning('上传文件大小不能超过200MB!');
          }

          return isLt2M;
        },
        beforeImgUpload(file) {
          const isJPG = file.type.indexOf('image') != -1;
          const isLt2M = file.size / 1024 / 1024 < 200;

          if (!isJPG) {
            this.$message.warning('银行回单只能是图片');
          }
          if (!isLt2M) {
            this.$message.warning('上传图片大小不能超过200MB!');
          }
          return isJPG && isLt2M;
        },

        // 下载附件
        handleFilePreview(file) {
          window.open(file.url, '_blank');
        },
        openInNewPage(url) {
          window.open(url, '_blank');
        },
        isImage(items) {
          let i = 0;
          let item;
          while (i < items.length) {
            item = items[i];
            if (item.type.indexOf('image') !== -1) {
              return item;
            }
            i++;
          }
          return false;
        },
        getFilename(e) {
          let value;
          if (window.clipboardData && window.clipboardData.getData) {
            value = window.clipboardData.getData('Text');
          } else if (e.clipboardData && e.clipboardData.getData) {
            value = e.clipboardData.getData('text/plain');
          }
          value = value.split('\r');
          return value.first();
        },
      },
    });
  }
};
