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
import { Brands } from '../../Components/DetailedCards/ColoredCards';
import { getBrandsUrl, getCategoryPropertiesUrl, mobilesFilterUrl } from '../../Environment/URL';

export default function Mobiles() {
  const [brands, setBrands] = useState([]);
  const [properties, setProperties] = useState([]);
  const [mobileData, setMobileData] = useState([]);
  const [filter, setFilter] = useState('');
  const [productsData, setProductsData] = useState([]);
  const isMobile = useMediaQuery('(max-width:768px)');
  const { id } = useParams();
  const style = {
    position: 'sticky', top: '88px', left: '0', zIndex: '10', width: '100vw',
  };
  useEffect(() => async () => {
    const options = {
      method: 'GET',
    };

    const response = await fetch(`${getBrandsUrl}${id}`, options);
    const responseJson = await response.json();
    setBrands(responseJson);
  }, []);

  useEffect(() => async () => {
    const options = {
      method: 'GET',
    };

    const response = await fetch(`${getCategoryPropertiesUrl}${id}`, options);
    const responseJson = await response.json();
    setProperties(responseJson);
  }, []);

  useEffect(() => async () => {
    const options = {
      method: 'GET',
    };

    const response = await fetch(mobilesFilterUrl, options);
    const responseJson = await response.json();
    setMobileData(responseJson.filteredProductItems);
  }, []);
  console.log(filter);
  return (
    <Box>
      <Header />
      <Categories images={false} />
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
        <Box sx={isMobile ? style : { height: '80vh', overflowY: 'scroll' }}>
          <SideBar brands={brands} properties={properties} setFilter={setFilter} />
        </Box>
        <Box width={isMobile ? '100%' : '60%'} flexGrow={1}>
          <ImageCarousel />
          {mobileData.length > 0
            ? mobileData.map((data) => <DetailedCards mobileData={data} />)
            : <CircularProgress />}
          {mobileData.length > 0
            ? mobileData.map((data) => <DetailedCards mobileData={data} />)
            : <CircularProgress />}
          {/* <Brands /> */}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
