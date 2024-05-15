import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useOutletContext } from "react-router";
import { Button, FormGroup, TextField } from "@mui/material";
import { deleteOne, put } from "../../../API";
import endpoints from "../../../API/base";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useFormik } from "formik";
import Product from "../../../classes/product";
import { productValidation } from "../../../validation/Product";
const Products = () => {
  const [users,setUsers,adminId,setAdminId,localStorageId,setlocalStorageId,adProducts,setadProduct] = useOutletContext();

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
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const handleDelete = (id) => {
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
        deleteOne(endpoints.products, id);
        const del = adProducts.filter((x) => x.id != id);
        setadProduct(del);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

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

  const formik = useFormik({
    initialValues: {
      name: "",
      salePrice: "",
      costPrice: "",
      imgSrc: "",
      discountPercentage: "",
      description: "",
      categoryId: "",
      stockCount: "",
    },
    onSubmit: values => {
      console.log(values);
      
      const newProduct = new Product(values.name, values.salePrice, values.costPrice, values.imgSrc, values.discountPercentage, values.description, values.categoryId, values.stockCount)
      /* post(endpoints.products, newProduct) */
      /* formik.resetForm() */
     /*  toast.success("product added") */
      setadProduct((currentproducts) => {
        return [...currentproducts, newProduct];
      });

     
    },
    /* validationSchema: productValidation */
  })
/* 
  console.log(editProduct); */
 /*  const handleSubmit = (product) => {
    console.log(product);
    // put(endpoints.products,id,value)
    handleClose();
  }; */
  return (
    <>
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
              <StyledTableCell align="right">DELETE</StyledTableCell>
              <StyledTableCell align="right">EDIT</StyledTableCell>
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
                <StyledTableCell align="right">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <img src={row.imgSrc} alt="" width={"100px"} />
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.stockCount}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(row.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  <Button variant="contained" onClick={handleOpen}>
                    Edit{" "}
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
        <Box onSubmit={formik.handleSubmit} sx={style} style={{ gap: "5px" }}>
        <FormGroup style={{ display: "flex", margin: "30px auto", gap: "20px" }}>
          <TextField
            name="name"
            id="outlined-basic1"
            style={{ width: "100%" }}
            type="text"
            label="name"
            variant="outlined"
            value={formik.values.name}
            onChange={() =>formik.handleChange}
          />
          <TextField
            name="salePrice"
            id="outlined-basic2"
            style={{ width: "100%" }}
            type="text"
            label="salePrice"
            variant="outlined"
            value={formik.values.salePrice}
            onChange={() =>formik.handleChange}
          />
          <TextField
            name="costPrice"
            id="outlined-basic3"
            style={{ width: "100%" }}
            type="text"
            label="costPrice"
            variant="outlined"
            value={formik.values.costPrice}
            onChange={()=>formik.handleChange}
          />
          <TextField
            name="description"
            id="outlined-basic4"
            style={{ width: "100%" }}
            type="text"
            label="description"
            variant="outlined"
            value={formik.values.description}
            onChange={()=>formik.handleChange}
          />
          <TextField
            name="imgSrc"
            id="outlined-basic5"
            style={{ width: "100%" }}
            type="url"
            label="imgSrc"
            variant="outlined"
            value={formik.values.imgSrc}
            onChange={() =>formik.handleChange}
          />
          <TextField
            name="stockCount"
            id="outlined-basic6"
            style={{ width: "100%" }}
            type="url"
            label="stockCount"
            variant="outlined"
            value={formik.values.stockCount}
            onChange={() =>formik.handleChange}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
          </FormGroup>
        </Box>
      </Modal>
    </>
  );
};

export default Products;
