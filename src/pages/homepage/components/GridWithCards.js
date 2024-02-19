import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Avatar, CardMedia, AvatarGroup, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
const GridWithCards = () => {
  // Define the positions where the cards will be displayed
  const profileimages=['rating2.jpg','mentor2.jpeg','people1.jpg','person1.jpeg',
  'profile3.jpg',]

  const cardPositions = [
    
    { row: 2, col: 2,imgurl: 'person1.jpg',name:'Olamide'},
    { row: 4, col: 2 ,imgurl: 'profile3.jpg',name:'Ibrahim'},
    { row: 1, col: 4,imgurl: 'mentor2.jpg',name:'Isabelle' },
    { row: 3, col: 4 ,imgurl: 'people1.jpg',name:'Olivia'},
    
    { row: 2, col: 6 ,imgurl: 'mentee2.jpg',name:'Uduak'},
    { row: 4, col: 6 ,imgurl: 'people6.png',name:'Isabelle'},
    {row:1, col:8 ,imgurl: 'rating2.jpg',name:'Idara'},
    {row:3, col:8 ,imgurl: 'mentor2.jpg',name:'Idara'},

    { row: 2, col: 10 ,imgurl: 'profile5.jpg',name:'Wilson'},
    { row: 4, col: 10 ,imgurl: 'rating1.jpg',name:'Uduak'},
  ];
  function getImgUrlAtPosition(row, col) {
    const card = cardPositions.find(card => card.row === row && card.col === col);
    return card ? card.imgurl : null;
  }
  function getNameAtPosition(row, col) {
    const card = cardPositions.find(card => card.row === row && card.col === col);
    return card ? card.name : null;
  }

  // Function to check if a given row and column is in the cardPositions array
  const isCardPosition = (row, col) => {
    return cardPositions.some((pos) => pos.row === row && pos.col === col);
  };


  // Generate the grid layout
  const gridLayout = [];
  let count=0
  for (let row = 1; row <= 5; row++) {
    const rowItems = [];
    for (let col = 1; col <= 10; col++) {
      count=count+1
      const img=profileimages[count]
      rowItems.push(
        <Grid key={`${row}-${col}`} item sx={{ width: '100px', height: '100px' }}>
          {isCardPosition(row, col) && (
            <Card elevation={5}>
              <CardMedia
        sx={{ height: 100 }}
        image={getImgUrlAtPosition(row,col)}
        title={getNameAtPosition(row,col)}
      />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               {/* <Avatar alt="Remy Sharp" sx={{ width: '50px', height: '50px', margin: 'auto' }}  src="pic final2.jpg" /> */}
          
                <Typography sx={{fontSize:'10px'}}>{getNameAtPosition(row,col)}</Typography>
              </CardContent>
            </Card>
          )}
        </Grid>
        
      );

    }
    gridLayout.push(
      <Grid key={row} container item>
        {rowItems}
      </Grid>
    );
  }
// Check if screen width is below 1220px
const isWidthBelow1220 = useMediaQuery('(max-width:1220px)');

  return (
    <>

    {
      isWidthBelow1220?<Box sx={{justifyContent:'center',textAlign:'center',alignItems:'center',display:'flex'}}>
      <AvatarGroup max={20}>
        {profileimages.map((img)=>{
          return (
            <Avatar key={img} sx={{ width: 56, height: 56 }}   alt="Remy Sharp" src={img}/>
          )
        })}
  
  <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src='people6.png' />
        </StyledBadge>
      
  
    </AvatarGroup>
      </Box>:<Box sx={{ maxWidth: '1000px', height: '500px',overflow:'hidden' }}>
        <Grid container spacing={1}>
      {gridLayout}
    </Grid>
    </Box>
    }
    
  
  </>
   
  );
};

export default GridWithCards;
