import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
import ImageSearchOutlinedIcon from "@mui/icons-material/ImageSearchOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MuseumOutlinedIcon from "@mui/icons-material/Museum";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

import "./CustomDrawerMenu.css";

export default function CustomDrawer({ user }) {
  const [isOpen, setIsOpen] = useState(false);

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
      icon: <MuseumOutlinedIcon />,
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
      icon: <MuseumOutlinedIcon />,
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

  const list = () => (
    <Box
      sx={{ width: 0.5 }}
      className="CustomDrawerMenu sticky"
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {user && user.userRole == "admin"? (
        <List>
          {adminMenuItems.map((item, index) => (
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
      ) : (
        <List>
          {userMenuItems.map((item, index) => (
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
      )}
    </Box>
  );

  return (
    <div className="CustomDrawerMenuButtonContainer">
      <Button className="CustomDrawerMenuButton" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}
