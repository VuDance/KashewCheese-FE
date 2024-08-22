"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTranslations } from 'next-intl';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    name:"Blog1",
    createdDate: "10/10/2015",
    status: "Active"
  }
];

export default function BlogList() {
    const t = useTranslations("Dashboard")
  return (
    <div className='p-8 bg-white rounded-md shadow-md'>
        <div className='font-bold mb-8 text-2xl'>
            {t("BlogList")}
        </div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{t("BlogName")}</TableCell>
            <TableCell align="right">{t("CreatedDate")}</TableCell>
            <TableCell align="right">{t("Status")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.createdDate}</TableCell>
              <TableCell align="right"><span className={`rounded-lg ${row.status==="Active"?"bg-green-500":"bg-red-500"} p-2 text-white`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}