import { request2 } from "./requests"

export function getdetail(iid){
    return request2({
        url:'/detail',
        params:{
            iid
        }
    })
}