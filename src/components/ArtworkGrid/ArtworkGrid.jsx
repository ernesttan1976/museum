import * as React from 'react';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import ArtworksCard from '../ArtworksCard/ArtworksCard';
// import ArtworkInfo from '../../pages/ArtworkInfo/ArtworkInfo';
import { useEffect, useState } from "react";


export default function ArtworkGrid() {
  //! show the list of artworks
   const [artworks, setArtworks] = useState([{ _id: "" }]);
   
   useEffect(() => {
     fetch("/api/artworks")
       .then((response) => response.json())
       .then((data) => setArtworks(data));
   }, []);

    const [selectedArtwork, setSelectedArtwork] = useState(null);

    const onClick = (id) => setSelectedArtwork(artworks.find((a) => a._id === id));

   return (
    <>
     <Grid className="CustomGrid" container spacing={2}>
       {artworks.map((artwork) => (
         <Grid key={artwork._id} item xs={12} sm={6} lg={3}>
           <ArtworksCard artwork={artwork} onClick={onClick}/>
         </Grid>
       ))}
       
     </Grid>
     <Link to={`/artworks/${selectedArtwork?._id}`} artworks={artworks} />

    </>
   );
}