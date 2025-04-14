import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HotDeals from "../../components/HotDeals"
import OfferSlider from "../../components/OfferSlider"

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <OfferSlider />
            <HotDeals />
            <Footer />
        </>
    )
}
export default Home