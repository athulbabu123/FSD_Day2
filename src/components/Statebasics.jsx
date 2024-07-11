import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  var[name,setName] = useState("User");
  var[input,setInput]=useState();
  var[value,setValue]=useState(0);
  var[location,setLocation]=useState("website");
  const CHANGEnAME = ()=>{
    console.log("button clicked");
    setName(input);
  }
  const inputHandler =(e) =>{
    console.log(e.target.value);
    setInput(e.target.value);
  }

  const increment =() =>{
    setValue(++value);
  }

  const decrement = () =>{
    setValue(--value);
  }

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
    <div style = {{ textAlign: "center", marginTop: "5"}}>
      <Typography variant='h3'>Hello {name}</Typography>
      <TextField variant='outlined' label ='Enter your name' onChange={inputHandler}/>
      <br></br>
      <br></br>
      <Button variant='contained'  onClick={CHANGEnAME}>cHANGE</Button>
      <br></br>
      <br></br><br></br>
      <br></br>

      <Typography>Counter Value</Typography>
      <Typography>{value}</Typography>
      <br></br>
      <Button variant='contained'  onClick={increment}>Increment</Button>&nbsp;&nbsp;
      <Button variant='contained'  onClick={decrement}>Decrement</Button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <Typography>Welcome to {location}</Typography>
      <br></br>
      <br></br>

      <Button variant='contained' onClick={changeWelcome}>Welcome</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={changeHome}>Home</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick={changeContact}>Contact</Button>&nbsp;&nbsp;

    </div>
  )
}

export default Statebasics
