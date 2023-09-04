import About from "../components/About";
import Experiences from "../components/Experiences";
import Home from "../components/Home";
import ServicesSection from "../components/ServicesSection";
import Features from "../components/Features";
import HowWeWork from "../components/HowWeWork";
import "../assets/styles/home.css";

function HomePage() {
  return (
    <>
      <Home />
      <Experiences />
      <About />
      <ServicesSection />
      <Features />
      <HowWeWork />
    </>
  );
}
export default HomePage;
