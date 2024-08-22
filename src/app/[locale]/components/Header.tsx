"use client"
import { Avatar, IconButton, MenuItem, MenuList, Popover } from '@mui/material'
import { useTranslations } from 'next-intl'
import React, { useEffect } from 'react'

const Header = () => {
    const t = useTranslations("Dashboard")
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div className='h-[100px] bg-white flex items-center justify-between'>
            <label id="breadcrumbs" className='text-primary2 px-10'></label>
            <IconButton onClick={handleClick}>
                <Avatar>H</Avatar>
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Popover>
        </div>
    )
}

export default Header