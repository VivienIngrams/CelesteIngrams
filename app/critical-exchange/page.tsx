import React from "react";
import Image from "next/image";
import Link from "next/link";

const CriticalExchange = () => {
  return (
    <main id="critical-exchange" className="w-full p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20 h-[96vh]">
      <div className="w-full flex justify-center">
        <h1 className="pt-24 md:pt:40 lg:pt-12 text-3xl lg:text-4xl font-light">
          Critical Exchange
        </h1>
      </div>
      <div className="w-full h-full md:h-[75vh] flex flex-col items-center justify-center lg:grid lg:grid-cols-2">
        <div className="pt-6 h-full  flex flex-col justify-center items-center">
          <Image
            src="/images/Critical-exchange.jpg"
            alt="Critical Exchange meeting"
            width={700}
            height={500}
          />
        </div>
        <div className="lg:h-full text-justify flex flex-col justify-center items-center">
          <p className="my-4">
            Critical Exchange is a project initiated in 2019, co-facilitated
            with artist, Jilly Evans. Supported by ‘a space’ arts, it is an
            artist-led network in Southampton focused on developing creative
            work and community relationships through critical dialogue. We work
            with artists to share their work and facilitate group conversation
            giving feedback to support the artworks’ development. Find out more
            about <Link className="underline decoration-1 hover:text-blue-300" href="https://www.criticalexchange.org" target="_blank">Critical Exchange here.</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default CriticalExchange;
