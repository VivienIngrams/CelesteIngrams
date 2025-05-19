import Image from "next/image";
import Link from "next/link";
import {client} from "../../client.js";


interface VideosType {
  title: string;
  url: string;
  date: string;
}
const Practice: React.FC = async () => {

  const videos = await client.fetch<VideosType[]>(`*[_type == "video"]{
    title,
    url,
    date,
      }`,
      {},
    {
      next: {
        revalidate: 60,
      },
    });

      const sortedVideoData = [...videos].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });
    


  return (
    <main
      id="Videos"
      className="w-full xs:p-4 md:p-8 lg:pt-20 xl:pt-20 xl:px-4  min-h-screen"
    >
      <div className="w-full flex justify-center">
        <h1 className="pt-24 md:pt-40 lg:pt-12 text-3xl lg:text-4xl p-2 md:p-6 font-light text-center tracking-tighter">
          Videos
        </h1>
      </div>
      <div className="w-full mx-auto flex flex-col justify-center items-center xs:w-[90vw] md:p-8 lg:pt-12 xl:pt-20 xl:px-20 lg:grid lg:grid-cols-2">
        {sortedVideoData.map((video, index) => (
          <div key={index} className="max-w-full my-4 mx-auto ">
            <div className="flex flex-col justify-center items-center my-4 mx-auto bg-black">
              <iframe
                src={video.url}
                className=" h-auto w-[250px] xs:w-[330px] xs:h-[200px] md:w-[550px] md:h-[350px] lg:w-[370px] lg:h-[240px]  2xl:w-[470px] 2xl:h-[400px] 3xl:w-[560px] 3xl:h-[450px] "
                title={video.title}
                loading="lazy"
              />
            </div>
            <div className="pb-4">
              <h2 className="text-center text-xs xs:text-sm md:text-lg font-light">
                {video.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default Practice;
