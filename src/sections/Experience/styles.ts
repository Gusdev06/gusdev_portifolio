import { MotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

export const ExperienceContainer = styled(motion.section)<MotionProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 8rem 0;

  > div {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    
    > ul {
      list-style: none;
      border-left: 2px solid var(--gray-700);
      min-width: 200px;
      
      > li {
        font-size: 1rem;
      }
    }
  }
  
  > h2 {
    font-size: 2rem;
    display: flex;
    position: relative;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
  }
  
  > h2::before {
    content: '02. ';
    font-family: 'Roboto', sans-serif;
    color: var(--orange-300);
    font-size: 1.2rem;
    text-align: left;
    margin-top: auto;
  }
  
  > h2::after {
    content: '';
    background-color: var(--gray-700);
    height: 1px;
    width: 100%;
    margin: auto 0;
  }

  @media (max-width: 1024px) {
    padding: 6rem 0;
    
    > div {
      gap: 2rem;
      
      > ul {
        min-width: 180px;
      }
    }
    
    > h2 {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    gap: 1.5rem;
    
    > div {
      flex-direction: column;
      gap: 1.5rem;
      
      > ul {
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid var(--gray-700);
        border-left: none;
        min-width: auto;
        width: 100%;
        overflow-x: auto;
        padding-bottom: 0.5rem;
      }
    }
    
    > h2 {
      font-size: 1.6rem;
      justify-content: center;
    }
    
    > h2::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
    gap: 1rem;
    
    > h2 {
      font-size: 1.4rem;
    }
    
    > h2::before {
      font-size: 1rem;
    }
  }
`
export const ExperienceContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 12px;
  flex: 1;

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    opacity: 1;

    > h3 {
      font-size: 1.3rem;
      color: var(--gray-100);
      margin-bottom: 0.5rem;
    }
    
    > span {
      font-size: 1rem;
      color: var(--orange-300);
      margin-bottom: 1rem;
      font-weight: 500;
    }
    
    p {
      color: var(--gray-400);
      line-height: 1.6;
      font-size: 1rem;
      
      &::before {
        content: '▸ ';
        color: var(--orange-300);
        margin-right: 0.5rem;
      }
    }
  }

  @media (max-width: 1024px) {
    > ul {
      gap: 0.8rem;
      
      > h3 {
        font-size: 1.2rem;
      }
      
      p {
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 768px) {
    margin-top: 0;
    
    > ul {
      gap: 0.75rem;
      text-align: left;
      
      > h3 {
        font-size: 1.1rem;
        text-align: center;
      }
      
      > span {
        font-size: 0.95rem;
        text-align: center;
      }
      
      p {
        font-size: 0.9rem;
        text-align: left;
      }
    }
  }

  @media (max-width: 480px) {
    > ul {
      gap: 0.5rem;
      
      > h3 {
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }
      
      > span {
        font-size: 0.85rem;
        margin-bottom: 0.75rem;
      }
      
      p {
        font-size: 0.85rem;
        line-height: 1.5;
      }
    }
  }
`
