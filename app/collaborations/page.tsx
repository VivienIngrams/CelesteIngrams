import Image from "next/image";
import Link from "next/link";
// import { projects } from "../data";
import {client} from "../../client";


interface ProjectsType {
  id: string;
  title: string;
  images: string;
}

// const collabProjects = projects.filter((project) => project.collaboration === true);

const Collaborations: React.FC = async () => {

  const collabProjects = await client.fetch<ProjectsType[]>(`*[_type == "project" && collaboration ] | order(_createdAt asc) {
    id,
    title,
    "images": images[].asset->url
  } `);
// console.log(collabProjects)
  return (
    <main
      id="Collaborations"
      className="w-full xs:p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20  min-h-screen"
    >
      <div className="w-full flex justify-center">
        <h1 className="pt-24 md:pt-40 lg:pt-12 text-3xl lg:text-4xl p-2 md:p-6 font-light text-center tracking-tighter">
          Collaborations
        </h1>
      </div>
      <div className="w-full pt-8 mx-auto flex flex-col justify-center items-start xs:w-[90vw] md:p-8 lg:pt-20 xl:pt-20 xl:px-20 md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {collabProjects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="mx-auto ">
           
            <div className="relative h-[200px] w-[200px] xs:w-[300px] xs:h-[300px] 2xl:w-[350px] 2xl:h-[350px] ">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
              <div className="mt-1 w-[200px] xs:w-[300px] 2xl:w-[350px]">
                <h2 className=" text-xs xs:text-sm md:text-lg font-light">
                  {project.title}
                </h2>
              </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Collaborations;

