/**
 * vue-v v0.0.1
 * https://github.com/wszgxa/vue-v
 * Released under the MIT License.
 */

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * [install function]
	 */
	function install(Vue, options) {
	  var list = __webpack_require__(1),
	      _ = __webpack_require__(2);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * validate list 
	 */

	var _ = __webpack_require__(2);


	var list = {
	  chinese: function(str) {
	    return /^[\u4e00-\u9fa5]+$/i.test(_.trim(str));
	  },
	  bankNumber: function(str){
	    return /\d{16,19}/.test(str);
	  },
	  password: function(str){
	    return /^([0-9a-zA-Z]){6,20}$/.test(str);
	  },
	  passwordOther: function(str){
	    return /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,20}$/.test(str);
	  },
	  isEmail: function(email){
	      return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(_.trim(email));
	  },
	  /**
	   * [strLen description]
	   * @param  {[String]}  str [需要比较的字符串]
	   * @param  {[Number]}  min [最小长度]
	   * @param  {[Number]}  max [最大长度]
	   * @return {[boolean]}      [是否符合要求]
	   */
	  strLen: function(str, min, max) {   
	    var len;
	    if(str.length == undefined){
	      throw new Error('type error');
	      return false;
	    } else {
	      len = str.length;
	    }
	    return (min<=len)&&(len<=max);
	  },
	  qq: function(str) {
	    return /^[1-9][0-9]{2,9}$/.test(str);
	  },
	  cellPhone:function(cellPhone){
	    return  /^0?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/.test(cellPhone);
	  },
	  /**
	   * 验证用户的固定电话的区号
	   * @param  String telarea 用户的固定电话的区号
	   * @return boolean           格式正确返回true,否则返回false
	   */
	  checkTelarea: function(telarea) {
	    return /^0[0-9]{2,3}$/.test(telarea);
	  },
	  /**
	   * 验证用户的固定电话的号码
	   * @param  int telnum 用户的固定电话的号码
	   * @return boolean           格式正确返回true,否则返回false
	   */
	  checkTelnum: function(telnum) {
	    return  /^[2-9][0-9]{6,7}$/.test(telnum);
	  },
	  /**
	   * 检查身份证是否格式正确
	   * @param  string id 身份证号
	   * @return boolean    格式正确返回true,否则返回false
	   */
	  idCard: function(id) {
	    return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(id);
	  },
	  /**
	   * 检查用户名是否是真实姓名
	   * @param  string userName 用户名
	   * @return boolean 格式正确返回true,否则返回false
	   */
	  userName: function(userName) {
	    return /^[\u4e00-\u9fa5]{1,10}[·.]{0,1}[\u4e00-\u9fa5]{1,10}$/.test(userName);
	  }
	};

	module.exports = list;


/***/ },
/* 2 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);