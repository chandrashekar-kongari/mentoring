import { Typography,Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import endpoint from '../../../../API/api';
import axios from 'axios'

const MentorMatchLifeCycleComponent = () => {


  const getMentorDeatils=async()=>{

  
    const token=localStorage.getItem('token')
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      
      },
    };
    
    
    try {
      const response = await axios.get(`${endpoint}/mentordetailsifmatched`,axiosConfig);
    
          if (response.status === 200) {
            const a=true
            // dispatch(setAuth(a))
            const mentor=response.data.mentor
            console.log('res ',mentor)
    
            if(mentor==null){
              
              setMentorDetails(null)
             
            }
            else{
              
              setMentorDetails(mentor)
              
              
            }
          } else {
            setMentorDetails(null)
            }
          } catch (error) {
          
            setMentorDetails(null)
            // console.log(error)
            
          }

          setLoading(false)
          console.log(mentorDetails)

          

  }
  const [mentorDetails,setMentorDetails]=useState()
  useEffect(()=>{
    getMentorDeatils()
  },[])

  const [loading,setLoading]=useState(true)

  return (
    <>
    
    {!loading && <>{!mentorDetails ?    <Typography>You have not matched with mentor yet.We will mail you once we found perfect match </Typography>:<Box>
        <Typography> <span style={{fontWeight:'bold'}}>Email:</span> {mentorDetails.email}</Typography>
        {mentorDetails.organization!='' &&<Typography><span style={{fontWeight:'bold'}}>Organization:</span> Organization: {mentorDetails.organization}</Typography>}
        {mentorDetails.title!='' &&<Typography><span style={{fontWeight:'bold'}}>Title: </span> {mentorDetails.title}</Typography>}
        {mentorDetails.linkedinProfile!='' &&<Typography><span style={{fontWeight:'bold'}}>LinkedIn:</span>  {mentorDetails.linkedinProfile}</Typography>}

      </Box>
}

     </>}
    </>
  )
}

export default MentorMatchLifeCycleComponent