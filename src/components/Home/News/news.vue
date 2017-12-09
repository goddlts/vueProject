<template>
  <div class="mui-content">
    <ul class="mui-table-view">
				<li v-for="item in news" :key="item.id" class="mui-table-view-cell mui-media">
					<router-link :to="{name: 'newsDetail', params: {id: item.id}}">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body  mui-ellipsis">
							{{item.title}}
							<p class='time'>
                <span>发表时间：{{item.add_time | fmtdate('YYYY-MM-DD')}}</span>
                <span>点击次数：{{item.click}}</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: []
    }
  },
  created() {
    // 提示正在加载
    // this.$indicator.open('正在加载...');
    this.getnews();
  },
  methods: {
    getnews() {
      this.$http
        .get('getnewslist')
        .then((response) => {
          if (response.status === 200 && response.data.status === 0) {
            this.news = response.data.message;
          } else {
            console.log('服务器内部错误');
          }
          // 关闭加载提示
          this.$indicator.close();
        })
        .catch((err) => {
          console.error(err);
          // this.$indicator.close();
        })
    }
  }
}
</script>

<style scoped>
  .mui-content > .mui-table-view:first-child {
    margin-top: 0;
  }
  .mui-media-body {
    font-size: 15px;
  }
  .time {
    color: #0094ff;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
</style>


