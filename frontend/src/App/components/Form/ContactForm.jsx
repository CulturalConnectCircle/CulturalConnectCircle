import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';

export default function ContactForm() {

  const handleClick= () => {
    document.getElementById('contact-form').submit();
    alert("You message has been submitted. We will be in touch soon!");
  }

  return (
    <React.Fragment>
      <Box alignItems="center" sx={{  flexGrow: 1, width: 1000, backgroundColor:'#fbf4e6', marginTop: '50px' }}>
        <br/>
        <Typography variant='body1'>Do you have any questions? 
        <p>Please do not hesitate to contact us
          directly.</p>
        <p>Our team will come back to you within a matter of hours to
          help you.</p></Typography>
        <form id="contact-form">
          <TextField
            label="Name"
            required
            variant="outlined"
            placeholder='Enter your Name'
            color="primary"
            type="name"
            sx={{mb: 3, width: '800px'}}
          />
          <TextField
            label="Email"
            required
            placeholder='Enter your Email'
            variant="outlined"
            color="primary"
            type="email"
            sx={{mb: 3, width: '800px'}}
          />
          <TextField
            label="Subject"
            variant="outlined"
            color="primary"
            placeholder='Enter your Subject'
            type="email"
            sx={{mb: 3, width: '800px'}}
          />
          <TextField
            label="Message"
            variant="outlined"
            // color="primary"
            style={{
              borderRadius: 35,
              backgroundColor: "fbf4e6"}}
            type="email"
            sx={{mb: 3, width: '800px'}}
            multiline
            placeholder='Enter your Message'
            rows={4}
          /> <br/>
          <Button 
            variant="outlined" 
            // style={{ color:'fbf4e6', borderBlockColor: '#db991f' }}
            style={{
              borderRadius: 35,
              backgroundColor: "fbf4e6"}}
          >Send</Button>
        </form>
      </Box>
    </React.Fragment>
  );
}
