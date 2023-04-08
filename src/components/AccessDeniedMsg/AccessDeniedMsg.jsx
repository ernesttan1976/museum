import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./AccessDeniedMsg.css";
import cat from "../../images/cartoon-cat-thief.jpg";

function AccessDeniedMsg(props) {
    return (
        <Box className="AccessDeniedMsg">
            <Typography> Access denied. Please log in as an Admin. 
            <Link to={`/users/login`}>
            <Button>Login</Button>
            </Link>
          </Typography>
          
          <img src={cat}></img>
        </Box>
    );
}

export default AccessDeniedMsg;