import { RefObject, useRef } from "react";

import { Link } from "react-router-dom";
import { ArrowDown2 } from "iconsax-react";
import DropMenu from "./DropMenu";
interface Props {
  menuside: any;
}
function NavBar(menu: Props) {
  // useEffect(() => {
  //   !(location.pathname === "/") &&
  //     menuBtn.current?.classList.remove("lg:child:bg-white");
  // }, [location]);
  const menuBtn: RefObject<HTMLDivElement> = useRef(null);
  const menuDown = () => {
    menu.menuside.classList.toggle("-top-full");
    menu.menuside.classList.toggle("top-0");
  };
  const changeMenuBtnStyle = () => {
    menuBtn.current?.children[0].classList.toggle("rotate-45");
    menuBtn.current?.children[0].classList.toggle("left-1/2");
    menuBtn.current?.children[0].classList.toggle("top-0");
    menuBtn.current?.children[0].classList.toggle("top-1/2");

    menuBtn.current?.children[1].classList.toggle("opacity-0");

    menuBtn.current?.children[2].classList.toggle("-rotate-45");
    menuBtn.current?.children[2].classList.toggle("left-1/2");
    menuBtn.current?.children[2].classList.toggle("top-0");
    menuBtn.current?.children[2].classList.toggle("top-1/2");
  };
  return (
    <nav className="container mx-auto flex items-center justify-between px-8 pb-5 pt-8">
      <div className="flex items-center sm:gap-12 md:gap-20">
        <img
          src="src/assets/images/ATHR.png"
          alt="ATHR.sa Logo"
          className="w-16"
        />
        <ul className="hidden child:transition-all sm:flex sm:gap-6 md:gap-10">
          <li className="hover:text-main-color">
            <Link to="/">الرئيسية</Link>
          </li>
          <li className="">
            <p className="group cursor-pointer hover:text-main-color">
              خدماتنا{" "}
              <ArrowDown2
                variant="Bold"
                className="inline-block w-4 transform transition-transform duration-300 group-hover:rotate-180"
              />
            </p>
            <div className="drop-menu-container relative h-0 w-0 overflow-hidden transition duration-200 hover:overflow-visible ">
              <DropMenu />
            </div>
          </li>
          <li className="hover:text-main-color">
            <a href="#experiences">أعمالنا</a>
          </li>
          <li className="hover:text-main-color">
            <a href="#contact">تواصل معنا</a>
          </li>
        </ul>
      </div>
      <div
        ref={menuBtn}
        onClick={() => {
          menuDown();
          changeMenuBtnStyle();
        }}
        className="relative h-5 w-8 cursor-pointer transition child:absolute child:left-0 child:block child:h-[0.2rem] child:w-8 child:rounded-full child:bg-main-color child:duration-300 sm:hidden lg:child:bg-white"
      >
        <span className="top-0"></span>
        <span className="top-1/2 -translate-y-1/2"></span>
        <span className="bottom-0"></span>
      </div>
    </nav>
  );
}
export default NavBar;
