import React from 'react';
import HomePageCarousell from "../../components/HomePageCarousell/HomePageCarousell";
import ExhibitionAccordion from '../../components/ExhibitionAccordion/ExhibitionAccordion';
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
            <ExhibitionAccordion />
        </Box>
    );
}

export default HomePage;
