import client1 from "../assets/images/Clients/logo1.png";
import client2 from "../assets/images/Clients/logo2.png";
import client3 from "../assets/images/Clients/logo3.png";
import client4 from "../assets/images/Clients/logo4.png";
import client5 from "../assets/images/Clients/logo5.png";
import client6 from "../assets/images/Clients/logo6.png";
import client7 from "../assets/images/Clients/logo7.png";
import client8 from "../assets/images/Clients/logo8.png";
function Experiences() {
  return (
    <div className="container mx-auto my-24 px-4 md:mt-40 2xl:mt-56">
      <div className="relative">
        <div
          data-slider
          className="relative mx-auto grid w-full scale-90 grid-cols-3 items-center justify-items-center gap-6 child:max-h-20 child:cursor-pointer child:object-cover child:opacity-60 child:grayscale child:transition-all child-hover:opacity-100 child-hover:grayscale-0 sm:scale-100 sm:gap-6 md:w-3/4 md:grid-cols-4 md:gap-9 lg:grid-cols-8 lg:gap-12"
        >
          <img src={client7} loading="lazy" alt="logo7" />
          <img src={client1} loading="lazy" alt="logo1" />
          <img src={client3} loading="lazy" alt="logo3" />
          <img src={client6} loading="lazy" alt="logo6" />
          <img src={client4} loading="lazy" alt="logo4" />
          <img src={client5} loading="lazy" alt="logo5" />
          <img src={client8} loading="lazy" alt="logo8" />
          <img src={client2} loading="lazy" alt="logo2" />
        </div>
      </div>
    </div>
  );
}
export default Experiences;
