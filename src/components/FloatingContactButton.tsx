import { CallCalling, Whatsapp } from "iconsax-react";
import { useRef, useState } from "react";

function FloatingContactButton() {
  const contactBtns = useRef<HTMLDivElement>(null);
  const floatingBtn = useRef<HTMLDivElement>(null);
  const [shouldExpand, setShouldExpand] = useState<boolean>(false);

  function handleClick() {
    setShouldExpand(!shouldExpand);
  }

  function menuEffect() {
    if (floatingBtn.current) {
      floatingBtn.current.children[0].children[0].classList.toggle("rotate-45");
      floatingBtn.current.children[0].children[0].classList.toggle("left-1/2");
      floatingBtn.current.children[0].children[0].classList.toggle("top-0");
      floatingBtn.current.children[0].children[0].classList.toggle("top-1/2");

      floatingBtn.current.children[0].children[1].classList.toggle("opacity-0");

      floatingBtn.current.children[0].children[2].classList.toggle(
        "-rotate-45"
      );
      floatingBtn.current.children[0].children[2].classList.toggle("left-1/2");
      floatingBtn.current.children[0].children[2].classList.toggle("top-0");
      floatingBtn.current.children[0].children[2].classList.toggle("top-1/2");
    }
  }

  return (
    <div className="float fixed bottom-4 right-4 z-50 sm:bottom-12 sm:right-12">
      <div
        ref={contactBtns}
        className={`overflow-hidden p-2 transition duration-300 child:mb-2 child:block child:rounded-full child:p-4 child:child:text-white child:transition-all child-hover:scale-105 ${
          shouldExpand ? "" : "opacity-0"
        }`}
      >
        <a href="tel:+966506354147" target="_blank" className="bg-gray-800">
          <CallCalling variant="Bold" />
        </a>
        <a
          href="https://wa.me/+966506354147"
          target="_blank"
          className="bg-wd-service"
        >
          <Whatsapp variant="Bold" />
        </a>
      </div>
      <div
        ref={floatingBtn}
        onClick={() => {
          handleClick();
          menuEffect();
        }}
        className="relative mx-auto w-min cursor-pointer rounded-full bg-main-color px-4 py-5 shadow-md transition-all hover:scale-105"
      >
        <div className="relative h-5 w-8 cursor-pointer transition child:absolute child:left-0 child:z-50 child:block child:h-[0.2rem] child:w-8 child:rounded-full child:bg-white child:duration-300">
          <span className="top-0"></span>
          <span className="top-1/2 -translate-y-1/2"></span>
          <span className="bottom-0"></span>
        </div>
      </div>
    </div>
  );
}
export default FloatingContactButton;
