import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';


import {  Routes, Route } from "react-router-dom";
import Login from './components/Login';
import HomePage from './pages/HomePage';
import Header from './pages/Header';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import SignUp from './components/signup/SignUp';
import Home from './pages/Home';
import Admin from './pages/Admin';
import SuccessPage from './components/signup/SuccessPage';
import FeedBack from './components/FeedBack';
import Profile from './pages/Profile';
import Protected from './pages/Protected';
import { Typography } from '@mui/material';
import Error404Page from './pages/Error404Page';
import ForgotPassword from './pages/ForgotPassword';
import Loading from './components/Loading';
import PdfViewer from './components/PdfViewer';
function App() {
  const [auth,setAuth]=useState(false)
  const a=useSelector(state=>state.isAuthenticated)
  const au=localStorage.getItem('auth')
  
  useEffect(()=>{

    
    if(au=='true'){
      setAuth(true)
    }
    else{
      setAuth(false)
    }

    

  },[a])
  
  return (<>

      
      


    <Box >
      {auth && <Header setAuthUser={setAuth}/>}
      {/* <FeedBack/> */}
      
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/homepage" element={
       
        <Home />
    
      
      }/>
      {/* <Route path="/admin" element={
        <Protected>
          <Admin />
        </Protected>
      }/> */}
      <Route path="/login" element={<Login />}/>
      <Route path="/forgotpassword" element={<ForgotPassword />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/success" element={<SuccessPage/>}/>
      <Route path="/loading" element={<Loading/>}/>
      <Route path="/profile" element={<Profile/>}/>
      
      <Route path='/viewresume' element={<PdfViewer  />}/> 

    </Routes>
  </Box>

  </>
  );
}

export default App;
