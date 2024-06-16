import React from 'react';
import { Container, Typography, Button, Box ,useMediaQuery, useTheme} from '@mui/material';
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const getTitleFontSize = () => {
    if (isSmallScreen) return '1.5rem';
    if (isMediumScreen) return '2rem';
    return '2.5rem';
  };

  const getDescriptionFontSize = () => {
    if (isSmallScreen) return '1rem';
    if (isMediumScreen) return '1.25rem';
    return '1.5rem';
  };
  return (
    <Container className="coming-soon">
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
          <Box key={index} className="banner-slide" style={{ backgroundImage: `url(${banner.image})` }}>
            <Box className="banner-content">
            <Typography
                variant="h3"
                component="h2"
                className="banner-title"
                style={{ fontSize: getTitleFontSize() }}
              >
                {banner.title}
              </Typography>
              <Typography
                variant="body1"
                className="banner-description"
                style={{ fontSize: getDescriptionFontSize() }}
              >
                {banner.description}
              </Typography>
              <Button 
                variant="contained" 
                className="view-more-button"
                sx={{ mt: 2, border: '1px solid #173f5f', backgroundColor: "transparent", color:"#173f5f", '&:hover': { backgroundColor: "#173f5f", border: '#FF9900', color: "white" } }}
              >
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
