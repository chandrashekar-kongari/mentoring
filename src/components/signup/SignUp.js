import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, FormControl, InputLabel, OutlinedInput, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import RequriedInformation from './RequriedInformation';
import PurposeInformation from './PurposeInformation';
import WorkExperience from './WorkExperience';
import Education from './Education';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEducation, addResume, saveFirstName, saveLastName, saveLinkedinProfile, setAdditionaInformation, setAuth, setMentee, setMentor, setMentorIntrests, setMentorshipIntrests, setRequiredDetails, updateSkill } from '../../features/UserSlice';
import axios from 'axios';
import Skills from './Skills';
import endpoint from '../../API/api';
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
    
    formDataWithFiles.append('linkedinProfile',linkedinProfile)
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
          dispatch(setAuth(a))
          navigate('/success');
  
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

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    

    if(activeStep==4){
      handleSignUp()
    }
    else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="xs" sx={{height:'100vh'}} component="main">
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
          <RequriedInformation step={activeStep+1}/>
          <PurposeInformation step={activeStep+1} handleNext={handleNext}/>
          <Skills step={activeStep+1} handleNext={handleNext}/>
          <WorkExperience step={activeStep+1} handleNext={handleNext}/>
          <Education step={activeStep+1}/>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 1 }}>
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
          </Box>
        </React.Fragment>
      )}
    </Box>
                
                    

            </Box>
        </Stack>
    </Container>
    
  );
}