import { Box, Typography, Button, Container } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Box
      sx={{
        height: "calc(100vh - 3.9rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "background.default",
        color: "text.primary"
      }}
    >
      <Container
        sx={{
          textAlign: "center"
        }}
      >
        {/* Icon */}
        <ErrorOutlineIcon
          sx={{
            fontSize: "4rem",
            color: "primary.main",
            marginBottom: "1rem"
          }}
        />

        {/* Title */}
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
        >
          404 - Page Not Found
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ marginBottom: "2rem" }}>
          Oops! The page you're looking for doesn't exist or has been moved. But don't worry, we've
          got you covered!
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            to="/"
            sx={{ textTransform: "none", width: "12rem", padding: "0.8rem 1.5rem" }}
          >
            Go to Home
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            to="/contact"
            sx={{ textTransform: "none", width: "12rem", padding: "0.8rem 1.5rem" }}
          >
            Contact Support
          </Button>
        </Box>

        {/* Footer */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ marginTop: "2rem", display: "block" }}
        >
          If you believe this is an error, please let us know.
        </Typography>
      </Container>
    </Box>
  );
}

export default NotFoundPage;
