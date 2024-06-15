import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import '../styles/Faq.css';

const Faq = () => {
  return (
    <Container className="faq-container" maxWidth="md">
      <Typography variant="h4" className="faq-title" style={{fontSize:"2rem"}}>
        Still not sure?
      </Typography>
      <Typography variant="body1" className="faq-description">
        Jump start your book reading by quickly checking through the popular book categories. 1000+ books are published by different authors every day. Buy your favourite books on TreeBooks Today.
      </Typography>
      <Button variant="contained" style={{ width: "25%", padding: "10px 0", paddingTop: "10px", borderRadius: "5px", marginTop: "20px"  ,fontWeight:"700"}} sx={{ mt: 2, color: "#173f5f", border: '1px solid #173f5f', backgroundColor: "transparent", '&:hover': { backgroundColor: "#173f5f", border: '#FF9900', color: "white" } }}>
                  READ FAQ →
                </Button>
    </Container>
  );
};

export default Faq;
