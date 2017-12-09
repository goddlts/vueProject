import Vue from 'vue';

// 过滤器
import './config/filters';

// 加载外部插件  （axios，mint-ui, mui（css））
import './config/plugins';

// 加载组件（模块）
import app from './app.vue';

// 导入路由模块
import router from './config/router';

// 3 把路由挂载到vue实例上
let vm = new Vue({
  el: '#app',
  router,
  render: c => c(app),
  created() {
    // 设置axios的拦截器
    // 发送请求之前
    // Add a request interceptor
    this.axios.interceptors.request.use(function (config) {
      // console.log(this);
      // Do something before request is sent
      this.$indicator.open('正在加载...');
      return config;
    }.bind(this), function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    this.axios.interceptors.response.use(function (response) {
      // Do something with response data
      this.$indicator.close();
      
      return response;
    }.bind(this), function (error) {
      // Do something with response error
      return Promise.reject(error);
    });
  }
})

