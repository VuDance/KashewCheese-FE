import { Table} from '@mui/material'
import React from 'react'

interface TableDataProps{
  children: React.ReactNode
}


const TableData = ({children}:TableDataProps) => {
  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      {children}
    </Table>
  )
}

export default TableData