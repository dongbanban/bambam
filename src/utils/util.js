/*
 * @FilePath: /Users/i104/bambam/src/utils/util.js
 * @author: dongyang
 */
import { ValueType } from "enum";

const getValueType = (value) => Object.prototype.toString.call(value);

const isArray = (value) => getValueType(value) === ValueType.ARRAY;

const isObject = (value) => getValueType(value) === ValueType.OBJECT;

const isBlob = (value) => getValueType(value) === ValueType.BLOB;

const isFile = (value) => getValueType(value) === ValueType.FILE;

const isBlank = (value) => value === "";

const isFalseValue = (value) =>
  isBlank(value) ||
  [ValueType.NULL, ValueType.UNDEFINED].includes(getValueType(value)) ||
  value === false;

const getUuid = () => {
  let uuid = "";
  for (let i = 1; i <= 32; i++) {
    const n = Math.floor(Math.random() * 16.0).toString(16);
    uuid += n;
    if (i == 8 || i == 12 || i == 16 || i == 20) uuid += "-";
  }
  return uuid;
};

const formatSizeUnits = (size) => {
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return !!size ? `${size.toFixed(2)} ${units[unitIndex]}` : "0 B";
};

export {
  getValueType,
  isArray,
  isObject,
  isBlob,
  isFile,
  isBlank,
  isFalseValue,
  getUuid,
  formatSizeUnits,
};
