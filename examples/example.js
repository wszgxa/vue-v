var Vue = require('vue'),
    vueV = require('../');

Vue.use(vueV,{
  nihao: function(str) {
    return parseInt(str) === 1;
  }
});

var el = new Vue({
  el:"#demo",
  template: '#template',
  replace: false,
  data: {
    formData: {},
    model: {
    }
  },
  methods: {
    handle: function(tag) {
      console.log(tag);
    },
    alert: function(tag) {
      if (tag.length > 0) {
        alert(tag.join(','));
      }
    },
    strLen: function(tag) {
      if(tag.indexOf("length")) {
        alert('字符串长度不符合要求！');
      }
    }
  }
});
