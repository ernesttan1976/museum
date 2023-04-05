import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

function AccessDeniedMsg(props) {
    return (
        <box>
            <Typography> Access denied. Please log in. 
            <Link to={`/users/login`}>
            <Button>Login</Button>
            </Link>
          </Typography>
        </box>
    );
}

export default AccessDeniedMsg;