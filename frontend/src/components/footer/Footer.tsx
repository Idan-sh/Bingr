import { Box, Grid2, Typography, Link, Divider, ThemeProvider } from "@mui/material";
import HeaderLogo from "../header/HeaderLogo";
import { footerTheme } from "../../themes/FooterTheme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <ThemeProvider theme={footerTheme}>
      <Box
        sx={{ backgroundColor: "background.default", color: "text.primary", padding: "2rem 1rem" }}
      >
        {/* Main Footer Content */}
        <Grid2 container spacing={4} sx={{ maxWidth: "1200px", margin: "0 auto 2rem" }}>
          {/* Logo and Description */}
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <HeaderLogo display={{ sm: "flex", md: "flex" }} />
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              Your personal matchmaker for movies and TV shows.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ textAlign: "center", margin: "1rem 0" }}>
              <Link href="#" sx={{ margin: "0 1rem", color: "inherit" }}>
                <FacebookIcon />
              </Link>
              <Link href="#" sx={{ margin: "0 1rem", color: "inherit" }}>
                <InstagramIcon />
              </Link>
              <Link href="#" sx={{ margin: "0 1rem", color: "inherit" }}>
                <YouTubeIcon />
              </Link>
            </Box>
          </Grid2>

          {/* Navigation Sections */}
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              PRODUCT
            </Typography>
            <Box>
              <Link
                href="/features"
                color="inherit"
                underline="hover"
                sx={{ display: "block", marginBottom: "0.5rem" }}
              >
                Features
              </Link>
              <Link
                href="/swipe"
                color="inherit"
                underline="hover"
                sx={{ display: "block", marginBottom: "0.5rem" }}
              >
                Swipe
              </Link>
              <Link href="/browse" color="inherit" underline="hover" sx={{ display: "block" }}>
                Browse
              </Link>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              COMPANY
            </Typography>
            <Box>
              <Link
                href="/about-us"
                color="inherit"
                underline="hover"
                sx={{ display: "block", marginBottom: "0.5rem" }}
              >
                About Us
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ display: "block" }}>
                Something Else
              </Link>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              COMMUNITY
            </Typography>
            <Box>
              <Link href="/blog" color="inherit" underline="hover" sx={{ display: "block" }}>
                Blog
              </Link>
            </Box>
          </Grid2>
        </Grid2>

        {/* Divider */}
        <Divider sx={{ backgroundColor: "#444" }} />

        {/* Certifications */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
          }}
        >
          <img
            src="/imgs/streaming-services-logos/netflix-logo.png"
            alt="Netflix"
            style={{ maxWidth: "100px", objectFit: "contain", margin: "10px" }}
          />
          <img
            src="/imgs/streaming-services-logos/hulu-logo.svg"
            alt="Hulu"
            style={{ maxWidth: "100px", objectFit: "contain", margin: "10px" }}
          />
          <img
            src="/imgs/streaming-services-logos/disney-plus-logo.png"
            alt="Disney+"
            style={{ maxWidth: "100px", objectFit: "contain", margin: "10px" }}
          />
          <img
            src="/imgs/streaming-services-logos/prime-video-logo.png"
            alt="Prime Video"
            style={{ maxWidth: "100px", objectFit: "contain", margin: "10px" }}
          />
        </Box>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            © 2025 Bingr. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
