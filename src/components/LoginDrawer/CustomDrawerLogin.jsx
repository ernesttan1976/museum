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
// const [user, setUser] = useState(getUser());

export default function CustomDrawer({user}) {
  const [isOpen, setIsOpen] = useState(false);

  //! logout testing start
   const [error, setError] = useState("No error");
  const navigate = useNavigate();
  const handleLogoutMsg = async (event) => {
    // event.preventDefault();

    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    //   const data = await response.json();
        window.alert(" account has login successfully.");
        navigate('/');
    } catch (error) {
      setError(error.message);
    }};
    
//! logout testing end

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };
console.log("user is " + user);
  const list = () => (
      <Box
        className="CustomDrawerLogin sticky"
        role="presentation"
        onClick={toggleDrawer(false)}
      >
      {user ? (
        <>
          <Link to={`/users/logout`}>
          <Button onClick={handleLogoutMsg}>Log Out</Button>
          </Link>
        </>
        ) : (
        <>
          <AuthPage />
        </>
        )}
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