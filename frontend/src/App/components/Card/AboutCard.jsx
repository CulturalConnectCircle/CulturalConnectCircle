import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import hiring from '../../../assets/culturalpic.jpeg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function AboutCard({ personInfo }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ marginTop: '30px' }}>
        <Grid item xs={12} md={8}>
          <Typography variant='h4' sx={{ textAlign: 'left' }}>
            <strong>
            Cultural Connect Circle: Bridging Cultures in the Corporate World
            </strong>
          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'left', fontSize: 20 }} paragraph>
            
          Discover Cultural Connect Circle – where diversity meets opportunity. 
          Our platform is dedicated to promoting a multicultural workforce by 
          connecting talented individuals from various cultural backgrounds with 
          organizations that celebrate and harness diversity. Since our inception,
          we've been committed to fostering an inclusive job market that values cultural
          insights and perspectives.
          <p><strong>OUR MISSION:</strong></p>

          </Typography>
          <Typography variant='body1' sx={{ textAlign: 'left', fontSize: 20 }} paragraph>  

          With a vibrant team from over a dozen countries, Cultural Connect Circle has made
          it our mission to illuminate the strengths of cultural diversity in the professional
          realm. We're not just about filling positions; we're about creating spaces where every 
          culture can thrive and contribute to global business success.
          
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img src={hiring} height='auto' width='100%' alt='We are hiring' />
        </Grid>
        <Grid item xs={12}>
          <strong><Typography variant='h5' sx={{ textAlign: 'left' }}>MEET OUR TEAM</Typography></strong>
          <p />
        </Grid>
      </Grid>
      <Box>
        <ImageList sx={{ width: '100%', height: 300,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          '& > li': {
            width: { xs: '45%', sm: '30%', md: '22%', lg: '15%', xl: '12%' },
            marginBottom: 16,
          },
       }} gap={4}
       >
          {personInfo.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                height='100px'
              />
              <ImageListItemBar
                title={item.name}
                subtitle={item.description}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
