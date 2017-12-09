<template>
  <div class="mui-content">
    <!-- 轮播图 -->
    <wodeswipe :imgUrl="img_url"></wodeswipe>
    <!-- 9宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li v-for="item in menus" :key="item.url" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="item.url">
          <span class="mui-icon" :class="item.className"></span>
          <div class="mui-media-body">{{item.title}}</div>
        </router-link>
      </li>
  </ul> 
  </div>
</template>

<script>
// 导入轮播图的组件
import swipe from '../Common/swipe.vue';

export default {
  data() {
    return {
      menus: [],
      img_url: 'getlunbo'
    };
  },
  created() {
    this.getmenus();
  },
  methods: {
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
  },
  components: {
    // swipe: swipe
    wodeswipe: swipe
  }
};
</script>

<style scoped>
  

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


