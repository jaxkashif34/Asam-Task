import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";

import menuOutlined from "@iconify/icons-ant-design/menu-outlined";
import Logo from "Assets/Images/ilovepdf.svg";
import caretDownFilled from "@iconify/icons-ant-design/caret-down-filled";
import { Icon } from "@iconify/react";
import desktopDownload24 from "@iconify/icons-octicon/desktop-download-24";

const pages = [
  {
    name: "MERGE PDF",
  },
  {
    name: "SPLIT PDF",
  },
  {
    name: "COMPRESS PDF",
  },
  {
    name: "CONVERT PDF",
    icon: <Icon icon={caretDownFilled} width={13} heigh={13} />,
  },
  {
    name: "ALL PDF TOOLS",
    icon: <Icon icon={caretDownFilled} width={13} heigh={12} />,
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="img" src={Logo} alt="Logo" width={100} height={80} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "text.primary" }}>
                    {page.name}
                  </Typography>
                  {page.icon}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, ml: 5, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page.name}
                {page.icon}
              </Button>
            ))}
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ color: "black", display: { xs: "none", md: "flex" } }}
          >
            <Button
              variant="contained"
              sx={{ color: "black", "&:hover": { background: "inherit" } }}
            >
              <Icon icon={desktopDownload24} width={40} height={40} />
            </Button>
            <Stack direction="row">
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  padding: "1rem 0.4rem",
                  bgcolor: "#bab5b5",
                }}
              >
                Login
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  backgroundColor: "#ed1a29",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  padding: "1rem 0.4rem",
                }}
              >
                SignUp
              </Typography>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            sx={{ color: "black", "&:hover": { background: "inherit" } }}
          >
            <Icon
              icon={menuOutlined}
              sx={{
                color: "black",
                bgcolor: "red",
                display: { xs: "block", md: "none" },
              }}
              width={45}
              heigh={45}
            />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
