import styled from 'styled-components'

export const SocialContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 2;
  
  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    
    li {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    text-decoration: none;
    cursor: pointer;
    color: var(--gray-300);
    transition: var(--transition);
    border-radius: 4px;
    
    &:hover {
      color: var(--orange-300);
      background-color: var(--gray-800);
      transform: translateY(-2px);
    }
    
    > svg {
      width: 20px;
      height: 20px;
    }
  }
  
  > div {
    width: 1px;
    height: 4rem;
    background-color: var(--gray-700);
  }

  @media (max-width: 1024px) {
    left: 1.5rem;
    bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    position: static;
    flex-direction: row;
    gap: 1rem;
    
    > ul {
      flex-direction: row;
      gap: 1rem;
    }
    
    > div {
      display: none;
    }
    
    a {
      padding: 10px;
      
      > svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    
    > ul {
      gap: 0.75rem;
    }
    
    a {
      padding: 8px;
      
      > svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`
