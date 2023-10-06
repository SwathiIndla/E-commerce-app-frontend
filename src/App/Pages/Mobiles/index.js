/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header';
import { Categories } from '../../Components/Header/Categories';
import ImageCarousel from '../../Components/Header/ImageCarousel';
import SideBar from '../../Components/Sidebar';
import DetailedCards from '../../Components/DetailedCards';
import Footer from '../../Components/Footer';
import { Brands } from '../../Components/ColoredCards';
import { getBrandsUrl, getCategoryPropertiesUrl, mobilesFilterUrl } from '../../Environment/URL';

export default function Mobiles() {
  const [brands, setBrands] = useState([]);
  const [properties, setProperties] = useState([]);
  const [mobileData, setMobileData] = useState([]);
  const isMobile = useMediaQuery('(max-width:768px)');
  const { id } = useParams();
  const style = {
    position: 'sticky', top: '88px', left: '0', zIndex: '10', width: '100vw',
  };

  const getMobileProperties = async () => {
    try {
      const options = {
        method: 'GET',
      };

      const response = await fetch(`${getCategoryPropertiesUrl}${id}`, options);
      if (response.ok) {
        const responseJson = await response.json();
        setProperties(responseJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getFilteredMobiles = async () => {
    try {
      const options = {
        method: 'GET',
      };

      const response = await fetch(mobilesFilterUrl, options);
      if (response.ok) {
        const responseJson = await response.json();
        setMobileData(responseJson.filteredProductItems);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getBrands = async () => {
    try {
      const options = {
        method: 'GET',
      };

      const response = await fetch(`${getBrandsUrl}${id}`, options);
      if (response.ok) {
        const responseJson = await response.json();
        setBrands(responseJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBrands();
    getMobileProperties();
    getFilteredMobiles();
  }, []);

  return (
    <Box>
      <Header />
      <Categories images={false} />
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
        <Box sx={isMobile ? style : { }}>
          <SideBar brands={brands} properties={properties} />
        </Box>
        <Box width={isMobile ? '100%' : '60%'} flexGrow={1}>
          <ImageCarousel />
          {/* <Brands /> */}
          {mobileData.length > 0
            ? mobileData.map((data) => <DetailedCards mobileData={data} key={data.productItemId} />)
            : <Box textAlign="center"><CircularProgress /></Box>}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
