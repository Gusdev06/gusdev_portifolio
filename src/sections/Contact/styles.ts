import { MotionProps, motion } from 'framer-motion'
import styled from 'styled-components'

export const ContactContainer = styled(motion.section)<MotionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  padding: 8rem 0;
  max-width: 600px;
  margin: 0 auto;

  > h2 {
    font-size: 2rem;
    display: flex;
    white-space: nowrap;
    gap: 0.5rem;
    color: var(--gray-100);
    align-self: flex-start;
    width: 100%;
  }
  
  > h3 {
    font-size: 1.5rem;
    color: var(--gray-100);
    margin-bottom: 1rem;
  }
  
  > p {
    font-size: 1.1rem;
    color: var(--gray-400);
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  > h2::before {
    content: '04. ';
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
  
  > a {
    align-self: center;
  }
  
  > form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    
    > label {
      color: var(--gray-100);
      margin-bottom: 8px;
      font-size: 1rem;
    }
    
    > input {
      width: 100%;
      background-color: var(--gray-700);
      border: 1px solid var(--gray-600);
      outline: none;
      padding: 12px 16px;
      color: var(--gray-100);
      margin-bottom: 16px;
      border-radius: 4px;
      font-size: 1rem;
      transition: var(--transition);
      
      &:focus {
        border-color: var(--orange-300);
        background-color: var(--gray-600);
      }
      
      &::placeholder {
        color: var(--gray-500);
      }
    }
    
    > textarea {
      resize: vertical;
      background-color: var(--gray-700);
      border: 1px solid var(--gray-600);
      outline: none;
      padding: 12px 16px;
      color: var(--gray-100);
      border-radius: 4px;
      width: 100%;
      font-size: 1rem;
      margin-bottom: 2rem;
      min-height: 120px;
      transition: var(--transition);
      
      &:focus {
        border-color: var(--orange-300);
        background-color: var(--gray-600);
      }
      
      &::placeholder {
        color: var(--gray-500);
      }
    }
    
    > button {
      align-self: center;
    }
  }
  
  > div {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 8px;
    color: var(--gray-100);
    margin: 2rem 0;
    
    &::before {
      content: '';
      flex: 1;
      background-color: var(--gray-700);
      height: 1px;
    }
    
    &::after {
      content: '';
      flex: 1;
      background-color: var(--gray-700);
      height: 1px;
    }
  }

  @media (max-width: 1024px) {
    padding: 6rem 0;
    max-width: 500px;
    
    > h2 {
      font-size: 1.8rem;
    }
    
    > h3 {
      font-size: 1.3rem;
    }
    
    > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    gap: 1.5rem;
    max-width: 100%;
    
    > h2 {
      font-size: 1.6rem;
      justify-content: center;
      align-self: center;
    }
    
    > h2::after {
      display: none;
    }
    
    > h3 {
      font-size: 1.2rem;
    }
    
    > p {
      font-size: 0.95rem;
    }
    
    > form {
      > input, > textarea {
        font-size: 0.95rem;
        padding: 10px 14px;
      }
      
      > textarea {
        min-height: 100px;
      }
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
    
    > h3 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }
    
    > p {
      font-size: 0.9rem;
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }
    
    > form {
      > input, > textarea {
        font-size: 0.9rem;
        padding: 8px 12px;
      }
      
      > textarea {
        min-height: 90px;
        margin-bottom: 1.5rem;
      }
    }
    
    > div {
      margin: 1.5rem 0;
    }
  }
`
