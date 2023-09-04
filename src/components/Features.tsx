import {
  FolderOpen,
  GlobalSearch,
  KeyboardOpen,
  Magicpen,
  PenTool2,
  Profile2User,
} from "iconsax-react";
import useAnimation from "../hooks/useAnimation";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function Features() {
  const fSection = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();
  useAnimation(fSection, 500, "opacity-0", "translate-y-20");

  return (
    <div
      ref={fSection}
      className="container mx-auto my-24 translate-y-20 px-4 opacity-0 transition duration-500 md:mt-44"
    >
      <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-20 lg:text-2xl">
        {t("features.heading")}
      </h2>
      <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-y-12 xl:gap-y-16">
        <div>
          <GlobalSearch
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t("features.seOptmization.subHeading")}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t("features.seOptmization.caption")}
            </p>
          </div>
        </div>
        <div>
          <Profile2User
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t("features.manageAccounts.subHeading")}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t("features.manageAccounts.caption")}
            </p>
          </div>
        </div>
        <div>
          <KeyboardOpen
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t("features.manageSponsors.subHeading")}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t("features.manageSponsors.caption")}
            </p>
          </div>
        </div>
        <div>
          <FolderOpen
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t("features.designIdentities.subHeading")}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t("features.designIdentities.caption")}
            </p>
          </div>
        </div>
        <div>
          <PenTool2
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t("features.graphicDesign.subHeading")}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t("features.graphicDesign.caption")}
            </p>
          </div>
        </div>
        <div>
          <Magicpen
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20 xl:h-24 xl:w-24"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              {t("features.writingContent.subHeading")}
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              {t("features.writingContent.caption")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
