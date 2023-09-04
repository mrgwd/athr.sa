import React from "react";

interface SlideProps {
  imgSrc: string;
  imgUrl: string;
}

const Slide: React.FC<SlideProps> = ({ imgSrc, imgUrl }) => {
  return (
    <a
      href={imgUrl}
      target="_blance"
      className="m-4 h-full w-full object-cover"
    >
      <img
        src={imgSrc}
        alt="Slideshow"
        loading="lazy"
        className="rounded-3xl"
      />
    </a>
  );
};

export default Slide;
