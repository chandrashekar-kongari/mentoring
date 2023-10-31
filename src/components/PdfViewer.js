import React,{useState,useEffect} from 'react'
import axios from 'axios'
import endpoint from '../API/api';
import Loading from './Loading';
import {useSelector} from 'react-redux'
import { Outlet, useParams } from 'react-router-dom';
import './pdfviewer.css'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
const PdfViewer = () => {
    const navigate=useNavigate()
    const [resume,setResume]=useState('')

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
                        console.log(res)
                        setLoading(false)
                    }
          
                } else {
                 
                    return
                  }
                } catch (error) {
                  
                    return
                }
    }

    

    useEffect(()=>{
        

        console.log('res' ,resid)
        getResume()
    },[])

    const [loading,setLoading]=useState(true)
    


  return (
    <>
    {loading?<><Loading loading={loading}/></>:<div className={'resdiv'}  >
        <iframe title='resume' src={resume} width='99.5%' height='99%' />
        <Typography>yes</Typography>
        

    </div>}
    </>
  )
}

export default PdfViewer