import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import '../styles/BannerCarousel.css';

const Banner = ({ title, description }) => {
  return (
    <Box className="text-section">
      <Typography variant="h1" gutterBottom sx={{ fontSize: 46, fontWeight: 700, textAlign: "left" }}>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ fontSize: 20, paddingTop: "10px", textAlign: "left", color: "#173f5f", wordSpacing: "2px", fontWeight: "500" }}>
        {description}
      </Typography>
      <Button variant="contained" style={{ width: "30%", padding: "12px 0", paddingTop: "10px", borderRadius: "8px" }} sx={{ mt: 2, color: "#173f5f", border: '1px solid #173f5f', backgroundColor: "transparent", '&:hover': { backgroundColor: "#173f5f", border: '#FF9900', color: "white" } }}>
        READ MORE →
      </Button>
    </Box>
  );
};

const BannerCarousel = () => {
  const banners = [
    {
      title: 'Ipsum Dolor Si 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Ipsum Dolor Si 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Ipsum Dolor Si 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Ipsum Dolor Si 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <Box className="carousel-container">
      <Container maxWidth="xxl">
        <Grid container className="banner-container">
          <Grid item xs={12} md={6} className="carousel-section">
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showArrows={false}
              interval={3000}
              transitionTime={1000}
              className="carousel"
            >
              {banners.map((banner, index) => (
                <div key={index} className="banner">
                  <Banner title={banner.title} description={banner.description} />
                </div>
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} md={6} className="image-section">
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

export default BannerCarousel;
