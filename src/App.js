import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';


import {  Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import HomePage from './pages/homepage/HomePage';
import Header from './pages/Header';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SignUp from './pages/signup/SignUp';
import Home from './pages/authenticated_home/Home';
import Admin from './pages/Admin';

import FeedBack from './components/FeedBack';
import Profile from './pages/profile/Profile';

import { Typography } from '@mui/material';
import Error404Page from './pages/Error404Page';
import ForgotPassword from './pages/ForgotPassword';
import Loading from './components/Loading';
import PdfViewer from './components/PdfViewer';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import SideMenu from './pages/homepage/components/SideMenu';
import { PrivateRoutes } from './pages/PrivateRoutes';

import endpoint from './API/api';
import axios from 'axios';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HelpCenter from './pages/HelpCenter';
import SuccessPage from './pages/signup/components/signup/SuccessPage';

let theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
    fontFamily:'Inter',
    
  },
});
theme.typography.h4 = {
  fontSize: '1.2rem',
  fontFamily:'Inter',
  
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.6rem',
    
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};
theme.typography.h5 = {
  fontSize: '1.2rem',
  fontFamily:'Inter',
  
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.4rem',
    
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.2rem',
  },
};
theme.typography.h6 = {
  fontSize: '1.2rem',
  fontFamily:'Inter',
  
  '@media (min-width:600px)': {
    fontSize: '1.3rem',
  },
  
  [theme.breakpoints.up('xs')]: {
    fontSize: '1.2rem',
    
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.8rem',
  },
};
theme.typography.subtitle1 = {
  fontSize: '1.2rem',
  fontFamily:'Inter',
  
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('xs')]: {
    fontSize:'16px',lineHeight:'22px',fontWeight:'400',
    textAlign:{xs:'left',md:'center'}
  },
  [theme.breakpoints.up('md')]: {
    fontSize:'16px',lineHeight:'22px',fontWeight:'400'
  }
};
function App() {
  const [auth,setAuth]=useState(false)
  const a=useSelector(state=>state.isAuthenticated)
  const au=localStorage.getItem('auth')

  const autheticated=async()=>{

    try {
      const token=localStorage.getItem('token')
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          
          },
        };
      const response = await axios.get(`${endpoint}/isautheticated`,axiosConfig);
    
          if (response.status === 200) {
    
            setAuth(true)
          }
          else{
            setAuth(false)
          }
        }
          catch(error){
            setAuth(false)
          }

    
  }
  
  useEffect(()=>{

    
    autheticated()
    

  },[auth])
  
  return (<ThemeProvider theme={theme}>

      
    <Box >
      {/* {auth && <Header />} */}
      
      <Routes>
      <Route element={<PrivateRoutes/>}>
             
           
            <Route path="/homepage" element={<Home />    }/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path='/viewresume' element={<PdfViewer  />}/> 
      </Route>

      <Route path="/" element={<HomePage />}/>
      <Route path="/sidemenu" element={<SideMenu />}/>
      
      <Route path="/login" element={<Login />}/>
      <Route path="/forgotpassword" element={<ForgotPassword />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/success-page" element={<SuccessPage/>}/>
      <Route path="/loading" element={<Loading/>}/>

      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      <Route path="/help-center" element={<HelpCenter/>}/>
    
    </Routes>
  </Box>

  </ThemeProvider>
  );
}

export default App;
