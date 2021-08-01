<template>
    <div class="control">
        <div :class="{active: index == curreindex}" @click="click(index)" v-for="(item ,index)  in title" :key="index"  class="item" >
            <span >{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'tabcontrol',
    props:{
        title:Array,
        default(){
            return []
        }
    },
    data(){
        return {
            curreindex:0
        }
    },
    methods:{
        click(e){
            this.curreindex = e
            console.log(e);
            // 发射
            this.$emit('change',e) //触发父组件中handleChange事件并传参Jack
            // 注：此处事件名称与父组件中绑定的事件名称要一致
        }
    }
}
</script>
<style scoped>
.control{
    height: 50px;
    width: 100%;
    text-align: center;
    display: flex;
    font-size: 20px;
    background-color: #f6f6f6;
}
.item{
    line-height: 40px;
    flex: 1;
    height: 40px;
}
.active{
    color: red;

}
.active span{
    padding-bottom: 7px;
    border-bottom: solid 2px red;
}
</style>