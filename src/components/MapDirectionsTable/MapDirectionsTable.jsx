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


const rows = [
  createData('Icon1', "Directions1", "img1"),
  createData('Icon2', "Directions2", "img2"),
  createData('Icon3', "Directions3", "img3"),
  createData('Icon4', "Directions4", "img4"),
  createData('Icon5', "Directions5", "img5"),
];


export default function BasicTable() {
  return (
    <>
    {/* <MapDirectionsSliderSwitch /> */}
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
          {rows.map((row) => (
            <TableRow
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.icon}</TableCell>
              <TableCell align="left">{row.directions}</TableCell>
              <TableCell align="left">{row.img}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

    
  );
}