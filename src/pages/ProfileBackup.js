import { Alert, Avatar, Box, Button, Card, Chip, CircularProgress, Container, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import Modal from '@mui/material/Modal';
import PurposeInformation from '../components/signup/PurposeInformation';
import AreaOfIntrestsForMentors from '../components/signup/AreaOfIntrestsForMentor';
import UpdateSkills from '../components/signup/UpdateSkills';
import { saveUserObj, updateSkill } from '../features/UserSlice';
import endpoint from '../API/api';
import axios from 'axios';

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
  p: 3,
};
const Profile = () => {

  const [allSkills,setAllSkills]=useState([{
    title:'Software Development',
    selected:false
  },
  {
    title:'Python',
    selected:false
  },
  {
    title:'Full Stack Development',
    selected:false
  },
  
  {
    title:'Cybersecurity',
    selected:false
  },
  
  {
    title:'Data Science and Analytics',
    selected:false
  },
  {
    title:'Cloud Computing',
    selected:false
  },
  {
    title:'Database Develpment',
    selected:false
  },
  {
    title:'C# Programming',
    selected:false
  }])
  const addOrReplaceObject = (newObjects) => {
    const newData = [...allSkills]; // Create a new array to ensure immutability
    // const index = newData.findIndex(item => item.title === newObject.title);

    newObjects.forEach(newObject => {
      const index = newData.findIndex(item => item.title === newObject.title);

      if (index !== -1) {
        newData[index] = newObject; // Replace the existing object
      } else {
        newData.push(newObject); // Add the new object
      }
    });

    console.log('upd ',newData)

    setAllSkills(newData); // Update the state with the new data
  };

  const navigate=useNavigate()

  const dispatch=useDispatch()
  const obj=useSelector(state=>state.userObj)
  const [userObj,setUserObj]=useState(null)
  const [mentee,setMentee]=useState('flase')

  const getUserDetails=async()=>{

    const userid=localStorage.getItem('userid')

    // const mentorid=userObj.matchedWith
    console.log(userid)
    const obj={
      'userid':userid
    }
    try {
      const response = await axios.get(`${endpoint}/getuserdetails?userid=${userid}`);
    
          if (response.status === 200) {
            const a=true
            // dispatch(setAuth(a))
            const user=response.data
            console.log('user details ',user)
            if(user==null){
              localStorage.setItem('userid','')
              localStorage.setItem('auth','')
              navigate('/')
            }
            else{
              setUserObj(response.data)
              dispatch(saveUserObj(response.data))

            }
          } else {
            console.error('Failed to submit user data.');
            localStorage.setItem('userid','')
              localStorage.setItem('auth','')
              navigate('/')
            }
          } catch (error) {
          console.error('Error:', error);
          localStorage.setItem('userid','')
              localStorage.setItem('auth','')
              navigate('/')
          }
    setLoading(false)
      
    
  }


  useEffect(()=>{
    setUserObj(obj)
    
    if(obj==null){
      navigate('/')
      return
    }
    addOrReplaceObject(obj.skills);
    if(obj.mentee=='true'){
      setMentee('true')
    }
    console.log('user details in profile ',obj)
  },[])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateSkills=async()=>{
    setUpdating(true)
    handleClose()
    const s=allSkills.filter(item => item.selected);
    const obj={
      'id':userObj._id,
      'skills':s
    }
    try {
      const response = await axios.post(`${endpoint}/updateskills`,obj);
    
          if (response.status === 200) {
            const a=true
            // dispatch(setAuth(a))
            const user=response.data
            console.log('details ',user)
            if(user==null){
              setAlertType('error')
              setAlertMessage('Error while updating')
              handleShowAlert(true)

              setUpdating(false)
            }
            else{
              setUserObj(response.data.user)
              dispatch(saveUserObj(response.data.user))

              addOrReplaceObject(response.data.user.skills)
              setAlertType(response.data.type)
              setAlertMessage(response.data.message)
              setUpdating(false)
              handleShowAlert(true)
              
            }
          } else {
            console.error('Failed to submit user data.');
            setAlertType('error')
              setAlertMessage('Error while updating')

              setUpdating(false)
              handleShowAlert(true)
            }
          } catch (error) {
          console.error('Error:', error);
          setAlertType('error')
              setAlertMessage('Error while updating')

              setUpdating(false)
              handleShowAlert(true)
          }
  }

  const [showAlert,setShowAlert]=React.useState(false)
  const handleShowAlert=(val)=>{
    // const val=!showAlert
    setShowAlert(val)
  }

  const [alertMessage,setAlertMessage]=React.useState("Alert message")
  const [updating,setUpdating]=useState(false)
  const [alertType,setAlertType]=useState('success')

  return (
    <>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          
          <UpdateSkills val={allSkills} setVal={setAllSkills} handleUpdateSkills={handleUpdateSkills}/>
        </Box>
      </Modal>
    {userObj!=null?<>
    {!updating ?
    <Container sx={{paddingTop:'1rem'}}>
    <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center'}}>
        {showAlert && <Alert onClose={()=>{handleShowAlert(false)}} sx={{position:'absolute',top:'2%'}} severity={alertType}>{alertMessage}</Alert>}
        </Stack>
      
    <Container>
    
    <Stack sx={{flexDirection:'row',flex:1,justifyContent:'center'}}>
      <Avatar sx={{ bgcolor: '#014abf' , width: 100, height: 100,fontSize:'34px'}}>{userObj.firstname[0]} {userObj.lastname[0]}</Avatar>

    </Stack>
    <Stack sx={{flexDirection:'row',flex:1,justifyContent:'center'}}>
    <Typography sx={{maxWidth:'700px'}} color="text.secondary">{userObj.email} </Typography>
      
    </Stack>
  
    
    <Stack sx={{flexDirection:'row',flex:1,justifyContent:'center'}}>
      <Typography sx={{fontSize:'28px',fontWeight:'bold'}}>{userObj.firstname} {userObj.lastname}</Typography>
      <IconButton ><EditIcon sx={{ justifyContent:'end',fontSize:'18px',float:'right'}}/></IconButton>
    </Stack>
    
    
    <Stack  sx={{flexDirection:'row',flex:1,justifyContent:'center',textAlign:'center',marginBottom:'5px'}}>
      <Typography sx={{maxWidth:'700px'}} color="text.secondary"> {userObj.additionalInformation}</Typography>
    </Stack>
    </Container>
    {mentee=='true'?<Stack sx={{flexDirection:'row',flex:1,justifyContent:'center'}}>
      <Card sx={{width:620,padding:'1rem',border:'1px solid #ebe9e6',margin:'4px'}} elevation={0}>
      <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
      <Stack sx={{flexDirection:'row',flex:1}}>
        <Box>
        <Typography sx={{fontSize:'16px',fontWeight:'bold'}}>University :</Typography>
        </Box>
        <Box sx={{}}> <Typography sx={{fontSize:'16px',paddingLeft:'2px'}}>{userObj.education.university}</Typography></Box>
        </Stack>
        <IconButton sx={{padding:'0px',margin:'0px'}}><EditIcon sx={{ justifyContent:'end',fontSize:'18px'}}/></IconButton>
        </Stack>
        
        <Stack sx={{flexDirection:'row',flex:1}}>
        <Box>
        <Typography sx={{fontSize:'16px',fontWeight:'bold'}}>Field of study :</Typography>
        </Box>
        <Box sx={{}}> <Typography sx={{fontSize:'16px',paddingLeft:'2px'}}>{userObj.education.fieldofstudy}</Typography></Box>
        </Stack>
        <Stack sx={{flexDirection:'row',flex:1}}>
        <Box>
        <Typography sx={{fontSize:'16px',fontWeight:'bold'}}>Degree :</Typography>
        </Box>
        <Box sx={{}}> <Typography sx={{fontSize:'16px',paddingLeft:'2px'}}>{userObj.education.degree}</Typography></Box>
        </Stack>
        
        

      </Card>

    </Stack>:''}
    
    <Container sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    <Card sx={{ width: 300,padding:'1rem',border:'1px solid #ebe9e6',margin:'3px'  }} elevation={'0'}>
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Intrests:</Typography>
    <IconButton sx={{padding:'0px',margin:'0px'}}><EditIcon sx={{ justifyContent:'end',fontSize:'18px'}}/></IconButton>
    </Stack>
    {mentee=='true'?<>
    {userObj.mentorshipIntrests.map((intrest)=>{
      return <Chip label={intrest.title} sx={{margin:'5px'}}></Chip>
    })}</>:<>
    {userObj.mentorIntrests.map((intrest)=>{
      return <Chip label={intrest.title} sx={{margin:'5px'}}></Chip>
    })}</>}
    
        
        

    </Card>
    <Card sx={{ width: 300,padding:'1rem' ,border:'1px solid #ebe9e6',margin:'3px' }} elevation={'0'}>
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Skills:</Typography>
    <IconButton onClick={handleOpen} sx={{padding:'0px',margin:'0px'}}><EditIcon sx={{ justifyContent:'end',fontSize:'18px'}}/></IconButton>
    </Stack>
    {userObj.skills.map((intrest)=>{
      return <Chip label={intrest.title} sx={{margin:'5px'}}></Chip>
    })}

    </Card>
      

    </Container>
    
    
    <Container sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    <Card sx={{ width: 300,padding:'1rem',border:'1px solid #ebe9e6',margin:'3px'  }} elevation={'0'}>
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{fontSize:'18px',fontWeight:'bold'}}><FolderIcon/></Typography>
    <IconButton sx={{padding:'0px',margin:'0px'}}><EditIcon sx={{ justifyContent:'end',fontSize:'18px'}}/></IconButton>
    </Stack>
    {userObj.resume==''?<Typography>No resume uploaded</Typography>:<><Typography>View resume</Typography></>}

    </Card>
    <Card sx={{ width: 300,padding:'1rem' ,border:'1px solid #ebe9e6',margin:'3px' }} elevation={'0'}>
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{fontSize:'18px',fontWeight:'bold'}}><LinkedInIcon/></Typography>
    <IconButton sx={{padding:'0px',margin:'0px'}}><EditIcon  sx={{ justifyContent:'end',fontSize:'18px'}}/></IconButton>
    </Stack>
    {userObj.linkedinProfile==''?<Typography>No LinkedIn profile added</Typography>:<><Typography>{userObj.linkedinProfile}</Typography></>}


    </Card>
      

    </Container>
  </Container>:<CircularProgress/>}</>:<></>}
    </>
  )
}

export default Profile