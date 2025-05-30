import { Alert, Avatar, Box, Button, Card, Checkbox, Chip, CircularProgress, Container, FormControlLabel, FormGroup, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { useNavigate } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { ToastContainer, toast } from 'react-toastify';
import UpdateSkills from './components/updateprofile/UpdateSkills';
import { saveResId, saveUserObj, setAuth, updateSkill } from '../../features/UserSlice';
import endpoint from '../../API/api';
import axios from 'axios';
import UpdateEducation from './components/updateprofile/UpdateEducation';
import UpdateNameAndBio from './components/updateprofile/UpdateNameAndBio';
import UpdateLinkedIn from './components/updateprofile/UpdateLinkedIn';
import UpdateResume from './components/updateprofile/UpdateResume';
import UpdateIntrests from './components/updateprofile/UpdateIntrests';
import AlertComponent from '../../components/AlertComponent';
import Loading from '../../components/Loading';
import UpdateGender from './components/updateprofile/UpdateGender';
import UpdateFirstGenStudent from './components/updateprofile/UpdateFirstGenStudent';
import UpdateRacial from './components/updateprofile/UpdateRacial';
import UpdateHobbies from './components/updateprofile/UpdateHobbies';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UpdateSexualOrientation from './components/updateprofile/UpdateSexualOrientation';
import UpdateMigrant from './components/updateprofile/UpdateMigrant';
import UpdateAbility from './components/updateprofile/UpdateAbility';
import UpdateDiversity from './components/updateprofile/UpdateDiversity';
import UpdateSixplus from './components/updateprofile/UpdateSixtyplus';
import DeleteAccount from './components/updateprofile/DeleteAccount';
import UpdateOrganization from './components/updateprofile/UpdateOrganization';
import UpdateTitle from './components/updateprofile/UpdateTitle';
import UpdateAreasOfInterest from './components/updateprofile/UpdateAreasOfInterest';
import UpdatePhoneNumber from './components/updateprofile/UpdatePhoneNumber';
import UpdateNumberOfMentees from './components/updateprofile/UpdateNumberOfMentees';
// import Header from '../Header';

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

  const [allHobbies,setAllHobbies]=useState([{
    title:'Being outdoors',
    selected:false
  },
  {
    title:'Collecting items',
    selected:false
  },
  {
    title:'Creating content',
    selected:false
  },
  
  {
    title:'Gardening',
    selected:false
  },
  
  {
    title:'Learning new languages',
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



    setAllSkills(newData); // Update the state with the new data
  };

  const addOrReplaceHobbies = (newObjects) => {
    const newData = [...allHobbies]; // Create a new array to ensure immutability
    // const index = newData.findIndex(item => item.title === newObject.title);

    newObjects.forEach(newObject => {
      const index = newData.findIndex(item => item.title === newObject.title);

      if (index !== -1) {
        newData[index] = newObject; // Replace the existing object
      } else {
        newData.push(newObject); // Add the new object
      }
    });

   

    setAllHobbies(newData); // Update the state with the new data
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
  const [gender,setGender]=useState('')

  const [racial,setRacial]=useState([])
  const [sexualOrientation,setSexualOrientation]=useState([])
  const [firstGenStudent,setFirstGenStudent]=useState('')
  const [sixtyplus,setSixtyplus]=useState('')
  const [ability,setAbility]=useState('')
  const [migrant,setMigrant ]=useState('')
  const [diversity,setDiversity]=useState('')
  const [privacyConsent,setPrivacyConsent ]=useState(false)


  const handleChangeEdu=(event)=>{
    const {name,value}=event.target
    setEdu({...edu,[name]:value})
  }


  const handleChangeRacial=(event)=>{
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

    

    setIntrests(newData); // Update the state with the new data
  };

  const navigate=useNavigate()

  const dispatch=useDispatch()
  const obj=useSelector(state=>state.userObj)
  const [userObj,setUserObj]=useState(null)
  const [mentee,setMentee]=useState('flase')
  const [loading,setLoading]=useState(true)
  const [phone, setPhone] = useState('');
  const [communication, setCommunication] = useState(false);
  const [areasOfInterest, setAreasOfInterest] = useState([]);
  const [numberOfMentees, setNumberOfMentees] = useState( );
  const [displayedMenteeCapacity, setDisplayedMenteeCapacity] = useState(
    (userObj?.numberofmentees || 0) + (userObj?.menteeslist?.length || 0)
  );

  const getUserDetails=async()=>{

    // const userid=localStorage.getItem('userid')

    // const mentorid=userObj.matchedWith
    // console.log(userid)
    // const obj={
    //   'userid':userid
    // }
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
              localStorage.setItem('userid','')
              localStorage.setItem('auth','')
              navigate('/')
            }
            else{
              setUserObj(response.data)
              dispatch(saveUserObj(response.data))
              addOrReplaceObject(response.data.skills);
              addOrReplaceHobbies(response.data.hobbies);

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
              setGender(response.data.gender)
              setFirstGenStudent(response.data.firstGenStudent)
              setSixtyplus(response.data.sixtyplus)
              setAbility(response.data.ability)
              setDiversity(response.data.diversity)
              setMigrant(response.data.migrant)
              setPrivacyConsent(response.data.privacyConsent)
              setTitle(response.data.title)
              setOrganization(response.data.organization)
              // setSexualOrientation(response.data.sexualOrientation)

              setPhone(response.data.phonenumber || '');
              setCommunication(response.data.communicationFlag || false);
              setNumberOfMentees(response.data.numberofmentees)
             
                // addOrReplaceIntrests(response.data.areasOfInterest)

                 setAreasOfInterest(response.data.areasOfInterest || []);
                 setDisplayedMenteeCapacity((response.data?.numberofmentees || 0) + (response.data?.menteeslist?.length || 0))

              

      

            }
          } else {
            
            localStorage.setItem('userid','')
              localStorage.setItem('auth','')
              navigate('/')
            }
          } catch (error) {
         
          localStorage.setItem('userid','')
              localStorage.setItem('auth','')
              navigate('/')
          }
    setLoading(false)
      
    
  }



  useEffect(()=>{
    // const a=localStorage.getItem('auth')
    setLoading(true)
    // if(a!='true'){
    //   dispatch(setAuth(false))
    //   navigate('/')
    //   return

    // }
    getUserDetails()
    
  },[])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [linkedIn,setLinkedIn]=useState('')
  const handleViewResume=(resid)=>{
    dispatch(saveResId(resid))
    navigate(`/viewresume`)
  }
  const TimeOut=(showAlert,typeOfAlert,alertMessage)=>{

    navigate('/', { state: { 'showAlert': showAlert, 'typeOfAlert':typeOfAlert,'alertMessage':alertMessage  } });
    return
  }

  const handleUpdatePersonalInfo=async()=>{
    // setUpdating(true)
    handleClose()
    if(personalInfo.firstname=='' || personalInfo.lastname=='' || personalInfo.additionalInformation==''){
      

              callToast('Error while updating','error')
              return
    }
    const obj={
      'id':userObj._id,
      'firstname':personalInfo.firstname,
      'lastname':personalInfo.lastname,
      'additionalInformation':personalInfo.additionalInformation
    }
    const token=localStorage.getItem('token')
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          
          },
        };
    try {
      const response = await axios.post(`${endpoint}/updatepersonalinfo`,obj,axiosConfig);
    
          if (response.status === 200) {
            const a=true
            // dispatch(setAuth(a))
            const user=response.data
            
    
            if(user==null){
              
              // callToast('Error while updating','error')
              TimeOut(true,'error','Time out', 'please login')
              return
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

              callToast(response.data.message,response.data.type)

              
            }
          } else {

            TimeOut(true,'error','Time out', 'please login')
            return

            }
          } catch (error) {
            TimeOut(true,'error','Time out', 'please login')
            return
          }

  }

  const handleUpdateEducationalInfo=async()=>{
    // setUpdating(true)
    handleClose()
    const obj={
      'id':userObj._id,
      'education':edu
    }
    const token=localStorage.getItem('token')
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          
          },
        };
    try {
      const response = await axios.post(`${endpoint}/updateeducation`,obj,axiosConfig);
    
          if (response.status === 200) {
            const a=true
            // dispatch(setAuth(a))
            const user=response.data
          
            if(user==null){
              TimeOut(true,'error','Time out', 'please login')
              return
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

              callToast('Updated Successfully','success')
              
            }
          } else {
            TimeOut(true,'error','Time out', 'please login')
            return
            }
          } catch (error) {
            TimeOut(true,'error','Time out', 'please login')
            return
          }

  }


  const handleUpdateValues=async(type,value)=>{
    // setUpdating(true)
    handleClose()
    const obj={
      'id':userObj._id,
      'type':type,
      'value':value
    }
    if(value==='' || value.length===0){

      // l
    callToast('Oops! It seems you forgot to enter a value.','error')
      setUpdating(false)
      // handleShowAlert(true)
      return
    }
    const token=localStorage.getItem('token')
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          
          },
        };

        try {
          const response = await axios.post(`${endpoint}/updateprofilevalues`,obj,axiosConfig);
        
              if (response.status === 200) {
                const a=true
                // dispatch(setAuth(a))
                const user=response.data
          
                if(user==null){
                  TimeOut(true,'error','Time out', 'please login')
                  return
                }
                else{
                  setUserObj(response.data.user)
                  dispatch(saveUserObj(response.data.user))
    
              
           
                  callToast(response.data.message,response.data.type)

                  
                }
              } else {
                TimeOut(true,'error','Time out', 'please login')
                return
                }
              } catch (error) {
                TimeOut(true,'error','Time out', 'please login')
                return
              }
  }

  

  

  

  const handleUpdateIntrests=async()=>{
    // setUpdating(true)
    handleClose()
    const its=intrests.filter(item => item.selected);
    const obj={
      'id':userObj._id,
      'intrests':its,
      'mentee':userObj.mentee
    }
    const token=localStorage.getItem('token')
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          
          },
        };
    try {
      const response = await axios.post(`${endpoint}/updatesintrests`,obj,axiosConfig);
    
          if (response.status === 200) {
            const a=true
            // dispatch(setAuth(a))
            const user=response.data
  
            if(user==null){
              TimeOut(true,'error','Time out', 'please login')
              return
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
            TimeOut(true,'error','Time out', 'please login')
            return
            }
          } catch (error) {
            TimeOut(true,'error','Time out', 'please login')
            return
          }
  }

  const handleUpdateSkills=async()=>{
    // setUpdating(true)
    handleClose()
    const s=allSkills.filter(item => item.selected);
    const obj={
      'id':userObj._id,
      'skills':s
    }
    const token=localStorage.getItem('token')
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          
          },
        };
    try {
      const response = await axios.post(`${endpoint}/updateskills`,obj,axiosConfig);
    
          if (response.status === 200) {
            const a=true
            // dispatch(setAuth(a))
            const user=response.data
        
            if(user==null){
              TimeOut(true,'error','Time out', 'please login')
              return
            }
            else{
              setUserObj(response.data.user)
              dispatch(saveUserObj(response.data.user))

              addOrReplaceObject(response.data.user.skills)
              addOrReplaceHobbies(response.data.user.hobbies)
              callToast(response.data.message,response.data.type)
              
            }
          } else {
            TimeOut(true,'error','Time out', 'please login')
            return
            }
          } catch (error) {
            TimeOut(true,'error','Time out', 'please login')
            return
          }
  }

  const handleUpdateHobbies=async()=>{
    setUpdating(true)
    handleClose()
    const s=allHobbies.filter(item => item.selected);
    const obj={
      'id':userObj._id,
      'hobbies':s
    }
    const token=localStorage.getItem('token')
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
          
          },
        };
    try {
      const response = await axios.post(`${endpoint}/updatehobbies`,obj,axiosConfig);
    
          if (response.status === 200) {
            const a=true
            // dispatch(setAuth(a))
            const user=response.data
     
            if(user==null){
              // setAlertType('error')
              // setAlertMessage('Error while updating')
              // handleShowAlert(true)
              callToast('Error while updating','error')
              setUpdating(false)
            }
            else{
              setUserObj(response.data.user)
              dispatch(saveUserObj(response.data.user))

              addOrReplaceObject(response.data.user.skills)
              addOrReplaceHobbies(response.data.user.hobbies)

              // setAlertType(response.data.type)
              // setAlertMessage(response.data.message)
              callToast(response.data.message,response.data.type)
              setUpdating(false)
              // handleShowAlert(true)
              
            }
          } else {
            // console.error('Failed to submit user data.');
            // setAlertType('error')
            //   setAlertMessage('Error while updating')
            callToast('Error while updating','error')
              setUpdating(false)
              // handleShowAlert(true)
            }
          } catch (error) {
          // console.error('Error:', error);
          // setAlertType('error')
          //     setAlertMessage('Error while updating')
          callToast('Error while updating','error')

              setUpdating(false)
              // handleShowAlert(true)
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

  const [resume,setResume]=useState('')

  const[section,setSection]=useState('')

  const handleUpdate=(sec)=>{
    const v=sec
    setSection(v)
    handleOpen()
  }

  const [k,setK]=useState(false)
  const handleFileChange = (newValue) => {
    setResume(newValue)
  
    
  }
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
  const handleUpdateResume=async()=>{
    const formDataWithFiles = new FormData();
    formDataWithFiles.append('resume',resume)
    formDataWithFiles.append('userid',userObj._id)
    const token=localStorage.getItem('token')
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': `multipart/form-data; boundary=${formDataWithFiles._boundary}`,
      },
    };
    try {
      const response = await axios.post(endpoint+'/updateresume', formDataWithFiles,axiosConfig);

    if (response.status === 200) {
      const a=true
      // dispatch(setAuth(a))
      const user=response.data
  
      if(user==null){
        // setAlertType('error')
        // setAlertMessage('Error while updating')
        // handleShowAlert(true)
        callToast('Error while updating','error')
        setUpdating(false)
        handleClose()
      }
      else{
        setUserObj(response.data.user)
        dispatch(saveUserObj(response.data.user))

        addOrReplaceObject(response.data.user.skills)
        addOrReplaceHobbies(response.data.user.hobbies)

        // setAlertType(response.data.type)
        // setAlertMessage(response.data.message)
        callToast(response.data.message,response.data.type)
        setUpdating(false)
        // handleShowAlert(true)
        handleClose()
        
      }
    } else {
      // console.error('Failed to submit user data.');
      // setAlertType('error')
      // setAlertMessage('Error while updating')
      //handleShowAlert(true)
      callToast('Error while updating','error')


        setUpdating(false)

      }


  } catch (error) {
    // console.error('Error:', error);
    // setAlertType('error')
    //     setAlertMessage('Error while updating')
    //handleShowAlert(true)
    callToast('Error while updating','error')


        setUpdating(false)
        
    }

  }

  const onChangePrivacyConsent=(val)=>{
    handleUpdateValues('privacyConsent',val)
    setPrivacyConsent(val)
  }

  const [organization,setOrganization]=useState('')
  const [title,setTitle]=useState('')

  const isMentorOrMentee = () => {
    return userObj?.mentor === 'true' || userObj?.mentee === 'true';
  }

  
  return (
    <>

    {/* <Loading loading={loading} /> */}
    <ToastContainer/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {section=='personal' && <UpdateNameAndBio handleClose={handleClose} personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} handleSave={handleUpdatePersonalInfo}/>}
          {section=='education' && <UpdateEducation handleClose={handleClose} edu={edu} setEdu={setEdu} handleSave={handleUpdateEducationalInfo}/>}
          {section=='intrests' && <UpdateIntrests handleClose={handleClose} intrests={intrests} setIntrests={setIntrests} handleSave={handleUpdateIntrests}/>}
          {section=='skills' && <UpdateSkills handleClose={handleClose} val={allSkills} setVal={setAllSkills} handleUpdateSkills={handleUpdateSkills}/>}
          {section=='linkedin' && <UpdateLinkedIn linkedIn={linkedIn} setLinkedIn={setLinkedIn} handleClose={handleClose} handleSave={()=>handleUpdateValues('linkedinProfile',linkedIn)}/>}
          {section=='resume' && <UpdateResume resume={resume} handleFileChange={handleFileChange} setResume={setResume} handleSave={handleUpdateResume} handleClose={handleClose}/>}
          {section=='hobbies' && <UpdateHobbies handleClose={handleClose} val={allHobbies} setVal={setAllHobbies} handleUpdateSkills={handleUpdateHobbies}/>}
          {section == 'organization' && <UpdateOrganization handleClose={handleClose} organizationState={userObj.organization} organization={organization} setOrganization={setOrganization} handleSave={()=>handleUpdateValues('organization',organization)}/>}
          {section == 'title' && <UpdateTitle handleClose={handleClose} titleState={userObj.title} title={title} setTitle={setTitle} handleSave={()=>handleUpdateValues('title',title)}/>}

          {section=='gender' && <UpdateGender handleClose={handleClose} genderState={userObj.gender} gender={gender}  setGender={setGender} handleSave={()=>handleUpdateValues('gender',gender)}/>}
          {section=='firstGenStudent' && <UpdateFirstGenStudent handleClose={handleClose} firstGenStudentState={userObj.firstGenStudent} firstGenStudent={firstGenStudent}  handleChange={setFirstGenStudent} setFirstGenStudent={setFirstGenStudent} handleSave={()=>handleUpdateValues('firstGenStudent',firstGenStudent)}/>}
          {section=='migrant' && <UpdateMigrant handleClose={handleClose} migrantState={userObj.migrant} migrant={migrant} setMigrant={setMigrant} handleSave={()=>handleUpdateValues('migrant',migrant)} />}
          {section == 'ability' && <UpdateAbility handleClose={handleClose} abilityState={userObj.ability} ability={ability} setAbility={setAbility} handleSave={()=>handleUpdateValues('ability',ability)}/>}
          {section == 'diversity' && <UpdateDiversity handleClose={handleClose} diversityState={userObj.diversity} diversity={diversity} setDiversity={setDiversity} handleSave={()=>handleUpdateValues('diversity',diversity)} /> }
          {section== 'sixtyplus' && <UpdateSixplus handleClose={handleClose} sixtyplusState={userObj.sixtyplus}  sixtyplus={sixtyplus} setSixtyplus={setSixtyplus}  handleSave={()=>handleUpdateValues('sixtyplus',sixtyplus)} />    }
          {section=='sexualOrientation' && <UpdateSexualOrientation handleClose={handleClose} sexualOrientationLocalState={sexualOrientation} sexualOrientation={ userObj.sexualOrientation} handleChange={setSexualOrientation} setSexualOrientation={setSexualOrientation} handleSave={()=>handleUpdateValues('sexualOrientation',sexualOrientation)}/>}
          {section=='racial' && <UpdateRacial handleClose={handleClose} racialLocalState={racial} racial={userObj.racial} handleChange={setRacial} setRacial={setRacial} handleSave={()=>handleUpdateValues('racial',racial)}/>}
          {section == 'phonenumber' && <UpdatePhoneNumber phone={phone} setPhone={setPhone} handleClose={handleClose} handleSave={() => handleUpdateValues('phonenumber', phone)} />}
          {section == 'communication' &&             <FormControlLabel onChange={()=>onChangePrivacyConsent(true)} control={<Checkbox checked={privacyConsent}  />} label={<Typography>Yes, you may use my data.</Typography>}/>
        }
          {section == 'areasOfInterest' && <UpdateAreasOfInterest areasOfInterest={areasOfInterest} setAreasOfInterest={setAreasOfInterest} handleClose={handleClose} handleSave={() => handleUpdateValues('areasOfInterest', areasOfInterest)} />}
          {section == 'numberofmentees' && 
            <UpdateNumberOfMentees 
              handleClose={handleClose} 
              numberOfMentees={displayedMenteeCapacity}
              setNumberOfMentees={setDisplayedMenteeCapacity}
              handleSave={() => handleUpdateValues('numberofmentees', displayedMenteeCapacity)}
              userObj={userObj}
            />
          }
          {/* {section=='deleteAccount' && <DeleteAccount callToast={callToast}/>} */}


          
        </Box>
      </Modal>
      
    {userObj!=null?<>
    {!updating ?
    <>
    <Header/>
    <Box sx={{padding:'6px',paddingTop:'1rem',paddingBottom:'5rem'}}>
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
    {userObj.mentee=='true'&&
    <Stack sx={{flexDirection:'row',flex:1,justifyContent:'center'}}>
      
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

    </Stack>}
    <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
   
    <Card sx={{width:'410px', padding:'1rem' ,border:'1px solid #ebe9e6',margin:'3px' ,position:'relative'}} elevation={'0'} >
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    
    <IconButton onClick={()=>handleUpdate('organization')} sx={{position: 'absolute',
            top: 0,
            right: 0,
            
            }}><EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
    </Stack>
    <Stack sx={{ flexDirection: 'row' }}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
          {/* <LinkedInIcon /> */}
        </Typography>
        {userObj.organization === '' ? (
          <Typography>No Organization</Typography>
        ) : (
          <Typography><span style={{fontWeight:'bold'}}>Organization: </span>{userObj.organization}</Typography>
        )}
      </Stack>


    </Card>

    <Card sx={{width:'410px', padding:'1rem' ,border:'1px solid #ebe9e6',margin:'3px' ,position:'relative'}} elevation={'0'} >
    <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    
    <IconButton onClick={()=>handleUpdate('title')} sx={{position: 'absolute',
            top: 0,
            right: 0,
            
            }}><EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
    </Stack>
    <Stack sx={{ flexDirection: 'row' }}>
        <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
          {/* <LinkedInIcon /> */}
        </Typography>
        {userObj.title === '' ? (
          <Typography>No title</Typography>
        ) : (
          <Typography><span style={{fontWeight:'bold'}}>Title: </span>{userObj.title}</Typography>
        )}
      </Stack>


    </Card>
      

    </Box>
    
    



 
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        {userObj.mentor === 'true' && (
        <Card sx={{ width:'410px', padding:'1rem',border:'1px solid #ebe9e6',margin:'3px',position:'relative'  }} elevation={'0'}>
        <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
        <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Mentee Capacity:</Typography>
        <IconButton 
          onClick={() => handleUpdate('numberofmentees')} 
          sx={{position: 'absolute', top: 0, right: 0}}
        >
          <EditIcon sx={{fontSize:'16px'}}/>
        </IconButton>
      </Stack>
      <Typography>
        {displayedMenteeCapacity === 0 ? 
          "Not accepting mentees at this time" : 
          `Can support up to ${displayedMenteeCapacity} mentee${displayedMenteeCapacity !== 1 ? 's' : ''}`
        }
        {userObj?.menteeslist?.length > 0 && 
          ` (${userObj.menteeslist.length} current mentee${userObj.menteeslist.length !== 1 ? 's' : ''})`
        }
      </Typography>
          
            
            

        </Card>)}
     

        <Card sx={{ width:'410px',padding:'1rem' ,border:'1px solid #ebe9e6',margin:'3px',position:'relative' }} elevation={'0'}>
        <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Interests:</Typography>
            <IconButton onClick={()=>handleUpdate('areasOfInterest')} sx={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}><EditIcon sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
          </Stack>
   
          {userObj?.areasOfInterest?.map((intrest)=>{
            return <Chip label={intrest} sx={{margin:'5px'}}></Chip>
          })}

        </Card>
      </Box>
    
  

     
    {isMentorOrMentee() && (
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
        <Card sx={{ width:'410px', padding:'1rem',border:'1px solid #ebe9e6',margin:'3px',position:'relative'  }} elevation={'0'}>
          <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'bold'}}>Mentorship Interests:</Typography>
            <IconButton onClick={()=>handleUpdate('intrests')} sx={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}><EditIcon sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
          </Stack>
          {userObj.mentee=='true'?<>
          {userObj?.mentorshipIntrests?.map((intrest)=>{
            return <Chip label={intrest.title} sx={{margin:'5px'}}></Chip>
          })}</>:<>
          {userObj?.mentorIntrests?.map((intrest)=>{
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
          {userObj?.skills?.map((skill)=>{
            return <Chip label={skill.title} sx={{margin:'5px'}}></Chip>
          })}

        </Card>
      </Box>
    )}





    
      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
      {isMentorOrMentee() && (
        <Card sx={{width:'410px', padding:'1rem',border:'1px solid #ebe9e6',margin:'3px' ,position:'relative' }} elevation={'0'}>
          <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
            <IconButton onClick={()=>handleUpdate('resume')} sx={{position: 'absolute',
              top: 0,
              right: 0,}}><EditIcon sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
          </Stack>
          <Stack sx={{ flexDirection: 'row' }}>
            <Typography sx={{fontSize:'18px',fontWeight:'bold'}}><FolderIcon/></Typography>

            {userObj.resume==''?<Typography>No resume uploaded</Typography>:<><Button onClick={()=>handleViewResume(userObj.resume)} size="small" sx={{textTransform:'capitalize'}}>View Resume </Button></>}

          </Stack>

        </Card>)}
        <Card sx={{ width:'410px', padding:'1rem', border:'1px solid #ebe9e6', margin:'3px', position: 'relative' }} elevation={'0'}>
  <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
      <LinkedInIcon />
    </Typography>
    <IconButton 
      onClick={() => handleUpdate('linkedin')} 
      sx={{ position: 'absolute', top: 0, right: 0 }}
    >
      <EditIcon sx={{ fontSize: '16px' }} />
    </IconButton>
  </Stack>
  {userObj.linkedinProfile === '' ? (
    <Typography>No LinkedIn profile added</Typography>
  ) : (
    <Typography>{userObj.linkedinProfile}</Typography>
  )}
</Card>

      </Box>

      <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>

      <Card sx={{ width:'410px', padding:'1rem', border:'1px solid #ebe9e6', margin:'3px', position: 'relative' }} elevation={'0'}>
  <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
      <LocalPhoneIcon />
    </Typography>
    <IconButton 
      onClick={() => handleUpdate('phonenumber')} 
      sx={{ position: 'absolute', top: 0, right: 0 }}
    >
      <EditIcon sx={{ fontSize: '16px' }} />
    </IconButton>
  </Stack>
  {userObj.phonenumber === '' ? (
    <Typography>No phone number added</Typography>
  ) : (
    <Typography>{userObj.phonenumber}</Typography>
  )}
</Card>
        <Card sx={{ width:'410px', padding:'1rem', border:'1px solid #ebe9e6', margin:'3px', position: 'relative' }} elevation={'0'}>
  <Stack sx={{flexDirection:'row',flex:'1',justifyContent:'space-between'}}>
    <Typography sx={{ fontSize: '18px', fontWeight: 'bold' }}>
      <ConnectWithoutContactIcon />
    </Typography>

  </Stack>
  <FormControlLabel 
              onChange={() => {handleUpdateValues('communicationFlag', !communication)
                setCommunication((prev)=>!prev)
              }} 
              control={<Checkbox checked={communication} />} 
              label={<Typography>I agree to receive communications from TechPACT.</Typography>}
            />
</Card>

      </Box>


      


    

    {isMentorOrMentee() && (
      <Container maxWidth='md' sx={{marginTop:'3rem'}}>
       


        <Typography  sx={{fontSize:'30px',fontWeight:'bold',mb:'1rem'}}>
        More about me…

        </Typography>

        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography variant='h8'>TechPACT exists to serve diverse technologists.  The data you share is de-identified and used to better understand the communities we serve.</Typography>

          <FormGroup>
            <FormControlLabel onChange={()=>onChangePrivacyConsent(true)} control={<Checkbox checked={privacyConsent}  />} label={<Typography>Yes, you may use my data.</Typography>}/>
            <FormControlLabel onChange={()=>onChangePrivacyConsent(false)} control={<Checkbox  checked={!privacyConsent} />} label={<Typography>No, you may not use my data.</Typography>}/>

          </FormGroup>
          </Stack>

</Container>

        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>
          Gender Identity
          </Typography>

          {(userObj.gender && userObj.gender!='') ? <Stack sx={{flexDirection:'row',alignItems: 'flex-end' }}> <Typography  sx={{fontSize:'14px',marginRight:'3px'}}>{userObj.gender }</Typography> <IconButton onClick={()=>handleUpdate('gender')} sx={{
            }}>
              <EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton></Stack>:<Chip onClick={()=>handleUpdate('gender')} icon={<AddIcon />} on color='default'  label="Add" sx={{fontSize:'14px',cursor:'pointer',width:'100px'}} />}
          
      
          </Stack>

        </Container>


        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>
          Racial/Ethnic Identities
          </Typography>
          {(userObj.racial && userObj.racial.length>0) ? <Stack sx={{flexDirection:'row',alignItems: 'flex-end' }}> 
          <Stack sx={{flexDirection:'row',display:'flex',flexWrap:'wrap'}}>
            {userObj?.racial?.map((race)=>{
              return(
                <Chip label={race} sx={{fontSize:'14px',marginRight:'1rem',marginBottom:'1rem'}}></Chip>
              )
          
            })}
            <IconButton onClick={()=>handleUpdate('racial')} sx={{
              marginRight:'1rem',marginBottom:'1rem'
                }}>
                  <EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
          </Stack>  
          
          
                  </Stack>:<Chip onClick={()=>handleUpdate('racial')} icon={<AddIcon />} on color='default'  label="Add" sx={{fontSize:'14px',cursor:'pointer',width:'100px'}} />}  

              </Stack>

        </Container>

        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>
          Sexual Orientation
          </Typography>
          {(userObj.sexualOrientation && userObj.sexualOrientation.length>0) ? <Stack sx={{flexDirection:'row',alignItems: 'flex-end' }}> 
          <Stack sx={{flexDirection:'row',display:'flex',flexWrap:'wrap'}}>
            {userObj?.sexualOrientation?.map((race)=>{
              return(
                <Chip label={race} sx={{fontSize:'14px',marginRight:'1rem',marginBottom:'1rem'}}></Chip>
              )
          
            })}
            <IconButton onClick={()=>handleUpdate('sexualOrientation')} sx={{
              marginRight:'1rem',marginBottom:'1rem'
                }}>
                  <EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton>
          </Stack>  
          
          
                  </Stack>:<Chip onClick={()=>handleUpdate('sexualOrientation')} icon={<AddIcon />} on color='default'  label="Add" sx={{fontSize:'14px',cursor:'pointer',width:'100px'}} />}  

              </Stack>

        </Container>
        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>
          Age Bracket
          </Typography>
          {(userObj.sixtyplus && userObj.sixtyplus!='') ? <Stack sx={{flexDirection:'row',alignItems: 'flex-end' }}> <Typography  sx={{fontSize:'14px',marginRight:'3px'}}>{userObj.sixtyplus }</Typography> <IconButton onClick={()=>handleUpdate('sixtyplus')} sx={{
            }}><EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton></Stack>:<Chip onClick={()=>handleUpdate('sixtyplus')} icon={<AddIcon />} on color='default'  label="Add" sx={{fontSize:'14px',cursor:'pointer',width:'100px'}} />}      </Stack>
        </Container>
        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>
          Ability 
          </Typography>
          {(userObj.ability && userObj.ability!='') ? <Stack sx={{flexDirection:'row',alignItems: 'flex-end' }}> <Typography  sx={{fontSize:'14px',marginRight:'3px'}}>{userObj.ability }</Typography> <IconButton onClick={()=>handleUpdate('ability')} sx={{
            }}><EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton></Stack>:<Chip onClick={()=>handleUpdate('ability')} icon={<AddIcon />} on color='default'  label="Add" sx={{fontSize:'14px',cursor:'pointer',width:'100px'}} />}      </Stack>

        </Container>
        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>
          Migrant 
          </Typography>
          {(userObj.migrant && userObj.migrant!='') ? <Stack sx={{flexDirection:'row',alignItems: 'flex-end' }}> <Typography  sx={{fontSize:'14px',marginRight:'3px'}}>{userObj.migrant }</Typography> <IconButton onClick={()=>handleUpdate('migrant')} sx={{
            }}><EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton></Stack>:<Chip onClick={()=>handleUpdate('migrant')} icon={<AddIcon />} on color='default'  label="Add" sx={{fontSize:'14px',cursor:'pointer',width:'100px'}} />}      </Stack>
      

        </Container>
        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>
          First-Gen Student/Grad
          </Typography>
          {(userObj.firstGenStudent && userObj.firstGenStudent!='') ? <Stack sx={{flexDirection:'row',alignItems: 'flex-end' }}> <Typography  sx={{fontSize:'14px',marginRight:'3px'}}>{userObj.firstGenStudent }</Typography> <IconButton onClick={()=>handleUpdate('firstGenStudent')} sx={{
            }}><EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton></Stack>:<Chip onClick={()=>handleUpdate('firstGenStudent')} icon={<AddIcon />} on color='default'  label="Add" sx={{fontSize:'14px',cursor:'pointer',width:'100px'}} />}      </Stack>

        </Container>
        <Container sx={{marginTop:'2rem',borderBottom:'2px solid #CFD4D7',paddingBottom:'1rem'}}>
          <Stack spacing={2}>
          <Typography sx={{fontSize:'14px',fontWeight:'bold'}}>
          Are there any other diversity details you'd like to share? 
          </Typography>
          {(userObj.diversity && userObj.diversity!='') ? <Stack sx={{flexDirection:'row',alignItems: 'flex-end' }}> <Typography  sx={{fontSize:'14px',marginRight:'3px'}}>{userObj.diversity }</Typography> <IconButton onClick={()=>handleUpdate('diversity')} sx={{
            }}><EditIcon  sx={{ justifyContent:'end',fontSize:'16px'}}/></IconButton></Stack>:<Chip onClick={()=>handleUpdate('diversity')} icon={<AddIcon />} on color='default'  label="Add" sx={{fontSize:'14px',cursor:'pointer',width:'100px'}} />}      </Stack>

        </Container>
        </Container>
    )}

      <Container maxWidth='md' sx={{marginTop:'3rem'}}>

 




        </Container>
    
        
</Box>
      <Footer/>
      </>:<Loading loading={updating}/>}</>:<></>}
    </>
  )
}

export default Profile


