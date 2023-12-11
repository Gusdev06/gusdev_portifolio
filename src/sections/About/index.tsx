import { useRef } from "react";
import { StackTag } from "../../components/StackTag";
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from "../../hooks/useIsOnScreenOnce";
import {
  AboutContainer,
  AboutImgContainer,
  AboutTextContainer,
} from "./styles";
const experienceTags = [
  { title: "Node.js" },
  { title: "Express.js" },
  { title: "TypeScript" },
  { title: "Docker" },
  { title: "SOLID" },
  { title: "MySQL" },
  { title: "Prisma" },
  { title: "CRUD" },
  { title: "JWT" },
  { title: "API RESTful" },
  { title: "React" },
  { title: "Redux" },
  { title: "Styled Components" },
  { title: "JavaScript" },
  { title: "TypeScript" }, // TypeScript já mencionado no Back-End
  { title: "Vue.js" },
  { title: "jQuery" },

  { title: "Bootstrap" },
];
export function About() {
  const ref = useRef<HTMLDivElement | null>(null);
  const onScreen = useIsOnScreenOnce(ref, 0.3);
  console.log(onScreen);
  return (
    <AboutContainer
      id="sobre"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? "visible" : "hidden"}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <AboutTextContainer>
        <h2>Sobre mim</h2>

        <p>
          Durante grande parte da minha adolescência, atuei como jogador
          profissional de basquete, desenvolvendo habilidades fundamentais para
          o esporte, tais como trabalho em equipe, resiliência e disciplina. No
          entanto, a área da tecnologia sempre foi uma paixão presente em minha
          vida e, em determinado momento, decidi seguir por esse caminho.
          Comecei a me aprofundar em programação e iniciei minha jornada no
          curso de Desenvolvedor Fullstack Python pela EBAC, e desde então tenho
          me sentido extremamente motivado.
        </p>

        <p>Aqui alguma tecnologias que eu venho usando Recentemente:</p>
        <ul>
          {experienceTags.map((experienceTag) => {
            return (
              <li key={experienceTag.title}>
                <StackTag title={experienceTag.title} />
              </li>
            );
          })}
        </ul>
      </AboutTextContainer>
      <AboutImgContainer>
        <img src="https://i.imgur.com/meb7vqG.jpg" alt="" />
        <div />
      </AboutImgContainer>
    </AboutContainer>
  );
}
