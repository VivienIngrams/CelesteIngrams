"use client";

import { practiceData } from "../data";
import Image from "next/image";
import Link from "next/link";

const Practice = () => {
  return (
    <main id="Practice" className="w-full p-4 md:p-8 xl:p-20 min-h-screen">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl lg:text-4xl p-2 md:p-6 font-light">Practice</h1>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        {practiceData.map(({ image, title, id, url }) => (
          <div
            key={id}
            className=" select-none w-full h-[60%] flex flex-col items-center mx-8"
            tabIndex={0}
          >
            <Link href={url}>
              <div className="relative m-4 shadow-md group w-[300px] h-[400px] md:w-[70vw] md:h-[45vh] max-w-[50vw] max-h-[60vh] bg-black">
                <Image
                  className=" object-cover opacity-60 group-hover:opacity-50  border-[1px] border-black"
                  src={image.url}
                  alt={title}
                  fill
                  sizes="90vw md:70vw lg:40vw xl:35vw 2xl:30vw"
                />
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <div>
                    <p className="py-3 text-white text-2xl font-italiana uppercase cursor-pointer text-center hover:text-blue-300 ">
                      {title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Practice;
