"use client"
import React, { useMemo, useState } from 'react'
import TableData from '../../components/TableData'
import { Order } from '@/app/contants/types'
import { Button, IconButton, Pagination, Popover, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useTranslations } from 'next-intl'
import Search from '../../components/Search'
import debounce from 'lodash.debounce';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ViewOrder from './ViewOrder'


interface ContainerProps {
    data: Order[]
}
// const filterOptions=[]

const Container = ({ data }: ContainerProps) => {
    const t = useTranslations("OrdersManagement")
    const b = useTranslations("Button")
    const [openModal,setOpenModal]=useState<boolean>(false)
    const [openDeleteModal,setOpenDeleteModal]=useState<boolean>(false)
    const [isView,setIsView]=useState<boolean>(false)
    const columns: string[] = useMemo(() => ["ID", "Name", "Address", "Date","Status"], [])
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
            <Search disableCreate onOpenModal={handleOpenModal} onChange={handleChangeSearch} />
            <div className='bg-white'>
                <TableData>
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => <TableCell key={column}>{t(column)}</TableCell>)}
                            <TableCell className='w-8'></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.address}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>
                                    {row.status==="Pending" && <span className='p-2 text-orange-500 rounded-md bg-orange-100'>{row.status}</span>}
                                    {row.status==="Completed" && <span className='p-2 text-white rounded-md bg-green-400'>{row.status}</span>}
                                    {row.status==="Rejected" && <span className='p-2 text-white rounded-md bg-red-400'>{row.status}</span>}
                                </TableCell>
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
                </div>
            </Popover>

            <ViewOrder isView={isView} open={openModal} handleClose={handleCloseModal} handleSave={handleSave} title={t(isView?"ViewDetail":"CreateOrder")}/>
            {/* <DeleteUser title={t("DeleteUser")} open={openDeleteModal} handleClose={handleCloseModal} handleDelete={handleDelete} /> */}
        </div>
    )
}

export default Container