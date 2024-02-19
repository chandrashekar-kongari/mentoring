import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import SideMenu from './SideMenu';
import TechPactLogo from './techpact-logo-2.png';

const pages = [ 'Log In', 'Sign Up'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
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
  const navigate=useNavigate()
  const handleNavClick=(page)=>{
    if(page=='Log In'){
        navigate('/login')
    }else if(page=='Sign Up'){
      navigate('/signup')
  }
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoClick=()=>{
    navigate('https://www.techpact.org/')
  }
 
  return (
    <>
    <AppBar elevation={0} position="static" sx={{backgroundColor:'#FCFCFC' ,color:'inherit' ,position:'fixed',zIndex:'2'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          
          <Box sx={{width:'15rem'}}>
            <a href='https://www.techpact.org'>
            <img  alt="Logo" src={TechPactLogo} style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%',
                            justifyContent:'center',
                            display:'flex' // Adjust the height as needed
            }}/>
            </a>
            </Box>

          
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: '900',
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Mentoring Program
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },justifyContent:'right' }}>
            {/* <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={()=>toggleDrawer('right', true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton> */}
            <SideMenu/>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'right' }}>
            
              <Button
          
                onClick={()=>handleNavClick('Log In')}
                sx={{ my: 2, color: 'inherit', display: 'block',marginRight:'1rem' }}
              >
                Log In
              </Button>
              <Button
                variant='contained'
                onClick={()=>handleNavClick('Sign Up')}
                sx={{ my: 2, display: 'block' }}
              >
                Sign Up
              </Button>
           
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>

        
      </Container>
    </AppBar>
    </>
  );
}
export default ResponsiveAppBar;