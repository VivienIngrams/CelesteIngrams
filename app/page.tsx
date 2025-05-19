import HomepagePhotos from "./components/HomepagePhotos";
import {client} from "../client.js";

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
  }`)
  // console.log(homepagePhotos);
  return (
    <main className="w-full py-20 md:pb-0  xl:px-[10vw] h-[95vh] flex justify-center items-center">
      <HomepagePhotos photos={homepagePhotos}/> 
    </main>
  );
};

export default Home;
