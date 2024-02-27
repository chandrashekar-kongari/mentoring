import { Box, Button, Card, Container, FormControl, Grid, InputLabel, List, ListItem, ListItemText, OutlinedInput, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';

import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserObj } from '../../../features/UserSlice';
import axios from 'axios';
import endpoint from '../../../API/api';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    borderRadius:2,

    boxShadow: 24,
    p: 6,
  };


function GoalInput({ goal, index, onChange }) {
    const handleChange = (event) => {
      onChange(event.target.value, index);
    };
  
    return (

        <FormControl variant="outlined" style={{paddingBottom:'1rem'}}>
                <InputLabel >Goal {index+1}</InputLabel>
                <OutlinedInput
                required
                name='title'
                value={goal}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="Title"
                />
                
                </FormControl>
    
    );
  }
const GoalSetting = ({usergoals,userObj,setUserObj}) => {
    const [open, setOpen] = React.useState(false);

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
        setGoals(g)
    },[])

    const handleUpdateValues=async(type,value)=>{
        // setUpdating(true)
        handleClose()
        const obj={
        'id':userObj._id,
          'type':'goals',
          'value':goals
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
                      callToast('Error while updating','error')
                    }
                    else{
                      setUserObj(response.data.user)
                      dispatch(saveUserObj(response.data.user))
        
                  
               
                      callToast(response.data.message,response.data.type)
    
                      
                    }
                  } else {
                    callToast('Error while updating','error')
                    }
                  } catch (error) {
                    TimeOut(true,'error','Time out', 'please login')
                    return
                  }
      }
      const navigate=useNavigate()
      const TimeOut=(showAlert,typeOfAlert,alertMessage)=>{

        navigate('/', { state: { 'showAlert': showAlert, 'typeOfAlert':typeOfAlert,'alertMessage':alertMessage  } });
        return
      }

      

    const handleSaveGoals=()=>{
        handleUpdateValues()
        handleClose()

    }

  const handleClose = () => setOpen(false);
