import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
const UserNavbar = () => {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'blanchedalmond'}}>
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
            User Page
          </Typography>
            <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/basket"}
            >
              Basket
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/contactus"}
            >
              Contact Us
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/register"}
            >
              Register
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/user"}
            >
              User
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/userlogin"}
            >
              UserLogin
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/userproductdetail"}
            >
              UserProductDetail
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/userproducts"}
            >
              UserProducts
            </Link>
          </Button>
         
          <Button color="inherit">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/userlogin"}
            >
              Login
            </Link>
          </Button>
          <Button color="inherit">
            Logout
          </Button>
         

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default UserNavbar;
