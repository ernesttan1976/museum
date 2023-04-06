import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getUser, signUp } from "../../utilities/users-service";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AdminSignUpForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    userRole: "admin",
  });
  const [error, setError] = useState("No Error");
  const navigate = useNavigate();

  const disable = state.password !== state.confirm;

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(state.email + " admin account has been created successfully. Please Login.");
    // window.alert(JSON.stringify(state));
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
      [event.target.name]: event.target.value, userRole:"admin"
    });
    console.log(state);
  };

  return (
      <Box className="form-container">
        <form component="form" autoComplete="off" onSubmit={handleSubmit}>
          {error}
          <fieldset>
          <label>Name:</label>
          <TextField 
          id="outlined-basic" 
          label="UserName" 
          variant="outlined" 
          type="text" 
          name="name" 
          value={state.name} 
          onChange={handleChange} 
          required/>
          <br />
          <label>Email:</label>
          <TextField 
          id="outlined-basic" 
          label="Email Address"  
          variant="outlined" 
          type="email" 
          name="email" 
          value={state.email} 
          onChange={handleChange} 
          required/>
          <br />
          <label>Password:</label>
          <TextField 
          id="outlined-basic" 
          label="Password (min 5)" 
          variant="outlined" 
          type="password" 
          name="password" 
          value={state.password} 
          onChange={handleChange} 
          required/>
           <br />
          <label>Confirm:</label>
          <TextField 
          id="outlined-basic" 
          label="Confirm Password"  
          variant="outlined" 
          type="password" 
          name="confirm" 
          value={state.confirm} 
          onChange={handleChange} 
          required/>
          <br />
          <br />
          <Button variant="contained" type="submit" disabled={disable}>Sign Up</Button>
          <p className="error-message">&nbsp;{state.error}</p>
        </fieldset>
        </form>
        <Typography variant="p">Already have an account? 
        <Link to={`/users/login`}>
         <Button>Login</Button>
        </Link>now!
      </Typography>
      </Box>
  );
}


// import TextField from '@mui/material/TextField';
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Outlined" variant="outlined" />