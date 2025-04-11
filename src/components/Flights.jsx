import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import RoundWay from './RoundWay';
import FlightSearch from './FlightSearch';
import { Stack } from '@mui/material';

export default function Flights() {
    const [selectedTab, setSelectedTab] = useState('ROUND-WAY');

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Stack
            sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'stretch',
            }}
        >
            <Box
                sx={{
                    bgcolor: 'white',
                    width: { xs: '100%', sm: '60%', md: '70%' },
                    p: 3,
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <FormControl component="fieldset">
                    <RadioGroup
                        row
                        aria-labelledby="tabs"
                        name="tabs"
                        value={selectedTab}
                        onChange={handleTabChange}
                        sx={{ fontWeight: 300, color: 'primary.main' }}
                    >
                        <FormControlLabel
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px' } }}
                            value="ROUND-WAY"
                            control={<Radio />}
                            label="ROUND-WAY"
                        />
                        <FormControlLabel
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px' } }}
                            value="ONE-WAY"
                            control={<Radio />}
                            label="ONE-WAY"
                        />
                        <FormControlLabel
                            sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px' } }}
                            value="MULTI-CITY"
                            control={<Radio />}
                            label="MULTI-CITY"
                        />
                    </RadioGroup>
                </FormControl>

                <Box sx={{ marginTop: 2 }}>
                    {selectedTab === 'ROUND-WAY' && <RoundWay />}
                    {selectedTab === 'ONE-WAY' && <div>Content for ONE-WAY Tab</div>}
                    {selectedTab === 'MULTI-CITY' && <div>Content for MULTI-CITY Tab</div>}
                </Box>
            </Box>

            <FlightSearch />
        </Stack>
    );
}
