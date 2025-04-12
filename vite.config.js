import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "@mui/material/Tooltip",
      "@mui/material/Popover",
      "@mui/material/Modal",
      "@mui/material/Popper",
      "@mui/material/Dialog",
      "@mui/x-date-pickers/AdapterDateFns",
      "@mui/x-date-pickers/LocalizationProvider",
      "@mui/x-date-pickers/DatePicker",
      "date-fns",
    ],
  },
  exclude: ['@mui/x-date-pickers/AdapterDateFns'],
  resolve: {
    alias: {
      "@mui/x-date-pickers": "@mui/x-date-pickers",
    },
  },
})
