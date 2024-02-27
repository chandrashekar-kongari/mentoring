import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Box, Button, Card, CardContent, Container, Stack, Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import { ToastContainer,toast } from 'react-toastify';
import DeleteAccount from '../profile/components/updateprofile/DeleteAccount';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import endpoint from '../../API/api';
import { useDispatch } from 'react-redux';
import { saveUserObj } from '../../features/UserSlice';
import Loading from '../../components/Loading';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
  
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:'6px',
    boxShadow: 24,
    p: 8,
  };
const Settings = () => {

    const [loading,setLoading]=useState(true)
    const dispatch=useDispatch()

    useEffect(()=>{
        getUserDetails()
    },[])

    const getUserDetails=async()=>{

      
        setLoading(true)
  
       
        try {
          const token=localStorage.getItem('token')
          const axiosConfig = {
            headers: {
              Authorization: `Bearer ${token}`,
            
            },
          };
          const response = await axios.get(`${endpoint}/getuserdetails`,axiosConfig);
        
              if (response.status === 200) {
                const a=true
                // dispatch(setAuth(a))
                const user=response.data
           
                if(user==null){
                  localStorage.setItem('token','')
                  navigate('/')
                }
                else{
                 
                  dispatch(saveUserObj(response.data))

  
                }
              } else {
                console.error('Failed to submit user data.');
                localStorage.setItem('token','')
                  navigate('/')
                }
              } catch (error) {
              console.error('Error:', error);
              localStorage.setItem('token','')
                  navigate('/')
              }
        setLoading(false)
          
        
      }
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const callToast=(m,t)=>{
        if(t=='success'){
          toast.success(m, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
      }else if(t=='info'){
          toast.info(m, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
      }else if(t=='error'){
          toast.error(m, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
      }else if(t=='warning'){
          toast.warn(m, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
      }else{
          toast(m, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
        }
      }
      const navigate=useNavigate()
      const handleChangePassword=()=>{
        navigate('/change-password')
      }
  return (
    <>
    <Header/>
    <Loading loading={loading}/>
    <ToastContainer/>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        <DeleteAccount handleClose={handleClose} callToast={callToast}/>
        </Box>
        </Modal>


    <Container maxWidth='md' sx={{height:'90vh',padding:8}}>
    <Stack spacing={8}>

    <Card>
            <CardContent>
                <Stack sx={{pb:4, borderBottom:'1px solid #DFDFDF'}}>
                <Typography variant='h7'>Manage Password</Typography>
                </Stack>
                <Box  sx={{pt:3, justifyContent:'space-between'}}>
                <Typography variant='body1' sx={{pb:4}}>Ensure your new password is strong and unique to maintain the security of your account.</Typography>
                <Button variant='outlined' onClick={handleChangePassword} color='info'>Change Password</Button>
                </Box>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <Stack sx={{pb:4, borderBottom:'1px solid #DFDFDF'}}>
                <Typography variant='h7'>Delete Account</Typography>
                </Stack>
                <Stack spacing={4} sx={{pt:3, display:'flex',flexDirection:'row',flexWrap:'wrap', justifyContent:'space-between'}}>
                <Typography variant='body1'>By deleting your account, you will permanently remove all your profile data. This action can not be undone.</Typography>
                <Button variant='outlined' onClick={handleOpen} color='error'>Delete My Account</Button>
                </Stack>
            </CardContent>
        </Card>
    </Stack>

    </Container>


    <Footer/>
    </>
  )
}

export default Settings