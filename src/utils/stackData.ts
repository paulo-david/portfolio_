import {
  SiPostgresql,
  SiTypescript,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { RiBracesFill } from "react-icons/ri";
import { FaGit, FaPython } from "react-icons/fa";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDocker,
} from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  {
    title: "TypeScript",
    img: SiTypescript,
  },
  {
    title: "React",
    img: FaReact,
  },
  {
    title: "Redux",
    img: SiRedux,
  },
  {
    title: "Styled-components",
    img: SiStyledcomponents,
  },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "Type ORM",
    img: RiBracesFill,
  },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Python", img: FaPython },
  { title: "Git", img: FaGit },
];
