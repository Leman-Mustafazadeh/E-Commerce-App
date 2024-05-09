import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import UserRegisterSchema from "../../../validation/UserRegisterSchema"
import User from '../../../classes/userClass'
import { post } from '../../../API'
import endpoints from '../../../API/base'
import { useNavigate } from 'react-router'
const Register = () => {
const navigate = useNavigate()
  const formik = useFormik({
    initialValues:{
      username:'',
      password:'',
      confirmPassword:'',
      email:'',
      profileImg:'',
      balance:''
    },
    onSubmit:values=>{
      console.log(values);
     const newuser= new User(values.username, values.password, values.email, values.profileImg, values.balance)
     post(endpoints.users,newuser)
     formik.resetForm()
     navigate("/login")

    },
    validationSchema : UserRegisterSchema
  })
  return (
    <div style={{textAlign:'center',marginTop:'10px'}}>
      <h1>Register</h1>
      <form action="" onSubmit={formik.handleSubmit} style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'5px',width:'30%',margin:'0 auto'}}>
      <TextField onChange={formik.handleChange} value={formik.values.username} name='username' style={{width:'100%'}} id="outlined-basic" type='username' label="username" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.username}</span>
      <TextField onChange={formik.handleChange} value={formik.values.password} name='password' id="outlined-basic" style={{width:'100%'}} type='password'  label="password" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.password}</span>
      <TextField onChange={formik.handleChange} value={formik.values.confirmPassword} name='confirmPassword' id="outlined-basic" style={{width:'100%'}} type='password' label="confirmpassword" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.confirmPassword}</span>
      <TextField onChange={formik.handleChange} value={formik.values.email} name='email' id="outlined-basic" style={{width:'100%'}} type='email' label="email" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.email}</span>
      <TextField onChange={formik.handleChange} value={formik.values.profileImg} name='profileImg' id="outlined-basic" style={{width:'100%'}} type='url' label="profileImg" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.profileImg}</span>
      <TextField onChange={formik.handleChange} value={formik.values.balance} name='balance' id="outlined-basic" style={{width:'100%'}} type='balance' label="balance" variant="outlined" />
      <span style={{color:'red'}}>{formik.errors.balance}</span>
      <Button variant="contained" style={{width:'100%'}} type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default Register
