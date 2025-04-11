import { Box, Button, ClickAwayListener, Typography } from "@mui/material";
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
  const [selected, setSelected] = useState([null, null, null, null]);
  const [visibleFrom, setVisibleFrom] = useState(false);
  const [visibleTo, setVisibleTo] = useState(false);
  const [visibleDateFrom, setVisibleDateFrom] = useState(false);
  const [visibleDateTo, setVisibleDateTo] = useState(false);
  const [selectedDateFrom, setSelectedDateFrom] = useState(null);
  const [selectedDateTo, setSelectedDateTo] = useState(null);

  const handleActiveFrom = () => {
    setVisibleFrom(prev => !prev);
    setVisibleTo(false);
    setVisibleDateFrom(false);
    setVisibleDateTo(false);
  };

  const handleActiveTo = () => {
    setVisibleTo(prev => !prev);
    setVisibleFrom(false);
    setVisibleDateFrom(false);
    setVisibleDateTo(false);
  };

  const handleDateFrom = () => {
    setVisibleDateFrom(prev => !prev);
    setVisibleFrom(false);
    setVisibleTo(false);
    setVisibleDateTo(false);
  };

  const handleDateTo = () => {
    setVisibleDateTo(prev => !prev);
    setVisibleFrom(false);
    setVisibleTo(false);
    setVisibleDateFrom(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
      {/* From Section */}
      <Box sx={{ flex: 1, justifySelf: 'center', textAlign: 'center' }}>
        <Typography fontSize={'13px'}>From</Typography>
        <Typography color="primary" sx={{ fontSize: '40px', fontWeight: 500 }}>
          {selected[0] ? `${selected[0].value}` : `${airportOptions[0].value}`}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '80%', mx: 'auto' }}>
          {/* From Airport Dropdown */}
          <Box sx={{ position: 'relative', width: '100%' }}>
            <ClickAwayListener onClickAway={() => setVisibleFrom(false)}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Button
                  onClick={handleActiveFrom}
                  disableRipple
                  sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    width: '100%',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    p: 0,
                    '&:hover': { backgroundColor: 'inherit', color: 'inherit', boxShadow: 'none' },
                  }}
                >
                  <FmdGoodIcon
                    sx={{
                      bgcolor: 'primary.main',
                      py: 1,
                      px: 2,
                      fontSize: '20px',
                      '& path': { stroke: 'white', fill: 'none' },
                    }}
                  />
                  <Typography
                    sx={{
                      bgcolor: 'background.default',
                      py: 1,
                      px: 2,
                      fontSize: '13px',
                      color: 'text.secondary',
                      textAlign: 'left',
                      flex: 1,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis', // Text truncation with ellipsis
                    }}
                  >
                    {selected[0]
                      ? `${selected[0].airport} (${selected[0].value})`
                      : `${airportOptions[0].airport} (${airportOptions[0].value})`}
                  </Typography>
                </Button>

                {visibleFrom && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '100%',
                      boxSizing: 'border-box',
                      bgcolor: 'primary.main',
                      height: '300px',
                      zIndex: 50,
                      borderRadius: '0 0 10px 10px',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Dropdown From - Airport options */}
                  </Box>
                )}
              </Box>
            </ClickAwayListener>
          </Box>

          {/* Departure Date */}
          <Box sx={{ position: 'relative', width: '100%' }}>
            <ClickAwayListener onClickAway={() => setVisibleDateFrom(false)}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Button
                  onClick={handleDateFrom}
                  disableRipple
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'stretch',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    p: 0,
                    '&:hover': { backgroundColor: 'inherit', color: 'inherit', boxShadow: 'none' },
                  }}
                >
                  <CalendarMonthIcon
                    sx={{
                      bgcolor: 'primary.main',
                      py: 1,
                      px: 2,
                      fontSize: '20px',
                      '& path': { stroke: 'white', fill: 'none' },
                    }}
                  />
                  <Typography
                    sx={{
                      bgcolor: 'background.default',
                      py: 1,
                      px: 2,
                      fontSize: '13px',
                      color: 'text.secondary',
                      textAlign: 'left',
                      flex: 1,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Departure Date
                  </Typography>
                </Button>

                {visibleDateFrom && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '100%',
                      boxSizing: 'border-box',
                      bgcolor: 'background.paper',
                      zIndex: 50,
                      borderRadius: '0 0 10px 10px',
                      overflow: 'hidden',
                      p: 2
                    }}
                  >
                    {/* Your date picker component here */}
                  </Box>
                )}
              </Box>
            </ClickAwayListener>
          </Box>
        </Box>
      </Box>

      {/* Flight Icons Section */}
      <Box sx={{ position: 'relative', display: { xs: 'none', md: 'block' } }}>
        <FlightIcon color="primary" sx={{
          transform: 'rotate(90deg)',
          height: '6rem',
          width: '6rem',
          '& svg': { viewBox: '0 0 24 24' }
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
          '& svg': { viewBox: '0 0 24 24' }
        }} />
      </Box>

      {/* To Section */}
      <Box sx={{ flex: 1, justifySelf: 'center', textAlign: 'center' }}>
        <Typography fontSize={'13px'}>To</Typography>
        <Typography color="primary" sx={{ fontSize: '40px', fontWeight: 500 }}>
          {selected[2] ? `${selected[2].value}` : `${airportOptions[2].value}`}
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '80%', mx: 'auto' }}>
          {/* To Airport Dropdown */}
          <Box sx={{ position: 'relative', width: '100%' }}>
            <ClickAwayListener onClickAway={() => setVisibleTo(false)}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Button
                  onClick={handleActiveTo}
                  disableRipple
                  sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    width: '100%',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    p: 0,
                    '&:hover': { backgroundColor: 'inherit', color: 'inherit', boxShadow: 'none' },
                  }}
                >
                  <FmdGoodIcon
                    sx={{
                      bgcolor: 'primary.main',
                      py: 1,
                      px: 2,
                      fontSize: '20px',
                      '& path': { stroke: 'white', fill: 'none' },
                    }}
                  />
                  <Typography
                    sx={{
                      bgcolor: 'background.default',
                      py: 1,
                      px: 2,
                      fontSize: '13px',
                      color: 'text.secondary',
                      textAlign: 'left',
                      flex: 1,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis', // Text truncation with ellipsis
                    }}
                  >
                    {selected[2]
                      ? `${selected[2].airport} (${selected[2].value})`
                      : `${airportOptions[2].airport} (${airportOptions[2].value})`}
                  </Typography>
                </Button>

                {visibleTo && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '100%',
                      boxSizing: 'border-box',
                      bgcolor: 'primary.main',
                      height: '300px',
                      zIndex: 50,
                      borderRadius: '0 0 10px 10px',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Dropdown To - Airport options */}
                  </Box>
                )}
              </Box>
            </ClickAwayListener>
          </Box>

          {/* Return Date */}
          <Box sx={{ position: 'relative', width: '100%' }}>
            <ClickAwayListener onClickAway={() => setVisibleDateTo(false)}>
              <Box sx={{ position: 'relative', width: '100%' }}>
                <Button
                  onClick={handleDateTo}
                  disableRipple
                  sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'stretch',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    p: 0,
                    '&:hover': { backgroundColor: 'inherit', color: 'inherit', boxShadow: 'none' },
                  }}
                >
                  <CalendarMonthIcon
                    sx={{
                      bgcolor: 'primary.main',
                      py: 1,
                      px: 2,
                      fontSize: '20px',
                      '& path': { stroke: 'white', fill: 'none' },
                    }}
                  />
                  <Typography
                    sx={{
                      bgcolor: 'background.default',
                      py: 1,
                      px: 2,
                      fontSize: '13px',
                      color: 'text.secondary',
                      textAlign: 'left',
                      flex: 1,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    Return Date
                  </Typography>
                </Button>

                {visibleDateTo && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '100%',
                      boxSizing: 'border-box',
                      bgcolor: 'background.paper',
                      zIndex: 50,
                      borderRadius: '0 0 10px 10px',
                      overflow: 'hidden',
                      p: 2
                    }}
                  >
                    {/* Your date picker component here */}
                  </Box>
                )}
              </Box>
            </ClickAwayListener>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RoundWay;
