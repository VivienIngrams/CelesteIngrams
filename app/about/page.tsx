import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main
      id="About"
      className="w-full h-screen p-4 pt-20 md:p-8   xl:px-24 lg:grid lg:grid-cols-2 lg:items-stretch"
    >
      {/* Image Column */}
      <div className="lg:flex justify-center items-center ">
        <div className="relative lg:w-[500px] lg:h-[400px] lg:flex justify-center items-center ">
          <Image
            src="/images/Celeste-facilitating.jpg"
            alt="Celeste Burr Herrera"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      {/* Text Column */}
      <div className="lg:flex lg:h-full justify-center items-center">
        <div className="lg:flex flex-col justify-between text-justify lg:px-8 lg:min-w-[500px] lg:max-w-[600px] lg:h-[380px]">
          <p className="py-8 lg:py-0">
            I am a multidisciplinary artist, facilitator and researcher
            working in the field of arts, health and well-being. My practice
            utilises video, drawing and performance; centring embodied
            approaches. I explore questions around health and wellbeing,
            place/displacement, power and relational dynamics.
          </p>

          <p>
            The themes of care, connection, tension and transition run
            throughout my work. I am passionate about dialogue to support
            shifting perceptions, practices and ways of being in community. My
            work is inspired by developing counter-narratives to oppressive
            systems and empowering means to engage myself and others through
            creative possibilities.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
