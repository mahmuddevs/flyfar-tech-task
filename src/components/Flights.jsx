import { useContext, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import RoundWay from './RoundWay';
import FlightSearch from './FlightSearch';
import { Stack } from '@mui/material';
import { SearchDataContext } from '../providers/SearchDataProvider';
import OneWay from './OneWay';
import { useNavigate } from 'react-router';

export default function Flights() {
    const { addSeatData } = useContext(SearchDataContext)
    const [selectedTab, setSelectedTab] = useState('ROUND-WAY');
    const [formData, setFormData] = useState({
        adultCount: 1,
        childCount: 0,
        infantCount: 0,
        classType: 'Economy',
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSearch = () => {
        addSeatData(formData)
        navigate('/tickets')

    };

    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    const formProps = {
        formData,
        handleChange,
        handleSearch
    }

    return (
        <Stack
            sx={{
                flexDirection: { xs: 'column', sm: 'row', md: 'column', lg: 'row' },
                justifyContent: 'center',
                alignItems: 'stretch',
            }}
        >
            <Box
                sx={{
                    bgcolor: 'white',
                    width: { sm: '60%', md: 'auto', lg: '70%' },
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
                            sx={{
                                '& .MuiFormControlLabel-label': { fontSize: '11px' },
                                '& .MuiRadio-root': {
                                    padding: '4px',
                                    transform: 'scale(0.8)',
                                },
                            }}
                            value="ROUND-WAY"
                            control={<Radio />}
                            label="ROUND-WAY"
                        />
                        <FormControlLabel
                            sx={{
                                '& .MuiFormControlLabel-label': { fontSize: '11px' },
                                '& .MuiRadio-root': {
                                    padding: '4px',
                                    transform: 'scale(0.8)',
                                },
                            }}
                            value="ONE-WAY"
                            control={<Radio />}
                            label="ONE-WAY"
                        />
                        <FormControlLabel
                            sx={{
                                '& .MuiFormControlLabel-label': { fontSize: '11px' },
                                '& .MuiRadio-root': {
                                    padding: '4px',
                                    transform: 'scale(0.8)',
                                },
                            }}
                            value="MULTI-CITY"
                            control={<Radio />}
                            label="MULTI-CITY"
                        />
                    </RadioGroup>
                </FormControl>

                <Box sx={{ marginTop: 2 }}>
                    {selectedTab === 'ROUND-WAY' && <RoundWay />}
                    {selectedTab === 'ONE-WAY' && <OneWay />}
                    {selectedTab === 'MULTI-CITY' && <div>Content for MULTI-CITY Tab</div>}
                </Box>
            </Box>

            <FlightSearch {...formProps} />
        </Stack >
    );
}
