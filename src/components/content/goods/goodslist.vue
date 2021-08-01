<template>
    <div id="goodlistbox">
        <goodslistitem v-for="(item,index) in goodslist" :key="index" :goodlistitem="item"></goodslistitem>
    </div>
</template>
<script>
import goodslistitem from './goodslistitem.vue'
export default {
    name:'goodslist',
    components:{
        goodslistitem,
    },
    props:{
        goodslist:{
            type:Array,
            default(){
                return []
            }
        }
    },
    created(){
        console.log(this.goodslist)
    }
}
</script>
<style scoped>
#goodlistbox{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap:wrap;
}
</style>
