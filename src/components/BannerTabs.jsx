import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import FlightIcon from '@mui/icons-material/Flight';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import Flights from './Flights';
import { Container } from '@mui/material';

const BannerTabs = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container sx={{ py: 6 }}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="none"
                textColor="primary"
                variant="fullWidth"
                aria-label="icon tabs"
                sx={{
                    backgroundColor: 'white',
                    borderRadius: '999px',
                    minHeight: '36px',
                    maxWidth: '600px',
                    mx: 'auto',
                    px: 1,
                }}
            >
                <Tab
                    icon={<FlightIcon sx={{ transform: 'rotate(45deg)' }} />}
                    iconPosition="start"
                    label="FLIGHT"
                    sx={{
                        textTransform: 'none',
                        fontWeight: 300,
                        color: 'primary.main',
                        borderRadius: '999px',
                        transition: '0.3s',
                        minHeight: '36px',
                        py: 0,
                        my: 0.5,
                        fontSize: '0.875rem',
                        '& .MuiTab-iconWrapper': {
                            color: 'black',
                            mr: 1,
                        },
                        '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: 'primary.main',
                            '& .MuiTab-iconWrapper': {
                                color: 'white',
                            },
                        },
                    }}
                />
                <Tab
                    icon={<MapsHomeWorkIcon />}
                    iconPosition="start"
                    label="HOTEL"
                    sx={{
                        textTransform: 'none',
                        fontWeight: 300,
                        color: 'primary.main',
                        borderRadius: '999px',
                        transition: '0.3s',
                        minHeight: '36px',
                        py: 0,
                        my: 0.5,
                        fontSize: '0.875rem',
                        '& .MuiTab-iconWrapper': {
                            color: 'black',
                            mr: 1,
                        },
                        '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: 'primary.main',
                            '& .MuiTab-iconWrapper': {
                                color: 'white',
                            },
                        },
                    }}
                />
                <Tab
                    icon={<TravelExploreIcon />}
                    iconPosition="start"
                    label="TOUR"
                    sx={{
                        textTransform: 'none',
                        fontWeight: 300,
                        color: 'primary.main',
                        borderRadius: '999px',
                        transition: '0.3s',
                        minHeight: '36px',
                        py: 0,
                        my: 0.5,
                        fontSize: '0.875rem',
                        '& .MuiTab-iconWrapper': {
                            color: 'black',
                            mr: 1,
                        },
                        '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: 'primary.main',
                            '& .MuiTab-iconWrapper': {
                                color: 'white',
                            },
                        },
                    }}
                />
                <Tab
                    icon={<AirplaneTicketIcon />}
                    iconPosition="start"
                    label="VISA"
                    sx={{
                        textTransform: 'none',
                        fontWeight: 300,
                        color: 'primary.main',
                        borderRadius: '999px',
                        transition: '0.3s',
                        minHeight: '36px',
                        py: 0,
                        my: 0.5,
                        fontSize: '0.875rem',
                        '& .MuiTab-iconWrapper': {
                            color: 'black',
                            mr: 1,
                        },
                        '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: 'primary.main',
                            '& .MuiTab-iconWrapper': {
                                color: 'white',
                            },
                        },
                    }}
                />
            </Tabs>

            <Box sx={{ mt: 2 }}>
                {/* Flight Tab Content */}
                {value === 0 && (
                    <Box role="tabpanel" id="tabpanel-0" aria-labelledby="tab-0">
                        <Flights />
                    </Box>
                )}
                {/* Hotel Tab Content */}
                {value === 1 && (
                    <Box role="tabpanel" id="tabpanel-1" aria-labelledby="tab-1">
                        <Box>Hotel Content</Box>
                    </Box>
                )}
                {/* Tour Tab Content */}
                {value === 2 && (
                    <Box role="tabpanel" id="tabpanel-2" aria-labelledby="tab-2">
                        <Box>Tour Content</Box>
                    </Box>
                )}
                {/* Visa Tab Content */}
                {value === 3 && (
                    <Box role="tabpanel" id="tabpanel-3" aria-labelledby="tab-3">
                        <Box>Visa Content</Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default BannerTabs;
