import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArtworksCard from '../ArtworksCard/ArtworksCard';
import ArtworkInfo from '../ArtworkInfo/ArtworkInfo';
import { useEffect, useState } from "react";


export default function ArtworkGrid() {
  //! show the list of artworks
   const [artworks, setArtworks] = useState([{ _id: "" }]);
   
   useEffect(() => {
     fetch("/api/artworks")
       .then((response) => response.json())
       .then((data) => setArtworks(data));
   }, []);

    const [selectedId, setSelectedId] = useState("");
    const selectedArtwork = artworks.find((a) => a._id === selectedId);
    const handleHover = (id) => {setSelectedId(id);};

   return (
    <>
     <Grid className="CustomGrid" container spacing={2}>
       {artworks.map((artwork) => (
         <Grid key={artwork._id} item xs={12} sm={6} lg={3}>
           <ArtworksCard artwork={artwork} handleHover={handleHover}/>
         </Grid>
       ))}
       
     </Grid>
     
     <ArtworkInfo artwork={selectedArtwork} />
    </>
   );
}
