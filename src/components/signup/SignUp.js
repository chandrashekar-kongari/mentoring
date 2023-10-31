import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, Container, FormControl, InputLabel, OutlinedInput, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import RequriedInformation from './RequriedInformation';
import PurposeInformation from './PurposeInformation';
import Bio from './Bio';
import Education from './Education';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEducation, addResume, saveFirstName, saveLastName, saveLinkedinProfile, saveUserObj, setAdditionaInformation, setAuth, setMentee, setMentor, setMentorIntrests, setMentorshipIntrests, setRequiredDetails, updateSkill } from '../../features/UserSlice';
import axios from 'axios';
import Skills from './Skills';
import endpoint from '../../API/api';
import CircularProgress from '@mui/material/CircularProgress';
import Loading from '../Loading';
const steps = ['', '', '','',''];

export default function SignUp() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [userObj,setUserObj]=React.useState({})

  const req=  useSelector(state=>state.requiredDetails)
  const mentee=useSelector(state=>state.mentee)
  const mentor=useSelector(state=>state.mentor)
  const mentorshipIntrests=useSelector(state=>state.mentorshipIntrests).filter(item => item.selected);
  const mentorIntrests=useSelector(state=>state.mentorIntrests).filter(item => item.selected);
  const experience=useSelector(state=>state.experience)
  const education=useSelector(state=>state.education)
  const resume=useSelector(state=>state.resume)
  // const skills=useSelector(state=>state.skills).filter(item => item.selected);
  // const skills = allskills.
  const skills=useSelector(state=>state.skills).filter(item => item.selected);
  const additionalInfo=useSelector(state=>state.additionInformation)
  const lastname=useSelector(state=>state.lastname)
  const firstname=useSelector(state=>state.firstname)
  const linkedinProfile=useSelector(state=>state.linkedinProfile)
  const numofmentees=useSelector(state=>state.numberofmentees)

  const skipResume=useSelector(state=>state.skipResume)


  const [formData,setFormData]=React.useState({
    requiredDetails:{},
      mentee:false,
      mentor:false,
      mentorshipIntrests:[],
      mentorIntrests:[],
      experience:{},
      education:{},
      resume:null,
      skills:[]
  })
  const obj={
    requiredDetails:req,
    mentee,
    mentor,
    mentorshipIntrests,
    mentorIntrests,
    experience,
    education,
    resume,
    skills
  }

  const handleSignUp=async()=>{
    setSubmitted(true)
    const selectedSkills=[]
    const formDataWithFiles = new FormData();
    formDataWithFiles.append('requiredDetails',JSON.stringify(req))
    formDataWithFiles.append('mentee',mentee)
    formDataWithFiles.append('mentor',mentor)
    formDataWithFiles.append('mentorshipIntrests',JSON.stringify(mentorshipIntrests))
    formDataWithFiles.append('mentorIntrests',JSON.stringify(mentorIntrests))
    formDataWithFiles.append('experience',JSON.stringify(experience))
    formDataWithFiles.append('education',JSON.stringify(education))
    formDataWithFiles.append('skills',JSON.stringify(skills))
    formDataWithFiles.append('resume',resume)
    formDataWithFiles.append('additionalInformation',additionalInfo)
    formDataWithFiles.append('firstname',firstname)
    formDataWithFiles.append('lastname',lastname)
    formDataWithFiles.append('matched',false)
    
    formDataWithFiles.append('linkedinProfile',linkedinProfile)
    formDataWithFiles.append('numofmentees',numofmentees)


        // for (const key in formData) {
        //   if (formData.hasOwnProperty(key)) {
        //     if (formData[key] instanceof File) {
        //       formDataWithFiles.append(key, formData[key]);
        //     } else {
        //       formDataWithFiles.append(key, formData[key]);
        //     }
        //   }
        // }

    console.log('form with files',formDataWithFiles)
 
      try {
        const response = await axios.post(endpoint+'/users', formDataWithFiles,{headers: {
          'Content-Type': `multipart/form-data; boundary=${formDataWithFiles._boundary}`,

      }});
  
        if (response.status === 200) {
          const a=true
          dispatch(saveUserObj(response.data))


          dispatch(setAuth(a))
          localStorage.setItem('auth','true')
          localStorage.setItem('userid',response.data._id)
          dispatch(setMentorIntrests([{
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
          },]))
          dispatch(setMentorshipIntrests([{
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
          }]))
          navigate('/homepage');

  
        } else {
          console.error('Failed to submit user data.');
          }
        } catch (error) {
        console.error('Error:', error);
        }
  
    
  }


  const isStepOptional = (step) => {
    return step === 10;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const checkMailIdPresent=async()=>{
    try {
      const obj={
        'email':req.gmail
      }
      const response = await axios.post(`${endpoint}/checkemail`,obj);
    
          if (response.status === 200) {
            
            const user=response.data
            console.log('details ',user)
            if(user==null || user=={}){
              handleShowAlert(false)
              setActiveStep((prevActiveStep) => prevActiveStep + 1);
              setLoading(false)
              return false
            }
            else{
              handleShowAlert(false)
              setErrorMessage('Email Id already present, please login')
              handleShowAlert(true)
              setLoading(false)
              return false
              
            }
          } else {
            handleShowAlert(false)
              setErrorMessage('Email Id error')
              handleShowAlert(true)
              setLoading(false)
              return false
            }
          } catch (error) {
              console.error('Error:', error);
              handleShowAlert(false)
              setErrorMessage('Email Id error')
              handleShowAlert(true)
              setLoading(false)
              return false
          }
          return false

  }

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if(activeStep==0){
      setLoading(true)
      const flag=checkMailIdPresent()
      if(flag){
        return
      }
      else{
        handleShowAlert(false)
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }

    if(activeStep==1){
      if(mentee=='' && mentor==''){
        handleShowAlert(false)
        setErrorMessage('Please select mentor or mentee checkbox')
        handleShowAlert(true)
        return
      }
      else if(mentee!=''){
        const val=mentorshipIntrests.length
        if(val<=0){
          console.log(mentee)
          handleShowAlert(false)
          setErrorMessage('Please select your intrests')
          handleShowAlert(true)
          return
        }
      }
      else if(mentor!=''){
        console.log(numofmentees)
        if(numofmentees==''){
          handleShowAlert(false)
          setErrorMessage('Please select number of mentees')
          handleShowAlert(true)
          return
        }
        else{
          const val=mentorIntrests.length
          if(val<=0){
            console.log(mentee)
            handleShowAlert(false)
            setErrorMessage('Please select your intrests')
            handleShowAlert(true)
            return
          }
        }
      }
    }
    if(activeStep==2){
      const val=skills.length
      console.log('sak',skills)
      if(val==0){
        handleShowAlert(false)
        setErrorMessage('Please select to proceed')
        handleShowAlert(true)
        return
      }
    }
    if(activeStep==4){
      console.log(resume ,'and', skipResume)
      if(skipResume){
        if(resume==null){
          handleShowAlert(false)
          setErrorMessage('Please select to resume')
          handleShowAlert(true)
          return
        }
      }
      // else if(!skipResume){
      //   handleShowAlert(false)
      //   setErrorMessage('Please select to resume')
      //   handleShowAlert(true)
      //   return
      // }
    }
    if(activeStep==4){
      handleSignUp()
    }
    else{
      handleShowAlert(false)
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    

    
    
         
      
    
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [submitted,setSubmitted]=React.useState(false)

  const handleSkip = () => {
    // if (!isStepOptional(activeStep)) {
    //   // You probably want to guard against something like this,
    //   // it should never occur unless someone's actively trying to break something.
    //   throw new Error("You can't skip a step that isn't optional.");
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped((prevSkipped) => {
    //   const newSkipped = new Set(prevSkipped.values());
    //   newSkipped.add(activeStep);
    //   return newSkipped;
    // });
  };

  

  const handleReset = () => {
    setActiveStep(0);
  };

  const [showAlert,setShowAlert]=React.useState(false)
  const handleShowAlert=(val)=>{
    // const val=!showAlert
    setShowAlert(val)
  }

  const [errorMessage,setErrorMessage]=React.useState("Error message")

  const [loading,setLoading]=React.useState(false)

  return (
    <><Loading loading={loading}/>
    <Container maxWidth="xs" sx={{height:'100vh'}} component="main">
      
        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center'}}>
        {showAlert && <Alert onClose={()=>{handleShowAlert(false)}} sx={{position:'absolute',top:'2%'}} severity="error">{errorMessage}</Alert>}
        </Stack>
      
        <Stack sx={{height:'100%',justifyContent:'center',textAlign:'center',display:'flex'}}>
        
           
            <Box sx={{boxShadow: 3,
                    borderRadius: 2,
                    px: 4,
                    py: 3,
                    }} >
                        <Box display="flex"
                            justifyContent="center"
                            alignItems="center" sx={{paddingBottom:'20px'}}>
                            <Link to="/"><img  alt="Logo" src="techpact-logo.png" style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%', // Adjust the height as needed
            }}/></Link>
                        </Box>

                        {
            submitted?<CircularProgress />:
            <>
            <Box sx={{}}>
                            
                            <Stepper activeStep={activeStep}>
                              {steps.map((label, index) => {
                                const stepProps = {};
                                const labelProps = {};
                                
                                if (isStepSkipped(index)) {
                                  stepProps.completed = false;
                                }
                                return (
                                  <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                  </Step>
                                );
                              })}
                            </Stepper>
                            {activeStep === steps.length ? '' : (
                              <React.Fragment>
                                {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                                
                                <Typography sx={{ mt: 2, mb: 1 }}></Typography>
                                <RequriedInformation step={activeStep+1} handleNext={handleNext}/>
                                <PurposeInformation step={activeStep+1} handleNext={handleNext} handleSkip={handleSkip}/>
                                <Skills step={activeStep+1} handleNext={handleNext} handleSkip={handleSkip}/>
                                <Bio step={activeStep+1} handleNext={handleNext} handleSkip={handleSkip} handleBack={handleBack}/>
                                <Education step={activeStep+1} handleNext={handleNext} handleBack={handleBack}/>
                                {activeStep!=0 && activeStep !=3 && activeStep !=4?<Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
                                  <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                  >
                                    Back
                                  </Button>
                                  <Box sx={{ flex: '1 1 auto' }} />
                                  {isStepOptional(activeStep) && (
                                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                      Skip
                                    </Button>
                                  )}
                      
                                  <Button onClick={handleNext}>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                  </Button>
                                </Box>:''}
                              </React.Fragment>
                            )}
                          </Box>

            </>
          }
            </Box>
        </Stack>
    </Container>
    </>
    
  );
}