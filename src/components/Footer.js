import { Box, Button, Container, Divider, IconButton, List, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
    const leftBtns=['© TechPACT, org','Terms of Use','Privacy Policy']
    const topBtns=['Home','About','Mission', 'Take the Pledge']
    const rightBtns=[<LinkedInIcon/>,<FacebookIcon/>,<InstagramIcon/>,<TwitterIcon/>]

  return (
    <Box sx={{backgroundColor:'#f7f7f7',paddingTop:'2rem',paddingBottom:'2rem'}}>
        <Container maxWidth='md'>
        <Stack sx={{maxWidth:'200px'}}>
        <List component="nav" aria-label="secondary mailbox folder">
        {topBtns.map((btns)=>{
            return(
                <ListItemButton
                
          sx={{width:'100%'}}
          onClick={() => {}}
        >
          <ListItemText primary={btns} />
        </ListItemButton>)
            
        })}
        
      </List>

        </Stack>
        <Divider/>
        <Stack sx={{flexDirection:'row',justifyContent:'space-between',display:'flex',flexWrap:'wrap'}}>
            <Stack sx={{flexDirection:'row',justifyContent:'left'}}>
                {leftBtns.map((btn)=>{
                    return<>
                    <Button variant='text' sx={{textDecoration:'underline',color:'black',textTransform:'capitalize'}}>{btn}</Button>
                    </>
                })}

            </Stack>
            <Stack sx={{flexDirection:'row',justifyContent:'right'}}>
            {rightBtns.map((btn)=>{
                    return<>
                    <IconButton variant='text' sx={{textDecoration:'underline'}}>{btn}</IconButton>
                    </>
                })}
            </Stack>

        </Stack>

        <Stack sx={{flexDirection:'row',justifyContent:'center',paddingTop:'1rem'}}>
            <Typography >Powered by Sacred Heart University</Typography>
        </Stack>
    </Container>
    </Box>
  );
}