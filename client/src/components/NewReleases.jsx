import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Rating, Link } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/NewReleases.css';

const books = [
  {
    title: "The Mind Connection",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "Battlefield of the mind",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  // Duplicate the data to create 16 items
  {
    title: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Mind Connection",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "Battlefield of the mind",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Mind Connection",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "Battlefield of the mind",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Mind Connection",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "Battlefield of the mind",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Mind Connection",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "Battlefield of the mind",
    author: "Joyce Meyer",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  },
  {
    title: "The Road to Recognition",
    author: "Seth Price/ Barry Feldman",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU",
    rating: 4.5
  }
];

const NewReleases = () => {
  const itemsPerPage = 4;
  const slides = [];

  for (let i = 0; i < books.length; i += itemsPerPage) {
    slides.push(books.slice(i, i + itemsPerPage));
  }

  return (
    <div style={{padding:"5% 0 0 0"}}>

    <Container className="new-releases">
      <Typography variant="h4" component="h2" align="center" style={{color:"#173f5f",fontSize:"1.5rem" ,fontWeight:"600"}} gutterBottom>
        New Release Books
      </Typography>
      <Typography  variant="subtitle1" align="center" style={{color:"grey", letterSpacing:"1px"}} gutterBottom>
        1000+ books are published by different authors everyday.
      </Typography>
      <div style={{display:"flex",justifyContent:"center"}}>

      <Typography variant="h6" component="h6" style={{color:"#ed553b",}} className="view-all-button-new-release">
        View All Products →
      </Typography>
      </div>
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
        {slides.map((slide, index) => (
          <Grid container spacing={4} className="book-grid" key={index} style={{height:"80vh"}}>
            {slide.map((book, subIndex) => (
              <Grid item xs={12} sm={6} md={3} key={subIndex} >
                <Card className="book-card" style={{boxShadow:"2px 3px 5px rgba(0, 0, 0, 0.1)"}}  >
                  <CardMedia
                    component="img"
                    height="250"
                    image={book.image}
                    alt={book.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" style={{fontSize:"1rem", paddingBottom:"10px" ,color:"#173f5f",fontWeight:"600"}}>
                      {book.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {book.author}
                    </Typography>
                    <Rating name="read-only" value={book.rating} readOnly precision={0.5} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))}
      </Carousel>
    </Container>
    <Typography variant="caption" style={{ padding: "0 100px" }} className="underline-new-releases">
        
      </Typography>
    </div>
  );
};

export default NewReleases;
