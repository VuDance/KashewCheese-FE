import React from 'react'
import ModalCrud from '../../components/ModalCrud'
import { Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import TextFieldCustom from '../../components/TextFieldCustom'
import { useTranslations } from 'next-intl'
import SelectCustom from '../../components/SelectCustom'

interface AddEditRoleProps {
    handleClose: () => void,
    open: boolean,
    handleSave?: (data: any) => void,
    title: string,
    isView: boolean
}

const data=[
    {
        label: "UsersManagement",
        dataOption:[
            {
                label:"View",
                code:0,
                value:false
            },
            {
                label:"Create",
                code:1,
                value:false
            },
            {
                label:"Edit",
                code:2,
                value:false
            },
            {
                label:"Delete",
                code:3,
                value:false
            }
        ]
    },
    {
        label: "CategoryManagement",
        dataOption:[
            {
                label:"View",
                code:0,
                value:false
            },
            {
                label:"Create",
                code:1,
                value:false
            },
            {
                label:"Edit",
                code:2,
                value:false
            },
            {
                label:"Delete",
                code:3,
                value:false
            }
        ]
    },
    {
        label: "ProductManagement",
        dataOption:[
            {
                label:"View",
                code:0,
                value:false
            },
            {
                label:"Create",
                code:1,
                value:false
            },
            {
                label:"Edit",
                code:2,
                value:false
            },
            {
                label:"Delete",
                code:3,
                value:false
            }
        ]
    },
    {
        label: "OrdersManagement",
        dataOption:[
            {
                label:"View",
                code:0,
                value:false
            },
            {
                label:"Create",
                code:1,
                value:false
            },
            {
                label:"Edit",
                code:2,
                value:false
            },
            {
                label:"Delete",
                code:3,
                value:true
            }
        ]
    },
]

const AddEditRole = ({ title, open, handleSave, handleClose,isView }: AddEditRoleProps) => {
    const t=useTranslations("RoleManagement")
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
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name='firstName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom placeholder={t("RoleName")}/>
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div>
                        {data.map((data) =>
                            <div key={data.label} className='flex items-center'>
                                <div className='w-[200px]'>{t(data.label)}</div>
                                <div className='flex gap-4'>
                                    {data.dataOption.map((option) =><div key={option.code}>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox checked={option.value} />} label={option.label} />
                                        </FormGroup>
                                    </div>)}
                                </div>
                            </div>
                        )}
                    </div>
                </Grid>
                
            </Grid>
        </ModalCrud>
    )
}

export default AddEditRole