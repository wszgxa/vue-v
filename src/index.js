;(function(){

var vueV = {};

/**
 * install function
 */

vueV.install = function(Vue, options) {
  var list = require('./validate-list.js'),
      _ = require('./util.js');
      _.extend(list, options);
  var list_key = _.getKeys(list);

  Vue.directive('ver', {
    prams: ["maxLength","minLength"],
    bind: function() {
      // if no v-model throw error
      if (this.el.getAttribute('v-model') == undefined) {
        throw new Error('input without v-modle');
      }
    },
    update: function(report) {
      window.hehe = this.modifiers;
      var vm = this.vm,
          el = this.el,
          self = this,
          vModel = this.el.getAttribute('v-model'),
          name = this.el.getAttribute('name'),
          va_list = _.getKeys(this.modifiers);
      if (name == undefined) {
        throw new Error('input without name');
      }
      if (vm.model[name] == undefined) {
        vm.$set('model.'+name, this.el.value);
      }
      var setFormData = function(){
        console.log(this);
      }
      vm.$watch(vModel, setFormData());

    },
    unbind: function() {

    }
  });
};



/*
 * from https://github.com/vuejs/vue-touch/blob/master/vue-touch.js
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