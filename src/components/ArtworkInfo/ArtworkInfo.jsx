import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
}));

export default function ArtworkInfo( props ) {
    const { artwork, selectedArtwork } = props;
    console.log( artwork);
  if (!artwork) {
    return (
    <>
    <p>No Artwork available yet</p>
    </>
  )} else { 
 
   return (
    <StyledCard className="artwork-info">
      <CardContent>  
        <Typography>Idv Artwork's Information</Typography> 
        <CardMedia
          component="img"
          height="194"
          image={artwork.artworkUrl}
          alt={artwork.artworkTitle}
        />
        <Typography variant="h5" component="h2">
          {artwork.artworkTitle}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {artwork.artistName}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Dimension: {artwork.artworkDimension}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Information: {artwork.artworkInformation}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Location: {artwork.artworkLocation}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Medium: {artwork.artworkMedium}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Year: {artwork.artworkYear}
        </Typography>
        <button>Edit</button>
        <button>Delete</button>
      </CardContent>
    </StyledCard>
  );
  }}