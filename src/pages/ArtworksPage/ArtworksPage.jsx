import Box from '@mui/material/Box';
import "./ArtworksPage.css"
import {useEffect} from 'react';

export default function Artworks(){

    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);

    return(
        <Box className="ArtworksPage">
            <h2>Artworks</h2>
        </Box>
    )
}