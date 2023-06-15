import { RefObject, useRef } from "react";

import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
function Experiences() {
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
    <div className="container mx-auto my-24 px-4 md:mt-44">
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
          className="scrollbar-hide relative mx-auto flex h-20 w-full items-center gap-3 overflow-scroll scroll-smooth child:w-24 child:cursor-pointer sm:gap-6 md:w-3/4 md:gap-9 lg:gap-12"
        >
          <img src="src/assets/images/logo5.png" alt="fdec" />
          <img src="src/assets/images/logo4.png" alt="wissam" />
          <img src="src/assets/images/logo5.png" alt="fdec" />
          <img src="src/assets/images/logo4.png" alt="wissam" />
          <img src="src/assets/images/logo5.png" alt="fdec" />
          <img src="src/assets/images/logo4.png" alt="wissam" />
          <img src="src/assets/images/logo5.png" alt="fdec" />
          <img src="src/assets/images/logo4.png" alt="wissam" />
          <img src="src/assets/images/logo5.png" alt="fdec" />
          <img src="src/assets/images/logo4.png" alt="wissam" />
          <img src="src/assets/images/logo5.png" alt="fdec" />
          <img src="src/assets/images/logo4.png" alt="wissam" />
          <img src="src/assets/images/logo5.png" alt="fdec" />
          <img src="src/assets/images/logo4.png" alt="wissam" />
          <img src="src/assets/images/logo5.png" alt="fdec" />
          <img src="src/assets/images/logo4.png" alt="wissam" />
          <img src="src/assets/images/logo5.png" alt="fdec" />
        </div>
      </div>
    </div>
  );
}
export default Experiences;
