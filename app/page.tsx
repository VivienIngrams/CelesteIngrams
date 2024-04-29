"use client";


import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {photos} from "./data";
// import HomepagePhotos from "./components/HomepagePhotos"; 


const Home: React.FC = () => {


  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()]
  );

  return (
    <main className="w-full pt-24  lg:pt-20 xl:pt-20 xl:px-20 h-[95vh] flex justify-center items-center">
      <div className="overflow-hidden " ref={emblaRef}>
        <div className="flex">
          {/* <HomepagePhotos/> */}
        </div>
      </div>
    </main>
  );
};

export default Home;


