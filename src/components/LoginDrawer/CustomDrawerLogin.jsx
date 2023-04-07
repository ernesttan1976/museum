import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./CustomDrawerLogin.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AuthPage from '../../pages/AuthPage/AuthPage';
import { logout } from "../../utilities/users-service";

// const [user, setUser] = useState(getUser());

export default function CustomDrawer({user, setUser}) {
  const [isOpen, setIsOpen] = useState(false);
  
  //User's Logout 
  const handleLogout = async (user) => {
    logout();
    setUser(null);
    console.log("user has been logged out successfully.");
  };

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };

  console.log("user is " + user);
  const list = () => (
    <Box
        className="CustomDrawerLogin sticky"
        role="presentation"
        onClick={toggleDrawer(false)}>
      {user ? ( <>
          <Link to={`/users/logout`}>
          <Button onClick={handleLogout}>Log Out</Button>
          </Link>
        </>) : ( <> <AuthPage /> </> )}
    </Box>
  );

  return (
    <>
      <Button className="CustomDrawerLoginButton" onClick={toggleDrawer(true)}><PersonOutlineOutlinedIcon /></Button>
      <Drawer anchor='right' open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}