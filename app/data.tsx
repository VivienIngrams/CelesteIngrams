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
  subtitle: string;
  text: string;
  text2?: string;
  link?: { url: string; text: string };
  videos?: { url: string; alt: string }[];
  images: string[];
  url: string;
  collaboration: boolean;
};

type PhotoType = { id: number; src: string; alt: string };

export const videosData: VideosType[] = [
  {
    id: 1,
    title: "Home comforts – (neither) here and/or there",
    url: "https://www.youtube.com/embed/TpwJ7esYsAQ",
  },
  // {
  //   id: 2,
  //   title: "Doorway Remains - I never left - through the door",
  //   url: "https://www.youtube.com/embed/yvN2WMzMrbY",
  // },
  {
    id: 3,
    title: "Spitting Teeth Back into Place ",
    url: "https://www.youtube.com/embed/5cHSnCvUo6I",
  },
  {
    id: 4,
    title: "Spitting Teeth Back into Place - again",
    url: "https://www.youtube.com/embed/iWRAztrhRvE",
  },
  {
    id: 5,
    title: "Drawing in the journey , drawing out the past",
    url: "https://www.youtube.com/embed/AzNmBNzPu-0",
  },
  {
    id: 6,
    title: "Drawing in the journey , drawing out the past - again",
    url: "https://www.youtube.com/embed/eebht9Z0qvQ",
  },
  {
    id: 7,
    title: "Arches entrace web - the making",
    url: "https://www.youtube.com/embed/4yOVDfuxrBg",
  },
  {
    id: 8,
    title: "Arches entrace web - the unmaking",
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
      url: "/images/Projects/GHT/ght (2).jpg",
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
    title: "Place Matters",
    subtitle: "2022 - ongoing",
    text: "This place-based research project generated a body of work responding to a significant place from my history which represented a turning point in my life. Revisiting through embodied practices of drawing, movement, writing, audio, photography and video generated an exploration of fragments of narrative and re-storying of somatic memory. Themes of transformation, transition, trauma and place attachment wove throughout the research generating dialogue and positing questions about care and community.",
    images: ["/images/Place-matters.png"],
    videos: [
      {
        url: "https://www.youtube.com/embed/yvN2WMzMrbY",
        alt: "Doorway Remains - I never left - through the door",
      },
      {
        url: "https://www.youtube.com/embed/TpwJ7esYsAQ",
        alt: "Home comforts – (neither) here and/or there",
      },
      {
        url: "https://www.youtube.com/embed/iWRAztrhRvE",
        alt: "Spitting Teeth Back into Place - again      ",
      },
      {
        url: "https://www.youtube.com/embed/5cHSnCvUo6I",
        alt: "Spitting Teeth Back into Place - again",
      },
    ],
    url: "/projects/place",
    collaboration: false,
  },
  {
    id: "drawing",
    title: "Drawing in the journey, drawing out the past",
    subtitle: "2020 - 2022",
    text: "This body of work developed from exploration of narrating and witnessing journeys – layering this process through film, audio, performance and drawing facilitated multiple perspectives on time, mobility, reconnecting points of place, psychogeography and memory study.",
    images: [
      "/images/Projects/Drawing/drawing (1)-2.jpg",
      "/images/Projects/Drawing/drawing (1).jpg",
      "/images/Projects/Drawing/drawing (2).jpg",
      "/images/Projects/Drawing/drawing (3).jpg",
      "/images/Projects/Drawing/drawing (4).jpg",
    ],
    url: "/projects/drawing",
    collaboration: false,
  },
  {
    id: "maps",
    title: "Home-hold/bed-compass maps",
    subtitle: "2020",
    text: "Home-hold/bed-compass maps was a series of works made throughout lockdowns in 2020. Revisiting past layers of bedroom spaces and attempts at anchoring sense of orientation in relation to external geography and internal dislocation. The project was both assembling and peeling away layers from the internal dial of bed in this autobiographical exploration. ",
    text2:
      "The work took on a performative dimension through a series of live video conversations drawing the layers of drawing performance, drawing performance, performed within an online forum.",
    images: [
      "/images/Projects/Maps/maps (4).jpg",
      "/images/Projects/Maps/maps (6).jpg",
      "/images/Projects/Maps/maps (5).jpg",
      "/images/Projects/Maps/maps (1).jpg",
    ],
    url: "/projects/maps",
    collaboration: false,
  },
  {
    id: "walking",
    title: "Walking grids around grandma",
    subtitle: "2019 - ongoing",
    text: "This series of work responded to a period of time staying with and caring for my grandma. Time punctuated with daily walks exploring the environment she was part of, yet disconnected from in her immobility. My walks became routes of exploration of the prescriptive grids surrounding and determining routes of her life. Considering repetition – potential meandering within restrictive space of patriarchal landscapes and her relationship with the land – attempts to construct and unravel a narrative which is both hers, in the fragments I can pieces together and understand – and mine in what I inherit both culturally and within my body. Circling her – circling her home – from the dynamism and static of her company – our relationship – I marked out both the lines of reaching – and lines of falling away scripts and points of connection.",
    images: [
      "/images/Projects/Walking/walking (4).jpg",
      "/images/Projects/Walking/walking (1)-2.jpg",
      "/images/Projects/Walking/walking (2).jpg",
      "/images/Projects/Walking/walking (3).jpg",
      "/images/Projects/Walking/walking (1).jpg",
    ],
    url: "/projects/walking",
    collaboration: false,
  },
  {
    id: "natural",
    title: "Natural dye garden/curtain",
    subtitle: "2019",
    text: "This collaborative project was a commission within the Arches Studios, Southampton. Curated by artist, Gemma Gore and working alongside artist, Lizzie Jones we researched, attended courses and experimented to inform the making of a natural dye garden and curtain to imbed within the studios. We led a series of workshops to share our learning and worked with the studios community to create the curtain and planters.",
    images: [
      "/images/Projects/Natural/natural.jpg",
      "/images/Projects/Natural/natural (1)-2.jpg",
      "/images/Projects/Natural/natural (2).jpg",
      "/images/Projects/Natural/natural (4).jpg",
      "/images/Projects/Natural/natural (2)-2.jpg",
      "/images/Projects/Natural/natural (1).jpg",
      "/images/Projects/Natural/natural (5).jpg",
      "/images/Projects/Natural/natural (3).jpg",
    ],
    url: "/projects/natural",
    collaboration: true,
  },
  {
    id: "fashion",
    title: "Fashion Show Stories",
    subtitle: "2018 - ongoing",
    text: "This ongoing project tells playful stories of a clothes store. Articulating relationship with each item as it’s worn – performed – unpicked memories and identification with it through the process of shedding fabric skins. Grieving ‘old clothes’ and the intersection with personal and cultural narratives through the process of attention – drawing out the relationship with intricate portrayal and questions of visual language and the body through a selection of clothes. ",
    images: [
      "/images/Projects/Fashion/fashion (1).jpg",
      "/images/Projects/Fashion/fashion (7).jpg",
      "/images/Projects/Fashion/fashion (2).jpg",
      "/images/Projects/Fashion/fashion (3).jpg",
      "/images/Projects/Fashion/fashion (4).jpg",
      "/images/Projects/Fashion/fashion (5).jpg",
      "/images/Projects/Fashion/fashion (6).jpg",
    ],
    url: "/projects/fashion",
    collaboration: false,
  },
  {
    id: "tanda",
    title: "Tanda",
    subtitle: "2018",
    text: "A performance collaboration with dancer Vivien Ingrams and pianist Pierre Dubois. Tanda was part of Ballet de Lorraine, Carte Blanche programme. The piece explored the dynamics in live dance, music and mark-making practice. ",
    images: ["/images/Projects/Tanda/Tanda.jpg"],
    url: "/projects/tanda",
    collaboration: true,
  },
  {
    id: "loss",
    title: "Loss Group Projects",
    subtitle: "2017 - 2020",
    text: "This collaboration formed with a group of artists making work about the theme of grief and loss. We met regularly supporting each others practices and the development of work which culminated in a number of exhibitions and events. This included death cafes’s, exhibiting at a hospice, and supporting an exhibition programme at Dead Good Days events. ",
    images: [
      "/images/Projects/Loss/loss.png",
      "/images/Projects/Loss/loss (1)-2.jpg",
      "/images/Projects/Loss/loss (1).jpg",
      "/images/Projects/Loss/loss (2).jpg",
      "/images/Projects/Loss/loss (3).jpg",
    ],
    url: "/projects/loss",
    collaboration: true,
  },
  {
    id: "webs",
    title: "Webs",
    subtitle: "2016 - 2021",
    link: {
      text: "Arches entrace web - the making",
      url: "https://www.youtube.com/embed/4yOVDfuxrBg",
    },
    text: "This work was a series of installations responding to physical qualities in an environment and the intimate process of creating webs. They  took place at various locations and events as live performances. The work concentrated on the attention to thread tension as drawing – traction – the delicate lines of connection and the points that fall away – break off – and the process of starting over – many many times. The completed webs became both quiet barriers and markers to determine navigation within space – drawing attention to details and provoking qualities of containment and fragility of place.",
    images: [
      "/images/Projects/Webs/webs.png",
      "/images/Projects/Webs/webs (1).jpg",
      "/images/Projects/Webs/webs (2).jpg",
      "/images/Projects/Webs/webs (3).jpg",
      "/images/Projects/Webs/webs (4).jpg",
      "/images/Projects/Webs/webs (5).jpg",
      "/images/Projects/Webs/webs (6).jpg",
    ],
    // videos: [{ }, { } ],
    url: "/projects/webs",
    collaboration: false,
  },
  {
    id: "ght",
    title: "ght : a reincarnation",
    subtitle: "2016 - 2018",
    text: "This eighteen  month collaborative  project led by artist sarah filmer ran alongside the development of a new arts and heritage venue in Southampton. Working alongside seven artist I documented the group working process and created work responding to the residency themes as we worked together to animate the building through a rich programme of community events, exhibitions and workshops. I explored through performance, audio, writing and video my relationship with the building and role within the group; looking at dialogue, networks, threads, connections, tensions and slippage points. Find out more about the project here.",
    link: {
      url: "https://ght-a-reincarnation.tumblr.com/",
      text: "ght-a-reincarnation",
    },
    images: [
      "/images/Projects/GHT/ght.jpg",
      "/images/Projects/GHT/ght (1).jpg",
      "/images/Projects/GHT/ght (2).jpg",
      "/images/Projects/GHT/ght (3).jpg",
      "/images/Projects/GHT/ght (4).jpg",
      "/images/Projects/GHT/ght (6).jpg",
      "/images/Projects/GHT/ght (7).jpg",
      "/images/Projects/GHT/ght (5).jpg",
    ],
    url: "/projects/ght",
    collaboration: true,
  },
  {
    id: "trolley",
    title: "Trolley Performances",
    subtitle: "2015 - 2020",
    text: " This project spanned a five year period of journeys with a shopping trolly. Starting with a move between studio spaces the performances were narrated documentations of the in-between state of studio contents in this process of transition; reframing these materials and belongings as they moved between one space and another. The project extended to transitions between multiple sites. Routes through the city wove stories of memory, place, social interaction and limitations of the body whilst fore-fronting voice and the power of articulation in the process of drawing.",
    images: [
      "/images/Projects/Trolley/trolley (7).jpg",
      "/images/Projects/Trolley/trolley (3).jpg",
      "/images/Projects/Trolley/trolley (2).jpg",
      "/images/Projects/Trolley/trolley (5).jpg",
      "/images/Projects/Trolley/trolley (4).jpg",
      "/images/Projects/Trolley/trolley (6).jpg",
      "/images/Projects/Trolley/trolley (1).jpg",
    ],
    url: "/projects/trolley",
    collaboration: false,
  },
  {
    id: "conversations",
    title: "Drawing converstaions/ reflections",
    subtitle: "20154- 2019",
    text: "This body of drawings explored mark-making as a means of reflection. Tracing forms of/within memory – from conversations – interactions and movement as a tool to re-collect, re-consider, re-flect, and re-member. It became a regular activity, spanning themes of relationships, journeys, and daily reflective practices.",
    images: [
      "/images/Projects/Conversations/conversations (1).jpg",
      "/images/Projects/Conversations/conversations (2).jpg",
      "/images/Projects/Conversations/conversations (3).jpg",
      "/images/Projects/Conversations/conversations (4).jpg",
      "/images/Projects/Conversations/conversations (5).jpg",
      "/images/Projects/Conversations/conversations (6).jpg",
    ],
    url: "/projects/conversations",
    collaboration: false,
  },
  {
    id: "paper",
    title: "Paper-making",
    subtitle: "2013, 2023",
    text: "The process of tearing, shredding, destroying, then mulching down and decomposing into a digested form to be reconstituted into new. Letting go of old skins to generate new skins; a surface of what has past reconstituted. ",
    images: [
      "/images/Projects/Paper/paper.jpg",
      "/images/Projects/Paper/paper (2).jpg",
    ],
    url: "/projects/paper",
    collaboration: false,
  },
  {
    id: "LHF",
    title: "Lower Hewood Farm",
    subtitle: "2013 - 2016",
    text: "Working with Lower Hewood Farm generated a number of group working residency visits exploring the farm as place for expanded conversation into dialogue between practices, group-working methodologies, and experiments of interventions and performance inspired by the environment.  Individual residency visits concentrated on the library archive – the transition between a place of storage to a cataloguing of materials, books and objects feeding into a new iteration as a dynamic space for expanding place and learning.",
    images: [
      "/images/Projects/LHF/LHF (1).jpg",
      "/images/Projects/LHF/LHF (2).jpg",
      "/images/Projects/LHF/LHF (3).jpg",
      "/images/Projects/LHF/LHF (4).jpg",
      "/images/Projects/LHF/LHF (5).jpg",
    ],
    url: "/projects/lhf",
    collaboration: true,
  },
  {
    id: "support",
    title: "Support",
    subtitle: "2013 - 2016",
    text: "This collaborative project spanned over a year building relationships between two artist studio groups with regular crit sessions, meetings and social events which culminated in a co-curated exhibition.",
    images: [
      "/images/Projects/Support/support (3).jpg",
      "/images/Projects/Support/support (2).jpg",
      "/images/Projects/Support/support (1).jpg",
    ],
    url: "/projects/support",
    collaboration: true,
  },
  {
    id: "women",
    title: "Women Scream",
    subtitle: "2012 - 2015",
    text: "Working with a group of women to initiate, co-ordinate, promote, curate and run a series of exhibitions, events, workshops across Southampton throughout March around International Woman’s Day for three consecutive years as part of Women Scream International festival. We partnered with a number of organisations, including – Southampton City Art Gallery, Apples and Snakes, The Nuffield Theatre, Turner Simms Concert Hall, John Hansard Gallery and The Art House to make the events the successes that they were.",
    images: [
      "/images/Projects/Women/women (3).jpg",
      "/images/Projects/Women/women (2).jpg",
      "/images/Projects/Women/women (1).jpg",
      "/images/Projects/Women/women (4).jpg",
      "/images/Projects/Women/women (5).jpg",
      "/images/Projects/Women/women (6).jpg",
    ],
    url: "/projects/women",
    collaboration: true,
  },
  {
    id: "unit11",
    title: "unit11studios",
    subtitle: "2011 - 2015",
    text: "Multiple projects and ventures emerged from this artist-led space. We worked together to run workshops, host events, co-ordinate exhibitions, and support artist development practice. Highlights include Sluice Art Fair; Space for Discussion, Talent Development bursary; ‘what does it mean to be an artist-led group?’, Doodle Days, Artist Pecha Kucha sessions, Summer Salon shows and new arts quarter development-site initiative: ‘Do you want art here or what?’ and ‘Ribbon People’.",
    images: [
      "/images/Projects/Unit11/unit11 (1).jpg",
      "/images/Projects/Unit11/unit11 (3).jpg",
      "/images/Projects/Unit11/unit11 (2).jpg",
      "/images/Projects/Unit11/unit11 (1)-2.jpg",
      "/images/Projects/Unit11/unit11 (4).jpg",
      "/images/Projects/Unit11/unit11 (6).jpg",
      "/images/Projects/Unit11/unit11 (5).jpg",
      "/images/Projects/Unit11/unit11 (7).jpg",
    ],
    url: "/projects/unit11",
    collaboration: true,
  },
  {
    id: "passing",
    title: "Conversations with passing friends",
    subtitle: "2009 - ongoing",
    text: "A series of works exploring relational complexity – marked from the body — the ruptures in communication which both inform and unform – the gaps, un-graspability and tensions in language, transience and connection –  of past and present – there and here – drawn through – drawn out – withdrawn – dynamics forming and falling away – always within and beyond self – the shifting landscape of relationships – drawings as acts of love and grief.",
    images: ["/images/Works/works (2).jpg"],
    url: "/projects/passing",
    collaboration: false,
  },
  {
    id: "youngminds",
    title: "YoungMinds",
    subtitle: "2009 - 2011",
    text: "This project spanned a number of years campaigning improvements in mental health services for children and young people through increased participation and developing spaces for young peoples voices to be heard. This included facilitating focus groups, creative workshops, exhibitions, developing training, media and advocacy work.",
    images: [
      "/images/Projects/YoungMinds/YoungMinds (3).jpg",
      "/images/Projects/YoungMinds/YoungMinds (2).jpg",
      "/images/Projects/YoungMinds/YoungMinds (2)-2.jpg",
      "/images/Projects/YoungMinds/YoungMinds (1)-2.jpg",
      "/images/Projects/YoungMinds/YoungMinds (1).jpg",
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
