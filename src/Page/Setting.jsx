import React from 'react'
import Sidenav from '../Component/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../Component/Navbar';
import List from '../TabSetting/List';

function Setting() {
  return (
    <>
    <Navbar />
    <Box height={70}  />
        <Box sx={{ display: 'flex',bgcolor:"#ddd" }}>
            <Sidenav />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <List/>
            </Box>
        </Box>
  
</>
  )
}

export default Setting
