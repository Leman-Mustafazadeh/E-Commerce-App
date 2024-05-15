import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
const Basket = () => {


  const localBasket = JSON.parse(localStorage.getItem('basket'))



  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">stockCount</StyledTableCell>
            <StyledTableCell align="right">costPrice</StyledTableCell>
            <StyledTableCell align="right">discountPercentage</StyledTableCell>
            <StyledTableCell align="right">salePrice</StyledTableCell>
            <StyledTableCell align="right">Icons</StyledTableCell>
            <StyledTableCell align="right">Cem</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {localBasket?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.stockCount}</StyledTableCell>
              <StyledTableCell align="right">{row.costPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.discountPercentage}</StyledTableCell>
              <StyledTableCell align="right">{row.salePrice}</StyledTableCell>
              <StyledTableCell align="right"><Button>Delete</Button></StyledTableCell>
              <StyledTableCell align="right">{row.salePrice * row.count}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Basket