const g=useSelector(state=>state.userObj.goals)
  const handleOpen=()=>{
    // setGoals(usergoals)
    setOpen(true)
  }

  const initialGoals = ['goal1', 'goal2', 'goal3', 'goal4', 'goal5'];
  const [goals, setGoals] = useState(initialGoals);

  const handleGoalChange = (value, index) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };



  return (
    <Container maxWidth='md'>
<ToastContainer/>

        <Box>
        {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <Box sx={{justifyContent:'center'}}>
            <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography variant='h7' sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>My Goals</Typography>
            </Stack>
            </Box>
            <Stack direction='column' >
       
      {goals && goals.map((goal, index) => (
        <GoalInput
          key={index}
          goal={goal}
          index={index}
          onChange={handleGoalChange}
        />
      ))}


           



            </Stack>
            <Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
            <Button onClick={handleClose} variant='text'  sx={{marginTop:'1rem',color:'black'}}>Cancel</Button>

            <Button  onClick={handleSaveGoals} variant='contained' color='success' sx={{marginTop:'1rem',backgroundColor:'#006D75',}}>Update</Button>
            </Stack>


       
                



        </Box>
      </Modal>
        </Box>
        <Card elevation={2} sx={{maxWidth:'md',p:6,m:6}}>

<Box sx={{justifyContent:'space-between',display:'flex',flexWrap:'wrap'}}>
    <Box>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24" fill="none"  >
<g >
<path d="M12 0.959961C5.9126 0.959961 0.959961 5.9126 0.959961 12C0.959961 18.0873 5.9126 23.04 12 23.04C18.0873 23.04 23.04 18.0873 23.04 12C23.04 9.7934 22.387 7.73731 21.2671 6.01027L20.8387 6.43871L20.565 6.71246C21.5192 8.25182 22.08 10.0593 22.08 12C22.08 17.5584 17.5584 22.08 12 22.08C6.44156 22.08 1.91996 17.5584 1.91996 12C1.91996 6.44156 6.44156 1.91996 12 1.91996C14.3584 1.91996 16.5217 2.74433 18.24 4.10715V5.08121L17.0709 6.25027C15.7171 5.05311 13.9449 4.31996 12 4.31996C7.7654 4.31996 4.31996 7.7654 4.31996 12C4.31996 16.2345 7.7654 19.68 12 19.68C16.2345 19.68 19.68 16.2345 19.68 12C19.68 10.402 19.1882 8.91676 18.3496 7.68652L17.654 8.38215C18.3251 9.42807 18.72 10.6675 18.72 12C18.72 15.7056 15.7056 18.72 12 18.72C8.29436 18.72 5.27996 15.7056 5.27996 12C5.27996 8.29436 8.29436 5.27996 12 5.27996C13.6806 5.27996 15.2136 5.90479 16.3921 6.92902L14.6896 8.63152C13.9511 8.03914 13.0183 7.67996 12 7.67996C9.6182 7.67996 7.67996 9.6182 7.67996 12C7.67996 14.3817 9.6182 16.32 12 16.32C14.3817 16.32 16.32 14.3817 16.32 12C16.32 11.3342 16.1641 10.7063 15.8943 10.1428L15.1621 10.874C15.2879 11.2263 15.36 11.6049 15.36 12C15.36 13.8528 13.8528 15.36 12 15.36C10.1472 15.36 8.63996 13.8528 8.63996 12C8.63996 10.1472 10.1472 8.63996 12 8.63996C12.7535 8.63996 13.4472 8.89246 14.0081 9.31309L12.2475 11.0737C12.1668 11.0517 12.0836 11.0404 12 11.04C11.7454 11.04 11.5012 11.1411 11.3211 11.3211C11.1411 11.5012 11.04 11.7454 11.04 12C11.04 12.2546 11.1411 12.4987 11.3211 12.6788C11.5012 12.8588 11.7454 12.96 12 12.96C12.2546 12.96 12.4987 12.8588 12.6788 12.6788C12.8588 12.4987 12.96 12.2546 12.96 12C12.9599 11.9161 12.9489 11.8325 12.9271 11.7515L18.9187 5.75996H20.16L22.56 3.35996H20.64V1.43996L18.7809 3.29902C16.9079 1.83565 14.5556 0.959961 12 0.959961Z" 
fill="#757575"></path>
</g>
<defs>
<clipPath >
  <rect width="24" height="24" fill="white"></rect>
</clipPath>
</defs>
</svg></div> 

    </Box>
    <Stack spacing={2} sx={{justifyContent:'center',alignItems:'center'}}>
    <Typography variant='h7' sx={{textAlign:'left'}}>Step 1 - Set Effective Goals</Typography>
    <Typography>We recommend no more than three goals (up to a maximum of five).</Typography>
</Stack>

<Stack sx={{pt:4,justifyContent:'center',alignItems:'center'}}>
    <Button onClick={handleOpen} fullWidth variant='contained'  sx={{backgroundColor:'#006D75', px:8,py:3, textTransform:'capitalize',
':hover': {
    bgcolor: '#006D75', // theme.palette.primary.main
    color: 'white',
  },}}>Update</Button>
</Stack>

    
</Box>




</Card>
        <Typography variant='body1' sx={{p:6,pt:3,pb:3}}>The first thing you must define before you begin your mentoring relationship is "What is the purpose of my mentoring relationship?" Your goals will frame the discussions with your mentor and ultimately define if the mentoring relationship was effective.</Typography>

        <Typography variant='body1' sx={{p:6,pt:3,pb:3}}>Goal-setting is a critical step.  As the saying goes ... garbage in, garbage out. There are many techniques to write effective goals.  </Typography>

        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText  >Is your goal focused and achievable in the near-term? Check-out this engaging <Link href="https://www.khanacademy.org/college-careers-more/learnstorm-growth-mindset-activities-us/elementary-and-middle-school-activities/setting-goals/v/learnstorm-growth-mindset-how-to-write-a-smart-goal">video</Link> from Khan Academy on SMART goals.​</ListItemText>
        
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Is your goal broader and long-term?  Review this <Link href='https://nesslabs.com/smart-goals-pact'>article</Link> that outlines the PACT approach by Ness Labs.​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>Does your goal make you a little uncomfortable?  Watch this <Link hre='https://www.leadershipiq.com/blogs/leadershipiq/video-goal-setting-requires-hard-goals'>video</Link> featuring HARD goals by Mark Murphy.​</ListItemText>
      </ListItem>
      
      
    </List>

    <Typography variant='body1' sx={{p:6,pt:3,pb:3}}>Your goals can cover a wide range of topics. Here are some ideas to get you started.</Typography>
    <Typography variant='body1' sx={{p:6,pt:3,pb:3,fontWeight:'600'}}>
    Career Guidance
    </Typography>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText  >What career options fit you best (for example, technology specialties, companies, industries)?​</ListItemText>
        
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>What skills are most important to your chosen career?​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>I want to change my career.  I want to change my industry.  I was recently promoted.  How do I best manage this transition?​</ListItemText>
      </ListItem>
      
      
    </List>
    <Typography variant='body1' sx={{p:6,pt:3,pb:3,fontWeight:'600'}}>
    Leadership
    </Typography>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText  >How do I drive transformational change? ​</ListItemText>
        
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>How do I manage competing stakeholder perspectives?​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>How do I lead my team?​</ListItemText>
      </ListItem>
      
      
    </List>
    <Typography variant='body1' sx={{p:6,pt:3,pb:3,fontWeight:'600'}}>
    Personal Development
    </Typography>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText  >How do I find balance?​</ListItemText>
        
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>How do I network?​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>How do I develop my personal brand?​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText  >How do I improve my executive presence?​</ListItemText>
        
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText> I need help having a difficult conversation.​</ListItemText>
      </ListItem>
      
      
      
    </List>

    <Typography variant='body1' sx={{p:6,pt:3,pb:3,fontWeight:'600'}}>
    Expertise
    </Typography>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText  >I need help refining my strategy. ​</ListItemText>
        
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>I need help communicating an idea.​</ListItemText>
      </ListItem>
      <ListItem sx={{paddingTop:0,paddingBottom:0}}>
      <KeyboardArrowRightIcon/>
        <ListItemText>How do I address a particular problem or opportunity?​</ListItemText>
      </ListItem>
      
      
    </List>
    <Typography variant='body1' sx={{p:6,pt:3,pb:3}}>We recommend you list your goals in order of importance to provide adequate time to address you most important questions.</Typography>
    <Typography variant='body1' sx={{p:6,pt:3,pb:3}}>You must record at least one goal, and we recommend no more than three goals (up to a maximum of five).</Typography>
       

    <Typography variant='body1' sx={{p:6,pt:3,pb:3,fontWeight:'600'}}>Stay tuned for the next step.  We'll send an email when you've been matched to a mentor.</Typography>


</Container>
  )
}

