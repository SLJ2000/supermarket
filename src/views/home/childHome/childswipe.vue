<template>
    <div>
        <!-- 然后vue渲染机制中：异步数据先显示初始数据，再显示带数据的数据，
        渲染时先加载异步的数据，而banner还是空的，但是界面可以显示。渲染后，banner才加载好，
         -->
         <!-- 如果有length说明加载完了，再显示 -->
        <div v-if="bannerlist.length">
            
            <!-- 轮播图 -->
                <swiper>
                        <img @load="imageload" idnex="1" width="100%"   slot="pho1" :src="bannerlist[0].image923" >
                        <img idnex="2" width="100%" slot="pho2" :src="bannerlist[1].image923" >
                        <img idnex="3" width="100%" slot="pho3" :src="bannerlist[2].image923" >
                        <img idnex="4" width="100%" slot="pho4" :src="bannerlist[3].image923" >
                </swiper>
        </div>

        </div>
</template>
<script>
import swiper from "components/common/swiper/swiper.vue"

export default {
    name:"childswipe",
    components:{
        swiper,
    },
    data(){
        return {
        }
    },
    props:{
        bannerlist:{
            type:Array,
            default:() =>[]
        }
    },
    methods:{
        imageload(){
            this.$emit('imageload')
        }
    },
    uodated(){
        
    }
}
</script>
<style scoped>

</style>