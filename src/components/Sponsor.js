import Marquee from "react-fast-marquee";
import IMAGES from "../images/ImagesFile";
export default function Sponsor() {
  return (
    <div className=" mt-28">
      <p className="mx-[14px] mb-5 font-Melno text-lg font-bold text-pureGreen lg:text-[33px]">
        Kooperationspartner*innen
      </p>
      <Marquee
        gradientColor={false}
        speed={50}
        pauseOnHover={true}
        className=" overflow-hidden bg-white"
      >
        <div className="gap flex items-center space-x-24 object-scale-down py-5">
          <img src={IMAGES.partner1} alt="partner" />
          <img src={IMAGES.partner2} alt="partner" />
          <img src={IMAGES.partner3} alt="partner" />
          <img src={IMAGES.partner4} alt="partner" />
          <img src={IMAGES.partner3} alt="partner" />
          <img src={IMAGES.partner2} alt="partner" />
        </div>
      </Marquee>
      <Marquee
        gradientColor={false}
        speed={50}
        pauseOnHover={true}
        direction={"right"}
        className=" overflow-hidden bg-white"
      >
        <div className="gap flex items-center space-x-24 object-scale-down py-5">
          <img src={IMAGES.partner1} alt="partner" />
          <img src={IMAGES.partner2} alt="partner" />
          <img src={IMAGES.partner3} alt="partner" />
          <img src={IMAGES.partner4} alt="partner" />
          <img src={IMAGES.partner3} alt="partner" />
          <img src={IMAGES.partner2} alt="partner" />
        </div>
      </Marquee>
    </div>
  );
}
