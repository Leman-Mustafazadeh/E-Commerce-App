import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/ClientNavbar";
import { Outlet } from "react-router";
import useLocalStorage from "../../hooks/uselocalstroage";
import { getAll } from "../../API";
import endpoints from "../../API/base";

const UserRouter = () => {
  const [localStorageUserId, setLocalStorageUserId] = useLocalStorage("UserId", null);
  const localUser = JSON.parse(localStorage.getItem("UserId"));
  const [handUsersId, setHandUsersId] = useState(localUser ? localUser : null);
  const [alluser, setAllUsers] = useState([]);
  const [userProduct, setUserProduct] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getAll(endpoints.users).then((res) => {
      setAllUsers(res.data);
    });
    getAll(endpoints.products).then((res) => {
      setUserProduct(res.data);
    });
  }, []);

  console.log(userProduct);

  return (
    <div>
      <UserNavbar />
      <Outlet context={[messages, setMessages, alluser, setAllUsers, handUsersId, setHandUsersId, localStorageUserId, setLocalStorageUserId, userProduct, setUserProduct]} />
    </div>
  );
};

export default UserRouter;
