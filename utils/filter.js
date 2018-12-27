import numbro from 'numbro';
import CNY from 'numbro/languages/zh-CN';

const hkd = {
  languageTag: 'zh-HK',
  delimiters: {
    thousands: ',',
    decimal: '.'
  },
  abbreviations: {
    thousand: '千',
    million: '百萬',
    billion: '十億',
    trillion: '兆'
  },
  ordinal: function () {
    return '第';
  },
  currency: {
    symbol: 'HK$',
    code: 'HKD'
  }
};

numbro.registerLanguage(CNY);
numbro.registerLanguage(hkd);

export function filterCent2YuanCurrencyAmount([amount, curreny = 'CNY']) {
  curreny = curreny ? curreny.toUpperCase() : 'CNY';
  switch (curreny) {
    case 'CNY':
      numbro.setLanguage('zh-CN');
      break;
    case 'HKD':
      numbro.setLanguage('zh-HK');
      break;
    case 'USD':
      numbro.setLanguage('en-US');
      break;
    default:
      numbro.setLanguage('zh-CN');
  }

  amount = isNaN(Number(amount)) ? 0 : Number(amount);
  return numbro(amount).divide(100).formatCurrency({
    thousandSeparated: true,
    mantissa: 2
  })
}

export function filterCent2YuanNoCurrencyAmount(amount) {
  amount = isNaN(Number(amount)) ? 0 : Number(amount);
  return numbro(amount).divide(100).format({
    thousandSeparated: true,
    mantissa: 2
  })
}

export function filterCent2YuanNoThousandCurrencyAmount(amount) {
  amount = isNaN(Number(amount)) ? 0 : Number(amount);
  return numbro(amount).divide(100).format({
    thousandSeparated: false,
    mantissa: 2
  })
}

export function filterCent2WanNoCurrencyAmount(amount) {
  amount = isNaN(Number(amount)) ? 0 : Number(amount);
  return numbro(amount).divide(1000000).format({
    thousandSeparated: true,
    mantissa: 2
  })
}

export function filterYuan2CentAmount(amount) {
  amount = isNaN(Number(amount)) ? 0 : Number(amount);
  return Number(numbro(amount).multiply(100).format({
    thousandSeparated: false,
    mantissa: 0
  }))
}

export function filterWan2CentAmount(amount) {
  amount = isNaN(Number(amount)) ? 0 : Number(amount);
  return numbro(amount).multiply(1000000).format({
    thousandSeparated: false,
    mantissa: 0
  })
}

export function filterPercentage(value) {
  value = isNaN(Number(value)) ? 0 : Number(value);
  return numbro(value).format({
    output: 'percent',
    mantissa: 2
  });
}

export function unfilterPercentage(value) {
  value = isNaN(Number(value)) ? 0 : Number(value);
  return numbro(`${value}%`).format({
    thousandSeparated: false,
    mantissa: 4
  });
}

export function filterDateTime(timestamp) {
  let date = new Date(timestamp);
  let year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    min = date.getMinutes(),
    second = date.getSeconds();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  min = min < 10 ? '0' + min : min;
  second = second < 10 ? '0' + second : second;
  return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + second;
}

export function filterDate(timestamp) {
  let date = new Date(timestamp);
  let year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate();

  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  return year + '-' + month + '-' + day;
}

export function filterBankAccount(account) {
  if (account) {
    let list = [],
      start = 0;
    while (start <= account.length) {
      list.push(account.substr(start, 4));
      start += 4;
    }
    return list.join(' ');
  }

  return '-';
}

export default {
  install(Vue) {
    Vue.filter('filterCent2YuanCurrencyAmount', filterCent2YuanCurrencyAmount);
    Vue.filter('filterCent2YuanNoCurrencyAmount', filterCent2YuanNoCurrencyAmount);
    Vue.filter('filterCent2YuanNoThousandCurrencyAmount', filterCent2YuanNoThousandCurrencyAmount);
    Vue.filter('filterCent2WanNoCurrencyAmount', filterCent2WanNoCurrencyAmount);
    Vue.filter('filterYuan2CentAmount', filterYuan2CentAmount);
    Vue.filter('filterWan2CentAmount', filterWan2CentAmount);

    Vue.filter('filterPercentage', filterPercentage);
    Vue.filter('unfilterPercentage', unfilterPercentage);

    Vue.filter('filterDateTime', filterDateTime);
    Vue.filter('filterDate', filterDate);

    Vue.filter('filterBankAccount', filterBankAccount);
  }
};
