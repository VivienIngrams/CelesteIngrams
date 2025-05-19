import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <main id="About" className="w-full p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20 h-screen lg:grid lg:grid-cols-2">
      <div className="lg:h-full pt-24 md:pt:40 lg:pt-12  flex flex-col justify-center items-center">
        <Image src="/images/Celeste-facilitating.jpg" alt="Celeste Burr Herrera" width={500} height={500} />
      </div>
      <div className="lg:h-full text-justify flex flex-col justify-center items-center lg:mr-24">
        <p className="my-4">
          I am an artist and facilitator with a particular interest in the
          intersections between arts and health. Within my practice I work
          primarily through film, drawing and performance exploring questions
          around health and wellbeing, borderlands of cultures and relational
          dynamics through embodied approaches.
        </p>
        <p className="my-4">
          The themes of care, connection and transition run throughout my work.
          I am passionate about dialogue to support shifting perceptions,
          practices and ways of being in community. My work is inspired by
          developing counter-narratives to oppressive systems and empowering
          means to engage myself and others through creative possibilities.
        </p>
      </div>
    </main>
  );
};

export default About;
