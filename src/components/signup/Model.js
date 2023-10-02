import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, Chip, Container, FormControl, FormControlLabel, Input, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextareaAutosize } from '@mui/material';
import Skills from './Skills';
import { useSelector,useDispatch } from 'react-redux';
import {addExperience} from '../../features/UserSlice'
const style = {
  position: 'absolute',
  top: '50%',
  borderRadius:'3px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
//   width: 400,
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  
  p: 2,
};

export default function Model({exp}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const dispatch=useDispatch()

  const [currentlyWorking,setCurrentlyWorking]=React.useState(false)
  const onChangeCurrentlyWorking=()=>{
    setCurrentlyWorking(!currentlyWorking)
  
    setWorkExperience({...workExperience,'currentlyWorking':!currentlyWorking})
    
  }

  const [workExperience,setWorkExperience]=React.useState({
    title:'',
    company:'',
    startmonth:'',
    startyear:'',
    endmonth:'',
    endyear:'',
    skills:[],
    currentlyWorking:false
  })

  React.useEffect(()=>{
    setWorkExperience(exp)
    setCurrentlyWorking(exp.currentlyWorking)
  },[])

  const setSkills=(val)=>{
    setWorkExperience({...workExperience,'skills':val})
  }

  const handleChange=(event)=>{
    const {name,value}=event.target
    setWorkExperience({...workExperience,[name]:value})
  }

  const handleAdd=()=>{
    dispatch(addExperience(workExperience))
    handleClose()
  }

  return (
    <div>
      <Button variant='contained' onClick={handleOpen}>Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container  component="main" maxWidth="xs" sx={style}>
          <TextareaAutosize>
            

          </TextareaAutosize>
        </Container>
        {/* <Container  component="main" maxWidth="xs" sx={style}>
            <Stack justifyContent={'center'} sx={{flexDirection:'row'}}>
                <Typography>Experience</Typography>
            </Stack>
        <FormControl variant="outlined" style={{paddingBottom:'1rem',width:'100%'}}>
                <InputLabel >Role</InputLabel>
                <OutlinedInput
                name='title'
                value={workExperience.title}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="Role"
                />
                </FormControl>
                <FormControl variant="outlined" style={{paddingBottom:'1rem',width:'100%'}}>
                <InputLabel >Company</InputLabel>
                <OutlinedInput
                name='company'
                value={workExperience.company}
                onChange={handleChange}
                   
                    type={'text'}
                    
                    label="Company"
                />
                </FormControl>
                <Stack>
                <FormControlLabel name='mentor' onChange={onChangeCurrentlyWorking} control={<Checkbox checked={currentlyWorking} />} label="I am currently working in this company?" />
                    
                </Stack>
                <Stack sx={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Stack sx={{flexDirection:'column'}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'14px'}}>From  </Typography>
                        </Box>
                        <Stack sx={{flexDirection:'row'}}>
                        <FormControl sx={{width:'5.5rem',marginRight:'5px'}}>
                        <InputLabel id="demo-simple-select-label">Month</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={workExperience.startmonth}
                           name='startmonth'
                            label="Month"
                            onChange={handleChange}
                        >
                            <MenuItem value={'Jan'}>Jan</MenuItem>
                            <MenuItem value={'Feb'}>Feb</MenuItem>
                            <MenuItem value={'Mar'}>Mar</MenuItem>
                            <MenuItem value={'Apr'}>Apr</MenuItem>
                            <MenuItem value={'May'}>May</MenuItem>
                            <MenuItem value={'Jun'}>Jun</MenuItem>
                            <MenuItem value={'Jul'}>Jul</MenuItem>
                            <MenuItem value={'Aug'}>Aug</MenuItem>
                            <MenuItem value={'Sep'}>Sep</MenuItem>
                            <MenuItem value={'Oct'}>Oct</MenuItem>
                            <MenuItem value={'Nov'}>Nov</MenuItem>
                            <MenuItem value={'Dec'}>Dec</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl sx={{width:'5.5rem'}}>
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                        <OutlinedInput
                name='startyear'
                value={workExperience.startyear}
                onChange={handleChange}
                placeholder='Ex:2023'
                   
                    type={'text'}
                    
                    label="Year"
                />
                        </FormControl>
                        </Stack>
                        
                    </Stack>
                    <Stack sx={{flexDirection:'column'}}>
                        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'14px'}}>To  </Typography>
                        </Box>
                        <Stack sx={{flexDirection:'row'}}>
                        <FormControl sx={{width:'5.5rem',marginRight:'5px'}}>
                        <InputLabel id="demo-simple-select-label">Month</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name='endmonth'
                            value={workExperience.endmonth}
                            label="Month"
                            disabled={currentlyWorking}
                            sx={{backgroundColor:currentlyWorking?'#edebe4':'white'}}
                            onChange={handleChange}
                        >
                            <MenuItem value={'Jan'}>Jan</MenuItem>
                            <MenuItem value={'Feb'}>Feb</MenuItem>
                            <MenuItem value={'Mar'}>Mar</MenuItem>
                            <MenuItem value={'Apr'}>Apr</MenuItem>
                            <MenuItem value={'May'}>May</MenuItem>
                            <MenuItem value={'Jun'}>Jun</MenuItem>
                            <MenuItem value={'Jul'}>Jul</MenuItem>
                            <MenuItem value={'Aug'}>Aug</MenuItem>
                            <MenuItem value={'Sep'}>Sep</MenuItem>
                            <MenuItem value={'Oct'}>Oct</MenuItem>
                            <MenuItem value={'Nov'}>Nov</MenuItem>
                            <MenuItem value={'Dec'}>Dec</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl sx={{width:'5.5rem'}}>
                        <InputLabel id="demo-simple-select-label">Year</InputLabel>
                        <OutlinedInput
                name='endyear'
                placeholder='Ex:2023'
                value={workExperience.endyear}
                onChange={handleChange}

                disabled={currentlyWorking}

                   
                    type={'text'}
                    sx={{backgroundColor:currentlyWorking?'#edebe4':'white'}}

                    
                    label="Year"
                />
                        </FormControl>
                        </Stack>
                        
                    </Stack>
                    

                </Stack>
                <Container>
                    <Skills addSkills={setSkills}/>
                

                </Container>
                <Stack  sx={{paddingTop:'1rem'}}>
                    <Button onClick={handleAdd} variant='contained'>Add</Button>
                </Stack>
          
        </Container> */}
      </Modal>
    </div>
  );
}