<template>
    <div id="home">
        <navbar >
            <div slot="center">首页</div>
        </navbar>

        <tabcontrol v-show="isshow" :ischoose="ischoose" class="tabcontrol"  @change="changegoodslist" :title="['流行','新款','精选']"></tabcontrol>

        <BScroll 
        class="wrapper" ref="BScroll"  
        @scroll="contentscroll" @pullingup="pullingup">
            <childswipe @imageload="imageload" class="childswipe" :bannerlist="bannerlist"></childswipe>
            <recommend :recommend="recommend"></recommend>
            <!-- 子组件传值给父组件 -->
            <tabcontrol ref="tabcontrol" :ischoose="ischoose" @change="changegoodslist" :title="['流行','新款','精选']"></tabcontrol>

            <goodslist v-if="ischoose==0" :goodslist="goods['pop'].list"></goodslist>
            <goodslist v-else-if="ischoose==1" :goodslist="goods['new'].list"></goodslist>
            <goodslist v-else :goodslist="goods['sell'].list"></goodslist>
        </BScroll>
        <backtop v-show="isshow" @click.native="backtopclick"/>
    </div>
</template>
<script>
import recommend from './childHome/recommend.vue'
import childswipe from './childHome/childswipe.vue'

import backtop from "components/common/backtop/backtop.vue"
import BScroll from "components/common/scroll/BScroll.vue"
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
        goodslist,
        BScroll,
        backtop
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
            isshow:false,
            offsetTop:0,
            once:false,
            curreindex:0,
            scrollY:0
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
        // 监听用户点击tabcontrol,改变样式
        changegoodslist(e){
            console.log(e);
            this.ischoose = e
            console.log(this.ischoose);
            if(this.scrollY < -this.offsetTop){
                this.$refs.BScroll.bs.scrollTo(0,-this.offsetTop,0)
            }
        },
        // 组件点击事件
        backtopclick(){
            this.$refs.BScroll.bs.scrollTo(0,0,300)  //500ms动画
            // ref 也可以获取组件信息
            console.log(this.$refs.BScroll);
        },
        // 监听用户滑动时
        contentscroll(position){
            this.scrollY = position.y
            if(position.y < -(this.offsetTop-44)){
                this.isshow = true
            }else if(position.y > -(this.offsetTop-44)){
                this.isshow = false
            }
        },
        // 上拉加载更多
        pullingup(){
            if(this.ischoose == 0){
                this.gethomedata('pop')
            }else if(this.ischoose == 1){
                this.gethomedata('new')
            }else{
                this.gethomedata('sell')
            }
        },
        // 图片加载完计算图片高度
        imageload(){
            console.log('图片加载完');
            // 当图片加载完成 再计算tabcontrol的高度
            this.tabcontrolheight()
        },
        tabcontrolheight(){
            console.log(this.$refs.tabcontrol.$el.offsetTop); 
            // 获取tabcontrol 的高度，用el元素获取
            // 只调用一次，用来计算tabcontrol 的高度 不同设备的高度
            // ~不一样所以不能写死
            this.offsetTop = this.$refs.tabcontrol.$el.offsetTop
        }
    },
    mounted(){
        console.log(this.$children[1]);
    },
    updated(){
        // 动态绑定数据完成渲染之前BScroll就开始执行了，所以导致 页面只有
        // 小量数据可以展示，应该在DOM更新完成之后在执行BScroll，所以调用
        // refresh()
        this.$nextTick(function(){
            // nextTich: 在下次 DOM 更新循环结束之后执行延迟回调
            // 在修改数据之后立即使用这个方法，获取更新后的 DOM。
            // 方法一：this.$children[1].bs.refresh()   
            this.$refs.BScroll.bs.refresh()
            // 调用子组件BScroll 里的bs.refresh()
          /*现在数据已经渲染完毕*/
          // 转者注：这里就可以调用bs.refresh() 方法了
        })
    },
   
    activated(){
        this.$refs.BScroll.bs.refresh()
    },

    deactivated(){
        // console.log(this.$refs.BScroll.bs);
        // console.log(this.scrollY);
        // this.scrollY = this.$refs.BScroll.scroll.y
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
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; */
}
.childswipe{
    margin-top: 44px;
}
.tabcontrol{
    position: fixed;
    top: 43px;
    left: 0;
    right: 0;
    z-index: 1;
}

.wrapper{
    /* calc 计算 */
    height: calc(100vh - 100px); 
    overflow: hidden;
}

</style>