import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Chip, IconButton, Stack, Tooltip } from '@mui/material';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveResId } from '../features/UserSlice';
export default function ProfileDisplay({userDeatils}) {

  const [copy,setCopy]=React.useState('click to copy')
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleCopy=()=>{
    navigator.clipboard.writeText(userDeatils.email)
    setCopy('copied')
    
  }
  const handleFocus=()=>{
    // console.log('focus')
  }
  const handleViewResume=(resid)=>{
    dispatch(saveResId(resid))
    navigate(`/viewresume`)
  }
  return (
    <Card sx={{ width: 300,margin:'1rem' }}>
      
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize={'16px'} sx={{fontWeight:'bold'}}>
          {userDeatils.firstname} {userDeatils.lastname}
        </Typography>
        <Typography variant="body2" sx={{fontSize:'14px'}} color="text.secondary">
          {userDeatils.email} 
          
{/* <Tooltip title={copy} placement="right-start" arrow>
<IconButton onClick={handleCopy} onFocus={handleFocus}>
  <ContentCopyIcon size="small" sx={{fontSize:'16px'}} color="text.secondary"/>
</IconButton>
        </Tooltip> */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {userDeatils.additionalInformation}
        </Typography>
        <Typography sx={{fontSize:'12px',paddingTop:'2px',fontWeight:'bold'}}>
            Interests
        </Typography>
        <Box >
          {userDeatils.mentee=='true'?<>
          {userDeatils.mentorshipIntrests.map((int)=>{
            return <Chip label={int.title} variant='outlined'  size="small" sx={{margin:'3px',fontSize:'10px'}}/>
          })}</>:<>
          {userDeatils.mentorIntrests.map((int)=>{
            return <Chip label={int.title} variant='outlined' size="small" sx={{margin:'3px',fontSize:'10px'}}/>
          })}
          </>}
            
            
        </Box>
        <Typography sx={{fontSize:'12px',paddingTop:'2px',fontWeight:'bold'}}>
            Skills
        </Typography>
        <Box sx={{padding:'0px',margin:'0px'}}>
        {userDeatils.skills.map((sk)=>{
            return <Chip label={sk.title} variant='outlined' size="small" sx={{margin:'3px',fontSize:'10px'}}/>
          })}
        </Box>


      </CardContent>
      <CardActions sx={{justifyContent:'space-around'}} >
      

      {/* {userDeatils.resume!='' && <Link href={userDeatils.resume} size="small" sx={{textTransform:'capitalize'}}>View Resume <DocumentScannerIcon size='small'/></Button>} */}

        {userDeatils.resume!='' && <Button onClick={()=>handleViewResume(userDeatils.resume)} size="small" sx={{textTransform:'capitalize'}}>View Resume </Button>}
        {userDeatils.linkedinProfile!='' && <Link href={userDeatils.linkedinProfile} target="_blank" sx={{textDecoration:'none'}}><Button sx={{textTransform:'capitalize'}}>View LinkedIn </Button></Link>}
        
      </CardActions>

    </Card>
  );
}