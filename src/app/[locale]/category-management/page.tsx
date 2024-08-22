import React from 'react'
import { useTranslations } from 'next-intl'
import BreadCrumbs from '../components/BreadCrumbs'
import Container from "./components/Container"

const CategoryManagement = () => {
    const t=useTranslations("CategoryManagement")
    const data=[
        {name:"Vai tro 1",createdAt:"25/1/2002",subCategory:[{name:"sub1",createdAt:"25/1/2002"}]},
        {name:"Vai tro 2",createdAt:"25/1/2002",subCategory:[{name:"sub1",createdAt:"25/1/2002"}]},
    ]
  return (
    <div>
        <BreadCrumbs
            listBreadcrumb={[{ title: t("CategoryManagement") }]}
        />
        <Container data={data}/>
    </div>
  )
}

export default CategoryManagement