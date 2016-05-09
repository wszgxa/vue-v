var Vue = require('vue'),
    vueV = require('../');

Vue.use(vueV,{
  nihao: function() {
    return true;
  }
});

var el = new Vue({
  el:"#demo",
  template: '#template',
  replace: false,
  data: {
    formData: {},
    model: {
      "password": "123"
    }
  },
  methods: {
    password: function(){
      console.log('密码错误！');
    }
  }
});
