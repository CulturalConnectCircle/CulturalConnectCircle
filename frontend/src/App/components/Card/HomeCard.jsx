import React from 'react';
import rightImage from '../../../assets/backgrounds.jpg';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography, Button, Box } from '@mui/material';

export default function HomeCard() {

  const rightSideStyles = {
    flex: 1,
    backgroundImage: `url(${rightImage})`,
    backgroundPosition: 'right center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
  };

  return (
    <Container style={{ display: 'flex', minHeight: '100vh', alignItems: 'center' }}>
      <Card variant='outlined' sx={{ margin: 'auto', maxWidth: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ 
                          flex: 1, 
                          padding: '40px', 
                          display: 'flex', 
                          flexDirection: 'column', 
                          justifyContent: 'space-between', 
                          background: `url(${rightImage}) right center no-repeat fixed`,
                          backgroundSize: 'cover',
                        }}
        >
      <Card sx={{ backgroundColor: 'rgba(225,225,225,0.8)', height: '50%' , overflowX: 'auto', overflowY: 'auto' }}>
          <div>
            <Typography variant='h2' gutterBottom align="center" sx={{ fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem', xl: '5rem' } }}>Cultrural Connect Circle!</Typography>
            <Typography variant='body1' align="center" paragraph>
              <strong><p>Welcome to our cultutal connect circle!</p></strong> Your gateway to a workplace where diversity thrives! 
              <p>Join us in celebrating and integrating a mosaic of cultures into your career journey.</p>
            </Typography>
            <Typography variant='body1' paragraph align="center">
              <strong>Featured Roles</strong>
              <p>Embrace Diversity in Your Life:</p>
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li><Typography variant='body1'><strong>Cultural Intelligence Advisor:</strong>
              <p>Foster inclusive environments by interpreting cultural dynamics within teams.</p> </Typography></li>
              <li><Typography variant='body1'><strong>Diversity Program Manager:</strong>
              <p> Lead initiatives that promote diversity and inclusion in the workplace.</p></Typography></li>
              <li><Typography variant='body1'><strong>Multilingual Customer Support:</strong>
              <p> Provide empathetic support across languages and cultures.</p></Typography></li>
            </ul>
          </div>
          <div>
            <Typography variant='body1' paragraph align="center">
              More questions? <a href="/contact">Contact us</a>
            </Typography>
            <Typography variant='h6' align="center">
              <strong>Empowering Your Diverse Career Path</strong>
            </Typography>
            <ol style={{ paddingLeft: 20 }}>
              <li><Typography variant='body1'><strong>Discover Opportunities:</strong> Browse roles that value your unique cultural background and skills.</Typography></li>
              <li><Typography variant='body1'><strong>Celebrate Your Identity:</strong> Apply to positions where your cultural perspective is an asset.</Typography></li>
              <li><Typography variant='body1'><strong>Join Inclusive Teams:</strong> Connect with employers who champion diversity and cultural connectivity.</Typography></li>
            </ol>
            <Typography variant='h5' align="center">Explore new horizons with Cultural Connect Circle</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button href="/jobPosts" variant="contained" size="large"  style={{
        borderRadius: 35,
        backgroundColor: "#db991f",}}>
                Search Event Gallery
              </Button>
              <br/>
            </Box>
          </div>
          </Card>
        </CardContent>
      </Card>
      <div style={rightSideStyles}></div>
    </Container>
  );
}
