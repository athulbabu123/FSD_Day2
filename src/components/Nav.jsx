import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
	  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{flex:1}}>
            My App
          </Typography>
          <Button>
			<Link to={'/'} style={{textDecoration:'none', color:'white'}}>Login</Link>
		  </Button>
		  <Button>
			<Link to={'/sb'} style={{textDecoration:'none', color:'white'}}>StateBasics</Link>
		  </Button>
		  <Button>
			<Link to={'/c'} style={{textDecoration:'none', color:'white'}}>Counter</Link>
		  </Button>
      <Button>
			<Link to={'/ho'} style={{textDecoration:'none', color:'white'}}>About</Link>
		  </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
