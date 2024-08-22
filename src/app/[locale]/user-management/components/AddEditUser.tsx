import React from 'react'
import ModalCrud from '../../components/ModalCrud'
import { Grid } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import TextFieldCustom from '../../components/TextFieldCustom'
import { useTranslations } from 'next-intl'
import SelectCustom from '../../components/SelectCustom'

interface AddEditUserProps {
    handleClose: () => void,
    open: boolean,
    handleSave?: (data: any) => void,
    title: string,
    isView: boolean
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

const AddEditUser = ({ title, open, handleSave, handleClose,isView }: AddEditUserProps) => {
    const t=useTranslations("UsersManagement")
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
            <Grid container spacing={2} className='w-full pl-[16px]'>
                <Grid item xs={6}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t("FirstName")}/>
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t("LastName")}/>
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t("Email")}/>
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t("PhoneNumber")}/>
                        )}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                             <SelectCustom defaultValue={t("ChooseRole")} option={fakeOption}/>
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t('Password')}/>
                        )}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t('ConfirmPassword')}/>
                        )}
                    />
                </Grid>
            </Grid>
        </ModalCrud>
    )
}

export default AddEditUser