/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
    CircularProgress,
    Box,
    Select,
    FormControl,
    InputLabel,
} from '@mui/material';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidebar.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';

export default function SideBar(props) {
    const [searchParams] = useSearchParams();
    const maxPrice = searchParams.get('MaxPrice');
    const minPrice = searchParams.get('MinPrice');
    searchParams.delete('cid');
    const availableFilters = searchParams.toString();
    const { brands, properties, filter } = props;
    const [price, setPrice] = useState(
        filter
            ? { MinPrice: minPrice || '', MaxPrice: maxPrice || '' }
            : { MinPrice: '', MaxPrice: '' }
    );
    const [toggled, setToggled] = useState(false);
    const [filters, setFilters] = useState(
        filter && availableFilters ? availableFilters.replace('+', ' ').split('&') : []
    );
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:768px)');
    const minprices = [10000, 15000, 20000, 25000];
    const maxprices = [...minprices.filter((e) => e > price.MinPrice), 30000];

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        const newquery = `${name}=${value}`;
        if (checked) {
            setFilters([...filters, newquery]);
        } else if (filters.length === 1) {
            setFilters([]);
        } else {
            setFilters(filters.filter((element) => element !== newquery));
        }
    };

    const changePrice = (e) => {
        const { name, value } = e.target;
        const newquery = `${name}=${value === '30000+' ? '' : value}`;
        setPrice((prev) => ({ ...prev, [name]: value }));
        setFilters((prev) => {
            let ispresent = false;
            const newarray = prev.map((ele) => {
                if (ele?.includes(name)) {
                    ispresent = true;
                    return newquery;
                }
                return ele;
            });
            if (ispresent) {
                return newarray;
            }
            return [...newarray, newquery];
        });
    };
    useEffect(() => {
        setFilters(filter ? availableFilters.replace('+', ' ').split('&') : []);
    }, [searchParams.toString]);

    const applyFilter = () => {
        const filterQuery = filters?.join('&');
        if (isMobile) setToggled((prev) => !prev);
        navigate(`/mobiles/filter?${filterQuery}`);
    };

    return (
        <div className="side-bar">
            <Sidebar
                onBackdropClick={() => setToggled(false)}
                toggled={toggled}
                breakPoint="768px"
                backgroundColor="rgb(249, 249, 249)"
            >
                <Box height="80vh" overflow="auto">
                    <Menu>
                        <Typography variant="h5" textAlign="center">
                            Filters
                        </Typography>
                        <Box padding="0 1.5rem">
                            <Typography variant="subtitle1" marginBottom="1rem">
                                Price
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <FormControl fullWidth>
                                    <InputLabel>Min</InputLabel>
                                    <Select
                                        label="min"
                                        value={price.MinPrice}
                                        variant="standard"
                                        name="MinPrice"
                                        onChange={changePrice}
                                    >
                                        {minprices.map((i) => (
                                            <MenuItem value={i} key={i}>
                                                ₹{i}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel>Max</InputLabel>
                                    <Select
                                        label="max"
                                        value={price.MaxPrice}
                                        variant="standard"
                                        name="MaxPrice"
                                        onChange={changePrice}
                                    >
                                        {maxprices.map((i) => (
                                            <MenuItem value={i} key={i}>
                                                ₹{i}
                                            </MenuItem>
                                        ))}
                                        <MenuItem value="30000+">₹30000+</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <SubMenu label="Brands">
                            {brands ? (
                                brands?.map((brand, index) => (
                                    <MenuItem key={index}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox size="small" onChange={handleChange} />
                                            }
                                            label={brand.brandName}
                                            name="Brands"
                                            value={brand.brandId}
                                            checked={filters.includes(`Brands=${brand.brandId}`)}
                                        />
                                    </MenuItem>
                                ))
                            ) : (
                                <CircularProgress />
                            )}
                        </SubMenu>
                        {properties &&
                            properties.map((property) => (
                                <SubMenu
                                    label={property.propertyName.replace(/_/g, ' ')}
                                    key={property.propertyId}
                                >
                                    {property.propertyValues.map((ele) => (
                                        <MenuItem key={ele.propertyValueId}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        size="small"
                                                        onChange={handleChange}
                                                    />
                                                }
                                                label={ele.propertyValue}
                                                name={property.propertyName}
                                                value={ele.propertyValue}
                                                checked={filters.includes(
                                                    `${property.propertyName}=${ele.propertyValue}`
                                                )}
                                            />
                                        </MenuItem>
                                    ))}
                                </SubMenu>
                            ))}
                    </Menu>
                </Box>
                <Button
                    type="button"
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={applyFilter}
                >
                    {' '}
                    Apply filter
                </Button>
            </Sidebar>
            {isMobile && (
                <div className="filter-button">
                    <Button
                        onClick={() => setToggled(true)}
                        color="inherit"
                        startIcon={<TuneOutlinedIcon />}
                    >
                        Filter
                    </Button>
                    {/* <Button type="button" color="inherit" size="large" onClick={applyFilter}> Apply filter</Button> */}
                </div>
            )}
        </div>
    );
}
