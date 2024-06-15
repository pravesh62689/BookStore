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

            <div className="banner-login-text">
              <Typography variant="h6" style={{ color: "#ed553b", fontSize: "1rem", fontWeight: "600", width: "80%", position: "relative", marginLeft: "20px" }}>
                <span style={{ position: "absolute", left: "-15px", top: "53%", transform: "translateY(-50%)", height: "2px", width: "34px", backgroundColor: "#ed553b" }}></span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ebook
              </Typography>

              <Typography variant="h5" style={{
                fontWeight: "800", lineHeight: "38px", width: "80%",
                letterSpacing: "1px"
              }}>Access, Read,Practice & Engage with Digital Content (eBook)</Typography>
              <Typography variant="h6" style={{
                paddingTop: "15px", width: "80%", fontSize: '1.2rem',
                letterSpacing: "0.5px"
              }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              <div >
                <div style={{ display: "flex", padding: "40px 0px" }}>
                  <input
                    type="email"
                    className='input-style'
                    style={{
                      width: "100%",
                      maxWidth: "500px",
                      paddingTop: "1.2rem",
                      paddingBottom: "1.2rem",
                      backgroundColor: "white",
                      paddingLeft: "2rem",
                      paddingRight: "4rem",
                      fontWeight: "600",
                      outline: "none",
                      border: "none",
                      fontSize: "0.975rem",
                      borderTopLeftRadius: "0.5rem",
                      borderBottomLeftRadius: "0.5rem",
                    }}
                    placeholder="Enter Your Email Address"
                    id=""
                  />
                  <input
                    type="button"
                    value="Login"
                    style={{
                      backgroundColor: "#ed553b",
                      border: "transparent",
                      borderColor: "none",
                      padding: "0rem 1.7rem",
                      borderRadius: "0 0.5rem 0.5rem 0",
                      color: "white",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                      marginLeft: "-2rem",
                      borderTopRightRadius: "0.5rem",
                      borderBottomRightRadius: "0.5rem",
                      fontSize: ".95rem",
                      letterSpacing: "1px"
                    }}
                  />
                </div>
              </div>
            </div>

          </Grid>
          <Grid item xs={12} md={4} className="login-image-section">
            <img
              className="Login-image-container"
              src="https://img.freepik.com/premium-psd/psd-chibi-girl-read-book-transparent-background_357958-1027.jpg"
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
