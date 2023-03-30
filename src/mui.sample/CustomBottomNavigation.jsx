import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {useNavigate} from 'react-router-dom';

export default function CustomBottomNavigation() {
  const [value, setValue] = React.useState('/');

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <BottomNavigation className="CustomBottomNavigation" value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="/"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Artworks"
        value="/artworks"
        icon={<ImageSearchOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Map"
        value="/map"
        icon={<LocationOnOutlinedIcon />}
      />
    </BottomNavigation>
  );
}