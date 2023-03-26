import React from "react";
import nullPlusLogo from "../images/nullplusein-logo.png";
import "../../src/Menu.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Menu() {
  let titleHeading = useRef(null);

  useEffect(() => {
    const title = titleHeading;

    gsap.to(title, {
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 1,
      ease: "power3.inOut",
    });
  });

  const [isColor, setColor] = React.useState(true);
  const [isActive, setActive] = React.useState(false);
  const [isDisable, setDisable] = React.useState(false);
  const navBtn = (e) => {
    e.preventDefault();
    setActive(!isActive);
    setColor(!isColor);
    setDisable(!isDisable);
  };

  let links = [
    { id: "0", name: "Programm", link: "/" },
    { id: "0", name: "Expert*innen", link: "/" },
    { id: "0", name: "Über uns", link: "/" },
    { id: "0", name: "Kontakt", link: "/" },
    { id: "0", name: "Archiv", link: "/" },
  ];

  return (
    <nav className="mx-[19px]">
      <div>
        <div className="flex items-center justify-between">
          <div className="logo-img h-[86px] w-[100px] md:h-[113px] md:w-[150px]">
            <img
              className="w-[140px]"
              src={nullPlusLogo}
              alt="nullplusein logo"
            />
          </div>
          <div
            className={` grid-btn fixed right-5 z-20 grid cursor-pointer grid-cols-3 grid-rows-3 gap-1 md:grid lg:hidden`}
            onClick={navBtn}
          >
            <div
              className={`${
                isColor ? "btn-color" : null
              } h-2 w-2 rounded-full bg-white`}
            ></div>
            <div
              className={`${isColor ? "btn-color" : null} ${
                isDisable ? "disable" : null
              }bg-white h-2 w-2 rounded-full`}
            ></div>
            <div
              className={`${
                isColor ? "btn-color" : null
              } h-2 w-2 rounded-full bg-white`}
            ></div>
            <div
              className={`${isColor ? "btn-color" : null} ${
                isDisable ? "disable" : null
              }bg-white h-2 w-2 rounded-full`}
            ></div>
            <div
              className={`${
                isColor ? "btn-color" : null
              } h-2 w-2 rounded-full bg-white`}
            ></div>
            <div
              className={`${isColor ? "btn-color" : null} ${
                isDisable ? "disable" : null
              }bg-white h-2 w-2 rounded-full`}
            ></div>
            <div
              className={`${
                isColor ? "btn-color" : null
              } h-2 w-2 rounded-full bg-white`}
            ></div>
            <div
              className={`${isColor ? "btn-color" : null} ${
                isDisable ? "disable" : null
              }bg-white h-2 w-2 rounded-full`}
            ></div>
            <div
              className={`${
                isColor ? "btn-color" : null
              } h-2 w-2 rounded-full bg-white`}
            ></div>
          </div>
        </div>

        <div className="nav-link flex flex-row items-start justify-between ">
          <div>
            <a
              ref={(el) => (titleHeading = el)}
              href="{#}"
              className="sitems-center flex translate-y-3 transform space-x-2 pb-4 font-Melno text-sm font-bold text-pureGreen opacity-0 md:text-[22px]"
            >
              {" "}
              Festival für Diversität
              <i className="px-2 text-sm font-bold md:text-[22px]">+</i>
              Komplexität
            </a>
            <a
              href="{#}"
              className="font-Melno text-sm font-bold text-pureGreen md:text-[22px]"
            >
              4 - 20 Oktober 2022
            </a>
          </div>

          <ul
            className={`${
              isActive ? "overlay-close" : null
            } links invisible fixed -top-2 left-[100%] z-10 flex h-screen  w-full translate-y-2 transform flex-col justify-center  space-y-5 bg-pureGreen pl-5  transition-all duration-700  md:duration-[0ms] lg:visible lg:relative lg:left-0 lg:flex lg:h-min lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-10   lg:bg-transparent  lg:pl-0`}
          >
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.link}
                  className="text-Melno links font-Melno text-3xl font-bold text-white hover:underline hover:duration-75 lg:text-[22px] lg:text-pureGreen"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
