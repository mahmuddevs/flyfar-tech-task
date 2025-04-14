import {
    Container,
    Stack,
    FormControl,
    Select,
    MenuItem,
    Button,
} from '@mui/material';

const FlightSearch = ({ formData, handleChange, handleSearch }) => {

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
                borderLeft: { xs: 'none', sm: '1px dashed', md: 'none', lg: '1px dashed' },
            }}
        >
            <Stack spacing={3} sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={1}>
                    <FormControl fullWidth variant="standard">
                        <Select
                            name="adultCount"
                            value={formData.adultCount}
                            onChange={handleChange}
                            sx={{
                                fontSize: '10px',
                                bgcolor: '#d7e7f4',
                                px: 1,
                                py: 0.5,
                                borderRadius: 2,
                                '&::before, &::after': {
                                    display: 'none'
                                }
                            }}
                        >
                            {[...Array(9)].map((_, i) => (
                                <MenuItem key={i + 1} value={i + 1}>
                                    {i + 1} ADULT
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth variant="standard">
                        <Select
                            name="childCount"
                            value={formData.childCount}
                            onChange={handleChange}
                            sx={{
                                fontSize: '10px',
                                bgcolor: '#d7e7f4',
                                px: 1,
                                py: 0.5,
                                borderRadius: 2,
                                '&::before, &::after': {
                                    display: 'none'
                                }
                            }}
                        >
                            {[...Array(6)].map((_, i) => (
                                <MenuItem key={i} value={i}>
                                    {i} CHILD
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth variant="standard">
                        <Select
                            name="infantCount"
                            value={formData.infantCount}
                            onChange={handleChange}
                            sx={{
                                fontSize: '10px',
                                bgcolor: '#d7e7f4',
                                px: 1,
                                py: 0.5,
                                borderRadius: 2,
                                '&::before, &::after': {
                                    display: 'none'
                                }
                            }}
                        >
                            {[...Array(5)].map((_, i) => (
                                <MenuItem key={i} value={i}>
                                    {i} INFANT
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>

                <FormControl fullWidth variant="standard">
                    <Select
                        name="classType"
                        value={formData.classType}
                        onChange={handleChange}
                        sx={{
                            fontSize: '11px',
                            bgcolor: '#d7e7f4',
                            px: 1,
                            py: 0.5,
                            borderRadius: 2,
                            '&::before, &::after': {
                                display: 'none'
                            }
                        }}
                    >
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
                    mt: { xs: 6, lg: 'auto' },
                }}
            >
                Search For Flight
            </Button>
        </Container>

    )
}

export default FlightSearch;
