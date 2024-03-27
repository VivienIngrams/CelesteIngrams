type PracticeDataType = {
    title: string;
    id: string;
    url: string;
    image:  { url: string; position: string; size: string };
  };
  
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
        title: "Practice",
        id: "practice",
        url: "/practice/practice",
        image: {
            url: "/images/Practice.png",
            position: "center",
            size: "400px",
        },
        },
        {
        title: "About",
        id: "about",
        url: "/about",
        image: {
            url: "/images/About.png",
            position: "center",
            size: "400px",
        },
        },
        {
        title: "Contact",
        id: "contact",
        url: "/contact",
        image: {
            url: "/images/Contact.png",
            position: "center",
            size: "400px",
        },
        },
    ]