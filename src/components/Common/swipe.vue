<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item, index) in images" :key="index">
      <a :href="item.url">
        <img :src="item.img" alt="">
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  data() {
    return {
      images: []
    }
  },
  created() {
    this.getlunbo();
  }, 
  props: ['imgUrl'],
  methods: {
    // 获取轮播图数据
    getlunbo() {
      this.$http
        .get(this.imgUrl)
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
    }
  }
}
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
</style>


