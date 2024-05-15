import { Box, Button, FormControl, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { post } from '../../../API';
import endpoints from '../../../API/base';
import { useNavigate, useOutletContext } from 'react-router';
import Product from '../../../classes/product';
import { toast } from 'react-toastify';
import { productValidation } from '../../../validation/Product';

const AddProducts = () => {
  const [users, setUsers, adminId, setAdminId, localStorageId, setlocalStorageId, adProducts, setadProduct, messag, setMessag, category, setCategory] = useOutletContext();
  const navigate = useNavigate();

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
      console.log("Submitted values:", values);
      const newProduct = new Product(values.name, values.salePrice, values.costPrice, values.imgSrc, values.discountPercentage, values.description, values.categoryId, values.stockCount);
      post(endpoints.products, newProduct);
      formik.resetForm();
      toast.success("product added");
      setadProduct(currentproducts => [...currentproducts, newProduct]);
      navigate('/admin');
    },
    validationSchema: productValidation
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <FormGroup style={{ display: "flex", width: "1200px", margin: "30px auto", gap: "20px" }}>
          <TextField value={formik.values.name} onChange={formik.handleChange} id="outlined-basic" name="name" label="Name" variant="outlined" />
          <span style={{ color: 'red' }}>{formik.errors.name}</span>

          <TextField value={formik.values.salePrice} onChange={formik.handleChange} id="outlined-basic" name="salePrice" label="Sale Price" variant="outlined" />
          <span style={{ color: 'red' }}>{formik.errors.salePrice}</span>

          <TextField value={formik.values.costPrice} onChange={formik.handleChange} id="outlined-basic" name="costPrice" label="Cost Price" variant="outlined" />
          <span style={{ color: 'red' }}>{formik.errors.costPrice}</span>

          <TextField value={formik.values.imgSrc} onChange={formik.handleChange} id="outlined-basic" name="imgSrc" label="Image Src" variant="outlined" />
          <span style={{ color: 'red' }}>{formik.errors.imgSrc}</span>

          <TextField value={formik.values.discountPercentage} onChange={formik.handleChange} id="outlined-basic" name="discountPercentage" label="Discount Percentage" variant="outlined" />
          <span style={{ color: 'red' }}>{formik.errors.discountPercentage}</span>

          <TextField value={formik.values.description} onChange={formik.handleChange} id="outlined-basic" name="description" label="Description" variant="outlined" />
          <span style={{ color: 'red' }}>{formik.errors.description}</span>

          <TextField value={formik.values.stockCount} onChange={formik.handleChange} id="outlined-basic" name="stockCount" label="Stock Count" variant="outlined" />
          <span style={{ color: 'red' }}>{formik.errors.stockCount}</span>

          <FormControl fullWidth>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category-select"
              value={formik.values.categoryId}
              onChange={formik.handleChange}
              label="Category"
              name="categoryId"
            >
              {category.map((mycategory) => (
                <MenuItem key={mycategory.id} value={mycategory.id}>{mycategory.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button type="submit">Add Product</Button>
        </FormGroup>
      </Box>
    </>
  );
};

export default AddProducts;
