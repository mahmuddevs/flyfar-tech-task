import { createContext, useState } from "react"

export const SearchDataContext = createContext()

const SearchDataProvider = ({ children }) => {
    const [roundWayData, setRoundWayData] = useState({})

    const addFlightData = (data) => {
        setRoundWayData(prevData => ({
            ...prevData,
            ...data
        }));
    }

    console.log(roundWayData)

    const value = {
        roundWayData,
        setRoundWayData,
        addFlightData
    }
    return (
        <SearchDataContext.Provider value={value}>
            {children}
        </SearchDataContext.Provider>
    )
}
export default SearchDataProvider