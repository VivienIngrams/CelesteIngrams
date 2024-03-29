"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {photos} from "./data";

interface Photo {
  id: number;
  src: string;
  alt: string;
}  

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
          {photos.map((image: Photo) => (
            <div
              className="relative flex justify-center items-center flex-none flex-wrap lg:flex-nowrap w-full m-5"
              key={image.id}
            >
              <div className="overflow-hidden flex justify-center items-center h-3/4 w-3/4">
                <Image
                  src={image.src}
                  height={700}
                  width={900}
                  className=""
                  alt={image.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
