import React from "react";
import HomePageCarousell from "../../components/HomePageCarousell/HomePageCarousell";
import ExhibitionAccordion from "../../components/ExhibitionAccordion/ExhibitionAccordion";
import Box from "@mui/material/Box";
import "./HomePage.css";
import { useEffect } from "react";
import IconSlider from "../../components/IconSlider/IconSlider";
import Typography from "@mui/material/Typography";

const HomePage = ({ user }) => {
  useEffect(() => {
    setScrollHeight();
  }, []);

  return (
    <Box className="HomePage">
      <>
        {user && <Typography>Welcome {user.name}</Typography>}
        <IconSlider />
        <HomePageCarousell />
        <ExhibitionAccordion id="exhibition" />
      </>
    </Box>
  );
};

export default HomePage;
