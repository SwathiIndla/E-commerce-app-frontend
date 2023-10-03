/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  FormControlLabel, Checkbox, Button, Typography,
  CircularProgress, Box, Select, FormControl, InputLabel,
} from '@mui/material';
import {
  Sidebar, Menu, MenuItem, SubMenu,
} from 'react-pro-sidebar';
import './Sidebar.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SideBar(props) {
  const { brands, properties, setFilter } = props;
  const [price, setPrice] = useState({ MinPrice: '', MaxPrice: '' });
  const [filters, setFilters] = useState({ Brands: [] });
  const propertyNames = { ...properties.map((e) => e.propertyName) };
  console.log(propertyNames);
  const isMobile = useMediaQuery('(max-width:768px)');
  const [toggled, setToggled] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (e.target.checked) {
      setFilter((prev) => `${prev}${prev.length > 0 ? '&' : ''}${name}=${value}`);
    } else {
      setFilter((prev) => prev.replace(`${name}=${value}&`, ''));
    }
  };
  const changePrice = (e) => {
    const { name, value } = e.target;
    setPrice((prev) => ({ ...prev, [name]: value }));
    setFilter((prev) => `${prev}${prev.length > 0 ? '&' : ''}${name}=${value}`);
  };
  const minprice = [10000, 15000, 20000, 25000];
  const maxprice = [...minprice.filter((e) => e > price.MinPrice), 30000];
  return (
    <div className="side-bar">
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="768px" backgroundColor="rgb(249, 249, 249)">
        <Menu>
          <Typography variant="h5" textAlign="center">Filters</Typography>
          <Box padding="0 1.5rem">
            <Typography variant="subtitle1" marginBottom="1rem">Price</Typography>
            <Box display="flex" justifyContent="space-between">
              <FormControl fullWidth>
                <InputLabel>Min</InputLabel>
                <Select label="min" value={price.MinPrice} variant="standard" name="MinPrice" onChange={changePrice}>
                  {minprice.map((i) => (<MenuItem value={i} key={i}>₹{i}</MenuItem>))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Max</InputLabel>
                <Select label="max" value={price.MaxPrice} variant="standard" name="MaxPrice" onChange={changePrice}>
                  {maxprice.map((i) => (<MenuItem value={i} key={i}>₹{i}</MenuItem>))}
                  <MenuItem value="">₹30000+</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <SubMenu label="Brands">
            {brands ? brands?.map((brand, index) => (
              <MenuItem key={index}>
                <FormControlLabel
                  control={<Checkbox size="small" onChange={handleChange} />}
                  name="Brands"
                  label={brand.brandName}
                  value={brand.brandId}
                />
              </MenuItem>
            )) : <CircularProgress />}
          </SubMenu>
          {properties && properties.map((property) => (
            <SubMenu label={property.propertyName.replace(/_/g, ' ')} key={property.propertyId}>
              {property.propertyValues.map((ele) => (
                <MenuItem key={ele.propertyValueId}>
                  <FormControlLabel
                    control={<Checkbox size="small" onChange={handleChange} />}
                    name={property.propertyName}
                    label={ele.propertyValue}
                    value={ele.propertyValue}
                  />
                </MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>
        {!isMobile && <Button type="button" variant="contained" size="large" fullWidth> Apply filter</Button>}
      </Sidebar>
      {isMobile && (
        <div className="filter-button">
          <Button onClick={() => setToggled(true)} color="inherit" startIcon={<TuneOutlinedIcon />}>
            Filter
          </Button>
          <Button type="button" color="inherit" size="large"> Apply filter</Button>
        </div>
      )}
    </div>
  );
}
