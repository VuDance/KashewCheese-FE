import { Button, FormControl, InputBase, MenuItem, Select } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { useTranslations } from 'next-intl';


interface SearchProps{
  onChange:(value:any) => void;
  onOpenModal:()=>void,
  disableCreate?:boolean
}

const Search = ({onChange,onOpenModal,disableCreate}:SearchProps) => {
  const t = useTranslations("Button")
  return (
    <div className='flex justify-between'>
      <div className='flex gap-2'>
        <div className='border border-solid p-2 rounded-md h-12 bg-white w-80'>
          <SearchIcon />
          <InputBase
            onChange={onChange}
            sx={{ ml: 1, flex: 1 }}
            placeholder={t("Search")}
          />
        </div>
        {/* <FormControl sx={{ m: 1, minWidth: 80,margin:0 }}>
          <Select
            // value={age}
            onChange={onChange}
            defaultValue=""
            variant='standard'
            disableUnderline
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{height:48,backgroundColor:"transparent"}}

          >
            <MenuItem disabled value="">
              Sort by
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
      </div>
      {!disableCreate &&<Button onClick={onOpenModal} variant='outlined' className='normal-case hover:bg-blue-500 text-white bg-blue-600'>Create</Button>}
    </div>
  )
}

export default Search