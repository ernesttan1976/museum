import * as React from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TurnRightOutlinedIcon from '@mui/icons-material/TurnRightOutlined';
import TurnLeftOutlinedIcon from '@mui/icons-material/TurnLeftOutlined';
import TurnSlightLeftOutlinedIcon from '@mui/icons-material/TurnSlightLeftOutlined';
import TurnSlightRightOutlinedIcon from '@mui/icons-material/TurnSlightRightOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';



const Icons = {
  turnRight : <TurnRightOutlinedIcon />,
  turnLeft : <TurnLeftOutlinedIcon />,
  slightRight : <TurnSlightRightOutlinedIcon />,
  slightLeft : <TurnSlightLeftOutlinedIcon />,
  camera : <CameraAltOutlinedIcon />,
  artwork : <PhotoOutlinedIcon />

}

export default function BasicTable() {

  const { id } = useParams();
  const [explorers, setExplorer] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchExplorer = async () => {
      const response = await fetch("/api/map/directions");
      const explorers = await response.json();
      setExplorer(explorers);
    };
    fetchExplorer();
  },[]);

  


  return (
    <>
    <h6>Explorer Mode</h6>
    <TableContainer style={{ width: '100%' }} component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="left">Direction icon </TableCell>
            <TableCell align="left">Directions</TableCell>
            <TableCell align="left">Img</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {explorers.map((explorer,index) => (
            <TableRow key={index}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{Icons[explorer.icon]}</TableCell>
              <TableCell align="left">{explorer.directions}</TableCell>
              <TableCell align="left">
              <img src={`${explorer.imgUrl}`} height="150" /> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>

    
  );
}