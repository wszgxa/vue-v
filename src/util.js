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
};
_.isPlainObject = function (obj) {
    return _.isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
};
_.isArray = Array.isArray;
_.getKeys = function(obj) {
  var tag = [];
  for(var p in obj) {
    // 判断是否是实例属性
    if (obj.hasOwnProperty) {
      obj.hasOwnProperty(p) && tag.push(p);
    } else {
      tag.push(p);
    }
  }
  return tag;
};

_.extend = function (target, source, deep) {
    for (key in source)
      if (deep && (_.isPlainObject(source[key]) || isArray(source[key]))) {
        if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])){
          target[key] = {};
        }
        if (isArray(source[key]) && !isArray(target[key])){
          target[key] = [];
        }
        _.extend(target[key], source[key], deep);
      }
      else if (source[key] !== undefined) target[key] = source[key]
  }