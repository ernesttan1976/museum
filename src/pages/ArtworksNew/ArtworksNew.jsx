// admin only, create new artworks.
import { useEffect, useState } from "react";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { CardContent } from '@mui/material';;
import { useNavigate } from 'react-router-dom';
import { number } from "prop-types";
 
 
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
    <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '150ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      >
      {/* <Card>
        <CardContent>
          <Grid className="CustomGrid" container spacing={1}>
            <Grid item xs={12} sm={6} lg={3}> */}
        <Typography variant="h4">Add new Artwork</Typography> 
        
        <FormControl fullWidth sx={{ m: 10 }}  autoComplete='off'>
          <label>Image URL:</label>
          <TextField 
          label="Image URL" 
          type="text" 
          name="artworkUrl" 
          value={data.artworkUrl} 
          placeholder='Image URL' 
          onChange={handleChange}/>
          
          <br />

          <label>Artist Name:</label>
          <TextField 
          label="Artist Name" 
          type="text" 
          name="artistName" 
          value={data.artistName} 
          placeholder='Artist Name' 
          onChange={handleChange}/>

          <br />

          <label>Artwork Dimension:</label>
          <TextField 
          label="Dimension" 
          type="text" 
          name="artworkDimension" 
          value={data.artworkDimension} 
          placeholder='Artwork Dimension' 
          onChange={handleChange}/>

          <br />

          <label>Artwork Information:</label>
          <TextField 
          label="Information" 
          type="text" 
          name="artworkInformation" 
          value={data.artworkInformation} 
          placeholder='Artwork Information:' 
          onChange={handleChange}/>

          <br />

          <label>Artwork Location:</label>
          <TextField 
          label="Location" 
          type="text" 
          name="artworkLocation" 
          value={data.artworkLocation} 
          placeholder='Artwork Location' 
          onChange={handleChange}/>

          <br />

          <label>Artwork Medium:</label>
          <TextField 
          label="Medium" 
          type="text" 
          name="artworkMedium" 
          value={data.artworkMedium} 
          placeholder='Artwork Medium' 
          onChange={handleChange}/>

          <br />

          <label>Artwork Title :</label>
          <TextField 
          label="Title" 
          type="text" 
          name="artworkTitle" 
          value={data.artworkTitle} 
          placeholder='Artwork Title' 
          onChange={handleChange}/>

          <br />
 
          <label>Year:</label>
         <TextField 
         label="Year" 
         type="number" 
         name="artworkYear" 
         value={data.artworkYear} 
         placeholder='Year' 
         onChange={handleChange}/>

          <br />    
          <Button type="submit" variant="contained" onClick={handleAddNewArtWork}>Submit Artwork</Button>
        </FormControl>         
        
        {/* </Grid></Grid>
        </CardContent>
      </Card> */}
    </Box>
  );
};
export default ArtworksNew;