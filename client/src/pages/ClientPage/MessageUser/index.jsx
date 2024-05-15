import { Box, Button, FormGroup, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useOutletContext } from "react-router";
import Message from "../../../classes/messages";
import { toast } from "react-toastify";
import { post } from "../../../API";
import endpoints from "../../../API/base";
import { contactUsSchema } from "../../../validation/Messages";

const MessageUser = () => {
  const [localBasket,setBasketState,messages, setMessages, alluser, setAllUsers, handUsersId, setHandUsersId, localStorageUserId, setLocalStorageUserId, userProduct, setUserProduct]= useOutletContext();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      title: "",
      messages: "",
    },
    onSubmit: (values) => {
      const newMessages = new Message(
        values.fullName,
        values.email,
        values.title,
        values.messages
      );
      post(endpoints.messages, newMessages);
      formik.resetForm();
      toast.success("messages added");
      setMessages((currentproducts) => {
        return [...currentproducts, newMessages];
      });
    },
    validationSchema: contactUsSchema,
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: "30px auto",
        gap: "20px",
      }}
    >
      <TextField
        name="fullName"
        id="outlined-basic1"
        style={{ width: "100%" }}
        type="text"
        label="fullName"
        variant="outlined"
        onChange={formik.handleChange}
        value={formik.values.fullName}
      />
      <span style={{ color: "red" }}>{formik.errors.fullName}</span>
      <TextField
        id="outlined-basic4"
        style={{ width: "100%" }}
        type="email"
        label="email"
        variant="outlined"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <span style={{ color: "red" }}>{formik.errors.email}</span>
      <TextField
        name="title"
        id="outlined-basic4"
        style={{ width: "100%" }}
        type="text"
        label="title"
        variant="outlined"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      <span style={{ color: "red" }}>{formik.errors.title}</span>
      <TextField
        name="messages"
        id="outlined-basic4"
        style={{ width: "100%" }}
        type="text"
        label="messages"
        variant="outlined"
        value={formik.values.messages}
        onChange={formik.handleChange}
      />
      <span style={{ color: "red" }}>{formik.errors.messages}</span>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default MessageUser;
