import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { getToken , getUser} from "../../utilities/users-service";
import "./LoginForm.css";

export default function LoginForm({setUser}) {

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      
      if (data.token) {
        localStorage.setItem("token", data.token);
        setUser(getUser())
        setError("");
        window.alert("Account has login successfully."); 
        navigate('/');
       } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box className="LoginFormContainer">
      <form onSubmit={handleLogin} className="LoginForm">
        <br></br>
        <Typography variant="h5">User Login </Typography>
        {error}
          <Box className="R2">
            <TextField 
            type="email"
            label="Enter your email address"
            name="email" 
            required />
          </Box>

          <Box className="R2">
            <TextField 
            label="Enter your password" 
            name="password" 
            type="password"
            required />
          </Box>

          <Box className="R2">
          <Button variant="contained" type="submit" >Login</Button> 
          </Box>

      <Box className="R2">
      <Typography variant="p">No account yet? </Typography>
        <Link to={`/users/signup`}>
         <Button>Sign Up</Button>
        </Link>
      </Box>
    </form>
    </Box>
  );
}