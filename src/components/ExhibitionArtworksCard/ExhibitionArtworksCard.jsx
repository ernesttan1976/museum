import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ExhibitionArtworksCard.css";

export default function ExhibitionArtworksCard({ artworks }) {
  if (!artworks) {
    return null;
  }

  return (
    <>
    <Typography className="title" variant="h4">Artworks</Typography>
    <br></br>
    <Card className="ArtworksCard">
        {artworks.map((artwork) => (
          <CardContent key={artwork._id}>
            <CardMedia
              component="img"
              height="200"
              image={artwork.artworkUrl}
              alt={artwork.artworkTitle}
            />{" "}
            <br></br>
            <Typography variant="body2" color="text.secondary">
              {artwork.artistName}
            </Typography>{" "}
            <p></p>
            <Typography paragraph>{artwork.artworkTitle}</Typography>
          </CardContent>
        ))}
    </Card>
    </>
  );
}
