"use client"

import React, { useMemo } from 'react'
import ModalCrud from '../../components/ModalCrud'
import { Checkbox, FormControlLabel, FormGroup, Grid } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import TextFieldCustom from '../../components/TextFieldCustom'
import { useTranslations } from 'next-intl'
import { createRole, CreateRoleType, getPermissions, updateRole } from '@/app/apis/role-services'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Permissions, Role } from '@/app/contants/types'
import { toast } from 'react-toastify'

interface AddEditRoleProps {
    handleClose: () => void,
    open: boolean,
    handleSave?: (data: any) => void,
    title: string,
    isView: boolean,
    detailRole:Role|undefined
}

type DataPermission = {
    label: string;
    permission: Permissions[];
}[];


const AddEditRole = ({ title, open, handleClose, isView,detailRole }: AddEditRoleProps) => {
    const t = useTranslations("RoleManagement")
    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateRoleType>({
        values: {
            roleName:detailRole?detailRole.name: "",
            permissions: detailRole?detailRole.permissions.map((item)=>item.id): [],
        },
    })
    console.log(detailRole)
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['permissions'],
        queryFn: async () => await getPermissions(),
    })
    const muatation = useMutation({
        mutationFn: (data: CreateRoleType) => {
            return createRole(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['roles'] });
            reset()
            handleClose()
            toast.success("Create successfully",{
                autoClose:3000,
                closeOnClick:true,
            })
        },
    })
    const updateRoleMutation=useMutation({
        mutationFn:(data:CreateRoleType)=>{
            return updateRole(data,detailRole?detailRole.id:0)
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['roles'] });
            reset()
            handleClose()
            toast.success("Update successfully",{
                autoClose:3000,
                closeOnClick:true,
            })
        }
    })

    const p: DataPermission = useMemo(() => {
        const permission: DataPermission = [
            {
                label: "User Management",
                permission: []
            },
            {
                label: "Product Management",
                permission: []
            },
            {
                label: "Category Management",
                permission: []
            },
            {
                label: "Role Management",
                permission: []
            },
            {
                label: "Other",
                permission: []
            },
        ]
        const initialPermissions: DataPermission = [
            { label: "User Management", permission: [] },
            { label: "Product Management", permission: [] },
            { label: "Category Management", permission: [] },
            { label: "Role Management", permission: [] },
            { label: "Other", permission: [] }
        ];

        if (data && data.permissions) {
            return data.permissions.reduce((acc, item) => {
                if (item.name === "User") {
                    acc.find(group => group.label === 'Other')?.permission.push(item);
                }
                else {
                    const match = acc.find(group => item.name.includes(group.label.split(' ')[0]));
                    if (match) {
                        match.permission.push(item);
                    } else {
                        acc.find(group => group.label === 'Other')?.permission.push(item);
                    }
                }


                return acc;
            }, initialPermissions);
        }

        return initialPermissions;
    }, [data])

    const createRoleHandle = async (data: CreateRoleType) => {
        muatation.mutate(data)
    }
    const updateRoleHandle=(data:CreateRoleType)=>{
        updateRoleMutation.mutate(data)
    }
    console.log(title)

    return (
        <ModalCrud isLoading={title==="Edit Role"?updateRoleMutation.isPending:muatation.isPending} isView={isView} title={title} open={open} handleSave={handleSubmit(title==="Edit Role"? updateRoleHandle:createRoleHandle)} handleClose={handleClose}>
            <Grid container spacing={2} className='w-full pl-[16px]'>
                <Grid item xs={12}>
                    <Controller
                        control={control}
                        name='roleName'
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextFieldCustom value={value} onChange={onChange} placeholder={t("RoleName")} />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div>
                        {p.map((item) => <div key={item.label}>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-3 flex items-center'>
                                    {item.label}
                                </div>
                                <div className='col-span-9 grid-cols-3 grid'>
                                    {item.permission && item.permission.map((permission) =>
                                        <FormGroup key={permission.id}>
                                            <Controller
                                                name="permissions"
                                                control={control}
                                                render={({ field }) => (
                                                    <FormControlLabel control={<Checkbox
                                                        checked={field.value.includes(permission.id)}
                                                        onChange={(e) => {
                                                            const checked = e.target.checked;
                                                            field.onChange(
                                                                checked
                                                                    ? [...field.value, permission.id]
                                                                    : field.value.filter((id) => id !== permission.id)
                                                            );
                                                        }}
                                                    />} label={permission.name} />
                                                )}
                                            />
                                        </FormGroup>
                                    )}
                                </div>
                            </div>
                        </div>)}
                    </div>
                </Grid>

            </Grid>
        </ModalCrud>
    )
}

export default AddEditRole