import { Avatar,Container,Stack,} from '@mui/material'
import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react'

const StepsAnimation = () => {
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
    offset:["0 1",".7 0"]
    // offset:[".55 0","0 0.4"]
  })
  return (
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
      <Avatar
alt="Remy Sharp"
src="mentee2-nobg.png"
sx={{ width: 200, height: 200 }}
/>
        </Stack>
        </Container>
        </motion.div>
  )
}

export default StepsAnimation