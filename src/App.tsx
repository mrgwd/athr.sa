import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import WDservice from "./pages/WDservice";
import OSservice from "./pages/OSservice";
import MAservice from "./pages/MAservice";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import { useState } from "react";
import FloatingContactButton from "./components/FloatingContactButton";
import i18next from "i18next";

function App() {
  const [menuBtn, setMenuBtn] = useState<HTMLDivElement | null>(null);
  const getMenuBtn = (menuBtn: HTMLDivElement | null): any => {
    setMenuBtn(menuBtn);
  };
  const [currentLang, setCurrentLang] = useState<boolean>(false);
  return (
    <div dir={i18next.language === "en" ? "ltr" : "rtl"}>
      <NavBar
        getMenuBtn={getMenuBtn}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
      <SideMenu
        menuBtn={menuBtn}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/OSservices" element={<OSservice />} />
        <Route path="/WDservices" element={<WDservice />} />
        <Route path="/MAservices" element={<MAservice />} />
      </Routes>
      <FloatingContactButton />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
