<template>
  <div class="mui-content">
    <!-- 轮播图 -->

    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in images" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item>
      <!-- <mt-swipe-item>
        <a href="#">
          <img src="../../../statics/images/shuijiao.jpg" alt="">
        </a>
      </mt-swipe-item>
      <mt-swipe-item>
        <a href="#">
          <img src="../../../statics/images/shuijiao.jpg" alt="">
        </a>
      </mt-swipe-item> -->
    </mt-swipe>

    <!-- 9宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li v-for="item in menus" :key="item.url" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="item.url">
          <span class="mui-icon" :class="item.className"></span>
          <div class="mui-media-body">{{item.title}}</div>
        </router-link>
      </li>
      <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon icon-share"></span>
              <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon icon-buy"></span>
              <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon icon-feedback"></span>
              <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon icon-video"></span>
              <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <span class="mui-icon icon-contact"></span>
              <div class="mui-media-body">联系我们</div></a></li> -->
      
  </ul> 
  </div>
</template>

<script>
import Vue from 'vue';

// 引入mint-ui中的组件   按需引用
import { Swipe, SwipeItem } from 'mint-ui';
// 引用mint-ui的样式
import 'mint-ui/lib/style.css';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


export default {
  data() {
    return {
      images: [],
      menus: []
    };
  },
  created() {
    this.getlunbo();
    this.getmenus();
  },
  methods: {
    // 获取轮播图数据
    getlunbo() {
      this.$http
        .get('getlunbo')
        .then((response) => {
          if (response.status === 200 && response.data.status === 0) {
            this.images = response.data.message;
          } else {
            console.log('请求服务器出错');
          }
        })
        .catch((err) => {
          console.error(err);
        })
      
    },
    // 获取9宫格数据
    getmenus() {
      this.$http
        .get('getmenus')
        .then((response) => {
          if (response.status === 200 && response.data.status === 0) {
            this.menus = response.data.message;
          } else {
            console.log('服务器内部错误');
          }
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }
};
</script>

<style scoped>
  /* 轮播图样式 */
  .mint-swipe {
    height: 250px;
  }
  .mint-swipe img {
    width: 100%;
    height: 100%;
  }

  /* 9宫格的样式 */
  .icon-news {
    width: 50px;
    height: 50px;
    background-image: url(../../../statics/images/menu1.png);
    /* 让背景图片缩放到和大小一致 */
    background-repeat: round;
  }

  .icon-share {
    width: 50px;
    height: 50px;
    background-image: url(../../../statics/images/menu2.png);
    /* 让背景图片缩放到和大小一致 */
    background-repeat: round;
  }

  .icon-buy {
    width: 50px;
    height: 50px;
    background-image: url(../../../statics/images/menu3.png);
    /* 让背景图片缩放到和大小一致 */
    background-repeat: round;
  }

  .icon-feedback {
    width: 50px;
    height: 50px;
    background-image: url(../../../statics/images/menu4.png);
    /* 让背景图片缩放到和大小一致 */
    background-repeat: round;
  }

  .icon-video {
    width: 50px;
    height: 50px;
    background-image: url(../../../statics/images/menu5.png);
    /* 让背景图片缩放到和大小一致 */
    background-repeat: round;
  }

  .icon-contact {
    width: 50px;
    height: 50px;
    background-image: url(../../../statics/images/menu6.png);
    /* 让背景图片缩放到和大小一致 */
    background-repeat: round;
  }

  .mui-content > .mui-table-view:first-child {
    margin-top: 0;
  }
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
  }
</style>


