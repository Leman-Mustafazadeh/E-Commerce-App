import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/ClientNavbar";
import { Outlet } from "react-router";
import useLocalStorage from "../../hooks/uselocalstroage";
import { getAll } from "../../API";
import endpoints from "../../API/base";

const UserRouter = () => {
  const [localStorageUserId,setlocalStorageUserId] = useLocalStorage("UserId",null)
  const localUser = JSON.parse(localStorage.getItem("UserId"))
  const [handUsersId,sethandUsersId] = useState(localUser? localUser: null)
  const [alluser,setallUsers] = useState([])
const [product,setProduct] = useState([])
  useEffect(()=>{
    getAll(endpoints.users).then((res)=>{
      setallUsers(res.data)
    })
    getAll(endpoints.products).then((res)=>{
      setProduct(res.data)
    })
  },[])
  console.log(product);
  return (

    <div>
      <UserNavbar />
      <Outlet context={[alluser,setallUsers,handUsersId,sethandUsersId,localStorageUserId,setlocalStorageUserId,product,setProduct]} />
    </div>
  );
};

export default UserRouter;
