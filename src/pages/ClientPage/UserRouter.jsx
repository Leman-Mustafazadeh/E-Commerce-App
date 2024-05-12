import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/ClientNavbar";
import { Outlet } from "react-router";
import useLocalStorage from "../../hooks/uselocalstroage";
import { getAll } from "../../API";
import endpoints from "../../API/base";

const UserRouter = () => {
   let localBasket =  JSON.parse(localStorage.getItem("basket"))
  const [localStorageUserId, setLocalStorageUserId] = useLocalStorage("UserId", null);
  const localUser = JSON.parse(localStorage.getItem("UserId"));
  const [handUsersId, setHandUsersId] = useState(localUser ? localUser : null);
  const [alluser, setAllUsers] = useState([]);
  const [userProduct, setUserProduct] = useState([]);
  const [messages, setMessages] = useState([]);
  const [basketState , setBasketState] = useState(localBasket ? localBasket.length : 0);
  useEffect(() => {
    getAll(endpoints.users).then((res) => {
      setAllUsers(res.data);
    });
    getAll(endpoints.products).then((res) => {
      setUserProduct(res.data);
    });
  }, []);

 

  return (
    <div>
      <UserNavbar basketState={basketState} setHandUsersId={setHandUsersId} handUsersId={handUsersId} setLocalStorageUserId={setLocalStorageUserId} />
      <Outlet context={[localBasket,setBasketState,messages, setMessages, alluser, setAllUsers, handUsersId, setHandUsersId, localStorageUserId, setLocalStorageUserId, userProduct, setUserProduct]} />
    </div>
  );
};

export default UserRouter;
