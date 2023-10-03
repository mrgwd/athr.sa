import { RefObject, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowDown2 } from "iconsax-react";
import DropMenu from "./DropMenu";
import logo from "../assets/images/logo/ATHR.png";
import whiteLogo from "../assets/images/logo/ATHR-w.png";
interface Props {
  getMenuBtn: (menuBtn: any) => RefObject<HTMLDivElement>;
  currentLang: string;
  handleChangeLang: (currentLang: string) => void;
}
function NavBar({ getMenuBtn, currentLang, handleChangeLang }: Props) {
  const menuBtn: RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    getMenuBtn(menuBtn.current);
  });
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    handleChangeLang(currentLang === "ar" ? "en" : "ar");
    i18n.changeLanguage(lng);
  };
  const location = useLocation();
  return (
    <nav className="container absolute left-1/2 top-0 z-40 mx-auto flex -translate-x-1/2 items-center justify-between px-8 pb-5 pt-8">
      <div
        className={`flex items-center sm:gap-12 md:gap-20 ${
          location.pathname !== "/" && `text-white`
        }`}
      >
        <img
          src={location.pathname === "/" ? logo : whiteLogo}
          alt="ATHR.sa Logo"
          className="w-16"
        />
        <ul className="hidden child:font-medium child:transition-all sm:flex sm:gap-6 md:gap-10">
          <li
            className={
              location.pathname === "/"
                ? "hover:text-main-color"
                : "hover:text-white/70"
            }
          >
            <Link to="/">{t("nav.home")}</Link>
          </li>
          <li
            className={
              location.pathname === "/"
                ? "hover:text-main-color"
                : "hover:text-white/70"
            }
          >
            <a href="/#about">{t("nav.whoAreWe")}</a>
          </li>
          <li>
            <p
              className={`group cursor-pointer ${
                location.pathname === "/"
                  ? "hover:text-main-color"
                  : "hover:text-white/70"
              }`}
            >
              {t("nav.profile.h1")}
              <ArrowDown2
                variant="Bold"
                className="inline-block w-4 transform transition-transform duration-300 group-hover:rotate-180"
              />
            </p>
            <div className="drop-menu-container relative h-0 w-0 overflow-hidden transition duration-200 hover:overflow-visible ">
              <DropMenu />
            </div>
          </li>
          <li
            className={
              location.pathname === "/"
                ? "hover:text-main-color"
                : "hover:text-white/70"
            }
          >
            <a href="/#contact">{t("nav.contact")}</a>
          </li>
        </ul>
      </div>
      <div
        ref={menuBtn}
        className={`relative h-5 w-8 cursor-pointer transition child:absolute child:left-0 child:block child:h-[0.2rem] child:w-8 child:rounded-full ${
          location.pathname === "/" ? "child:bg-main-color" : "child:bg-white"
        }  child:duration-300 sm:hidden lg:child:bg-white`}
      >
        <span className="top-0"></span>
        <span className="top-1/2 -translate-y-1/2"></span>
        <span className="bottom-0"></span>
      </div>
      <div className="hidden font-semibold text-main-color sm:block lg:text-white">
        <button
          onClick={() => changeLanguage(currentLang === "ar" ? "en" : "ar")}
        >
          {localStorage.getItem("lang") === "ar" ? "EN" : "AR"}
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
