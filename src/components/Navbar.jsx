import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoginState } from "../store/atoms/Course";

const pages = ["Browse", "Courses", "Community"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [buttonsDisplay,setButtonsDisplay] = React.useState('flex');
  const [userDisplay,setUserDisplay] = React.useState('none');

  const [isLogin, setIsLogin] = useRecoilState(isLoginState);

  useEffect(()=>{
    if(localStorage.token){
      setButtonsDisplay('none');
      setUserDisplay('flex');
    }else{
      setButtonsDisplay('flex');
      setUserDisplay('none');
    }
  },[localStorage.token]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    // props.updateIsLogin(false);
    setIsLogin(false);
    navigate('/');
  };

  const handleUserMenu = (menu) => () => {
    if (menu === 'Logout') handleLogout();
    setAnchorElUser(null);
  };
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

  const navigate = useNavigate();

  return (
    <AppBar position="sticky" open={Boolean(false)} sx={{zIndex:1500}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', justifyContent:'flex-end'}}>
          <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1,cursor:'pointer' }} onClick={()=>{navigate('/')}}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={()=>{navigate('/')}}
            sx={{
              mr: 0,
              display: { xs: "none", md: "flex" },
              fontFamily: "Helvetica",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              cursor:'pointer'
            }}
          >
            bitlearn
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            onClick={()=>{navigate('/')}}
            sx={{
              mr: 3,
              display: { xs: "none", md: "flex" },
              fontFamily: "Helvetica",
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
              cursor:'pointer'
            }}
          >
            .com
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "inherit" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <SchoolIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 0,
              display: { xs: "flex", md: "none" },
              fontFamily: "Helvetica",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            bitlearn
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 3,
              display: { xs: "flex", md: "none" },
              fontFamily: "Helvetica",
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".1rem",
              textDecoration: "none",
            }}
          >
            .com
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "inherit", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: buttonsDisplay }, flexGrow: 0,marginRight: 0 }}>
            <Button
              color="secondary"
              sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}
              onClick={()=>{
                navigate('/admin');
              }}
            >
              Join as Tutor
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                border: "2px solid",
                fontWeight: "500",
              }}
              onClick={()=>{
                navigate('/login');
              }}
            >
              Log In
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              onClick={()=>{
                navigate('/signup');
              }}
            >
              Sign Up
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", md: userDisplay }, flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0}}>
                <Avatar sx={{ p: 0, color:'#ce93d8'}}/>
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleUserMenu(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
