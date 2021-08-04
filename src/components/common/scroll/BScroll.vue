<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot/>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"BScroll",
    data(){
        return {
            bs:null,
            isshow:false

        }
    },
    mounted(){
        this.bs = new BScroll(this.$refs.wrapper ,{
            probeType:3, //滑动显示xy
            tap:true,
            click:true,  //click事件
            scrollY:true,
            pullUpLoad: true
        })
         // 监听用户滚动时
        this.bs.on('scroll',(position)=>{
            // 发射position
            this.$emit('scroll',position)
        })
        // 监听用户底部上拉时
        this.bs.on('pullingUp',()=>{
            console.log('上拉加载');
            setTimeout(() => {
            // 上拉发射事件，让 home页面做网络请求
                this.bs.finishPullUp()
            }, 2000);
            this.$emit('pullingup')
            
        })
        this.bs.refresh()

    },
}
</script>
<style scoped>

</style>