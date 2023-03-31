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
    <Card className="artwork" sx={{ maxWidth: 345 }}>
    <CardContent>
      {artworks.map((artwork) => (
    <React.Fragment key={artwork._id}>
      <CardMedia
        component="img"
        height="194"
        image={artwork.artworkUrl}
        alt="The Commandant"
      />
      <Typography variant="body2" color="text.secondary">
        {artwork.artistName}
      </Typography>
      <Typography paragraph>
        {artwork.artworkTitle}
      </Typography>
    </React.Fragment>
    ))}
  </CardContent>

  </Card>
  );
}

