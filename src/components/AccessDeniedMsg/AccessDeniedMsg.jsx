import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import "./AccessDeniedMsg.css";

function AccessDeniedMsg(props) {
    return (
        <Box className="AccessDeniedMsg">
            <Typography> Access denied. Please log in. 
            <Link to={`/users/login`}>
            <Button>Login</Button>
            </Link>
          </Typography>
        </Box>
    );
}

export default AccessDeniedMsg;