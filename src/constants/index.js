import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "AI Project Enthusiast",
    icon: backend,
  },
  {
    title: "Creative Video Editor",
    icon: creator,
  },
  {
    title: "Open Source Contributor",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Vision 2024 Exhibition",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Built Java apps using JDBC for managing backend data and showcased at Vision 2024.",
      "Worked on responsive UI and improved user experience for demo apps.",
      "Explained the project to diverse audiences, improving public speaking and product pitching skills.",
    ],
  },
  {
    title: "Cloud Computing Student",
    company_name: "NPTEL Certification",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Nov 2023",
    points: [
      "Completed a certified course in Cloud Computing by NPTEL.",
      "Learned the basics of cloud architecture, deployment models, and IaaS/PaaS.",
      "Worked on cloud-based mini-projects using deployment tools and platforms.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "His presentation at Vision 2024 left a lasting impression. The project was solid, and his explanation made it shine.",
    name: "Event Judge",
    designation: "Tech Jury",
    company: "Vision 2024",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    testimonial:
      "His enthusiasm for learning and building cool stuff with MERN is infectious. Definitely someone to watch out for.",
    name: "Senior Peer",
    designation: "Mentor",
    company: "Tech Club",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    testimonial:
      "He's the kind of guy who doesn't just dream of making amazing projects – he actually builds them.",
    name: "Hackathon Teammate",
    designation: "Fellow Coder",
    company: "DevHack 2024",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

const projects = [
  {
    name: "College Finder",
    description:
      "A smart web app that helps students find colleges based on MHT CET and JEE percentile. Built with Node.js, MongoDB, and React.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/your-username/college-finder",
  },
  {
    name: "Symphoria - Spotify Clone",
    description:
      "A luxurious music platform that redefines the music experience with unique UI, animations, and new-age features built on MERN.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "animations",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/your-username/symphoria",
  },
  {
    name: "Smart Women Safety App",
    description:
      "Real-time AI-powered app focused on women's safety, with location tracking, emergency alerts, and voice assistance.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "real-time",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/your-username/women-safety-app",
  },
];

export { services, technologies, experiences, testimonials, projects };