<template>
    <div class="shopinfo">
        <div class="name">
            <span>
                <img width="14px" :src="shopinfo.services[0].icon" alt="">
                {{shopinfo.services[0].name}}
            </span>
            <span>
                <img width="14px" :src="shopinfo.services[1].icon" alt="">
                {{shopinfo.services[1].name}}
            </span>
            <span>
                <img width="14px" :src="shopinfo.services[2].icon" alt="">
                {{shopinfo.services[2].name}}
            </span>
        </div>

        <div class="shop"> 
            <div class="img">
                <img  width="60px" :src="shopinfo.shopLogo" alt="">
            </div>
            <div class="shopname">
                <span>{{shopinfo.name}}</span>

            </div>
        </div>

        <div class="shopservice">
            <div class="left">
                <div class="csell">
                    <p v-if="shopinfo.cSells>10000" style="font-size:25px">{{sells}}万</p>
                    <p v-else style="font-size:25px">{{shopinfo.cSells}}</p>
                    <p>总销量</p>
                </div>
                <div class="cgoods">
                    <p style="font-size:25px">{{shopinfo.cGoods}}</p>
                    <p>全部宝贝</p>
                </div>
            </div>

            <div class="right">
                <div>
                    <span >描述相符</span>
                    <span style="margin-left:20px">{{shopinfo.score[0].score}}</span>
                    <span class="true" v-if="shopinfo.score[0].isBetter">高</span>
                    <span class="false" v-else>低</span>
                </div>
                <div>
                    <span >价格合理</span>
                    <span style="margin-left:20px">{{shopinfo.score[1].score}}</span>
                    <span class="true" v-if="shopinfo.score[1].isBetter">高</span>
                    <span class="false" v-else>低</span>
                </div>
                <div>
                    <span >质量满意</span>
                    <span style="margin-left:20px">{{shopinfo.score[2].score}}</span>
                    <span class="true" v-if="shopinfo.score[2].isBetter">高</span>
                    <span class="false" v-else>低</span>
                </div>
            </div>
        </div>
        <div class="entershop"><span>进店逛逛</span></div>
    </div>
</template>
<script>
export default {
    name:"shopinfo",
    props:{
        shopinfo:{
            type:Object,
            defualt:{}
        },
        // csells:{
        //     type:String,
        //     defualt:""
        // },
    },
    data(){
        return{
            sells:null
        }
    },
    updated(){
        console.log(this.shopinfo);
        if(this.shopinfo.cSells>1000){
            this.sells = (this.shopinfo.cSells/10000).toFixed(2)
        }  
    }
}
</script>
<style  scoped>
.name{
    display: flex;
    padding-bottom: 30px;
    border-bottom:5px solid  rgb(221, 221, 221);
}
.name span{
    flex: 1;
}
.shopinfo{
    padding-bottom: 20px;
    margin-top: 30px;
    border-bottom:5px solid rgb(221, 221, 221) ;
}
.shop{
    display: inline-flex;
    padding-bottom: 30px;
}
.img{
    margin-left: 30px;
    margin-top: 30px;
    height: 60px;
    width: 60px;
    border-radius: 50px;
    border: 1px solid black;
}
.img img{
    border-radius: 50px;
}
.shopname{
    padding-top: 20px;
    text-align: center;
    font-size: 25px;
    margin:  auto 0;

}
.shopname span{
    margin-left: 20px;
    color: rgb(156, 156, 156);
}

.shopservice{
    height: 130px;
    display: flex;
}
.left{
    flex: 1;
    height: 100px;
    display: flex;
    text-align: center;
    line-height: 10px;
    border-right: 1px solid rgb(211, 211, 211);
}
.csell{
    flex: 1;
}
.cgoods{
    flex: 1;
}

.right{
    flex: 1;
     height: 100px;
    display:flex ;
    flex-direction:column;
}
.right div{
    flex: 1;
    margin-left: 20px;
     margin-top: 2px;
}
.true{
    margin-right:10px;
    background-color:red;
    float:right;
    color: white;
}
.false{
    margin-right:10px;
    background-color:green;
    float:right;
    color: white;
}

.entershop{
    margin: 0 auto;
    text-align: center;
    height: 40px;
    width: 120px;
    background-color: rgb(235, 235, 235);
    border-radius: 20px;
}
.entershop span{
    line-height: 40px;
    
}
</style>