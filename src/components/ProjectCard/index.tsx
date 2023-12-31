import { Folder, GithubLogo } from "@phosphor-icons/react";
import {
  ProjectCardContainer,
  ProjectCardImgContainer,
  ProjectCardTextContainer,
} from "./styles";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  deployUrl?: string;
  imgUrl: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  repoUrl,
  deployUrl,
  imgUrl,
}: ProjectCardProps) {
  return (
    <ProjectCardContainer>
      <ProjectCardTextContainer>
        <span>Projeto em destaque</span>
        <a href={deployUrl} target="_blank" rel="noreferrer">
          {title}
        </a>
        <div>
          <p>{description}</p>
        </div>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>
          <a
            href={`https://github.com/gusdev06/${repoUrl}`}
            target="_blank"
            rel=" noreferrer"
          >
            <GithubLogo size={24} />
          </a>
          <a href={deployUrl} target="_blank" rel="noreferrer">
            <Folder size={24} />
          </a>
        </div>
      </ProjectCardTextContainer>
      <ProjectCardImgContainer>
        <img src={imgUrl} />
        <a href={deployUrl} target="_blank" rel="noreferrer" />
      </ProjectCardImgContainer>
    </ProjectCardContainer>
  );
}
