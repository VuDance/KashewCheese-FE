"use client"
import React, { useMemo, useState } from 'react'
import TableData from '../../components/TableData'
import { Category } from '@/app/contants/types'
import { Button, Collapse, IconButton, Pagination, Popover, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslations } from 'next-intl'
import Search from '../../components/Search'
import debounce from 'lodash.debounce';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import RowSubCategory from './RowSubCategory'
import AddEditCategory from './AddEditCategory'
import DeleteCategory from './DeleteCategory'
// import AddEditRole from './AddEditRole'
// import DeleteRole from './DeleteRole'


interface ContainerProps {
    data: Category[]
}
// const filterOptions=[]

const Container = ({ data }: ContainerProps) => {
    const t = useTranslations("CategoryManagement")
    const b = useTranslations("Button")
    const [openModal,setOpenModal]=useState<boolean>(false)
    const [openDeleteModal,setOpenDeleteModal]=useState<boolean>(false)
    const [isView,setIsView]=useState<boolean>(false)
    const columns: string[] = useMemo(() => ["Name", "CreatedAt"], [])
    const handleChangeSearch = debounce((e) => {
        console.log('Input value:', e.target.value);
    }, 500);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSave=(data: any) => {
        console.log(data);
    }
    const handleDelete=(data: any) => {
        console.log(data);
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
    const handleOpenDeleteModal=()=>{
        setOpenDeleteModal(true);
    }

    const open = Boolean(anchorEl);
    return (
        <div className='flex flex-col gap-3'>
            <Search onOpenModal={handleOpenModal} onChange={handleChangeSearch} />
            <div className='bg-white'>
                <TableData>
                    <TableHead>
                        <TableRow>
                            <TableCell className='w-8'></TableCell>
                            {columns.map((column) => <TableCell key={column}>{t(column)}</TableCell>)}
                            <TableCell className='w-8'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row,index:number) => (
                            <>
                                <RowSubCategory row={row} handleClick={handleClick}/>
                            </>
                        ))}
                    </TableBody>
                </TableData>
            </div>
            <div className='flex justify-end'>
                <Pagination onChange={(e,page)=>console.log(page)} count={10} variant="outlined" />
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
                        <VisibilityIcon className='text-orange-500'/>
                        <div>{b("View")}</div>
                    </Button>
                    <Button onClick={handleOpenModal} className='p-3 normal-case flex gap-2 w-full justify-start'>
                        <EditIcon className='text-blue-500'/>
                        <div>{b("Edit")}</div>
                    </Button>
                    <Button onClick={handleOpenDeleteModal} className='p-3 normal-case flex gap-2 w-full justify-start'>
                        <DeleteIcon className='text-red-500'/>
                        <div>{b("Delete")}</div>
                    </Button>
                </div>
            </Popover>

            <AddEditCategory isView={isView} open={openModal} handleClose={handleCloseModal} handleSave={handleSave} title={t(isView?"ViewDetail":"CreateCategory")}/>
            <DeleteCategory title={t("DeleteCategory")} open={openDeleteModal} handleClose={handleCloseModal} handleDelete={handleDelete} />
        </div>
    )
}

export default Container