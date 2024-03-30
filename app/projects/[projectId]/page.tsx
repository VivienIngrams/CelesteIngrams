"use client";

import Image from "next/image";
import { projects } from "../../data";
import Link from "next/link";

const Project = ({ params }: { params: { projectId: string } }) => {
  const currentIndex = projects.findIndex(
    (project) => project.id === params.projectId
  );

  // If the product is not found, you can handle it accordingly
  if (currentIndex === -1) {
    return <p>Product not found</p>;
  }

  const { id, title, subtitle, text, images, videos, text2, link, } = projects[currentIndex];

  // Calculate indices for previous and next products
  const prevIndex =
    currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
  const nextIndex =
    currentIndex < projects.length - 1 ? currentIndex + 1 : 0;

  return (
    <main id={id} className="w-full p-4 md:p-8 xl:p-20 min-h-screen">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-3xl lg:text-4xl p-2 md:p-6 font-light">{title}</h1>
        <h2>{subtitle}</h2>
        <p>{text}</p>
        {text2 && <p>{text2}</p>}
        {link && <Link href={link.url} >{link.text}</Link>}
        <div className="w-full mx-auto flex flex-col justify-center items-center xs:w-[90vw] md:p-8 lg:pt-20 xl:pt-20 xl:px-20 lg:grid lg:grid-cols-2">
        {videos && videos.map((video, index) => (
          <div key={index} className="max-w-full my-4 mx-auto ">
            <iframe src={video.url} className=" h-auto w-[250px] xs:w-[330px] xs:h-[200px] md:w-[550px] md:h-[350px] lg:w-[400px] lg:h-[240px] 2xl:w-[650px] 2xl:h-[450px] " title={video.alt} loading="lazy"/>
          </div>
        ))}
      </div>
      {images && images.map((image, index) => (
        <div key={index}>
          <Image 
          src={images[0]}
          alt={title}
          width={500}
          height={500}/>
        </div>
      ))}
      </div>
      
    
    </main>
  );
};
export default Project;
