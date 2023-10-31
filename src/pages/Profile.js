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
import UpdateSkills from '../components/updateprofile/UpdateSkills';
import { saveUserObj, setAuth, updateSkill } from '../features/UserSlice';
import endpoint from '../API/api';
import axios from 'axios';
import UpdateEducation from '../components/updateprofile/UpdateEducation';
import UpdateNameAndBio from '../components/updateprofile/UpdateNameAndBio';
import UpdateLinkedIn from '../components/updateprofile/UpdateLinkedIn';
import UpdateResume from '../components/updateprofile/UpdateResume';
import UpdateIntrests from '../components/updateprofile/UpdateIntrests';
import AlertComponent from '../components/AlertComponent';
import Loading from '../components/Loading';

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
  const [intrests,setIntrests]=useState([{
    title:'Leadership',
    selected:false
  },
  {
    title:'Career guidance',
    selected:false
  },
  {
    title:'Thought parter',
    selected:false
  },
  {
    title:'Transition',
    selected:false
  },
  {
    title:'Personal Development',
    selected:false
  }])

  const [edu,setEdu]=useState({
    'university':'',
    'fieldofstudy':'',
    'degree':''
  })
  const handleChangeEdu=(event)=>{
    const {name,value}=event.target
    setEdu({...edu,[name]:value})
    
}
  const [personalInfo,setPersonalInfo]=useState({})
  const addOrReplaceIntrests = (newObjects) => {
    const newData = [...intrests]; // Create a new array to ensure immutability
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

    setIntrests(newData); // Update the state with the new data
  };

  const navigate=useNavigate()

  const dispatch=useDispatch()
  const obj=useSelector(state=>state.userObj)
  const [userObj,setUserObj]=useState(null)
  const [mentee,setMentee]=useState('flase')
  const [loading,setLoading]=useState(true)
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
              addOrReplaceObject(response.data.skills);

              const per={
                'firstname':response.data.firstname,
                'lastname':response.data.lastname,
                'additionalInformation':response.data.additionalInformation
              }

              setPersonalInfo(per)
              
              if(response.data.mentee=='true'){
                setMentee('true')
                addOrReplaceIntrests(response.data.mentorshipIntrests)
                setEdu(response.data.education)
              }
              if(response.data.mentor=='true'){
                setMentee('true')
                addOrReplaceIntrests(response.data.mentorIntrests)
              }
              setLinkedIn(response.data.linkedinProfile)

              console.log('user details in profile ',response.data)

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
    const a=localStorage.getItem('auth')
    setLoading(true)
    if(a!='true'){
      dispatch(setAuth(false))
      navigate('/')
      return

    }
    getUserDetails()
    
  },[])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [linkedIn,setLinkedIn]=useState('')



  const handleUpdatePersonalInfo=async()=>{
    setUpdating(true)
    handleClose()
    const obj={
      'id':userObj._id,
      'firstname':personalInfo.firstname,
      'lastname':personalInfo.lastname,
      'additionalInformation':personalInfo.additionalInformation
    }
    try {
      const response = await axios.post(`${endpoint}/updatepersonalinfo`,obj);
    
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

              const per={
                'firstname':response.data.user.firstname,
                'lastname':response.data.user.lastname,
                'additionalInformation':response.data.user.additionalInformation
              }

              setPersonalInfo(per)
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

  const handleUpdateEducationalInfo=async()=>{
    setUpdating(true)
    handleClose()
    const obj={
      'id':userObj._id,
      'education':edu
    }
    try {
      const response = await axios.post(`${endpoint}/updateeducation`,obj);
    
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

              const e={
                'university':response.data.user.education.university,
                'fieldofstudy':response.data.user.education.fieldofstudy,
                'degree':response.data.user.education.degree
              }

              setEdu(e)
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
  const handleUpdateLinkedInProfile=async()=>{
    setUpdating(true)
    handleClose()
    const obj={
      'id':userObj._id,
      'linkedinProfile':linkedIn
    }
    try {
      const response = await axios.post(`${endpoint}/updatelinkedinprofile`,obj);
    
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

              setLinkedIn(response.data.user.linkedinProfile)
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
  const handleUpdateIntrests=async()=>{
    setUpdating(true)
    handleClose()
    const its=intrests.filter(item => item.selected);
    const obj={
      'id':userObj._id,
      'intrests':its,
      'mentee':mentee
    }
    try {
      const response = await axios.post(`${endpoint}/updatesintrests`,obj);
    
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

              if(response.data.user.mentee=='true'){
                addOrReplaceIntrests(response.data.user.mentorshipIntrests)
              }
              if(response.data.user.mentor=='true'){
                addOrReplaceIntrests(response.data.user.mentorIntrests)
              }
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

  const[section,setSection]=useState('')

  const handleUpdate=(sec)=>{
    const v=sec
    setSection(v)
    handleOpen()
  }

  const [k,setK]=useState(false)

  
  return (
    <>

    <Loading loading={loading} />
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {section=='personal' && <UpdateNameAndBio handleClose={handleClose} personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} handleSave={handleUpdatePersonalInfo}/>}
          {section=='education' && <UpdateEducation handleClose={handleClose} edu={edu} handleChande={handleChangeEdu} setEdu={setEdu} handleSave={handleUpdateEducationalInfo}/>}
          {section=='intrests' && <UpdateIntrests handleClose={handleClose} intrests={intrests} setIntrests={setIntrests} handleSave={handleUpdateIntrests}/>}
          {section=='skills' && <UpdateSkills handleClose={handleClose} val={allSkills} setVal={setAllSkills} handleUpdateSkills={handleUpdateSkills}/>}
          {section=='linkedin' && <UpdateLinkedIn linkedIn={linkedIn} setLinkedIn={setLinkedIn} handleClose={handleClose} handleSave={handleUpdateLinkedInProfile}/>}
          {section=='resume' && <UpdateResume handleClose={handleClose}/>}
          
          

          
        </Box>
      </Modal>
      
    {userObj!=null?<>
    {!updating ?
    <Box sx={{padding:'6px',paddingTop:'1rem'}}>
    <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center'}}>
      
    {showAlert && <AlertComponent type={alertType} message={alertMessage}/>}
        {/* {showAlert && <Alert onClose={()=>{handleShowAlert(false)}} sx={{position:'absolute',top:'2%'}} severity={alertType}>{alertMessage}</Alert>} */}
        </Stack>
      
    <Box>
    
    <Stack sx={{flexDirection:'row',flex:1,justifyContent:'center'}}>
      <Avatar sx={{ bgcolor: '#014abf' , width: 100, height: 100,fontSize:'34px'}}>{userObj.firstname[0]} {userObj.lastname[0]}</Avatar>

    </Stack>
    <Stack sx={{flexDirection:'row',flex:1,justifyContent:'center'}}>
    <Typography sx={{maxWidth:'700px'}} color="text.secondary">{userObj.email} </Typography>
      
    </Stack>

    <Container maxWidth="xs">
    <Stack
      sx={{height:'100%',justifyContent:'center',textAlign:'center',display:'flex',position: 'relative',}}
    >
      <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>
        {userObj.firstname} {userObj.lastname}
      </Typography>
      <IconButton
        onClick={() => handleUpdate('personal')}
        sx={{
          position: 'absolute',
          top: '-10px',
          right: '-10px',
        }}
      >
        <EditIcon sx={{ fontSize: '16px' }} />
      </IconButton>
    </Stack>
    </Container>
    
    
    <Stack  sx={{flexDirection:'row',flex:1,justifyContent:'center',textAlign:'center',marginBottom:'5px'}}>
      <Typography sx={{maxWidth:'700px'}} color="text.secondary"> {userObj.additionalInformation}</Typography>
    </Stack>
    </Box>
    {mentee=='true'?<Stack sx={{flexDirection:'row',flex:1,justifyContent:'center'}}>
      
      <Card sx={{ width: 620, padding: '1rem', border: '1px solid #ebe9e6', margin: '4px',position:'relative' }} elevation={0}>
      <Stack sx={{ flexDirection: 'row', flex: '1', justifyContent: 'space-between' }}>
        <Stack sx={{ flexDirection: 'row', flex: 1 }}>
          <Box>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>University :</Typography>
          </Box>
          <Box sx={{}}>
            <Typography sx={{ fontSize: '16px', paddingLeft: '2px' }}>{userObj.education.university}</Typography>
          </Box>
        </Stack>
        <IconButton
          onClick={() => handleUpdate('education')}
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
           
          }}
        >
          <EditIcon sx={{ fontSize: '16px' }} />
        </IconButton>
      </Stack>

      <Stack sx={{ flexDirection: 'row', flex: 1 }}>
        <Box>
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Degree :</Typography>
        </Box>
        <Box sx={{}}>
          <Typography sx={{ fontSize: '16px', paddingLeft: '2px' }}>{userObj.education.degree}</Typography>
        </Box>
      </Stack>

      <Stack sx={{ flexDirection: 'row', flex: 1 }}>
        <Box>
          <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Field of study :</Typography>
        </Box>
        <Box sx={{}}>
          <Typography sx={{ fontSize: '16px', paddingLeft: '2px' }}>{userObj.education.fieldofstudy}</Typography>
        </Box>
      </Stack>

      
    </Card>

    </Stack>:''}
     
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    <Card sx={{ width:'410px', padding:'1rem',border:'1px solid #ebe9e6',margin:'3px',position:'relative'  }} elevation={'0'}>
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Intrests:</Typography>
    <IconButton onClick={()=>handleUpdate('intrests')} sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            
          }}><EditIcon sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
    </Stack>
    {mentee=='true'?<>
    {userObj.mentorshipIntrests.map((intrest)=>{
      return <Chip label={intrest.title} sx={{margin:'5px'}}></Chip>
    })}</>:<>
    {userObj.mentorIntrests.map((intrest)=>{
      return <Chip label={intrest.title} sx={{margin:'5px'}}></Chip>
    })}</>}
    
        
        

    </Card>
    <Card sx={{ width:'410px',padding:'1rem' ,border:'1px solid #ebe9e6',margin:'3px',position:'relative' }} elevation={'0'}>
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Skills:</Typography>
    <IconButton onClick={()=>handleUpdate('skills')} sx={{position: 'absolute',
            top: 0,
            right: 0,}}><EditIcon sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
    </Stack>
    {userObj.skills.map((skill)=>{
      return <Chip label={skill.title} sx={{margin:'5px'}}></Chip>
    })}

    </Card>
      

    </Box>
    
    
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    <Card sx={{width:'410px', padding:'1rem',border:'1px solid #ebe9e6',margin:'3px' ,position:'relative' }} elevation={'0'}>
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <IconButton onClick={()=>handleUpdate('resume')} sx={{position: 'absolute',
            top: 0,
            right: 0,}}><EditIcon sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
    </Stack>
    <Stack sx={{ flexDirection: 'row' }}>
    <Typography sx={{fontSize:'18px',fontWeight:'bold'}}><FolderIcon/></Typography>

    {userObj.resume==''?<Typography>No resume uploaded</Typography>:<><Typography>View resume</Typography></>}

    </Stack>

    </Card>
    <Card sx={{width:'410px', padding:'1rem' ,border:'1px solid #ebe9e6',margin:'3px' ,position:'relative'}} elevation={'0'} >
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    
    <IconButton onClick={()=>handleUpdate('linkedin')} sx={{position: 'absolute',
            top: 0,
            right: 0,
            
            }}><EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
    </Stack>
    <Stack sx={{ flexDirection: 'row' }}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
          <LinkedInIcon />
        </Typography>
        {userObj.linkedinProfile === '' ? (
          <Typography>No LinkedIn profile added</Typography>
        ) : (
          <Typography>{userObj.linkedinProfile}</Typography>
        )}
      </Stack>


    </Card>
      

    </Box>
  </Box>:<Loading loading={updating}/>}</>:<></>}
    </>
  )
}

export default Profile