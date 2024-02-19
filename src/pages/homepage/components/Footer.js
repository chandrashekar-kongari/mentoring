import { Box, Button, Container, Divider, IconButton, List, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import techPactHomeURL from '../../../API/TechPactHomeURL';
export default function Footer() {
    const leftBtns=[
      {name:'© TechPACT, org'},{name:'Terms of Use'},{name:'Privacy Policy'}]
    const topBtns=[{name:'Home',link:''},{name:'About',link:''},{name:'Mission',link:''}, {name:'Take the Pledge',link:''}]
    const rightBtns=[<LinkedInIcon/>]

    
    const [techPACTHomeURL,setTechPACTHomeUrl]=React.useState('')
    React.useEffect(()=>{
     setTechPACTHomeUrl(techPactHomeURL)
    },[])
  return (
    <Box sx={{backgroundColor:'#f7f7f7',paddingTop:'2rem',paddingBottom:'2rem'}}>
        <Container maxWidth='md'>
        <Stack sx={{maxWidth:'200px'}}>
        {/* <List component="nav" aria-label="secondary mailbox folder">
        {topBtns.map((btns)=>{
            return(
                <ListItemButton
                key={btns.name}
          sx={{width:'100%'}}
          onClick={() => {}}
        >
          <a href={btns.link} style={{fontFamily:'Inter'}}>{btns.name}</a>
        </ListItemButton>)
            
        })}
        
      </List> */}

        </Stack>
        
        <Stack sx={{flexDirection:'row',justifyContent:'space-between',display:'flex',flexWrap:'wrap'}}>
            {/* <Stack spacing={2} sx={{flexDirection:'column',justifyContent:'left'}}>
               
                    

              <Link style={{textDecoration:'none',color:'black',textTransform:'capitalize'}}  to="/terms-of-use"><Button>Terms of Use</Button></Link>
              <Link style={{textDecoration:'none',color:'black',textTransform:'capitalize'}}  to="/privacy-policy"><Button>Privacy Policy</Button></Link>
              <Link style={{ textDecoration:'none',color:'black',textTransform:'capitalize'}}  to="https://www.techpact.org/"><Button>© TechPACT, org</Button></Link>

            </Stack> */}
            <Box sx={{justifyContent:'space-between',display:'flex',flexWrap:'wrap'}}>
            <Link style={{ textDecoration:'none',color:'black',textTransform:'capitalize'}}  to={techPACTHomeURL}><Button>© TechPACT, org</Button></Link>

            {/* <Link style={{textDecoration:'none',color:'black',textTransform:'capitalize'}}  to="/terms-of-use"><Button>Terms of Use</Button></Link>
              <Link style={{textDecoration:'none',color:'black',textTransform:'capitalize'}}  to="/privacy-policy"><Button>Privacy Policy</Button></Link> */}
            </Box>
            <Stack sx={{flexDirection:'row',justifyContent:'right'}}>
            {rightBtns.map((btn)=>{
                    return<a href='https://www.linkedin.com/company/thetechpact/'>
                    <IconButton variant='text' sx={{textDecoration:'underline'}}>{btn}</IconButton>
                    </a>
                })}
            </Stack>

        </Stack>
        <Divider/>
        <Stack sx={{flexDirection:'row',justifyContent:'center',paddingTop:'1rem'}}>
            <Typography >Powered by Sacred Heart University</Typography>
        </Stack>
    </Container>
    </Box>
  );
}