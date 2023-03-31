import React from 'react';
import HomePageCarousell from "../../components/HomePageCarousell/HomePageCarousell";
import ExhibitionGrid from "../../components/ExhibitionGrid/ExhibitionGrid";
import {useEffect} from 'react';
import Box from '@mui/material/Box';
import "./HomePage.css"


const HomePage = () => {

    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);

    return (
        <Box className="HomePage">
            <HomePageCarousell />
            <ExhibitionGrid />
        </Box>
    );
}

export default HomePage;
