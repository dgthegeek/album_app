import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
const NavBar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
        <Toolbar>
          <PhotoCamera sx={{ margin: 2 }} />
          <Typography variant="h6">Dame's Album</Typography>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar