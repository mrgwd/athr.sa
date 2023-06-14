import {
  FolderOpen,
  GlobalSearch,
  KeyboardOpen,
  Magicpen,
  PenTool2,
  Profile2User,
} from "iconsax-react";

function features() {
  return (
    <div className="container mx-auto my-24 px-4 md:mt-44">
      <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-20 lg:text-2xl">
        كلٌ في مكان واحد
      </h2>
      <div className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-y-12">
        <div>
          <GlobalSearch
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20 xl:h-24 xl:w-24"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              تحسين محركات البحث
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              كشركة تصميم مواقع نقدم خدمة كتابة المحتوى الالكتروني الاحترافية
              كواحدة من احدى وسائل التسويق غير المباشر.
            </p>
          </div>
        </div>
        <div>
          <Profile2User
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20 xl:h-24 xl:w-24"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              إدارة حسابات التواصل الاجتماعي
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              تفخر شركة أثر بتقديم خدمة اداراة حسابات التواصل الاجتماعي بالاضافة
              الى نشاطها الاساسي وهى شركة تصميم مواقع.
            </p>
          </div>
        </div>
        <div>
          <KeyboardOpen
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20 xl:h-24 xl:w-24"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              إدارة الحملات الاعلانية المدفوعة
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              تمتلك شركة أثر أفضل فريق في التسويق عبر الانترنت لادارة الحملات
              الاعلانية وبذلك نضمن لك ادارة احترافية لحملتك.
            </p>
          </div>
        </div>
        <div>
          <FolderOpen
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20 xl:h-24 xl:w-24"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              تصميم الهوية البصرية
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              تقدم شركة أثر لتصميم المواقع ايضا خدمة ارسال رسائل SMS . وهى واحدة
              من أفضل وسائل الدعاية والاعلان.
            </p>
          </div>
        </div>
        <div>
          <PenTool2
            variant="Bulk"
            className="mx-auto h-12 w-12 text-wd-service md:h-20 md:w-20 xl:h-24 xl:w-24"
          />
          <div className="text-center">
            <h4 className="text-md my-2 font-semibold text-main-color md:text-xl xl:text-2xl">
              التصميم الجرافيكي
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              نقدم خدمة تصوير المنتجات للمتاجر والمواقع الالكترونية بهدف عرض
              المحتوى في أفضل صورة الممكنة.
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
              كتابة المحتوى والمقالات
            </h4>
            <p className="mx-auto text-xs font-normal text-wd-service md:text-base lg:max-w-xs">
              نقدم خدمة كتابة المحتوى الالكتروني وهى تهدف الى انتشار موقعك على
              محركات البحث ، زيادة عدد الزوار.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default features;
