
/**
 * validate list 
 */

var _ = require('./util.js');


var list = {
  address: function (str) { // str地址文本
    return /^[0-9a-zA-Z\u4e00-\u9fa5]{2,25}$/.test(str);
  },
  chinese: function(str) {
    return /^[\u4e00-\u9fa5]+$/i.test(_.trim(str));
  },
  bank: function(str){
    return /\d{16,19}/.test(str);
  },
  password: function(str){
    return /^([0-9a-zA-Z]){6,20}$/.test(str);
  },
  email: function(str){
      return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(_.trim(str));
  },
  length: function(str, min, max) {   
    var len;
    if(str.length == undefined){
      throw new Error('type error');
      return false;
    } else {
      len = str.length;
    }
    if (min == undefined || max == undefined) {
      throw new Error('need min and max!');
      return false;
    }
    return (min<=len)&&(len<=max);
  },
  qq: function(str) {
    return /^[1-9][0-9]{2,9}$/.test(str);
  },
  cellphone: function(cellPhone){
    return  /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(cellPhone);
  },
  /**
   * 验证用户的固定电话的区号
   * @param  String telarea 用户的固定电话的区号
   * @return boolean           格式正确返回true,否则返回false
   */
  telarea: function(telarea) {
    return /^0[0-9]{2,3}$/.test(telarea);
  },
  /**
   * 验证用户的固定电话的号码
   * @param  int telnum 用户的固定电话的号码
   * @return boolean           格式正确返回true,否则返回false
   */
  telnum: function(telnum) {
    return  /^[2-9][0-9]{6,7}$/.test(telnum);
  },
  /**
   * 检查身份证是否格式正确
   * @param  string id 身份证号
   * @return boolean    格式正确返回true,否则返回false
   */
  idcard: function(id) {
    return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(id);
  },
  /**
   * 检查用户名是否是真实姓名
   * @param  string userName 用户名
   * @return boolean 格式正确返回true,否则返回false
   */
  username: function(userName) {
    return /^[\u4e00-\u9fa5]{1,10}[·.]{0,1}[\u4e00-\u9fa5]{1,10}$/.test(userName);
  },
  required: function(str) {
    return !!str;
  }
};

module.exports = list;
