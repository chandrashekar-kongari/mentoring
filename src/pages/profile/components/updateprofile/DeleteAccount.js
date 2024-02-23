import { Alert, Box, Button, Checkbox, FormControl, FormControlLabel, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import endpoint from '../../../../API/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteAccount = ({handleClose,ability,setAbility,handleSave,callToast}) => {

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
    }

    const [reason,setReason]=useState('')
    const [improvements,setImprovements]=useState('')
    const [deleteConsent,setDeleteConsent]=useState(false)
    const changeDeleteConsent=()=>{
        setDeleteConsent(!deleteConsent)
    }
    const handleChangeImprovements=(e)=>{
        const {name,value}=e.target
        setImprovements(value)
    }
    const handleChangeReason=(e)=>{
        const {name,value}=e.target
        setReason(value)

    }

    const handleDelete=(e)=>{
        e.preventDefault()
        handleDeleteaccount()
    }
    const handleDeleteaccount=async()=>{
        if(!deleteConsent){
            callToast('Please click the check box.','error')
            return
        }
        
        const obj={
          
          'reason':reason,
          'improvements':improvements,
          'deleteConsent':deleteConsent
        }
        
        const token=localStorage.getItem('token')
            const axiosConfig = {
              headers: {
                Authorization: `Bearer ${token}`,
              
              },
            };
    
            try {
              const response = await axios.post(`${endpoint}/deleteuseraccount`,obj,axiosConfig);
            
                  if (response.status === 200) {
             
                    const flag=response.data.isDeleted
              
                    if(flag){
                        navigate("/account-deleted-success")
                    }
                    else{
                      
                  
               
                      callToast(response.data.message,response.data.type)
    
                      
                    }
                  } else {
                    callToast('Error while updating','error')
                    }
                  } catch (error) {
                    callToast('Error while updating','error')
                  }
      }
  return (
    <form onSubmit={handleDelete}>

<Box sx={{justifyContent:'center'}}>
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>Delete my account</Typography>
            </Stack>
   
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
        <Stack direction='column' >
        
        
            
                <Box sx={{backgroundColor:'#FEECED',padding:'4px'}}>
                <Alert severity="error" sx={{fontWeight:'600'}}>If you delete your account</Alert>
               
                <Typography color={'error'} sx={{fontSize:'12px'}}><PriorityHighIcon fontSize='14px' color='error'/>When you delete your account all of your data will be permanently deleted.</Typography>
                <Typography color={'error'} sx={{pt:'3px',fontSize:'12px'}} ><PriorityHighIcon fontSize='14px' color='error'/>You will need to create a new account if you want to use our services in the future.</Typography>
                <FormControlLabel   name='delete' onChange={changeDeleteConsent} control={<Checkbox size='medium' checked={deleteConsent} sx={{}}/>} sx={{fontSize:'10px'}}  label={<Typography variant="body2"> I understand. Please delete my account.</Typography>} />

                </Box>



                

                </Stack>
                <FormControl fullWidth>        
                    <Button type='submit' variant='contained' color='error' sx={{marginTop:'1rem'}}>Delete my account</Button>
                </FormControl>
                </Box>


    </form>
  )
}

export default DeleteAccount