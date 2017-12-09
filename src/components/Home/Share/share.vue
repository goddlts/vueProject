<template>
  <div class="mui-content">
    <div class="title">
      <ul :style="ulWidth">
          <li>
              <a @click.prevent="getimages(-1)" href="javascript:;">全部</a>
          </li>
          <li v-for="item in menus" :key="item.id">
              <a @click.prevent="getimages(item.id)" href="javascript:;">{{item.title}}</a>
          </li>
      </ul>
    </div>

    <div class="images">
      <ul>
          <li v-for="item in images" :key="item.id">
              <router-link :to="{name: 'shareDetail', params: {id: item.id}}">
                  <img :src="item.img_url" alt="">
                  <p class="cover">
                      <span>{{item.title}}</span><br>
                      {{item.zhaiyao}}
                  </p>
              </router-link>
          </li>
          
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 分类数据
      menus: [],
      ulWidth: 'width: 600px',
      images: []
    }
  },
  created() {
    this.getmenus();
    // 获取所有分类的图片
    this.getimages(-1);
  },
  methods: {
    // 获取分类数据
    getmenus() {
      this.axios
        .get('getimgcategory')
        .then((response) => {
          if (response.status === 200 && response.data.status === 0) {
            this.menus = response.data.message;
            // 计算ul的宽度
            this.ulWidth = 'width: ' + (78 * this.menus.length + 50) + 'px';
          } else {
            console.log('服务器内部错误');
          }
        })
        .catch((err) => {
          console.error(err);
          // console.warn
        })
    },
    getimages(id) {
      let url = 'getimages/' + id;
      this.axios
        .get(url)
        .then((response) => {
          if (response.status === 200 && response.data.status === 0) {
            this.images = response.data.message;
          } else {
            console.log('服务器内部错误');
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
ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
  }
  
  .title {
      overflow-x: auto;
      overflow-y: hidden;
  }
  
  .title>ul {
      width: 1000px;
  }
  /* webkit核心的浏览器 隐藏滚动条 */
  ::-webkit-scrollbar {
    display:none;
  }
  
  .title>ul>li {
      display: inline-block;
      padding: 20px 5px;
  }
  
  .images {
      margin-top: 10px;
  }
  
  .images>ul {}
  
  .images img {
      height: 300px;
      width: 100%;
  }
  
  .images>ul>li {
      position: relative;
  }
  
  .images .cover>span {
      font-weight: bold;
  }
  
  .images .cover {
      color: #fff;
      position: absolute;
      left: 0px;
      bottom: 0px;
      background-color: rgba(92, 92, 92, 0.4);
      width: 100%;
      margin-bottom: 5px;
  }
</style>


