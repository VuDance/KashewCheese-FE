import React from 'react'
import ModalCrud from '../../components/ModalCrud'
import { Grid } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import TextFieldCustom from '../../components/TextFieldCustom'
import { useTranslations } from 'next-intl'
import SelectCustom from '../../components/SelectCustom'
import ImageIcon from '@mui/icons-material/Image';
import Image from 'next/image'
import MDEditor from '@uiw/react-md-editor'


interface AddEditProductProps {
    handleClose: () => void,
    open: boolean,
    handleSave?: (data: any) => void,
    title: string,
    isView: boolean,
    data?: any
}

const fakeOption=[
    {
        value:"Admin",
        label: "Admin",
    },
    {
        value:"User",
        label: "User",
    },
]

const AddEditProduct = ({ title, open, handleSave, handleClose,isView,data }: AddEditProductProps) => {
    const t=useTranslations("ProductsManagement")
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
      const onSubmit = (data:any) => console.log(data)
    return (
        <ModalCrud isView={isView} title={title} open={open} handleSave={handleSave} handleClose={handleClose}>
            <Grid container spacing={2} className='w-[70vw]'>
                <Grid item xs={4}>
                    {/* <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t("FirstName")}/>
                        )}
                    /> */}
                    <div className='shadow-md p-3'>
                        <div className='pb-3 mb-3 border-b font-semibold'>{t("ProductImage")}</div>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <label htmlFor='upload' className='cursor-pointer border-dashed border aspect-square flex items-center flex-col justify-center'>
                                    <ImageIcon color='primary'/>
                                    <div>{t("ChooseImage")}</div>
                                </label>
                                <input id='upload' className='hidden' type='file'/>
                            </Grid>
                            <Grid item xs={6}>
                                <Image width={100} height={100} alt='' src="https://kashewcheese.com/cdn/shop/products/Q5A6819-kashew-20210602-websize_1800x1800.jpg?v=1701233378" className='w-[100%] h-[100%] object-cover aspect-square'/>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div className='shadow-md p-3'>
                        <div className='pb-3 mb-3 border-b font-semibold'>{t("ProductDetails")}</div>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Controller
                                    control={control}
                                    name='firstName'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextFieldCustom placeholder={t('ProductName')}/>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Controller
                                    control={control}
                                    name='firstName'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <SelectCustom defaultValue={t("ChooseCategory")} option={fakeOption} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Controller
                                    control={control}
                                    name='firstName'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextFieldCustom placeholder={t('Quantity')}/>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Controller
                                    control={control}
                                    name='firstName'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextFieldCustom placeholder={t('Price')}/>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div className='mb-2'>{t("Description")}</div>
                                <Controller
                                    control={control}
                                    name='firstName'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <>
                                            <MDEditor data-color-mode='light'/>
                                            <MDEditor.Markdown  style={{ whiteSpace: 'pre-wrap' }} />
                                        </>

                                    )}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </ModalCrud>
    )
}

export default AddEditProduct