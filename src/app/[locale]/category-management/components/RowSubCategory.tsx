import { Button, Collapse, IconButton, Popover, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useMemo, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTranslations } from 'next-intl';
import { Category } from '@/app/contants/types';
import AddEditSubCategory from './AddEditSubCategory';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteSubCategory from './DeleteSubCategory';

interface RowSubCategoryProps {
    row: Category,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const RowSubCategory = ({ row, handleClick }: RowSubCategoryProps) => {
    const t = useTranslations("CategoryManagement")
    const b = useTranslations("Button")
    const [open, setOpen] = useState<boolean>(false)
    const [openModal,setOpenModal]=useState<boolean>(false)
    const [openDeleteModal,setOpenDeleteModal]=useState<boolean>(false)
    const [isView,setIsView]=useState<boolean>(false)
    const columns: string[] = useMemo(() => ["STT", "Name", "CreatedAt"], [])

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleOpenAction = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const openAction = Boolean(anchorEl);


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




    return (
        <>
            <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>
                    <IconButton onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <div className='ml-20 mr-20 mt-2'>
                            <div className='flex justify-end'>
                                <Button onClick={handleOpenModal} className='bg-blue-500 text-white normal-case hover:bg-blue-400'>
                                    {t("Create")}
                                </Button>
                            </div>
                            <Table size='small'>
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => <TableCell key={column}>{t(column)}</TableCell>)}
                                        <TableCell className='w-8'></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.subCategory.map((row, index: number) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.createdAt}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={handleOpenAction}>
                                                    <MoreVertIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                    </Collapse>
                </TableCell>
            </TableRow>

            <Popover
                open={openAction}
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


            <AddEditSubCategory isView={isView} open={openModal} handleClose={handleCloseModal} handleSave={handleSave} title={t(isView?"ViewDetail":"CreateSubCategory")} />
            <DeleteSubCategory title={t("DeleteSubCategory")} open={openDeleteModal} handleClose={handleCloseModal} handleDelete={handleDelete}/>
        </>
    )
}

export default RowSubCategory