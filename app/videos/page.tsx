"use client";

import Image from "next/image";
import Link from "next/link";
import { videosData } from "../data";

interface VideosType {
  id: number;
  title: string;
  url: string;
}
const Practice: React.FC = () => {
  return (
    <main id="Practice" className="w-full xs:p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20  min-h-screen">
      <div className="w-full flex justify-center">
        <h1 className="pt-24 md:pt:40 lg:pt-12 text-3xl lg:text-4xl p-2 md:p-6 font-light">Videos</h1>
      </div>
      <div className="w-full mx-auto flex flex-col justify-center items-center xs:w-[90vw] md:p-8 lg:pt-20 xl:pt-20 xl:px-20 lg:grid lg:grid-cols-2">
        {videosData.map((video) => (
          <div key={video.id} className="max-w-full my-4 mx-auto ">
            <iframe src={video.url} className=" h-auto w-[250px] xs:w-[330px] xs:h-[200px] md:w-[550px] md:h-[300px] lg:w-[400px] lg:h-[240px] 2xl:w-[650px] 2xl:h-[450px] " title={video.title} loading="lazy"/>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Practice;