export default GoalSetting

        {/* <div><svg xmlns="http://www.w3.org/2000/svg" 
        width="48" height="48" viewBox="0 0 24 24" >
  <g >
    <path d="M12.015 2.88008C11.8856 2.87633 11.76 2.92508 11.6662 3.01508C11.5725 3.10508 11.52 3.23071 11.52 3.36008V6.97321C11.5125 7.02383 11.5125 7.07633 11.52 7.12696V11.3213L7.19995 15.6413L5.13933 13.5807C5.04745 13.4888 4.92183 13.4382 4.79245 13.4401C4.66683 13.442 4.5487 13.4926 4.46058 13.5807L0.140576 17.9007C0.0149509 18.0207 -0.0356742 18.2007 0.00932589 18.3676C0.0524509 18.5363 0.183701 18.6676 0.352451 18.7107C0.519326 18.7557 0.699326 18.7051 0.819326 18.5795L4.79995 14.5988L6.5212 16.3201L0.140576 22.7007C0.0149509 22.8207 -0.0356742 23.0007 0.00932589 23.1676C0.0524509 23.3363 0.183701 23.4676 0.352451 23.5107C0.519326 23.5557 0.699326 23.5051 0.819326 23.3795L6.0412 18.1576L6.02433 18.1895L8.21058 19.2826L10.08 17.8801L12 19.3201L13.92 17.8801L15.7893 19.2826L17.9756 18.1895L17.9587 18.1576L23.1806 23.3795C23.3006 23.5051 23.4806 23.5557 23.6475 23.5107C23.8162 23.4676 23.9475 23.3363 23.9906 23.1676C24.0356 23.0007 23.985 22.8207 23.8593 22.7007L17.4787 16.3201L19.2 14.5988L23.1806 18.5795C23.3006 18.7051 23.4806 18.7557 23.6475 18.7107C23.8162 18.6676 23.9475 18.5363 23.9906 18.3676C24.0356 18.2007 23.985 18.0207 23.8593 17.9007L19.5393 13.5807C19.4475 13.4888 19.3218 13.4382 19.1925 13.4401C19.0668 13.442 18.9487 13.4926 18.8606 13.5807L16.8 15.6413L12.48 11.3213V7.37446L16.4962 5.79196C16.6762 5.72071 16.7943 5.55008 16.8 5.35883C16.8056 5.16571 16.695 4.98946 16.5206 4.90883L12.2006 2.92508C12.1425 2.89696 12.0787 2.88196 12.015 2.88008ZM12.48 4.11008L15.0975 5.31008L12.48 6.34321V4.11008ZM12 12.1988L16.3931 16.5901C16.4287 16.6463 16.4756 16.6932 16.53 16.7307L17.2706 17.4676L15.8906 18.1576L13.92 16.6801L12 18.1201L10.08 16.6801L8.10933 18.1576L6.72933 17.4676L7.46995 16.727C7.5262 16.6913 7.57308 16.6445 7.61058 16.5901L12 12.1988Z"
    fill="currentColor"></path>
  </g>
  <defs>
    <clipPath >
      <rect width="24" height="24" fill="white"></rect>
    </clipPath>
  </defs>
</svg></div> */}
{/* <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8.61096 15.8891L20.6318 3.86829M8.61096 15.8891H5.78253L2.9541 18.7175H5.78253V21.546L8.61096 18.7175V15.8891ZM20.6318 3.86829H17.8033M20.6318 3.86829V6.69671" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

<svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8.61096 15.8891L20.6318 3.86829M8.61096 15.8891H5.78253L2.9541 18.7175H5.78253V21.546L8.61096 18.7175V15.8891ZM20.6318 3.86829H17.8033M20.6318 3.86829V6.69671" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> */}