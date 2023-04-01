import * as React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import "./ArtworkInfo.css";

export default function ArtworkInfo() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState({});

  // fetch a single artwork based on a specific id passed as a dependency
  useEffect(() => {
    const fetchArtwork = async () => {
      const response = await fetch(`/api/artworks/${id}`);
      const artwork = await response.json();
      setArtwork(artwork);
    };
    fetchArtwork();
  }, [id]);

  console.log("artist name " + artwork.artistName)

  if (Object.keys(artwork).length === 0) {
    return (
      <>
        <p>No Artwork available yet</p>
      </>
    )
  } else {

    return (
      <Box className="ArtworkInfo">
      <Grid container spacing={2}>
        <Grid xs={12}>
        {/* <CardContent> */}
          {/* <Typography>Idv Artwork's Information</Typography> */}
          <CardMedia className="ArtworkInfoImg"
            component="img"
            image={artwork.artworkUrl}
            alt={artwork.artworkTitle}
          />
          <Typography variant="h5" component="h2">
            {artwork.artworkTitle}
          </Typography> <br/>
          <Typography variant="subtitle1" color="text.secondary">
            {artwork.artistName}
          </Typography><br/>
          <Typography variant="body1" color="text.secondary">
            Dimension: {artwork.artworkDimension}
          </Typography><br/>
          <Typography variant="body1" color="text.secondary">
            Information: {artwork.artworkInformation}
          </Typography><br/>
          <Typography variant="body1" color="text.secondary">
            Location: {artwork.artworkLocation}
          </Typography><br/>
          <Typography variant="body1" color="text.secondary">
            Medium: {artwork.artworkMedium}
          </Typography><br/>
          <Typography variant="body1" color="text.secondary">
            Year: {artwork.artworkYear}
          </Typography>
          <br />
          <button>Edit</button>
          <br />
          <button>Delete</button>
        {/* </CardContent> */}
        </Grid>
     </Grid></Box>
    );
  }
}
