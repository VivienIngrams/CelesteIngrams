
'use client'

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import Image from "next/image";



interface HomepagePhoto {
  homepagePhoto: {
    _type: string;
    alt: string;
    asset: {
      /* Define properties of the asset object */
      /* Example: */
      ref: string;
      metadata: {
        /* Define properties of the metadata object */
        /* Example: */
        dimensions: {
          /* Define properties of the dimensions object */
          /* Example: */
          width: number;
          height: number;
        };
      };
    };
  };
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: string;
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
        {/* {photos.map((image: HomepagePhoto, index) => (
          <div
            className="relative flex justify-center items-center flex-none flex-wrap lg:flex-nowrap w-full m-5"
            key={index}
          >
            <div className="overflow-hidden flex justify-center items-center h-3/4 w-3/4">
              <Image
                src={image.homepagePhoto.asset.ref}
                height={700}
                width={900}
                className=""
                alt={image.homepagePhoto.alt}
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default HomepagePhotos;



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
