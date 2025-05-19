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
            className="relative mt-8 flex justify-center items-center flex-none w-full h-[90vh] " // Full screen for each slide
            key={index}
          >
            <Link href="/projects" className="overflow-hidden w-full h-full">
              <Image
                src={image.imageUrl}
                height={700}
                width={900}
                className="w-full h-full object-cover" // Ensures the image covers the screen and is cropped as needed
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


