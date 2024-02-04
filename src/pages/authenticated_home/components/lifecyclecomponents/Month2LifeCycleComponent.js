import { Box, Button, Card, IconButton,CardActions, CardContent, Chip, Stack, Typography, Container } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import AlertComponent from '../../../../components/AlertComponent'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import endpoint from '../../../../API/api'
import axios from 'axios'
import dayjs from 'dayjs';
import { saveLifeCycle, saveUserObj } from '../../../../features/UserSlice'
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
const Month2LifeCycleComponent = () => {

  const [lifeCycle,setLifeCycle]=useState([])
  const li=useSelector(state=>state.lifeCycle)
  const user_id=useSelector(state=>state.userObj._id)
  const dispatch=useDispatch()
  const [month2Data, setMonth2Data] = useState(null);
  useEffect(()=>{
    setLifeCycle(li)
    const foundMonth2Data = li.find(item => item.id === 'month2');
    setMonth2Data(foundMonth2Data);
    setAgenda(foundMonth2Data.agenda)
    setInsights(foundMonth2Data.insights)
    setTasks(foundMonth2Data.tasks)
    setResources(foundMonth2Data.resources)
    
    const dateObj = dayjs(foundMonth2Data.date)
    console.log('date ',dateObj)
    setDate(dateObj)
    

  },[])
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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value,setValue]=useState()

  const [date,setDate]=useState()

  const [agenda,setAgenda]=useState('')
  const [insights,setInsights]=useState('')
  const [tasks,setTasks]=useState('')
  const [resources,setResources]=useState('')
    

    
    const [titleOfModel,setTitleOfModel]=useState('')
    const [valueOfModel,setValueOfModel]=useState('')

    const handleModelOpen=(t,v)=>{
      setTitleOfModel(t)
      setValueOfModel(v)
      handleOpen()

    }

    const handleModelValueChange=(e)=>{
      const v=e.target.value
      setValueOfModel(v)
    }

    const updateMonth2Data = () => {
      
      handleSaveLifeCycle()

      console.log(lifeCycle)
      console.log(agenda)


    };
    const [updating,setUpdating]=useState()

    const handleDateChange=async(newval)=>{
     
      const value = dayjs(newval).startOf('day').toDate();
      setUpdating(true)
      handleClose()
      
      const obj={
        'id':user_id,
        'monthid':'month2',
        'valueType':'date',
        'value':value
      }
      const token=localStorage.getItem('token')
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        
        },
      };
      
      try {
        const response = await axios.post(`${endpoint}/updatelifecycle`,obj,axiosConfig);
      
            if (response.status === 200) {
              const a=true
              // dispatch(setAuth(a))
              const user=response.data
              console.log('details ',user)
              if(user==null){
                callToast('Error while updating','error')
  
                setUpdating(false)
              }
              else{
                
                dispatch(saveUserObj(response.data.user))
                dispatch(saveLifeCycle(response.data.user.lifeCycle))
                setLifeCycle(response.data.user.lifeCycle)
                const foundMonth2Data = response.data.user.lifeCycle.find(item => item.id === 'month2');
                setMonth2Data(foundMonth2Data);
                setAgenda(foundMonth2Data.agenda)
                setInsights(foundMonth2Data.insights)
                setTasks(foundMonth2Data.tasks)
                setResources(foundMonth2Data.resources)
                const dateObj = dayjs(foundMonth2Data.date);
                setDate(dateObj)

  
                callToast('Successfully Added','success')
                
                
              }
            } else {
              console.error('Failed to submit user data.');
              setUpdating(false)
       
  
                callToast('Error while updating','error')
              }
            } catch (error) {
            console.error('Error:', error);
            callToast('Error while updating','error')
  
                setUpdating(false)
       
            }

    }

    const handleSaveLifeCycle=async()=>{

      // setLifeCycle(prevData => prevData.map(item => 
      //   item.id == 'month2'
      //     ? { ...item, 'agenda': agenda, 'tasks':tasks,'insights':insights,'resources':resources }
      //     : item
      // ));
      // dispatch(saveLifeCycle(lifeCycle))
      setUpdating(true)
      handleClose()
      
      const obj={
        'id':user_id,
        'monthid':'month2',
        'valueType':titleOfModel.toLowerCase(),
        'value':valueOfModel
      }
      const token=localStorage.getItem('token')
      const axiosConfig = {
        headers: {
          Authorization: `Bearer ${token}`,
        
        },
      };
      try {
        const response = await axios.post(`${endpoint}/updatelifecycle`,obj,axiosConfig);
      
            if (response.status === 200) {
              const a=true
              // dispatch(setAuth(a))
              const user=response.data
              console.log('details ',user)
              if(user==null){
                callToast('Error while updating','error')
  
                setUpdating(false)
              }
              else{
                
                dispatch(saveUserObj(response.data.user))
                dispatch(saveLifeCycle(response.data.user.lifeCycle))
                setLifeCycle(response.data.user.lifeCycle)
                const foundMonth2Data = response.data.user.lifeCycle.find(item => item.id === 'month2');
                setMonth2Data(foundMonth2Data);
                setAgenda(foundMonth2Data.agenda)
                setInsights(foundMonth2Data.insights)
                setTasks(foundMonth2Data.tasks)
                setResources(foundMonth2Data.resources)
                const dateObj = dayjs(foundMonth2Data.date);
                setDate(dateObj)

  
                callToast('Successfully Added','success')
                
                
              }
            } else {
              console.error('Failed to submit user data.');
              setUpdating(false)
       
  
                callToast('Error while updating','error')
              }
            } catch (error) {
            console.error('Error:', error);
            callToast('Error while updating','error')
  
                setUpdating(false)
       
            }
    }

    const handleModelValueSave=()=>{

      

      if(titleOfModel=='Agenda'){

        setAgenda(valueOfModel)

      }else if(titleOfModel=='Insights'){
        setInsights(valueOfModel)

      }else if(titleOfModel=='Tasks'){
        setTasks(valueOfModel)

      }else if(titleOfModel=='Resources'){
        setResources(valueOfModel)

      }

      handleSaveLifeCycle()
       

   
    }

    const [alertType,setAlertType]=useState()
    const [alertMessage,setAlertMessage]=useState()
    const [showAlert,setShowAlert]=useState(false)

    

   
  return (
    <Box>
<ToastContainer/>
{showAlert && <AlertComponent type={alertType} message={alertMessage}/>}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{justifyContent:'center'}}>

        <Stack sx={{flex:1,flexDirection:'row',justifyContent:'center',paddingBottom:'1rem',marginTop:'0px'}}>
            <Typography sx={{fontWeight:'bold',padding:'0px',margin:'0px'}}>{titleOfModel}</Typography>
            </Stack>
            <IconButton onClick={handleClose} sx={{top:'0px', right:'0px',position:'absolute'}}><CloseIcon sx={{fontSize:'16px'}}/></IconButton>
            <Stack direction='column' >
            <textarea placeholder={valueOfModel} required style={{maxWidth:'320px'}} name="additionalInformation" value={valueOfModel} onChange={handleModelValueChange} rows={10} cols={40}  />

            
            {/* {valueOfModel!='' && <Stack sx={{paddingTop:'1rem',flexDirection:'row',justifyContent:'space-between'}}> <Button variant='text'>
                  Delete
              </Button> <Button variant='contained' sx={{}}>
                  Save
              </Button>
      
            </Stack>} */}
            <Stack sx={{paddingTop:'1rem'}}>
        <Button onClick={handleModelValueSave} variant='contained' sx={{}}>
                  Save
              </Button>
            </Stack>
            
              
              
            </Stack>

        </Box>
          
        </Box>
      </Modal>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, adipi</Typography>
        <Box sx={{marginBottom:'20px',marginTop:'20px'}}>
        <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label="Meeting Data"
          value={date}
          
          onChange={(newValue) => handleDateChange(newValue)}
         
        />
      </DemoContainer>
    </LocalizationProvider>
        </Box>



      {agenda=='' && <Box sx={{marginBottom:'20px'}} >
          <Chip onClick={()=>handleModelOpen('Agenda',agenda)} icon={<AddIcon />} on color='default'  label={'Agenda'} sx={{fontSize:'14px',cursor:'pointer'}} />
          </Box>}
      {insights=='' && <Box sx={{marginBottom:'20px'}}>
          <Chip onClick={()=>handleModelOpen('Insights',insights)} icon={<AddIcon />} on color='default'  label={'Insights'} sx={{fontSize:'14px',cursor:'pointer'}} />
          </Box>}
      {tasks=='' && <Box sx={{marginBottom:'20px'}} >
          <Chip onClick={()=>handleModelOpen('Tasks',tasks)} icon={<AddIcon />} on color='default'  label={'Tasks'} sx={{fontSize:'14px',cursor:'pointer'}} />
      </Box>}
      {resources=='' && <Box sx={{marginBottom:'20px'}} >
          <Chip onClick={()=>handleModelOpen('Resources',resources)} icon={<AddIcon />} on color='default'  label={'Resources'} sx={{fontSize:'14px',cursor:'pointer'}} />
          </Box>}


        
        {agenda!='' && <Box sx={{marginBottom:'20px',marginTop:'20px'}} >
          <Container sx={{borderLeft:'2px solid #CFD4D7',padding:'1rem'}}>
            <Stack spacing={2}>
            <Typography sx={{fontSize:'16px'}}>{'Agenda'}</Typography>
            <Typography sx={{fontSize:'14px'}}>{agenda}</Typography>
            <Chip on onClick={()=>handleModelOpen('Agenda',agenda)} icon={<CreateIcon fontSize='small'/>} label={'Update'} sx={{width:'100px',cursor:'pointer',fontSize:'13px'}}></Chip>
            </Stack>
          </Container>

        </Box>}
        {insights!='' && <Box sx={{marginBottom:'20px',marginTop:'20px'}} >
          <Container sx={{borderLeft:'2px solid #CFD4D7',padding:'1rem'}}>
            <Stack spacing={2}>
            <Typography sx={{fontSize:'16px'}}>{'Insights'}</Typography>
            <Typography sx={{fontSize:'14px'}}>{insights}</Typography>
            <Chip onClick={()=>handleModelOpen('Insights',insights)}  icon={<CreateIcon fontSize='small'/>} label={'Update'} sx={{width:'100px',cursor:'pointer',fontSize:'13px'}}></Chip>
            </Stack>
          </Container>

        </Box>}
        {tasks!='' && <Box sx={{marginBottom:'20px',marginTop:'20px'}} >
          <Container sx={{borderLeft:'2px solid #CFD4D7',padding:'1rem'}}>
            <Stack spacing={2}>
            <Typography sx={{fontSize:'16px'}}>{'Tasks'}</Typography>
            <Typography sx={{fontSize:'14px'}}>{tasks}</Typography>
            <Chip onClick={()=>handleModelOpen('Tasks',tasks)} icon={<CreateIcon fontSize='small'/>} label={'Update'} sx={{width:'100px',cursor:'pointer',fontSize:'13px'}}></Chip>
            </Stack>
          </Container>

        </Box>}

        {resources!='' && <Box sx={{marginBottom:'20px',marginTop:'20px'}} >
          <Container sx={{borderLeft:'2px solid #CFD4D7',padding:'1rem'}}>
            <Stack spacing={2}>
            <Typography sx={{fontSize:'16px'}}>{'Resources'}</Typography>
            <Typography sx={{fontSize:'14px'}}>{resources}</Typography>
            <Chip onClick={()=>handleModelOpen('Resources',resources)}  icon={<CreateIcon fontSize='small'/>} label={'Update'} sx={{width:'100px',cursor:'pointer',fontSize:'13px'}}></Chip>
            </Stack>
          </Container>

        </Box>}       
    
   
  
    </Box>
  )
}

export default Month2LifeCycleComponent