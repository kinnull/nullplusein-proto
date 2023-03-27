import React from "react";
import IMAGES from "../images/ImagesFile";
import { Carousel } from "react-responsive-carousel";
import "../css/Project.css";

export default function Project() {
  return (
    <section className="mx-[19px]">
      <div className="list-container my-[96px] flex items-center  justify-start  sm:justify-center">
        <div className="flex flex-col lg:flex-row">
          {/* Carousel container */}
          <Carousel
            className="h-full w-full  md:h-[400px] md:w-[500px]"
            dynamicHeight
            autoPlay
            showThumbs={false}
            ariaLabel={false}
            labels={false}
            showArrows={false}
            showStatus={false}
            infiniteLoop={true}
          >
            <div>
              <img key={IMAGES.id} src={IMAGES.l1} alt="festival" />
            </div>
            <div>
              <img src={IMAGES.l2} alt="festival" />
            </div>
            <div>
              <img src={IMAGES.l3} alt="festival" />
            </div>
          </Carousel>

          <div className="h-full w-full space-y-[39px] bg-pureGreen px-[33px] pt-[55px] pb-7 text-white  md:h-[400px] md:w-[500px]">
            <h1 className="text-center font-Melno text-2xl md:text-4xl">
              Jährliche Leistung
            </h1>
            <div className="grid grid-cols-2 gap-5 font-Melno lg:gap-10">
              <div className="text-center">
                <span className="text-2xl md:text-4xl lg:text-6xl">1</span>
                <p className="text-sm md:text-[22px]">Digitalprojekt</p>
              </div>
              <div className="text-center">
                <span className="text-2xl md:text-4xl lg:text-6xl">7</span>
                <p className="text-sm md:text-[22px]">Orte</p>
              </div>
              <div className="text-center">
                <span className="text-2xl md:text-4xl lg:text-6xl">9</span>
                <p className="text-sm md:text-[22px]">Expert*nnen</p>
              </div>
              <div className="text-center">
                <span className="text-2xl md:text-4xl lg:text-6xl">9</span>
                <p className="text-sm md:text-[22px]">Themen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
