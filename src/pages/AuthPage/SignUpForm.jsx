import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getUser, signUp } from "../../utilities/users-service";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./SignUpForm.css";

export default function SignUpForm({ setUser }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    userRole: "user",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const disable = state.password !== state.confirm;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.password.length < 5) {
    setError("Password must be at least 5 characters or numbers long.");
    return;
    }

    window.alert(state.email + " Account has been created successfully. Please Login.");
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((response) => response.json())
      .then((data) => console.log( data ));
      console.log("submitted");
      navigate('/users/login');
  };

  const handleChange = (event) => {
    setState({
      ...state, 
      [event.target.name]: event.target.value, userRole:"user"
    });
    console.log(state);
  };

  return (
      <Box className="SignUpFormContainer">
        <form component="form" autoComplete="off" onSubmit={handleSubmit} className="SignUpForm">
          <Typography variant="h5">Sign Up a new Account </Typography>
          {error}

          <Box className="R1">
          <TextField 
          id="outlined-basic" 
          label="UserName" 
          variant="outlined" 
          type="text" 
          name="name" 
          value={state.name} 
          onChange={handleChange} 
          required/>
          </Box>

          <Box className="R1">
          <TextField 
          id="outlined-basic" 
          label="Email Address"  
          variant="outlined" 
          type="email" 
          name="email" 
          value={state.email} 
          onChange={handleChange} 
          required/>
          </Box>

          <Box className="R1">
          <TextField 
          id="outlined-basic" 
          label="Password (min 5)" 
          variant="outlined" 
          type="password" 
          name="password" 
          value={state.password} 
          onChange={handleChange} 
          required/>
          </Box>

           <Box className="R1">
          <TextField 
          id="outlined-basic" 
          label="Confirm Password"  
          variant="outlined" 
          type="password" 
          name="confirm" 
          value={state.confirm} 
          onChange={handleChange} 
          required/>
          </Box>

          <Box className="R1">
          <Button variant="contained" type="submit" disabled={disable}>Sign Up</Button>
          <p className="error-message">&nbsp;{state.error}</p>
          </Box>

        <Box className="R1">
        <Typography variant="p">Already have an account? 
        <Link to={`/users/login`}>
         <Button>Login</Button>
        </Link>
        </Typography>
        </Box>
      </form>
      </Box>
  );
}