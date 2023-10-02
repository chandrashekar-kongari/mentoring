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
import { setAuth } from '../../features/UserSlice';
import axios from 'axios';
const steps = ['', '', '',''];

export default function ProfileCard() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const [userObj,setUserObj]=React.useState({})

  const req=  useSelector(state=>state.requiredDetails)
  const mentee=useSelector(state=>state.mentee)
  const mentor=useSelector(state=>state.mentor)
  const mentorshipIntrests=useSelector(state=>state.mentorshipIntrests)
  const mentorIntrests=useSelector(state=>state.mentorIntrests)
  const experience=useSelector(state=>state.experience)
  const education=useSelector(state=>state.education)
  const resume=useSelector(state=>state.resume)

 
  



  const handleSignUp=async()=>{

    const obj={
      requiredDetails:req,
      mentee,
      mentor,
      mentorshipIntrests,
      mentorIntrests,
      experience,
      education,
      resume
    }
 
      try {
        const response = await axios.post('http://127.0.0.1:5000/users', obj);
  
        if (response.status === 200) {
          const a=true
          dispatch(setAuth(a))
          
     
        navigate('/homepage');
  
        } else {
          console.error('Failed to submit user data.');
          }
        } catch (error) {
        console.error('Error:', error);
        }
  
    
  }


  const isStepOptional = (step) => {
    return step === 2;
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

    

    if(activeStep==3){
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
                            {/* <Link to="/"><img  alt="Logo" src="techpact-logo.png" style={{
                            width: '50%', // Adjust the width as needed
                            height: '50%', // Adjust the height as needed
            }}/></Link> */}
            <Typography sx={{fontWeight:'bold',fontSize:24,color:'black'}}>
                Let's get started!
            </Typography>
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
          <RequriedInformation step={activeStep+5}/>
          <PurposeInformation step={activeStep+1}/>
          <WorkExperience step={activeStep+1}/>
          <Education step={activeStep+1}/>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
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