import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

import ExhibitionArtworksCard from "../../components/ExhibitionArtworksCard/ExhibitionArtworksCard";
import ExhibitionComments from "../../components/ExhibitionComments/ExhibitionComments";
import "./ExhibitionPage.css";

export default function ExhibitionPage({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [exhibition, setExhibition] = useState({});

  useEffect(() => {
    const fetchExhibition = async () => {
      const response = await fetch(`/api/exhibitions/${id}`);
      const exhibition = await response.json();
      setExhibition(exhibition);
    };
    fetchExhibition();
  }, [id]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/exhibitions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="ExhibitionPage">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <CardMedia
            component="img"
            image={exhibition.exhibitionImage}
            alt={exhibition.exhibitionTitle}
          />
          <Typography variant="h5" component="h2">
            {exhibition.exhibitionTitle}
          </Typography>
          <br />
          <Typography variant="subtitle1" color="text.secondary">
            {exhibition.exhibitionTitleSub}
          </Typography>
          <br />
          <Typography variant="body1" color="text.secondary">
            {exhibition.exhibitionEntry}
          </Typography>
          <br />
          <Typography variant="body1" color="text.secondary">
            {exhibition.exhibitionInformation}
          </Typography>
          <br />
          <Typography variant="body1" color="text.secondary">
            Location: {exhibition.exhibitionLocation}
          </Typography>
          <br />
          <Typography variant="p" color="text.secondary">
            Exhibition Duration:{" "}
            {new Date(exhibition.exhibitionStartDate).toLocaleDateString(
              "en-GB"
            )}{" "}
            ~{" "}
            {new Date(exhibition.exhibitionEndDate).toLocaleDateString("en-GB")}
          </Typography>
          <br />
          <br />
          <Box className="ExhibitionPageButton">
            <Button variant="outlined">
              <Link
                to="https://web.nationalgallery.sg/#/gallery-passes"
                style={{ textDecoration: "none" }}
              >
                Book
              </Link>
            </Button>
            <Button variant="outlined">
              <Link to="/map" style={{ textDecoration: "none" }}>
                Direction
              </Link>
            </Button>
          </Box>
        </Grid>
      </Grid>
      {user && user.userRole == "admin" ? (
        <>
          <br />
          <Box className="ExhibitionPageButton">
            <Link
              to={`/exhibitions/${exhibition._id}/edit`}
              style={{ textDecoration: "none" }}
            >
              <Button variant="outlined">Edit</Button>
            </Link>
            <Button
              variant="outlined"
              onClick={() => handleDelete(exhibition._id)}
            >
              Delete
            </Button>
            <br />
          </Box>
        </>
      ) : (
        <></>
      )}
      <br />
      <ExhibitionArtworksCard artworks={exhibition.artworks} />
      <br />
      <ExhibitionComments
        user={user}
        comments={exhibition.exhibitionComments}
        setExhibition={setExhibition}
      />
    </Box>
  );
}
