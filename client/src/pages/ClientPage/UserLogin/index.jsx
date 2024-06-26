import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate, useOutletContext } from 'react-router'
import { toast } from 'react-toastify'
import UserLoginSchema from '../../../validation/UserLogin'

const UserLogin = () => {
  const [localBasket,setBasketState,messages, setMessages, alluser, setAllUsers, handUsersId, setHandUsersId, localStorageUserId, setLocalStorageUserId, userProduct, setUserProduct] = useOutletContext()
  const navigate = useNavigate()
console.log(alluser);
  const formik = useFormik({
    initialValues:{
      username:'',
      password:''
    },
    onSubmit:(values) => {
     
      const foundUser = alluser.find((x) => x.username === values.username && x.password === values.password)
     
      if(foundUser){
        if(foundUser.role === 'client'){
          setHandUsersId(foundUser.id)
          setLocalStorageUserId(foundUser.id)
          toast.success("User is logged in");
          navigate('/userproducts')
        } else {
          toast.error("Username or Password is incorrect")
        }
      } else {
        toast.error("Username or Password is incorrect")
      }
    },
    validationSchema: UserLoginSchema
  })

  return (
    <div style={{textAlign:'center'}}>
      <h1> User Login</h1>
      <form onSubmit={formik.handleSubmit} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'50px',gap:'10px'}}>
        <TextField
          value={formik.values.username}
          onChange={formik.handleChange}
          name='username'
          id="outlined-basic"
          label="Username"
          type="text"
          variant="outlined"
        />
        <TextField
          value={formik.values.password}
          name='password'
          onChange={formik.handleChange}
          type="password"
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <Button variant="contained" type="submit" style={{marginTop:'10px'}} >
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default UserLogin
