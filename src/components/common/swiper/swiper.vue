
<template>

    <div class="swipe">
        <van-swipe  class="my-swipe" :autoplay="3000" indicator-color="white">
            <slot></slot>
        </van-swipe>
    </div>
    
</template>
<script>

import { Swipe} from 'vant';
export default {
    name:'swiper',
    components:{
        [Swipe.name]:Swipe,
    },
    data(){
        return{

        }
    },
    methods:{
       
    }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
  }
</style>