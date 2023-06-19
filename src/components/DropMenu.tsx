import { GlobalEdit, Mobile, StatusUp } from "iconsax-react";
import { Link } from "react-router-dom";

function DropMenu() {
  return (
    <div className="absolute top-full z-50 w-max rounded-3xl bg-white px-4 py-10 shadow-lg sm:block">
      <ul className="flex flex-col gap-4 child:mt-2 child:child:inline-block child:cursor-pointer child:transition-all">
        <li>
          <Link
            to="/DMservices"
            className="rounded-xl px-5 py-3 transition duration-300 hover:bg-dm-service/10 child:inline-block"
          >
            <StatusUp variant="Linear" className="ml-3 text-dm-service" />
            <p className="text-dm-service">التسويق الإلكتروني</p>
          </Link>
        </li>
        <li>
          <Link
            to="/WDservices"
            className="rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:inline-block"
          >
            <GlobalEdit variant="Linear" className="ml-3 text-wd-service" />
            <p className="text-wd-service">تطوير مواقع الويب</p>
          </Link>
        </li>
        <li>
          <Link
            to="/MAservices"
            className="w-full rounded-xl px-5 py-3 transition duration-300 hover:bg-ma-service/10 child:inline-block"
          >
            <Mobile variant="Linear" className="ml-3 text-ma-service" />
            <p className="text-ma-service">تطبيقات الجوال</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default DropMenu;
