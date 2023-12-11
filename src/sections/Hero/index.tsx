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
      <motion.span variants={childAnimation}>Oi, Meu nome é</motion.span>
      <motion.h1 variants={childAnimation}>Gustavo Gomes.</motion.h1>
      <motion.h2 variants={childAnimation}>Desenvolvedor Full Stack</motion.h2>
      <motion.p variants={childAnimation}>
        Desenvolvedor com proficiência em Node.js, TypeScript e React,
        incorporando igualmente a integração do backend. Possuo habilidades na
        criação de estruturas e estilos atrativos, com especialização em
        facilitar interações dinâmicas e desenvolver aplicações escaláveis.
        Comprometido em assegurar a entrega de produtos de alta qualidade,
        mantenho-me constantemente atualizado para continuar a me destacar no
        mercado.
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
