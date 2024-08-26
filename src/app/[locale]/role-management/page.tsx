"use client"

import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useTranslations } from 'next-intl'
import Container from './components/Container'

const RoleManagement = () => {
  const t = useTranslations("RoleManagement")
  
  return (
    <div>
      <BreadCrumbs
        listBreadcrumb={[{ title: t("RoleManagement") }]}
      />
      <Container/>
    </div>
  )
}

export default RoleManagement