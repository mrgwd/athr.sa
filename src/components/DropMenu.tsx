import { GlobalEdit, Mobile, StatusUp } from "iconsax-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  menu?: HTMLElement | undefined | null;
  changeMenuBtnStyle?: () => void;
}
function DropMenu({ menu, changeMenuBtnStyle }: Props) {
  const { t } = useTranslation();
  const menuDown = () => {
    menu?.classList.toggle("right-0");
    menu?.classList.toggle("right-full");
    changeMenuBtnStyle?.();
  };
  return (
    <ul className="flex w-max flex-col rounded-3xl bg-white child:mt-2 child:child:inline-block child:cursor-pointer child:transition-all sm:top-full sm:block sm:gap-4 sm:px-4 sm:py-10 sm:shadow-lg">
      <li onClick={() => menuDown()}>
        <Link
          to="/OSservices"
          className="rounded-xl px-5 py-3 transition duration-300 hover:bg-dm-service/10 child:inline-block"
        >
          <StatusUp variant="Linear" className="ml-3 text-dm-service" />
          <p className="text-dm-service">{t("nav.profile.op1")}</p>
        </Link>
      </li>
      <li onClick={() => menuDown()}>
        <Link
          to="/WDservices"
          className="rounded-xl px-5 py-3 transition duration-300 hover:bg-wd-service/10 child:inline-block"
        >
          <GlobalEdit variant="Linear" className="ml-3 text-wd-service" />
          <p className="text-wd-service">{t("nav.profile.op2")}</p>
        </Link>
      </li>
      <li className="w-full" onClick={() => menuDown()}>
        <Link
          to="/MAservices"
          className="w-full rounded-xl px-5 py-3 transition duration-300 hover:bg-ma-service/10 child:inline-block"
        >
          <Mobile variant="Linear" className="ml-3 text-ma-service" />
          <p className="text-ma-service">{t("nav.profile.op3")}</p>
        </Link>
      </li>
    </ul>
  );
}
export default DropMenu;
