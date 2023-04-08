import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./ExhibitionUpdate.css";

function ExhibitionUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exhibition, setExhibition] = useState({});
  const [artworks, setArtwork] = useState([]);

  useEffect(() => {
    const fetchExhibition = async () => {
      const response = await fetch(`/api/exhibitions/${id}`);
      const exhibition = await response.json();
      setExhibition(exhibition);
    };
    fetchExhibition();
  }, [id]);

  useEffect(() => {
    const fetchArtwork = async () => {
      const response = await fetch("/api/artworks");
      const artworks = await response.json();
      setArtwork(artworks);
    };
    fetchArtwork();
  }, [id]);

  function handleChange(event) {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value;
    setExhibition({ ...exhibition, [key]: value });
  }

  const handleUpdate = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/exhibitions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exhibition),
    });
    console.log("exhibition info updated");
    navigate("/");
    return response.json();
  };

  return (
    <Box
      className="ExhibitionFormContainer"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "150ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl fullWidth sx={{ m: 20 }} autoComplete="off">
        <Typography className="ExhibitionFormTitle" variant="h4" style={{ width: "500px"}}>
          Update Page
        </Typography>
        <Typography>Exhibition Title:</Typography>
        <TextField
          type="text"
          name="exhibitionTitle"
          value={exhibition.exhibitionTitle}
          inputProps={{ maxLength: 50 }}
          onChange={handleChange}
        />
        <Typography>Exhibition Subheader:</Typography>
        <TextField
          type="text"
          name="exhibitionTitleSub"
          value={exhibition.exhibitionTitleSub}
          inputProps={{ maxLength: 50 }}
          onChange={handleChange}
        />
        <Typography>Image URL:</Typography>
        <TextField
          type="text"
          name="exhibitionImage"
          value={exhibition.exhibitionImage}
          onChange={handleChange}
        />
        <Typography>Short Description:</Typography>
        <TextField
          type="text"
          name="exhibitionDescription"
          value={exhibition.exhibitionDescription}
          inputProps={{ maxLength: 200 }}
          onChange={handleChange}
        />
        <Typography>Full Description:</Typography>
        <TextField
          multiline
          rows={6}
          type="text"
          name="exhibitionInformation"
          value={exhibition.exhibitionInformation}
          inputProps={{ maxLength: 1500 }}
          onChange={handleChange}
        />
        <label>Location:</label>
        <TextField
          required
          type="text"
          name="exhibitionLocation"
          value={exhibition.exhibitionLocation}
          onChange={handleChange}
        />
        <Typography>Floor:</Typography>
        <br></br>
        <Select
          name="exhibitionFloor"
          label="Floor"
          value={exhibition.exhibitionFloor}
          type="text"
          onChange={handleChange}
        >
          <MenuItem value="B1">B1</MenuItem>
          <MenuItem value="L1">L1</MenuItem>
          <MenuItem value="L2">L2</MenuItem>
          <MenuItem value="L3">L3</MenuItem>
          <MenuItem value="L4">L4</MenuItem>
          <MenuItem value="L5">L5</MenuItem>
          <MenuItem value="L6">L6</MenuItem>
        </Select>
        <Typography>Select Artwork:</Typography>
        <Select name="artworks" type="text" onChange={handleChange}>
          {artworks.map((artwork) => (
            <MenuItem value={artwork._id}>{artwork.artworkTitle}</MenuItem>
          ))}
        </Select>
        <label>Start Date:</label>
        <TextField
          type="date"
          name="exhibitionStartDate"
          value={exhibition.exhibitionStartDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <label>End Date:</label>
        <TextField
          type="date"
          name="exhibitionEndDate"
          value={exhibition.exhibitionEndDate}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <label>Entry:</label>
        <TextField
          type="text"
          name="exhibitionEntry"
          value={exhibition.exhibitionEntry}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleUpdate}
        >
          Update
        </Button>
      </FormControl>
    </Box>
  );
}

export default ExhibitionUpdate;
