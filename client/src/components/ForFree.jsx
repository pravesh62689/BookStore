import React from 'react';
import { Container, Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import '../styles/ForFree.css';

const ForFree = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container className="for-free-container">
      <Grid container>
        {!isSmallScreen && (
          <Grid item xs={12} md={6}>
            <Box className="image-box">
              <img
                src="https://us.images.westend61.de/0000797818j/woman-using-tablet-while-drinking-coffee-in-bed-in-the-morning-MOMF00218.jpg"
                alt="Free Books"
                className="free-books-image"
              />
            </Box>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <Box className="content-box">
            <Typography variant="h4" className="title">
              Get over 100 free books
            </Typography>
            <Typography variant="body1" className="description">
              Get access by subscribing to our newsletter. Jump start your book reading by quickly checking through the popular book categories...
            </Typography>
            <Box className="subscribe-box">
              <div style={{ display: 'flex', padding: '2rem 0px', width: '100%' }}>
                <input
                  type="email"
                  className="input-style"
                  style={{
                    width: '100%',
                    padding: '1.2rem 2rem',
                    backgroundColor: 'white',
                    fontWeight: '600',
                    outline: 'none',
                    border: 'none',
                    fontSize: '0.975rem',
                    borderTopLeftRadius: '0.5rem',
                    borderBottomLeftRadius: '0.5rem',
                  }}
                  placeholder="Enter your email address..."
                />
                <input
                  type="button"
                  value="Get Free Books"
                  style={{
                    backgroundColor: '#ed553b',
                    border: 'transparent',
                    padding: '1.2rem 1.7rem',
                    borderRadius: '0 0.5rem 0.5rem 0',
                    color: 'white',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    fontSize: '0.95rem',
                    letterSpacing: '1px',
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
