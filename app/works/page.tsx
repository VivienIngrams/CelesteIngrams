import React from "react";
import { drawings } from "../data";
import Image from "next/image";
import Link from "next/link";

const Works = () => {
  return (
    <main
      id="Works"
      className="w-full xs:p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20 min-h-screen"
    >
      <div className="w-full flex justify-center">
        <h1 className="pt-24 md:pt-40 lg:pt-12 text-3xl lg:text-4xl p-2 md:p-6 font-light text-center tracking-tighter">
          Works on Paper/Fabric
        </h1>
      </div>
      <div className="w-full mx-auto flex flex-wrap justify-center items-start min-h-screen xs:w-[90vw] md:p-8 lg:pt-20 xl:pt-20 xl:px-10">
        {drawings.map((drawing) => (
          <div key={drawing.id} className={`relative w-[90vw] ${drawing.height} ${drawing.width} md:h-[90vh]`}>
            <Link href={drawing.src}>
              <div
                className="relative h-full w-full"
              >
                <Image
                  src={drawing.src}
                  alt={drawing.alt}
                  fill
                  className="py-6 md:py-12 md:px-8 object-contain"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Works;