import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useTranslations } from 'next-intl'
import Container from './components/Container'

const RoleManagement = () => {
    const t=useTranslations("RoleManagement")
    const data=[
        {name:"Vai tro 1",createdAt:"25/1/2002"}
    ]
  return (
    <div>
        <BreadCrumbs
            listBreadcrumb={[{ title: t("RoleManagement") }]}
        />
        <Container data={data}/>
    </div>
  )
}

export default RoleManagement