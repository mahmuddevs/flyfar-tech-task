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

    const tabs = [
        {
            label: 'FLIGHT',
            icon: <FlightIcon sx={{ transform: 'rotate(45deg)' }} />,
            content: <Flights />
        },
        {
            label: 'HOTEL',
            icon: <MapsHomeWorkIcon />,
            content: <Box>Hotel Content</Box>
        },
        {
            label: 'TOUR',
            icon: <TravelExploreIcon />,
            content: <Box>Tour Content</Box>
        },
        {
            label: 'VISA',
            icon: <AirplaneTicketIcon />,
            content: <Box>Visa Content</Box>
        },
    ];

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
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        icon={tab.icon}
                        iconPosition="start"
                        label={tab.label}
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
                ))}
            </Tabs>

            <Box sx={{ mt: 2, bgcolor: 'white', p: 3, borderRadius: 2 }}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        role="tabpanel"
                        hidden={value !== index}
                        id={`tabpanel-${index}`}
                        aria-labelledby={`tab-${index}`}
                    >
                        {value === index && tab.content}
                    </div>
                ))}
            </Box>
        </Container >
    );
};

export default BannerTabs;