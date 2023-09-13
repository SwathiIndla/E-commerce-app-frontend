/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  FormControlLabel, Checkbox, Slider, Button, Typography,
} from '@mui/material';
import {
  Sidebar, Menu, MenuItem, SubMenu,
} from 'react-pro-sidebar';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SideBar() {
  const [value, setValue] = useState([20, 37]);
  const isMobile = useMediaQuery('(max-width:768px)');
  const [toggled, setToggled] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="side-bar">
      <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="768px" backgroundColor="rgb(249, 249, 249)">
        <Menu>
          <Typography variant="h5" fontWeight={500} m={2} textAlign="center" letterSpacing={1} color="ThreeDShadow">Filters</Typography>
          <MenuItem>
            <Slider
              sx={{ padding: '10px', width: '150px' }}
              valueLabelDisplay="auto"
              step={20}
              color="primary"
              size="medium"
              value={value}
              onChange={handleChange}
            />
          </MenuItem>
          <SubMenu label="Details">
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
          </SubMenu>
          <SubMenu label="Details">
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
          </SubMenu>
          <SubMenu label="Details">
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
          </SubMenu>
          <SubMenu label="Details">
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
          </SubMenu>
          <SubMenu label="Details">
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
          </SubMenu>
          <SubMenu label="Details">
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
            <MenuItem>
              <FormControlLabel control={<Checkbox />} label="Specifications" />
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      {isMobile && (
        <div className="filter-button">
          <Button onClick={() => setToggled(true)} color="inherit" startIcon={<TuneOutlinedIcon />}>
            Filter
          </Button>
        </div>
      )}
    </div>
  );
}
