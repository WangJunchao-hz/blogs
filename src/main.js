// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由
import Resource from 'vue-resource' // 引入资源模块
import '../static/css/amaze/2.7.2/amazeui.min.css'

Vue.use(Resource); // 使用资源访问模块

// 资源拦截器设置
Vue.http.interceptors.push((request, next) => { // 请求之前的处理
  console.log(this.articleLists); //此处this为请求所在页面的Vue实例
  next((response) => { // 响应之前的处理
    return response;
  });
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
