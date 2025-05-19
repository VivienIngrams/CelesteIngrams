import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { client } from '../../client';
import { urlForImage } from '../../utils/imageUrlBuilder';
import { Image as SanityImage } from 'sanity';

interface ProjectsType {
  id: string;
  title: string;
  mainImage?: SanityImage;
  images: SanityImage[];
}

const Projects: React.FC = async () => {
  const projects = await client.fetch<ProjectsType[]>(`*[_type == "project"] | order(_createdAt asc) {
    id,
    title,
    mainImage,
    images
  }`, {}, {
    next: {
      revalidate: 30,
    },
  });

  const editedProjects = projects.map((project) => {
    const mainImage = project.mainImage || project.images[0];
    console.log(mainImage);
    return {
      ...project,
      mainImage: urlForImage(mainImage),
    };
  });

  return (
    <main
      id="Projects"
      className="w-full xs:p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-20 min-h-screen"
    >
      <div className="w-full flex justify-center">
        <h1 className="text-center pt-24 md:pt-40 lg:pt-12 text-3xl lg:text-4xl p-2 md:p-6 font-light">
          Projects
        </h1>
      </div>
      <div className="w-full pt-8 mx-auto flex flex-col justify-center items-start xs:w-[90vw] md:p-8 lg:pt-20 xl:pt-20 xl:px-20 md:grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {editedProjects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id} className="mx-auto  select-none ">
            <div className="relative h-[200px] w-[200px] xs:w-[300px] xs:h-[300px] 2xl:w-[350px] 2xl:h-[350px]">
              <NextImage
                src={project.mainImage}
                alt={project.title}
                fill
                sizes="80vw md:30vw"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="mt-1 w-[200px] xs:w-[300px] 2xl:w-[350px]">
              <h2 className="text-xs xs:text-sm md:text-lg font-light">
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
