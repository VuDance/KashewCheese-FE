import { API_URLS } from "../contants/api-url"
import { Permissions, Role } from "../contants/types"
import axiosInstance from "./axios"

export interface GetRolesType{
    pageIndex:number,
    pageSize:number,
    totalPage:number,
    result:{
        roles:Role[]
    }
}
export interface GetPermissionsType{
    permissions:Permissions[]
}
export interface CreateRoleType{
    roleName:string,
    permissions:number[]
}

export const getRoles=(param:any):Promise<GetRolesType>=>{
    return axiosInstance.get(API_URLS.GET_ROLES,{
        params:param
    })
}
export const getPermissions=():Promise<GetPermissionsType>=>{
    return axiosInstance.get(API_URLS.GET_PERMISSIONS)
}
export const createRole=(data:CreateRoleType):Promise<string>=>{
    return axiosInstance.post(API_URLS.CREATE_ROLE,data)
}
export const deleteRole=(id:number)=>{
    return axiosInstance.delete(API_URLS.DELETE_ROLE+`/${id}`)
}
export const getDetailRole=(id:number):Promise<Role>=>{
    return axiosInstance.get(API_URLS.GET_DETAIL_ROLE+`/${id}`)
}
export const updateRole=(data:CreateRoleType,id:number)=>{
    return axiosInstance.put(API_URLS.UPDATE_ROLE+`/${id}`,data)
}