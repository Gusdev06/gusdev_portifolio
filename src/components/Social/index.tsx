import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import { SocialContainer } from "./styles";

export function Social() {
  return (
    <SocialContainer className="social">
      <ul>
        <li>
          <a
            href="https://github.com/Gusdev06"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo size={24} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gusdev06/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo size={24} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/11943735978" target="_blank" rel="noreferrer">
            <WhatsappLogo size={24} />
          </a>
        </li>
      </ul>
      <div />
    </SocialContainer>
  );
}
