/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Box, Button, CircularProgress, IconButton,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  useNavigate, useLocation, useSearchParams,
} from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import Header from '../../Components/Header';
import { Categories } from '../../Components/Header/Categories';
import SideBar from '../../Components/Sidebar';
import DetailedCards from '../../Components/DetailedCards';
import Footer from '../../Components/Footer';
import {
  getBrandsUrl, getCategoryPropertiesUrl, mobilesFilterUrl, searchUrl,
} from '../../Environment/URL';
import './index.css';
import NoResultsFound from '../../Components/NoResultsFound';

export default function FilteredMobiles() {
  const productsToCompare = JSON.parse(localStorage.getItem('compare'));
  const [brands, setBrands] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [properties, setProperties] = useState([]);
  const [mobileData, setMobileData] = useState([]);
  const [compare, setCompare] = useState(productsToCompare || []);
  const [isRequestedDataAvailable, setIsRequestedDataAvailable] = useState(true);
  const isMobile = useMediaQuery('(max-width:768px)');
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('value');
  const query = searchParams.toString();
  const navigate = useNavigate();
  const location = useLocation();
  const isThisFilterPage = location.pathname.includes('filter');
  const style = {
    position: 'sticky', top: '86px', left: '0', zIndex: '9',
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
      } else {
        console.log(response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getMobilesData = async () => {
    setIsRequestedDataAvailable(true);
    try {
      const options = {
        method: 'GET',
      };
      const url = isThisFilterPage ? `${mobilesFilterUrl}?${query[-1] === '&' ? query.slice(0, -1) : query}&page=${page}` : `${searchUrl}${searchValue}&page=${page}`;
      const response = await fetch(url, options);
      if (response.ok) {
        const responseJson = await response.json();
        const {
          filteredProductItems, searchResults, totalSearchResults, totalFilterResults,
        } = responseJson;
        setMobileData(isThisFilterPage ? filteredProductItems : searchResults);
        setTotalPages(isThisFilterPage ? Math.ceil(totalFilterResults / 20) : Math.ceil(totalSearchResults / 20));
      }
      if (response.status === 404) {
        setIsRequestedDataAvailable(false);
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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setPage(1);
  }, [query]);

  useEffect(() => {
    getMobilesData();
  }, [query, page]);

  const removeProductFromCompare = (e) => {
    const { ariaLabel } = e.target;
    const newArray = compare.filter((i) => i.id !== ariaLabel);
    localStorage.setItem('compare', JSON.stringify(compare.filter((i) => i.id !== ariaLabel)));
    setCompare([...newArray]);
  };

  const navigateToComparePage = () => {
    navigate('/compare');
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <Box>
      <Header />
      <Categories images={false} />
      <Box display="flex" flexDirection={isMobile ? 'column' : 'row'} marginBottom="1rem">
        <Box sx={isMobile ? style : {
          position: 'sticky', top: '65px', zIndex: '9', height: '100%',
        }}
        >
          <SideBar brands={brands} properties={properties} filter={isThisFilterPage} />
        </Box>
        <Box width={isMobile ? '100%' : '60%'} flexGrow={1}>
          {isRequestedDataAvailable ? (mobileData.length > 0
            ? mobileData.map((data) => (
              <DetailedCards
                mobileData={data}
                key={data.productItemId}
                compare={compare}
                setCompare={setCompare}
              />
            ))
            : <Box textAlign="center"><CircularProgress /></Box>)
            : <NoResultsFound />}
        </Box>
        {!isMobile && compare.length > 0 && (
          <div className="compare-button-container">
            {compare.length === 1 && <p className="compare-button-helper-text">Add 1 more product to compare</p>}
            {compare.length > 0 && (
              compare.map((element) => (
                <p className="compare-button-helper-text" key={element.id}>
                  {element.name}
                  {' '}
                  <IconButton
                    disableTouchRipple
                    aria-label={element.id}
                    onClick={removeProductFromCompare}
                  >
                    <ClearIcon className="clear-icon" aria-label={element.id} />
                  </IconButton>
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
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button sx={{ fontSize: '2rem', color: 'black' }} onClick={prevPage} disabled={page === 1}>&#8249;</Button>
        <span>{` page ${page} of ${totalPages}`}</span>
        <Button sx={{ fontSize: '2rem', color: 'black' }} onClick={nextPage} disabled={page === totalPages}>&#8250;</Button>
      </Box>
      <Footer />
    </Box>
  );
}
