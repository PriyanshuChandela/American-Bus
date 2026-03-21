import Navbar from "../components/Navbar";
import FleetHero from "../components/FleetHero";
import FleetIntro from "../components/FleetIntro";
import Footer from "../components/Footer";
import FleetList from "../components/FleetList";
import Amenities from "../components/Ameneties";
import Safety from "../components/Safety";
import FleetCTAA from "../components/FleetCTAA"

const FleetPage = () => {
  return (
    <>
      <Navbar />
      <FleetHero />
      <FleetIntro />
      <FleetList />
      <Amenities />
      <Safety />
      <FleetCTAA />
      <Footer />
    </>
  );
};

export default FleetPage;