<template>
    <div class="tabbar">
        <div class="left">
            <div class="kefu">
                <img width="30px" src="~assets/img/客服.png" alt="">
                <p>客服</p>
            </div>
            <div class="shop">
                <img width="30px" src="~assets/img/店铺.png" alt="">
                <p>店铺</p>
            </div>
            <div class="shoucang">
                <img width="30px" src="~assets/img/收藏.png" alt="">
                <p>收藏</p>
            </div>
        </div>
        <div class="right">
            <div class="car">
                <p>加入购物车</p>
            </div>
            <div class="buy">
                <p>购买</p>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name:"detailtabbar"
}
</script>
<style scoped>
.tabbar{
    height: 55px;
    display: flex;
}
.left{
    flex: 1;
    display: flex;
    text-align: center;

}
.left div{
    flex:1;
}
.left p{
    margin: 0;
}
.left img{
    margin-top: 1px;
}

.right{
    flex: 1;
    display: flex;
    text-align: center;
}
.car{
    flex: 1;
    background-color: rgb(255, 255, 83);
}
.buy{
    flex: 1;
    background-color: rgb(255, 82, 82);
}
</style>
