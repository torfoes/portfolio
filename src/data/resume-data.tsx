import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: process.env.NAME,
  initials: "KZ",
  location: "College Station, TX, USA",
  locationLink: "https://www.google.com/maps/place/College+Station,+TX",
  about:
      "Founder of MyCache and a Computer Science student who loves building things. Ask me about my last hackathon or my latest tech stack.",

  summary:
      "I am a dedicated Computer Science student at Texas A&M University, graduating in 2023. I have experience as an intern at Vex Robotics and have participated in various projects and hackathons, showcasing my skills in software development and team leadership.",
  avatarUrl: process.env.AVATAR_URL,
  personalWebsiteUrl: "https://github.com/torfoes",
  contact: {
    email: "karlos.zurutuza@tamu.edu",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/torfoes",
        icon: GitHubIcon,
      },
    ],
  },
  education: [
    {
      school: "Texas A&M University",
      degree: "B.S Computer Science",
      start: "Aug. 2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "MyCache",
      link: "https://mycache.dev",
      badges: [],
      title: "Founder",
      logo: null, // Update with MyCache logo if available
      start: "Nov. 2023",
      end: "Current",
      description:
          "Leading a team working on improving the game of geocaching using NFC technology. Developed a web app, mobile app, backend services, as well as a reel to reel NFC encoder. Designed the product and developed the software.",
    },
    {
      company: "Vex Robotics",
      link: "https://www.vexrobotics.com",
      badges: [],
      title: "Intern",
      logo: null,
      start: "Mar. 2018",
      end: "Aug. 2020",
      description:
          "Designed products from concept to production; one is now sold nationwide. Experienced the complete engineering design cycle. Produced both customer-facing and manufacturing drawings for various products. Assisted with design, modeling, and testing for a variety of future products.",
    },
  ],
  activities: [
    {
      organization: "FRC Team 3310",
      title: "Mentor",
      start: "Jan. 2022",
      end: "Current",
      description:
          "Delegated tasks and lead CAD / Programming training sessions. Managed the ordering of new parts. Worked with strategists to set design goals and deadlines.",
    },
  ],
  skills: [
    "Solidworks",
    "Photoshop",
    "Illustrator",
    "C++",
    "Python",
    "Solidity",
    "React",
    "Django",
    "Web3.js",
    "AWS",
    "GCP",
    "Git",
    "Docker",
    "Hugging Face",
    "Local LLaMA",
    "Eagle Scout",
  ],
  projects: [
    {
      "title": "MyCache",
      "techStack": ["NFC", "Django", "React", "React Native"],
      "description": "Treasure hunt game using NFC technology. Built with Django for the backend and React/React Native for the frontend.",
      "link": {
        "label": "MyCache",
        "href": "https://mycache.dev"
      }
    },
    {
      "title": "Whisper Disco",
      "techStack": ["WebRTC", "MediaSoup"],
      "description": "Stream audio for silent discos over a local network using WebRTC and MediaSoup. Show up and bring the party!",
      "link": {
        "label": "Whisper Disco",
        "href": ""
      }
    },


    {
      title: "Left Off",
      techStack: ["OpenAI", "Semantic Search", "YouTube"],
      description:
          "Used the OpenAI embedding engine to enable semantic searches of YouTube video transcripts. Minimized costs by storing embeddings efficiently. Developed a low-cost scalable tech stack.",
      link: {
        label: "Left Off",
        href: "",
      },
    },
    // {
    //   title: "ETHglobal Lisbon",
    //   techStack: ["Ethereum", "Blockchain"],
    //   description:
    //       "Took part in a three-day Ethereum-focused hackathon in Lisbon, Portugal. Developed a block visualizer showcasing rollup interactions on the Ethereum blockchain.",
    //   link: {
    //     label: "ETHglobal Lisbon",
    //     href: "",
    //   },
    // },
  ],
} as const;
