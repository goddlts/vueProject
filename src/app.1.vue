<template>
  <!-- 此处有且只能有一个根节点 -->
  <div class="container">
    <header class="mui-bar mui-bar-nav">
			<a v-if="isShow" @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">VueCMS</h1>
		</header>
		<nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
      <router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    
    <router-view></router-view>
  </div>
    
</template>

<script>
  export default {
    data() {
      return {
        isShow: false
      }
		},
		methods: {
			goback() {
				this.$router.back();
			},
			judgeBack() {
				
			}
		},

		// 当刷新页面的时候，因为路由地址没有发生变化，没有执行watch，所以要在组件创建完毕后，判断是否显示后退按钮
		created() {
			let arr = ['/home', '/member', '/shopcar', '/search'];
			if (arr.indexOf(this.$route.path) == -1) {
				// 不存在
				this.isShow = true;
			} else { 
				this.isShow = false;
			}
		},
		// 当路由地址变化的时候。决定后退按钮显示或者隐藏
		// $router  路由对象  
		// $route   路由规则  当前的路由规则 path params
		watch: {
			'$route': function (newValue) {
				// 判断当前的路由地址 是否是  /home  /member /shopcar /search
				// console.log(newValue);
				let arr = ['/home', '/member', '/shopcar', '/search'];
				if (arr.indexOf(newValue.path) == -1) {
					// 不存在
					this.isShow = true;
				} else {
					this.isShow = false;
				}

			}
		}
  }
</script>

<style scoped>
  
</style>


