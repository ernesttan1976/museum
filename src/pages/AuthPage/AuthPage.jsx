
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function AuthPage(){
        return (
        <Box className="AuthPage">
          <Link to={`/users/login`}>
          <Button>Log In</Button>
          </Link>
          <br />
          <Link to={`/users/signup`}>
          <Button>Sign Up</Button>
          </Link>
        </Box>        
    )
}