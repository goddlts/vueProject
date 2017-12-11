<template>
    <div class="mui-content">
        <div class="detail">
            <div class="top">
              <img src="http://127.0.0.1:8899/upload/201504/20/thumb_201504200046594439.jpg" alt="">
            </div>
        </div>
        <div class="sell">
            <h4>荣耀 手机</h4>
            <div class="price">
                市场价：<s>￥2222</s> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 销售价：<span>￥1111</span>
            </div>
            <div class="num">
                购买数量：xxx
                <div class="ball"></div>
            </div>
            <div class="button">
                <button class="mui-btn mui-btn-primary">立刻购买</button>
                <button class="mui-btn mui-btn-danger">加入购物车</button>
            </div>
        </div>

        <div class="param">
            <h5>商品参数</h5>
            <div class="info">
                <p>商品编号：xxxx</p>
                <p>库存情况：60件</p>
                <p>上架时间：2016-10-10 00:00:00</p>
            </div>
        </div>
        
        <div class="footer">
            <a class="mui-btn mui-btn-primary mui-btn-outlined">图文介绍</a>
            <a class="mui-btn mui-btn-danger mui-btn-outlined">商品评论</a>
        </div>
    </div>
</template>

<script>
 
    //导出组件
    export default {
        data() {
            return {

            }
        } 
    }
</script>

<style scoped>
    .num {
        position: relative;
    }
    
    .ball {
        left: 115px;
        top: 3px;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: red;
        transition: all 0.5s linear;
        z-index: 1000;
        
    }
    
    .mui-content {
        background-color: #fff;
    }
    
    .top,
    .sell,
    .param,
    .footer {
        border: 1px solid rgba(92, 92, 92, 0.7);
        border-radius: 5px;
        margin: 5px;
        padding: 10px;
    }
    
    .sell h4 {
        color: dodgerblue;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .price,
    .num,
    .button {
        margin: 10px;
        font-size: 15px;
    }
    
    .price span {
        font-size: 18px;
        color: red;
    }
    
    .param h5 {
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .info {
        margin-top: 10px;
        margin-left: 20px;
    }
    
    .info p {
        margin: 0;
    }
    
    .footer .mui-btn {
        width: 100%;
    }
    
    .footer .mui-btn-danger {
        margin-top: 10px;
    }
</style>
