import React from 'react';
import HomePageCarousell from "../../components/HomePageCarousell/HomePageCarousell";
import ExhibitionAccordion from '../../components/ExhibitionAccordion/ExhibitionAccordion';

import Box from '@mui/material/Box';


const HomePage = () => {
    return (
        <Box className="HomePage">
            <HomePageCarousell />
            <ExhibitionAccordion />
        </Box>
    );
}

export default HomePage;
