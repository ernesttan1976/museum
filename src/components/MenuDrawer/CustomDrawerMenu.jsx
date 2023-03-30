import * as React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImageSearchOutlinedIcon from '@mui/icons-material/ImageSearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


export default function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };

  const menuItems = [
   {
    text: 'Home',
    to: '/',
    icon: <HomeOutlinedIcon /> ,
   },
   {
    text: 'Artworks',
    to: '/artworks',
    icon: <ImageSearchOutlinedIcon /> ,
   },
   {
    text: 'Map',
    to: '/map',
    icon: <LocationOnOutlinedIcon /> ,
   },
  ]

  const list = () => (
    <Box sx={{width: 0.5 }} className="CustomDrawerMenu sticky"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <Link to={item.to}>
            <ListItemButton>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.text} />
            </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="CustomDrawerMenuButtonContainer">
          <Button className="CustomDrawerMenuButton" onClick={toggleDrawer(true)}><MenuIcon/></Button>
          <Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
    </div>
  );
}