import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent, CardMedia,IconButton  } from '@mui/material';
import '../styles/Article.css';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const articles = [
  {
    date: '2 Aug, 2021',
    title: 'Reading Books Always Makes The Moments Happy',
    image: 'https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image path
    alt: 'Mother and daughter reading book',
  },
  {
    date: '2 Aug, 2021',
    title: 'Reading Books Always Makes The Moments Happy',
    image: 'https://images.pexels.com/photos/92323/pexels-photo-92323.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with the actual image path
    alt: 'Woman reading book by window',
  },
  {
    date: '2 Aug, 2021',
    title: 'Reading Books Always Makes The Moments Happy',
    image: 'https://images.pexels.com/photos/8770585/pexels-photo-8770585.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', // Replace with the actual image path
    alt: 'Women reading books outdoors',
  },
];

const Article = () => {
  return (
    <Container className="article-container" style={{ padding: "4% 10%" }}>
      <Typography variant="subtitle1" className="article-subtitle" style={{ fontSize: ".8rem" }}>
        READ OUR ARTICLES
      </Typography>
      <Typography variant="h3" className="article-title" style={{ padding: "10px 20px 60px 20px" }}>
        Latest Articles
      </Typography>
      <Grid container spacing={4} className="article-grid">
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="article-card">
              <CardMedia
                component="img"
                alt={article.alt}
                height="140"
                image={article.image}
                className="article-image"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" className="article-date">
                  {article.date}
                </Typography>
                <Typography variant="h6" className="article-card-title">
                  {article.title}
                </Typography>
              </CardContent>
            </Card>
                <div className="social-icons">
                  <IconButton>
                    <Facebook style={{ color: "#173f5f" }} />
                  </IconButton>
                  <IconButton>
                    <Twitter style={{ color: "#173f5f" }} />
                  </IconButton>
                  <IconButton>
                    <Instagram style={{ color: "#173f5f" }}/>
                  </IconButton>
                </div>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" style={{ width: "25%", padding: "10px 0", paddingTop: "10px", borderRadius: "2px", marginTop: "20px"  ,fontWeight:"500"}} sx={{ mt: 2, color: "#173f5f", border: '0.5px solid #173f5f', backgroundColor: "transparent", '&:hover': { backgroundColor: "#173f5f", border: '#FF9900', color: "white" } }}>
                  READ ALL ARTICLES →
                </Button>
    </Container>
  );
};

export default Article;
