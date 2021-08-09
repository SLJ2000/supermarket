<template>
        <div v-if="goodsdetail">
             <swiper class="swiper">
                <swiperitem class="swiperitem" v-for="item,index in goodsdetail" :key="index">
                    <img @load="imageload" width="100%" :src="item" alt="">
                </swiperitem>
            </swiper>
        </div>
       
</template>
<script>
import swiper from "components/common/swiper/swiper.vue"
import swiperitem from "components/common/swiper/swiperitem.vue"
export default {
    name:"childswiper",
    components:{
        swiper,
        swiperitem
    },
    props:{
        goodsdetail:{
            type:Array,
            defulat:[]
        }
    },
    data(){
        return{}

    },
    updated(){
    },
    methods:{
        imageload(){
            let emit = true
            if(emit){
                this.$emit('swiperimageload')
                emit = false
            }
        }
    }
}
</script>
<style scoped>
.swiper{
    height: 400px;
}
.swiperitem{
    height: 400px;
    width: 100%;
}
</style>