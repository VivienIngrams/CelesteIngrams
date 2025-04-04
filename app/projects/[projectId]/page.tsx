import Image from "next/image";
// import { projects } from "../../data";
import Link from "next/link";
import youtubeIcon from "/public/Youtube.svg";
import {client} from "../../../client";

type ProjectsType = {
  id: string;
  title: string;
  dates: string;
  text: string;
  text2?: string;
  link?: { url: string; text: string };
  videos?: { url: string; alt: string }[];
  images: string[];
};

const Project = async ({ params }: { params: { projectId: string } }) => {

  
  const projects = await client.fetch<ProjectsType[]>(`*[_type == "project"]{
    id,
    title,
    dates,
    text,
    text2,
    link,
    videos,
    "images": images[].asset->url,
      }`,
    {},
  {
    next: {
      revalidate: 60,
    },
  });
  
// console.log(params.projectId + "params")

  const currentIndex = projects.findIndex(
    (project) => project.id === params.projectId
  );
// console.log(currentIndex + "currentIndex")
  if (currentIndex === -1) {
    return <p>Project not found</p>;
  }

  const { id, title, dates, text, images, videos, text2, link } =
    projects[currentIndex];

  // Calculate indices for previous and next products
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
  const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;

  return (
    <main id={id} className="w-full p-4 md:p-8 xl:p-20 min-h-screen">
      <div className="w-full flex flex-col items-center justify-center md:mx-8  xl:max-w-[70vw] xl:mx-auto">
        <h1 className="pt-24 md:pt-40 lg:pt-20 text-3xl lg:text-4xl p-2 md:p-6 font-light text-center tracking-tighter">
          {title}
        </h1>
        <h2 className="p-2 md:p-6">{dates}</h2>
        <p className="max-w-full text-justify my-4">{text}</p>
        {text2 && <p className="text-justify my-4">{text2}</p>}
        {link && (
          <Link className="py-2 flex underline decoration-1" href={link.url}>
            <div className="relative h-4 xs:h-6 xl:h-7 w-4 xs:w-8 xl:w-9 xl:mb-1 mr-[9px] xl:mr-5">
            <Image priority src={youtubeIcon} alt="Youtube" fill />
            </div>
            {link.text}
          </Link>
        )}

        {videos ? (
          <div className="w-full flex flex-col justify-center items-center  lg:grid lg:grid-cols-2">
            {videos.map((video, index) => (
              <div key={index} className="flex flex-col justify-center items-center my-4">
                <iframe
                  src={video.url}
                  className=" h-auto w-[250px] xs:w-[330px] xs:h-[200px] md:w-[550px] md:h-[350px] lg:w-[370px] lg:h-[240px]  2xl:w-[470px] 2xl:h-[400px] 3xl:w-[560px] 3xl:h-[450px] "
                  title={video.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className={`my-2 md:my-4 flex justify-center items-center ${
                  index === images.length - 1 && (index + 1) % 2 !== 0
                    ? "lg:col-span-2"
                    : ""
                }`}
              >
                <Image src={image} alt={title} width={500} height={500} />
              </div>
            ))}
          </div>
        )}

        {/* Nav buttons */}
        <div className="w-full flex justify-between">
          <div className="flex underline decoration-1 cursor-pointer">
            <Link href={`/projects/${projects[prevIndex].id}`} className="p-1">
              Previous
            </Link>
          </div>
          <div className="flex underline decoration-1 cursor-pointer">
            <Link href={`/projects/${projects[nextIndex].id}`} className="p-1">
              Next
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center underline decoration-1 cursor-pointer">
          <Link className="text-center m-2" href="/projects">
            Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
};
export default Project;
