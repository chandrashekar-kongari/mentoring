import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CircularProgress, Container, Stack } from '@mui/material';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Profile from '../components/profile/Profile';
import arrow from './arrow2.gif'
import Header from './Header';
import ProfileDisplay from '../components/ProfileDisplay';
import { useSelector,useDispatch } from 'react-redux';

import axios from 'axios';
import endpoint from '../API/api';
export default function HomePage() {
    const navigate=useNavigate()

    const dispatch=useDispatch()
    // const [userObj,setUserObj]=React.useState({})

    const userObj=useSelector(state=>state.userObj)


    const [mentorDetails,setMentorDetails]=React.useState({})
    const [menteeList,setMenteesList]=React.useState([])
    const [detailsOf,setDetailsOf]=React.useState('')


    const getMentorDetails=async()=>{

      const mentorid=userObj.matchedWith
      console.log(mentorid)
      const obj={
        'mentorid':mentorid
      }
      try {
        const response = await axios.get(`${endpoint}/getmentordetails?mentorid=${mentorid}`);
      
            if (response.status === 200) {
              const a=true
              // dispatch(setAuth(a))
              const user=response.data.mentor
              console.log('mentor details ',user)
              if(user==null){
                setDisplayMessage('We will update, once mentor matched')
                setMatched(false)
                setLoadingmentorormentees(false)
              }
              else{
                setMentorDetails(response.data.mentor)
                
                setMatched(true)
                setLoadingmentorormentees(false)
                
              }
            } else {
              console.error('Failed to submit user data.');
              setDisplayMessage('We will update, once mentor matched')
                setMatched(false)
                setLoadingmentorormentees(false)
              }
            } catch (error) {
            console.error('Error:', error);
            setDisplayMessage('We will update, once mentor matched')
                setMatched(false)
                setLoadingmentorormentees(false)
            }
      
        
      
    }

    const getMenteesDetails=async()=>{

      const menteesids=userObj.menteeslist
      // console.log(mentorid)
      // const obj={
      //   'mentorid':mentorid
      // }
      try {
        const response = await axios.get(`${endpoint}/getmenteesdetails?menteesids=${menteesids}`);
      
            if (response.status === 200) {
              const a=true
              // dispatch(setAuth(a))
              const user=response.data
              console.log('mentees details ',user)
              if(user==null){
                setDisplayMessage('We will update, once matched')
                setMatched(false)
                setLoadingmentorormentees(false)
              }
              else{
                setMenteesList(response.data.mentees)
                
                setMatched(true)
                setLoadingmentorormentees(false)
                
              }
            } else {
              console.error('Failed to submit user data.');
              setDisplayMessage('We will update, once mentor matched')
                setMatched(false)
                setLoadingmentorormentees(false)
              }
            } catch (error) {
            console.error('Error:', error);
            setDisplayMessage('We will update, once mentor matched')
                setMatched(false)
                setLoadingmentorormentees(false)
            }
      
        
      
    }



    React.useEffect(()=>{
      setLoadingmentorormentees(true)
      if(userObj==null){
        navigate('/')
      }
      else{
        const mentee=userObj.mentee
        const mentor=userObj.mentor
        if(mentee=='true'){
          setDetailsOf("Mentor ")
          if(userObj.matched=='true'){
            getMentorDetails()

          }else{
            setDisplayMessage('We will update, once mentor matched')
            setMatched(false)
            setLoadingmentorormentees(false)
          }
        }
        else if(mentor=='true'){
          setDetailsOf('Mentee(s) ')
          const listlen=userObj.menteeslist.length
          
          if(listlen==0){
            setDisplayMessage('We will update, once matche made')
            setMatched(false)
            setLoadingmentorormentees(false)

          }else{
            getMenteesDetails()
          }

        }
      }

      console.log('user ',userObj)



    },[])

    // React.useEffect(()=>{
    //   setLoadingmentorormentees(true)
    //   if(userObj==null){
    //     navigate('/')
    //   }
    //   else{
    //     const mentee=userObj.mentee
    //     const mentor=userObj.mentor
    //     if(mentee=='true'){
    //       setDetailsOf("Mentor ")
    //       if(userObj.matched=='true'){
    //         getMentorDetails()

    //       }else{
    //         setDisplayMessage('We will update, once mentor matched')
    //         setMatched(false)
    //         setLoadingmentorormentees(false)
    //       }
    //     }
    //     else if(mentor=='true'){
    //       setDetailsOf('Mentee(s) ')
    //       const listlen=userObj.menteeslist.length
          
    //       if(listlen==0){
    //         setDisplayMessage('We will update, once matche made')
    //         setMatched(false)
    //         setLoadingmentorormentees(false)

    //       }else{
    //         getMenteesDetails()
    //       }

    //     }
    //   }

    //   console.log('user ',userObj)



    // },[])

    // const getUserData=async(userid)=>{
      
    //   try {
    //     const response = await axios.get(`${endpoint}/getuserdetails?userid=${userid}`);
      
    //         if (response.status === 200) {
    //           const a=true
    //           // dispatch(setAuth(a))
    //           const user=response.data
              
    //           console.log('user details ',user)
    //           if(user==null){
    //             localStorage.setItem('auth','false')
    //             localStorage.setItem('userId','')

    //             navigate('/')
    //           }
    //           else{
    //             dispatch(saveUserObj(response.data))
    //             setUserObj(response.data)
                
    //           }
    //         } else {
    //           console.error('Failed to submit user data.');
    //           localStorage.setItem('auth','false')
    //             localStorage.setItem('userId','')

    //             navigate('/')
    //           }
    //         } catch (error) {
    //         console.error('Error:', error);
    //         setDisplayMessage('We will update, once mentor matched')
    //             setMatched(false)
    //             setLoadingmentorormentees(false)
    //         }

    // }



    const [displayMessage,setDisplayMessage]=React.useState('')
    const [loadingmentorormentees,setLoadingmentorormentees]=React.useState(true)
    const [matched,setMatched]=React.useState(false)


  
  return (<>
  
    {userObj!=null?<>
      <Box sx={{ flexGrow: 1}}>
      {/* <Header/> */}
      <Stack sx={{flex:1,textAlign:'center',paddingTop:'2rem',padding:'2rem'}}>
        <Stack sx={{flex:'1',justifyContent:'center'}}>
        <Typography sx={{fontWeight:'bold',fontSize:'28px',color:'#014abf',paddingRight:'6px'}}>Welcome </Typography>
        <Typography sx={{fontWeight:'bold',fontSize:'28px',color:'#014abf',textTransform:'uppercase'}}> {userObj.firstname} {userObj.lastname}</Typography>
        </Stack>
        <Stack sx={{flex:'1',flexDirection:'row',justifyContent:'center'}}>
        <Typography sx={{fontSize:'14px',color:'#8d8e8f',paddingRight:'6px'}}>Our platform is specifically targeted at students to smoothen the process of getting job </Typography>
        
        </Stack>

      </Stack>
      

      <Stack sx={{flex:1,textAlign:'center',flexDirection:'row', justifyContent:'center',paddingTop:'1rem'}}>
        <Typography sx={{fontWeight:'bold',fontSize:'28px',paddingRight:'6px'}}>Your {detailsOf} Details </Typography>

      </Stack>
      <Stack sx={{flex:1,textAlign:'center',flexDirection:'row', justifyContent:'center',paddingTop:'1rem'}}>

         {loadingmentorormentees?<CircularProgress/> :
         <>
         {matched ?<Container  sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
          {detailsOf=='Mentor '?<><ProfileDisplay userDeatils={mentorDetails}/></>:
          <>{menteeList.map((me)=>{
            return <ProfileDisplay userDeatils={me}/>
           })}</>}
         </Container>:<Typography>{displayMessage}</Typography>}
         </>
         
         }
      </Stack>
      
    </Box>
      </>:''}</>
  );
}