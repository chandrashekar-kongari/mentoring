import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, Stack } from '@mui/material';
import { Banner } from './Banner';
import MyComponent from './MyComponent';

export default function Questions() {
    

    const [ques,SetQues]=React.useState([
        {
            id:1,
            question:'What kind of topics can I discuss with mentors?',
            answer:"You can discuss a wide range of topics with mentors, depending on their expertise and your goals. These discussions can encompass various areas of your life, including career and professional development, personal growth and development, education and learning, entrepreneurship and business, health and well-being, hobbies and interests, technology and innovation, relationships and communication, financial and investment matters"
        },
        {
            id:2,
            question:'What kind of topics can I discuss with mentors?',
            answer:"You can discuss a wide range of topics with mentors, depending on their expertise and your goals. These discussions can encompass various areas of your life, including career and professional development, personal growth and development, education and learning, entrepreneurship and business, health and well-being, hobbies and interests, technology and innovation, relationships and communication, financial and investment matters"
        },
        {
            id:3,
            question:'What kind of topics can I discuss with mentors?',
            answer:"You can discuss a wide range of topics with mentors, depending on their expertise and your goals. These discussions can encompass various areas of your life, including career and professional development, personal growth and development, education and learning, entrepreneurship and business, health and well-being, hobbies and interests, technology and innovation, relationships and communication, financial and investment matters"
        }
    ])
  return (
    <Container maxWidth='md' sx={{paddingTop:'100px'}}>
<Typography sx={{fontSize:'48px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem',textAlign:'left'}}>
    Have any questions?
          </Typography>

        {ques.map((que)=>{
            return <Accordion elevation={1} sx={{paddingTop:'1rem',paddingBottom:'1rem'}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>{que.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {que.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        })}







        
      
      
      
      
    </Container>
  );
}