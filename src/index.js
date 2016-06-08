;(function(){

var vueV = {};

/**
 * install function
 */

vueV.install = function(Vue, options) {
  var list = require('./validate-list.js'),
      _ = require('./util.js');
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
        vm.$set('formData.'+name, tag);
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
if (typeof exports == "object") {
  module.exports = vueV;
} else if (typeof define == "function" && define.amd) {
  define([], function () { return vueV });
} else if (window.Vue) {
  window.vueForm = vueV;
  Vue.use(vueV);
}

})()