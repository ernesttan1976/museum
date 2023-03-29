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
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LanguageIcon from '@mui/icons-material/Language';

export default function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };

  const menuItems = [
   {
    text: 'Home',
    to: '/',
    icon: <HomeIcon /> ,
   },
   {
    text: 'Galleries',
    to: '/galleries',
    icon: <CollectionsIcon /> ,
   },
   {
    text: 'Scan',
    to: '/scan',
    icon: <QrCodeScannerIcon /> ,
   },
   {
    text: 'Language',
    to: '/language',
    icon: <LanguageIcon /> ,
   },
  ]

  const list = () => (
    <Box
      sx={{ width: 250 }}
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
    <>
          <Button onClick={toggleDrawer(true)}><MenuIcon/></Button>
          <Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
    </>
  );
}