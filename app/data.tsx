type PracticeDataType = {
  title: string;
  id: string;
  url: string;
  image: { url: string; position: string; size: string };
};

type PhotoType = {  id: number; src: string; alt: string };

export const practiceData: PracticeDataType[] = [
  {
    title: "Projects",
    id: "Projects",
    url: "/projects",
    image: {
      url: "/images/Projects.png",
      position: "center",
      size: "400px",
    },
  },
  {
    title: "collaborations",
    id: "collaborations",
    url: "/collaborations",
    image: {
      url: "/images/collaborations.png",
      position: "center",
      size: "400px",
    },
  },
  {
    title: "Works on paper/fabric",
    id: "works",
    url: "/works",
    image: {
      url: "/images/Works.png",
      position: "center",
      size: "400px",
    },
  },
  {
    title: "Videos",
    id: "videos",
    url: "/videos",
    image: {
      url: "/images/Videos.png",
      position: "center",
      size: "400px",
    },
  },
];

export const photos: PhotoType[] = [
  {
    id: 1,
    src: "/images/Home-page-gallery/Drawing.png",
    alt: "Drawing",
  },
  {
    id: 2,
    src: "/images/Home-page-gallery/Constellations.png",
    alt: "Constellations",
  },
  {
    id: 3,
    src: "/images/Home-page-gallery/Place.png",
    alt: "Place Matters",
  },
  {
    id: 4,
    src: "/images/Home-page-gallery/Walking.jpg",
    alt: "Walking grids around Grandma",
  },
  {
    id: 5,
    src: "/images/Home-page-gallery/Meeting.jpg",
    alt: "Critical Exchange Meeting",
  },
];


