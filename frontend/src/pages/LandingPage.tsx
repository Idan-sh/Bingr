import { Box } from "@mui/material";
import { motion } from "framer-motion";
import "/src/assets/styles/pages/landing-page.scss";
import LandingPageHero from "../components/landing-page/LandingPageHero";
import LandingPageTrending from "../components/landing-page/LandingPageTrending";
import LandingPageCallToAction from "../components/landing-page/LandingPageCallToAction";

function LandingPage() {
  return (
    <Box>
      <LandingPageHero />
      <LandingPageTrending />
      <LandingPageCallToAction />
    </Box>
  );
}

export default LandingPage;
