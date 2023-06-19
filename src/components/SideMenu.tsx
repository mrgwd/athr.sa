import { RefObject, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowDown2 } from "iconsax-react";
import DropMenu from "./DropMenu";

interface Props {
  gmenu: (menu: HTMLDivElement | null) => RefObject<HTMLDivElement>;
}
function SideMenu(getMenu: Props) {
  const menu: RefObject<HTMLDivElement> = useRef(null);
  useEffect(() => {
    getMenu.gmenu(menu.current);
  }, [getMenu]);
  return (
    <div className="absolute w-full">
      <div className="relative h-96 w-full overflow-hidden transition-all">
        <div
          ref={menu}
          className="absolute -top-full z-50 w-full rounded-b-3xl bg-white shadow-xl transition-all duration-300"
        >
          <ul className="flex flex-col gap-4 p-10 child:transition-all">
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
      </div>
    </div>
  );
}
export default SideMenu;
