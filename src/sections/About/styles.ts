import { MotionProps, motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled(motion.section)<MotionProps>`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  gap: 4rem;
  padding: 8rem 0;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4rem 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
    gap: 1.5rem;
  }
`;
export const AboutTextContainer = styled(motion.div)<MotionProps>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  max-width: 35rem;
  
  > h2 {
    font-size: 2rem;
    display: flex;
    position: relative;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
  }
  
  > h2::before {
    content: "01. ";
    font-family: "Roboto", sans-serif;
    color: var(--orange-300);
    font-size: 1.2rem;
    text-align: left;
    margin-top: auto;
  }
  
  > h2::after {
    content: "";
    background-color: var(--gray-700);
    height: 1px;
    width: 100%;
    margin: auto 0;
  }
  
  > p {
    font-size: 1.1rem;
    color: var(--gray-400);
    line-height: 1.6;
  }
  
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  ul > li {
    list-style: none;
    font-size: 1rem;
  }

  @media (max-width: 1024px) {
    max-width: 32rem;
    
    > h2 {
      font-size: 1.8rem;
    }
    
    > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: left;
    
    > h2 {
      font-size: 1.6rem;
      justify-content: center;
    }
    
    > h2::after {
      display: none;
    }
    
    > p {
      font-size: 0.95rem;
      text-align: center;
    }
    
    > ul {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;
    
    > h2 {
      font-size: 1.4rem;
    }
    
    > h2::before {
      font-size: 1rem;
    }
    
    > p {
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    > ul {
      gap: 6px;
    }
  }
`;
export const AboutImgContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  transition: var(--transition);
  flex-shrink: 0;
  
  img {
    width: 17rem;
    height: 17rem;
    object-fit: cover;
    border-radius: 4px;
  }
  
  > div {
    position: absolute;
    display: block;
    width: 17rem;
    height: 17rem;
    top: 0;
    left: 0;
    border-radius: 4px;

    opacity: 0.3;
    transition: var(--transition);
    
    &:hover {
      opacity: 0;
    }
  }
  
  &:hover {
    transform: translate(-5px, -5px);
  }
  
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    border: 2px solid var(--orange-300);
    z-index: -1;
    top: 1rem;
    left: 1rem;
    border-radius: 4px;
    transition: var(--transition);
  }
  
  &:hover::after {
    transform: translate(10px, 10px);
  }

  @media (max-width: 1024px) {
    img {
      width: 15rem;
      height: 15rem;
    }
    
    > div {
      width: 15rem;
      height: 15rem;
    }
  }

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 1rem;
    
    img {
      width: 14rem;
      height: 14rem;
    }
    
    > div {
      width: 14rem;
      height: 14rem;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 12rem;
      height: 12rem;
    }
    
    > div {
      width: 12rem;
      height: 12rem;
    }
    
    &:after {
      top: 0.75rem;
      left: 0.75rem;
    }
  }

  @media (max-width: 360px) {
    img {
      width: 10rem;
      height: 10rem;
    }
    
    > div {
      width: 10rem;
      height: 10rem;
    }
  }
`;
