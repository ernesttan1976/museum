// functional component

import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { getUser, signUp } from "../../utilities/users-service";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FSignUpForm() {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    })

    function handleChange(ev){
        setData({...data, [ev.target.name]: ev.target.value});
        console.log(data);
    }

    function handleSubmit(ev){
        ev.preventDefault();
        alert(JSON.stringify(data));
    }

    const disable = data.password !== data.confirm;

    return (
            <Box className="form-container">
                <form autoComplete='off' onSubmit={handleSubmit}>
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" value={data.name} onChange={handleChange} />
                    <label htmlFor="">Email: </label>
                    <input type="email" name="email" value={data.email} onChange={handleChange} />
                    <label htmlFor="">Password: </label>
                    <input type="password" name="password" value={data.password} onChange={handleChange} />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
                <p className="error-message">&nbsp;{data.error}</p>
            </Box>
    )
}
