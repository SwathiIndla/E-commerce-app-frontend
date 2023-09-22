/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  TextField, Button, IconButton, InputAdornment, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function SignUp(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setSignup } = props;
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const userSchema = yup.object().shape({
    email: yup.string().email().required('*required'),
    password: yup
      .string()
      .required('*required')
      .matches(passwordRegex, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords do not match'),

  });

  const handleFormSubmit = async (values, actions) => {
    const userDetails = { ...values, roles: ['Consumer '] };
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(URL, options);
    const responseJson = await response.json();
    const jwtToken = responseJson.jwt_token;
    actions.resetForm();
    navigate(0);
  };

  return (
    <div className="login-page">
      <div className="login-text-container">
        <Typography variant="h4" color="ghostwhite" marginBottom={2}>Looks like you're new here!</Typography>
        <Typography variant="subtitle1" color="whitesmoke">
          Sign up with email id to get started
        </Typography>
      </div>
      <div className="login-container">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values, errors, touched, handleBlur, handleChange, handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} className="login-form">
              <TextField
                variant="standard"
                placeholder="Email id"
                type="email"
                fullWidth
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={!!touched.email && errors.email}
                helperText={touched.email && errors.email}
              />
              <TextField
                variant="standard"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={!!touched.password && errors.password}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment:
                  (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        name="visibility"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                variant="standard"
                placeholder="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                fullWidth
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                error={!!touched.confirmPassword && errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
                InputProps={{
                  endAdornment:
                  (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                      >
                        {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button type="submit" variant="contained" fullWidth>Signup</Button>
            </form>
          )}
        </Formik>
        <div>
          <Typography variant="subtitle1" display="inline">  Already have an account?</Typography>
          <Button variant="text" onClick={() => (setSignup((prev) => !prev))} disableTouchRipple>Login</Button>
        </div>
      </div>
    </div>
  );
}
