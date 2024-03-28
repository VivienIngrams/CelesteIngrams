import React from 'react';
import {photos} from '../data';
import Image from 'next/image';

const Works = () => {
  return (
        <section className="section px-8 py-16">
      <h1 className="text-4xl mb-12">Works Gallery</h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div key={photo.id} className="item bg-blue-500 relative flex flex-col justify-end rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105">
            <Image src={photo.src} alt={photo.alt} fill className="w-full h-full" />
            <div className="item__details bg-white py-4 px-6 text-lg text-gray-600">
              {photo.alt}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
