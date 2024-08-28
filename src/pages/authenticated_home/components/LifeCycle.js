import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import './lifecycle.css'
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Box, Button, Chip, Container, Paper, Typography } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EventIcon from '@mui/icons-material/Event';
import StepContent from '@mui/material/StepContent';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import MentorMatchLifeCycleComponent from './lifecyclecomponents/MentorMatchLifeCycleComponent';
import IntroLifeCycleComponent from './lifecyclecomponents/IntroLifeCycleComponent';
import Month2LifeCycleComponent from './lifecyclecomponents/Month2LifeCycleComponent';
import CompletedCycleCircle from './lifecyclecomponents/CompletedCycleCircle';
import OnGoingCycleCircle from './lifecyclecomponents/OnGoingCycleCircle';
import UnCompletedCycleCircle from './lifecyclecomponents/UnCompletedCycleCircle';
import Month3LifeCycleComponent from './lifecyclecomponents/Month3LifeCycleComponent';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import endpoint from '../../../API/api';
import { saveUserObj } from '../../../features/UserSlice';
import Month4LifeCycleComponent from './lifecyclecomponents/Month4LifeCycleComponent';

import { ToastContainer, toast } from 'react-toastify';
import Month1LifeCycleComponent from './lifecyclecomponents/Month1LifeCycleComponent';


const QontoConnector = styled(StepConnector)(({ theme }) => ({

  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#00707B',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#00707B',
    },
  },
  
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
  display: 'flex',
  height: 22,
  alignItems: 'center',
  ...(ownerState.active && {
    color: '#784af4',
  }),
  '& .QontoStepIcon-completedIcon': {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  '& .QontoStepIcon-circle': {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>

        
       

      {completed && <CompletedCycleCircle/>}
      {active && <OnGoingCycleCircle/>}
      
      {(!completed && !active) && <UnCompletedCycleCircle/>}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};



const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <GroupAddIcon />,
    2: <QuestionAnswerIcon />,
    3: <EventIcon />,
    4: <EventIcon />,
    5: <EventIcon />,
    6: <EventIcon />,
    7: <EventIcon />,
    8: <EventIcon />,
    9: <GroupRemoveIcon/>,
    10: <RateReviewIcon/>,


  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};




export default function LifeCycle() {

  const user=useSelector(state=>state.userObj)
  const dispatch=useDispatch()
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

  React.useEffect(()=>{
   setActiveStep(parseInt(user.activeLifeCycleStep,10))


  },[])
  const steps2 = [
    {
      id:1,
      label: 'Mentor Details',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
        component:<MentorMatchLifeCycleComponent/>
    },
    {
      id:2,
      label: 'Month 1:',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
        component:<Month1LifeCycleComponent/>
    },
   
    {
      id:3,
      label: 'Month 2:',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
        component:<Month2LifeCycleComponent/>
    },
    {
      id:4,
      label: 'Month 3:',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
        component:<Month3LifeCycleComponent/>
    },
    {
      id:5,
      label: 'Month 4:',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
        component:<Month4LifeCycleComponent/>
    },
    {
      id:8,
      label: 'Close Relationship',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
        component:<MentorMatchLifeCycleComponent/>
    },
    {
      id:9,
      label: 'Feedback',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
        component:<MentorMatchLifeCycleComponent/>
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep2, setActiveStep2] = React.useState(4);
  
  const checkAgendaFilledOrNot=()=>{

  }

  const handleLifeCycleAtiveStep=async(val)=>{
    var active=activeStep
    if(val=='next'){
      console.log(' active', active)
      if(activeStep==1 || activeStep==2 || activeStep==3 || activeStep==4 ){
        if(user.lifeCycle[activeStep-1].agenda == ''){
         

          callToast('Please fill agenda','error')
          return

        }
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      active=active+1
      checkAgendaFilledOrNot()
    }
    else{
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      active=active-1
    }
    // const token=localStorage.getItem('token')
    // const axiosConfig = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
      
    //   },
    // };
    
    // try {
    //   const obj={
    //     'id':localStorage.getItem('userid'),
    //     'activeLifeCycleStep':activeStep,
  
    //   }
    //   const response = await axios.post(`${endpoint}/updateactivelifecyclestep`,obj,axiosConfig);
    
    //       if (response.status === 200) {
    //         const a=true
    //         // dispatch(setAuth(a))
    //         const user=response.data
         
    //         if(user==null){
            
    //         }
    //         else{
              
    //           dispatch(saveUserObj(response.data.user)) 
    //         }
    //       } else {
    //         console.error('Failed to submit user data.');
    //         }
    //       } catch (error) {
    //       console.error('Error:', error);
          
     
    //       }
  }
  const handleNext = () => {
    
    handleLifeCycleAtiveStep('next')
  };

  const handleBack = () => {
    
    handleLifeCycleAtiveStep('back')
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <>


    <Container maxWidth='xs' sx={{paddingTop:'2rem',paddingBottom:'2rem'}}> 
    <Stack sx={{flex:1,textAlign:'center',flexDirection:'row', justifyContent:'center',paddingTop:'2rem',paddingBottom:'2rem'}}>
        <Typography sx={{fontWeight:'bold',fontSize:'28px',paddingRight:'6px'}}>Mentorship Lifecycle </Typography>

      </Stack>
    {/* {steps2.map((step,index)=>{
      return <Container >
        <Stack sx={{flex:'1',flexDirection:'row'}}>
        {step.id < activeStep && <CompletedCycleCircle/>}
        {step.id == activeStep && <OnGoingCycleCircle/>}
        {step.id > activeStep && <UnCompletedCycleCircle/>}
        <Typography sx={{paddingLeft:'2rem',fontSize:'14px',fontWeight:'bold'}}>{step.label}</Typography>
        </Stack>
        <Container sx={{marginLeft:'2rem',borderLeft:'2px dashed #EBECF1'}}>
               

              {step.id <= activeStep && (
                <>{step.component}</>
              )}
        </Container>
        
        {step.id!=9 && <Container sx={{marginLeft:'2rem', height:'2rem',borderLeft:'2px dashed #EBECF1'}}></Container>
}
        </Container>
    })} */}

<Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical" connector={<QontoConnector />}>
        {steps2.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            StepIconComponent={QontoStepIcon}
              // optional={
              //   index === 2 ? (
              //     <Typography variant="caption">Last step</Typography>
              //   ) : null
              // }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.component}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                  <Button
                  disabled={index===6}
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {'Continue'}
                  </Button>
                  
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      
    </Box>




    </Container>

    


    
    
     
 
    
    </>
  );
}