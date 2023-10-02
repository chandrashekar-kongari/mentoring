import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material'
import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'


const Admin = () => {
    const [mentees,setMentees]=useState([])
    const getMentees=async()=>{
        const response = await axios.get('http://127.0.0.1:5000/allmentees');
        console.log('mentees',response.data)
    }

    useEffect(()=>{
        getMentees()
        

    },[])
  return (
    <Container>

        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {/* {requiredDetails.gmail} */}
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {/* adjective {mentorshipIntrests} */}
        </Typography>
        <Typography variant="body2">
          {/* {skills} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Find Mentor</Button>
      </CardActions>
    </Card>


    </Container>
  )
}

export default Admin