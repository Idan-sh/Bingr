import { useState } from "react";
import { Box, Container, Typography, TextField, Button, Link } from "@mui/material";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: add login logic using backend API
    console.log("Email:", email, "Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <Box
      sx={{
        color: "text.primary",
        height: "calc(100vh - 3.9rem)",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Box width="60%">
        <Container
          maxWidth="sm"
          sx={{
            padding: "2rem",
            textAlign: "center"
          }}
        >
          {/* Title */}
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Login
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
            Welcome back! Please log in to your account.
          </Typography>

          {/* Email Field */}
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              marginBottom: "1.5rem"
            }}
          />

          {/* Password Field */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: "1rem" }}
          />

          {/* Forgot Password Link */}
          <Box sx={{ textAlign: "right", marginBottom: "2rem" }}>
            <Link href="/forgot-password" color="primary" underline="hover">
              Forgot my password?
            </Link>
          </Box>

          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            onClick={handleLogin}
            sx={{
              padding: "0.8rem",
              fontWeight: "bold",
              fontSize: "1rem",
              textTransform: "none"
            }}
          >
            Login
          </Button>

          {/* Footer */}
          <Typography variant="body2" sx={{ marginTop: "2rem" }}>
            Don't have an account?{" "}
            <Link href="/register" color="primary" underline="hover">
              Sign up
            </Link>
          </Typography>
        </Container>
      </Box>
      <Box width="40%" height="100%" sx={{ backgroundColor: "background.paper" }}></Box>
    </Box>
  );
}

export default LoginPage;
