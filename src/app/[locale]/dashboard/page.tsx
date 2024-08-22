import React from 'react'
import Header from '../components/Header'
import DashboardInfoItem from './components/DashboardInfoItem'
import { icons } from '@/app/contants/svg-icons'
import SalesChart from './components/SalesChart'
import BlogList from './components/BlogList'
import BreadCrumbs from '../components/BreadCrumbs'
import { useTranslations } from 'next-intl'

const Dashboard = () => {
  const t=useTranslations("Dashboard")

  const fakeData=[
    {
      title:'Total Users',
      value:1000,
      icon:icons.TotalUsersIcon,
      trending:{
        up:true,
        value:8.23,
        time: 'Yesterday'
      }
    },
    {
      title:'Total Orders',
      value:1000,
      icon:icons.TotalOrdersIcon,
      trending:{
        up:true,
        value:8.23,
        time: 'PastWeek'
      }
    },
    {
      title:'Total Sales',
      value:1000,
      icon:icons.TotalSalesIcon,
      trending:{
        up:false,
        value:8.23,
        time: 'Yesterday'
      }
    },
    {
      title:'Total Pending',
      value:1000,
      icon:icons.TotalPendingIcon,
      trending:{
        up:true,
        value:8.23,
        time: 'Yesterday'
      }
    },
  ]

  return (
    <div className='flex flex-col gap-6'>
      <BreadCrumbs
        listBreadcrumb={[{ title: t("Overview") }]}
      />
      <div className='grid grid-cols-4 gap-7'>
        {fakeData.map(data =><DashboardInfoItem {...data} key={data.title}/>)}
      </div>
      <SalesChart/>
      <BlogList/>
    </div>
  )
}

export default Dashboard