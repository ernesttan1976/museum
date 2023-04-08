import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  minHeight: 365,
  border: '1px solid'
}));

export default function ArtworksCard(props) {
  const { artwork, onClick } = props;
 
  return (
    <Card onMouseOver={() => onClick(artwork._id)}>
    <Link to={`/artworks/${artwork._id}`}>
    <StyledCard className="artwork">
      <CardContent >   
        <CardMedia
          component="img"
          height="200"
          image={artwork.artworkUrl}
          alt={artwork.artworkTitle}
        /> <br></br>
        <Typography variant="body2" color="text.secondary">
          {artwork.artistName}
        </Typography> <p></p>
        <Typography paragraph>
          {artwork.artworkTitle}
        </Typography>
      </CardContent>
    </StyledCard> 
    </Link></Card>
  );
}