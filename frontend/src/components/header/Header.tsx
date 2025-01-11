import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HeaderLogo from "./HeaderLogo";
import ThemeToggleButton from "./ThemeToggleButton";
import "/src/assets/styles/components/header.scss";
import { Collapse } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const pages = ["swipe", "browse", "pricing", "blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar id="app-header" position="sticky" sx={{ backgroundColor: "background.default" }}>
      <Container>
        <Toolbar className="header-tool-bar" disableGutters>
          <HeaderLogo display={{ xs: "none", sm: "none", md: "flex" }} />

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "flex", md: "none" } }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleMenu}
              color="info"
            >
              <MenuIcon sx={{ fontSize: "1.8rem" }} />
            </IconButton>
          </Box>

          <HeaderLogo flexGrow={1} display={{ xs: "flex", sm: "flex", md: "none" }} />

          {/* Desktop Menu */}
          <Box sx={{ ml: 4, flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Typography
                variant="h2"
                noWrap
                component="a"
                color="info"
                key={page}
                href={`/${page}`}
                sx={{
                  mr: 6,
                  display: "inline",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  textDecoration: "none",
                  textTransform: "uppercase"
                }}
              >
                {page}
              </Typography>
            ))}
          </Box>

          <ThemeToggleButton />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

        {/* Collapsible Menu */}
        <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "background.default",
              padding: "0.8rem 1rem 0.2rem 1rem"
            }}
          >
            {pages.map((page, index) => (
              <MenuItem
                key={page}
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate(`/${page}`);
                }}
                sx={{ borderBottom: index === pages.length - 1 ? "none" : "1px solid gray" }}
              >
                <Typography sx={{ fontSize: "1.4rem" }}>{page}</Typography>
              </MenuItem>
            ))}
          </Box>
        </Collapse>
      </Container>
    </AppBar>
  );
}
export default Header;
