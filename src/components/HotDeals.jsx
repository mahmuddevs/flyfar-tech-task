import { Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material"
import { useState } from "react";

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
                        minHeight: '36px',
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
                        tab 1
                    </Box>
                )}
                {value === 1 && (
                    <Box role="tabpanel" id="tabpanel-1" aria-labelledby="tab-1">
                        <Box>
                            tab 2
                        </Box>
                    </Box>
                )}
                {value === 2 && (
                    <Box role="tabpanel" id="tabpanel-2" aria-labelledby="tab-2">
                        <Box>
                            tab 3
                        </Box>
                    </Box>
                )}
                {/* Visa Tab Content */}
                {value === 3 && (
                    <Box role="tabpanel" id="tabpanel-3" aria-labelledby="tab-3">
                        <Box>
                            tab 4
                        </Box>
                    </Box>
                )}
            </Box>
        </Container >
    )
}
export default HotDeals