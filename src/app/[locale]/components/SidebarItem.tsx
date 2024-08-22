"use client"

import { ListItemIcon } from '@mui/material'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import NavigationLink from './NavigationLink'

interface SidebarItemProps {
  url: any,
  name: string,
  icon: React.ReactElement
}

const SidebarItem = ({ url, name, icon }: SidebarItemProps) => {
  const t = useTranslations("Sidebar")
  return (
    <NavigationLink href={url}>
      {icon}
      {t(name)}
    </NavigationLink>
  )
}

export default SidebarItem