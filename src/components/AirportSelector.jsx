import { Box, List, ListItemButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

const AirportSelector = ({ options, value, onChange, onClose }) => {
    const [searchText, setSearchText] = useState("");
    const filteredOptions = searchText
        ? options.filter((option) =>
            option.display.toLowerCase().includes(searchText.toLowerCase())
        )
        : options;

    return (
        <Box sx={{ height: 300, display: "flex", flexDirection: "column" }}>
            {/* Search input */}
            <TextField
                fullWidth
                placeholder="Search airports"
                variant="outlined"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                sx={{
                    p: 1,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 1,
                    },
                }}
            />

            {/* Options list */}
            <List
                sx={{
                    flexGrow: 1,
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "8px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0,0,0,0.2)",
                        borderRadius: "4px",
                    },
                }}
            >
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((option) => (
                        <ListItemButton
                            key={option.value}
                            selected={value?.value === option.value}
                            onClick={() => {
                                onChange(option);
                                onClose();
                            }}
                            sx={{
                                py: 1,
                                px: 2,
                                "&.Mui-selected": {
                                    backgroundColor: "primary.light",
                                },
                                "&:hover": {
                                    backgroundColor: "action.hover",
                                },
                            }}
                        >
                            <Typography variant="body2">{option.display}</Typography>
                        </ListItemButton>
                    ))
                ) : (
                    <ListItemButton>
                        <Typography variant="body2">No airports found</Typography>
                    </ListItemButton>
                )}
            </List>
        </Box>
    );
};

export default AirportSelector;