import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUser, signUp } from "../../utilities/users-service";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function SignUpForm({ setUser }) {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("No Error");
  const navigate = useNavigate();

  const disable = state.password !== state.confirm;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(state);
      setUser(getUser());
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  return (
      <div className="form-container">
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          {error}
          <label>Name</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" name="name" value={state.name} onChange={handleChange} required/>
          <label>Email</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" type="email" name="email" value={state.email} onChange={handleChange} required/>
          <label>Password</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" type="password" name="password" value={state.password} onChange={handleChange} required/>
          <label>Confirm</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" type="password" name="confirm" value={state.confirm} onChange={handleChange}  required/>
          <Button variant="contained" type="submit" disabled={disable}>Sign Up</Button>
          <p className="error-message">&nbsp;{state.error}</p>
        </Box>
      </div>
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