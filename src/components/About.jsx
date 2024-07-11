import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const About = () => {
    var[location,setLocation]=useState("website");

    const changeWelcome = ()=> {
        setLocation("Welcome Page");
      }
    
      const changeHome = ()=> {
        setLocation("Home");
      }
    
      const changeContact = ()=> {
        setLocation("Contact");
      }

  return (
    <div style = {{ textAlign: "center", marginTop: "10"}}>
      <Typography>Welcome to {location}</Typography>
      <br></br>
      <br></br>

      <Button variant='contained' onClick={changeWelcome}>Welcome</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={changeHome}>Home</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={changeContact}>Contact</Button>&nbsp;&nbsp;
      
    </div>
  )
}

export default About
