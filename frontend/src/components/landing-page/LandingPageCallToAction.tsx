import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function LandingPageCallToAction() {
  return (
    <Box sx={{ textAlign: "center", marginTop: "4rem", marginBottom: "6rem" }}>
      <Typography variant="h4" gutterBottom>
        Join Bingr Today
      </Typography>
      <Typography variant="h6" sx={{ maxWidth: 600, margin: "auto" }}>
        Sign up now to start discovering and matching with movies and TV shows tailored to your
        taste.
      </Typography>
      <Button
        component={Link}
        to={{
          pathname: "/login", // The target path
          search: "?action=signup" // The query parameters
        }}
        variant="contained"
        color="secondary"
        size="large"
        sx={{ marginTop: 2 }}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default LandingPageCallToAction;
