<template>
        <div class="box">
            <img class="imgbox" :src="goodlistitem.show.img" alt="">
            <span class="span">{{goodlistitem.title}}</span>
            <span >价格：￥{{goodlistitem.price}}</span>
            <span >收藏数：{{goodlistitem.cfav}}</span>
        </div>
</template>
<script>
export default {
    name:'goodslistitem',
    props:{
        goodlistitem:{
            type:Object,
            default(){
                return []
            }
        }
    },
    created(){
        console.log(this.goodlistitem);
    }
}
</script>
<style scoped>
.box{
    height: 340px;
    width: 45%;
    display: flex;
    flex-direction:column;
    margin: 10px;
}
.imgbox{
    height: 278px;
    widows: 184px;
}
.span{
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    overflow: hidden;
}
</style>