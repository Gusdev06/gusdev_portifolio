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
      id="contato"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? "visible" : "hidden"}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <h2>Contact</h2>

      <h3>Whatsapp:</h3>
      <a href="https://wa.me/11943735978">
        <Button title="Whatsapp" />
      </a>
    </ContactContainer>
  );
}
