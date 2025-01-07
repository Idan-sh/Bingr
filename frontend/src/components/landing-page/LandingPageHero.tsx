import { Typography, Button, Container, Box } from "@mui/material";
import { motion } from "motion/react";

function LandingPageHero() {
  const delayInterval = 0.4;
  const distance = 100;

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
        paddingTop: "2rem"
      }}
    >
      <Box width="90%" flexDirection="column">
        <motion.div
          initial={{ opacity: 0, x: distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: delayInterval * 0 }}
        >
          <Typography variant="h2" textAlign="end" gutterBottom>
            Swipe Right
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: delayInterval * 1 }}
        >
          <Typography variant="h2" textAlign="start" gutterBottom>
            to Your
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: delayInterval * 2 }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            Next
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: delayInterval * 3 }}
        >
          <Typography variant="h2" textAlign="end" gutterBottom>
            Binge-Worthy
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: distance }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: delayInterval * 4 }}
        >
          <Typography variant="h2" textAlign="center" gutterBottom>
            Adventure
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delayInterval * 6 }}
      >
        <Typography variant="h6" sx={{ marginTop: "3rem" }}>
          Your personal matchmaker for movies and TV shows!
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
          Swipe your way to the perfect entertainment, tailored just for you.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </motion.div>
    </Container>
  );
}

export default LandingPageHero;
