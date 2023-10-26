import { Container } from '@mui/material';
import React, { useEffect,useState } from 'react'
import TextTransition, { presets } from 'react-text-transition';

const TextDisplay = () => {
    const [index, setIndex] = React.useState(0);
    useEffect(() => {
        const intervalId = setInterval(
          () => setIndex((index) => index + 1),
          3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);
    const TEXTS = ['Software Developer', 'Web Developer', 'Data Scientist', 'Data Analyst','ML Engineer','UI/UX Designer','DevOps Engineer','Business Analyst','Product Manager'];

  return (
    <Container>
        <div >
           {/* <h1 style={{color:'#0D2F3F', fontSize:'65px', textAlign:'center', fontWeight:'bold'}}>Elevate Your Tech Career </h1> */}
            {/* <h1 style={{color:'#0D2F3F', textAlign:'center', fontWeight:'bold'}}>Unlock Your Potential</h1> */}
            <h1 style={{color:'#0D2F3F', textAlign:'center', fontWeight:'bold'}}>Begin Your </h1>
           <h1 style={{color:'#286F6C', fontSize:'50px', textAlign:'center', fontWeight:'bold'}}><span><TextTransition style={{textAlign:'center',justifyContent:'center',fontSize:'55px'}} springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition> </span></h1>
           <h1 style={{color:'#0D2F3F', textAlign:'center', fontWeight:'bold'}}>Career</h1>
           {/* <TextTransition style={{textAlign:'center',justifyContent:'center'}} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition> */}
             <h5 >Unleash your potential through TechPact personal 1-on-1 mentorship and find your dream job</h5>
            {/* <Button  style={{backgroundColor:'#0D2F3F', fontSize:'18px',border:'0',marginTop:'2rem'}}>Browse Mentors</Button>{' '} */}

            
           </div>
    </Container>
  )
}

export default TextDisplay