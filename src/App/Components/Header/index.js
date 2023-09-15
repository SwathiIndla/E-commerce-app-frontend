/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  InputAdornment,
  TextField,
  Typography,
  Button,
  Badge,
  IconButton,
} from '@mui/material';
import './Header.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Fade from '@mui/material/Fade';
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
    width: 400,
    height: '70vh',
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 44,
    p: 4,
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
            {signup ? <SignUp /> : <Login />}
            <Box flex flexDirection="row" textAlign="center">
              <Typography variant="subtitle1" display="inline">{signup ? 'Already have an account?' : "Don't have an account?"}</Typography>
              <Button variant="text" onClick={() => (setSignup((prev) => !prev))} disableTouchRipple>
                {signup ? 'Login' : 'Signup' }
              </Button>
            </Box>
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
          <Slider className="container" {...settings}>
            {
          categories.map((item) => (
            <MiniCard item={item} key={item.id} images={images} />
          ))
        }
          </Slider>
        )
        : (
          <div className="container">
            {
          categories.map((item) => (
            <MiniCard item={item} key={item.id} images={images} />
          ))
        }
          </div>
        )}
    </div>
  );
}

export function MiniCard(props) {
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
        className="minicard"
        onMouseEnter={handleOPen}
        onMouseLeave={handleClose}
        style={{ width: 'fit-content' }}
      >
        <div className="mini-card">
          {images && <img src={item.img} alt={item.title} loading="lazy" /> }
          <h5 className="item-title">{item.title}</h5>
        </div>
        {!isMobile && openMenu
              && (
              <div className="dropdown-menu" onMouseEnter={handleOPen}>
                <p className="dropdown-item" onClick={handleClose}>Profile</p>
                <p className="dropdown-item" onClick={handleClose}>About</p>
                <p className="dropdown-item" onClick={handleClose}>Details</p>
                <p className="dropdown-item" onClick={handleClose}>Help</p>
              </div>
              )}

      </div>
    </Link>
  );
}
function PreviousBtn(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ color: 'black', fontSize: '20px' }} />
    </div>
  );
}
function NextBtn(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ color: 'black', fontSize: '20px' }} />
    </div>
  );
}

export function ImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel-container carousel">
      <Slider {...settings}>
        <div>
          <img src="https://images.unsplash.com/photo-1542228227152-511d6b6bbe1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&h=300&w=1600&q=60" alt="image1" style={{ minHeight: '150px' }} />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1565274265853-9d1f55d9cb7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcwfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&h=300&w=1600&q=60" alt="image2" style={{ minHeight: '150px' }} />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1534272521029-e035b59b146e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAxfHxmcmVlJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&h=300&w=1600&q=60" alt="image3" style={{ minHeight: '150px' }} />
        </div>
      </Slider>
    </div>
  );
}
