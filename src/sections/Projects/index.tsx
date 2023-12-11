import { useRef } from "react";
import { ProjectCard, ProjectCardProps } from "../../components/ProjectCard";
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from "../../hooks/useIsOnScreenOnce";
import { ProjectsContainer } from "./styles";

const projectsContent: ProjectCardProps[] = [
  {
    title: "Ecommerce Eplay",
    description: "Ecommerce para uma loja de games",
    tags: [
      "React.js",
      "TypeScript",
      "styled components, ",
      "useContext",
      "Redux",
      "NodeJS",
      "Express",
      "MySQL",
      "Prisma",
      "Docker",
      "Multer",
    ],
    deployUrl: "https://eplay-1-tan.vercel.app/",
    repoUrl: "EcommerceEplay",
    imgUrl: "https://i.imgur.com/5WsfIF7.png",
  },
  {
    title: "Ecommerce FSW Store",
    description: "Ecommerce para uma loja de periféricos de computador",
    tags: ["Next", "TypeScript", "styled components, ", "useContext", "Prisma"],
    deployUrl: "https://full-stack-store-jslg.vercel.app/",
    repoUrl: "fsw-store",
    imgUrl: "https://i.imgur.com/VlEDuwg.png",
  },
  {
    title: "DoceVix (em desenvolvimento)",
    description: "Site para um restaurante",
    tags: [
      "React.js",
      "TypeScript",
      "styled components, ",
      "useContext",
      "Redux",
      "NodeJS",
      "Express",
      "MySQL",
      "Prisma",
      "Docker",
      "Multer",
    ],
    repoUrl: "projeto-doce-vix/tree/develop",
    imgUrl: "https://i.imgur.com/1HapxmQ.png",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement | null>(null);
  const onScreen = useIsOnScreenOnce(ref, 0.5);
  return (
    <ProjectsContainer
      id="projetos"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? "visible" : "hidden"}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <h2>Projetos</h2>
      <div>
        {projectsContent.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.tags}
              deployUrl={project.deployUrl}
              repoUrl={project.repoUrl}
              imgUrl={project.imgUrl}
            />
          );
        })}
      </div>
    </ProjectsContainer>
  );
}
