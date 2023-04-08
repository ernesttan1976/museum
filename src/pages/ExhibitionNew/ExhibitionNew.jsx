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

const currentDate = new Date().toISOString().split("T")[0];

function ExhibitionNew() {
  const navigate = useNavigate();

  const [exhibitions, setExhibition] = useState([]);
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  const addExhibition = (exhibition) =>
    setExhibition([exhibition, ...exhibitions]);

  function handleChange(ev) {
    ev.preventDefault();
    setData({ ...data, [ev.target.name]: ev.target.value });
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const hasError = validate();
    if (!hasError) {
      handleAddNewExhibition();
    } else {
      setError("test");
    }
  }

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
    navigate("/");
  };

  const validate = () => {
    let isError = false;
    const errors = {
      titleError: "",
    };

    if (data.exhibitionTitle.length < 10) {
      isError = true;
      errors.titleError = "Minimum characters for title: 10 characters";
    }

    setError(errors);

    return isError;
  };

  return (
    <Box
      className="ExhibitionFormContainer"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "150ch" },
      }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <FormControl className="NewExhibitionForm" autoComplete="off">
        <Typography className="ExhibitionFormTitle" variant="h4">
          Create Exhibition
        </Typography>
        <TextField
          required
          label="Exhibition Title"
          type="text"
          name="exhibitionTitle"
          error={Boolean(error.titleError)}
          helperText={error.titleError}
          value={data.exhibitionTitle}
          inputProps={{ maxLength: 50, minLength: 10 }}
          onChange={handleChange}
        />
        <TextField
          label="Subheader"
          type="text"
          name="exhibitionTitleSub"
          value={data.exhibitionTitleSub}
          inputProps={{ maxLength: 50, minLength: 10 }}
          onChange={handleChange}
        />
        <TextField
          required
          label="Image URL"
          type="url"
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
          inputProps={{ maxLength: 300, minLength: 50 }}
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
          inputProps={{ maxLength: 1500, minLength: 200 }}
          onChange={handleChange}
        />
        <TextField
          required
          label="Exhibition Address"
          type="text"
          name="exhibitionLocation"
          value={data.exhibitionLocation}
          onChange={handleChange}
        />

        <FormControl fullWidth sx={{ m: 1 }} autoComplete="off">
          <InputLabel>Floor</InputLabel>
          <Select
            sx={{ width: "200px" }}
            name="exhibitionFloor"
            label="Floor"
            value={data.exhibitionFloor}
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
        <TextField
          label="Start Date"
          type="date"
          name="exhibitionStartDate"
          value={data.exhibitionStartDate}
          onChange={handleChange}
          inputProps={{ min: currentDate }}
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
          inputProps={{ min: data.exhibitionStartDate }}
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
