import { Box, Grid2, Typography, Link, Divider, ThemeProvider } from "@mui/material";
import HeaderLogo from "../header/HeaderLogo";
import { footerTheme } from "../../themes/FooterTheme";

function Footer() {
  return (
    <ThemeProvider theme={footerTheme}>
      <Box
        sx={{ backgroundColor: "background.default", color: "text.primary", padding: "2rem 1rem" }}
      >
        {/* Main Footer Content */}
        <Grid2 container spacing={4} sx={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Logo and Description */}
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <HeaderLogo display={{ sm: "flex", md: "flex" }} />
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              Your personal matchmaker for movies and TV shows.
            </Typography>
          </Grid2>

          {/* Navigation Sections */}
          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              PRODUCT
            </Typography>
            <Box>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ display: "block", marginBottom: "0.5rem" }}
              >
                Features
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ display: "block", marginBottom: "0.5rem" }}
              >
                Swipe
              </Link>
              <Link href="#" color="inherit" underline="hover" sx={{ display: "block" }}>
                Something Else
              </Link>
            </Box>
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "1rem" }}>
              COMPANY
            </Typography>
            <Box>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ display: "block", marginBottom: "0.5rem" }}
              >
                About Us
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="hover"
                sx={{ display: "block", marginBottom: "0.5rem" }}
              >
                Sustainability
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
              <Link href="#" color="inherit" underline="hover" sx={{ display: "block" }}>
                Blog
              </Link>
            </Box>
          </Grid2>
        </Grid2>

        {/* Social Media Icons */}
        <Box sx={{ textAlign: "center", margin: "2rem 0" }}>
          <Link href="#" sx={{ margin: "0 1rem", color: "inherit" }}>
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link href="#" sx={{ margin: "0 1rem", color: "inherit" }}>
            <i className="fab fa-instagram"></i>
          </Link>
          <Link href="#" sx={{ margin: "0 1rem", color: "inherit" }}>
            <i className="fab fa-youtube"></i>
          </Link>
        </Box>

        {/* Divider */}
        <Divider sx={{ backgroundColor: "#444" }} />

        {/* Certifications */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "2rem 0",
            flexWrap: "wrap"
          }}
        >
          <img
            src="/path-to-certification1.png"
            alt="Certification 1"
            style={{ maxHeight: "50px", margin: "10px" }}
          />
          <img
            src="/path-to-certification2.png"
            alt="Certification 2"
            style={{ maxHeight: "50px", margin: "10px" }}
          />
          <img
            src="/path-to-certification3.png"
            alt="Certification 3"
            style={{ maxHeight: "50px", margin: "10px" }}
          />
          <img
            src="/path-to-certification4.png"
            alt="Certification 4"
            style={{ maxHeight: "50px", margin: "10px" }}
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
