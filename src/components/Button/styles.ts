import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid var(--orange-300);
  padding: 0.75rem 2rem;
  border-radius: 4px;
  color: var(--orange-300);
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  transition: var(--transition);
  outline: none;
  cursor: pointer;
  white-space: nowrap;

  &:focus,
  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 3px 3px 0 0 var(--orange-300);
    background-color: var(--orange-700-30);
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 1px 1px 0 0 var(--orange-300);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 0.95rem;
    
    &:focus,
    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 2px 2px 0 0 var(--orange-300);
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.9rem;
    
    &:focus,
    &:hover {
      transform: translate(-1px, -1px);
      box-shadow: 1px 1px 0 0 var(--orange-300);
    }
  }
`
