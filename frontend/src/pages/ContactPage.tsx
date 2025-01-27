import React, { useState } from "react";
import { Box, TextField, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);

    // TODO: send email containing all info

    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <Box
      sx={{
        height: "calc(100vh - 3.9rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "text.primary",
        padding: "2rem"
      }}
    >
      <Container
        maxWidth="md"
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          textAlign: "center"
        }}
      >
        {/* Title */}
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            marginBottom: "1rem",
            fontSize: { xs: "2rem", sm: "3rem" }
          }}
        >
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          We'd love to hear from you! Please fill out the form below, and we'll get back to you as
          soon as possible.
        </Typography>

        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem"
          }}
        >
          {/* Name Field */}
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          {/* Email Field */}
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          {/* Message Field */}
          <TextField
            fullWidth
            label="Your Message"
            name="message"
            multiline
            rows={5}
            variant="outlined"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{
              padding: "0.8rem 1.5rem",
              fontWeight: "bold",
              textTransform: "none",
              fontSize: "1rem"
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactPage;
