import styled from 'styled-components'

export const TabItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding: 12px 16px;
  transition: var(--transition);
  border-radius: 4px;
  
  > span {
    color: var(--gray-300);
    font-size: 1rem;
    transition: var(--transition);
    white-space: nowrap;
  }
  
  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -2px;
    width: 2px;
    background-color: var(--orange-300);
  }
  
  &:hover {
    background-color: var(--orange-700-30);
    
    > span {
      color: var(--orange-300);
    }
  }

  @media (max-width: 1024px) {
    padding: 10px 14px;
    
    > span {
      font-size: 0.95rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 8px 12px;
    flex-shrink: 0;
    
    > span {
      font-size: 0.9rem;
    }
    
    > div {
      left: 0;
      right: 0;
      height: 2px;
      bottom: -2px;
      top: auto;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    
    > span {
      font-size: 0.85rem;
    }
  }
`
