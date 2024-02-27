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
import LogoutIcon from '@mui/icons-material/Logout';
import ClearIcon from '@mui/icons-material/Clear';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import SideMenu from './SideMenu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from 'react-redux';
import axios from 'axios';
import endpoint from '../API/api';
import techPactHomeURL from '../API/TechPactHomeURL';

const pages = [ 'Home', 'Profile','Settings', 'Lifecycle', 'Contact Us','Privacy Policy','Log out'];
const desktopPages = [ 'Home', 'Contact Us'];


function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const u=useSelector(state=>state.userObj)
  const [email,setEmail]=React.useState('')
  const [loading,setLoading]=React.useState(true)





  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate=useNavigate()
  const handleNavClick=(page)=>{
    if(page=='Home'){
        navigate('/homepage')
    }else if(page=='Profile'){
      navigate('/profile')
  }else if(page=='Log Out'){
    localStorage.setItem('token','')
    navigate('/')
  }else if(page=='Contact Us'){
    navigate('/contactus')
  }else if(page=='Privacy Policy'){
    navigate('/privacy-policy')
  }
  else if(page=='Help Center'){
    navigate('/help-center')
  }
  else if(page=='Lifecycle'){
    navigate('/lifecycle')
  }
  else if(page=='Settings'){
    navigate('/settings')
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

    <AppBar elevation={2} position="static" sx={{backgroundColor:'white' ,color:'inherit' ,zIndex:'2'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
         
          
          <Box sx={{width:'15rem'}}>
          <a href={'https://www.techpact.org/'}>
            <img   alt="Logo" src="techpact-logo-2.png" style={{
                            width: '50%', 
                            height: '50%',
                            justifyContent:'center',
                            display:'flex' 
            }}/>
            </a>
            </Box>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },justifyContent:'right' }}>

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
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'right' }}>
            {desktopPages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleNavClick(page)}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{display: { xs: 'none', md: 'flex' }}}>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                
              >
                <Stack sx={{flex:1,flexDirection:'row',justifyContent:'right',paddingRight:'1rem'}}>
                <IconButton sx={{padding:'0px',margin:'0px'}}>
                <ClearIcon onClick={handleClose}/>
                </IconButton>
                </Stack>
                <Box sx={{width:'250px'}}>
                    {/* <Typography sx={{fontSize:'14px',paddingLeft:'1rem',paddingRight:'1rem',paddingTop:'1rem',paddingBottom:'4px'}}>Signed in as</Typography>
                    <Typography sx={{fontSize:'14px',paddingLeft:'1rem',paddingBottom:'1rem',paddingRight:'5px',textOverflow: 'ellipsis',maxWidth: '25ch',overflow:'hidden',whiteSpace:'hidden',fontWeight:'bold'}}>{email}</Typography> */}
                <Stack spacing={1} sx={{borderTop:'1px solid #f2eeed'}}>
                <MenuItem sx={{}} onClick={()=>handleNavClick('Profile')}>Profile</MenuItem>
                {/* <MenuItem sx={{}} onClick={()=>handleNavClick('Lifecycle')}>Lifecycle</MenuItem> */}
                <MenuItem sx={{}} onClick={()=>handleNavClick('Settings')}>Settings</MenuItem>
                <MenuItem sx={{}} onClick={()=>handleNavClick('Contact Us')}>Contact Us</MenuItem>

                <MenuItem sx={{}} onClick={()=>handleNavClick('Privacy Policy')}>Privacy Policy</MenuItem>

                <MenuItem onClick={()=>handleNavClick('Log Out')}>Sign out<LogoutIcon fontSize='small' sx={{paddingLeft:'3px',color:'red'}}/></MenuItem>
                </Stack>
                </Box>
              </Menu>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {/* <AccountCircle /> */}
                <AccountCircleIcon/>
              </IconButton>

            </Box>

        </Toolbar>

        
      </Container>
    </AppBar>
    </>
  );
}
export default Header;