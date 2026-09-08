import Image from "next/image";
// import { projects } from "../../data";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { client } from "../../../client";

const richTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="max-w-full text-justify my-4">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noreferrer" className="underline">
        {children}
      </a>
    ),
  },
};

type ProjectsType = {
  id: string;
  title: string;
  dates: string;
  text?: any[] | string;
  text2?: any[] | string;
  text3?: any[] | string;
  links?: { url: string; title: string; text: string; image?: string }[];
  videos?: { url: string; alt: string }[];
  images: string[];
};

const renderText = (content: any[] | string | undefined) => {
  if (!content) return null;

  if (typeof content === "string") {
    return <p className="max-w-full text-justify my-4">{content}</p>;
  }

  return <PortableText value={content} components={richTextComponents} />;
};

const Project = async ({ params }: { params: { projectId: string } }) => {

  
  const projects = await client.fetch<ProjectsType[]>(`*[_type == "project"]{
    id,
    title,
    dates,
    text,
    text2,
    text3,
    links[]{
      url,
      title,
      text,
      "image": image.asset->url
    },
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

  const { id, title, dates, text, images, videos, text2, text3, links } =
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
        {renderText(text)}
        {text2 && renderText(text2)}
        {links && links.length > 0 && (
          <div className="w-full grid grid-cols-1 gap-6 my-6 max-w-xl">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="flex items-center gap-4 h-full border border-gray-300 hover:border-gray-500 transition rounded p-3"
              >
                {link.image && (
                  <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                    <Image
                      src={link.image}
                      alt={link.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col min-w-0 flex-grow">
                  <h3 className="text-lg font-semibold mb-1">{link.title}</h3>
                  <p className="text-sm text-gray-600">{link.text}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

       {videos && videos.length > 0 && (
  <div className="w-full flex flex-col justify-center items-center lg:grid lg:grid-cols-2">
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
)}

{images && images.length > 0 && (
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

        {text3 && renderText(text3)}

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
