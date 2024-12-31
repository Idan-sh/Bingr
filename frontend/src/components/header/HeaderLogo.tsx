import { Box, Typography, useTheme } from "@mui/material";

interface HeaderLogoProps {
  display?: { xs?: string; sm?: string; md?: string; lg?: string; xl?: string };
}
function HeaderLogo({ display }: HeaderLogoProps) {
  const theme = useTheme();

  return (
    <Box sx={{ display: display, gap: "0.6rem", alignItems: "center" }}>
      <Box sx={{ display: "flex", gap: "0.3rem" }}>
        <Box
          sx={{
            backgroundColor: theme.custom.pink,
            width: "20px",
            height: "20px",
            borderRadius: "50%"
          }}
          className="circle circle-left"
        ></Box>
        <Box
          sx={{
            backgroundColor: theme.custom.blue,
            width: "20px",
            height: "20px",
            borderRadius: "50%"
          }}
          className="circle circle-right"
        ></Box>
      </Box>
      <Typography
        variant="h4"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: display,
          flexGrow: 1,
          fontWeight: 700,
          letterSpacing: "0rem",
          textDecoration: "none"
        }}
      >
        Bingr
      </Typography>
    </Box>
  );
}

export default HeaderLogo;
