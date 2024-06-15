import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/ComingSoon.css';
import banner1 from '../assets/BannerComingSoon.png';
import banner2 from '../assets/BannerComingSoon.png';
import banner3 from '../assets/BannerComingSoon.png';

const banners = [
  {
    title: "Coming Soon",
    description: "Praesent non quam semper, finibus est a, faucibus nulla. Sed varius orci sit amet turpis feugiat, ac vulputate risus cursus.",
    image: banner1
  },
  {
    title: "Upcoming Release",
    description: "Praesent non quam semper, finibus est a, faucibus nulla. Sed varius orci sit amet turpis feugiat, ac vulputate risus cursus.",
    image: banner2
  },
  {
    title: "Stay Tuned",
    description: "Praesent non quam semper, finibus est a, faucibus nulla. Sed varius orci sit amet turpis feugiat, ac vulputate risus cursus.",
    image: banner3
  }
];

const ComingSoon = () => {
  return (
    <Container className="coming-soon" style={{maxWidth:"100%"}}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={5000}
        showArrows={false}
        emulateTouch
      >
        {banners.map((banner, index) => (
          <Box key={index} className="banner-slide" style={{ backgroundImage: ` url(${banner.image})` }}>
            <Box className="banner-content">
              <Typography variant="h3" component="h2" className="banner-title">
                {banner.title}
              </Typography>
              <Typography variant="body1" className="banner-description">
                {banner.description}
              </Typography>
              <Button variant="contained" style={{ width: "25%", padding: "10px 0", paddingTop: "10px", borderRadius: "8px", marginTop: "20px" }} sx={{ mt: 2, color: "#173f5f", border: '1px solid #173f5f', backgroundColor: "transparent", '&:hover': { backgroundColor: "#173f5f", border: '#FF9900', color: "white" } }}>
                  VIEW MORE →
                </Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Container>
  );
};

export default ComingSoon;
