import { StatusUp, GlobalEdit, Mobile } from "iconsax-react";
function ServicesSection() {
  return (
    <div className="container mx-auto my-24 px-4 md:mt-44 xl:mt-60">
      <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-20 lg:text-2xl">
        خدماتنا
      </h2>
      <div className="grid grid-cols-[minmax(0,360px)] justify-center gap-8 child:rounded-[3rem] child:bg-gradient-to-b child:px-12 child:py-16 sm:grid-cols-[repeat(2,minmax(0,360px))] md:gap-12 xl:grid-cols-[repeat(3,minmax(0,360px))] 2xl:gap-20">
        <div className="from-[#CFD2F0] to-[#F3F3FB] child:text-center child:text-dm-service">
          <div>
            <StatusUp variant="Bulk" className="mx-auto h-32 w-32" />
            <h3 className="mt-2 text-2xl font-bold">التسويق الإلكتروني</h3>
          </div>
          <p className="mt-8 font-normal">
            تمتلك شركة أثر أفضل فريق في التسويق عبر الانترنت لادارة الحملات
            الاعلانية وبذلك نضمن لك ادارة احترافية لحملتك.
          </p>
          <span className="mt-8 block">
            إقرأ المزيد
            <span className="mr-2 inline-block rotate-180">&#10140;</span>
          </span>
        </div>
        <div className="from-[#CFF0EA] to-[#E9F8F5] child:text-center child:text-wd-service">
          <div>
            <GlobalEdit variant="Bulk" className="mx-auto h-32 w-32" />
            <h3 className="mt-2 text-2xl font-bold">تطوير مواقع الويب</h3>
          </div>
          <p className="mt-8 font-normal">
            تمتلك شركة أثر أفضل فريق في التسويق عبر الانترنت لادارة الحملات
            الاعلانية وبذلك نضمن لك ادارة احترافية لحملتك.
          </p>
          <span className="mt-8 block">
            إقرأ المزيد
            <span className="mr-2 inline-block rotate-180">&#10140;</span>
          </span>
        </div>
        <div className="from-[#C3CDCB] to-[#EEF1F0] child:text-center child:text-ma-service">
          <div>
            <Mobile variant="Bulk" className="mx-auto h-32 w-32" />
            <h3 className="mt-2 text-2xl font-bold">تطبيقات الجوال</h3>
          </div>
          <p className="mt-8 font-normal">
            تمتلك شركة أثر أفضل فريق في التسويق عبر الانترنت لادارة الحملات
            الاعلانية وبذلك نضمن لك ادارة احترافية لحملتك.
          </p>
          <span className="mt-8 block">
            إقرأ المزيد
            <span className="mr-2 inline-block rotate-180">&#10140;</span>
          </span>
        </div>
      </div>
    </div>
  );
}
export default ServicesSection;
