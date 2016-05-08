/**
 * Utility functions.公用函数
 */

var _ = exports;

/**
 * 去掉字符串前后空格
 * @param  String  str 待修改字符串
 */
_.trim = function(str) {
  // 类数组对象同样适用
  return str == null ? "" : String.prototype.trim.call(str);
}