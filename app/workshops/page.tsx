import React from "react";
import Image from "next/image";
import Link from "next/link";

const Workshops = () => {
  return (
    <main id="workshops" className="w-full p-4 md:p-8 xl:p-20 h-screen">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl lg:text-4xl p-2 md:p-6 font-light">
          Workshops
        </h1>
      </div>
      <div className="w-full h-full lg:grid lg:grid-cols-2">
        <div className="h-full  flex flex-col justify-center items-center">
          <Image
            src="/images/Workshops.png"
            alt="Critical Exchange meeting"
            width={500}
            height={500}
          />
        </div>
        <div className="h-full text-justify flex flex-col justify-center items-center">
          <p className="m-4">
            Critical Exchange is a project initiated in 2019, co-facilitated
            with artist, Jilly Evans. Supported by ‘a space’ arts, it is an
            artist-led network in Southampton focused on developing creative
            work and community relationships through critical dialogue. We work
            with artists to share their work and facilitate group conversation
            giving feedback to support the artworks’ development. Find out more
            about <Link className="underline hover:text-blue-300" href="https://www.Workshops.org" target="_blank">Critical Exchange here.</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Workshops;