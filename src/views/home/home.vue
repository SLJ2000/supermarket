<template>
    <div id="home">
        <navbar >
            <div slot="center">首页</div>
        </navbar>
        <childswipe :bannerlist="bannerlist"></childswipe>
        <recommend :recommend="recommend"></recommend>
        <!-- 子组件传值给父组件 -->
        <tabcontrol @change="changegoodslist" :title="['流行','新款','精选']"></tabcontrol>

        <goodslist v-if="ischoose==0" :goodslist="goods['pop'].list"></goodslist>
        <goodslist v-else-if="ischoose==1" :goodslist="goods['new'].list"></goodslist>
        <goodslist v-else :goodslist="goods['sell'].list"></goodslist>

    </div>
</template>
<script>
import recommend from './childHome/recommend.vue'
import childswipe from './childHome/childswipe.vue'

import navbar from "components/common/tabbar/navbar.vue"
import tabcontrol from "components/content/tabcontrol/tabcontrol.vue"
import goodslist from "components/content/goods/goodslist.vue"
// import {xxxx}  具体名 
// import xxx     export default
import {gethomemultidata ,gethomedata} from 'network/home.js'  //导入网络请求js
export default {
    name:'home',
    components:{
        navbar,
        childswipe,
        recommend,
        tabcontrol,
        goodslist
    },
    data(){
        return{
            banner:[],
            bannerlist:[],
            recommend:[],
            goods:{
                'pop' :{page:0, list:[]},
                'new' :{page:0, list:[]},
                'sell':{page:0, list:[]}
            },
            ischoose:0,
        }
    },
    created(){
        // 在组件创建的时候请求网络
        this.gethomemultidata()
        
        // home selldata
        this.gethomedata('sell')
        this.gethomedata('pop')
        this.gethomedata('new')
    },
    methods:{
        // 网络请求可以放在methods中
        gethomemultidata(){
            gethomemultidata().then(res =>{
            console.log(res)
            this.banner = res.data.data.banner;
            console.log(this.recommend)
            // 将异步数据整理，传给数组
            let bannerlist = []
            for (let i = 0; i < this.banner.list.length; i++) {
                bannerlist.push(this.banner.list[i])
            }
            this.bannerlist = bannerlist
            console.log(this.bannerlist)

            // let recommend = []
            for (let i = 0; i < res.data.data.recommend.list.length; i++) {
                this.recommend.push(res.data.data.recommend.list[i])
            }
            // this.recommend = recommend
            console.log(this.recommend)
        })
        },

        gethomedata(type){
            const page = this.goods[type].page + 1
            gethomedata(type,page).then(res =>{
                this.goods[type].page = page
                console.log(res);
                for (let i = 0; i < res.data.data.list.length; i++) {
                    this.goods[type].list.push(res.data.data.list[i])
                    
                }
            })
        },

        changegoodslist(e){
            console.log(e);
            this.ischoose = e
            console.log(this.ischoose);
        }
    }
}
</script>
<style scoped>
/* 样式重叠，跟navbar的样式重叠的，名样式字一样 */
.nav-bar{
    /* 背景颜色在不同组件不确定，所以不能写死 */
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  background-color: #f6f6f6;
  /* 首页navbar固定 */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
#home{
    /* 让内容不与首页navbar冲突覆盖 */
    margin-top: 44px;
}
.control{
    position: sticky;
    top: 44px;
}
</style>