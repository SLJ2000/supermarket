<template>
<div class="line">
    <div class="detail">
        <div  class="desc">
            {{detail.desc}}
        </div>
        <div v-if="detail.detailImage" class="detailImage">
            {{detail.detailImage[0].key}}
            <img width="100%" v-for="item in detail.detailImage[0].list" 
            :key="item" :src="item" @load="imageload" alt="">
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"goodsdetail",
    props:{
        detail:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    updated(){
        console.log(this.detail);
    },
    methods:{
        imageload(){
            this.$emit('imageload')
        }
    }
}
</script>
<style scoped>
.line{
    border-top:  4px solid rgb(221, 221, 221) ;

}
.detail{
    width: 95%;
    margin: 0 auto;
}
.desc{
    margin-top: 10px;
}
.detailImage{
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}
</style>
