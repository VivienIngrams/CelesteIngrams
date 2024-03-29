"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "../data";

const Projects = () => {
  return (
    <main
      id="Projects"
      className="w-full xs:p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20  min-h-screen"
    >
      <div className="w-full flex justify-center">
        <h1 className="text-center pt-24 md:pt-40 lg:pt-12 text-3xl lg:text-4xl p-2 md:p-6 font-light">
          Projects
        </h1>
      </div>
      <div className="w-full mx-auto flex flex-col justify-center items-center xs:w-[90vw] md:p-8 lg:pt-20 xl:pt-20 xl:px-20 md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <Link href={project.url} key={project.id}>
            <div className="flex flex-col my-4 "></div>
            <div className="relative h-[200px] w-[200px] xs:w-[300px] xs:h-[300px] 2xl:w-[350px] 2xl:h-[650px] ">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
              <div className="mt-1 w-[200px] xs:w-[300px] 2xl:w-[350px]">
                <h2 className=" text-xs font-light">
                  {project.title}
                </h2>
              </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Projects;
