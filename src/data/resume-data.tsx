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
  name: "Karlos Zurutuza",
  initials: "KZ",
  location: "College Station, TX, USA",
  locationLink: "https://www.google.com/maps/place/College+Station,+TX",
  about:
      "Recent Texas A&M Computer Science graduate (December 2024). Built and now run MyCache, an NFC-powered treasure hunt game. Former Vex Robotics intern. ",
  summary:
      "I am a dedicated Computer Science student at Texas A&M University, graduating in 2023. I have experience as an intern at Vex Robotics and have participated in various projects and hackathons, showcasing my skills in software development and team leadership.",
  avatarUrl: "https://avatars.githubusercontent.com/u/55366904?v=4",
  personalWebsiteUrl: "https://github.com/torfoes",
  contact: {
    email: "karloszuru@gmail.com",
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
      end: "2024",
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
          "Leading a team to improve geocaching through NFC technology, developing web and mobile apps, backend services, and a reel-to-reel NFC encoder for efficient NFC tag programming.",
    },
    {
      company: "Vex Robotics",
      link: "https://www.vexrobotics.com",
      badges: [],
      title: "Intern",
      logo: null,
      start: "Mar. 2018",
      end: "Aug. 2020",
      description: "Assisted in product development from concept through production, contributing to a product now available nationwide. Gained hands-on experience with the full engineering design cycle. Created customer-facing and manufacturing drawings for a range of products. Supported design, modeling, and testing efforts for future projects."
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
      "ROS2",
      "Linux",
    "Solidworks",
    "Photoshop",
    "Illustrator",
    "C++",
    "Python",
    "Solidity",
    "Django",
    "Web3.js",
    "AWS",
    "GCP",
    "Git",
    "Docker",
    "Hugging Face",
    "Local LLaMA",
    "Next.js",
    // "Eagle Scout",
  ],
  projects: [
    {
      "title": "MyCache",
      "techStack": ["NFC", "Django", "React", "React Native"],
      "description": "Digital treasure hunt game powered by NFC technology.",
      "link": {
        "label": "MyCache",
        "href": "https://mycache.dev"
      }
    },
    {
      "title": "Whisper Disco",
      "techStack": ["WebRTC", "MediaSoup"],
      "description": "Stream audio for silent discos over a local network. Show up and bring the party!",
      "link": {
        "label": "Whisper Disco",
        "href": "https://github.com/torfoes/whisperdisco"
      }
    },
    {
      title: "PushPal",
      techStack: ["Next.js", "WebPush"],
      description:
          "Manage attendance and check-ins and send group push notifications to keep everyone informed.",
      link: {
        label: "PushPal",
        href: "https://pushpal.app",
      },
    },
  ],
} as const;
