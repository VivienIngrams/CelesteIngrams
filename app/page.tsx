import HomepagePhotos from "./components/HomepagePhotos";
import {client} from "../client.js";


type HomepagePhoto = {
  id: number
  src: string
  alt: string
}


const Home: React.FC = async () => {

  const homepagePhotos = await client.fetch<HomepagePhoto[]>(`*[_type == "homepagePhoto"]`)
  console.log(homepagePhotos)
  return (
    <main className="w-full pt-24  lg:pt-20 xl:pt-20 xl:px-20 h-[95vh] flex justify-center items-center">
      <HomepagePhotos photos={homepagePhotos}/> 
    </main>
  );
};

export default Home;
