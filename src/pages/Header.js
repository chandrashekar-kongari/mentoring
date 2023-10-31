import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Menu, MenuItem, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch,useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import ClearIcon from '@mui/icons-material/Clear';

import { saveUserObj, setAuth } from '../features/UserSlice';

export default function Header({setAuthUser}) {
  const dispatch=useDispatch()
    const navigate=useNavigate()

   
    const [auththentication, setAuththentication] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    // setAuth(event.target.checked);
  };
  const a=useSelector(state=>state.isAuthenticated)
  React.useEffect(()=>{
    setAuththentication(a)

  },[a])

  const handleLogOut=()=>{
    const v=false
    setAuthUser(false)
    localStorage.setItem('auth','false')
    localStorage.setItem('userid','')
    dispatch(saveUserObj({}))
    dispatch(setAuth(v))
    navigate('/')
    handleClose()
  }
  const handleProfile=()=>{
    navigate('/profile')
    handleClose()
  }
  const handleHome=()=>{
    navigate('/homepage')
    handleClose()
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    
      <AppBar position='relative' sx={{backgroundColor:'white',color:'#1976D2'}}>
        <Container>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                {/* <MenuIcon /> */}
            </IconButton>
            <Box sx={{flex:1,width:'100px'}}>
            <Box sx={{width:'15rem'}}>
            <img  alt="Logo" src="techpact-logo.png" style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%',
                            justifyContent:'center',
                            display:'flex' // Adjust the height as needed
            }}/>
            </Box>

            </Box>
       
            
            
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {/* <AccountCircle /> */}
                <MenuIcon/>
              </IconButton>
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
                <MenuItem sx={{borderBottom:'1px solid #f2eeed'}} onClick={handleHome}>Home</MenuItem>

                <MenuItem sx={{borderBottom:'1px solid #f2eeed'}} onClick={handleProfile}>Profile</MenuItem>
                {/* <MenuItem sx={{borderBottom:'1px solid #f2eeed'}} onClick={()=>{}}>Mentor</MenuItem>
                <MenuItem sx={{borderBottom:'1px solid #f2eeed'}} onClick={()=>{}}>Mentees</MenuItem> */}
                <MenuItem sx={{borderBottom:'1px solid #f2eeed'}} onClick={()=>{}}>Contact us</MenuItem>
                
                <MenuItem onClick={handleLogOut}>Logout<LogoutIcon fontSize='small' sx={{paddingLeft:'3px'}}/></MenuItem>
                </Box>
              </Menu>
            
            
           
            </Toolbar>
        </Container>
      </AppBar>

  );
}