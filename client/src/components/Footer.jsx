import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box } from '@mui/material';
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id='footer'>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} className="footer-section">
            <img src="https://cdn.pixabay.com/photo/2024/01/31/06/29/ai-generated-8543460_960_720.png" alt="Logo" className="footer-logo" /> {/* Replace with actual logo path */}
            <Typography variant="body2" className="footer-description">
              Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Box className="social-icons">
              <IconButton>
                <Facebook style={{color:"#173f5f", fontSize:"30px" }} />
              </IconButton>
              <IconButton>
                <LinkedIn style={{color:"#173f5f" ,fontSize:"30px" }} />
              </IconButton>
              <IconButton>
                <Twitter style={{color:"#173f5f" ,fontSize:"30px" }} />
              </IconButton>
              <IconButton>
                <YouTube style={{color:"#173f5f" ,fontSize:"30px" }} />
              </IconButton>
            </Box>

          </Grid>
          <Grid item xs={12} md={3} className="footer-section" style={{marginLeft:"40px"}}>
            <Typography variant="h6" className="footer-title">
              COMPANY
            </Typography>
            <ul className="footer-links">
              <li><Link href="#">HOME</Link></li>
              <li><Link href="#">ABOUT US</Link></li>
              <li><Link href="#">BOOKS</Link></li>
              <li><Link href="#">EBOOKS</Link></li>
              <li><Link href="#">NEW RELEASE</Link></li>
              <li><Link href="#">CONTACT US</Link></li>
              <li><Link href="#">BLOG</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4} className="footer-section">
            <Typography variant="h6" className="footer-title">
              LATEST NEWS
            </Typography>
            <div className="news-item">
              <img src="https://images.pexels.com/photos/8837787/pexels-photo-8837787.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News" className="news-image" /> {/* Replace with actual news image path */}
              <div>
                <Typography variant="body2" className="news-title">
                  Nostrud exercitation
                </Typography>
                <Typography variant="body2" className="news-description">
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body2" className="news-date">
                  15 April 2022
                </Typography>
              </div>
            </div>
            <div className="news-item">
              <img src="https://images.pexels.com/photos/1546912/pexels-photo-1546912.jpeg?auto=compress&cs=tinysrgb&w=600" alt="News" className="news-image" /> {/* Replace with actual news image path */}
              <div>
                <Typography variant="body2" className="news-title">
                  Nostrud exercitation
                </Typography>
                <Typography variant="body2" className="news-description">
                  Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
                <Typography variant="body2" className="news-date">
                  15 April 2022
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Box className="footer-privacy" >
          <Typography variant="body2" className="footer-copy">
            © 2022 Arihant. All Rights Reserved.
          </Typography>
          <Typography>

            <Link href="#" className="privacy-link">Privacy</Link>
            <span> | </span>
            <Link href="#" className="terms-link">Terms of Service</Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
