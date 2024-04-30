import HomepagePhotos from "./components/HomepagePhotos";
import {client} from "../client.js";

interface HomepagePhoto {
  homepagePhoto: {
    _type: string;
    alt: string;
    asset: {
      /* Define properties of the asset object */
      /* Example: */
      ref: string;
      metadata: {
        /* Define properties of the metadata object */
        /* Example: */
        dimensions: {
          /* Define properties of the dimensions object */
          /* Example: */
          width: number;
          height: number;
        };
      };
    };
  };
  _createdAt: string;
  _rev: string;
  _type: string;
  _id: string;
  _updatedAt: string;
}

const Home: React.FC = async () => {

  const homepagePhotos = await client.fetch<HomepagePhoto[]>(`*[_type == "homepagePhoto"]`)
  console.log(homepagePhotos);
  return (
    <main className="w-full pt-24  lg:pt-20 xl:pt-20 xl:px-20 h-[95vh] flex justify-center items-center">
      <HomepagePhotos photos={homepagePhotos}/> 
    </main>
  );
};

export default Home;
