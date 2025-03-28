import { Box, Button, Stack, TextField, Typography, FormHelperText } from '@mui/material'
import React, { useState, useEffect } from 'react'

const UpdateNumberOfMentees = ({handleClose, numberOfMentees, setNumberOfMentees, handleSave, userObj}) => {
  // Calculate total capacity (stored value + current mentees)
  const currentMentees = userObj?.menteeslist?.length || 0;
  const [totalCapacity, setTotalCapacity] = useState(numberOfMentees + currentMentees);

  const handleSubmit = () => {
    handleSave();
    setNumberOfMentees(totalCapacity)
    handleClose();
  }

  return (
    <>
      <Typography sx={{fontSize:'20px',fontWeight:'bold',marginBottom:'1rem'}}>
        Update Mentee Capacity
      </Typography>
      <Stack spacing={2}>
        <TextField
          type="number"
          label="Maximum Number of Mentees"
          value={totalCapacity}
          onChange={(e) => {
            const newValue = Math.max(0, Math.min(3, parseInt(e.target.value) || 0));
            setTotalCapacity(newValue);
            setNumberOfMentees(newValue); // Parent component will adjust for current mentees
          }}
          InputProps={{ 
            inputProps: { min: 0, max: 3 }
          }}
        />
        <FormHelperText>
          {currentMentees > 0 ? 
            `You currently have ${currentMentees} active mentee${currentMentees !== 1 ? 's' : ''}.` : 
            'Select how many mentees you can support (0-3).'
          }
        </FormHelperText>
        <Box sx={{display:'flex',justifyContent:'flex-end',marginTop:'1rem'}}>
          <Button onClick={handleClose} sx={{marginRight:'1rem'}}>Cancel</Button>
          <Button onClick={handleSubmit} variant='contained'>Save</Button>
        </Box>
      </Stack>
    </>
  )
}

export default UpdateNumberOfMentees