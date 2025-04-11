import { Box } from "@mui/material"
import mainBanner from '../assets/banner-main.jpg'
import BannerTabs from "./BannerTabs"

const Banner = () => {
    return (
        <Box component="section"
            sx={{
                backgroundImage: `url(${mainBanner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: { xs: '95%', md: '85%' }, mx: 'auto', borderRadius: 3
            }}
        >
            <BannerTabs />
        </Box>
    )
}
export default Banner