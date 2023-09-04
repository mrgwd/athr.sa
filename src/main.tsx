import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslations from "./locales/ar.json";
import enTranslations from "./locales/en.json";
i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: arTranslations },
    en: { translation: enTranslations },
  },
  lng: "ar",
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
