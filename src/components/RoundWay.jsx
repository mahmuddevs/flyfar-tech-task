import { useState } from "react"
import { Box, Button, Typography, Popover } from "@mui/material"
import FlightIcon from "@mui/icons-material/Flight"
import LocalAirportOutlinedIcon from "@mui/icons-material/LocalAirportOutlined"
import FmdGoodIcon from "@mui/icons-material/FmdGood"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import AirportSelector from "./AirportSelector"

const airportOptions = [
  {
    value: "DAC",
    label: "Dhaka, BANGLADESH",
    airport: "Hazrat Shahjalal Intl Airport",
    display: "Dhaka, BANGLADESH - Hazrat Shahjalal Intl Airport (DAC)",
  },
  {
    value: "DXB",
    label: "Dubai, UNITED ARAB EMIRATES",
    airport: "Dubai Intl Airport",
    display: "Dubai, UNITED ARAB EMIRATES - Dubai Intl Airport (DXB)",
  },
  {
    value: "CXB",
    label: "Cox's Bazar, BANGLADESH",
    airport: "Cox's Bazar Airport",
    display: "Cox's Bazar, BANGLADESH - Cox's Bazar Airport (CXB)",
  },
  {
    value: "JSR",
    label: "Jashore, BANGLADESH",
    airport: "Jashore Airport",
    display: "Jashore, BANGLADESH - Jashore Airport (JSR)",
  },
  {
    value: "BZL",
    label: "Barishal, BANGLADESH",
    airport: "Barishal Airport",
    display: "Barishal, BANGLADESH - Barishal Airport (BZL)",
  },
  {
    value: "RJH",
    label: "Rajshahi, BANGLADESH",
    airport: "Shah Makhdum Airport",
    display: "Rajshahi, BANGLADESH - Shah Makhdum Airport (RJH)",
  },
  {
    value: "SPD",
    label: "Saidpur, BANGLADESH",
    airport: "Saidpur Airport",
    display: "Saidpur, BANGLADESH - Saidpur Airport (SPD)",
  },
]

// Custom airport selector component

