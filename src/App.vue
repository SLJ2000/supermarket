<template>
  <div id="app">
    <tabbar>
     <TabbarItem @click="getsel" path='home' :select='sel'>
       <!-- DOM对象用别名需要加上 " ~ "符号 -->
       <img slot="item-icon" src="~assets/img/首页.png" alt="">
       <img slot="item-icon-active" src="~assets/img/首页red.png" alt="">
       <p slot="item-text">首页</p>
     </TabbarItem>
     <TabbarItem @click="getsel" path='fenlei' :select='sel'>
       <img slot="item-icon" src="~assets/img/分类.png" alt="">
       <img slot="item-icon-active" src="~assets/img/分类red.png" alt="">
       <p slot="item-text">分类</p>
     </TabbarItem>
     <TabbarItem @click="getsel" path='cart' :select='sel'>
       <img slot="item-icon" src="~assets/img/购物车.png" alt="">
       <img slot="item-icon-active" src="~assets/img/购物车red.png" alt="">
       <p slot="item-text">购物车</p>
     </TabbarItem>
     <TabbarItem @click="getsel" path='mine' :select='sel'>
       <img slot="item-icon" src="~assets/img/我的.png" alt="">
       <img slot="item-icon-active" src="~assets/img/我的red.png" alt="">
       <p slot="item-text">我的</p>
     </TabbarItem>
    </tabbar>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar.vue'
import TabbarItem from 'components/common/tabbar/TabbarItem.vue'

export default {
  name:'APP',
  components:{
    tabbar,
    TabbarItem
  },
  data(){
    return{
      sel:'home'
    }
  },
  methods:{
    // TabbarItem组件发射$emit
    getsel(res){
      console.log(res)
      this.sel = res
    }
  }

}
</script>

<style lang="scss">
@import 'assets/css/base.css';
</style>
