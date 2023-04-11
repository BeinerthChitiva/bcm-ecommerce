import Banner from "../components/Banner";
import BannerReverse from "../components/BannerReverse";
import Hero from "../components/Hero";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";
import Newsletter from "../components/Newsletter";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
            <Hero/>
            <ProudProducts/>
            <Banner
                title="Creative Harmonious Living"
                text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner1}
            />
            <TrendingSlider/>
            <BannerReverse
                title="Comfortable & Elegant Living"
                text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner2}
            />
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Home;