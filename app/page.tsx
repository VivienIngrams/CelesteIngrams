import {HomepagePhotos} from "./components/HomepagePhotos";

const Home: React.FC = () => {
  return (
    <main className="w-full pt-24  lg:pt-20 xl:pt-20 xl:px-20 h-[95vh] flex justify-center items-center">
      <HomepagePhotos />
    </main>
  );
};

export default Home;
