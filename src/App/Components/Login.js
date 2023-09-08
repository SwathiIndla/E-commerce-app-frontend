/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import {
  TextField, Button, IconButton, InputAdornment, Typography,
} from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const initialValues = {
    email: '',
    password: '',
  };

  const userSchema = yup.object().shape({
    email: yup.string().email().required('*required'),
    password: yup
      .string()
      .required('*required')
      .matches(passwordRegex, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'),
  });

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFormSubmit = async (values) => {
    const userDetails = { ...values, roles: ['Consumer '] };
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(URL, options);
    const responseJson = await response.json();
    const jwtToken = responseJson.jwt_token;
    Cookies.set('jwtToken', jwtToken, { expires: 90 });
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <p>Welcome! Enjoy the experience</p>
        <h2 className="heading">Login</h2>
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
                        onClick={handleClick}
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button type="submit" variant="contained" sx={{ width: '50%' }}>Login</Button>
            </form>
          )}
        </Formik>
        <Typography variant="subtitle1">
          Don&apos;t have an account ?
          <Link to="/signup" style={{ color: 'blue' }}>Signup</Link>
        </Typography>
      </div>
    </div>
  );
}
