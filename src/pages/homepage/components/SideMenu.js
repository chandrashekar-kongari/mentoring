import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
export default function SideMenu() {
    const navigate=useNavigate()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleBtnClick = (anchor, open) => (event) => {


    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
    
  };
  const handleNavClick=(page)=>{
    if(page=='Log In'){
        navigate('/login')
    }else if(page=='Sign Up'){
      navigate('/signup')
  }
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Log In', 'Sign Up'].map((text, index) => (
          <ListItem key={text} disablePadding>

            <ListItemButton onClick={()=>handleNavClick(text)} sx={{}}>
              <ListItemIcon>
          
                {index == 0  ? <LoginIcon /> : <></>}
              </ListItemIcon>
             <ListItemText primary={text} />
              
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(anchor, true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}