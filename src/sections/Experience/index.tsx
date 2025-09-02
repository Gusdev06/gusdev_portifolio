import { useRef, useState } from "react";
import { TabItem } from "../../components/TabItem";
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from "../../hooks/useIsOnScreenOnce";
import { ExperienceContainer, ExperienceContentContainer } from "./styles";

export function Experience() {
  const [activeTab, setActiveTab] = useState("tab1");
  const ref = useRef<HTMLDivElement | null>(null);
  const onScreen = useIsOnScreenOnce(ref, 0.5);
  const TABS = [
    {
      value: "tab1",
      title: "Eshows",
      office: "Midlevel Full Stack Developer @Eshows",
      content: [
        "Full Stack Developer responsible for creating and maintaining complete web applications using modern technologies.",
        "Working with Node.js, NestJS and other technologies from the JavaScript/TypeScript ecosystem.",
        "Experience in both front-end and back-end development, ensuring robust and scalable solutions.",
      ],
      period: "Sep 2024 - Present",
    },
    {
      value: "tab2",
      title: "ODEEN",
      office: "Midlevel Backend Developer @ODEEN",
      content: [
        "Backend Developer specialized in intelligence solutions for security applications.",
        "Working with Google Cloud Platform (GCP), Kubernetes and other infrastructure technologies.",
        "Responsible for developing and maintaining scalable APIs and backend systems.",
        "Experience in microservices architectures and cloud deployment strategies.",
      ],
      period: "Mar 2024 - Oct 2024",
    },
    {
      value: "tab3",
      title: "JM Eletro",
      office: "Full Stack Developer @JM Eletro Motores",
      content: [
        "Full Stack Developer responsible for internal company systems and applications.",
        "Working with React, Amazon EC2 and other web development technologies.",
        "Development of applications for business process management and control.",
        "Experience in deployment and maintenance of applications on AWS infrastructure.",
      ],
      period: "Nov 2022 - Dec 2023",
    },
    {
      value: "tab4",
      title: "Freelancer",
      office: "Full Stack Developer @Freelancer",
      content: [
        "As a freelance full stack developer, I'm responsible for creating and maintaining both the visual interface and back-end functionality of websites and applications.",
        "On the front-end, I focus on design and interactivity, ensuring an excellent user experience.",
        "On the back-end, I manage server logic, databases and API integrations, ensuring everything works harmoniously.",
      ],
      period: "Jan 2023 - Present",
    },
  ];
  const activeTabContent = TABS.find((tab) => tab.value === activeTab);
  return (
    <ExperienceContainer
      id="experiencia"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? "visible" : "hidden"}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <h2>Experiences</h2>
      <div>
        <ul>
          {TABS.map((tab) => (
            <TabItem
              key={tab.value}
              value={tab.value}
              title={tab.title}
              isSelected={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
            />
          ))}
        </ul>
        <ExperienceContentContainer>
          {activeTabContent && (
            <ul>
              <h3>{activeTabContent.office}</h3>
              <span>{activeTabContent.period}</span>
              {activeTabContent.content.map((item, index) => (
                <li key={index}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          )}
        </ExperienceContentContainer>
      </div>
    </ExperienceContainer>
  );
}
