"use client"
import React, { useMemo, useState } from 'react'
import TableData from '../../components/TableData'
import { Button, IconButton, Pagination, Popover, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslations } from 'next-intl'
import Search from '../../components/Search'
import debounce from 'lodash.debounce';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { Product } from '@/app/contants/types'
import Image from 'next/image'
import AddEditProduct from './AddEditProduct'
import DeleteProduct from './DeleteProduct'


interface ContainerProps {
    data: Product[]
}

const Container = ({data}:ContainerProps) => {
    const t = useTranslations("ProductsManagement")
    const b = useTranslations("Button")
    const [openModal,setOpenModal]=useState<boolean>(false)
    const [openDeleteModal,setOpenDeleteModal]=useState<boolean>(false)
    const [isView,setIsView]=useState<boolean>(false)
    const columns: string[] = useMemo(() => ["STT","Image", "Name", "Category", "Price"], [])
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
                    {columns.map((column) => <TableCell key={column}>{t(column)}</TableCell>)}
                    <TableCell className='w-8'></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row,index:number) => (
                    <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {index+1}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <Image className='object-cover w-[60px] h-[60px]' src={row.image[0]} alt='' width={60} height={60}/>
                        </TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.category}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>
                            <IconButton onClick={handleClick}>
                                <MoreVertIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
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

    <AddEditProduct isView={isView} open={openModal} handleClose={handleCloseModal} handleSave={handleSave} title={t(isView?"ViewDetail":"CreateProduct")}/>
    <DeleteProduct title={t("DeleteProduct")} open={openDeleteModal} handleClose={handleCloseModal} handleDelete={handleDelete} />
</div>
  )
}

export default Container