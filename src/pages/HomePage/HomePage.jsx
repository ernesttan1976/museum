import React from 'react';
import HomePageCarousell from "../../components/HomePageCarousell/HomePageCarousell";
import ExhibitionGrid from "../../components/ExhibitionGrid/ExhibitionGrid";
import Box from '@mui/material/Box';


const HomePage = () => {
    return (
        <Box className="HomePage">
            <HomePageCarousell />
            <ExhibitionGrid />
        </Box>
    );
}

export default HomePage;
