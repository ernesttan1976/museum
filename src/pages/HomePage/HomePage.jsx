import React from 'react';
import HomePageCarousell from "../../components/HomePageCarousell/HomePageCarousell";
import ExhibitionAccordion from '../../components/ExhibitionAccordion/ExhibitionAccordion';
import Box from '@mui/material/Box';
import "./HomePage.css"
import {useEffect, useState} from "react";
import IconSlider from "../../components/IconSlider/IconSlider"

const HomePage = ({user}) => { 
    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);

    return (
        <Box className="HomePage">
            <>
            {user && <Typography variant={h2}>Welcome {user.name}</Typography>}
            <IconSlider />
            <HomePageCarousell />
            <ExhibitionAccordion />
            </>
        </Box>
    );
}

export default HomePage;
