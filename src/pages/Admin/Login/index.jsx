import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [users,setUsers,adminId,setAdminId,localStorageId,setlocalStorageId,adProducts,setadProduct] = useOutletContext();
  
  const navigate = useNavigate();
  const foundAdmin = users.find((x) => x.username === admin.username && x.password === admin.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (foundAdmin) {
      if (foundAdmin.role === "admin") {
        setAdminId(foundAdmin.id);
        setlocalStorageId(foundAdmin);
        toast.success("Admin is LOggedin");
        navigate("/admin");
      }
      else{
        toast.error("You are not admin");
      }
    } else {
      setAdmin({username:'',password:''})
      toast.error("Username or Password is incorrect");
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',marginTop:'100px'}}>
      <TextField
        onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
        value={admin.username}
        id="outlined-basic"
        label="username"
        type="text"
        variant="outlined"
      />
      <TextField
        onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
        value={admin.password}
        type="password"
        id="outlined-basic"
        label="password"
        variant="outlined"
      />
      <Button variant="contained" type="submit" style={{marginTop:'10px'}} onClick={()=>{
        setAdminId(null)
        setlocalStorageId(null)
        navigate('/admin/login')
      }}>
        Sign In
      </Button>
    </form>
  );
};

export default Login;
