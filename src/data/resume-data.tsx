import { GitHubIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Karlos Zurutuza",
  initials: "KZ",

  location: "Dallas, TX (Open to US/EU work)",
  locationLink: "https://maps.app.goo.gl/EVXpy1h6QL2gG9jE8",

  about: "Full-Stack & Embedded Engineer: React/Next, ROS2, NFC, Cloud. US-Spanish citizen.",

  summary:
      "React / Next front-end, Drizzle / Postgres back-end, ROS2 hardware, AWS infra.",

  avatarUrl: "https://avatars.githubusercontent.com/u/55366904?v=4",
  personalWebsiteUrl: "https://github.com/torfoes",

  contact: {
    email: "karloszuru@gmail.com",
    tel: "469-818-1074",
    social: [
      { name: "GitHub", url: "https://github.com/torfoes", icon: GitHubIcon },
    ],
  },

  education: [
    {
      school: "Texas A&M University",
      degree: "B.S. Computer Science (GPA 3.6)",
      start: "August 2019",
      end: "December 2024",
    },
  ],

  work: [
    {
      company: "MyCache",
      link: "https://mycache.dev",
      title: "Founder / Lead Engineer",
      start: "November 2023",
      end: "Present",
      bullets: [
        "Scaled React Native + Next.js stack to serve ~2,100 monthly users.",
        "Monitored uptime with grafana dashboards running in docker on ecs fargate; confirmed 99.9% uptime",
        "Built reel-to-reel NTAG 424 DNA encoder (ROS2 / C++) flashing 1000 tags per hour; provisioning time reduced 88%.",
        "Implemented OAuth 2 sign-in with NextAuth.",
        "GitHub Actions CI/CD with automated tests and blue-green deploys in under three minutes.",
      ],
    },

    {
      company: "VEX Robotics",
      link: "https://www.vexrobotics.com",
      title: "Product Development Intern",
      start: "March 2018",
      end: "August 2020",
      bullets: [
        "Created 120 + SolidWorks drawings used directly in production.",
        "Consolidated 5000+ SKUs into a searchable Excel catalog, cutting pick-and-pack time by 40%.",
        "Prototyped Next-Generation VEX Robotics Kits",
      ],
    },
  ],

  leadershipAndService: [
    {
      organization: "FIRST Robotics Team 3310",
      title: "Mentor",
      start: "January 2022",
      end: "Present",
      description:
          "Led cad & programming sessions; coordinated part sourcing"
    },
    {
      organization: "Boy Scouts of America",
      title: "Eagle Scout",
      description: "Completed 100+ service hours and leadership-focused skill development.",
    },
    {
      organization: "Aggie Entrepreneurship Program",
      title: "Member",
      start: "January 2024",
      end: "December 2024",
      description:
          "Met weekly to refine business concepts; collaborated on market analysis and took place in pitch competitions.",
    },
  ],

  projects: [
    {
      title: "MyCache",
      techStack: ["NFC", "Next.js", "React Native", "Drizzle", "AWS"],
      description: "Treasure-hunt game using NFC tags for verification.",
      link: { label: "mycache.dev", href: "https://mycache.dev" },
    },
    {
      title: "Whisper Disco",
      techStack: ["WebRTC", "MediaSoup"],
      description: "Streams local-network audio for silent-disco events.",
      link: { label: "GitHub", href: "https://github.com/torfoes/whisperdisco" },
    },
    {
      title: "PushPal",
      techStack: ["Next.js", "WebPush"],
      description: "Attendance, check-ins, and group notifications for events.",
      link: { label: "pushpal.app", href: "https://pushpal.app" },
    },
  ],
} as const;
