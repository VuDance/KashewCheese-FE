import Image from 'next/image'
import React from 'react'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useTranslations } from 'next-intl';


interface DashboardInfoItemProps {
    icon: string,
    title: string,
    value: number,
    trending:{
        up:boolean,
        value: number,
        time:string
    }
}
const DashboardInfoItem = ({ icon, title, value,trending }: DashboardInfoItemProps) => {
    const t=useTranslations("Dashboard")
    return (
        <div className='rounded-md bg-white h-[160px] p-4 flex justify-between flex-col shadow-md'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-3'>
                    <label>{title}</label>
                    <div className='text-xl font-bold'>{value}</div>
                </div>
                <Image src={icon} alt='' />
            </div>
            <div>
                {trending.up ?
                    <div className='flex gap-2'>
                        <TrendingUpIcon color='success'/>
                        <span className='text-green-500'>{trending.value}</span>
                        <span>{`${t("UpFrom")} ${t(trending.time)} `} </span>
                    </div>
                    :
                    <div className='flex gap-2'>
                        <TrendingDownIcon color='error'/>
                        <span className='text-red-500'>{trending.value}</span>
                        {`${t("DownFrom")} ${t(trending.time)} `} 
                    </div>
                    }
            </div>
        </div>
    )
}

export default DashboardInfoItem