function MAservice() {
  return (
    <div className="container mx-auto my-24 px-4">
      <div className="text-ma-service">
        <h2 className="mb-8 text-center text-2xl font-semibold md:mb-10 lg:text-4xl">
          تطبيقات الجوال
        </h2>
        <p className="mx-auto max-w-xl text-center font-normal">
          نضمن لك حصولك على أفضل تطبيق مُصمم بكفاءة عالية تحت أيدي خبراء في مجال
          تصميم تطبيقات الجوال والهواتف.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-2 items-center justify-items-center gap-y-12 child:w-24 child:cursor-pointer child:opacity-60 child:grayscale child:transition-all child-hover:opacity-100 child-hover:grayscale-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-20 lg:child:w-32">
        <a href="https://fdec-sa.com" target="_blanck">
          <img src="src/assets/images/logo5.png" loading="lazy" alt="logo5" />
        </a>
        <a href="https://alwissamlaw.com" target="_blanck">
          <img src="src/assets/images/logo4.png" loading="lazy" alt="logo4" />
        </a>
        <a href="https://shoofeldonia.com" target="_blanck">
          <img src="src/assets/images/logo1.png" loading="lazy" alt="logo1" />
        </a>
        <a href="https://shoofeldonia.com" target="_blanck">
          <img src="src/assets/images/logo2.png" loading="lazy" alt="logo1" />
        </a>
      </div>
    </div>
  );
}
export default MAservice;
