import {request1,request2} from './requests'

// home.js作为中间层，home.js面向request.js 
// home.vue面向home.js 避免home.vuejs代码臃肿
export function gethomemultidata(){
    return request1({ //function
        url:'/home/multidata'  //config
    })
}
// 商品信息
export function gethomedata(type,page){
    return request2({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}