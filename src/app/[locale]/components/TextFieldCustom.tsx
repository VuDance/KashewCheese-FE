import { InputBase } from '@mui/material'
import React from 'react'

interface TextFieldCustomProps {
    placeholder: string
}

const TextFieldCustom = ({ placeholder }: TextFieldCustomProps) => {
    return (
        <InputBase className='border w-full rounded-sm p-1 h-[45px] px-3' sx={{
            '&:hover': {
                borderColor: '#3b82f6',
            },
            '&.Mui-focused': {
                borderColor: '#3b82f6',
            },
        }} placeholder={placeholder} />
    )
}

export default TextFieldCustom