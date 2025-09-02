import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "../../components/Button";
import {
  childAnimation,
  staggeredAnimation,
  useIsOnScreenOnce,
} from "../../hooks/useIsOnScreenOnce";
import { HeroContainer } from "./styles";

export function Hero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const onScreen = useIsOnScreenOnce(ref, 0.3);
  return (
    <HeroContainer
      id="hero"
      variants={staggeredAnimation}
      ref={ref}
      initial="hidden"
      animate={onScreen ? "visible" : "hidden"}
      transition={{ ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.span variants={childAnimation}>Hello, my name is</motion.span>
      <motion.h1 variants={childAnimation}>Gustavo Gomes.</motion.h1>
      <motion.h2 variants={childAnimation}>Full Stack Developer</motion.h2>
      <motion.p variants={childAnimation}>
      I am a software developer specialized in building automation workflows with n8n, creating complete systems tailored to business needs, and designing modern landing pages that convert. My work also includes SEO strategies to increase website traffic and improve online visibility.

With a strong focus on automation, data-driven solutions, and clean user experiences, I help companies streamline operations, attract more visitors, and deliver efficient digital solutions from end to end.
      </motion.p>
      <motion.a
        variants={childAnimation}
        href="./src/assets/resume.pdf"
        download
      >
        <Button title="Download CV" />
      </motion.a>
    </HeroContainer>
  );
}
