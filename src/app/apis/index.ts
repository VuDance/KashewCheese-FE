import { API_URLS } from "../contants/api-url"
import axiosInstance from "./axios"

export const getRoles=(param:any)=>{
    return axiosInstance.get(API_URLS.GET_ROLES,{
        params:param
    })
}