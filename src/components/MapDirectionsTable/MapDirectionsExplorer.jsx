import * as React from 'react';

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
  return (
    <>
    <TableContainer style={{ width: '30%' }} component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="left">Direction icon</TableCell>
            <TableCell align="left">Directions</TableCell>
            <TableCell align="left">Img</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row2) => (
            <TableRow
              key={row2.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row2.icon}</TableCell>
              <TableCell align="left">{row2.directions}</TableCell>
              <TableCell align="left">{row2.img}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>

    
  );
}