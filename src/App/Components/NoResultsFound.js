/* eslint-disable react/prop-types */
import React from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NoResultsImage from '../Images/error-no-search-results.png';

export default function NoResultsFound() {
  return (
    <Box margin="auto" textAlign="center">
      <img src={NoResultsImage} alt="no-results" />
      <h3>Sorry, no results found!</h3>
      <p>Please check the spelling or try searching for something else</p>
    </Box>
  );
}
export function RestrictedAccess(props) {
  const navigate = useNavigate();
  const { redirectTo, unAuthorized } = props;

  const navigateToLogin = () => {
    navigate(`/account/login?value=true&redirectTo=${redirectTo}`);
  };

  return (
    <Box margin="10%" textAlign="center">
      <img src={NoResultsImage} alt="no-results" />
      {unAuthorized ? <h3>Authorization Denied</h3> : (
        <>
          <h3>Authentication Required</h3>
          <p>Login to access this page</p>
        </>
      )}
      <Box display="flex" gap="2%" justifyContent="center" width="100%">
        {unAuthorized ? <Button variant="contained" onClick={() => navigate('/')}>Home</Button>
          : <Button variant="contained" onClick={navigateToLogin}>Login</Button>}
        <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button>
      </Box>
    </Box>
  );
}
