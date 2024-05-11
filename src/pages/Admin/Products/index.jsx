import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useOutletContext } from 'react-router';
const Products = () => {
const [users,setUsers,adminId,setAdminId,localStorageId,setlocalStorageId,adProducts,setadProduct] = useOutletContext()
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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell align="right">SALEPRICE</StyledTableCell>
            <StyledTableCell align="right">COSTPRICE</StyledTableCell>
            <StyledTableCell align="right">DESCRIPTION</StyledTableCell>
            <StyledTableCell align="right">IMAGE</StyledTableCell>
            <StyledTableCell align="right">STOCKCOUNT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adProducts.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.salePrice}</StyledTableCell>
              <StyledTableCell align="right">{row.costPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right"><img src={row.imgSrc} alt=""  width={'100px'}/></StyledTableCell>
              <StyledTableCell align="right">{row.stockCount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Products
