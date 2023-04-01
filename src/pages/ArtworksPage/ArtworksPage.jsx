//! admin user -> show artworks
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import ArtworkGrid from '../../components/ArtworkGrid/ArtworkGrid';
import "./ArtworksPage.css"
 
 
export default function ArtworksPage(){
    const [artworks, setArtworks] = useState([]);
       useEffect(() => {
     fetch("/api/artworks")
       .then((response) => response.json())
       .then((data) => setArtworks(data));
   }, []);

    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);

      
    return(
        <Box className="ArtworksPage">
            <h2>Artworks</h2>
            <ArtworkGrid artworks={artworks}/>
        </Box>
    )
}

