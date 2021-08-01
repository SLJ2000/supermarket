
<template>

    <div class="swipe">
        <van-swipe  class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item @click="click(1)">
                <slot name="pho1"></slot>
            </van-swipe-item>
            <van-swipe-item @click="click(2)">
                <slot name="pho2"></slot>
            </van-swipe-item>
            <van-swipe-item @click="click(3)">
                <slot name="pho3"></slot>
            </van-swipe-item>
            <van-swipe-item @click="click(4)">
                <slot name="pho4"></slot>
            </van-swipe-item>
        </van-swipe>
    </div>
    
</template>
<script>

import { Swipe, SwipeItem } from 'vant';

export default {
    name:'swiper',
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem
    },
    data(){
        return{

        }
    },
    methods:{
        click(event){
            console.log(event)
        }
    }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
  }
</style>