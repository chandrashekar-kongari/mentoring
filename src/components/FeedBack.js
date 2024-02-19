import { Box, Button, Container, Fab, FormControl, InputLabel, OutlinedInput, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import FeedbackIcon from '@mui/icons-material/Feedback';
import axios from 'axios';
import endpoint from '../API/api';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:'5px',
    
    boxShadow: 24,
    
    pt: 2,
    px: 2,
    pb: 2,
  };

const FeedBack = () => {

    const [email,setEmail]=useState('')
    const [feedback,setFeedback]=useState('')

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
   
  };

  const [showAlert,setShowAlert]=useState(false)
  const handleShare=async()=>{
    const data={
        'email':email,
        'feedback':feedback,
        'rating':1
    }
    try {
        const response = await axios.post(endpoint+'/feedback',data);
  
        if (response.status === 200) {
            handleOpenAlert()
            handleClose()
            // console.log(response.data)
            setFeedback('')
  
        } else {
          console.error('Failed to submit user data.');
          }
        } catch (error) {
        console.error('Error:', error);
        }

    
  }
  const handleOpenAlert=()=>{
    setShowAlert(true)
  }
  const handleCloseAlert=()=>{
        setShowAlert(false) 
  }
  const handleEmailChange=(event)=>{
    const {name,value}=event.target
    setEmail(value)
  }
  const handleFeedbackChange=(event)=>{
    const {name,value}=event.target
    setFeedback(value)
  }
  // const [value, setValue] = React.useState(0);
  return (
    <>
        {showAlert && <Box sx={{marginTop:'6rem',justifyContent:'center',flex:1,width:'100%',textAlign:'center',position:'absolute'}}>
        <Stack sx={{justifyContent:'center'}}>
        <Alert sx={
            {width:'250px',marginLeft:'auto',marginRight:'2rem'}
        } onClose={handleCloseAlert}>Thanks for sharing</Alert>
        </Stack>
        </Box>}

    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 320 }}>
            <Stack sx={{textAlign:'center',marginBottom:'3px'}}>
                <Typography>Feedback</Typography>
            </Stack>
        <FormControl variant="outlined" style={{paddingBottom:'1rem',width:'100%'}}>
                <InputLabel >Email(Optional)</InputLabel>
                <OutlinedInput
                name='email'
                value={email}
                onChange={handleEmailChange}
                   
                    type={'text'}
                    
                    label="Email(Optional)"
                />
                </FormControl>
                {/* <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                /> */}
                <Typography sx={{fontSize:'12px',marginBottom:'2px'}}>Please share your experience</Typography>
                <textarea required style={{marginTop:'5px',maxWidth:'320px'}} name="additionaInformation" value={feedback} onChange={handleFeedbackChange} rows={4} cols={40}  />
                <Stack sx={{textAlign:'right',paddingTop:'1rem',paddingBottom:'2px'}}>
                    <Button onClick={handleShare} component="label" variant="contained" endIcon={<SendIcon />}>
                    send
                    </Button>
                </Stack>
          
        </Box>
      </Modal>

    <Stack sx={{position:'absolute' ,right:'1rem',bottom:'10px'}} >
        
        <Fab variant="extended"   onClick={handleOpen}>
            <NavigationIcon sx={{textTransform:'capitalize' }} />
            <Box sx={{ mr: 1 ,textTransform:'capitalize' }}>
            
            Feedback
            </Box>
            {/* <FeedbackIcon/> */}
           
        </Fab>
        
    </Stack>
    </>
  )
}

export default FeedBack