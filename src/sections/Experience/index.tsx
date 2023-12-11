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
      title: "Freelancer",
      office: "Desenvolvedor Full-Stack @Freelancer",
      content: [
        "Como desenvolvedor full stack freelancer, sou responsável por criar e manter tanto a interface visual quanto a funcionalidade de back-end de websites e aplicativos. No front-end, foco no design e interatividade, garantindo uma ótima experiência do usuário. No back-end, gerencio a lógica de servidor, bancos de dados e integrações de API, assegurando que tudo funcione harmoniosamente.",
      ],
      period: "Jan 2023 - Atualmente",
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
      <h2>Experiências</h2>
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
