import { useContext, useEffect, useState } from "react"
import { Box, Button, Typography, Popover } from "@mui/material"
import FlightIcon from "@mui/icons-material/Flight"
import FmdGoodIcon from "@mui/icons-material/FmdGood"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import AirportSelector from "./AirportSelector"
import { SearchDataContext } from "../providers/SearchDataProvider"
import { airportOptions } from "../assets/data"


const OneWay = () => {
    const { addFlightData } = useContext(SearchDataContext)
    const [flightData, setFlightData] = useState({
        fromAirport: airportOptions[0],
        toAirport: airportOptions[2],
        departureDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
    });

    const [anchorEl, setAnchorEl] = useState({
        from: null,
        to: null,
        departureDate: null
    });

    const handleButtonClick = (type) => (event) => {
        setAnchorEl({
            from: type === 'from' ? event.currentTarget : null,
            to: type === 'to' ? event.currentTarget : null,
            departureDate: type === 'departureDate' ? event.currentTarget : null,
            returnDate: type === 'returnDate' ? event.currentTarget : null
        });
    };

    // Close handlers
    const handleClose = (type) => () => {
        setAnchorEl(prev => ({ ...prev, [type]: null }));
    };

    // Check if popovers are open
    const fromOpen = Boolean(anchorEl.from);
    const toOpen = Boolean(anchorEl.to);
    const departureDateOpen = Boolean(anchorEl.departureDate);

    // Update state
    const updateState = (key, value) => {
        setFlightData(prev => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        if (flightData) {
            addFlightData(flightData)
        }
    }, [flightData]);

    return (
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 2 }}>
            {/* From Section */}
            <Box sx={{ flex: 1, justifySelf: "center", textAlign: "center" }}>
                <Typography fontSize={"13px"}>From</Typography>
                <Typography color="primary" sx={{ fontSize: { xs: "22px", md: "40px" }, fontWeight: 500 }}>
                    {flightData.fromAirport ? flightData.fromAirport.value : airportOptions[0].value}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "80%", mx: "auto" }}>
                    {/* From Airport Dropdown */}
                    <Box sx={{ position: "relative", width: "100%" }}>
                        <Button
                            onClick={handleButtonClick('from')}
                            disableRipple
                            sx={{
                                display: "flex",
                                alignItems: "stretch",
                                fontSize: "12px",
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
                                    p: 1,
                                    fontSize: "13px",
                                    color: "text.secondary",
                                    textAlign: "left",
                                    flex: 1,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {flightData.fromAirport
                                    ? `${flightData.fromAirport.airport} (${flightData.fromAirport.value})`
                                    : `${airportOptions[0].airport} (${airportOptions[0].value})`}
                            </Typography>
                        </Button>

                        <Popover
                            open={fromOpen}
                            anchorEl={anchorEl.from}
                            onClose={handleClose('from')}
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
                                    width: anchorEl.from ? anchorEl.from.offsetWidth : "auto",
                                    height: 300,
                                    mt: 0.5,
                                    borderRadius: "0 0 10px 10px",
                                },
                            }}
                        >
                            <AirportSelector
                                options={airportOptions}
                                value={flightData.fromAirport}
                                onChange={(value) => updateState('fromAirport', value)}
                                onClose={handleClose('from')}
                            />
                        </Popover>
                    </Box>

                    {/* Departure Date */}
                    <Box sx={{ position: "relative", width: "100%" }}>
                        <Button
                            onClick={handleButtonClick('departureDate')}
                            disableRipple
                            sx={{
                                width: "100%",
                                display: "flex",
                                fontSize: "12px",
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
                                    p: 1,
                                    fontSize: "13px",
                                    color: "text.secondary",
                                    textAlign: "left",
                                    flex: 1,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {flightData.departureDate
                                    ? flightData.departureDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
                                    : "Departure Date"}
                            </Typography>
                        </Button>

                        <Popover
                            open={departureDateOpen}
                            anchorEl={anchorEl.departureDate}
                            onClose={handleClose('departureDate')}
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
                                value={flightData.departureDate}
                                onChange={(newValue) => {
                                    updateState('departureDate', newValue);
                                    handleClose('departureDate')();
                                }}
                            />
                        </Popover>
                    </Box>
                </Box>
            </Box>

            {/* Flight Icons Section */}
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

            {/* To Section */}
            <Box sx={{ flex: 1, justifySelf: "center", textAlign: "center" }}>
                <Typography fontSize={"13px"}>To</Typography>
                <Typography color="primary" sx={{ fontSize: { xs: "22px", md: "40px" }, fontWeight: 500 }}>
                    {flightData.toAirport ? flightData.toAirport.value : airportOptions[2].value}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "80%", mx: "auto" }}>
                    {/* To Airport Dropdown */}
                    <Box sx={{ position: "relative", width: "100%" }}>
                        <Button
                            onClick={handleButtonClick('to')}
                            disableRipple
                            sx={{
                                display: "flex",
                                fontSize: "12px",
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
                                    p: 1,
                                    fontSize: "13px",
                                    color: "text.secondary",
                                    textAlign: "left",
                                    flex: 1,
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {flightData.toAirport
                                    ? `${flightData.toAirport.airport} (${flightData.toAirport.value})`
                                    : `${airportOptions[2].airport} (${airportOptions[2].value})`}
                            </Typography>
                        </Button>

                        <Popover
                            open={toOpen}
                            anchorEl={anchorEl.to}
                            onClose={handleClose('to')}
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
                                    width: anchorEl.to ? anchorEl.to.offsetWidth : "auto",
                                    height: 300,
                                    mt: 0.5,
                                    borderRadius: "0 0 10px 10px",
                                },
                            }}
                        >
                            <AirportSelector
                                options={airportOptions}
                                value={flightData.toAirport}
                                onChange={(value) => updateState('toAirport', value)}
                                onClose={handleClose('to')}
                            />
                        </Popover>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default OneWay