<template>
    <div>
        <navbar>
            <div class="left" slot="left" @click="back">
                <img src="~assets/img/返回.png" alt="">
            </div>
            <div class="center" slot="center">
                <div  :class="{active:index ===curreindex}" 
                v-for="item,index in title" :key="item"
                class="navbaritem" @click="click(index)">
                    {{item}}
                </div>
            </div>

        </navbar>

    </div>
</template>
<script>
import navbar from 'components/common/tabbar/navbar.vue'
export default {
    name:"detailnavbar",
    components:{
        navbar
    },
    data(){
        return {
            title:['商品','评论','详情'],
            curreindex:0
        }
    },
    methods:{
        click(e){
            this.curreindex = e
            this.$emit('navbarclick',e)
        },
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.active{
    color: red;
}
.center{
    display: flex;
}
.navbaritem{
    /* 均等分 */
    flex: 1;
}
.left img {
    height: 30px;
    margin-top: 6px ;
}
</style>