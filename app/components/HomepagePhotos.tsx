
'use client'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HomepagePhoto {
  title: string;
  imageUrl: string;
  alt: string;
 }

const HomepagePhotos: React.FC<{ photos: HomepagePhoto[] }> = ({ photos }) => {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()]
  );

  return (
    <div className="overflow-hidden " ref={emblaRef}>
      <div className="flex">
        {photos.map((image: HomepagePhoto, index) => (
          <div
            className="relative flex justify-center items-center flex-none flex-wrap lg:flex-nowrap w-full m-5"
            key={index}
          >
            <Link href="/projects" className="overflow-hidden flex justify-center items-center h-3/4 w-3/4">
              <Image
                src={image.imageUrl}
                height={700}
                width={900}
                className=""
                alt={image.alt}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepagePhotos;


