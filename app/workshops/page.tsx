import React from "react";
import Image from "next/image";
import Link from "next/link";

const Workshops = () => {
  return (
    <main id="workshops" className="w-full p-4 md:p-8 min-h-screen lg:pt-20 xl:pt-20 xl:px-20 ">
      <div className="w-full flex justify-center">
      <h1 className="pt-24 md:pt:40 lg:pt-12 text-3xl lg:text-4xl font-light">
          Workshops
        </h1>
      </div>
      <div className="w-full h-full ">
        <div className="w-full lg:h-[40vh] xl:max-w-[60vw] xl:mx-auto my-4 flex flex-col justify-center items-center">
          <Image
            src="/images/Workshops.jpg"
            alt="Workshops outdoors"
            width={900}
            height={300}
          />
        </div>
        <div className="h-full md:mx-12 lg:mx-40 xl:max-w-[60vw] xl:mx-auto text-justify flex flex-col justify-center items-center">
          <p className="m-4">
            With over 10 years experience designing and running sessions, I am
            able to tailor workshops to suit the needs of different groups.
          </p>
          <p className="m-4">
            I have worked with children of all ages, university student groups,
            LGBTQI+ youth groups and adults with learning disabilities. I have a
            creative and innovative approach that has been applied to presenting
            at specialist conferences, training front line health professionals,
            working with artists networks and engaging with the public at
            festivals.
          </p>
          <p className="m-4">
            I have acted as advisor and facilitator with a number of local and
            national organisations such as YoungMinds, The Royal College of
            Psychiatry, West London Mental Health Trust, British Psychological
            Society, Solent University, John Hansard Gallery, Hampshire Child
            and Adolescent Mental Health inpatient units, Breakout Youth and
            Dangerous Ideas.
          </p>
          <p className="m-4">
            I am able to tailor my workshops in response to diverse briefs and
            can also design a proposal based on individual consultation.
          </p>
          <p className="my-4 text-left font-bold">Some examples of the activities I deliver are:</p>
          <ul className="text-xs m-4 text-left">
            <li>Experimental drawing techniques</li>
            <li>Mindfulness drawing</li>
            <li>Body-focused drawing and movement exercises </li>
            <li>Experimental assemblages – re-contextualising objects from daily life</li>
            <li>Critical feedback facilitation</li>
            <li>Story walks</li>
            <li>Natural dye experimental printing methods</li>
            <li>Reflective writing drawing activities</li>
            <li>Collaging</li>
            <li>Group murals</li>
            <li>Art and mental health discussion forums</li>
            <li>Grounding drop-in space with art materials at festival/event environments</li>
          </ul>
          <p className="py-2 m-4 xl:py-8 font-bold">Please get in touch if you’d like to discuss a proposal with me.</p>
          <div>
            <Link className="pb-8 underline decoration-1 hover:text-blue-300" href="mailto:ingramsceleste@gmail.com" target="_blank">ingramsceleste@gmail.com</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Workshops;
