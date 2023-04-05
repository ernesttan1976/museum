import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./ArtworkInfo.css";
import { useNavigate } from "react-router-dom";

export default function ArtworkInfo({ user }) {
  const { id } = useParams();
  const [artwork, setArtwork] = useState({});
  const navigate = useNavigate();
  // fetch a single artwork based on a specific id passed as a dependency
  useEffect(() => {
    const fetchArtwork = async () => {
      const response = await fetch(`/api/artworks/${id}`);
      const artwork = await response.json();
      setArtwork(artwork);
    };
    fetchArtwork();
  }, [id]);

  // console.log("artist name " + artwork.artistName)

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/artworks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      navigate("/artworks");
    } catch (error) {
      console.error(error);
    }
  };

  if (Object.keys(artwork).length === 0) {
    return (
      <>
        <p>No Artwork available yet</p>
      </>
    );
  } else {
    return (
      <Box className="ArtworkInfo">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <>
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
            Floor: {artwork.artworkFloor}
          </Typography><br/>
          <Typography variant="body1" color="text.secondary">
            Medium: {artwork.artworkMedium}
          </Typography><br/>
          <Typography variant="body1" color="text.secondary">
            Year: {artwork.artworkYear}
          </Typography>

          {user && user.userRole == "admin" ? (
            <>
          <br />
          <Link to={`/artworks/${artwork._id}/edit`}>
          <Button>Edit</Button> 
          </Link><br />
          <Button onClick={() => handleDelete(artwork._id)}>Delete</Button>
          </> ) : (
            <> </>
          )}
          </>
        </Grid>
        
     </Grid></Box>
    );
  }
}

