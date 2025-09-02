import { useRef } from "react";
import { ProjectCard, ProjectCardProps } from "../../components/ProjectCard";
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from "../../hooks/useIsOnScreenOnce";
import { ProjectsContainer } from "./styles";

const projectsContent: ProjectCardProps[] = [
  {
    title: "Picchat",
    description: "AI-powered WhatsApp automation platform landing page with modern dark theme design",
    tags: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Styled Components",
      "Responsive Design",
      "Landing Page",
    ],
    deployUrl: "https://picchat.com.br/",
    repoUrl: "picchat-landing",
    imgUrl: "picchat.png",
  },
  {
    title: "Donak Beauty",
    description: "Elegant beauty salon website with professional design and comprehensive service showcase",
    tags: [
      "React.js",
      "TypeScript",
      "Next.js",
      "Vercel",
      "Responsive Design",
      "Beauty Industry",
    ],
    deployUrl: "https://donak-beauty.vercel.app/",
    repoUrl: "donak-beauty",
    imgUrl: "donak.png",
  },
  {
    title: "Rodillas Sin Dolores",
    description: "Health and wellness landing page for knee pain relief solutions with conversion-focused design",
    tags: [
      "React.js",
      "TypeScript",
      "Landing Page",
      "Health & Wellness",
      "Conversion Optimization",
    ],
    deployUrl: "https://www.rodillassindolores.com/",
    repoUrl: "rodillas-sin-dolores",
    imgUrl: "rodilia.png",
  },
  {
    title: "Eshows",
    description: "Music platform connecting artists with restaurants and bars, featuring app download landing page",
    tags: [
      "React.js",
      "TypeScript",
      "Landing Page",
      "Mobile App Platform",
      "Music Industry",
      "Artist Management",
    ],
    deployUrl: "https://www.eshows.com.br/",
    repoUrl: "eshows-landing",
    imgUrl: "eshows.png",
  },
  {
    title: "Espaces",
    description: "Social network for gastronomic experiences helping users discover, review and share favorite places",
    tags: [
      "React.js",
      "TypeScript",
      "Social Network",
      "Gastronomy Platform",
      "User Reviews",
      "Location Discovery",
    ],
    deployUrl: "https://www.espaces.com.br/",
    repoUrl: "espaces-platform",
    imgUrl: "espaces.png",
  },
  {
    title: "Espaces Blog",
    description: "Content platform featuring gastronomic guides and restaurant recommendations across São Paulo",
    tags: [
      "React.js",
      "TypeScript",
      "Content Management",
      "Blog Platform",
      "SEO Optimization",
      "Gastronomy Content",
    ],
    deployUrl: "https://blog.espaces.com.br/",
    repoUrl: "espaces-blog",
    imgUrl: "espaces_blog.png",
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
      <h2>Projects</h2>
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
