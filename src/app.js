// 本地安装 vue

// npm install vue --save

// 加载vue模块，是从node_modules加载
import Vue from 'vue';


import moment from 'moment';
// 过滤器，格式化日期
Vue.filter('fmtdate', (date, fmrStr) => {
  return moment(date).format(fmrStr);

})


// 使用vue-router插件（模块）
// 本地安装 vue-router
// npm install vue-router --save

import VueRouter from 'vue-router';

// Vue使用插件
Vue.use(VueRouter);



// 引用axios
import axios from 'axios';
// baseURL 基地址 将来发送请求的时候设置的地址都会拼接到baseURL之后
axios.defaults.baseURL = 'http://127.0.0.1:8899/api/';

// 让所有的vue的实例都共享axios
Vue.prototype.$http = axios;
Vue.prototype.axios = axios;


// 1 引用组件
import home from './components/Home/home.vue';
import member from './components/Member/member.vue';
import shopcar from './components/Shopcar/shopcar.vue';
import search from './components/Search/search.vue';

import news from './components/Home/News/news.vue';
import buy from './components/Home/Buy/buy.vue';
import contact from './components/Home/contact/contact.vue';
import feedback from './components/Home/feedback/feedback.vue';
import share from './components/Home/share/share.vue';
import video from './components/Home/video/video.vue';

// 新闻详情
import newsDetail from './components/Home/News/detail.vue';

// 2 创建路由对象
let router = new VueRouter({
  linkActiveClass: 'mui-active',
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: home},
    {path: '/member', component: member},
    {path: '/shopcar', component: shopcar},
    {path: '/search', component: search},

    {path: '/news', component: news},
    {path: '/buy', component: buy},
    {path: '/contact', component: contact},
    {path: '/feedback', component: feedback},
    {path: '/share', component: share},
    {path: '/video', component: video},

    {name: 'newsDetail', path: '/news/:id', component: newsDetail, props: true}
  ]
});


// 加载组件（模块）
import app from './app.vue';

import '../statics/css/mui.css'

// 3 把路由挂载到vue实例上
let vm = new Vue({
  el: '#app',
  router,
  render: c => c(app)
})
