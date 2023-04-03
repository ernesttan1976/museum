import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

function ExhibitionNew() {
  const [exhibitions, setExhibition] = useState([]);

  // add exhibition
  const addExhibition = (exhibition) =>
    setExhibition([exhibition, ...exhibitions]);

  const [data, setData] = useState({
    exhibitionTitle: "",
    exhibitionTitleSub: "",
    exhibitionImage: "",
    exhibitionDescription: "",
    exhibitionInformation: "",
    exhibitionLocation: "",
    exhibitionStartDate: "",
    exhibitionEndDate: "",
    exhibitionEntry: "",
    // artworks:[],
  });

  const [floor, setFloor] = useState("B1");

  const handleFloorChange = (event) => {
    setFloor(event.target.value);
  };

  function handleChange(ev) {
    setData({ ...data, [ev.target.name]: ev.target.value });
  }

  const navigate = useNavigate();

  const handleAddNewExhibition = async () => {
    const response = await fetch("/api/exhibitions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const exhibition = await response.json();
    addExhibition(exhibition);
    console.log("new exhibition submitted");
    navigate("/");
  };

  function handleSubmit(ev) {
    ev.preventDefault();
    alert(JSON.stringify(data));
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormControl fullWidth sx={{ m: 10 }} autoComplete="off">
        <Typography variant="h4">Add New Exhibition</Typography>
        <div>
          <TextField
            required
            label="Exhibition Title"
            type="text"
            name="exhibitionTitle"
            value={data.exhibitionTitle}
            onChange={handleChange}
          />
          <TextField
            required
            label="Subheader"
            type="text"
            name="exhibitionTitleSub"
            value={data.exhibitionTitleSub}
            onChange={handleChange}
          />
          <TextField
            required
            label="Image URL"
            type="text"
            name="exhibitionImage"
            value={data.exhibitionImage}
            onChange={handleChange}
          />
          <TextField
            required
            label="Short Description"
            type="text"
            name="exhibitionDescription"
            value={data.exhibitionDescription}
            onChange={handleChange}
          />
          <TextField
            required
            multiline
            rows={6}
            label="Full Description"
            type="text"
            name="exhibitionInformation"
            value={data.exhibitionInformation}
            onChange={handleChange}
          />
          {/* <TextField
            required
            label="Unit"
            type="Number"
            name="locationUnit"
            value={data.locationUnit}
            onChange={handleChange}
          />
          <InputLabel>Floor</InputLabel>
          <Select name="locationFloor" value={data.locationFloor} label="floor" onChange={handleFloorChange}>
            <MenuItem value="B1">B1</MenuItem>
            <MenuItem value="L1">L1</MenuItem>
          </Select> */}
          <TextField
            label="Start Date"
            type="date"
            name="exhibitionStartDate"
            value={data.exhibitionStartDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="End Date"
            type="date"
            name="exhibitionEndDate"
            value={data.exhibitionEndDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            label="Entry"
            type="text"
            name="exhibitionEntry"
            value={data.exhibitionEntry}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleAddNewExhibition}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}

export default ExhibitionNew;
