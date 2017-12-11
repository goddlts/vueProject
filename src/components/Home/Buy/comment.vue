<template>
  <div class="mui-content">
    <comment :id="id"></comment>
  </div>
</template>

<script>

// 导入评论组件
import comment from '../../Common/comment.vue';

export default {
  props: ['id'],
  components: {
    comment
  }
  
}
</script>

<style scoped>

</style>
