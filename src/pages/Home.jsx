import HeroSection from "../components/HeroSection.jsx"
import Nav from "../components/Nav.jsx";
import Service from "../components/Service.jsx";
import Destination from "../components/Destination.jsx";

function Home() {

    return (
        <div>
            <Nav />
            <HeroSection />
            <Service/>
            <Destination/>
        </div>
    );
}

export default Home