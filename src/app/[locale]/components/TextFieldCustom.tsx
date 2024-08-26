import { InputBase } from '@mui/material'
import React, { ChangeEvent } from 'react'

interface TextFieldCustomProps {
    placeholder: string,
    onChange:(param:ChangeEvent<HTMLTextAreaElement|HTMLInputElement>)=>void
    value:string
}

const TextFieldCustom = ({ placeholder,onChange,value }: TextFieldCustomProps) => {
    return (
        <InputBase onChange={onChange} value={value} className='border w-full rounded-sm p-1 h-[45px] px-3' sx={{
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