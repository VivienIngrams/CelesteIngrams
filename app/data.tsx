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
  id: string;
  title: string;
  text: string;
  images: string[];
  url: string;
  collaboration: boolean;
};

type PhotoType = { id: number; src: string; alt: string };

export const videosData: VideosType[] = [
  {
    id: 1,
    title: "Place Matters: drawing in the journey , drawing out the past",
    url: "https://www.youtube.com/embed/TpwJ7esYsAQ",
  },
  {
    id: 2,
    title: "Place Matters: drawing in the journey , drawing out the past", //change titles!!
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
  },
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

export const projects: ProjectsType[] = [
  {
    id: "place",
    title: "Place Matters: drawing in the journey , drawing out the past",
    text: "",
    images: [
      "/images/Place-matters.png",
    ],
    url: "/projects/place",
    collaboration: false,
  },
  {
    id: "maps",
    title: "Home-hold/bed-compass maps",
    text: "",
    images: [
      "/images/Projects/Maps/maps (1).jpg",
      "/images/Projects/Maps/maps (4).jpg",
      "/images/Projects/Maps/maps (5).jpg",
      "/images/Projects/Maps/maps (6).jpg",
    ],
    url: "/projects/maps",
    collaboration: false,
  },
  {
    id: "walking",
    title: "Walking grids around grandma",
    text: "",
    images: [
      "/images/Projects/Walking/walking (1).jpg"
    ],
    url: "/projects/walking",
    collaboration: false,
  },
  {
    id: "natural",
    title: "Natural dye garden/curtain",
    text: "",
    images: [
      "/images/Projects/Natural/natural (1).jpg"
    ],
    url: "/projects/natural",
    collaboration: true,
  },
  {
    id: "fashion",
    title: "Fashion Show Stories",
    text: "",
    images: [
      "/images/Projects/Fashion/fashion (1).jpg"
    ],
    url: "/projects/fashion",
    collaboration: false,
  },
  {
    id: "tanda",
    title: "Tanda",
    text: "",
    images: [
      "/images/Projects/Tanda/Tanda.jpg"
    ],
    url: "/projects/tanda",
    collaboration: true,
  },
  {
    id: "loss",
    title: "Loss Group Projects",
    text: "",
    images: [
      "/images/Projects/Loss/loss (1).jpg"
    ],
    url: "/projects/loss",
    collaboration: true,
  },
  {
    id: "webs",
    title: "Webs",
    text: "",
    images: [
      "/images/Projects/Webs/webs (1).jpg"
    ],
    url: "/projects/webs",
    collaboration: false,
  },
  {
    id: "ght",
    title: "ght : a reincarnation",
    text: "",
    images: [
      "/images/Projects/Ght/ght (1).jpg"
    ],
    url: "/projects/ght",
    collaboration: true,
  },
  {
    id: "trolley",
    title: "Trolley Performances",
    text: "",
    images: [
      "/images/Projects/Trolley/trolley (1).jpg",
      "/images/Projects/Trolley/trolley (2).jpg",
      "/images/Projects/Trolley/trolley (3).jpg",
      "/images/Projects/Trolley/trolley (4).jpg",
      "/images/Projects/Trolley/trolley (5).jpg",
      "/images/Projects/Trolley/trolley (6).jpg",
      "/images/Projects/Trolley/trolley (7).jpg",
    ],
    url: "/projects/trolley",
    collaboration: false,
  },
  {
    id: "conversations",
    title: "Drawing converstaions/ reflections",
    text: "",
    images: [
      "/images/Projects/Conversations/conversations (1).jpg"
    ],
    url: "/projects/conversations",
    collaboration: false,
  },
  {
    id: "paper",
    title: "Paper-making",
    text: "",
    images: [
      "/images/Projects/Paper/paper.jpg",
      "/images/Projects/Paper/paper (2).jpg"
    ],
    url: "/projects/paper",
    collaboration: false,
  },
  {
    id: "LHF",
    title: "Lower Hewood Farm",
    text: "",
    images: [
      "/images/Projects/Lhf/lhf (1).jpg"
    ],
    url: "/projects/lhf",
    collaboration: true,
  },
  {
    id: "support",
    title: "Support",
    text: "",
    images: [
      "/images/Projects/Support/support (1).jpg"
    ],
    url: "/projects/support",
    collaboration: true,
  },
  {
    id: "women",
    title: "Women Scream",
    text: "",
    images: [
      "/images/Projects/Women/women (1).jpg"
    ],
    url: "/projects/women",
    collaboration: true,
  },
  {
    id: "unit11",
    title: "unit11studios",
    text: "",
    images: [
      "/images/Projects/Unit11/unit11 (1).jpg"
    ],
    url: "/projects/unit11",
    collaboration: true,
  },
  {
    id: "passing",
    title: "Conversations with passing friends",
    text: "",
    images: [
      "/images/Works/works (2).jpg"
    ],
    url: "/projects/passing",
    collaboration: false,
  },
  {
    id: "youngminds",
    title: "YoungMinds",
    text: "",
    images: [
      "/images/Projects/YoungMinds/youngminds (1).jpg"
    ],
    url: "/projects/youngminds",
    collaboration: true,
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
