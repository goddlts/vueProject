<template>
  <div class="mui-content">
    <div class="title">
      <h3>{{news.title}}</h3>
      <span>{{news.add_time | fmtdate('YYYY-MM-DD')}}&nbsp;&nbsp;&nbsp;&nbsp;{{news.click}}次浏览</span>
    </div>

    <!-- 通过v-html插入到文档中的内容，不会应用style scoped中的样式 -->
    <div class="details" v-html="news.content">
      
    </div>

    <!--  评论 -->
      <div class="comment">
        <!--添加评论-->
        <h4>提交评论</h4>

        <div class="submitcomment">
            <textarea placeholder="请输入评论内容"></textarea>
            <button class="mui-btn mui-btn-primary">发表</button>
        </div>
            
        <div class="title">
            <h4>评论列表</h4>
        </div>    
        
        <!--评论列表-->
        
        <div v-for="(item, index) in comments" :key="index" class="item">
            <div class="content">
              {{item.content}}
            </div>
            <div>
              <span class="user">
                {{item.user_name}}
              </span>  
              <span>
                {{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}
              </span>
            </div>
        </div>

        <div class="more">
            <button class="mui-btn mui-btn-primary mui-btn-outlined">加载更多</button>
        </div>

    </div>
  </div>
</template>


<script>
  import '../../../../statics/css/style.css'

  export default {
    data() {
      return {
        news: {},
        comments: []
      }
    },
    props: ['id'],
    created() {
      this.getdetail();
      this.getcomments();
    },
    methods: {
      // 获取新闻详细信息
      getdetail() {
        this.$http
          .get('getnew/' + this.id)
          .then((response) => {
            if (response.status === 200 && response.data.status === 0) {
              if (response.data.message.length > 0) {
                this.news = response.data.message[0];
              }
            }
          })
      },
      // 根据id获取新闻对应的评论
      getcomments() {
        let url = 'getcomments/'+ this.id +'?pageindex=1';
        this.$http
          .get(url)
          .then((response) => {
             if (response.status === 200 && response.data.status === 0) {
               this.comments = response.data.message;
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
.mui-content {
    background-color: #fff;
  }
  .title {
    padding: 10px 5px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.1);
  }
  .title h3 {
    font-size: 16px;
    font-weight: bold;
    color: #0094ff;
  }
  .title span {
    color: rgba(92, 92, 92, 0.7);
    font-size: 12px;
  }
  .details {
    padding: 5px 5px;
    overflow: hidden;;
  }

  /*  评论的样式 */
    .submitcomment {
        text-align: center;
    }
    
    .submitcomment textarea {
        margin-top: 10px;
        padding: 0;
        width: 96%;
        height: 60px;
    }
    
    .submitcomment button {
        width: 96%;
    }
    
    .comment .title {
        border-top: 1px solid rgba(92, 92, 92, 0.4);
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
        margin: 20px 0 0 0;
        vertical-align: middle;
        padding: 10px 0;
    }
    
    .item {
        padding: 15px 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
    }
    
    .item div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }
    
    .item span {
        font-size: 15px;
    }
    
    .item .user {
        color: skyblue;
    }
    
    .more {
        margin: 10px 0;
        text-align: center;
    }
    
    .more>button {
        width: 96%;
    }
</style>
