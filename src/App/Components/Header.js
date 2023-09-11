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
} from '@mui/material';
import './Header.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import logo from './favicon.ico';
import Login from './Login';
import SignUp from './SignUp';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [signup, setSignup] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setSignup(false);
    setOpen(false);
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
        <img src={logo} alt="logo" width="60px" height="40px" style={{ background: 'white' }} />
        <Typography variant="h5">E-Commerce</Typography>
        <TextField
          placeholder="search for products"
          variant="outlined"
          size="small"
          InputProps={{ endAdornment: (<InputAdornment position="end"><SearchIcon sx={{ cursor: 'pointer' }} /></InputAdornment>) }}
          sx={{
            width: '40%', background: 'whitesmoke', color: 'white', borderRadius: '4px',
          }}
        />
        <Button variant="contained" onClick={handleOpen} sx={{ background: 'whitesmoke', color: 'grey', '&:hover': { background: 'rgb(116, 140, 247)', color: 'ghostwhite' } }}>Login</Button>
        <Button variant="text" startIcon={<ShoppingCartIcon />} sx={{ color: 'whitesmoke' }}>Cart</Button>
      </nav>
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
  return (
    <div>
      <div className="container">
        {
          categories.map((item) => (
            <MiniCard item={item} key={item.id} images={images} />
          ))
        }

      </div>
    </div>
  );
}

export function ImageCarousel() {
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} dynamicHeight autoPlay infiniteLoop>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20" alt="image1" height="270px" />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5f478a106d047aba.jpg?q=20" alt="image2" height="270px" />
        </div>
        <div>
          <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/e3bcf0e99a7fa199.jpg?q=20" alt="image3" height="270px" />
        </div>
      </Carousel>
    </div>
  );
}

export function MiniCard(props) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { item, images } = props;
  const handleOPen = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
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
      {openMenu
              && (
              <div className="dropdown-menu" onMouseEnter={handleOPen}>
                <p className="dropdown-item" onClick={handleClose}>Profile</p>
                <p className="dropdown-item" onClick={handleClose}>About</p>
                <p className="dropdown-item" onClick={handleClose}>Details</p>
                <p className="dropdown-item" onClick={handleClose}>Help</p>
              </div>
              )}

    </div>
  );
}
