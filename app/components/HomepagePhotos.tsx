"use client";

import client from "../../client.js";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Image from "next/image";
import { photos } from "../data";

// interface Photo {
//   id: number;
//   src: string;
//   alt: string;
// }
type HomepagePhoto = {
  id: number
  src: string
  alt: string
}

export async function HomepagePhotos () {
  const [emblaRef, embla] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay()]
  );
  // const homepagePhotos = await client.fetch<HomepagePhoto[]>(`*[_type == "homepagePhoto"]`)

  return (
    <div className="overflow-hidden " ref={emblaRef}>
      <div className="flex">
        {photos.map((image: HomepagePhoto) => (
        // {homepagePhotos.map((image: HomepagePhoto) => (
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
  );
};





// type Post = {
//   _id: string
//   title?: string
//   slug?: {
//     current: string
//   }
// }
// export async function HomepagePhotoIndex() {
//   const homepagePhotos = await client.fetch<HomepagePhoto[]>(`*[_type == "homepagePhoto"]`)

//   return (
//     <div>
//       {homepagePhotos.map((photo) => (
//         <div key={photo.id}>
//           <img src={photo.src} alt={photo.alt} />
//         </div>
//       ))}
//     </div>
//   )
// }
// export async function PostIndex() {
//   const posts = await client.fetch<Post[]>(`*[_type == "post"]`)

//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post._id}>
//           <a href={post?.slug?.current ?? ""}>{post?.title}</a>
//         </li>
//       ))}
//     </ul>
//   )
// }
