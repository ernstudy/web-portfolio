"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Modal, Box } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

import { Send } from "@mui/icons-material";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,

        {
          to_name: "Ernstudy.com",
          from_name: data.fullName,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully! 😊👍");
          setOpen(true);
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error);
          setLoading(false);
          setSuccessMessage("Failed to send message. Please try again. ❌");
          setOpen(true);
        }
      );
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
    router.push("/");
  };

  //   loading
  const [loading, setLoading] = React.useState(false);

  return (
    <Box component="div" maxWidth="500px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Full Name"
          {...register("fullName", { required: "Full name is required" })}
          fullWidth
          margin="normal"
          error={!!errors.fullName}
          helperText={errors.fullName ? errors.fullName.message : ""}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.4rem",
            },
          }}
        />
        <TextField
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.4rem",
            },
          }}
        />
        <TextField
          label="Message"
          {...register("message", { required: "Message is required" })}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          error={!!errors.message}
          helperText={errors.message ? errors.message.message : ""}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1.6rem",
            },
            "& .MuiInputLabel-root": {
              fontSize: "1.4rem",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          endIcon={<Send />}
          loading={loading}
          loadingPosition="end"
          style={{ fontSize: "clamp(1.6rem, 2.5vw, 1.8rem" }}
        >
          Submit
        </Button>
      </form>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
        component="div"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #ccc",
            boxShadow: 24,
            p: 2,
            textAlign: "center",
          }}
          component="div"
        >
          <Typography id="success-modal-title" variant="h6" component="h2">
            {successMessage.includes("successfully") ? "Success!" : "Error"}
          </Typography>
          <Typography
            variant="subtitle2"
            id="success-modal-description"
            sx={{ mt: 2 }}
          >
            {successMessage}
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactForm;
