<template>
<!-- 推荐页面 -->
    <div class="recommend">
       <div class="item" v-for="item  in recommend" :key="item.sort">
           <a :href="item.link"></a>
           <img :src="item.image" >
            <p>{{item.title}}</p>
       </div>
    </div>
</template>

<script>
export default {
    name:'recommend',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
    updated(){
        if(this.recommend != [])
        console.log(this.recommend);
    }
}
</script>
<style scoped>
.recommend{
    height: 150px;
    width: 100%;
    display: flex;
    text-align: center;
    border-bottom: 8px solid rgb(235, 235, 235);
}
.item{
    /*    平均分布 */
    flex: 1;
    margin-top: 10px;
}
.item img{
    height: 90px;
    width: 90px;
    margin-bottom: -10px;
}
</style>