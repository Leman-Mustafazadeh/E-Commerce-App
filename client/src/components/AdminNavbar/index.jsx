import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
const AdminNavbar = ({adminId,setAdminId,localStorageId,setlocalStorageId}) => {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Page
          </Typography>
          {localStorageId && <>
            <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/admin"}
            >
              Products
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/admin/dashboard"}
            >
              Dashboard
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/admin/addproducts"}
            >
              AddProducts
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/admin/addcategory"}
            >
              AddCategory
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/admin/adminusers"}
            >
              AdminUsers
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/admin/categories"}
            >
              Categories
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/admin/messages"}
            >
              Messages
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/admin/orders"}
            >
              {" "}
              Orders
            </Link>
          </Button>
          <Button color="inherit"  onClick={()=>{
        console.log("salm");
        setAdminId(null)
        setlocalStorageId(null)
        navigate('/admin/login')
      }}>
            Logout
          </Button>
          </>}

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AdminNavbar;
