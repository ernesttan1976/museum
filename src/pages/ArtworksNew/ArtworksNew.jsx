// admin only, create new artworks.

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from "react";
import { CardContent } from '@mui/material';;


function ArtworksNew(props) {
  const [data, setData] = useState({
    // id: " ",
    artworkUrl: " ",
    artistName: " ",
    artworkDimension: "",
    artworkInformation: "",
    artworkLocation: "",
    artworkMedium: "",
    artworkTitle: "",
    artworkYear: '',
  });
  function handleChange(ev){
        setData({...data, [ev.target.name]: ev.target.value});
        console.log(data);
    }

  function handleSubmit(ev){
        ev.preventDefault();
        alert(JSON.stringify(data));
    }
  const disable = data.password !== data.confirm;
  const handleAddNewArtWork = () => {};
  
    return (
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off">
      <card>
        <CardContent>
          <Grid className="CustomGrid" container spacing={1}>
            <Grid item xs={12} sm={6} lg={3}>
        <Typography variant="h3">Add new Artwork</Typography> 
        
        <FormControl fullWidth sx={{ m: 10 }}  autoComplete='off' onSubmit={handleSubmit}>
          <label>Image URL:</label>
          <TextField fullWidth label="Image URL" type="text" name="artworkUrl" value={data.artworkUrl} placeholder='Image URL' onChange={handleChange}/>
          <br />
          <label>Artist Name:</label>
          <TextField label="Artist Name" type="text" name="artistName" value={data.artistName} placeholder='Artist Name' onChange={handleChange}/>
          <br />
          <label>Artwork Dimension:</label>
          <TextField label="Dimension" type="text" name="artworkDimension" value={data.artworkDimension} placeholder='Artwork Dimension' onChange={handleChange}/>
          <br />
          <label>Artwork Information:</label>
          <TextField label="Information" type="text" name="artworkInformation" value={data.artworkInformation} placeholder='Artwork Information:' onChange={handleChange}/>
          <br />
          <label>Artwork Location:</label>
          <TextField label="Location" type="text" name="artworkLocation" value={data.artworkDimeartworkLocationnsion} placeholder='Artwork Location' onChange={handleChange}/>
          <br />
          <label>Artwork Medium:</label>
          <TextField label="Medium" type="text" name="artworkMedium" value={data.artworkMedium} placeholder='Artwork Medium' onChange={handleChange}/>
          <br />
          <label>Artwork Title :</label>
          <TextField label="Title" type="text" name="artworkTitle" value={data.artworkTitle} placeholder='Artwork Title' onChange={handleChange}/>
          <br />
          <label>Year:</label>
         <TextField label="Year" type="text" name="artworkYear" value={data.artworkYear} placeholder='Year' onChange={handleChange}/>
          <br />
        </FormControl>         
        <Button type="submit" disabled={disable} variant="contained" onClick={handleAddNewArtWork}>Submit Artwork</Button>
        </Grid></Grid>
        </CardContent>
      </card>
    </Box>
  );
};
export default ArtworksNew;