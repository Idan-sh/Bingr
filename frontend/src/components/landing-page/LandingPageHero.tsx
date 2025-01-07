import { Typography, Button, Container } from "@mui/material";
import { motion } from "motion/react";

function LandingPageHero() {
  return (
    <Container
      className="landing-page"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        textAlign: "center",
        height: "calc(100vh - 3.9rem)",
        width: "80%",
        paddingTop: "4rem"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" gutterBottom>
          Swipe Right
        </Typography>
        <Typography variant="h2" gutterBottom>
          to Your Next
        </Typography>
        <Typography variant="h2" gutterBottom>
          Binge-Worthy
        </Typography>
        <Typography variant="h2" gutterBottom>
          Adventure
        </Typography>
      </motion.div>
      <Typography variant="h6" sx={{ marginTop: "3rem" }}>
        Your personal matchmaker for movies and TV shows!
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
        Swipe your way to the perfect entertainment, tailored just for you.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Container>
  );
}

export default LandingPageHero;
