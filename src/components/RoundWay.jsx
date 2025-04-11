import { Box, Button, Typography } from "@mui/material"
import FlightIcon from '@mui/icons-material/Flight';
import LocalAirportOutlinedIcon from '@mui/icons-material/LocalAirportOutlined';
import { useState } from "react";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const airportOptions = [
  {
    value: 'DAC',
    label: 'Dhaka, BANGLADESH',
    airport: 'Hazrat Shahjalal Intl Airport',
    display: 'Dhaka, BANGLADESH - Hazrat Shahjalal Intl Airport (DAC)'
  },
  {
    value: 'DXB',
    label: 'Dubai, UNITED ARAB EMIRATES',
    airport: 'Dubai Intl Airport',
    display: 'Dubai, UNITED ARAB EMIRATES - Dubai Intl Airport (DXB)'
  },
  {
    value: 'CXB',
    label: "Cox's Bazar, BANGLADESH",
    airport: "Cox's Bazar Airport",
    display: "Cox's Bazar, BANGLADESH - Cox's Bazar Airport (CXB)"
  },
  {
    value: 'JSR',
    label: 'Jashore, BANGLADESH',
    airport: 'Jashore Airport',
    display: 'Jashore, BANGLADESH - Jashore Airport (JSR)'
  },
  {
    value: 'BZL',
    label: 'Barishal, BANGLADESH',
    airport: 'Barishal Airport',
    display: 'Barishal, BANGLADESH - Barishal Airport (BZL)'
  },
  {
    value: 'RJH',
    label: 'Rajshahi, BANGLADESH',
    airport: 'Shah Makhdum Airport',
    display: 'Rajshahi, BANGLADESH - Shah Makhdum Airport (RJH)'
  },
  {
    value: 'SPD',
    label: 'Saidpur, BANGLADESH',
    airport: 'Saidpur Airport',
    display: 'Saidpur, BANGLADESH - Saidpur Airport (SPD)'
  }
];


const RoundWay = () => {
  const [selected, setSelected] = useState([null, null, null, null])
  const [visible, setVisible] = useState([false, false, false, false])
  const [searchValues, setSearchValues] = useState({
    to: {
      location: {},
      date: ''
    },
    from: {
      location: {},
      date: ''
    }
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
      <Box sx={{ flex: 1, justifySelf: 'center', textAlign: 'center' }}>
        <Typography fontSize={'13px'}>
          From
        </Typography>
        <Typography color="primary" sx={{ fontSize: '40px', fontWeight: 500 }}>
          {selected[0] ? `${selected[0].value}` : `${airportOptions[0].value}`}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Button disableRipple sx={{
            '&:hover': {
              backgroundColor: 'inherit',
              color: 'inherit',
              boxShadow: 'none',
            },
          }}>
            <FmdGoodIcon
              sx={{
                bgcolor: 'primary.main',
                py: 1,
                px: 2,
                fontSize: '20px',
                '& path': {
                  stroke: 'white',
                  fill: 'none'
                },
                borderRadius: '10px 0 0 10px'
              }}
            />
            <Typography sx={{
              bgcolor: 'background.default',
              py: 1,
              px: 2,
              fontSize: '13px',
              color: 'text.secondary',
              borderRadius: '0 10px 10px 0',
              minWidth: '200px',
              textAlign: 'left'
            }}
            >{selected[0] ? `${selected[0].airport} (${selected[0].value})` : `${airportOptions[2].airport} (${airportOptions[0].value})`}</Typography>
          </Button>
          <Button disableRipple sx={{
            '&:hover': {
              backgroundColor: 'inherit',
              color: 'inherit',
              boxShadow: 'none',
            },
          }}>
            <CalendarMonthIcon
              sx={{
                bgcolor: 'primary.main',
                py: 1,
                px: 2,
                fontSize: '20px',
                '& path': {
                  stroke: 'white',
                  fill: 'none'
                },
                borderRadius: '10px 0 0 10px'
              }}
            />
            <Typography sx={{
              bgcolor: 'background.default',
              py: 1,
              px: 2,
              fontSize: '13px',
              color: 'text.secondary',
              borderRadius: '0 10px 10px 0',
              minWidth: '200px',
              textAlign: 'left'
            }}
            >
              date
            </Typography>
          </Button>

        </Box>
      </Box>
      <Box sx={{ position: 'relative', display: { xs: 'none', md: 'block' } }}>
        <FlightIcon color="primary" sx={{
          transform: 'rotate(90deg)',
          height: '6rem',
          width: '6rem',
          '& svg': {
            viewBox: '0 0 24 24'
          }
        }} />
        <LocalAirportOutlinedIcon sx={{
          transform: 'rotate(270deg)',
          height: '6rem',
          width: '6rem',
          position: 'absolute',
          top: "3.5rem",
          left: "0.5rem",
          '& path': {
            stroke: (theme) => theme.palette.primary.main,
            fill: 'white'
          },
          '& svg': {
            viewBox: '0 0 24 24'
          }
        }} />
      </Box>
      <Box sx={{ flex: 1, justifySelf: 'center', textAlign: 'center' }}>
        <Typography fontSize={'13px'}>
          To
        </Typography>
        <Typography color="primary" sx={{ fontSize: '40px', fontWeight: 500 }}>
          {selected[2] ? `${selected[2].value}` : `${airportOptions[2].value}`}
        </Typography>
        <Box>
          <Button disableRipple sx={{
            '&:hover': {
              backgroundColor: 'inherit',
              color: 'inherit',
              boxShadow: 'none',
            },
          }}>
            <FmdGoodIcon
              sx={{
                bgcolor: 'primary.main',
                py: 1,
                px: 2,
                fontSize: '20px',
                '& path': {
                  stroke: 'white',
                  fill: 'none'
                },
                borderRadius: '10px 0 0 10px'
              }}
            />
            <Typography sx={{
              bgcolor: 'background.default',
              py: 1,
              px: 2,
              fontSize: '13px',
              color: 'text.secondary',
              borderRadius: '0 10px 10px 0',
              minWidth: '200px',
              textAlign: 'left'
            }}
            >{selected[2] ? `${selected[2].airport} (${selected[2].value})` : `${airportOptions[2].airport} (${airportOptions[2].value})`}</Typography>
          </Button>
          <Button disableRipple sx={{
            '&:hover': {
              backgroundColor: 'inherit',
              color: 'inherit',
              boxShadow: 'none',
            },
          }}>
            <CalendarMonthIcon
              sx={{
                bgcolor: 'primary.main',
                py: 1,
                px: 2,
                fontSize: '20px',
                '& path': {
                  stroke: 'white',
                  fill: 'none'
                },
                borderRadius: '10px 0 0 10px'
              }}
            />
            <Typography sx={{
              bgcolor: 'background.default',
              py: 1,
              px: 2,
              fontSize: '13px',
              color: 'text.secondary',
              borderRadius: '0 10px 10px 0',
              minWidth: '200px',
              textAlign: 'left'
            }}
            >
              date
            </Typography>
          </Button>

        </Box>
      </Box>
    </Box >
  )
}
export default RoundWay