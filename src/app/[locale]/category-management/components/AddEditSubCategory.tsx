import React from 'react'
import ModalCrud from '../../components/ModalCrud'
import { Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import TextFieldCustom from '../../components/TextFieldCustom'
import { useTranslations } from 'next-intl'
import SelectCustom from '../../components/SelectCustom'

interface AddEditSubCategoryProps {
    handleClose: () => void,
    open: boolean,
    handleSave?: (data: any) => void,
    title: string,
    isView: boolean
}


const AddEditSubCategory = ({ title, open, handleSave, handleClose,isView }: AddEditSubCategoryProps) => {
    const t=useTranslations("CategoryManagement")
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
            <Grid container spacing={2} className='w-[50vw]'>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t("SubCategoryName")}/>
                        )}
                    />
                </Grid>
            </Grid>
        </ModalCrud>
    )
}

export default AddEditSubCategory