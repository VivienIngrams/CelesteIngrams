import React from "react";
import Image from "next/image";
import Link from "next/link";

const CriticalExchange = () => {
  return (
    <main
      id="critical-exchange"
      className="w-full p-4 md:p-8 lg:pt-20 xl:px-20 min-h-[96vh]"
    >
      <div className="w-full flex justify-center">
        <h1 className="pt-24 md:pt-40 lg:pt-12 text-3xl lg:text-4xl p-2 md:p-8 font-light text-center tracking-tighter">
          Critical Exchange
        </h1>
      </div>

      {/* Shared Width Container */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">

        {/* Image */}
        <div className="w-full">
          <Image
            src="/images/Critical-exchange.jpg"
            alt="Critical Exchange meeting"
            width={1000}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Text */}
        <div className="w-full text-justify">
          <p className="my-6">
            Critical Exchange is a project initiated in 2019, co-facilitated
            with artist, Jilly Evans. Supported by ‘a space’ arts, it is an
            artist-led network in Southampton focused on developing creative
            work and community relationships through critical dialogue. We work
            with artists to share their work and facilitate group conversation
            giving feedback to support the artworks’ development. Find out more
            about{" "}
            <Link
              className="underline decoration-1 hover:text-blue-300"
              href="https://www.criticalexchange.org"
              target="_blank"
            >
              Critical Exchange here.
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default CriticalExchange;
