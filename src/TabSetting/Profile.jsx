import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Component/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Profiledata from '../Profile/Profiledata';
import AboutMe from '../Profile/AboutMe';

function Profile() {
  return (
    <div className="bgcolor">
      <Navbar />
      <Grid spacing={2} style={{padding:8,marginTop:5}}>
        <Grid item xs={8} >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card sx={{ height: '40vh' }}>
                <Profiledata/>
              </Card>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ height: '40vh' }}>
                <AboutMe/>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Profile;
