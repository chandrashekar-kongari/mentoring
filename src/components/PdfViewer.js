import React,{useState,useEffect} from 'react'
import axios from 'axios'
import endpoint from '../API/api';
import Loading from './Loading';
import {useSelector} from 'react-redux'
import { Outlet, useParams } from 'react-router-dom';
import './pdfviewer.css'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
const PdfViewer = () => {
    const navigate=useNavigate()
    const [resume,setResume]=useState('')
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const resid=useSelector(state=>state.resid)
    // const { resid } = useParams();
    

    const getResume=async()=>{
        

        if(resid==''){
            navigate('/homepage')
            return
        }

        const obj={
            'resid':resid
        }
        try {
            const response = await axios.post(endpoint+ '/getresume', obj);
          
                if (response.status === 200) {

                    const res=response.data.resume
                    if(res!=null){
                        setResume(`data:application/pdf;base64,${res}`);
                        // console.log(res)
                        setLoading(false)
                        document.title = 'Custom PDF Title';
                    }
          
                } else {
                 
                    return
                  }
                } catch (error) {
                  
                    return
                }
    }

    

    useEffect(()=>{
        

        // console.log('res' ,resid)
        getResume()
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
            // console.log('w ',window.innerWidth)
          };
      
          // Add an event listener for window resize
          window.addEventListener('resize', handleResize);
      
          // Clean up the event listener when the component unmounts
          return () => {
            window.removeEventListener('resize', handleResize);
          };

          
        
    },[])

    const [loading,setLoading]=useState(true)
    


  return (
    <>
    {loading?<><Loading loading={loading}/></>:<div className={'resdiv'}  >
        {viewportWidth>688?<iframe nameddest='resume' src={resume} width='99.5%' height='99%' ></iframe>
        :
        <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{backgroundColor:'black'}}
    >
        <Typography sx={{color:'white',fontWeight:'bold',fontSize:'12px',paddingBottom:'3px'}}>Can not view Resume</Typography>
      <Button sx={{textTransform:'capitalize'}} href={resume} download variant="contained" color="primary">
        Download Resume
      </Button>
    </Box>
          
          }
        
        

    </div>}
    </>
  )
}

export default PdfViewer