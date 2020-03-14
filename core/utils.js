
export function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const pad = (num, size) => {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}

export const isNil = (value) => typeof value === 'undefined' || value === null;
export const isArrayEmpty = (array) => !Array.isArray(array) || !array.length;
export const isArrayAvailable = (array) => Array.isArray(array) && array.length>0;
export const isObjectEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

export function isNormalInteger(str) {
  return /^\+?(0|[1-9]\d*)$/.test(str);
}
