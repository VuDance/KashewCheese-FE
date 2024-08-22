import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useTranslations } from 'next-intl'
import { Product } from '@/app/contants/types'
import Container from './components/Container'

const ProductsManagement = () => {
    const t= useTranslations("ProductsManagement")
    const data:Product[]=[
        {name:"Ca phe bth",category:"Ca phe",price:100,image:["https://kashewcheese.com/cdn/shop/products/Q5A6819-kashew-20210602-websize_1800x1800.jpg?v=1701233378"],quantity:1,description:""}
      ]
  return (
    <div>
        <BreadCrumbs
        listBreadcrumb={[{ title: t("ProductsManagement") }]}
        />
        <Container data={data}/>
    </div>
  )
}

export default ProductsManagement