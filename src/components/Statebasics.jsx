import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  var[name,setName] = useState("User");
  var[input,setInput]=useState();
  var[value,setValue]=useState(0);
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

  return (
    <div style = {{ textAlign: "center", marginTop: "5"}}>
      <Typography variant='h3'>Hello {name}</Typography>
      <TextField variant='outlined' label ='Enter your name' onChange={inputHandler}/>
      <br></br>
      <Button variant='contained'  onClick={CHANGEnAME}>cHANGE</Button>
      <br></br>
      <br></br>

      <Typography>Counter Value</Typography>
      <Typography>{value}</Typography>
      <br></br>
      <Button variant='contained' size='large' onClick={increment}>Increment</Button>&nbsp;&nbsp;
      <Button variant='contained' size='small' onClick={decrement}>Decrement</Button>

    </div>
  )
}

export default Statebasics
