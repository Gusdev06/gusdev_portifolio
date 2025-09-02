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
        <h2>About me</h2>

        <p>
        I am a software engineer with 3+ years of experience, specialized in backend development with nodejs

My professional experience includes working on highly available solutions for various industries such as marketplaces, CRM, and information security.

Currently, I work on designing solutions and developing applications that have a direct impact on the daily lives of millions of users, focusing on scalability, availability, consistency, and performance.
        </p>

        <p>Here are some technologies I've been using recently:</p>
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
