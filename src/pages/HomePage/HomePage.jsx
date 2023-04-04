import React from 'react';
import HomePageCarousell from "../../components/HomePageCarousell/HomePageCarousell";
import ExhibitionAccordion from '../../components/ExhibitionAccordion/ExhibitionAccordion';
import Box from '@mui/material/Box';
import "./HomePage.css"
import {useEffect, useState} from "react";

const HomePage = ({user}) => { 
    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);

    return (
        <Box className="HomePage">
            {/* <h1>{JSON.stringify(user)}</h1> */}
            <>Welcome {user.name}</>
            <HomePageCarousell />
            <ExhibitionAccordion />
        </Box>
    );
}

export default HomePage;
