import { useFormik } from 'formik'
import React from 'react'
import Category from '../../../classes/category'
import { post } from '../../../API'
import endpoints from '../../../API/base'
import { Box, Button, FormGroup, TextField } from '@mui/material'
import { useNavigate } from 'react-router'
import { categorySchema } from '../../../validation/Category'

const AddCategory = ({category,setCategory}) => {
const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{name:''},
    onSubmit:(values)=>{
      console.log(values);
      const newCategory = new Category(values.name)
      post(endpoints.categories,newCategory)
      formik.resetForm()
      setCategory((current)=>{
        return [...current,newCategory]
      })
      navigate("/admin/categories")
    },

    validationSchema:categorySchema
  })
  return (
    <div>
      <Box      component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">

      <FormGroup style={{ display: "flex", width: "1200px", margin: "30px auto", gap: "20px" }}>
          <TextField value={formik.values.name} onChange={formik.handleChange} id="outlined-basic" name="name" label="name" variant="outlined" />
          {formik.errors.name && <span style={{ color: 'red' }}>{formik.errors.name}</span>}
          <Button type='submit' >Add Category</Button>
        </FormGroup>
      </Box>
    </div>
  )
}
export default AddCategory
