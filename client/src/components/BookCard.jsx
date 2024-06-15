import React from 'react'
import { Container, Grid, Card, CardMedia, CardContent, Typography, Rating, Button } from '@mui/material';

const BookCard = () => {
  return (
    <div style={{ padding: "5% 0 5% 0" }}>

      <Container className="new-releases">


        <Grid container spacing={4} className="book-grid" style={{ height: "60vh" }}>
          <Grid item xs={12} sm={6} md={4} style={{ paddingTop: "0" }}>

            <img

              height="450"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRCk4WeEGBS13guV-6wlt-ljqYKGOXFxKz2EcQrsJetjbAtALDBiwJt2VtOOuSfhxcIc&usqp=CAU"
              alt="Book"

            />
          </Grid>
          <Grid item xs={12} sm={6} md={8} style={{ paddingTop: "70px", }} >
            <Card className="book-card" style={{ boxShadow: "none", height: "fit-content" }}  >
              <CardContent >
                <Typography variant="h2" color="textSecondary" style={{ fontSize: ".9rem", fontWeight: "500" }}>
                  Featured Book Of the Week
                </Typography>
                <Typography variant="h6" component="h3" style={{ fontSize: "1.5rem", color: "#173f5f", fontWeight: "600" }}>
                  Birds Gonna Be Happy
                </Typography>
                <Rating name="read-only" value={4} readOnly style={{ padding: "10px 0" }} />
                <Typography variant="subtitle1" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Button variant="contained" style={{ width: "25%", padding: "10px 0", paddingTop: "10px", borderRadius: "8px", marginTop: "60px" }} sx={{ mt: 2, color: "#173f5f", border: '1px solid #173f5f', backgroundColor: "transparent", '&:hover': { backgroundColor: "#173f5f", border: '#FF9900', color: "white" } }}>
                  VIEW MORE →
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default BookCard