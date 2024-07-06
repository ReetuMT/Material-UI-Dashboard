import React from 'react'
import Sidenav from '../Component/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../Component/Navbar';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import './Dash.css'
import { GeoChart } from '../Charts/GeoCharts';
import { PieChart } from '../Charts/PieCharts';
import { BasicBarChart } from '../Charts/BasicBarchart';
import CountUp from 'react-countup';

function Analytics() {
  return (
    <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box height={16} />
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Stack spacing={2} direction="row">
                <Card sx={{ minWidth: 49 + "%", height: 118 }} className='gradient'>
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div" style={{ color: 'aliceblue' }}>
                      Visitors
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" style={{ color: 'aliceblue' }}>
                   <CountUp delay={0.4} end={32000} duration={0.6}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 118 }} className='gradientlight'>
                  <CardContent>
                    <div style={{ color: 'aliceblue' }}>
                      Visitors
                    </div>
                    <Typography gutterBottom variant="h6" component="div" style={{ color: 'aliceblue' }}>
                    <CountUp delay={0.6} end={20060} duration={0.6}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
              <Stack spacing={2} direction="row" style={{marginTop:7}}>
                <Card sx={{ minWidth: 49 + "%", height: 118 }} className='gradient'>
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div" style={{ color: 'aliceblue' }}>
                      Visitors
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div" style={{ color: 'aliceblue' }}>
                    <CountUp delay={0.8} end={5000} duration={0.6}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 118 }} className='gradientlight'>
                  <CardContent>
                    <div style={{ color: 'aliceblue' }}>
                      Visitors
                    </div>
                    <Typography gutterBottom variant="h6" component="div" style={{ color: 'aliceblue' }}>
                    <CountUp delay={0.4} end={52000} duration={0.2}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={7}>
              <Card sx={{ height: '40vh' }}>
               <BasicBarChart/>
              </Card>
            </Grid>
          </Grid>
          <Box height={16} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: '40vh' }}>
                <GeoChart />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: '40vh' }}>
               <PieChart/>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Analytics
