import { RefObject, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowDown2 } from "iconsax-react";
import DropMenu from "./DropMenu";

interface Props {
  currentLang: boolean;
  setCurrentLang: (currentLang: boolean) => void;
  menuBtn: HTMLDivElement | null;
}
function SideMenu({ menuBtn, currentLang, setCurrentLang }: Props) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    setCurrentLang(!currentLang);
    i18n.changeLanguage(lng);
  };
  const changeMenuBtnStyle = () => {
    menuBtn?.children[0].classList.toggle("rotate-45");
    menuBtn?.children[0].classList.toggle("left-1/2");
    menuBtn?.children[0].classList.toggle("top-0");
    menuBtn?.children[0].classList.toggle("top-1/2");

    menuBtn?.children[1].classList.toggle("opacity-0");

    menuBtn?.children[2].classList.toggle("-rotate-45");
    menuBtn?.children[2].classList.toggle("left-1/2");
    menuBtn?.children[2].classList.toggle("top-0");
    menuBtn?.children[2].classList.toggle("top-1/2");

    menuContainer.current?.classList.toggle("w-0");
    menuContainer.current?.classList.toggle("w-screen");

    document.body.classList.toggle("overflow-hidden");
  };

  const menu: RefObject<HTMLDivElement> = useRef(null);
  const menuContainer: RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    menuBtn?.addEventListener("click", () => {
      menuDown();
    });
  }, [menuBtn]);
  const menuDown = () => {
    menu.current?.classList.toggle("right-0");
    menu.current?.classList.toggle("right-full");
    changeMenuBtnStyle();
  };
  const subMenuButton: RefObject<HTMLLIElement> = useRef(null);
  const subMenu: RefObject<HTMLLIElement> = useRef(null);
  const handleToggleSubmenu = () => {
    subMenu.current?.classList.toggle("overflow-hidden");
    subMenu.current?.classList.toggle("h-0");
    subMenu.current?.classList.toggle("h-44");
  };
  const year: number = new Date().getFullYear();
  return (
    <div
      ref={menuContainer}
      className="absolute left-0 top-0 z-30 h-screen w-0 overflow-hidden transition-all sm:hidden"
    >
      <div
        ref={menu}
        className={`rounded-b-3x absolute right-full top-0 h-full w-full  shadow-xl transition-all duration-300`}
      >
        <div className="mt-32 flex h-full flex-col gap-8 bg-white p-10 sm:gap-4">
          <ul>
            <li
              className="mb-12 hover:text-main-color"
              onClick={() => menuDown()}
            >
              <Link to="/">{t("nav.home")}</Link>
            </li>
            <li
              className="mb-12 hover:text-main-color"
              onClick={() => menuDown()}
            >
              <Link to="/#About">{t("nav.whoAreWe")}</Link>
            </li>
            <li
              className="group cursor-pointer hover:text-main-color"
              ref={subMenuButton}
              onClick={() => handleToggleSubmenu()}
            >
              {t("nav.profile.h1")}
              <ArrowDown2
                variant="Bold"
                className="inline-block w-4 transform transition-transform duration-300 group-hover:rotate-180"
              />
            </li>
            <li className="h-0 overflow-hidden transition-all" ref={subMenu}>
              <DropMenu
                menu={menu.current}
                changeMenuBtnStyle={changeMenuBtnStyle}
              />
            </li>
            <li
              className="my-12 hover:text-main-color"
              onClick={() => menuDown()}
            >
              <a href="#contact">{t("nav.contact")}</a>
            </li>
          </ul>
          <hr />
          <button
            className="text-start font-semibold text-main-color"
            onClick={() => changeLanguage(currentLang === false ? "en" : "ar")}
          >
            {currentLang === false ? "EN" : "AR"}
          </button>
          <p className="absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
            {t("footer.heading")} {year}
          </p>
        </div>
      </div>
    </div>
  );
}
export default SideMenu;
