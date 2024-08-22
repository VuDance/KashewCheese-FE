import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useTranslations } from 'next-intl'
import Container from './components/Container'

const UsersManagement = () => {
  const t=useTranslations("UsersManagement")
  //call api
  const data=[
    { id:"100",name:"vu dang",createdAt:"25/5/2025",role:"Admin"}
  ]
  return (
    <div>
      <BreadCrumbs
        listBreadcrumb={[{ title: t("UsersManagement") }]}
      />
      <Container data={data}/>
    </div>
  )
}

export default UsersManagement