import About from "../components/About";
import Experiences from "../components/Experiences";
import Home from "../components/Home";
import ServicesSection from "../components/ServicesSection";
import Features from "../components/Features";
import HowWeWork from "../components/HowWeWork";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Home />
      <ServicesSection />
      <About />
      <Experiences />
      <Features />
      <HowWeWork />
      <Contact />
      <Footer />
    </>
  );
}
export default HomePage;
