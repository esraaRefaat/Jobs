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
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddJobFrom from "../../components/addJob/addJobCard";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const usertoken = useSelector((state) => state.Token.token);

  const message = useSelector((state) => state.Token.token.message);
  const role = useSelector((state) => state.Token.token.user_role);
  console.log(role, message);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const location = useLocation();
  
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        color: "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src="/logo.svg"
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography> */}

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}

          <Box //left container
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {!message && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  marginRight: 3,
                  gap: 3,
                }}
              >
                <Button
                  primary
                  key={Math.random()}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/login");
                  }}
                  sx={{
                    my: 2,
                    display: "block",
                    // color: location.pathname === "/login" ? "primary" : "grey",
                  }}
                >
                  Login
                </Button>
                <Button
                  variant="contained"
                  primary
                  key={Math.random()}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/signup");
                  }}
                  sx={{
                    my: 2,
                    display: "block",

                    // color: location.pathname === "/login" ? "primary" : "grey",
                  }}
                >
                  Signup
                </Button>
              </Box>
            )}

            {role == "hr" && (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  marginLeft: 3,
                  gap: 3,
                }}
              >
                <AddJobFrom></AddJobFrom>

                {/* <Button
                  variant="outlined"
                  primary
                  key={Math.random()}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/login");
                  }}
                  sx={{
                    my: 2,
                    display: "block",
                  }}
                >
                  Add Job
                </Button> */}
              </Box>
            )}

            {message && (
              <Box // login & signup container
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  marginRight: 3,
                }}
              >
                <Button
                  key={Math.random()}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/");
                  }}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    color: location.pathname === "/" ? "primary" : "grey",
                  }}
                >
                  Home
                </Button>

                <Button
                  key={Math.random()}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("/search");
                  }}
                  sx={{
                    my: 2,
                    display: "block",
                    color: location.pathname === "/search" ? "primary" : "grey",
                  }}
                >
                  find jobs
                </Button>
              </Box>
            )}
          </Box>

          {message && (
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
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem
                  key={Math.random()}
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("/profile");
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        location.pathname === "/profile" ? "primary" : "black",
                    }}
                    textAlign="center"
                  >
                    Profile
                  </Typography>
                </MenuItem>
                <MenuItem
                  key={Math.random()}
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("/login");
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        location.pathname === "/signup" ? "primary" : "black",
                    }}
                    textAlign="center"
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

