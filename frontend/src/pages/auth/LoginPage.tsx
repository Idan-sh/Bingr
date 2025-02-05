import { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useSearchParams } from "react-router-dom";

function LoginPage() {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const [isLogin, setIsSignIn] = useState(action === "signup" ? false : true); // Set isLogin to true only if the action is not signup (the default action is login)

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
        position: "relative",
        color: "text.primary",
        backgroundColor: "background.paper",
        height: "calc(100vh - 3.9rem)",
        width: "100%",
        display: "flex",
        overflow: "hidden"
      }}
    >
      <Box
        alignContent="center"
        sx={{
          position: "absolute",
          backgroundColor: "background.default",
          height: "100%",
          width: { xs: "100%", sm: "100%", md: "60%" },
          padding: { xs: "10%", sm: "20%", md: "12%" },
          textAlign: "center",
          left: isLogin ? "0" : { xs: 0, sm: 0, md: "40%" },
          transition: "left 0.5s ease-in"
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
