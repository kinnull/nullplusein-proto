import IMAGES from "../images/ImagesFile";

import { Carousel } from "react-responsive-carousel";
import "../css/Project.css";

export default function Timeline() {
  const listing = [
    { achievement: "70 +Instagram abos:Living_Library_01" },
    { achievement: "400 +Instagram abos:bildungswerk_vielfalt" },
    { achievement: "400 +Zuschauer*innenauf YouTube" },
    { achievement: "400 +Besucher*innen" },
  ];

  const secondListing = [
    { more: "Mehr tolle begegnungen" },
    { more: "mehr Austauch" },
    { more: "mehr sichtarkeit" },
    { more: "mehr festival" },
  ];

  return (
    <div>
      <div className=" relative mx-[19px] mt-28 ">
        <div className="absolute left-0 h-full  border-2 border-pureGreen sm:left-0  md:left-[50%]"></div>
        <div className="absolute left-[-2.5%] h-5 w-5 rounded-full bg-pureGreen md:left-[49.5%]"></div>
        <div className="first-timeline m-[inherit] flex flex-col items-center justify-center gap-6 p-2 md:flex-row">
          <div className="image-holder h-full w-full  md:h-[400px] md:w-[500px]">
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
          </div>
          <div className="content-holder h-full w-full  md:h-[400px] md:w-[500px]">
            <ul className="font-Melno text-pureGreen">
              <h2 className="text-lg font-bold md:text-4xl">
                Fortschritte bei sozialen Netzwerken
              </h2>
              <div className="list-grouping mt-4 space-y-6 md:space-y-[20px]">
                {listing.map((list, i) => (
                  <li className=" text-sm md:text-[22px]" key={i}>
                    {list.achievement}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
        <div className="absolute left-[-2.5%] h-5 w-5 rounded-full bg-pureGreen md:left-[49.5%]"></div>
        <div className="second-timeline  m-[inherit] mt-10 flex flex-col items-center justify-center gap-4 p-2 md:flex-row">
          <div className="image-holder order-1 h-full w-full md:order-2 md:h-[400px] md:w-[500px]">
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
          </div>

          <div className="content-holder order-2 h-full w-full md:order-1 md:h-[400px] md:w-[500px]">
            <ul className="font-Melno text-pureGreen">
              <h2 className="text-lg font-bold md:text-4xl ">
                wir wollen mehr
              </h2>
              <div className="list-grouping mt-4 space-y-4 md:space-y-[20px]">
                {secondListing.map((secondList, index) => (
                  <li className="text-left text-sm md:text-[22px]" key={index}>
                    {secondList.more}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
