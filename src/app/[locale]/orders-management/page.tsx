import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import { useTranslations } from 'next-intl'
import Container from './components/Container'

const OrdersManagement = () => {
    const t = useTranslations("OrdersManagement")
    const data = [
        { id: "100", name: "vu dang", date: "25/5/2025", status: "Pending", address: "HCM, VietNam" }
    ]
    return (
        <div>
            <BreadCrumbs
                listBreadcrumb={[{ title: t("OrdersManagement") }]}
            />
            <Container data={data} />
        </div>
    )
}

export default OrdersManagement