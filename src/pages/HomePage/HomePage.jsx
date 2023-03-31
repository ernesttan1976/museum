import React from 'react';
import {useEffect} from 'react';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import CustomGrid from '../../components/CustomGrid/CustomGrid';
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
            <CustomCarousel />
            <CustomGrid />
        </Box>
    );
}

export default HomePage;
