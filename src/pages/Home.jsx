import HeroSection from "../components/HeroSection.jsx"
import Nav from "../components/Nav.jsx";
import Service from "../components/Home/Service.jsx";
import Destination from "../components/Home/Destination.jsx";
import ExploreDestination from "../components/Home/ExploreDestination.jsx";

function Home() {

    return (
        <div>
            <Nav />
            <HeroSection />
            <Service/>
            <Destination/>
            <ExploreDestination/>
        </div>
    );
}

export default Home