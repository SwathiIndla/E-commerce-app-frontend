/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Box, Button, CircularProgress } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import Header from '../../Components/Header';
import { Categories } from '../../Components/Header/Categories';
import ImageCarousel from '../../Components/Header/ImageCarousel';
import SideBar from '../../Components/Sidebar';
import DetailedCards from '../../Components/DetailedCards';
import Footer from '../../Components/Footer';
import {
  getBrandsUrl, getCategoryPropertiesUrl, mobilesFilterUrl, searchUrl,
} from '../../Environment/URL';
import './index.css';

export default function FilteredMobiles() {
  const productsToCompare = JSON.parse(localStorage.getItem('compare'));
  const [brands, setBrands] = useState([]);
  const [properties, setProperties] = useState([]);
  const [mobileData, setMobileData] = useState([]);
  const [compare, setCompare] = useState(productsToCompare || []);
  const isMobile = useMediaQuery('(max-width:768px)');
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isThisFilterPage = location.pathname.includes('filter');
  const style = {
    position: 'sticky', top: '88px', left: '0', zIndex: '10', width: '100vw',
  };

  const getMobileProperties = async () => {
    try {
      const options = {
        method: 'GET',
      };

      const response = await fetch(`${getCategoryPropertiesUrl}353b54c1-3ee2-4aee-8923-686927e4db9e`, options);
      if (response.ok) {
        const responseJson = await response.json();
        setProperties(responseJson);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getMobilesData = async () => {
    try {
      const options = {
        method: 'GET',
      };
      const url = isThisFilterPage ? `${mobilesFilterUrl}?${id[-1] === '&' ? id.slice(0, -1) : id}` : `${searchUrl}${id}`;
      const response = await fetch(url, options);
      if (response.ok) {
        const responseJson = await response.json();
        const { filteredProductItems, searchResults } = responseJson;
        setMobileData(isThisFilterPage ? filteredProductItems : searchResults);
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

      const response = await fetch(`${getBrandsUrl}353b54c1-3ee2-4aee-8923-686927e4db9e`, options);
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
    getMobilesData();
  }, []);

  const removeProductFromCompare = (e) => {
    const { ariaLabel } = e.target;
    setCompare(compare.filter((i) => i.id !== ariaLabel));
    localStorage.setItem('compare', JSON.stringify(compare.filter((i) => i.id !== ariaLabel)));
  };

  const navigateToComparePage = () => {
    navigate('/compare');
  };

  return (
    <Box>
      <Header />
      <Categories images={false} />
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
        <Box sx={isMobile ? style : { }}>
          <SideBar brands={brands} properties={properties} filter={isThisFilterPage} />
        </Box>
        <Box width={isMobile ? '100%' : '60%'} flexGrow={1}>
          <ImageCarousel />
          {mobileData.length > 0
            ? mobileData.map((data) => (
              <DetailedCards
                mobileData={data}
                key={data.productItemId}
                compare={compare}
                setCompare={setCompare}
              />
            ))
            : <Box textAlign="center"><CircularProgress /></Box>}
        </Box>
        {!isMobile && compare.length > 0 && (
          <div className="compare-button-container">
            {compare.length === 1 && <p className="compare-button-helper-text">Add 1 more product to compare</p>}
            {compare.length > 0 && (
              compare.map((element) => (
                <p className="compare-button-helper-text" key={element.id}>
                  {element.name}
                  {' '}
                  <ClearIcon className="clear-icon" aria-label={element.id} onClick={removeProductFromCompare} />
                </p>
              ))
            )}
            <button type="button" className="compare-button" disabled={compare.length === 1} onClick={navigateToComparePage}>
              COMPARED
              <span className="compare-length">{compare.length}</span>
            </button>

          </div>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
