"use client"
import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'
import TableData from '../../components/TableData'
import { Role } from '@/app/contants/types'
import { Button, CircularProgress, IconButton, Pagination, Popover, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslations } from 'next-intl'
import Search from '../../components/Search'
import debounce from 'lodash.debounce';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import AddEditRole from './AddEditRole'
import DeleteRole from './DeleteRole'
import { deleteRole, getDetailRole, getRoles, GetRolesType } from '@/app/apis/role-services'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'


const Container = () => {
    const t = useTranslations("RoleManagement")
    const b = useTranslations("Button")
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
    const [isView, setIsView] = useState<boolean>(false)
    const columns: string[] = useMemo(() => ["STT", "Name", "CreatedAt"], [])

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [pageIndex, setPageIndex] = useState<number>(1)
    const [productId, setProductId] = useState<number>(0)
    const [pageSize, setPageSize] = useState<number>(10)
    const [keyword, setKeyword] = useState<string>('')
    const [roles, setRoles] = useState<GetRolesType>({
        pageIndex: 1,
        pageSize: 10,
        totalPage: 1,
        result: {
            roles: []
        }
    })

    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['roles'],
        queryFn: async () => await getRoles({
            pageIndex: pageIndex,
            pageSize: pageSize,
            keyword: keyword !== '' ? keyword : null
        })
    })
    const {data:detailRole,isLoading: isLoadingRoleDetail,
        isError: isErrorRoleDetail,
        error: roleDetailError,}=useQuery({
        queryKey:['role',productId],
        queryFn:()=>{
            return getDetailRole(productId)
        },
        enabled:productId!=0 && openModal
    })
    const queryClient = useQueryClient();

    const muatation = useMutation({
        mutationFn: (data: number) => {
            return deleteRole(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['roles'] });
            handleClose()
            toast.success("Delete successfully", {
                autoClose: 3000,
                closeOnClick: true,
            })
        },
    })
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
        setAnchorEl(event.currentTarget);
        setProductId(id)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenDeleteModal(false)
    };

    const handleDelete = () => {
        muatation.mutate(productId)
    }
    const handleCloseModal = () => {
        setOpenModal(false);
        setOpenDeleteModal(false);
    }
    const handleOpenModal = () => {
        setIsView(false);
        setOpenModal(true);

    }
    const handleOpenViewModal = () => {
        setOpenModal(true);
        setIsView(true);
    }
    const handleOpenDeleteModal = () => {
        setOpenDeleteModal(true);
    }
    const onPageChange = (page: number) => {
        setPageIndex(page)
    }
    const handleSearch = useCallback(
        debounce(
            refetch
            , 500)
        , [])
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value);
        handleSearch();
    };
    useEffect(() => {
        refetch()
    }, [pageIndex, pageSize])

    useEffect(() => {
        setRoles(data ?? {
            pageIndex: 1,
            pageSize: 10,
            totalPage: 1,
            result: {
                roles: []
            }
        })
    }, [data])

    const open = Boolean(anchorEl);
    return (
        <div className='flex flex-col gap-3'>
            <Search value={keyword} onOpenModal={handleOpenModal} onChange={onSearchChange} />
            <div className='bg-white'>
                {isLoading ?
                    <div className='flex items-center justify-center h-[500px]'>
                        <CircularProgress />
                    </div>
                    :
                    <TableData>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => <TableCell key={column}>{t(column)}</TableCell>)}
                                <TableCell className='w-8'></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.result.roles && data.result.roles.map((row: Role, index: number) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={(event) => handleClick(event, row.id)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </TableData>
                }
            </div>
            <div className='flex justify-end'>
                <Pagination onChange={(e, page) => onPageChange(page)} page={roles.pageIndex} count={roles.totalPage} variant="outlined" />
            </div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className='min-w-28'>
                    <Button onClick={handleOpenViewModal} className='p-3 normal-case flex gap-2 w-full justify-start'>
                        <VisibilityIcon className='text-orange-500' />
                        <div>{b("View")}</div>
                    </Button>
                    <Button onClick={handleOpenModal} className='p-3 normal-case flex gap-2 w-full justify-start'>
                        <EditIcon className='text-blue-500' />
                        <div>{b("Edit")}</div>
                    </Button>
                    <Button onClick={handleOpenDeleteModal} className='p-3 normal-case flex gap-2 w-full justify-start'>
                        <DeleteIcon className='text-red-500' />
                        <div>{b("Delete")}</div>
                    </Button>
                </div>
            </Popover>

            <AddEditRole detailRole={detailRole} isView={isView} open={openModal} handleClose={handleCloseModal} title={t(isView ? "ViewDetail" : detailRole?"EditRole":"CreateRole")} />
            <DeleteRole isLoading={muatation.isPending} title={t("DeleteRole")} open={openDeleteModal} handleClose={handleCloseModal} handleDelete={handleDelete} />
        </div>
    )
}

export default Container