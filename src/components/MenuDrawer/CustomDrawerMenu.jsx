import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { red } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import "./CustomDrawerMenu.css";

export default function CustomDrawer({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("user is " + user);
  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };

  const userMenuItems = [
    {
      text: "Home",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      text: "Exhibition",
      to: "/",
      icon: <ArtTrackIcon />,
    },
    {
      text: "Artworks",
      to: "/artworks",
      icon: <ImageSearchOutlinedIcon />,
    },
    {
      text: "Map",
      to: "/map",
      icon: <LocationOnOutlinedIcon />,
    },
  ];

  const adminMenuItems = [
    {
      text: "Home",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      text: "Exhibition",
      to: "/",
      icon: <ArtTrackIcon />,
    },
    {
      text: "Artworks",
      to: "/artworks",
      icon: <ImageSearchOutlinedIcon />,
    },
    {
      text: "Map",
      to: "/map",
      icon: <LocationOnOutlinedIcon />,
    },
    {
      text: "Create Exhibition",
      to: "/exhibitions/new",
      icon: <AddCircleOutlineIcon />,
    },
    {
      text: "Create Artwork",
      to: "/artworks/new",
      icon: <AddCircleOutlineIcon />,
    },
  ];

  return (
    <div className="CustomDrawerMenuButtonContainer">
      <Button className="CustomDrawerMenuButton" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 0.5 }}
          className="CustomDrawerMenu sticky"
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          {user && user.userRole == "admin" ? (
            <List>
              {adminMenuItems.map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <Link to={item.to}>
                    <ListItemButton>
                      {item.icon && (
                        <ListItemIcon sx={{ color: red[800] }}>
                          {item.icon}
                        </ListItemIcon>
                      )}
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
            <List>
              {userMenuItems.map((item, index) => (
                <ListItem key={item.text} disablePadding>
                  <Link to={item.to}>
                    <ListItemButton>
                      {item.icon && (
                        <ListItemIcon sx={{ color: red[800] }}>
                          {item.icon}
                        </ListItemIcon>
                      )}
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Drawer>
    </div>
  );
}
