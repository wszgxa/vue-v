## vue-v

vue表单验证插件。

### 设置

webpack/Browserify，可以通过`npm install vue-v --save`加入你的package.json。

然后把下面加入你的代码中：

``` js
var Vue = require('vue');
Vue.use(require('vue-v'));
```


页面引用，就`dist`目录下面的`vue-v.min.js`通过script引入你的页面即可。

### demo

你可以 
```
git clone git@github.com:wszgxa/vue-v.git
cd vue-v
npm install
npm run dev
```
然后打开exampels/index.html

然后 打开examples 下面的index.html

### 使用方法

我们会在data里面添加两个对象：

``` js
data: {
    formData: {},
    model: {
    }
  }
```
第一个是表单验证结果，第二个是表单数据。

然后在代码中如下使用：

``` js
<input name="required" v-model="model.required" v-ver.required="handle">
```
* name 必须 和v-model中的model后面的key相同，即绑定的数据和表单的name相同。

* `v-ver.required="handle"`中v-ver为指令，required为验证方法，handle会元素失去焦点（blur）之后的回调函数，你可以定义在methods中。

handle接受一个参数，失败验证项数组，比如：['required','username']

### 字符串长度验证
``` js
<input name="str" v-model="model.str" v-ver.length="strLen" min-length="12" max-length="22">
```
如上所示需要添加`min-length`和`max-length`。
### 添加验证方法

``` js
Vue.use(vueV,{
  nihao: function(str) {
    return parseInt(str) === 1;
  },
  ishelloword: function(str) {
    return str === 'hello world';
  }
});
```
如上，在use时可以传入一个对象，对象里面是相应的添加的验证方法。其中str是对应表单的值。请返回true or false;


### 已经添加的验证方法
address: 地址

comparename: 公司名称

chinese: 验证中文

bank：验证16-19位的银行卡号

password: 验证密码

email: 验证邮箱

length: 验证字符长度

qq: QQ号

cellphone: 手机号

telarea: 固定电话区号

telnum: 固定电话号码

idcard：身份证

username: 用户名

required: 是否需要



