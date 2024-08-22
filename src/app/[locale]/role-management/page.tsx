"use client"

import React, { useEffect, useState } from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useTranslations } from 'next-intl'
import Container from './components/Container'
import { useQuery } from '@tanstack/react-query'
import { getRoles, GetRolesType } from '@/app/apis/role-services'
import { Role } from '@/app/contants/types'

const RoleManagement = () => {
  const t = useTranslations("RoleManagement")
  const [roles, setRoles] = useState<GetRolesType>({
    pageIndex:1,
    pageSize:10,
    totalPage:1,
    result:{
      roles:[]
    }
  })

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['roles'],
    queryFn: async () => await getRoles({})
  })
  useEffect(() => {
    setRoles(data ??{
      pageIndex:1,
      pageSize:10,
      totalPage:1,
      result:{
        roles:[]
      }
    })
  }, [data])
  return (
    <div>
      <BreadCrumbs
        listBreadcrumb={[{ title: t("RoleManagement") }]}
      />
      <Container data={roles}/>
    </div>
  )
}

export default RoleManagement