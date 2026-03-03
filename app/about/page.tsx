import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main
      id="About"
      className="w-full p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20 h-screen lg:grid lg:grid-cols-2"
    >
      <div className="lg:h-full pt-24 md:pt:40 lg:py-[15vh]  flex flex-col justify-center items-center">
        <Image
          src="/images/Celeste-facilitating.jpg"
          alt="Celeste Burr Herrera"
          width={500}
          height={500}
        />
      </div>
      <div className="lg:h-full lg:py-[15vh] text-justify flex flex-col justify-center lg:justify-between items-center lg:mr-24">
        <p className="">
          I am a multidisciplinary artist, facilitator and researcher working in
          the field of arts, health and well-being. My practice utilises video,
          drawing and performance; centring embodied approaches. I explore
          questions around health and wellbeing, place/displacement, power and
          relational dynamics.
        </p>
        <p className="">
          The themes of care, connection, tension and transition run throughout
          my work. I am passionate about dialogue to support shifting
          perceptions, practices and ways of being in community. My work is
          inspired by developing counter-narratives to oppressive systems and
          empowering means to engage myself and others through creative
          possibilities.
        </p>
      </div>
    </main>
  );
};

export default About;
