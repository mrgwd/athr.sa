import client1 from "../assets/images/Clients/logo1.png";
import client2 from "../assets/images/Clients/logo2.png";
import client3 from "../assets/images/Clients/logo3.png";
import client4 from "../assets/images/Clients/logo4.png";
function DMservice() {
  return (
    <div className="container mx-auto my-24 px-4">
      <div className="text-dm-service">
        <h2 className="mb-8 text-center text-2xl font-semibold md:mb-10 lg:text-4xl">
          التسويق الإلكتروني
        </h2>
        <p className="mx-auto max-w-xl text-center font-normal">
          تقدم مؤسسة أثر خدمات تسويق إلكتروني شاملة وباحترافية، سواء كانت
          لتطبيقات الجوال أو الحسابات الإلكترونية على الانستقرام، اليوتيوب،
          تويتر، أو فيس بوك
        </p>
      </div>
      <div className="mt-16 grid grid-cols-2 items-center justify-items-center gap-y-12 child:w-24 child:cursor-pointer child:opacity-60 child:grayscale child:transition-all child-hover:opacity-100 child-hover:grayscale-0 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-20 lg:child:w-32">
        <a href="https://fdec-sa.com" target="_blanck">
          <img src={client1} loading="lazy" alt="logo1" />
        </a>
        <a href="https://alwissamlaw.com" target="_blanck">
          <img src={client2} loading="lazy" alt="logo2" />
        </a>
        <a href="https://shoofeldonia.com" target="_blanck">
          <img src={client3} loading="lazy" alt="logo3" />
        </a>
        <a href="https://shoofeldonia.com" target="_blanck">
          <img src={client4} loading="lazy" alt="logo4" />
        </a>
      </div>
    </div>
  );
}
export default DMservice;
