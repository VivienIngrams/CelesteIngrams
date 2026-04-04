import HomepagePhotos from "./components/HomepagePhotos";
import { client } from "../client.js";

interface HomepagePhoto {
  title: string;
  imageUrl: string;
  alt: string;
}

const Home: React.FC = async () => {
  const homepagePhotos = await client.fetch<HomepagePhoto[]>(`*[_type == "homepagePhoto"]{
    title,
    "imageUrl": image.asset->url,
    "alt": image.alt
  }`);

  return (
    <main className="w-full flex flex-col items-center justify-center h-screen md:h-[95vh] py-20 md:pb-0 lg:px-[15vw] xl:px-[20vw]">
      
      {/* Gallery */}
      <div className="w-full">
        <HomepagePhotos photos={homepagePhotos} />
      </div>

      {/* Bio Statement */}
      <div className="w-full mt-10 md:mt-6 px-4 md:px-8 xl:px-0 flex justify-center">
        <p className="text-sm md:text-base leading-relaxed tracking-wide text-neutral-500 text-center max-w-3xl">
          Multidisciplinary artist, facilitator and researcher working across
          video, drawing, and performance to explore care, connection, and power
          through lived experience and embodied practice.
        </p>
      </div>
    </main>
  );
};

export default Home;