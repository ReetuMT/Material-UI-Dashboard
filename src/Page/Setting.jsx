import React from 'react'
import Sidenav from '../Component/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../Component/Navbar';
function Setting() {
  return (
    <>
    <Navbar />
    <Box height={30} />
        <Box sx={{ display: 'flex' }}>
            <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <h1>Setting</h1>
            </Box>
        </Box>
  
</>
  )
}

export default Setting
