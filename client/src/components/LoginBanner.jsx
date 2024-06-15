import React from 'react';
import { Box, Container, Grid, Button, Typography } from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../styles/LoginBanner.css';



const LoginBanner = () => {

  return (
    <Box className="login-banner-container">
      <Container maxWidth="xxl">
        <Grid container className="login-container">
          <Grid item xs={12} md={8} className="login-section">
            
                <div  className="banner-login-text">
                <Typography variant="h6" style={{ color: "#ed553b", fontSize: "1rem", fontWeight: "600", width: "80%", position: "relative" }}>
  <span style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)", height: "2px", width: "14px", backgroundColor: "#ed553b" }}></span>
      ebook
</Typography>

                  <Typography variant="h5" style={{fontWeight:"800" ,width:"80%"}}>Access, Read,Practice & Engage with Digital Content (eBook)</Typography>
                  <Typography variant="h6" style={{width:"90%"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                </div>
          </Grid>
          <Grid item xs={12} md={4} className="image-section">
          <img
  className="image-container"
  src="https://cdn.pixabay.com/photo/2017/11/12/18/29/book-2943367_1280.png"
  alt="Book image"
  style={{
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
  }}
/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LoginBanner;
