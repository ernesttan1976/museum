import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function ArtworksEditForm({user}) {
const { id } = useParams();
const [artwork, setArtwork] = useState({});
const navigate = useNavigate();

useEffect(() => {
    const fetchArtwork = async () => {
      const response = await fetch(`/api/artworks/${id}`);
      const artwork = await response.json();
      setArtwork(artwork);
    };
    fetchArtwork();
  }, [id]);

    const handleChange = (event) => {
    const key = event.target?.name;
    const value = event.target?.value;

    setArtwork({ ...artwork, [key]: value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault()
    const response = await fetch(`/api/artworks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(artwork),
    });
    navigate('/artworks');
  };
 
    return (
    <Box
    component="form"
      sx={{
        '& .MuiTextField-root': { p:2, m: 1, width: '150ch' },
        textAlign: 'center'
      }}
      noValidate
      autoComplete="off">
        
        {/* <Typography variant="h4">Edit Artworks</Typography> */}
        <FormControl fullWidth sx={{ m: 10 }}  autoComplete='off'>
          <Typography variant="h4">Edit Artworks</Typography>
          
          <br />

          {/* <label>Image URL:</label> */}
          <TextField 
          label="Image URL" 
          type="url" 
          name="artworkUrl" 
          value={artwork.artworkUrl  || ""} 
          onChange={handleChange} />
          
          <br />

          {/* <label>Artwork Title :</label> */}
          <TextField 
          label="Artwork Title" 
          type="text" 
          name="artworkTitle" 
          value={artwork.artworkTitle || ""} 
          onChange={handleChange} />

          <br />

          {/* <label>Artist Name:</label> */}
          <TextField 
          label="Artist Name" 
          type="text" 
          name="artistName" 
          value={artwork.artistName  || ""}  
          onChange={handleChange} />

          <br />

          {/* <label>Artwork Dimension:</label> */}
          <TextField 
          label="Dimension" 
          type="text" 
          name="artworkDimension" 
          value={artwork.artworkDimension  || ""} 
          onChange={handleChange} />

          <br />

          {/* <label>Artwork Information:</label> */}
          <TextField 
          label="Information" 
          type="text" 
          name="artworkInformation" 
          value={artwork.artworkInformation  || ""}  
          onChange={handleChange} />

          <br />

          {/* <label>Artwork Medium:</label> */}
          <TextField 
          label="Medium" 
          type="text" 
          name="artworkMedium" 
          value={artwork.artworkMedium  || ""} 
          onChange={handleChange} />

          <br />

          {/* <label>Year:</label> */}
         <TextField 
         label="Year" 
         type="number" 
         name="artworkYear" 
         value={artwork.artworkYear  || ""} 
         onChange={handleChange} />

        {/* <label>Artwork Location:</label> */}
          <TextField 
          label="Location" 
          type="text" 
          name="artworkLocation" 
          value={artwork.artworkLocation  || ""} 
          onChange={handleChange} />

          <br />
          
           <FormControl fullWidth sx={{ m: 2 }} autoComplete='off'>
          <label>Floor</label>
          <Select sx={{ width: '200px' }}
          label="Floor" 
          name="artworkFloor" 
          value={artwork.artworkFloor || ""} 
          onChange={handleChange}>
            <MenuItem value="" disabled>Select Floor</MenuItem>
            <MenuItem value="B1">B1</MenuItem>
            <MenuItem value="L1">L1</MenuItem>
            <MenuItem value="L2">L2</MenuItem>
            <MenuItem value="L3">L3</MenuItem>
            <MenuItem value="L4">L4</MenuItem>
            <MenuItem value="L5">L5</MenuItem>
            <MenuItem value="L6">L6</MenuItem>
          </Select>
          </FormControl>

          <br />    
          <Button sx={{ width: '100px' }} type="submit" variant="contained" onClick={handleUpdate} >Update Artwork</Button>
        </FormControl>    
    </Box>
    );
}
 
export default ArtworksEditForm;