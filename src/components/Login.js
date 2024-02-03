import React from 'react'
import './login.css'
import { Button, TextField } from '@mui/material'
const Login = () => {
  return (
    <div className='login-container'>
        <div className='img-container'>
            <h1>here image will come</h1>
            
        </div>
        <div className='login-box'>
           <h1>please log in to Konnect</h1>
           <TextField id="standard-basic" label="User name " variant="outlined" />
           <TextField id="outlined-password-input" label="Password" type="password" autoComplete='current-password' />
           <Button variant="outlined">LogIn</Button>


        </div>
      
    </div>
  )
}

export default Login
