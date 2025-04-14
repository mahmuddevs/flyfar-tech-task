import {
    Box,
    Card,
    Typography,
    Button,
    Avatar,
    Stack,
    Divider,
} from '@mui/material';
import FlightIcon from "@mui/icons-material/Flight"

export default function Ticket() {
    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: 2,
                p: 2,
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Box>
                <Stack direction="row" alignItems="center" spacing={2} sx={{ minWidth: 180 }}>
                    <Avatar
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/US-Bangla_Airlines_logo.svg/640px-US-Bangla_Airlines_logo.svg.png"
                        alt="US-Bangla"
                        sx={{ width: 40, height: 40 }}
                    />
                    <Box>
                        <Typography fontWeight={500} fontSize="0.9rem" color="primary.main">
                            USBangla Airlines
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            BS-141
                        </Typography>
                    </Box>
                </Stack>
                <Box>
                    <Typography fontSize="0.75rem">1H 5Min</Typography>
                    <Typography fontSize="0.75rem" color="text.secondary">
                        NON STOP
                    </Typography>
                </Box>
            </Box>

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems="center"
                justifyContent="center"
                spacing={4}
                sx={{ flexGrow: 1 }}
            >
                <Box textAlign="center">
                    <Typography fontWeight="bold" fontSize="1.2rem" color="primary.main">
                        DAC
                    </Typography>
                    <Typography variant="body2">Hazrat Shahjalal Intl Airport</Typography>
                    <Typography variant="body2">07:20</Typography>
                    <Typography variant="caption" color="primary.main">Tue 15 Apr 2025</Typography>
                </Box>

                <Box textAlign="center">
                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                        <FlightIcon
                            color="primary"
                            sx={{
                                transform: "rotate(90deg)",
                                height: "6rem",
                                width: "6rem",
                                "& svg": { viewBox: "0 0 24 24" },
                            }}
                        />
                    </Box>
                </Box>

                <Box textAlign="center">
                    <Typography fontWeight="bold" fontSize="1.2rem" color="primary.main">
                        CXB
                    </Typography>
                    <Typography variant="body2">COXs Bazar Airport</Typography>
                    <Typography variant="body2">08:25</Typography>
                    <Typography variant="caption" color="primary.main">Tue 15 Apr 2025</Typography>
                </Box>
            </Stack>

            <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: 'none', md: 'block' }, mx: 2 }}
            />

            <Box textAlign="center" sx={{ minWidth: 160 }}>
                <Typography fontSize="1.5rem" fontWeight={600} color="primary.main">
                    ৳ 5,539
                </Typography>
                <Typography
                    fontSize="0.875rem"
                    sx={{ textDecoration: 'line-through', color: 'grey.500' }}
                >
                    ৳ 6,199
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 10,
                        mt: 1,
                        backgroundColor: 'secondary.main',
                        fontSize: '0.8rem',
                        px: 3,
                        '&:hover': { backgroundColor: '#333' },
                    }}
                >
                    BOOK NOW
                </Button>

                <Typography
                    variant="caption"
                    display="block"
                    color="primary"
                    sx={{ mt: 0.5 }}
                >
                    FLIGHT DETAILS →
                </Typography>
            </Box>
        </Card>
    );
}
