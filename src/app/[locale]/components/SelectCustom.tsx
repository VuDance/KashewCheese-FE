import { FormControl, MenuItem, Select } from '@mui/material'
import React from 'react'

interface SelectCustomProps{
    option:any[],
    defaultValue:string
}

const SelectCustom = ({option,defaultValue}:SelectCustomProps) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 80, margin: 0,width:"100%" }}>
            <Select
                // value={age}
                //   onChange={onChange}
                defaultValue=""
                variant='outlined'
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ height: 45, backgroundColor: "transparent",'& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3b82f6'
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#3b82f6',
                  },
                '&.Mui-focused': {
                    borderColor: '#3b82f6',
                },
                }}
            >
                <MenuItem disabled value="">
                    {defaultValue}
                </MenuItem>
                {option.map(role =><MenuItem key={role.value} value={role.value}>{role.label}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default SelectCustom