import { API_URLS } from "../contants/api-url"
import { Category } from "../contants/types"
import axiosInstance from "./axios"

export interface GetCategoryType{
    pageIndex:number,
    pageSize:number,
    totalPage:number,
    result:{
        roles:Category[]
    }
}

export const getCategory=(param:any):Promise<GetCategoryType>=>{
    return axiosInstance.get(API_URLS.GET_ROLES,{
        params:param
    })
}