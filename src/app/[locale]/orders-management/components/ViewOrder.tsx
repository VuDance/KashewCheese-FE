import React, { useMemo } from 'react'
import ModalCrud from '../../components/ModalCrud'
import { Grid, IconButton, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import TextFieldCustom from '../../components/TextFieldCustom'
import { useTranslations } from 'next-intl'
import SelectCustom from '../../components/SelectCustom'
import TableData from '../../components/TableData'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Product } from '@/app/contants/types'
import Image from 'next/image'


interface ViewOrderProps {
    handleClose: () => void,
    open: boolean,
    handleSave?: (data: any) => void,
    title: string,
    isView: boolean
}

const data:Product[]=[
    {
        name:"SP1",
        category:"Category",
        price:100,
        image:["https://kashewcheese.com/cdn/shop/products/Q5A6819-kashew-20210602-websize_1800x1800.jpg?v=1701233378"],
        quantity:1,
        description:""
    }
]


const ViewOrder = ({ title, open, handleSave, handleClose, isView }: ViewOrderProps) => {
    const t = useTranslations("OrdersManagement")
    const b = useTranslations("ProductsManagement")


    const columns: string[] = useMemo(() => ["STT","Image", "Name", "Category", "Price","Quantity"], [])
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
        },
    })
    const onSubmit = (data: any) => console.log(data)
    return (
        <ModalCrud isView={isView} title={title} open={open} handleSave={handleSave} handleClose={handleClose}>
            <Grid container spacing={2} className='w-full pl-[16px]'>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <div className='flex'>
                                <span className='w-[100px]'>{t("ID")}:</span>
                                001
                            </div>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <div className='flex'>
                                <span className='w-[100px]'>{t("Name")}:</span>
                                Vu dang
                            </div>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <div className='flex'>
                                <span className='w-[100px]'>{t("Address")}:</span>
                                Ho Chi Minh, Viet Nam
                            </div>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <div className='flex'>
                                <span className='w-[100px]'>{t("Date")}:</span>
                                25/5/2002
                            </div>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <div className='flex items-center'>
                                <span className='w-[100px]'>{t("Status")}:</span>
                                <span className='p-2 text-orange-500 rounded-md bg-orange-100'>Pending</span>
                            </div>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TableData>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => <TableCell key={column}>{b(column)}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, index: number) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Image className='object-cover w-[60px] h-[60px]' src={row.image[0]} alt='' width={60} height={60} />
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.price}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableData>
                </Grid>
            </Grid>
        </ModalCrud>
    )
}

export default ViewOrder