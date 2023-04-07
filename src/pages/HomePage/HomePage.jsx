import React from 'react';
import HomePageCarousell from "../../components/HomePageCarousell/HomePageCarousell";
import ExhibitionAccordion from '../../components/ExhibitionAccordion/ExhibitionAccordion';
import Box from '@mui/material/Box';
import "./HomePage.css"
import {useEffect, useState} from "react";
import IconSlider from "../../components/IconSlider/IconSlider"
import Typography from '@mui/material/Typography';

function setScrollHeight() {
    const max = document.body.scrollHeight > window.innerHeight ? document.body.scrollHeight : window.innerHeight;
    document.documentElement.style.setProperty('--scroll-height', max);
    console.log("scroll height: ", document.body.scrollHeight, "max: ", max);
    return max;
  }

const HomePage = ({user}) => { 
    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);

    return (
        <Box className="HomePage">
            <>
            {user && <Typography >Welcome {user.name}</Typography>}
            <IconSlider />
            <HomePageCarousell />
            <ExhibitionAccordion id="exhibition" />
            </>
        </Box>
    );
}

export default HomePage;