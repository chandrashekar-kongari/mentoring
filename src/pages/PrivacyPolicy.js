import React from 'react'
import Header from '../components/Header'
import { Box, Container, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import PrivacyPolicyDraft from './PrivacyPolicyDraft'

const PrivacyPolicy = () => {
  return (
    <>
   <Container maxWidth='md' sx={{pt:18,pb:18}}>
   <PrivacyPolicyDraft/>
   </Container>
  
    </>
  )
}

export default PrivacyPolicy