const RoundWay = () => {
  // State for selected airports
  const [fromAirport, setFromAirport] = useState(airportOptions[0])
  const [toAirport, setToAirport] = useState(airportOptions[2])

  // State for dates
  const [departureDate, setDepartureDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)

  // State for popover anchors
  const [fromAnchorEl, setFromAnchorEl] = useState(null)
  const [toAnchorEl, setToAnchorEl] = useState(null)
  const [departureDateAnchorEl, setDepartureDateAnchorEl] = useState(null)
  const [returnDateAnchorEl, setReturnDateAnchorEl] = useState(null)

  // Handle airport from button click
  const handleFromClick = (event) => {
    setFromAnchorEl(event.currentTarget)
    setToAnchorEl(null)
    setDepartureDateAnchorEl(null)
    setReturnDateAnchorEl(null)
  }

  // Handle airport to button click
  const handleToClick = (event) => {
    setToAnchorEl(event.currentTarget)
    setFromAnchorEl(null)
    setDepartureDateAnchorEl(null)
    setReturnDateAnchorEl(null)
  }

  // Handle departure date button click
  const handleDepartureDateClick = (event) => {
    setDepartureDateAnchorEl(event.currentTarget)
    setFromAnchorEl(null)
    setToAnchorEl(null)
    setReturnDateAnchorEl(null)
  }

  // Handle return date button click
  const handleReturnDateClick = (event) => {
    setReturnDateAnchorEl(event.currentTarget)
    setFromAnchorEl(null)
    setToAnchorEl(null)
    setDepartureDateAnchorEl(null)
  }

  // Close handlers
  const handleFromClose = () => setFromAnchorEl(null)
  const handleToClose = () => setToAnchorEl(null)
  const handleDepartureDateClose = () => setDepartureDateAnchorEl(null)
  const handleReturnDateClose = () => setReturnDateAnchorEl(null)

  // Check if popovers are open
  const fromOpen = Boolean(fromAnchorEl)
  const toOpen = Boolean(toAnchorEl)
  const departureDateOpen = Boolean(departureDateAnchorEl)
  const returnDateOpen = Boolean(returnDateAnchorEl)

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 2 }}>
      {/* From Section */}
      <Box sx={{ flex: 1, justifySelf: "center", textAlign: "center" }}>
        <Typography fontSize={"13px"}>From</Typography>
        <Typography color="primary" sx={{ fontSize: "40px", fontWeight: 500 }}>
          {fromAirport ? fromAirport.value : airportOptions[0].value}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "80%", mx: "auto" }}>
          {/* From Airport Dropdown */}
          <Box sx={{ position: "relative", width: "100%" }}>
            <Button
              onClick={handleFromClick}
              disableRipple
              sx={{
                display: "flex",
                alignItems: "stretch",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                p: 0,
                "&:hover": { backgroundColor: "inherit", color: "inherit", boxShadow: "none" },
              }}
            >
              <FmdGoodIcon
                sx={{
                  bgcolor: "primary.main",
                  py: 1,
                  px: 2,
                  fontSize: "20px",
                  "& path": { stroke: "white", fill: "none" },
                }}
              />
              <Typography
                sx={{
                  bgcolor: "background.default",
                  py: 1,
                  px: 2,
                  fontSize: "13px",
                  color: "text.secondary",
                  textAlign: "left",
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {fromAirport
                  ? `${fromAirport.airport} (${fromAirport.value})`
                  : `${airportOptions[0].airport} (${airportOptions[0].value})`}
              </Typography>
            </Button>

            <Popover
              open={fromOpen}
              anchorEl={fromAnchorEl}
              onClose={handleFromClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  width: fromAnchorEl ? fromAnchorEl.offsetWidth : "auto",
                  height: 300,
                  mt: 0.5,
                  borderRadius: "0 0 10px 10px",
                },
              }}
            >
              <AirportSelector
                options={airportOptions}
                value={fromAirport}
                onChange={setFromAirport}
                onClose={handleFromClose}
              />
            </Popover>
          </Box>

          {/* Departure Date */}
          <Box sx={{ position: "relative", width: "100%" }}>
            <Button
              onClick={handleDepartureDateClick}
              disableRipple
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "stretch",
                borderRadius: "10px",
                overflow: "hidden",
                p: 0,
                "&:hover": { backgroundColor: "inherit", color: "inherit", boxShadow: "none" },
              }}
            >
              <CalendarMonthIcon
                sx={{
                  bgcolor: "primary.main",
                  py: 1,
                  px: 2,
                  fontSize: "20px",
                  "& path": { stroke: "white", fill: "none" },
                }}
              />
              <Typography
                sx={{
                  bgcolor: "background.default",
                  py: 1,
                  px: 2,
                  fontSize: "13px",
                  color: "text.secondary",
                  textAlign: "left",
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {departureDate ? departureDate.toLocaleDateString() : "Departure Date"}
              </Typography>
            </Button>

            <Popover
              open={departureDateOpen}
              anchorEl={departureDateAnchorEl}
              onClose={handleDepartureDateClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: { width: "auto", mt: 0.5, borderRadius: "0 0 10px 10px" },
              }}
            >
              <DateCalendar
                value={departureDate}
                onChange={(newValue) => {
                  setDepartureDate(newValue)
                  handleDepartureDateClose()
                }}
              />
            </Popover>
          </Box>
        </Box>
      </Box>

      {/* Flight Icons Section */}
      <Box sx={{ position: "relative", display: { xs: "none", md: "block" } }}>
        <FlightIcon
          color="primary"
          sx={{
            transform: "rotate(90deg)",
            height: "6rem",
            width: "6rem",
            "& svg": { viewBox: "0 0 24 24" },
          }}
        />
        <LocalAirportOutlinedIcon
          sx={{
            transform: "rotate(270deg)",
            height: "6rem",
            width: "6rem",
            position: "absolute",
            top: "3.5rem",
            left: "0.5rem",
            "& path": {
              stroke: (theme) => theme.palette.primary.main,
              fill: "white",
            },
            "& svg": { viewBox: "0 0 24 24" },
          }}
        />
      </Box>

      {/* To Section */}
      <Box sx={{ flex: 1, justifySelf: "center", textAlign: "center" }}>
        <Typography fontSize={"13px"}>To</Typography>
        <Typography color="primary" sx={{ fontSize: "40px", fontWeight: 500 }}>
          {toAirport ? toAirport.value : airportOptions[2].value}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "80%", mx: "auto" }}>
          {/* To Airport Dropdown */}
          <Box sx={{ position: "relative", width: "100%" }}>
            <Button
              onClick={handleToClick}
              disableRipple
              sx={{
                display: "flex",
                alignItems: "stretch",
                width: "100%",
                borderRadius: "10px",
                overflow: "hidden",
                p: 0,
                "&:hover": { backgroundColor: "inherit", color: "inherit", boxShadow: "none" },
              }}
            >
              <FmdGoodIcon
                sx={{
                  bgcolor: "primary.main",
                  py: 1,
                  px: 2,
                  fontSize: "20px",
                  "& path": { stroke: "white", fill: "none" },
                }}
              />
              <Typography
                sx={{
                  bgcolor: "background.default",
                  py: 1,
                  px: 2,
                  fontSize: "13px",
                  color: "text.secondary",
                  textAlign: "left",
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {toAirport
                  ? `${toAirport.airport} (${toAirport.value})`
                  : `${airportOptions[2].airport} (${airportOptions[2].value})`}
              </Typography>
            </Button>

            <Popover
              open={toOpen}
              anchorEl={toAnchorEl}
              onClose={handleToClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: {
                  width: toAnchorEl ? toAnchorEl.offsetWidth : "auto",
                  height: 300,
                  mt: 0.5,
                  borderRadius: "0 0 10px 10px",
                },
              }}
            >
              <AirportSelector
                options={airportOptions}
                value={toAirport}
                onChange={setToAirport}
                onClose={handleToClose}
              />
            </Popover>
          </Box>

          {/* Return Date */}
          <Box sx={{ position: "relative", width: "100%" }}>
            <Button
              onClick={handleReturnDateClick}
              disableRipple
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "stretch",
                borderRadius: "10px",
                overflow: "hidden",
                p: 0,
                "&:hover": { backgroundColor: "inherit", color: "inherit", boxShadow: "none" },
              }}
            >
              <CalendarMonthIcon
                sx={{
                  bgcolor: "primary.main",
                  py: 1,
                  px: 2,
                  fontSize: "20px",
                  "& path": { stroke: "white", fill: "none" },
                }}
              />
              <Typography
                sx={{
                  bgcolor: "background.default",
                  py: 1,
                  px: 2,
                  fontSize: "13px",
                  color: "text.secondary",
                  textAlign: "left",
                  flex: 1,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {returnDate ? returnDate.toLocaleDateString() : "Return Date"}
              </Typography>
            </Button>

            <Popover
              open={returnDateOpen}
              anchorEl={returnDateAnchorEl}
              onClose={handleReturnDateClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              PaperProps={{
                sx: { width: "auto", mt: 0.5, borderRadius: "0 0 10px 10px" },
              }}
            >
              <DateCalendar
                value={returnDate}
                onChange={(newValue) => {
                  setReturnDate(newValue)
                  handleReturnDateClose()
                }}
              />
            </Popover>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RoundWay
