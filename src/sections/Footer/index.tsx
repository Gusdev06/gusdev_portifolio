import { Social } from "../../components/Social";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <Social />
      
      <p>
        Designed & Built by{" "}
        <a href="https://github.com/Gusdev06" target="_blank" rel="noopener noreferrer">
          Gustavo Gomes
        </a>
      </p>
      
      <p>
        © {new Date().getFullYear()} Gustavo Gomes. All rights reserved.
      </p>
    </FooterContainer>
  );
}
