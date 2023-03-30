import React from 'react';
import CustomCarousel from '../../components/CustomCarousel/CustomCarousel';
import CustomGrid from '../../components/CustomGrid/CustomGrid';
import Box from '@mui/material/Box';

const HomePage = () => {
    return (
        <Box className="HomePage">
            <CustomCarousel />
            <CustomGrid />
        </Box>
    );
}

export default HomePage;
