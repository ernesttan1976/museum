import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./ExhibitionArtworksCard.css";

export default function ExhibitionArtworksCard({ artworks }) {
  if (!artworks || artworks.length === 0) {
    return null;
  }

  return (
    <>
      <Typography className="title" variant="h4">
        Artworks
      </Typography>
      <br></br>
      <Card className="ArtworksCard">
        {artworks.map((artwork) => (
          <CardContent key={artwork._id}>
            <CardMedia
              component="img"
              height="200"
              image={artwork.artworkUrl}
              alt={artwork.artworkTitle}
            />
            <br></br>
            <Typography variant="body2" color="text.secondary">
              {artwork.artistName}
            </Typography>
            <p></p>
            <Typography paragraph>{artwork.artworkTitle}</Typography>
          </CardContent>
        ))}
      </Card>
    </>
  );
}
