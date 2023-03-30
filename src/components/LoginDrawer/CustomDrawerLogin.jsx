import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import AuthPage from '../../pages/AuthPage/AuthPage';

export default function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };


  const list = () => (
    <Box
      className="CustomDrawerLogin sticky"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <AuthPage />
    </Box>
  );

  return (
    <>
      <Button className="CustomDrawerLoginButton" onClick={toggleDrawer(true)}><MenuIcon /></Button>
      <Drawer anchor='right' open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}