import { useRef } from "react";
import { Button } from "../../components/Button";
import {
  staggeredAnimation,
  useIsOnScreenOnce,
} from "../../hooks/useIsOnScreenOnce";
import { ContactContainer } from "./styles";
export function Contact() {
  const ref = useRef<HTMLDivElement | null>(null);
  const onScreen = useIsOnScreenOnce(ref, 0.5);

  return (
    <ContactContainer
      id="contact"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? "visible" : "hidden"}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <h2>Contact</h2>
      
      <h3>Let's work together!</h3>
      
      <p>
        I'm always interested in new opportunities and exciting projects. 
        Whether you need a complete web application, automation solutions, or just want to discuss an idea, 
        I'd love to hear from you.
      </p>

      <a href="https://wa.me/11943735978" target="_blank" rel="noopener noreferrer">
        <Button title="Get In Touch" />
      </a>
      
      <div>OR</div>
      
      <p>You can also reach me at: <strong>gustavogomess.dev@gmail.com</strong></p>
    </ContactContainer>
  );
}
