import { useState } from "react";
import { Box, Container, Typography, TextField, Button, Link } from "@mui/material";
import { motion } from "motion/react";

function LoginPage() {
  const [isLogin, setIsSignIn] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => setIsSignIn((prev) => !prev);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (isLogin) {
      // TODO: add login logic using backend API

      setEmail("");
      setPassword("");
      console.log("Email:", email, "Password:", password);
    } else {
      // TODO: add sign up logic using backend API

      console.log("Sign Up Logic");
    }
  };

  return (
    <Box
      sx={{
        color: "text.primary",
        backgroundColor: "background.paper",
        height: "calc(100vh - 3.9rem)",
        width: "100%",
        display: "flex",
        overflow: "hidden",
        justifyContent: isLogin ? "flex-start" : "flex-end"
      }}
    >
      <Box
        component={motion.div}
        key={isLogin ? "login" : "signup"}
        initial={{ x: isLogin ? "-100%" : "100%" }} // Start position based on the state
        animate={{ x: 0 }} // Animate to the center
        exit={{ x: isLogin ? "100%" : "-100%" }} // Exit to the opposite direction
        transition={{
          type: "spring", // Use a spring animation for bounce
          stiffness: 120, // Controls the bounciness
          damping: 10 // Reduces overshooting
        }}
        alignContent="center"
        sx={{
          backgroundColor: "background.default",
          height: "100%",
          width: { xs: "100%", sm: "70%", md: "60%" },
          padding: "2rem",
          textAlign: "center"
        }}
      >
        {/* Title */}
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          {isLogin ? "Login" : "Sign Up"}
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          {isLogin
            ? "Welcome back! Please log in to your account."
            : "Create your account and start your journey."}
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
          onClick={handleSubmit}
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
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <Link
                onClick={toggleForm}
                color="primary"
                underline="hover"
                sx={{ cursor: "pointer" }}
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                onClick={toggleForm}
                color="primary"
                underline="hover"
                sx={{ cursor: "pointer" }}
              >
                Login
              </Link>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginPage;
