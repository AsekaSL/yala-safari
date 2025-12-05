import HeroSection from "../components/HeroSection.jsx"
import Nav from "../components/Nav.jsx";
import Service from "../components/Home/Service.jsx";
import Destination from "../components/Home/Destination.jsx";
import ExploreDestination from "../components/Home/ExploreDestination.jsx";
import ExploreConfidence from "../components/Home/ExploreConfidence.jsx";
import MomentsWildlife from "../components/Home/MomentsWildlife.jsx";

function Home() {

    return (
        <div>
            <Nav />
            <HeroSection />
            <Service/>
            <Destination/>
            <ExploreDestination/>
            <ExploreConfidence/>
            <MomentsWildlife/>
        </div>
    );
}

export default Home