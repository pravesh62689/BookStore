import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';
import '../styles/ForFree.css';


const ForFree = () => {
  return (
    <Container className="for-free-container">
      <Grid container >
        <Grid item xs={12} md={6}>
          <Box className="image-box">
            <img src="https://us.images.westend61.de/0000797818j/woman-using-tablet-while-drinking-coffee-in-bed-in-the-morning-MOMF00218.jpg" alt="Free Books" className="free-books-image" />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="content-box">
            <Typography variant="h4" className="title">
              Get over a 100 free books
            </Typography>
            <Typography variant="body1" className="description">
              Get access by subscribing to our newsletter. Jump start your book reading by quickly checking through the popular book categories...
            </Typography>
            <Box className="subscribe-box">
            <div style={{ display: "flex", padding: "0px 0px" }}>
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
                      paddingRight: "8rem",
                      fontWeight: "600",
                      outline: "none",
                      border: "none",
                      fontSize: "0.975rem",
                      borderTopLeftRadius: "0.5rem",
                      borderBottomLeftRadius: "0.5rem",
                    }}
                    placeholder="Enter your email address..."
                    id=""
                  />
                  <input
                    type="button"
                    value="Get Free Books"
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
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ForFree;
