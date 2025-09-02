import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1.5rem;
  color: var(--gray-400);
  padding: 3rem 0 2rem;
  border-top: 1px solid var(--gray-700);
  margin-top: 4rem;

  > p {
    font-size: 0.9rem;
    text-align: center;
    line-height: 1.5;
    
    > a {
      color: var(--orange-300);
      text-decoration: none;
      transition: var(--transition);
      
      &:hover {
        color: var(--orange-200);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem;
    margin-top: 3rem;
    gap: 1rem;
    
    > div:first-child {
      position: static;
      flex-direction: row;
    }
    
    > p {
      font-size: 0.85rem;
      margin: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0 1rem;
    margin-top: 2rem;
    
    > p {
      font-size: 0.8rem;
      margin: 0 1.5rem;
    }
  }
`
