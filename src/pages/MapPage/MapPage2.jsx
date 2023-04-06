import * as React from 'react';


import { useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";

import "./MapPage2.css";

import Box from '@mui/material/Box';
import MapDirectionsTab from "../../components/MapDirectionsTab/MapDirectionsTab";
import MapDirectionsDrawer from "../../components/MapDirectionsDrawer/MapDirectionsDrawer";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


export default function MapPage2(){

  const [error, setError] = useState("");

    useEffect(() => {
        console.log('Component mounted');
        //this function is in index.html
        setScrollHeight();
      }, []);
    const { from, to } = useParams();
    const [direction, setDirection] = useState([]);

    // fetch object ID  
    useEffect(() => {
    const fetchDirection = async () => {
      const response = await fetch(`/api/map/directions/from/${from}/to/${to}`);
      if (!response.ok) { 
        console.log("Path does not exist" )
        setError("Route does not exist...yet")
        // ("Network response was not OK");
      } else {
      const direction = await response.json();
      setDirection(direction);
      console.log(direction);
      }
    };
    fetchDirection();
     },[]);  

    const [toggle, setToggle] = useState(true);

    const handleSwitchChange = (event) => {
        event.preventDefault; 
      toggle ? setToggle(false) : setToggle(true);
    }


    return (
        <Box className="MapPage2">
            <Typography className="routeDirections" variant="h5"> Route Directions </Typography>
                <Button href="/map" variant="outlined">BACK TO MAP</Button>
              <MapDirectionsTab maps={direction.mapImg} />
              <MapDirectionsDrawer direction={direction} table ={direction.routeDirections}/>
        </Box>
    )
}