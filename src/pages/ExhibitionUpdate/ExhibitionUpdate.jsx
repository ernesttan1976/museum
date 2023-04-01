import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

function ExhibitionUpdate(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-helperText"
          label="Exhibition Title"
          defaultValue="Default Value"
        />
        <TextField
          required
          id="outlined-helperText"
          label="Subheader"
          defaultValue="Default Value"
        />
        <TextField required id="outlined-helperText" label="Image URL" />
        <TextField
          required
          id="outlined-helperText"
          label="Short Description"
          defaultValue="Default Value"
        />
        <TextField
          required
          id="outlined-helperText"
          multiline
          rows={6}
          label="Full Description"
        />
        <TextField
          required
          id="outlined-helperText"
          label="Location"
          defaultValue="Default Value"
        />
        <TextField
          id="outlined-number"
          label="Floor Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Start Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="End Date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default ExhibitionUpdate;
