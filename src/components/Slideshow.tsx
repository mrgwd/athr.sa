import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Slide from "./Slide";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

interface Props {
  images: { imgSrc: string; imgUrl: string }[];
}
const Slideshow = ({ images }: Props) => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative mx-2 mt-12 flex items-center justify-center lg:mx-20 xl:mx-28">
        <ArrowCircleRight
          className={`absolute ${
            location.pathname === "/OSservices"
              ? "text-dm-service"
              : location.pathname === "/WDservices"
              ? "text-main-color"
              : "text-ma-service"
          } right-0 z-20 h-20 cursor-pointer`}
          variant="Bulk"
          onClick={goToPrevSlide}
        />
        <Slide
          imgSrc={images[currentIndex].imgSrc}
          imgUrl={images[currentIndex].imgUrl}
        />
        <ArrowCircleLeft
          className={`absolute ${
            location.pathname === "/OSservices"
              ? "text-dm-service"
              : location.pathname === "/WDservices"
              ? "text-main-color"
              : "text-ma-service"
          } left-0 z-20 h-20 cursor-pointer`}
          variant="Bulk"
          onClick={goToNextSlide}
        />
      </div>
      <div className="mt-4 flex justify-center child:mx-2 child:rounded-full child:p-1.5 sm:child:p-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={
              location.pathname === "/OSservices" && index === currentIndex
                ? "bg-dm-service"
                : location.pathname === "/WDservices" && index === currentIndex
                ? "bg-main-color"
                : index === currentIndex
                ? "bg-ma-service"
                : "bg-gray-200"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
