/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  InputAdornment, TextField, Typography, Button, Badge,
  IconButton, Box, Modal, Backdrop, Fade,
} from '@mui/material';
import './Header.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/favicon.ico';
import Login from '../Login/Login';
import SignUp from '../Login/SignUp';
import { categories } from '../../Data/data';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [signup, setSignup] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setSignup(false);
    setOpen(false);
  };

  const navigateToCart = () => {
    navigate('/cart');
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    height: '75vh',
    bgcolor: 'background.paper',
    boxShadow: 44,
  };

  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/" className="logo-link-element">
          <div className="logo-heading">
            <img src={logo} alt="logo" width={isMobile ? '40px' : '60px'} height={isMobile ? '30px' : '40px'} style={{ background: 'white' }} />
            <Typography variant="h5">BuyHere</Typography>
          </div>
        </Link>
        <div className="nav-tools">
          {!isMobile && (
          <TextField
            placeholder="search for products"
            variant="outlined"
            size="small"
            InputProps={{ endAdornment: (<InputAdornment position="end"><SearchIcon sx={{ cursor: 'pointer' }} /></InputAdornment>) }}
            sx={{
              width: '50%', background: 'whitesmoke', color: 'white', borderRadius: '4px',
            }}
          />
          )}
          <Button variant={isMobile ? 'text' : 'contained'} onClick={handleOpen} className="login-btn">Login</Button>
          {
          isMobile
            ? (
              <IconButton onClick={navigateToCart}>
                <Badge badgeContent={0} color="warning">
                  <ShoppingCartIcon sx={{ color: 'whitesmoke' }} />
                </Badge>
              </IconButton>
            )
            : (
              <Button
                variant="text"
                startIcon={(
                  <Badge badgeContent={0} color="warning">
                    <ShoppingCartIcon sx={{ color: 'whitesmoke' }} />
                  </Badge>
)}
                sx={{ color: 'whitesmoke' }}
                onClick={navigateToCart}
              >
                Cart
              </Button>
            )
}
        </div>
      </nav>
      {isMobile && (
      <TextField
        placeholder="search for products"
        variant="outlined"
        size="small"
        fullWidth
        InputProps={{ endAdornment: (<InputAdornment position="end"><SearchIcon sx={{ cursor: 'pointer' }} /></InputAdornment>) }}
        sx={{
          width: '80%', background: 'whitesmoke', color: 'white', margin: '5px 10%',
        }}
      />
      )}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {signup ? <SignUp setSignup={setSignup} /> : <Login setSignup={setSignup} />}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export function Categories(props) {
  const { images } = props;
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div>
      {isMobile
        ? (
          <Slider className="category-container" {...settings}>
            {
          categories.map((item) => (
            <CategoryCard item={item} key={item.id} images={images} />
          ))
        }
          </Slider>
        )
        : (
          <div className="category-container">
            {
          categories.map((item) => (
            <CategoryCard item={item} key={item.id} images={images} />
          ))
        }
          </div>
        )}
    </div>
  );
}

export function CategoryCard(props) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { item, images } = props;
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleOPen = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Link to={`/${(item.title).toLowerCase()}`} className="category-links">
      <div
        className="category-card-category-container"
        onMouseEnter={handleOPen}
        onMouseLeave={handleClose}
        style={{ width: 'fit-content' }}
      >
        <div className="category-card">
          {images && <img src={item.img} alt={item.title} loading="lazy" /> }
          <h5 className="item-title">{item.title}</h5>
        </div>
        {!isMobile && openMenu
              && (
                <div className="dropdown">
                  <ul className="dropdown-menu" onMouseEnter={handleOPen}>
                    <li className="dropdown-item" onClick={handleClose}>
                      Profile
                      <ul className="inner-menu">
                        <li>hi</li>
                        <li>how are you</li>
                        <li>bye</li>
                      </ul>
                    </li>
                    <li className="dropdown-item" onClick={handleClose}>About</li>
                    <li className="dropdown-item" onClick={handleClose}>Details</li>
                    <li className="dropdown-item" onClick={handleClose}>Help</li>
                  </ul>
                </div>
              )}

      </div>
    </Link>
  );
}
