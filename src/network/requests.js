import axios from "axios";


export function request2(config){
    const instance2 = axios.create({
        baseURL:'http://152.136.185.210:7878/api/m5',
        timeout:5000
    })
    instance2.interceptors.request.use(config =>{
        console.log(config)
        // 拦截config，要返回，否则报错
        return config
    },err =>{
        console.log(err)
    })
    return instance2(config)
}

export function request1(config){
    
        // 创建axios实例
        const instance1 = axios.create({
            baseURL:'http://123.207.32.32:8000',
            timeout:5000
        })
        // axios拦截器
        // 请求拦截
        instance1.interceptors.request.use(config =>{
            console.log(config)
            // 拦截config，要返回，否则报错
            return config
        },err =>{
            console.log(err)
        })

        // 相应拦截
        instance1.interceptors.response.use(res =>{
            console.log(res)
            // 拦截res，要返回，否则报错
            return res
        },err =>{
            console.log(err)
        })
        // axios本身就是promise
        // 返回的是promise.
        return instance1(config)
        
    
}