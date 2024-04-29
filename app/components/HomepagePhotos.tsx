'use client'

import client from '../../client.js';

import React from 'react'
import Image from "next/image";

interface Photo {
    id: number;
    src: string;
    alt: string;
  }  

const HomepagePhotos = () => {
  return (
    <div>Photos</div>
    // {data.map((image: Photo) => (
    //     <div
    //       className="relative flex justify-center items-center flex-none flex-wrap lg:flex-nowrap w-full m-5"
    //       key={image.id}
    //     >
    //       <div className="overflow-hidden flex justify-center items-center h-3/4 w-3/4">
    //         <Image
    //           src={image.src}
    //           height={700}
    //           width={900}
    //           className=""
    //           alt={image.alt}
    //         />
    //       </div>
    //     </div>
    //   ))}
  )
}

export default HomepagePhotos

export async function getStaticProps() {
  const query = `*[_type == "homePage"][0] {
    title,
    description
  }`;

  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
}