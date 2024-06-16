// Categories.jsx
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import '../styles/Categories.css';

const categoryList = [
  { title: 'Higher Education', image: 'https://images.pexels.com/photos/207636/pexels-photo-207636.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Management Books', image: 'https://images.pexels.com/photos/5407054/pexels-photo-5407054.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { title: 'Finance Books', image: 'https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Engineering Books', image: 'https://images.pexels.com/photos/3862153/pexels-photo-3862153.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { title: 'Commerce Books', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600' },
];

const Categories = () => {
  return (
    <div className="categories-container" id='explore'>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">

        {/* Higher Education */}
        <Grid item xs={12} md={2.7} style={{padding:"15px"}}>
          <Card className="category-card">
            <CardMedia
              component="img"
              alt={categoryList[0].title}
              image={categoryList[0].image}
            />
            <div className="overlay">
              <Typography variant="h6"  style={{paddingBottom:"40px",fontWeight:"600"}} component="div">{categoryList[0].title}</Typography>
            </div>
          </Card>
        </Grid>

        {/* Explore Our Top Categories */}
        <Grid item xs={12} md={3.8} style={{border:"1px  solid #D3D3D3", borderRadius:"10px",margin:"15px",padding:"70px 0px "}}>
          <Typography variant="h4" align="center" className="Category-title" style={{ fontWeight:"700" ,color:"#173f5f",fontSize:"2.5rem",}}>
            Explore Our Top Categories
          </Typography>
          <div className="view-all-button-container">
            <Button variant="contained" className="view-all-button">
              View All
            </Button>
          </div>
        </Grid>

        {/* Engineering Books */}
        <Grid item xs={12} md={2.7} style={{padding:"15px"}}>
          <Card className="category-card">
            <CardMedia
              component="img"
              alt={categoryList[3].title}
              image={categoryList[3].image}
            />
            <div className="overlay">
              <Typography variant="h6" style={{paddingBottom:"40px",fontWeight:"600"}} component="div">{categoryList[3].title}</Typography>
            </div>
          </Card>
        </Grid>

        {/* Management Books */}
        <Grid item xs={12} sm={6} md={2.7} style={{padding:"15px"}}>
          <Card className="category-card">
            <CardMedia
              component="img"
              alt={categoryList[1].title}
              image={categoryList[1].image}
            />
            <div className="overlay">
              <Typography variant="h6" style={{paddingBottom:"40px",fontWeight:"600"}} component="div">{categoryList[1].title}</Typography>
            </div>
          </Card>
        </Grid>

        {/* Finance Books */}
        <Grid item xs={12} sm={6} md={4} style={{padding:"15px"}}>
          <Card className="category-card">
            <CardMedia
              component="img"
              alt={categoryList[2].title}
              image={categoryList[2].image}
            />
            <div className="overlay">
              <Typography variant="h6" style={{paddingBottom:"40px",fontWeight:"600"}} component="div">{categoryList[2].title}</Typography>
            </div>
          </Card>
        </Grid>

        {/* Commerce Books */}
        <Grid item xs={12} sm={6} md={2.7}  style={{padding:"15px"}}>
          <Card className="category-card">
            <CardMedia
              component="img"
              alt={categoryList[4].title}
              image={categoryList[4].image}
            />
            <div className="overlay">
              <Typography variant="h6" style={{paddingBottom:"40px",fontWeight:"600"}} component="div">{categoryList[4].title}</Typography>
            </div>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default Categories;
