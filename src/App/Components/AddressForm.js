import React from 'react';
import { Formik } from 'formik';
import { TextField, Box } from '@mui/material';

export default function AddressForm() {
  const initialValues = {
    name: '',
    mobileNumber: '',
    pincode: '',
    address: '',
    district: '',
    state: '',
    landmark: '',
    additionalPhoneNumber: '',
    addressType: '',
  };
  const handleFormSubmit = (values) => {
    console.log(JSON.stringify(values));
  };

  return (
    <Box>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        // validationSchema= {}
      >
        {({
          values, errors, touched, handleBlur, handleChange, handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box>
              <TextField
                type="text"
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
              />
              <TextField
                type="text"
                label="10 digit mobile number"
                name="mobileNumber"
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mobileNumber && errors.mobileNumber}
                helperText={touched.mobileNumber && errors.mobileNumber}
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
              />
              <TextField
                type="text"
                multiline
                rows={3}
                label="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
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
              />
              <TextField
                type="select"
                label="Select your state"
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.state && errors.state}
                helperText={touched.state && errors.state}
              />
              <TextField
                type="text"
                label="Landmard(optional)"
                name="landmark"
                value={values.landmark}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.landmark && errors.landmark}
                helperText={touched.landmark && errors.landmark}
              />
              <TextField
                type="number"
                label="Additional mobile number(optional)"
                name="additionalPhoneNumber"
                value={values.additionalPhoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.additionalPhoneNumber && errors.additionalPhoneNumber}
                helperText={touched.additionalPhoneNumber && errors.additionalPhoneNumber}
              />
              <TextField
                type="ra"
                label="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}
