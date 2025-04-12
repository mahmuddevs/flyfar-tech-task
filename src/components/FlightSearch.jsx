import React, { useState } from 'react';
import { Box, MenuItem, Select, FormControl, Button, Stack, Container } from '@mui/material';

const FlightSearch = () => {
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(0);
    const [infantCount, setInfantCount] = useState(0);
    const [classType, setClassType] = useState('Economy');

    const handleAdultChange = (event) => setAdultCount(event.target.value);
    const handleChildChange = (event) => setChildCount(event.target.value);
    const handleInfantChange = (event) => setInfantCount(event.target.value);
    const handleClassChange = (event) => setClassType(event.target.value);

    const handleSearch = () => {
        console.log('Searching flight with:', { adultCount, childCount, infantCount, classType });
    };

    return (
        <Container
            disableGutters
            sx={{
                width: { sm: '40%', md: '100%', lg: '30%' },
                height: 'auto',
                bgcolor: 'white',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                p: 3,
                borderTop: { xs: '1px dashed', sm: 'none', md: '1px dashed', lg: 'none' },
                borderLeft: { xs: 'none', sm: '1px dashed', md: 'none', lg: '1px dashed' }

            }}
        >
            <Stack spacing={3} sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={2}>
                    <FormControl fullWidth variant="standard">
                        <Select value={adultCount} onChange={handleAdultChange}>
                            {[...Array(9)].map((_, i) => (
                                <MenuItem key={i + 1} value={i + 1}>{i + 1} ADULT</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth variant="standard">
                        <Select value={childCount} onChange={handleChildChange}>
                            {[...Array(6)].map((_, i) => (
                                <MenuItem key={i} value={i}>{i} CHILD</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth variant="standard">
                        <Select value={infantCount} onChange={handleInfantChange}>
                            {[...Array(5)].map((_, i) => (
                                <MenuItem key={i} value={i}>{i} INFANT</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>

                <FormControl fullWidth variant="standard">
                    <Select value={classType} onChange={handleClassChange}>
                        <MenuItem value="Economy">Economy</MenuItem>
                        <MenuItem value="PremiumEconomy">Premium Economy</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="PremiumBusiness">Premium Business</MenuItem>
                        <MenuItem value="First">First Class</MenuItem>
                        <MenuItem value="PremiumFirst">Premium First Class</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            <Button
                fullWidth
                variant="contained"
                onClick={handleSearch}
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'white',
                    fontSize: '14px',
                    padding: '10px',
                    mt: { xs: 6, lg: 'auto' }
                }}
            >
                Search For Flight
            </Button>
        </Container>
    );
};

export default FlightSearch;
