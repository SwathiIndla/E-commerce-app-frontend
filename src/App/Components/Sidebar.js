/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FormControlLabel, Checkbox, Slider } from '@mui/material';
import {
  Sidebar, Menu, MenuItem, SubMenu,
} from 'react-pro-sidebar';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SideBar(props) {
  const [value, setValue] = React.useState([20, 37]);
  const { toggled, setToggled } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Sidebar className="side-bar" onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint={isMobile}>
      <Menu>
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
  );
}
