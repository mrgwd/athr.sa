import { Link } from "react-router-dom";
import { ArrowDown2 } from "iconsax-react";
function NavBar() {
  return (
    <nav className="container mx-auto flex items-center justify-between px-8 py-5">
      <div className="flex items-center sm:gap-12 md:gap-20">
        <img
          src="src/assets/images/ATHR.png"
          alt="ATHR.sa Logo"
          className="w-16"
        />
        <ul className="hidden child:transition-all child-hover:text-main-color sm:flex sm:gap-6 md:gap-10">
          <Link to="/">الرئيسية</Link>
          <Link to="/services">
            خدماتنا <ArrowDown2 variant="Bold" className="inline-block w-4" />
          </Link>
          <li>
            <a href="">أعمالنا</a>
          </li>
          <li>
            <a href="">تواصل معنا</a>
          </li>
        </ul>
      </div>
      <div className="cursor-pointer child:mb-1 child:block child:h-1 child:w-8 child:rounded-full child:bg-main-color lg:child:bg-white">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
export default NavBar;
