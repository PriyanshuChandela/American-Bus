import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Fleet from "../components/Fleet";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CTAQuote from "../components/CTAQuote";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <WhyChoose />
      <Testimonials />
      <CTAQuote />
      <Footer />
    </>
  );
};

export default Home;