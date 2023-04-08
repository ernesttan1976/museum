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
      <FormControl className="EditExhibitionForm" autoComplete="off">
        <Typography className="ExhibitionEditFormTitle" variant="h4">
          Edit Exhibition
        </Typography>
        <TextField
          type="text"
          name="exhibitionTitle"
          label="Exhibition Title"
          value={exhibition.exhibitionTitle}
          inputProps={{ maxLength: 50 }}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="exhibitionTitleSub"
          label="Exhibition Subheader"
          value={exhibition.exhibitionTitleSub}
          inputProps={{ maxLength: 50 }}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="exhibitionImage"
          label="Image URL"
          value={exhibition.exhibitionImage}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="exhibitionDescription"
          label="Short Description"
          value={exhibition.exhibitionDescription}
          inputProps={{ maxLength: 200 }}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <TextField
          multiline
          rows={6}
          type="text"
          name="exhibitionInformation"
          label="Full Description"
          value={exhibition.exhibitionInformation}
          inputProps={{ maxLength: 1500 }}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <TextField
          required
          type="text"
          name="exhibitionLocation"
          label="Location"
          value={exhibition.exhibitionLocation}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />

        <FormControl
          className="Dropdown"
          fullWidth
          sx={{ m: 1 }}
          autoComplete="off"
        >
          <label>Floor</label>
          <Select
            sx={{ width: "200px" }}
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
        </FormControl>

        <FormControl
          className="Dropdown"
          fullWidth
          sx={{ m: 1 }}
          autoComplete="off"
        >
          <label>Artwork</label>
          <Select
            sx={{ width: "600px" }}
            name="artworks"
            type="text"
            onChange={handleChange}
          >
            {artworks.map((artwork) => (
              <MenuItem value={artwork._id}>{artwork.artworkTitle}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          type="date"
          name="exhibitionStartDate"
          label="Start Date"
          value={exhibition.exhibitionStartDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="date"
          name="exhibitionEndDate"
          label="End Date"
          value={exhibition.exhibitionEndDate}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="text"
          name="exhibitionEntry"
          label="Entry"
          value={exhibition.exhibitionEntry}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
        />
        <br></br>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleUpdate}
        >
          Update Exhibition
        </Button>
      </FormControl>
    </Box>
  );
}

export default ExhibitionUpdate;
