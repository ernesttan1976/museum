// admin only, create new artworks.
import { useEffect, useState } from "react";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { number } from "prop-types";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import "./ArtworksNew.css";
 
function ArtworksNew() {

  const [artworks, setArtworks] = useState([]);

  const addArtwork = (artwork) => setArtworks([artwork, ...artworks]); // add artwork

const navigate = useNavigate();
  const [data, setData] = useState({
    artworkUrl: "",
    artistName: "",
    artworkDimension: "",
    artworkInformation: "",
    artworkLocation: "",
    artworkMedium: "",
    artworkTitle: "",
    artworkYear: number,
  });
  
  function handleChange(event){
        setData({...data, [event.target.name]: event.target.value});
        console.log(data);
    }

  const handleAddNewArtWork = async (event) => {
    event.preventDefault()
    const response = await fetch("/api/artworks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      });
      const artwork = await response.json();
      addArtwork(artwork);
    console.log("new artwork submitted");
    navigate('/artworks');
  };

  function handleSubmit(ev){
    ev.preventDefault();
    alert(JSON.stringify(data));
  }
  
    return (
    <Box className="AddNewArtworkForm" component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} 
      >

        <FormControl className="NewArtworkForm"   autoComplete='off'>
          <Typography className="AddNewArtwork" variant="h4">Add new Artwork</Typography> 
        
          <TextField 
          label="Image URL" 
          type="text" 
          name="artworkUrl" 
          value={data.artworkUrl} 
          placeholder='Image URL' 
          onChange={handleChange}/>
          
          <TextField 
          label="Artwork Title" 
          type="text" 
          name="artworkTitle" 
          value={data.artworkTitle} 
          placeholder='Artwork Title' 
          onChange={handleChange}/>

          <TextField 
          label="Artist Name" 
          type="text" 
          name="artistName" 
          value={data.artistName} 
          placeholder='Artist Name' 
          onChange={handleChange}/>

          <TextField 
          label="Dimension" 
          type="text" 
          name="artworkDimension" 
          value={data.artworkDimension} 
          placeholder='Artwork Dimension' 
          onChange={handleChange}/>

          <TextField 
          label="Information" 
          type="text" 
          name="artworkInformation" 
          value={data.artworkInformation} 
          placeholder='Artwork Information:' 
          onChange={handleChange}/>

          <TextField 
          label="Medium" 
          type="text" 
          name="artworkMedium" 
          value={data.artworkMedium} 
          placeholder='Artwork Medium' 
          onChange={handleChange}/>

         <TextField 
         label="Year" 
         type="text"
         name="artworkYear"
         value={data.artworkYear} 
         placeholder='Year' 
         pattern="\d{4}"
         onChange={handleChange}/>
 
          <TextField 
          label="Location" 
          type="text" 
          name="artworkLocation" 
          value={data.artworkLocation} 
          placeholder='Artwork Location' 
          onChange={handleChange}/>

          <FormControl fullWidth sx={{ m: 2 }} autoComplete='off'>

          <InputLabel>Floor</InputLabel>
          <Select sx={{ width: '200px' }}
          label="Floor" 
          name="artworkFloor" 
          value="L1" 
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
  
          <Button type="submit" variant="contained" onClick={handleAddNewArtWork}>Submit Artwork</Button>
        </FormControl>         

    </Box>
  );
};
export default ArtworksNew;