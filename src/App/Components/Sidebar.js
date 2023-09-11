import React from 'react';
import { FormControlLabel, Checkbox, Slider } from '@mui/material';
import {
  Sidebar, Menu, MenuItem, SubMenu,
} from 'react-pro-sidebar';

export default function SideBar() {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Sidebar className="side-bar">
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
            // min={10}
            // max={100}
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
