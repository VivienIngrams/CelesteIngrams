type PracticeDataType = {
  title: string;
  id: string;
  url: string;
  image: { url: string; position: string; size: string };
};

type VideosType = {
  id: number;
  title: string;
  url: string;
};

type ProjectsType = {
  id: number;
  title: string;
  text: string;
  images: string[];
  url: string;
};

type PhotoType = {  id: number; src: string; alt: string };

export const videosData: VideosType[] = [
{
  id: 1,
  title: "Place Matters: drawing in the journey , drawing out the past",
  url: "https://www.youtube.com/embed/TpwJ7esYsAQ",
},
{
  id: 2,
  title: "Place Matters: drawing in the journey , drawing out the past",//change titles!!
  url: "https://www.youtube.com/embed/yvN2WMzMrbY",
},
{
  id: 3,
  title: "Place Matters: drawing in the journey , drawing out the past",
  url: "https://www.youtube.com/embed/5cHSnCvUo6I",
},
{
  id: 4,
  title: "Place Matters: drawing in the journey , drawing out the past",
  url: "https://www.youtube.com/embed/iWRAztrhRvE",
},
{
  id: 5,
  title: "Place Matters: drawing in the journey , drawing out the past",
  url: "https://www.youtube.com/embed/AzNmBNzPu-0",
},
{
  id: 6,
  title: "Place Matters: drawing in the journey , drawing out the past",
  url: "https://www.youtube.com/embed/eebht9Z0qvQ",
},
{
  id: 7,
  title: "Place Matters: drawing in the journey , drawing out the past",
  url: "https://www.youtube.com/embed/4yOVDfuxrBg",
},
{
  id: 8,
  title: "Place Matters: drawing in the journey , drawing out the past",
  url: "https://www.youtube.com/embed/lJKvXvNQriQ",
}
];

export const practiceData: PracticeDataType[] = [
  {
    title: "Projects",
    id: "Projects",
    url: "/projects",
    image: {
      url: "/images/Projects/Drawing/drawing (1)-2.jpg",
      position: "center",
      size: "400px",
    },
  },
  {
    title: "collaborations",
    id: "collaborations",
    url: "/collaborations",
    image: {
      url: "/images/Projects/GHT/GHT (2).jpg",
      position: "center",
      size: "400px",
    },
  },
  {
    title: "Works on paper/fabric",
    id: "works",
    url: "/works",
    image: {
      url: "/images/Works/works (13).jpg",
      position: "center",
      size: "400px",
    },
  },
  {
    title: "Videos",
    id: "videos",
    url: "/videos",
    image: {
      url: "/images/Place-matters.png",
      position: "center",
      size: "400px",
    },
  },
];

const database: ProjectsType[] = [
  {
    id: 1,
    title: "Place Matters: drawing in the journey , drawing out the past",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 2,
    title: "Home-hold/bed-compass maps",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 3,
    title: "Walking grids around grandma",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 4,
    title: "Natural dye garden/curtain",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 5,
    title: "Fashion Show Stories",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 6,
    title: "Tanda",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 7,
    title: "Loss Group Projects",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 8,
    title: "Webs",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 9,
    title: "ght – a reincarnation",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 10,
    title: "Trolly Performances",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 11,
    title: "Drawing converstaions/ reflections",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 12,
    title: "Paper-making",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 13,
    title: "Lower Hewood Farm",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 14,
    title: "Support",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 15,
    title: "Women Scream",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 16,
    title: "unit11studios",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 17,
    title: "Conversations with passing friends",
    text: "",
    images: [],
    url: ""
  },
  {
    id: 18,
    title: "YoungMinds",
    text: "",
    images: [],
    url: ""
  }
];

export default database;




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
export const drawings: PhotoType[] = [
  {
    id: 5,
    src: "/images/Works/works (3).jpg",
    alt: "Drawing",
  },
  {
    id: 1,
    src: "/images/Works/works (1).jpg",
    alt: "Drawing",
  },
  
  {
    id: 25,
    src: "/images/Works/works (13).jpg",
    alt: "Drawing",
  },
  {
    id: 2,
    src: "/images/Works/works (1)-2.jpg",
    alt: "Drawing",
  },
  {
    id: 4,
    src: "/images/Works/works (2)-2.jpg",
    alt: "Drawing",
  },

  {
    id: 7,
    src: "/images/Works/works (4).jpg",
    alt: "Drawing",
  },
  {
    id: 6,
    src: "/images/Works/works (3)-2.jpg",
    alt: "Drawing",
  },
  {
    id: 8,
    src: "/images/Works/works (4)-2.jpg",
    alt: "Drawing",
  },
  {
    id: 9,
    src: "/images/Works/works (5).jpg",
    alt: "Drawing",
  },
  {
    id: 10,
    src: "/images/Works/works (5)-2.jpg",
    alt: "Drawing",
  },
   {
    id: 13,
    src: "/images/Works/works (7).jpg",
    alt: "Drawing",
  },
  {
    id: 14,
    src: "/images/Works/works (7)-2.jpg",
    alt: "Drawing",
  },
  {
    id: 15,
    src: "/images/Works/works (8).jpg",
    alt: "Drawing",
  },
  {
    id: 16,
    src: "/images/Works/works (8)-2.jpg",
    alt: "Drawing",
  },
  {
    id: 17,
    src: "/images/Works/works (9).jpg",
    alt: "Drawing",
  },
  {
    id: 18,
    src: "/images/Works/works (9)-2.jpg",
    alt: "Drawing",
  },
  {
    id: 19,
    src: "/images/Works/works (10).jpg",
    alt: "Drawing",
  },
  {
    id: 20,
    src: "/images/Works/works (10)-2.jpg",
    alt: "Drawing",
  },
  {
    id: 21,
    src: "/images/Works/works (11).jpg",
    alt: "Drawing",
  },

  {
    id: 23,
    src: "/images/Works/works (12).jpg",
    alt: "Drawing",
  },

];


