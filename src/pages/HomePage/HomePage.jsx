import React from 'react';
import CustomCarousel from '../../mui.sample/CustomCarousel';
import CustomGrid from '../../mui.sample/CustomGrid';
import CustomContainer from '../../mui.sample/CustomContainer';
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
