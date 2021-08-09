<template>
    <div class="comment">
        <div class="usercomment">
            <div>
                <span>用户评价</span>
            </div>
            <div>
                <span style="float:right;">更多</span>
            </div>
        </div>
        <div v-if="rate.list" class="user">
            <img width="40px" :src="rate.list[0].user.avatar" alt="">
            <span>{{rate.list[0].user.uname}}</span>
        </div>
        <div v-if="rate.list" class="rate">
            <div>{{rate.list[0].content}}</div>
            <div class="ratetime">
                <span>{{ rate.list[0].created | showDate}}</span>
                <span>{{rate.list[0].style}}</span>
            </div>
            <div class="explain" v-if="rate.list[0].explain">{{rate.list[0].explain}}</div>
        </div>
    </div>
</template>
<script>
import {formatDate} from "./util"

export default {
    name:"comment",
    props:{
        rate:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return{
        }
    },
    updated(){
       
    },
    filters: {
    showDate(value) {
      // 1.将时间戳转为Date对象
      const date = new Date(value * 1000);
      // 2.将date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
}
</script>
<style scoped>
.comment{
    margin: 0 auto;
    width: 95%;
    margin-bottom: 10px;
}
.usercomment{
    display: flex;
    height: 50px;
    border-bottom: 1px solid rgb(214, 214, 214);
}
.usercomment div{
    margin: auto 0;
    flex: 1;
}
.user{
    margin-top: 10px;
    display: flex;
}
.user span{
    margin-left: 20px;
    line-height: 40px;
}
.rate{
    margin-top: 10px;
    color: rgb(59, 59, 59);
}
.ratetime{
    margin-top: 10px;
    font-size: 14px;
    color: rgb(129, 129, 129);
}
.ratetime span{
    margin-right: 10px;
}
.explain{
    margin-top: 20px;
}
</style>