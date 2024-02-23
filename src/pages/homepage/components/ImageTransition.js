import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Avatar, Badge, Box, Card, CardContent, CardMedia, Chip, Container, Paper, Rating, Stack, Tooltip, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { MainHeadTypography } from '../../../components/page/PageComponents';
const ImageTransition = () => {


  const techdomain=['Software Development','Full-Stack Development','Data Science And Analytics',
  'AI and ML','Project Management','Cloud Computing','Game Design','Cybersecurity','... and Much More'
]
  
  const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    
    show: {
      x:0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });
  const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 10,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
        
      },
    },
  });
  const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });

  const ref=useRef()
  const {scrollYProgress}=useScroll({
    target:ref,
    // offset:[".55 0","0 1"]
    offset:[".55 0","0 0.5"]
    // offset:[".55 0","0 0.4"]
  })
  return (
    <>

    <Container sx={{paddingTop:'2rem'}}>

    <MainHeadTypography >
    Where Ambition Meets Wisdom
    </MainHeadTypography>
    </Container>
   
    <motion.div
    ref={ref}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        style={{height:'50vh', padding:'0px',margin:'0px',overflow:'hidden',scale:(scrollYProgress)}}
      >
      <Container maxWidth='md'>
      <Stack sx={{flexDirection:'row',justifyContent:'space-between',marginTop:'5rem'}}>
     
     {/* <motion.img style={{width:'200px',height:'200px'}} viewport={{ once: false, amount: 0.25 }} initial={{x:'-280px'}}  variants={slideIn("left", "tween", 0.2, 1.1)} src="./chandrashekar.jpg" alt="" />
   

     <motion.img style={{width:'200px',height:'200px'}} viewport={{ once: false, amount: 0.25 }} initial={{x:'230px'}}  variants={slideIn("right", "tween", 0.2, 1.1)} src="./chandrashekar.jpg" alt="" /> */}
           {/* <motion.img style={{width:'100%',height:'auto'}}     src="./mentee2.jpg" alt="" /> */}
           <Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  badgeContent={
    <>
    <Box sx={{display: { xs: 'flex', md: 'none' },}}>
      <img src='./text-by-mentee-nobg.png' style={{width:'60px',height:'auto'}}/>
    </Box>
    <Box sx={{display: { xs: 'none', md: 'flex' },}}>
    <img src='./text-by-mentee-nobg.png' style={{width:'120px',height:'auto'}}/>
  </Box>
    </>
  }
>
           <Avatar
alt="Remy Sharp"
src="mentee2-nobg.png"
sx={{ width: {xs:100,md:200}, height:{xs:100,md:200},backgroundColor:'#E9F7F6' }}
/>
</Badge>
<Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  badgeContent={
    <>
    <Box sx={{display: { xs: 'flex', md: 'none' },}}>
    <img src='./text-by-mentor.png' style={{width:'60px',height:'auto'}}/>
    </Box>
    <Box sx={{display: { xs: 'none', md: 'flex' },}}>
    <img src='./text-by-mentor.png' style={{width:'120px',height:'auto'}}/>
  </Box></>
    
  }
>
<Avatar
          alt="Remy Sharp"
          src="mentor2-nobg.png"
          sx={{ width: {xs:100,md:200}, height: {xs:100,md:200},backgroundColor:'#fdf6f0' }}
          />
</Badge>


   

   {/* <motion.img style={{width:'100%',height:'auto'}} src="./mentor.jpg" alt="" /> */}


 </Stack>
      </Container>
    </motion.div>
    
     <Box
     position={'relative'}
     top='-50vh'
     zIndex={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh" // Set a height to center vertically within the viewport
    >
      {/* <AdbIcon style={{fontSize:'270px'}}/> */}
      {/* <FontAwesomeIcon style={{fontSize:'270px'}} icon={faDiamond} /> */}
      <Box sx={{display: { xs: 'flex', md: 'none' },}}>
      <img src='techpact-logo-2.png' style={{ width:'170px',height:'auto',backgroundColor:'white'}}/>

      </Box>
      <Box sx={{display: { xs: 'none', md: 'flex' },}}>
      <img src='techpact-logo-2.png' style={{display: { xs: 'none', md: 'flex' },width:'270px',height:'auto',backgroundColor:'white'}}/>

      </Box>
    </Box>

    <Box position='relative'
     top='-50vh'
     zIndex={1}
      // display="flex"
      justifyContent="center"
      alignItems="center"
     >

<Typography  sx={{textAlign:'center',color:'black',padding:'1rem',fontSize:'22px',fontWeight:'600' }}>
We connect you with a mentor that fits your interests.
        </Typography>
        <Container maxWidth='md' sx={{justifyContent:'center',textAlign:'center'}}>
          {techdomain.map((tech)=>{
            return(
              <Chip key={(tech)} size='medium' sx={{margin:'5px',fontSize:'14px',backgroundColor:'#E9EEF1',paddingTop:'20px',paddingBottom:'20px'}} label={tech}/>

            )
          })}
          
        </Container>

    </Box>

    
    </>
  );
};

export default ImageTransition;



























// import React, { useRef } from 'react';
// import { motion, useScroll } from 'framer-motion';
// import { Avatar, Badge, Box, Card, CardContent, CardMedia, Chip, Container, Paper, Rating, Stack, Tooltip, Typography } from '@mui/material';
// import AdbIcon from '@mui/icons-material/Adb';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDiamond } from '@fortawesome/free-solid-svg-icons';
// const ImageTransition = () => {
  
