/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  TextField, Box, FormControl, FormControlLabel, FormLabel,
  Radio, RadioGroup, Button, MenuItem, InputLabel, Select, FormHelperText, Typography,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { states } from '../../Data/data';

export default function AddressForm(props) {
  const { setShowAddressForm, heading } = props;
  const isNonMobile = useMediaQuery('(min-width:600px)');
  const mobileNumberRegex = '[6-9]{1}[0-9]{9}';
  const pincodeRegex = '^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$';
  const initialValues = {
    name: '',
    mobileNumber: '',
    pincode: '',
    locality: '',
    address: '',
    district: '',
    state: '',
    landmark: '',
    additionalPhoneNumber: '',
    addressType: '',
  };
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const userSchema = yup.object().shape({
    name: yup.string().required('*required'),
    mobileNumber: yup.string().required('*required').matches(mobileNumberRegex, 'enter a valid mobile number'),
    pincode: yup.string().required('*required').matches(pincodeRegex, 'enter a valid pincode'),
    locality: yup.string().required('*required'),
    address: yup.string().required('*required'),
    district: yup.string().required('*required'),
    state: yup.string().required('*required'),
    landmark: yup.string(),
    additionalPhoneNumber: yup.string().matches(mobileNumberRegex, 'enter a valid mobile number'),
    addressType: yup.string().required('*required'),
  });

  return (
    <Box width="fit-content" bgcolor="whitesmoke" p="2rem">
      <Typography variant="h5" sx={{ color: '#519fec' }} marginBottom={2}>{`${heading} Address`}</Typography>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={Object.keys(props).length > 2 ? props.data : initialValues}
        validationSchema={userSchema}
      >
        {({
          values, errors, touched, handleBlur, handleChange, handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
              }}
            >
              <TextField
                type="text"
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                type="text"
                label="Mobile number"
                name="mobileNumber"
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mobileNumber && errors.mobileNumber}
                helperText={touched.mobileNumber && errors.mobileNumber}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                type="text"
                label="Pincode"
                name="pincode"
                value={values.pincode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.pincode && errors.pincode}
                helperText={touched.pincode && errors.pincode}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                type="text"
                label="Locality"
                name="locality"
                value={values.locality}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.locality && errors.locality}
                helperText={touched.locality && errors.locality}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                type="text"
                multiline
                rows={3}
                label="Address(Area and street)"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ gridColumn: 'span 4' }}
                error={touched.address && errors.address}
                helperText={touched.address && errors.address}
              />
              <TextField
                type="text"
                label="District"
                name="district"
                value={values.district}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.district && errors.district}
                helperText={touched.district && errors.district}
                sx={{ gridColumn: 'span 2' }}
              />
              <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
                <InputLabel
                  id="select-state"
                  error={touched.state && errors.state}
                >
                  Select your state
                </InputLabel>
                <Select
                  labelId="select-state"
                  label="Select your state"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.state && errors.state}
                >
                  {states.map((state) => (<MenuItem value={state}>{state}</MenuItem>))}
                </Select>
                <FormHelperText error={touched.state && errors.state}>
                  {touched.state && errors.state}
                </FormHelperText>
              </FormControl>
              <TextField
                type="text"
                label="Landmard(optional)"
                name="landmark"
                value={values.landmark}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.landmark && errors.landmark}
                helperText={touched.landmark && errors.landmark}
                sx={{ gridColumn: 'span 2' }}
              />
              <TextField
                type="text"
                label="Additional mobile number(optional)"
                name="additionalPhoneNumber"
                value={values.additionalPhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.additionalPhoneNumber && errors.additionalPhoneNumber}
                helperText={touched.additionalPhoneNumber && errors.additionalPhoneNumber}
                sx={{ gridColumn: 'span 2' }}
              />
              <FormControl>
                <FormLabel
                  id="addresstype-radio-buttons-group"
                  error={touched.addressType && errors.addressType}
                >
                  Address Type
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="addresstype-radio-buttons-group"
                  name="addressType"
                  value={values.addressType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.addressType && errors.addressType}
                  sx={{ gridColumn: 'span 4' }}
                >
                  <FormControlLabel value="Home" control={<Radio />} label="Home" />
                  <FormControlLabel value="Work" control={<Radio />} label="Work" />
                </RadioGroup>
                <FormHelperText error={touched.addressType && errors.addressType}>
                  {touched.addressType && errors.addressType}
                </FormHelperText>
              </FormControl>
              <Box sx={{ gridColumn: 'span 4' }}>
                <Button type="submit" variant="contained" sx={{ width: '200px' }}>Save</Button>
                <Button type="button" variant="text" onClick={() => setShowAddressForm(false)}>Cancel</Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
