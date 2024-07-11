import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const First = () => {
  var[name,setName] = useState("User");
  var[input,setInput]=useState();

  const CHANGEnAME = ()=>{
    console.log("button clicked");
    setName(input);
  }
  const inputHandler =(e) =>{
    console.log(e.target.value);
    setInput(e.target.value);
  }

  return (
    <div style = {{ textAlign: "center", marginTop: "5"}}>
      <Typography variant='h3'>Hello {name}</Typography>
      <TextField variant='outlined' label ='Enter your name' onChange={inputHandler}/>
      <br></br>
      <br></br>
      <Button variant='contained'  onClick={CHANGEnAME}>cHANGE</Button>
      </div>
  )
}

export default First
