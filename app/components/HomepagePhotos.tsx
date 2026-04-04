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
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay()]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {photos.map((image: HomepagePhoto, index) => (
          <div
            className="relative flex justify-center items-center flex-none w-full h-[45vh] md:h-[70vh]"
            key={index}
          >
            <Link href="/projects" className="overflow-hidden w-full h-full block">
              <Image
                src={image.imageUrl}
                height={700}
                width={900}
                className="w-full h-full object-cover"
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