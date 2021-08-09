<template>
    <div id="detail">
        <detailnavbar ref="nav" @navbarclick="navbarclick" class="detailnavbar"></detailnavbar>
        <BScroll
        class="wrapper" ref="BScroll" 
        @scroll="contentscroll" >
            <childswiper ref="shoptop" @swiperimageload="swiperimageload" :goodsdetail="swiperlist"></childswiper>
            <goodsinfo v-if="goodsdetail" :goodsinfo="goodsdetail"></goodsinfo>
            <!-- this.goodsdetail 是个String。判断String长度大于0就是获取到了接口里面传来的数据。
            然后子组件一定可以获取到异步的那个值 -->
            <shopinfo v-if="goodsdetail.shopInfo"  :shopinfo="goodsdetail.shopInfo"></shopinfo>
            <!-- this.goodsdetail.shopInfo 是个object。判断object是否有值，如果有就是获取到了接口里
            面传来的数据。然后子组件一定可以获取到异步的那个值 -->
            <comment ref="comment" :rate="goodsdetail.rate"></comment>
            <goodsdetail ref="goodsdetail" @imageload="imageload" :detail="goodsdetail.detailInfo"></goodsdetail>
            
            <ul>
                <li v-for="item of 40" :key="item">
                    {{item}}
                </li>
            </ul>
        </BScroll>
        <backtop v-show="isshow" @click.native="click"></backtop>
        <detailtabbar class="detailtabbar"></detailtabbar>
    </div>
</template>

<script>
import backtop from 'components/common/backtop/backtop.vue'
import BScroll from 'components/common/scroll/BScroll.vue'

import {getdetail} from 'network/detail.js'

import comment from './childdetail/comment.vue'
import goodsdetail from './childdetail/goodsdetail.vue'
import detailtabbar from './childdetail/detailtabbar.vue'
import shopinfo from './childdetail/shopinfo.vue'
import goodsinfo from './childdetail/goodsinfo.vue'
import childswiper from './childdetail/childswiper.vue'
import detailnavbar from './childdetail/detailnavbar.vue'
export default {
    name:"detail",
    components:{
        detailnavbar,
        childswiper,
        goodsinfo,
        shopinfo,
        BScroll,
        detailtabbar,
        backtop,
        goodsdetail,
        comment
    },
    data(){
        return{
            iid:null,
            goodsdetail:{},
            sells:String,
            swiperlist:[],
            isshow:false,
            detailtop:0,
            commenttop:0,
            shoptop:0
        }
    },
    created(){
        
    },
    activated(){
        this.iid = this.$route.params.id
        this.getdetail(this.iid)
        this.swiperlist = []
        this.$refs.BScroll.bs.refresh()
        this.$refs.BScroll.bs.scrollTo(0,0,0)
    },
    methods:{
        getdetail(iid){
            getdetail(iid).then(res =>{
                this.goodsdetail = res.data.result
                console.log(this.goodsdetail);
                for (let i = 0; i < this.goodsdetail.itemInfo.topImages.length; i++) {
                    this.swiperlist.push(this.goodsdetail.itemInfo.topImages[i])
                }
                console.log(this.swiperlist);
                // if(this.goodsdetail.shopInfo.cSells>1000){
                //     this.sells = (this.goodsdetail.shopInfo.cSells/10000).toFixed(2)
                // } 
                // console.log(this.sells + '总销量');
            })
        },
        // 监听用户滚动位置
        contentscroll(position){
            if(-position.y > 400){
                this.isshow = true
            }else{
                this.isshow = false
            }
            // 商品联动
            if(this.commenttop > -position.y > 0 ){
                this.$refs.nav.curreindex = 0
            }else if(this.detailtop > -position.y && -position.y >= this.commenttop){
                this.$refs.nav.curreindex = 1
            }else if( -position.y >= this.detailtop){
                this.$refs.nav.curreindex = 2
            }
        },

        click(){
            this.$refs.BScroll.bs.scrollTo(0,0,300)
        },

        imageload(){
             console.log('图片加载完');
            // 当图片加载完成 再计算tabcontrol的高度
            this.tabcontrolheight()
        },
        tabcontrolheight(){
            this.$refs.BScroll.bs.refresh()
        },
        // 当swiper加载完时
        swiperimageload(){
            console.log(this.$refs.goodsdetail.$el.offsetTop);
            this.detailtop = this.$refs.goodsdetail.$el.offsetTop
            this.commenttop = this.$refs.comment.$el.offsetTop
            this.shoptop = this.$refs.shoptop.$el.offsetTop
        },

        navbarclick(e){
            console.log(e);
            if(e == 0){
                this.$refs.BScroll.bs.scrollTo(0,0,200)
            }
            else if(e == 2){
                this.$refs.BScroll.bs.scrollTo(0,-this.detailtop,200)
            }
            else{
                this.$refs.BScroll.bs.scrollTo(0,-this.commenttop,200)
            }
        }
    },
    destroyed(){
        console.log("销毁");
    }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
.detailnavbar{
    position: relative;
    z-index: 9;
}
.wrapper{
    /* calc 计算 */
    height: calc(100vh - 99px); 
    overflow: hidden;
}

/* .detailtabbar{
    
    
} */
</style>