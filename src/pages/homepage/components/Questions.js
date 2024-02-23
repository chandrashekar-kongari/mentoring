import * as React from 'react';
import Accordion from '@mui/material/Accordion';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { Banner } from './Banner';
import MyComponent from './MyComponent';
import { CustomBox, MainHeadTypography } from '../../../components/page/PageComponents';
import { useNavigate } from 'react-router-dom';

export default function Questions() {
    

    const [ques,SetQues]=React.useState([
        {
            id:1,
            question:'How much time will this require?​',
            answer:"The mentoring relationship is 4-months long. This consists of a meeting once per month for 30-min to 1-hr depending on the topic. In addition, we will occasionally to ask for your feedback. Your feedback will shape the future of our program.​"
        },
        {
            id:2,
            question:'Is there a cost to the program?​',
            answer:"No! Our mentors recognize that their own experiences were shaped by meaningful relationships and they want to pay it forward."
        }

    ])

    const [ques2,SetQues2]=React.useState([
     {
        id:4,
        question:'Who is eligible to become a mentee?​',
        answer:"At TechPACT, we are focused on improving diversity and equity across technology. If you are a practicing or an aspiring technologist and consider yourself diverse, you are eligible.​"
      },
      {
        id:5,
        question:'What is my commitment as a mentee?​​',
        answer:"As a mentee, your drive the mentoring relationship. Each month, you will need to prep for the meeting, participate in the meeting, and reflect on the meeting. On average preparation, participation, and reflection require 2-3 hours per month in total. The time you invest in this relationship will directly correlate to the value you gain. In addition, we will ask you to In addition, we will ask you to provide feedback on your experience so that we may continue to improve program.​​​"
      },
      {
        id:6,
        question:"Are there requirements to be a mentor?​",
        answer:"Our program serves aspiring and practicing technologists at all stages in their careers. Whether you have 30-years or 1-year, if you are a technologist or work with technology, you have valuable insights that can transform the career of another.​"
      }
      ,
      {
        id:7,
        question:"What is my commitment as a mentor?​​",
        answer:"Each month, you will meet with your mentee for 45- to 60-min. Your mentee invests significant time outside of this meeting preparing for and reflecting on your discussion, so we ask that you be 100% present and focused during this time. Provide feedback on your experience so that we may continue to improve program.​​"
      },{
        id:8,
        question:"Who is TechPACT?​​",
        answer:"TechPACT is a community of leaders that believe for technology to reach its full potential, those who create it must be representative of the humanity it is intended to serve. We envision a world where anyone with a passion for technology can succeed through greater access to opportunity and an environment where diversity, equity, inclusion, and belonging (DEIB) thrives.​​​"
      },
      {
        id:9,
        question:"Who are TechPACT members?​​",
        answer:"TechPACT was founded by CIOs who believe change starts with them. We create accountability through community and achieve our mission through the collective efforts of our members. Each member recognizes themselves as force multipliers and understands the sum of their individual actions create an unstoppable network effect that will benefit the lives of millions across the globe. Our pledge is a personal commitment by each of our members and is not intended to represent of their organizations.​​"
      }

  ])



  return (
    
      <Box sx={{backgroundColor:'#FCFCFC'}}>
        <CustomBox>
      <Container maxWidth='md'  >
<MainHeadTypography sx={{fontSize:'48px',fontWeight:'bold',paddingBottom:'3rem',textAlign:'left'}}>
Frequently Asked Questions
          </MainHeadTypography>

        <Box sx={{paddingTop:6,pb:6}}>
        {ques.map((que)=>{
            return <Accordion elevation={0} sx={{backgroundColor:'#FCFCFC',paddingTop:'1rem',paddingBottom:'1rem',borderTop:'1.5px solid #303130'}} >
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
        <Accordion elevation={0} sx={{backgroundColor:'#FCFCFC',paddingTop:'1rem',paddingBottom:'1rem',borderTop:'1.5px solid #303130'}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{fontWeight:'bold',fontSize:'18px'}}>{'How do you use my data?'}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We will not share your data. TechPACT exists to serve diverse technologists, and the profile information you provide is anonymously aggregated to capture our impact for reporting purposes. Refer to our <Link to='/privacy-policy'>privacy policy</Link> for more details.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {ques2.map((que)=>{
            return <Accordion elevation={0} sx={{backgroundColor:'#FCFCFC',paddingTop:'1rem',paddingBottom:'1rem',borderTop:'1.5px solid #303130'}} >
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
        </Box>
  
          <Stack spacing={5} sx={{pt:6,pb:6,justifyContent:'center',textAlign:'left'}}>
          <Typography variant='h7' >Still have questions?</Typography>
          <Typography variant='h8'>Contact us at <span style={{borderBottom:'2px solid #1226AA'}}>mentoring@techpact.org</span></Typography>
          </Stack>

    

    </Container>
    </CustomBox>
      </Box>
   
  );
}