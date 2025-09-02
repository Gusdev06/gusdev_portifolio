import { MotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

export const HeroContainer = styled(motion.section)<MotionProps>`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  min-height: 600px;
  
  > span {
    color: var(--orange-300);
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  > h1 {
    font-size: 5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.1;
  }
  
  > h2 {
    font-size: 5rem;
    color: #4d4d4d;
    margin-bottom: 2rem;
    line-height: 1.1;
  }
  
  > p {
    font-size: 1.125rem;
    max-width: 30rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: var(--gray-300);
  }

  @media (max-width: 1200px) {
    > h1, > h2 {
      font-size: 4.5rem;
    }
    
    > p {
      max-width: 28rem;
    }
  }

  @media (max-width: 1024px) {
    > h1, > h2 {
      font-size: 4rem;
    }
    
    > p {
      max-width: 26rem;
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    height: 90vh;
    min-height: 500px;
    
    > h1, > h2 {
      font-size: 3.5rem;
    }
    
    > p {
      max-width: 100%;
      font-size: 1rem;
      margin-bottom: 1.5rem;
    }
    
    > span {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    height: 85vh;
    min-height: 450px;
    
    > h1, > h2 {
      font-size: 2.8rem;
      margin-top: 0.5rem;
      margin-bottom: 0.3rem;
    }
    
    > h2 {
      margin-bottom: 1.5rem;
    }
    
    > p {
      font-size: 0.95rem;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }
    
    > span {
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
    }
  }

  @media (max-width: 360px) {
    > h1, > h2 {
      font-size: 2.4rem;
    }
    
    > p {
      font-size: 0.9rem;
    }
  }
`
