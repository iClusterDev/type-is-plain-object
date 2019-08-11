import isObject from 'type-is-object';

function isObjectObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export default function IsPlainObject(value) {
  if (!isObject(value)) return false;

  if (!isObjectObject(value)) return false;

  var ctor = value.constructor;
  if (typeof ctor !== 'function') return false;

  var prot = ctor.prototype;
  if (!isObjectObject(prot)) return false;

  if (!prot.hasOwnProperty('isPrototypeOf')) return false;

  return true;
}
