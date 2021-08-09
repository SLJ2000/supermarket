<template>
    <div   class="info">
        <div>
            <p v-if="goodsinfo.itemInfo" style="font-size:20px">{{goodsinfo.itemInfo.title}}</p>

        </div>
        <div v-if="goodsinfo.itemInfo" class="price">
            <span style="color:red;font-size:30px;">{{goodsinfo.itemInfo.price}}</span>
            <span style="line-height:40px;margin-left:10px">{{goodsinfo.itemInfo.oldPrice}}</span>
            <div class="discount">
            <span>{{goodsinfo.itemInfo.discountDesc}}</span>
            </div>
        </div>
        <div v-if="goodsinfo.columns" class="columns">
            <span >{{goodsinfo.columns[0]}}</span>
            <span style="text-align:center">{{goodsinfo.columns[0]}}</span>
            <span style="text-align:right">{{goodsinfo.columns[0]}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"goodsinfo",
    props:{
        goodsinfo:{
            type:Object,
            defualt:{}
        }   
    },
    updated(){
        
    },
    activated(){
        console.log(this.goodsinfo);
    }

}
</script>
<style scoped>
.info {
    width: 95%;
    margin: 0 auto ;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(221, 221, 221);
}
.price{
    text-align: center;
    display: flex;
    height: 50px;
}
.discount{
    color: white;
    margin-left: 10px;
    width: 80px;
    height: 22px;
    background-color: #f37bbd;
    border-radius: 20px;
}
.columns{
    display: flex;
}
.columns span{
    flex: 1;
    color: rgb(119, 119, 119);
}
</style>