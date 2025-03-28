import { FormControl } from '@mui/base'
import { Box, Button, Chip, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const UpdateAreasOfInterest = ({handleClose, areasOfInterest, setAreasOfInterest, handleSave}) => {
  const availableAreas = [
    'Be a mentor',
    'Be a mentee',
    'Hire diverse technologists',
    'Learn about open jobs',
    'Speak at events',
    'Author content',
    'Volunteer for TechPACT'
  ];

  const handleSelect = (area) => {
    if (areasOfInterest.includes(area)) {
      setAreasOfInterest(areasOfInterest.filter(item => item !== area));
    } else {
      setAreasOfInterest([...areasOfInterest, area]);
    }
  };

  return (
    <form>
      <Stack sx={{flex:1, flexDirection:'column', textAlign:'center', paddingBottom:'1rem', marginTop:'0px'}}>
        <Typography sx={{fontWeight:'bold', padding:'0px', margin:'0px'}}>
          Update Areas of Interest
        </Typography>
        <Typography sx={{fontSize:'11px'}}>
          (Click to select and deselect)
        </Typography>
      </Stack>
            
      <IconButton 
        onClick={handleClose} 
        sx={{top:'0px', right:'0px', position:'absolute'}}
      >
        <CloseIcon sx={{fontSize:'16px'}}/>
      </IconButton>
    
      <FormControl sx={{}}>
        <Box>
          {availableAreas.map((area, index) => (
            <Chip 
              key={index}
              sx={{margin:'1px', fontSize:'11px', marginBottom:'2px'}} 
              label={area} 
              color="primary" 
              variant={areasOfInterest.includes(area) ? 'solid' : 'outlined'} 
              onClick={() => handleSelect(area)} 
            />
          ))}
        </Box>
      </FormControl>

      <Button 
        fullWidth 
        onClick={handleSave} 
        variant='contained' 
        sx={{marginTop:'1rem'}}
      >
        Save
      </Button>
    </form>
  );
};

export default UpdateAreasOfInterest; 