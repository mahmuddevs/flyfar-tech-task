import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, TextField, Typography } from "@mui/material"

import LocationPinIcon from '@mui/icons-material/LocationPin';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

import certificate1 from '../assets/IATA.png'
import certificate2 from '../assets/ATAB.png'
import certificate3 from '../assets/TOAB.png'
import certificate4 from '../assets/PATA.png'
import certificate5 from '../assets/BimanBD.png'
import paymentGatewayImg from '../assets/paymentgetwayimg.png'

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#32d095', borderTop: '5px solid', borderColor: 'secondary.main', mt: { xs: 6, md: 10 } }}>
            <Container sx={{ color: 'white' }}>
                <Box sx={{ flexGrow: 1, py: { xs: 4, md: 8 } }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, md: 4 }}>
                        <Grid size={{ xs: 2, sm: 1 }} order={{ xs: 0, sm: 0 }}>
                            <Typography variant="h3" sx={{ fontSize: '20px', fontWeight: '400', mb: 4 }}>
                                Need Help
                            </Typography>
                            <List sx={{ p: 0 }}>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    <ListItemIcon
                                        sx={{
                                            color: 'white',
                                            minWidth: '30px',
                                            mt: '2px',
                                        }}
                                    >
                                        <LocationPinIcon sx={{ fontSize: '1.5rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Ka 11/2A, Bashundhora R/A Road, Jagannathpur, Dhaka 1229"
                                        primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    <ListItemIcon
                                        sx={{
                                            color: 'white',
                                            minWidth: '30px',
                                            mt: '2px',
                                        }}
                                    >
                                        <EmailIcon sx={{ fontSize: '1.5rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="support@flyfarint.com"
                                        primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                    />
                                </ListItem>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    <ListItemIcon
                                        sx={{
                                            color: 'white',
                                            minWidth: '30px',
                                            mt: '2px',
                                        }}
                                    >
                                        <CallIcon sx={{ fontSize: '1.5rem' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="+880 1755 572 099"
                                        primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                    />
                                </ListItem>
                            </List>
                            <Stack direction='row' spacing={2} sx={{ mt: 2 }} >
                                <a href="https://www.facebook.com/">
                                    <FacebookIcon sx={{ color: 'white', fontSize: '30px' }} />
                                </a>
                                <a href="https://www.instagram.com/">
                                    <InstagramIcon sx={{ color: 'white', fontSize: '30px' }} />
                                </a>
                                <a href="https://web.whatsapp.com/">
                                    <WhatsAppIcon sx={{ color: 'white', fontSize: '30px' }} />
                                </a>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 1, sm: 1 }} order={{ xs: 1, sm: 1 }} >
                            <Typography variant="h3" sx={{ fontSize: '20px', fontWeight: '400', mb: 4 }}>
                                Discover
                            </Typography>
                            <List sx={{
                                p: 0,
                                '& a': {
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }
                            }}>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    {/* These a tags will be replaced with Link from react-router */}
                                    <a href="">
                                        <ListItemText
                                            primary="About Us"
                                            primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                        />
                                    </a>
                                </ListItem>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    <a href="">
                                        <ListItemText
                                            primary="Contact Us"
                                            primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                        />
                                    </a>
                                </ListItem>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    <a href="">
                                        <ListItemText
                                            primary="Payment Method"
                                            primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                        />
                                    </a>
                                </ListItem>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    <a href="">
                                        <ListItemText
                                            primary="Terms and Condition"
                                            primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                        />
                                    </a>
                                </ListItem>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    <a href="">
                                        <ListItemText
                                            primary="Privacy Policy"
                                            primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                        />
                                    </a>
                                </ListItem>
                                <ListItem sx={{ p: 0, alignItems: 'flex-start' }}>
                                    <a href="">
                                        <ListItemText
                                            primary="Refund & Cancellation Policy"
                                            primaryTypographyProps={{ fontSize: '14px', color: 'white' }}
                                        />
                                    </a>
                                </ListItem>

                            </List>
                        </Grid>

                        <Grid size={{ xs: 2, sm: 1 }} order={{ xs: 3, sm: 2 }}>
                            <Typography variant="h3" sx={{ fontSize: '20px', fontWeight: '400', mb: 4 }}>
                                Certification
                            </Typography>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                        <img src={certificate1} alt="" width='100%' />
                                    </Grid>
                                    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                        <img src={certificate2} alt="" width='100%' />
                                    </Grid>
                                    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                        <img src={certificate3} alt="" width='100%' />
                                    </Grid>
                                    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                        <img src={certificate4} alt="" width='100%' />
                                    </Grid>
                                    <Grid size={{ xs: 2, sm: 4, md: 4 }}>
                                        <img src={certificate5} alt="" width='100%' />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 1, sm: 1 }} order={{ xs: 2, sm: 3 }} >
                            <Typography variant="h3" sx={{ fontSize: '20px', fontWeight: '400', mb: 4 }}>
                                Get In Touch
                            </Typography>
                            <Box>
                                <Typography sx={{ fontSize: '12px', mb: 2 }}>
                                    Question or feedback we would love to hear from you
                                </Typography>
                                <form style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <TextField
                                        placeholder="Email Address"
                                        type="email"
                                        variant="outlined"
                                        fullWidth
                                        InputLabelProps={{ shrink: false }}
                                        InputProps={{
                                            endAdornment: (
                                                <Button
                                                    sx={{
                                                        bgcolor: 'white',
                                                        minWidth: '30px',
                                                        width: '30px',
                                                        height: '30px',
                                                        borderRadius: '50%',
                                                        p: 0,
                                                        '&:hover': {
                                                            bgcolor: '#f0f0f0',
                                                        },
                                                        position: 'absolute',
                                                        right: '5px',
                                                    }}
                                                >
                                                    <TelegramIcon sx={{ color: 'primary.main' }} />
                                                </Button>
                                            ),
                                        }}
                                        sx={{
                                            position: 'relative',
                                            '& .MuiOutlinedInput-root': {
                                                height: '40px',
                                                color: 'white',
                                                borderRadius: '999px',
                                                '& fieldset': {
                                                    borderColor: 'white',
                                                    borderWidth: '1px',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: 'white',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: 'white',
                                                },
                                            },
                                            '& input::placeholder': {
                                                color: 'white',
                                                opacity: 1,
                                            },
                                        }}
                                    />
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', height: { xs: '100%', md: '75px' } }}>
                    <img src={paymentGatewayImg} alt="" width='80%' />
                </Box>
                <Box sx={{ borderTop: '2px solid #555555', mt: 2, p: 2, textAlign: 'center', fontWeight: 400 }}>
                    © Copyright 2025 by Fly Far Tech | B2C OTA Portal
                </Box>
            </Container >
        </Box >
    )
}
export default Footer