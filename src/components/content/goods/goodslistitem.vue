<template>
        <div @click="detailclick" class="box">
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
        // console.log(this.goodlistitem);
    },
    methods:{
        detailclick(){
            console.log("跳转详情页");
            // 用query传商品ID，再根据ID调用详细资料
            this.$router.push("/detail/"+this.goodlistitem.iid )
        }
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