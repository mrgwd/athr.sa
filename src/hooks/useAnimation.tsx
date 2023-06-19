// import { useEffect } from "react";

// function makeAnimation(
//   element: HTMLDivElement | HTMLFormElement | null,
//   height: number,
//   ...classM: string[]
// ) {
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (!element) return;
//       window.scrollY > element.offsetTop - height
//         ? element.classList.remove(...classM)
//         : element.classList.add(...classM);
//     });
//   }, [classM, element, height]);
// }
// export default makeAnimation;

import { useEffect } from "react";

function useAnimation(
  elementRef: React.RefObject<HTMLDivElement>,
  height: number,
  ...classM: string[]
) {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollOffset = element.offsetTop - height;
      const shouldRemoveClasses = window.scrollY > scrollOffset;

      if (shouldRemoveClasses) {
        element.classList.remove(...classM);
      } else {
        element.classList.add(...classM);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [elementRef, height, classM]);
}
export default useAnimation;
