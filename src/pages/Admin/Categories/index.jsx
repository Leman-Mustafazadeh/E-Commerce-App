import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { useState } from "react";
import { useEffect } from "react";
import endpoints from "../../../API/base";
import { deleteOne, getAll, patch } from "../../../API";
import { Box, Button, Modal, TextField } from "@mui/material";
import Swal from "sweetalert2";
import { useOutletContext } from "react-router";
const Categories = () => {
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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const [
    users,
    setUsers,
    adminId,
    setAdminId,
    localStorageId,
    setlocalStorageId,
    adProducts,
    setadProduct,
    messag,
    setMessag,
    category,
    setCategory,
  ] = useOutletContext();
  const handleDel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOne(endpoints.categories, id);
        const del = category.filter((x) => x.id != id);
        setCategory(del);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const [editCategory, setEditCategory] = useState({ id: "", name: "" });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleEdit = (product) => {
    handleOpen();
    setEditCategory({ id: product.id, name: product.name });
  };

  const handleSubmit = () => {
    patch(endpoints.categories,editCategory.id,editCategory);
   const changeCategory = category.findIndex((x)=>x.id==editCategory.id)
   const updaatedcategies=[...category]
   updaatedcategies[changeCategory]=editCategory
   setCategory(updaatedcategies)
    handleClose();
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" onClick={() => handleDel(row.id)}>
                    Delete
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="contained" onClick={() => handleEdit(row)}>
                    Edit
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ gap: "5px" }}>
          <TextField
            name="name"
            id="outlined-basic4"
            style={{ width: "100%" }}
            type="text"
            label="name"
            variant="outlined"
            value={editCategory.name}
            onChange={(e) =>
              setEditCategory({ ...editCategory, name: e.target.value })
            }
          />

          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Categories;