//   const slideIn = (direction, type, delay, duration) => ({
//     hidden: {
//       x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
//       y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
//     },
    
//     show: {
//       x:0,
//       y: 0,
     
      
      
      
//       transition: {
//         type,
//         delay,
//         duration,
//         ease: "easeOut",
//       },
//     },
//   });
//   const fadeIn = (direction, type, delay, duration) => ({
//     hidden: {
//       x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
//       y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//       opacity: 0,
//     },
//     show: {
//       x: 10,
//       y: 0,
//       opacity: 1,
//       transition: {
//         type,
//         delay,
//         duration,
//         ease: "easeOut",
        
//       },
//     },
//   });
//   const staggerContainer = (staggerChildren, delayChildren) => ({
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren,
//         delayChildren,
//       },
//     },
//   });

//   const ref=useRef()
//   const {scrollYProgress}=useScroll({
//     target:ref,
//     // offset:[".55 0","0 1"]
//     offset:[".55 0","0 0.5"]
//     // offset:[".55 0","0 0.4"]
//   })
//   return (
//     <>

//     <Container sx={{}}>
//     <Typography sx={{fontSize:'35px',fontWeight:'bold',lineHeight:'56px',paddingBottom:'1rem',textAlign:'center',}}>
//     TechPACT 's Mentoring Program, Where Ambition Meets Wisdom
//           </Typography>
//     </Container>
   
//     <motion.div
//     ref={ref}
//         variants={staggerContainer}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.25 }}
//         style={{height:'50vh', padding:'0px',margin:'0px',overflow:'hidden',scale:(scrollYProgress)}}
//       >
//       <Container maxWidth='md'>
//       <Stack sx={{flexDirection:'row',justifyContent:'space-between',marginTop:'5rem'}}>
     
//      {/* <motion.img style={{width:'200px',height:'200px'}} viewport={{ once: false, amount: 0.25 }} initial={{x:'-280px'}}  variants={slideIn("left", "tween", 0.2, 1.1)} src="./chandrashekar.jpg" alt="" />
   

//      <motion.img style={{width:'200px',height:'200px'}} viewport={{ once: false, amount: 0.25 }} initial={{x:'230px'}}  variants={slideIn("right", "tween", 0.2, 1.1)} src="./chandrashekar.jpg" alt="" /> */}
//            {/* <motion.img style={{width:'100%',height:'auto'}}     src="./mentee2.jpg" alt="" /> */}
//            <Badge
//   overlap="circular"
//   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//   badgeContent={
//     <img src='./text-by-mentee-nobg.png' style={{width:'120px',height:'auto'}}/>
//   }
// >
//            <Avatar
// alt="Remy Sharp"
// src="mentee2-nobg.png"
// sx={{ width: 200, height: 200 }}
// />
// </Badge>
// <Badge
//   overlap="circular"
//   anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//   badgeContent={
//     <img src='./text-by-mentor.png' style={{width:'120px',height:'auto'}}/>
//   }
// >
// <Avatar
//           alt="Remy Sharp"
//           src="mentor2-nobg.png"
//           sx={{ width: 200, height: 200 }}
//           />
// </Badge>


   

//    {/* <motion.img style={{width:'100%',height:'auto'}} src="./mentor.jpg" alt="" /> */}


//  </Stack>
//       </Container>
//     </motion.div>
    
//      <Box
//      position={'relative'}
//      top='-50vh'
//      zIndex={1}
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="50vh" // Set a height to center vertically within the viewport
//     >
//       {/* <AdbIcon style={{fontSize:'270px'}}/> */}
//       {/* <FontAwesomeIcon style={{fontSize:'270px'}} icon={faDiamond} /> */}
//       <img src='/techpact-logo.png' style={{width:'270px',height:'auto',backgroundColor:'white'}}/>
//     </Box>

//     <Box position='relative'
//      top='-50vh'
//      zIndex={1}
//       // display="flex"
//       justifyContent="center"
//       alignItems="center"
//      >

// <Typography variant="body2" color="text.secondary" sx={{textAlign:'center',color:'black', fontWeight:'400',lineHeight:'30px', fontSize: '20px', padding: '1rem' }}>
//           TechPACT will connects you with best mentor in any domain of your intrest:
//         </Typography>
//         <Container maxWidth='md' sx={{justifyContent:'center',textAlign:'center'}}>
//           <Chip sx={{margin:'5px'}} label='Software Development'/>
//           <Chip sx={{margin:'5px'}} label='Full-Stack Development'/>
//           <Chip sx={{margin:'5px'}} label='Data Science and Analytics'/>
//           <Chip sx={{margin:'5px'}} label='AI and ML'/>
//           <Chip sx={{margin:'5px'}} label='Project Management'/>
//           <Chip sx={{margin:'5px'}} label='Cloud Computing'/>
//           <Chip sx={{margin:'5px'}} label='Game Design'/>
//           <Chip sx={{margin:'5px'}} label='Augmented Reality'/>
//           <Chip sx={{margin:'5px'}} label='Virtual Reality'/>
//           <Chip sx={{margin:'5px'}} label='Software Testing'/>
//         </Container>

//     </Box>

    
//     </>
//   );
// };

// export default ImageTransition;
