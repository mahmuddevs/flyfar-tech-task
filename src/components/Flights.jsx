import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import RoundWay from './RoundWay';

export default function Flights() {
    const [selectedTab, setSelectedTab] = useState('ROUND-WAY');

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Box>
            <FormControl component="fieldset">
                <RadioGroup
                    row
                    aria-labelledby="tabs"
                    name="tabs"
                    value={selectedTab}
                    onChange={handleTabChange}
                    sx={{ fontWeight: 300, color: 'primary.main' }}
                >
                    <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px' } }} value="ROUND-WAY" control={<Radio />} label="ROUND-WAY" />
                    <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px' } }} value="ONE-WAY" control={<Radio />} label="ONE-WAY" />
                    <FormControlLabel sx={{ '& .MuiFormControlLabel-label': { fontSize: '13px' } }} value="MULTI-CITY" control={<Radio />} label="Tab 3" />
                </RadioGroup>
            </FormControl>

            <Box sx={{ marginTop: 2 }}>
                {selectedTab === 'ROUND-WAY' && (
                    <RoundWay />
                )}
                {selectedTab === 'ONE-WAY' && (
                    <div>Content for ONE-WAY Tab</div>
                )}
                {selectedTab === 'MULTI-CITY' && (
                    <div>Content for Tab 3</div>
                )}
            </Box>
        </Box>
    );
}
