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




function createData(icon, directions, img) {
  return { icon, directions, img};
}


const rows2 = [
    createData('Icon1', "Directions1", "img1"),
    createData('Icon1', "Special exhibition text", "img1"),
    createData('Icon2', "Directions2", "img2"),
    createData('Icon2', "exhibition feature here", "img2"),
    createData('Icon3', "Directions3", "img3"),
    createData('Icon4', "Directions4", "img4"),
    createData('Icon5', "Directions5", "img5"), 
    createData('Icon3', "something to look at ", "img3"),
  ];

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
  });

  


  return (
    <>
    <h6>Explorer Mode</h6>
    <TableContainer style={{ width: '30%' }} component={Paper}>
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
              <TableCell component="th" scope="row">{explorer.icon}</TableCell>
              <TableCell align="left">{explorer.directions}</TableCell>
              <TableCell align="left">{explorer.imgUrl}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>

    
  );
}