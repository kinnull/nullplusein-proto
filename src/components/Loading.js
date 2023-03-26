import VIDEO from "../video/0+1-animation_loader.webm";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Loading() {
  let screenLoading = useRef(null);

  useEffect(() => {
    const animation_loader = screenLoading;
    gsap.to(animation_loader, {
      height: 0,
      y: -200,
      zIndex: 0,
      duration: 2,
      delay: 3,
      overflow: "hidden",
      ease: "power3.inOut",
    });
  });

  return (
    <div
      ref={(load) => (screenLoading = load)}
      className="loading fixed top-0 z-30 flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-pureGreen"
    >
      <div className="logoanimation relative h-fit max-w-md ">
        <video src={VIDEO} autoPlay muted width={"80%"} className="mx-auto ">
          <source src={VIDEO} type="video/webm" />
          vide
        </video>
        {/* <p className=" mx-auto  grid place-items-center text-center font-Melno text-base text-white">
          Festival für Diversität + Komplexität
        </p> */}
      </div>
    </div>
  );
}
