import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { getToken , getUser} from "../../utilities/users-service";

export default function LoginForm({setUser}) {

  const [error, setError] = useState("No error");

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
        window.alert(" account has login successfully.");
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  // const handleChange = (event) => {
  //   setuserState({
  //     ...userstate,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  return (
    <Box>
      <form onSubmit={handleLogin}>
        {error}
        <fieldset>
          <label>
            User Email Address: 
            <TextField 
            type="email"
             label="Enter your email address"
            name="email" 
            // onChange={handleChange}
            required />
          </label>
          <br />
          <label>
            Password: 
            <TextField 
            label="Enter your password" 
            name="password" 
            // onChange={handleChange}
            required />
          </label>
          <br /><br />
          <Button variant="contained" type="submit" >Login</Button>
          <br />
          <p></p>
        </fieldset>
      </form>
      {/* {error && <p>{error}</p>} */}
      <Typography variant="p">No account yet? 
        <Link to={`/users/signup`}>
         <Button>Sign Up</Button>
        </Link>now!
      </Typography>
    </Box>
  );
}
