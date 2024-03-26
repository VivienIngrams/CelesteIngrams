import Image from "next/image";

export default function Home() {
  return (
      <main id="Home" className="w-full p-4 md:p-12 lg:pt-20 xl:p-20 h-screen flex justify-center items-center">
        <div className="relative lg:my-4 h-[200px] w-[300px] xs:h-[300px] xs:w-[400px] sm:w-[500px] sm:h-[400px] md:w-[680px] md:h-[450px] 2xl:[w-900px] 2xl:h-[600px] ">
          <Image src="/images/Home-page-gallery/Constellations.png" alt="Gallery" fill sizes="600px" />
        </div>
       
      </main>
    );
  };
