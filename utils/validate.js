export function validateIP(str) {
  const reg = /^((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)(\.((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d)){3}$/;
  return reg.test(str);
}

export function validate4Decimal(val) {
  const reg = /^\d*(\.\d{1,4})?$/;
  return reg.test(val);
}

export function validate2Decimal(val) {
  const reg = /^\d*(\.\d{1,2})?$/;
  return reg.test(val);
}
