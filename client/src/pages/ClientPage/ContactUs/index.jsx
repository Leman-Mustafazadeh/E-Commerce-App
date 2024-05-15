import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { post } from "../../../API";
import endpoints from "../../../API/base";
import Message from "../../../classes/messages";
import contactschema from "../../../validation/contactus";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      title: "",
      messages: "",
    },
    onSubmit:(values)=> {
      console.log(values);
      const newMessage = new Message(
        values.fullName,
        values.email,
        values.title,
        values.messages
      );
      post(endpoints.messages, newMessage);
      formik.resetForm();
    },
    validationSchema: contactschema,
  });
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.119831283707!2d-122.41962278470902!3d37.774929979757714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808934948f71%3A0x4a501367f076adff!2sGolden+Gate+Bridge!5e0!3m2!1sen!2sus!4v1552627500863"
        width="600"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>

      <form
        onSubmit={formik.handleSubmit}
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "40%",
        }}
      >
        <TextField
          onChange={formik.handleChange}
          value={formik.values.fullName}
          id="outlined-basic1"
          label="fullName"
          variant="outlined"
          name="fullName"
        />
        <span style={{ color: "red" }}>{formik.errors.fullName}</span>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.email}
          id="outlined-basic2"
          label="email"
          variant="outlined"
          name="email"
        />
        <span style={{ color: "red" }}>{formik.errors.email}</span>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.title}
          id="outlined-basic3"
          label="title"
          variant="outlined"
          name="title"
        />
        <span style={{ color: "red" }}>{formik.errors.messages}</span>
        <TextField
          onChange={formik.handleChange}
          value={formik.values.messages}
          id="outlined-basic4"
          label="messages"
          variant="outlined"
          name="messages"
        />
        <span style={{ color: "red" }}>{formik.errors.messages}</span>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
