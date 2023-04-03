import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ExhibitionArtworksCard from "../../components/ExhibitionArtworksCard/ExhibitionArtworksCard";
import ExhibitionComments from "../../components/ExhibitionComments/ExhibitionComments";

export default function ExhibitionPage() {
  const { id } = useParams();
  const [exhibition, setExhibition] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExhibition = async () => {
      const response = await fetch(`/api/exhibitions/${id}`);
      const exhibition = await response.json();
      setExhibition(exhibition);
    };
    fetchExhibition();
  }, [id]);

  // const addExhibition = (exhibition) => setExhibition([exhibition, ...exhibitions]);
  // const delExhibition = (id) =>
  //   setExhibition(exhibitions.filter(({ _id }) => _id !== id));

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

  // if (Object.keys(exhibition).length === 0) {
  //   return (
  //     <>
  //       <p>No Exhibition Available yet</p>
  //     </>
  //   );
  // } else {

  return (
    <Box width="50ch">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <CardMedia
            component="img"
            height="194"
            image={exhibition.exhibitionImage}
            alt={exhibition.exhibitionTitle}
          />
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

          <Typography variant="h5" component="h2">
            {exhibition.exhibitionTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exhibition.exhibitionTitleSub}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Start: {exhibition.exhibitionStartDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            End: {exhibition.exhibitionEndDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exhibition.exhibitionEntry}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exhibition.exhibitionInformation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exhibition.exhibitionLocation}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {exhibition.exhibitionFloor}
          </Typography>
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
        </Grid>
      </Grid>
      <ExhibitionArtworksCard artworks={exhibition.artworks} />
      <ExhibitionComments comments={exhibition.exhibitionComments}/>
    </Box>
  );
}
