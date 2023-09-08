/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import './Cards.css';
import { Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Card() {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <div className="cards" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className="card-img" style={{ backgroundSize: hover ? '400px' : 'cover' }} />
        <div className="cards-context">
          <h3>Categories</h3>
          <h2>Price</h2>
          <p>Tags,types...</p>
          <Button type="button" variant="contained" disableElevation sx={{ background: '#33eb91', '&:hover': { background: '#00a152' } }}> Buy </Button>
        </div>
      </div>
    </div>
  );
}

export default function Cards() {
  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="cards-container">
      <Slider {...settings}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Slider>
    </div>
  );
}
