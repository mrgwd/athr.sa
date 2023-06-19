import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import WDservice from "./pages/WDservice";
import DMservice from "./pages/DMservice";
import MAservice from "./pages/MAservice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import { RefObject, useState } from "react";

function App() {
  const [menuside, setMenuside] = useState<HTMLDivElement | null>(null);

  const getMenu = (menu: HTMLDivElement | null): any => {
    setMenuside(menu);
  };

  return (
    <>
      <NavBar menuside={menuside} />
      <SideMenu gmenu={getMenu} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DMservices" element={<DMservice />} />
        <Route path="/WDservices" element={<WDservice />} />
        <Route path="/MAservices" element={<MAservice />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
