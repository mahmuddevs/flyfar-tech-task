import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#32d095',
            light: '#6bffc6',
            dark: '#009f66',
            contrastText: '#fff',
        },
        secondary: {
            main: '#525371',
            light: '#7f7e9e',
            dark: '#2a2c47',
            contrastText: '#fff',
        },
        background: {
            default: '#d7e7f4',
            paper: '#ffffff',
        },
        text: {
            primary: '#2a2c47',
            secondary: '#525371',
        },
    },
    typography: {
        h1: { fontWeight: 700 },
        button: { textTransform: 'none' }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: { borderRadius: '8px' }
            },
        },
    },
});

export default theme;