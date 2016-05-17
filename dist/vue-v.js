/**
 * vue-v v0.1.2
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

	;(function(){

	var vueV = {};

	/**
	 * install function
	 */

	vueV.install = function(Vue, options) {
	  var list = __webpack_require__(1),
	      _ = __webpack_require__(2);
	      _.extend(list, options);

	  Vue.directive('ver', {
	    params: ["maxLength","minLength"],
	    bind: function() {
	      // if no v-model throw error
	      if (this.el.getAttribute('v-model') == undefined) {
	        throw new Error('input without v-modle');
	      }
	    },
	    update: function(report) {
	      var vm = this.vm,
	          el = this.el,
	          self = this,
	          vModel = this.el.getAttribute('v-model'),
	          name = this.el.getAttribute('name'),
	          va_list = _.getKeys(this.modifiers);
	      if (name == undefined) {
	        throw new Error('input without name');
	      }
	      // 如果data没有设置，初始化
	      if (vm.model[name] == undefined) {
	        vm.$set('model.'+name, this.el.value);
	      }
	      // 设置formdata验证数据
	      var setState = function(val){
	        var tag = {};
	        va_list.forEach(function(key){
	          tag[key] = list[key](val, self.params.maxLength, self.params.minLength);
	        });
	        vm.$set('formData.'+name,tag);
	      };
	      // 初始化
	      setState('');
	      // 监听
	      vm.$watch(vModel, setState);

	      Vue.util.on(el, 'blur', function(){
	        var data = vm.formData[name],
	            tag = [];
	        for(item in data) {
	          if(!data[item]) {
	            tag.push(item);
	          }
	        }
	        report(tag);
	      });

	    },
	    unbind: function() {
	    }
	  });
	};

	/*
	 * from https://github.com/vuejs/vue-touch/blob/master/vue-touch.js
	 */
	if (true) {
	  module.exports = vueV;
	} else if (typeof define == "function" && define.amd) {
	  define([], function () { return vueV });
	} else if (window.Vue) {
	  window.vueForm = vueV;
	  Vue.use(vueV);
	}

	})()

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

/***/ }
/******/ ]);