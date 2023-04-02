import * as React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

function ExhibitionUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [exhibition, setExhibition] = useState({});

  useEffect(() => {
    const fetchExhibition = async () => {
      const response = await fetch(`/api/exhibitions/${id}/edit`);
      const exhibition = await response.json();
      setExhibition(exhibition);
    };
    fetchExhibition();
  }, [id]);

  const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setExhibition({ ...exhibition, [key]: value });
  };

  const handleUpdate = async () => {
    const response = await fetch(`/api/exhibitions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exhibition),
    });
    // console.log("exhibition info updated");
    // navigate("/");
    return response.json();
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5">Update Page</Typography>
      <FormControl fullWidth sx={{ m: 10 }} autoComplete="off">
        <div>
          <TextField
            required
            label="Exhibition Title"
            type="text"
            name="exhibitionTitle"
            value={exhibition.exhibitionTitle}
            onChange={handleChange}
          />
          <TextField
            required
            label="Subheader"
            type="text"
            name="exhibitionTitleSub"
            value={exhibition.exhibitionTitleSub}
            onChange={handleChange}
          />
          <TextField
            required
            label="Image URL"
            type="text"
            name="exhibitionImage"
            value={exhibition.exhibitionImage}
            onChange={handleChange}
          />
          <TextField
            required
            label="Short Description"
            type="text"
            name="exhibitionDescription"
            value={exhibition.exhibitionDescription}
            onChange={handleChange}
          />
          <TextField
            required
            multiline
            rows={6}
            label="Full Description"
            type="text"
            name="exhibitionInformation"
            value={exhibition.exhibitionInformation}
            onChange={handleChange}
          />
          {/* <TextField
            required
            label="Location"
            type="text"
            name="exhibitionLocation"
            value={exhibition.exhibitionLocation}
            onChange={handleChange}
          /> */}
          {/* <TextField
            label="Floor Number"
            type="number"
            name="exhibitionFloor"
            value={exhibition.exhibitionFloor}
            onChange={handleChange}
          /> */}
          <TextField
            label="Start Date"
            type="date"
            name="exhibitionStartDate"
            value={exhibition.exhibitionStartDate}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="End Date"
            type="date"
            name="exhibitionEndDate"
            value={exhibition.exhibitionEndDate}
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
            value={exhibition.exhibitionEntry}
            onChange={handleChange}
          />
        </div>
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
