import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useDispatch,useSelector } from 'react-redux';

import { setAuth } from '../features/UserSlice';

export default function Header() {
  const dispatch=useDispatch()
    const navigate=useNavigate()

    const onClickLogin=()=>{
      
        navigate('/login')

    }

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
    dispatch(setAuth(v))
    navigate('/')
  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    const onClickSignUp=()=>{
      navigate('/signup')
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white',color:'#1976D2'}}>
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
            <Box sx={{flex:'1'}}>
            <img  alt="Logo" src="techpact-logo.png" style={{
                            width: '13%', // Adjust the width as needed
                            height: '13%',
                            justifyContent:'center',
                            display:'flex' // Adjust the height as needed
            }}/>

            </Box>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            
               
            </Typography> */}
            {auththentication && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
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
                <MenuItem onClick={()=>{}}>Profile</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>)}
            
           
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}