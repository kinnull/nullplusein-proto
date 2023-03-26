import Menu from "./components/Menu";
import Timeline from "./components/Timeline";
import Sponsor from "./components/Sponsor";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import "../src/App.css";
import Result from "./components/Result";
import Marquee from "react-fast-marquee";
import Project from "./components/Project";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="mt-[14px]  pb-6 text-gray-500 ">
      <Menu key={1} />
      <Loading />
      <div className="h-full w-full lg:bg-drawing-bg lg:bg-scroll  lg:bg-center">
        <Project />
        <Marquee
          gradientColor={false}
          speed={50}
          className="overflow-hidden bg-pureGreen py-5"
        >
          <Result />
        </Marquee>
        <Timeline />
        <Sponsor />
        <Footer />
      </div>
    </div>
  );
}

export default App;
