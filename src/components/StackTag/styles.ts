import styled from 'styled-components'

export const StackTagContainer = styled.a`
  height: 3rem;
  padding: 12px 16px;
  cursor: pointer;
  color: var(--gray-100);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 10rem;
  width: fit-content;
  white-space: nowrap;
  border-radius: 4px;
  transition: var(--transition);
  background-color: var(--gray-800);
  border: 1px solid var(--gray-700);
  
  &:hover {
    background-color: var(--gray-700);
    color: var(--orange-300);
    border-color: var(--orange-300);
  }

  @media (max-width: 768px) {
    height: 2.5rem;
    padding: 8px 12px;
    font-size: 0.9rem;
    min-width: 8rem;
  }

  @media (max-width: 480px) {
    height: 2.2rem;
    padding: 6px 10px;
    font-size: 0.85rem;
    min-width: 7rem;
    gap: 6px;
  }
`
