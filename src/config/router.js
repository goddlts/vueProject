// 使用vue-router插件（模块）
// 本地安装 vue-router
// npm install vue-router --save

import Vue from 'vue';
import VueRouter from 'vue-router';
// Vue使用插件
Vue.use(VueRouter);


// 1 引用组件
import home from '../components/Home/home.vue';
import member from '../components/Member/member.vue';
import shopcar from '../components/Shopcar/shopcar.vue';
import search from '../components/Search/search.vue';

import news from '../components/Home/News/news.vue';
import buy from '../components/Home/Buy/buy.vue';
import contact from '../components/Home/contact/contact.vue';
import feedback from '../components/Home/feedback/feedback.vue';
import share from '../components/Home/share/share.vue';
import video from '../components/Home/video/video.vue';

// 新闻详情
import newsDetail from '../components/Home/News/detail.vue';
// 图片详情
import shareDetail from '../components/Home/Share/detail.vue';

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

    {name: 'newsDetail', path: '/news/:id', component: newsDetail, props: true},
    {name: 'shareDetail', path: '/share/:id', component: shareDetail, props: true}
  ]
});

// 导出路由对象
export default router;