import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import Footer from "../components/Footer";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <ContactCTA />
      <Footer />
    </>
  );
};

export default ContactPage;