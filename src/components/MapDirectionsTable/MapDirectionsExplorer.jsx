import * as React from 'react';
import { useParams } from "react-router-dom";
import { useState } from "react";

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
import StraightOutlinedIcon from '@mui/icons-material/StraightOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import StairsOutlinedIcon from '@mui/icons-material/StairsOutlined';

import { Typography } from '@mui/material';



const Icons = {
  turnRight : <TurnRightOutlinedIcon />,
  turnLeft : <TurnLeftOutlinedIcon />,
  slightRight : <TurnSlightRightOutlinedIcon />,
  slightLeft : <TurnSlightLeftOutlinedIcon />,
  goStraight: <StraightOutlinedIcon />,
  
  stairs : <StairsOutlinedIcon />,
  camera : <CameraAltOutlinedIcon />,
  artwork : <PhotoOutlinedIcon />

}

export default function BasicTable(props) {
  const { direction, table } = props;

  const { id } = useParams();
  const [tableData, setTableData] = useState([]);
  // const navigate = useNavigate();


  return (
    <>
    <Typography>Explorer Mode - on</Typography>
    <TableContainer style={{ width: '100%' }} component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell align="center">Direction icon </TableCell>
            <TableCell align="center">Directions</TableCell>
            <TableCell align="center">Img</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table?.map((table,index) => (
            <TableRow key={index}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">{Icons[table.icon]}</TableCell>
              <TableCell align="center">{table.directions}{table.explorerPrompt}<a href ={`${table.featureUrl}`}>{table.featureTitle}</a></TableCell>
              <TableCell align="center">
              <img src={`${table.imgUrl}`} height="150" /> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </>

    
  );
}