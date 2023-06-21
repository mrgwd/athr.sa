import { RefObject, useRef } from "react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import useAnimation from "../hooks/useAnimation";
import client1 from "../assets/images/Clients/logo1.png";
import client2 from "../assets/images/Clients/logo2.png";
import client3 from "../assets/images/Clients/logo3.png";
import client4 from "../assets/images/Clients/logo4.png";
function Experiences() {
  const eSection = useRef<HTMLDivElement | null>(null);
  useAnimation(eSection, 500, "opacity-0", "translate-y-12");

  const leftArrow: RefObject<SVGSVGElement> = useRef(null);
  const slider: RefObject<HTMLDivElement> = useRef(null);
  const rightArrow: RefObject<SVGSVGElement> = useRef(null);

  const slideRight = () => {
    slider.current && (slider.current.scrollLeft += 400);
  };
  const slideLeft = () => {
    slider.current && (slider.current.scrollLeft -= 400);
  };
  return (
    <div
      ref={eSection}
      className="container mx-auto my-24 translate-y-12 px-4 opacity-0 transition duration-500 md:mt-44"
      id="experiences"
    >
      <h2 className="mb-12 text-center text-main-color sm:text-xl md:mb-20 lg:text-2xl">
        مواقع تم إنشائها بواسطة أثر
      </h2>
      <div className="relative">
        <ArrowLeft2
          onClick={slideLeft}
          ref={leftArrow}
          data-arrow-left
          variant="Bold"
          className="absolute left-10 top-1/2 hidden -translate-y-1/2 cursor-pointer text-main-med md:block"
        />
        <ArrowRight2
          onClick={slideRight}
          ref={rightArrow}
          data-arrow-right
          variant="Bold"
          className="absolute right-10 top-1/2 hidden -translate-y-1/2 cursor-pointer text-main-med md:block"
        />
        <div
          ref={slider}
          data-slider
          className="scrollbar-hide relative mx-auto flex h-20 w-full items-center gap-3 overflow-scroll scroll-smooth child:max-h-20 child:w-24 child:cursor-pointer child:opacity-60 child:grayscale child:transition-all child-hover:opacity-100 child-hover:grayscale-0 sm:gap-6 md:w-3/4 md:gap-9 lg:gap-12"
        >
          <img src={client1} loading="lazy" alt="logo1" />
          <img src={client2} loading="lazy" alt="logo2" />
          <img src={client3} loading="lazy" alt="logo3" />
          <img src={client4} loading="lazy" alt="logo4" />
          <img src={client1} loading="lazy" alt="logo1" />
          <img src={client2} loading="lazy" alt="logo2" />
          <img src={client3} loading="lazy" alt="logo3" />
          <img src={client4} loading="lazy" alt="logo4" />
        </div>
      </div>
    </div>
  );
}
export default Experiences;
