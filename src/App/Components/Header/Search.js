/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
// src/components/AutocompleteOnlineSearch.js
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import {
  TextField, Box, Typography, InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { searchUrl } from '../../Environment/URL';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    const getSuggestion = setTimeout(async () => {
      const options = {
        method: 'GET',
      };
      try {
        const response = await fetch(`${searchUrl}${value}`, options);
        const responseJson = await response.json();
        const { searchResults } = responseJson;
        searchResults ? setSuggestions(searchResults) : setSuggestions([]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }, 500);
    return () => clearTimeout(getSuggestion);
  };

  return (
    <Box width="100%" position="relative">
      <TextField
        placeholder="search for products"
        variant="outlined"
        size="small"
        fullWidth
        value={inputValue}
        onChange={handleChange}
        InputProps={{ endAdornment: (<InputAdornment position="end"><SearchIcon sx={{ cursor: 'pointer' }} /></InputAdornment>) }}
        sx={{
          background: 'whitesmoke', color: 'white', position: 'relative',
        }}
      />
      {suggestions.length > 0 && (
      <Box
        alignItems="center"
        sx={{
          width: '100%',
          background: 'white',
          color: 'black',
          border: '1px solid black',
          position: 'absolute',
          zIndex: '9999',
        }}
      >
        {suggestions.map((suggestion) => (
          <Link to={`/product/${suggestion.productItemId}`} className="search-link">
            <Typography variant="body2" sx={{ borderBottom: '1px solid gray', padding: '.5rem' }}>
              {suggestion.productItemName}
            </Typography>
          </Link>
        ))}
      </Box>
      )}
    </Box>
  );
}

export default Search;
