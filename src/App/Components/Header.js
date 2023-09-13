/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  InputAdornment,
  TextField,
  Typography,
  Button,
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
import logo from './favicon.ico';
import Login from './Login';
import SignUp from './SignUp';

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
        <div className="logo-heading">
          <img src={logo} alt="logo" width={isMobile ? '40px' : '60px'} height={isMobile ? '30px' : '40px'} style={{ background: 'white' }} />
          <Typography variant="h5">BuyHere</Typography>
        </div>
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
          {isMobile ? <IconButton onClick={navigateToCart}><ShoppingCartIcon sx={{ color: 'whitesmoke' }} /></IconButton>
            : (<Button variant="text" startIcon={<ShoppingCartIcon />} sx={{ color: 'whitesmoke' }} onClick={navigateToCart}>Cart</Button>)}

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
  const categories = [{
    id: 1,
    title: 'Grocery',
    img: 'https://cdn.pixabay.com/photo/2016/04/21/11/32/groceries-1343141_1280.jpg',
  }, {
    id: 2,
    title: 'Mobiles',
    img: 'https://cdn.pixabay.com/photo/2016/11/29/12/30/phone-1869510_640.jpg',
  }, {
    id: 3,
    title: 'Fashion',
    img: 'https://cdn.pixabay.com/photo/2020/02/05/11/06/woman-4820889_640.jpg',
  }, {
    id: 4,
    title: 'Appliances',
    img: 'https://cdn.pixabay.com/photo/2016/10/31/18/50/washing-machine-1786385_640.png',
  }, {
    id: 5,
    title: 'Furniture',
    img: 'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_640.jpg',
  }, {
    id: 6,
    title: 'Electronics',
    img: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_640.jpg',
  }, {
    id: 7,
    title: 'Toys',
    img: 'https://cdn.pixabay.com/photo/2014/11/09/21/44/teddy-bear-524251_640.jpg',
  }];
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
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20" alt="image1" style={{ minHeight: '150px' }} />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5f478a106d047aba.jpg?q=20" alt="image2" style={{ minHeight: '150px' }} />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e3bcf0e99a7fa199.jpg?q=20" alt="image3" style={{ minHeight: '150px' }} />
        </div>
      </Slider>
    </div>
  );
}
