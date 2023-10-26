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
import { Box, Chip, IconButton, Tooltip } from '@mui/material';
export default function ProfileDisplay({userDeatils}) {

  const [copy,setCopy]=React.useState('click to copy')

  const handleCopy=()=>{
    navigator.clipboard.writeText(userDeatils.email)
    setCopy('copied')
    
  }
  const handleFocus=()=>{
    console.log('focus')
  }
  return (
    <Card sx={{ width: 300,margin:'1rem' }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" fontSize={'16px'} sx={{fontWeight:'bold'}}>
          {userDeatils.firstname} {userDeatils.lastname}
        </Typography>
        <Typography variant="body2" sx={{fontSize:'14px'}} color="text.secondary">
          {userDeatils.email} 
          
<Tooltip title={copy} placement="right-start" arrow>
<IconButton onClick={handleCopy} onFocus={handleFocus}>
  <ContentCopyIcon size="small" sx={{fontSize:'16px'}} color="text.secondary"/>
</IconButton>
        </Tooltip>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {userDeatils.additionalInformation}
        </Typography>
        <Typography sx={{fontSize:'12px',paddingTop:'2px'}}>
            Interests
        </Typography>
        <Box >
          {userDeatils.mentee=='true'?<>
          {userDeatils.mentorshipIntrests.map((int)=>{
            return <Chip label={int.title}  size="small" sx={{margin:'3px',fontSize:'10px',color:'white',backgroundColor:'black'}}/>
          })}</>:<>
          {userDeatils.mentorIntrests.map((int)=>{
            return <Chip label={int.title}  size="small" sx={{margin:'3px',fontSize:'10px',color:'white',backgroundColor:'black'}}/>
          })}
          </>}
            
            
        </Box>
        <Typography sx={{fontSize:'12px',paddingTop:'2px'}}>
            Skills
        </Typography>
        <Box sx={{padding:'0px',margin:'0px'}}>
        {userDeatils.skills.map((sk)=>{
            return <Chip label={sk.title} size="small" sx={{margin:'3px',fontSize:'10px',color:'white',backgroundColor:'black'}}/>
          })}
        </Box>


      </CardContent>
      <CardActions sx={{justifyContent:'space-around'}} >
        <Button size="small" sx={{textTransform:'capitalize'}}>Resume <DownloadIcon/></Button>
        <Button size="small" sx={{textTransform:'capitalize'}}>LinkedIn <ArrowOutwardIcon/></Button>
        
      </CardActions>
    </Card>
  );
}