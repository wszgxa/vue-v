;(function(){

var vueV = {};

/**
 * install function
 */

vueV.install = function(Vue, options) {
  console.log('heh');
  var list = require('./validate-list.js'),
      _ = require('./util.js');

};

/*
 * https://github.com/vuejs/vue-touch/blob/master/vue-touch.js
 */

if (typeof exports == "object") {
  module.exports = vueV;
} else if (typeof define == "function" && define.amd) {
  define([], function () { return vuev });
} else if (window.Vue) {
  window.vueForm = vueV;
  Vue.use(vueV);
}
})()