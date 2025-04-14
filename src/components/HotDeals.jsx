import { Box, Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";
import flightImg1 from '../assets/deal1.webp'
import flightImg2 from '../assets/deal2.webp'
import flightImg3 from '../assets/deal3.webp'
import groupFairImg1 from '../assets/deal4.webp'
import groupFairImg2 from '../assets/deal5.png'
import groupFairImg3 from '../assets/deal6.webp'
import tourImg1 from '../assets/deal7.webp'
import tourImg2 from '../assets/deal8.webp'
import tourImg3 from '../assets/deal9.webp'
import visaImg1 from '../assets/deal10.webp'
import visaImg2 from '../assets/deal11.webp'
import visaImg3 from '../assets/deal12.webp'

const flightImg = [
    flightImg1, flightImg2, flightImg3
]
const groupFairImg = [
    groupFairImg1, groupFairImg2, groupFairImg3
]
const tourImg = [
    tourImg1, tourImg2, tourImg3
]
const visaImg = [
    visaImg1, visaImg2, visaImg3
]

const HotDeals = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ p: { lg: '0!important' } }}>
            <Stack sx={{
                flexDirection: { xs: 'column', md: 'row' }, justifyContent: { xs: 'center', md: 'space-between' }, gap: 2, alignItems: 'center',
                textAlign: { xs: 'center', md: 'left' }
            }}>
                <Typography variant="h4" sx={{ fontSize: '22px', fontWeight: 600 }}>
                    Hot Deals
                </Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="none"
                    textColor="white"
                    variant="fullWidth"
                    aria-label="icon tabs"
                    sx={{
                        backgroundColor: 'primary.main',
                        borderRadius: '999px',
                        minHeight: { xs: '28px', md: '36px' },
                        minWidth: { xs: '100%', sm: '550px' },
                        px: 1,
                    }}
                >
                    <Tab
                        label="FLIGHT"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 300,
                            color: 'white',
                            borderRadius: '999px',
                            transition: '0.3s',
                            minHeight: '36px',
                            py: 0,
                            my: 0.5,
                            fontSize: { xs: '0.6rem', md: '0.7rem' },
                            '&.Mui-selected': {
                                color: 'white',
                                backgroundColor: 'secondary.main',
                            },
                        }}
                    />
                    <Tab
                        label="GROUP FARE"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 300,
                            color: 'white',
                            borderRadius: '999px',
                            transition: '0.3s',
                            minHeight: '36px',
                            py: 0,
                            my: 0.5,
                            fontSize: { xs: '0.6rem', md: '0.7rem' },
                            '&.Mui-selected': {
                                color: 'white',
                                backgroundColor: 'secondary.main',
                            },
                        }}
                    />
                    <Tab
                        label="TOUR"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 300,
                            color: 'white',
                            borderRadius: '999px',
                            transition: '0.3s',
                            minHeight: '36px',
                            py: 0,
                            my: 0.5,
                            fontSize: { xs: '0.6rem', md: '0.7rem' },
                            '&.Mui-selected': {
                                color: 'white',
                                backgroundColor: 'secondary.main',
                            },
                        }}
                    />
                    <Tab
                        label="VISA"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 300,
                            color: 'white',
                            borderRadius: '999px',
                            transition: '0.3s',
                            minHeight: '36px',
                            py: 0,
                            my: 0.5,
                            fontSize: { xs: '0.6rem', md: '0.7rem' },
                            '&.Mui-selected': {
                                color: 'white',
                                backgroundColor: 'secondary.main',
                            },
                        }}
                    />
                </Tabs>
            </Stack>

            <Box sx={{ mt: 2 }}>
                {value === 0 && (
                    <Box role="tabpanel" id="tabpanel-0" aria-labelledby="tab-0">
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
                            {flightImg.map((src, index) => (
                                <Grid key={index} size={{ xs: 12, md: 4 }}>
                                    <Box
                                        component="img"
                                        src={src}
                                        alt={`Image ${index + 1}`}
                                        sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
                {value === 1 && (
                    <Box role="tabpanel" id="tabpanel-1" aria-labelledby="tab-1">
                        <Box>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
                                {groupFairImg.map((src, index) => (
                                    <Grid key={index} size={{ xs: 12, md: 4 }}>
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`Image ${index + 1}`}
                                            sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                )}
                {value === 2 && (
                    <Box role="tabpanel" id="tabpanel-2" aria-labelledby="tab-2">
                        <Box>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
                                {tourImg.map((src, index) => (
                                    <Grid key={index} size={{ xs: 12, md: 4 }}>
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`Image ${index + 1}`}
                                            sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                )}
                {/* Visa Tab Content */}
                {value === 3 && (
                    <Box role="tabpanel" id="tabpanel-3" aria-labelledby="tab-3">
                        <Box>
                            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
                                {visaImg.map((src, index) => (
                                    <Grid key={index} size={{ xs: 12, md: 4 }}>
                                        <Box
                                            component="img"
                                            src={src}
                                            alt={`Image ${index + 1}`}
                                            sx={{ width: '100%', height: 'auto', borderRadius: 2 }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container >
    )
}
export default HotDeals