import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function LoginForm() {
  const [error, setError] = useState("No error");
  const [token, setToken] = useState("");

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
        setToken(data.token);
        setError("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box>
      <form onSubmit={handleLogin}>
        {error}
        <fieldset>
          <label>
            User Email Address: 
            <TextField 
             label="Enter your email address"
            name="email" />
          </label>
          <br />
          <label>
            Password: 
            <TextField 
            label="Enter your password" 
            name="password" />
          </label>
          <br /><br />
          <Button variant="contained" type="submit" >Login</Button>
          <br />
          <p></p>
        </fieldset>
      </form>
    </Box>
  );
}
