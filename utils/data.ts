type NavbarLinkType = {
  id: number;
  title: string;
  link: string;
};

export const navbarLinks: NavbarLinkType[] = [
  {
    id: 1,
    title: "What we do?",
    link: "/what-we-do",
  },
  {
    id: 2,
    title: "Projects",
    link: "/projects",
  },
  {
    id: 3,
    title: "Testimonials",
    link: "/testimonials",
  },
  {
    id: 4,
    title: "Contact us",
    link: "/contact",
  },
];

type WhatWeDoType = {
  id: number;
  icon: any;
  title: string;
  desc: string;
};

import { CgWebsite } from "react-icons/cg";
import { FaPenRuler } from "react-icons/fa6";
import { TbDeviceMobileCharging } from "react-icons/tb";

export const whatwedo: WhatWeDoType[] = [
  {
    id: 1,
    icon: CgWebsite,
    title: "Web Development",
    desc: "Full-stack web app with tech stack includes Reactjs, Nextjs, TailwindCSS, Recoil, Redux-toolkit, RTK Query, GraphQL, Nodejs, Express, Typescript, Prisma, PostgreSQL, MongoDB",
  },
  {
    id: 2,
    icon: FaPenRuler,
    title: "Figma Design",
    desc: "Impressive mockups, web page design, landing pages and some interesting designs for web apps/mobile apps using Figma.",
  },
  {
    id: 3,
    icon: TbDeviceMobileCharging,
    title: "App Development",
    desc: "Mobile apps using cross-platform development tools like React-Native, Flutter and Firebase. Fully-working mobile apps with some animations and sleek-ui.",
  },
];
