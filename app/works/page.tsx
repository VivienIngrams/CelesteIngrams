import React from 'react';
import {drawings} from '../data';
import Image from 'next/image';

const Works = () => {
  return (
    <main id="Works" className="w-full xs:p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20  min-h-screen">
    <div className="w-full flex justify-center">
      <h1 className="pt-24 md:pt-40 lg:pt-12 text-3xl lg:text-4xl p-2 md:p-6 font-light text-center tracking-tighter">Works on Paper/Fabric</h1>
    </div>
    <div className="w-full mx-auto flex flex-col justify-center items-center xs:w-[90vw] md:p-8 lg:pt-20 xl:pt-20 xl:px-20 md:grid lg:grid-cols-2 ">
        {drawings.map((drawing) => (
          <div key={drawing.id} className="relative my-4 flex flex-col h-[250px] w-[250px] xs:w-[350px] xs:h-[400px] md:w-[600px] md:h-[600px] lg:w-[400px] lg:h-[240px] 2xl:w-[650px] 2xl:h-[450px] ">
            <Image src={drawing.src} alt={drawing.alt} fill sizes="40vw" className="object-contain" />
                  
          </div>
        ))}
      </div>
    </main>
  );
};

export default Works;
