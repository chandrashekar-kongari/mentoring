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
function App() {
  const [auth,setAuth]=useState(false)
  const a=useSelector(state=>state.isAuthenticated)

  
  useEffect(()=>{

    setAuth(a)

  },[a])
  
  return (<>

      
      


    <Box >
      {/* {auth && <Header/>} */}
      <FeedBack/>
      
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/homepage" element={<Home />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/success" element={<SuccessPage/>}/>
    </Routes>
  </Box>

  </>
  );
}

export default App;
