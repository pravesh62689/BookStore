import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  TextField,
  IconButton,
  Button,
  Link,
  Box,
  Avatar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import '../styles/Header.css';

const Header = () => {

  const [searchText, setSearchText] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
 
    const [activeLink, setActiveLink] = useState('home'); // initialize active link to 'home'
  
    const handleLinkClick = (link) => {
      setActiveLink(link); // update active link when a link is clicked
    };
  
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchText);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <AppBar position="static" className="header-container">
      <Toolbar>
        <Grid container className='header-padding' justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="subtitle2" className="header-phone">
              <Link href="tel:+918374902234" underline="none" style={{ color: "#173f5f" }}>
                +91 8374902234
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Box className="header-social">
              <IconButton aria-label="facebook" className="social-icon" style={{ color: "#173f5f" }}>
                <FacebookIcon style={{ fontSize: "20px" }} />
              </IconButton>
              <IconButton aria-label="instagram" className="social-icon" style={{ color: "#173f5f" }}>
                <InstagramIcon style={{ fontSize: "20px" }} />
              </IconButton>
              <IconButton aria-label="linkedin" className="social-icon" style={{ color: "#173f5f" }}>
                <LinkedInIcon style={{ fontSize: "20px" }} />
              </IconButton>
              <IconButton aria-label="twitter" className="social-icon" style={{ color: "#173f5f" }}>
                <TwitterIcon style={{ fontSize: "20px" }} />
              </IconButton>
              <IconButton aria-label="bookmark" className="social-icon" style={{ color: "#173f5f" }}>
                <BookmarkIcon style={{ fontSize: "20px" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <Typography variant="caption" style={{ padding: "0 100px" }} className="underline">
        |
      </Typography>
      <Toolbar>
        <Grid container className='menu-container' justifyContent="space-around" alignItems="center">
          <Grid item>
            <Avatar sx={{ bgColor: '#b8b8b8', width: '60px', height: '60px', marginRight: '10px' }}>
            </Avatar>
          </Grid>
          <Grid item>

            <Grid container justifyContent="space-evenly" alignItems="center" style={{ borderRadius: '40px' }} >
              <form onSubmit={handleSearchSubmit}>
                <TextField
                  className="search-bar"
                  label={isInputFocused || searchText ? '' : 'Search Books'}
                  size="small"
                  variant="outlined"
                  sx={{
                    backgroundColor: '#f0f0f0',
                    borderRadius: '30px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                      '&:hover fieldset': {
                        border: 'none',
                      },
                      '&.Mui-focused fieldset': {
                        border: 'none',
                      },
                   
                    },
                  }}
                  InputLabelProps={{
        style: { color: '#D3D3D3', fontWeight: 500 }, // Change label color and font weight here
      }}
                  value={searchText}
                  onChange={handleSearchChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  InputProps={{
                    endAdornment: (
                      <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                      </IconButton>
                    ),
                  }}
                />
              </form>
            </Grid>
          </Grid>
          <Grid item>
            <Box className="header-links" sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="#" style={{ color: "#173f5f", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <PersonOutlineOutlinedIcon style={{ marginRight: '7px' }} />
                <Typography variant="caption" style={{ color: "#173f5f", fontWeight: "700", fontSize: "12px", marginRight: '15px' }}>ACCOUNT</Typography>
              </Link>
              <Typography variant="caption" style={{ color: "#173f5f", margin: '0 15px' }}>|</Typography>
              <Link href="#" style={{ color: "#173f5f", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <LocalMallOutlinedIcon style={{ marginRight: '7px' }} />
                <Typography variant="caption" style={{ color: "#173f5f", fontWeight: "700", fontSize: "12px", marginRight: '15px' }}>CART (0$)</Typography>
              </Link>
              <Typography variant="caption" style={{ color: "#173f5f", margin: '0 5px' }}>|</Typography>
              <Link href="#" style={{ color: "#173f5f", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <FavoriteBorderOutlinedIcon style={{ marginRight: '7px' }} />
                <Typography variant="caption" style={{ color: "#173f5f", fontWeight: "700", fontSize: "12px", }}>WISHLIST</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
      <Toolbar className="header-navigation">
        <Grid container justifyContent="space-around" alignItems="center" style={{ padding: "0 16%" }}>
          <Grid item>
            <Typography variant="h6" style={{ fontSize: "16px", }} className="header-nav-item">
              <Link href=""  underline="none"   className={activeLink === 'home' ? 'active' : ''}
        onClick={() => handleLinkClick('home')}>
                HOME
              </Link>
            </Typography>
          </Grid>
          <Grid item>

            <span className="header-nav-separator">|</span>
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ fontSize: "16px" }} className="header-nav-item">
              <Link href="#" underline="none">
                ABOUT US
              </Link>
            </Typography>
          </Grid>
          <Grid item>

            <span className="header-nav-separator">|</span>
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ fontSize: "16px" }} className="header-nav-item">
              <Link href="#" underline="none">
                BOOKS
              </Link>
            </Typography>
          </Grid>
          <Grid item>

            <span className="header-nav-separator">|</span>
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ fontSize: "16px" }} className="header-nav-item">
              <Link href="#" underline="none">
                NEW RELEASE
              </Link>
            </Typography>
          </Grid>
          <Grid item>

            <span className="header-nav-separator">|</span>
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ fontSize: "16px" }} className="header-nav-item">
              <Link href="#" underline="none">
                CONTACT US
              </Link>
            </Typography>
          </Grid>
          <Grid item>

            <span className="header-nav-separator">|</span>
          </Grid>
          <Grid item>
            <Typography variant="h6" style={{ fontSize: "16px" }} className="header-nav-item">
              <Link href="#" underline="none">
                BLOG
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
