import { API_URLS } from "../contants/api-url"
import { Role } from "../contants/types"
import axiosInstance from "./axios"

export interface GetRolesType{
    pageIndex:number,
    pageSize:number,
    totalPage:number,
    result:{
        roles:Role[]
    }
}
export const getRoles=(param:any):Promise<GetRolesType>=>{
    return axiosInstance.get(API_URLS.GET_ROLES,{
        params:param
    })
}