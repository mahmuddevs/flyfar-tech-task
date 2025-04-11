import { Box, Button, Container, Paper } from "@mui/material"
import siteLogo from '../assets/companylogo.png'
import { useEffect, useState } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <Paper component="header" elevation={scrolled ? 1 : 0} sx={{
            position: 'sticky', top: 0, zIndex: 1100, py: 2,
            backgroundColor: scrolled ? 'white' : 'transparent',
            transition: 'all 0.3s ease',
        }}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="/"><Box component="img" src={siteLogo} sx={{ width: { xs: '110px', md: '130px' } }} alt="fly-far" /></a>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant="contained" color="primary" sx={{ borderRadius: 5, px: 3 }}>
                        Travel Agency
                    </Button>
                    <Button variant="contained" color="secondary" sx={{ borderRadius: 5, px: 3 }}>
                        Login / Sign Up
                    </Button>
                </Box>
            </Container>
        </Paper>
    )
}
export default Header