import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useEffect, useState } from "react";


export default function ArtworksCard() {
 
  const [artworks, setArtworks] = useState([{ _id: "" }]);
  // console.log(artworks);
  useEffect(() => {
    fetch("/api/artworks")
      .then((response) => response.json())
      .then((data) => setArtworks(data));
  }, []);

 
   //! show artwork id's details
  // const [selectedId, setSelectedId] = useState(artworks[0]._id);
  // const selectedArtworks = artworks.find((a) => a._id === selectedId);
  // const handleHover = (id) => () => {
  //   setSelectedId(id);
  // };



  return (
    <div>
      {artworks[0].artworkTitle}
    </div>

    // <Card className="artwork" sx={{ maxWidth: 345 }}>

    //   <CardMedia
    //     component="img"
    //     height="194"
    //     image="https://mui.com/static/images/cards/paella.jpg"
    //     alt="Artworks"
    //   />
    //   <CardContent>
    //     {artworks.map((artwork) => (
    //     <Typography variant="body2" color="text.secondary" >
    //      {artwork.artistName}
    //     </Typography>
    //     ))}
    //     <Typography paragraph>
    //         .....
    //       </Typography>
    //   </CardContent>
    // </Card>
  );
}

