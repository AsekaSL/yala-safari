import HeroSection from "../components/HeroSection.jsx"
import Nav from "../components/Nav.jsx";
import Service from "../components/Home/Service.jsx";
import Destination from "../components/Home/Destination.jsx";
import ExploreDestination from "../components/Home/ExploreDestination.jsx";
import ExploreConfidence from "../components/Home/ExploreConfidence.jsx";
import MomentsWildlife from "../components/Home/MomentsWildlife.jsx";
import SafariPackages from "../components/Home/SafariPackages.jsx";
import SafariAdventures from "../components/Home/SafariAdventures.jsx";
import Comment from "../components/Home/Comment.jsx";
import SafariInspiraction from "../components/Home/SafariInspiraction.jsx";
import Footer from "../components/Footer.jsx";

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
            <SafariPackages/>
            <SafariAdventures/>
            <Comment/>
            <SafariInspiraction/>
            <Footer/>
        </div>
    );
}

export default Home