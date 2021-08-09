<template>
    <div>
        <SwipeItem>
            <slot></slot>
        </SwipeItem>
    </div>
</template>
<script>
import { SwipeItem } from 'vant';
export default {
    name:"swiperitem",
    components:{
        SwipeItem
    }
}
</script>
<style scoped>

</style>