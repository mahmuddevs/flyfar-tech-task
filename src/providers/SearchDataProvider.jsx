import { createContext, useState } from "react"

export const SearchDataContext = createContext()

const SearchDataProvider = ({ children }) => {
    const [ticketData, setTicketData] = useState({
        flightInfo: {},
        seatInfo: {},
    })

    const addSeatData = (data) => {
        setTicketData((prev) => ({
            ...prev,
            seatInfo: data,
        }))
    }

    const addFlightData = (data) => {
        setTicketData((prev) => ({
            ...prev,
            flightInfo: data,
        }))
    }

    console.log(ticketData)

    const value = {
        ticketData,
        setTicketData,
        addSeatData,
        addFlightData
    }
    return (
        <SearchDataContext.Provider value={value}>
            {children}
        </SearchDataContext.Provider>
    )
}
export default SearchDataProvider