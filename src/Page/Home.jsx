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
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordianDash from '../Component/AccordianDash';
import { BarCharts } from '../Component/BarCharts';

function Home() {
    return (
        <>
            <div className="bgcolor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidenav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradient'>
                                        <CardContent>
                                            <div style={{ color: 'aliceblue' }}>
                                                <CreditCardIcon />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" style={{ color: 'aliceblue' }}>
                                                $500.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Earning
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ minWidth: 49 + "%", height: 140 }} className='gradientlight'>
                                        <CardContent>
                                            <div style={{ color: 'aliceblue' }}>
                                                <ShoppingBagIcon />
                                            </div>
                                            <Typography gutterBottom variant="h6" component="div" style={{ color: 'aliceblue' }}>
                                                $910.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1d1" }}>
                                                Total Order
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2}>
                                    <Card sx={{ maxWidth: 345 }} className='gradientlight'>
                                        <Stack spacing={2} direction="row">
                                            <div className="iconstyle" style={{ marginLeft: 20, marginTop: 20, color: 'aliceblue' }}>
                                                <StorefrontIcon />
                                            </div>
                                            <div className="paddingall" style={{ color: 'aliceblue' }}>
                                                <span className='pricetitle'>$203k</span><br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                    <Card sx={{ maxWidth: 345 }}>
                                        <Stack spacing={2} direction="row">
                                            <div className="iconstyle" style={{ marginLeft: 20, marginTop: 20 }}>
                                                <StorefrontIcon />
                                            </div>
                                            <div className="paddingall">
                                                <span className='pricetitle'>$203k</span><br />
                                                <span className='pricesubtitle'>Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                    <BarCharts/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <div className="paddingall">
                                        <span className='pricesubtitle'>Popular Product</span>
                                        <CardContent>
                                            <AccordianDash />
                                        </CardContent>
                                    </div>
                                </Card>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}
export default Home
