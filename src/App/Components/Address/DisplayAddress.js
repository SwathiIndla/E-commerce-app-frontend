/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
import {
  Box, Button, Typography, IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddressForm from './AddressForm';

export default function DisplayAddress(props) {
  const [show, setShow] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const { data } = props;
  const ref = useRef();
  const handleClick = () => {
    setShow((prev) => !prev);
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [handleClick]);

  return (
    <div>
      {editAddress ? (<AddressForm heading="Edit" setShowAddressForm={setEditAddress} data={{ ...data }} />)
        : (
          <Box p={2} border="solid 1px gray">
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
              <Typography
                variant="subtitle1"
                sx={{
                  backgroundColor: 'gray',
                  width: 'fit-content',
                  padding: '4px',
                  color: 'ghostwhite',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              >
                {data.addressType}
              </Typography>
              <Box position="relative">
                <IconButton onClick={handleClick} ref={ref}>
                  <MoreVertIcon />
                </IconButton>
                {show && (
                  <Box display="flex" flexDirection="column" bgcolor="ghostwhite" borderRadius={1} boxShadow={2} zIndex="999" position="absolute" right="0">
                    <Button color="inherit" disableTouchRipple size="small" onClick={() => setEditAddress(true)}>Edit</Button>
                    <Button color="inherit" disableTouchRipple size="small">Delete</Button>
                  </Box>
                )}
              </Box>
            </Box>
            <Typography sx={{ fontWeight: '500' }}>
              {data.customerName}
              {' '}
              {data.phoneNumber}
            </Typography>
            <Typography>
              { `${data.streetAddress},${data.city},${data.stateProvince},${data.country}-${data.postalcode}`}
            </Typography>
          </Box>
        )}
    </div>
  );
}
