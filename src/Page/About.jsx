import React from 'react'
import Box from '@mui/material/Box';
import Sidenav from '../Component/Sidenav';
import Navbar from '../Component/Navbar';


function About() {
  return (
    <>
            <Navbar />
            <Box height={20} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <h1>About</h1>
                    </Box>
                </Box>
          
        </>
  )
}

export default About
