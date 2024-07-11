import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var[value,setValue]=useState(0);

  const increment =() =>{
    setValue(++value);
  }

  const decrement = () =>{
    setValue(--value);
  }

  return (
    <div style = {{ textAlign: "center", marginTop: "5"}}>
      <Typography>Counter Value</Typography>
      <Typography>{value}</Typography>
      <br></br>
      <Button variant='contained'  onClick={increment}>Increment</Button>&nbsp;&nbsp;
      <Button variant='contained'  onClick={decrement}>Decrement</Button>
      <br></br>
      <br></br>
      
    </div>
  )
}

export default Counter
